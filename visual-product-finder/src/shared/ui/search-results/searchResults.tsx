import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../search-bar/SearchBar.tsx";
import Loader from "../loader/Loader.tsx";


const API_KEY = import.meta.env.VITE_GOOGLE_SEARCH_API_KEY; 
const CX_ID = import.meta.env.VITE_GOOGLE_CX_ID;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get("q") || "";
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setLoading(false);
        return;
      }
      setLoading(true);
      setResults([]);
      try {
        const res = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX_ID}&q=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        setResults(data.items || []);
      } catch (err) {
        console.error("Failed to fetch results:", err);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <>
   <div style={{ padding: "24px" ,position:"fixed" , zIndex:1 , width:"90%" , background:"#fff"}}>
     <SearchBar />
     </div>
    <div style={{ padding: "24px" ,marginTop:"6rem", width:"90%"}} >
     <span style={{fontSize:"14px"}}> Results for: <em>{query}</em></span>

      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
         {results.map((item, index) => {
  const imageUrl = item.pagemap?.cse_image?.[0]?.src;

  return (
    <div
  key={index}
  style={{
    padding: "16px",
    borderRadius: "8px",
    background: "#ffffff",
    color: "#000",
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}
>
  {imageUrl && (
    <img
      src={imageUrl}
      alt={item.title}
      style={{ width: "120px", height: "auto", borderRadius: "6px" }}
    />
  )}
  <div>
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      <h3 style={{ color: "#1a0dab" }}>{item.title}</h3> {/* Google blue link */}
    </a>
    <p style={{ color: "#202124" }}>{item.snippet}</p> {/* Slightly darker text */}
    <small style={{ color: "#5f6368" }}>{item.displayLink}</small> {/* Muted gray */}
  </div>
</div>

  );
})}
        </div>
      )}
    </div>
    <Loader show={loading} />
    </>
  );
};

export default SearchResults;
