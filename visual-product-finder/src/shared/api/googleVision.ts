export const sendToVisionAPI = async (base64Image: string) => {
    const apiKey = import.meta.env.VITE_GOOGLE_VISION_API_KEY;
    const endpoint = import.meta.env.VITE_GOOGLE_VISION_ENDPOINT;
  
    if (!apiKey || !endpoint) {
      throw new Error("Missing Google Vision API configuration in .env file");
    }
  
    const response = await fetch(`${endpoint}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requests: [
          {
            image: {
              content: base64Image,
            },
            features: [{ type: "LABEL_DETECTION", maxResults: 10 }],
          },
        ],
      }),
    });
  
    const result = await response.json();
  
    if (result.error) {
      throw new Error(result.error.message);
    }
  
    return result.responses[0].labelAnnotations || [];
  };
  