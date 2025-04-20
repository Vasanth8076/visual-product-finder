import { Filesystem, Directory } from '@capacitor/filesystem';
import { CapacitorHttp } from '@capacitor/core';
import { Capacitor , } from '@capacitor/core';

export const downloadAndSaveImage = async (url: string, fileName: string) => {
  const path = `images/${fileName}.jpeg`;

  // For web, directly use the URL to render the image
  if (Capacitor.platform === "isWeb") {
    return url; // No need to download or store the image, just return the URL
  } else {
    // For Android/iOS, download and store the image
    try {
      const existing = await Filesystem.readFile({
        path,
        directory: Directory.Data,
      });

      return existing.data; // Return the saved image if it exists
    } catch {
      // Not found – download it
      const response = await CapacitorHttp.get({
        url,
        responseType: 'arraybuffer', // Use arraybuffer for binary data
      });

      const blob = new Blob([new Uint8Array(response.data)], { type: 'image/jpeg' });
      const base64Data = await blobToBase64(blob);

      await Filesystem.writeFile({
        path,
        data: base64Data,
        directory: Directory.Data,
      });

      const uri = await Filesystem.getUri({ path, directory: Directory.Data });
      return uri.uri; // Return the file URI for native platforms
    }
  }
};

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve((reader.result as string).split(',')[1]);
    };
    reader.readAsDataURL(blob);
  });
};
