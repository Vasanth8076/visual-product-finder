// shared/utils/loadGoogleCSE.ts
export const loadGoogleCSE = () => {
    if (document.getElementById("gcs-script")) return;
  
    const script = document.createElement("script");
    script.id = "gcs-script";
    script.src = "https://cse.google.com/cse.js?cx=410535a2f7d92642e8";
    script.async = true;
    document.body.appendChild(script);
  };
  