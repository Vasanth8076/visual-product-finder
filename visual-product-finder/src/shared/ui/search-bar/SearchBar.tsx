import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchSvg from "../search-bar/assets/search_icon.svg";
import LensIcon from "../search-bar/assets/lens_icon.svg";
import MicIcon from "../search-bar/assets/mic_icon1.svg";
import { SpeechRecognition } from "@capacitor-community/speech-recognition";
import { searchProductOnGoogle } from "../../utils/googleSearch.ts";
import { fetchSuggestions } from "../../api/googleSuggestions.ts";
import { sendToVisionAPI } from "../../api/googleVision.ts";
import { Capacitor } from "@capacitor/core";

import {
  Icon,
  IconGroup,
  Input,
  SearchBarContainer,
  SearchWrapper,
  SuggestionsDropdown,
  TextGroup,
  LeftIcon,
  Title,
  Subtitle,
  SuggestionItem,
} from "./styles/searchBar.styles.ts";
import Loader from "../loader/Loader.tsx";

const SearchBar = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();


  const handleSearch = async (query: string) => {
    if (!query) return;
  
    setLoading(true);
    setShowSuggestions(false);
    try {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    } finally {
      setLoading(false); 
    }
  };
  

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current?.value) {
      e.preventDefault();
      setShowSuggestions(false);
      await handleSearch(inputRef.current.value);
    }
  };
  

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  
    if (!value) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
  
    const suggestions = await fetchSuggestions(value);
    setSuggestions(suggestions);
    setShowSuggestions(true);
  };
  
  const handleSuggestionClick = async (suggestion: any) => {
    if (inputRef.current) {
      inputRef.current.value = suggestion.title;
    }
    setLoading(true);
    try {
      navigate(`/search?q=${encodeURIComponent(suggestion.title)}`, {
        state: { suggestion },
      });
    } finally {
      setLoading(false);
    }
  };

  
  const handleMicClick = async () => {
    const isNative = Capacitor.isNativePlatform();

    if (isNative) {
      try {
        const available = await SpeechRecognition.available();
        if (!available) {
          alert("Speech recognition is not available on this device.");
          return;
        }

        const hasPermission = await SpeechRecognition.checkPermissions();
        if (!hasPermission) {
          const permissionResponse = await SpeechRecognition.requestPermissions();
          if (!permissionResponse) {
            alert("Permission denied for speech recognition.");
            return;
          }
        }

        const result = await SpeechRecognition.start({
          language: "en-US",
          maxResults: 1,
          partialResults: false,
          prompt: "Speak now",
          popup: true,
        });

        const transcript = result.matches?.[0];
        if (transcript && inputRef.current) {
          inputRef.current.value = transcript;
          handleSearch(transcript);
        }
      } catch (error) {
        console.error("Native speech recognition failed", error);
      }
    } else {
      if (!("webkitSpeechRecognition" in window)) {
        alert("Speech recognition not supported in this browser.");
        return;
      }

      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event: any) => {
        if (event.results.length > 0 && event.results[0].length > 0) {
          const transcript = event.results[0][0].transcript;
          if (inputRef.current) {
            inputRef.current.value = transcript;
            handleSearch(transcript);
          }
        }
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event);
        alert("Speech recognition error. Please try again.");
      };

      recognition.start();
    }
  };

  const handleLensClick = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "environment";

    input.onchange = async (event: any) => {
      const file = event.target.files?.[0];
      if (file) {
        try {
          setLoading(true);
          const base64 = await toBase64(file);
          const labels = await sendToVisionAPI(base64);
          const topLabel = labels?.[0]?.description;

          let products = [];
          if (topLabel) {
            products = await searchProductOnGoogle(topLabel);
          }

          navigate("/lens-results", {
            state: {
              visionLabels: labels,
              products: products,
            },
          });
        } catch (error) {
          console.error("Vision or Search API failed:", error);
        }finally {
          setLoading(false);
        }
      }
    };

    input.click();
  };
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>
        resolve((reader.result as string).split(",")[1]);
      reader.onerror = reject;
    });

    
  return (
    <SearchWrapper>
      <SearchBarContainer>
        <Icon src={SearchSvg} alt="Search" height="10" />
        <Input
          placeholder="Search or type a URL"
          ref={inputRef}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          value={query}
          onFocus={() => query && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        <IconGroup>
          <Icon src={MicIcon} alt="Mic" onClick={handleMicClick} />
          <Icon src={LensIcon} alt="Lens" onClick={handleLensClick} />
        </IconGroup>
      </SearchBarContainer>

      {suggestions.length > 0 && (
    <SuggestionsDropdown>
      {suggestions.map((s, i) => (
        <SuggestionItem key={i} onClick={() => handleSuggestionClick(s)} >
          <LeftIcon /> 
          <TextGroup >
            <Title>{s.title}</Title>
            {s.subtitle && <Subtitle>{s.subtitle}</Subtitle>}
          </TextGroup>
        </SuggestionItem>
      ))}
    </SuggestionsDropdown>
  )}
   <Loader show={loading} />
    </SearchWrapper>
  );
};

export default SearchBar;
