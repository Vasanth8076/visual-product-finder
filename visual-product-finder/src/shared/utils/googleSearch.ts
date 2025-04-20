// utils/googleSearch.ts
export const searchProductOnGoogle = async (query: string) => {
    const GOOGLE_CSE_API_KEY = import.meta.env.VITE_GOOGLE_SEARCH_API_KEY;
    const GOOGLE_CSE_CX =import.meta.env.VITE_GOOGLE_SEARCH_CX;
  
    const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_CSE_API_KEY}&cx=${GOOGLE_CSE_CX}&q=${encodeURIComponent(query)}&searchType=image`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    return data.items || []; 
  };
  