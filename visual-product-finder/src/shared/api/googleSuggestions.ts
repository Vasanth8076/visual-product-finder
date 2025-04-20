export interface SearchSuggestion {
    title: string;
    link: string;
    snippet: string;
  }
  
  export const fetchSuggestions = async (query: string): Promise<SearchSuggestion[]> => {
    if (!query) return [];
  
    const apiKey = import.meta.env.VITE_GOOGLE_SEARCH_API_KEY;
    const cx = import.meta.env.VITE_GOOGLE_CX_ID;
    const endpoint = import.meta.env.VITE__GOOGLE_SEARCH_ENDPOINT;
  
    if (!apiKey || !cx || !endpoint) {
      console.error("Missing required .env variables for Google Custom Search");
      return [];
    }
  
    const url = `${endpoint}?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(query)}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.error) {
        console.error("Google Search API error:", data.error);
        return [];
      }
  
      return (data.items || []).slice(0, 5).map((item: any) => ({
        title: item.title,
        link: item.link,
        snippet: item.snippet,
      }));
    } catch (err) {
      console.error("Fetch suggestions failed:", err);
      return [];
    }
  };
  