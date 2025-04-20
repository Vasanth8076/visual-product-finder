# Visual Product Finder - React + Capacitor

## Overview
This project is a **pixel-perfect clone of Google's Image Search Interface** built with **React.js** and **Capacitor.js**. It replicates core features from Google Lens, including text search, voice search, and image search functionalities. The app is designed to be fully responsive and optimized for both **web** and **Android** platforms.

The project also integrates **Google Vision API** for image recognition and **Google Custom Search API** for text and voice searches. Firebase Authentication is used for Google Sign-In.

## Features
### 1. **Google-style Homepage**
- Responsive, mobile-first design
- Google Sign-In integration using Firebase
- Search bar with text input, voice input (microphone icon), and image input (camera icon)

### 2. **Text Search**
- Search bar for text input with real-time autocomplete
- Integration with **Google Custom Search API** for text search results
- Displays mock result cards styled like Google search results

### 3. **Voice Search**
- Microphone icon to trigger speech-to-text functionality
- Recognized speech populates the search bar

### 4. **Image Search via Google Lens**
- Camera icon for taking a picture with the device’s camera, including a cropping tool
- Option to upload images from the gallery
- Integration with **Google Vision API** for image recognition
- Displays mock visual search results in a styled grid format

### 5. **Cross-Platform Support**
- Fully responsive UI that adapts to both mobile and desktop views
- Built using **Capacitor.js** for hybrid mobile app support (Android and web)

## Tech Stack
- **Frontend:** React.js, TypeScript
- **Styling:** @emotion-styled
- **Backend Services:**
  - **Google Vision API** for image recognition
  - **Google Custom Search API** for text and voice search
  - **Firebase** for Google Sign-In authentication
- **Deployment:** Vercel for hosting the web app

## Project Structure (FSD Architecture)


Setup and Installation

To run the project locally:

Clone the repository:

    git clone https://github.com/Vasanth8076/visual-product-finder.git
Navigate to the project directory:

     cd visual-product-finder
Install dependencies:

      npm install
Set up environment variables:

Create a .env file in the root directory.

Add the following variables (you'll need to fill them with your own API keys and credentials):

      VITE_FIREBASE_API_KEY=your-firebase-api-key
      VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
      VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
      VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
      VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
      VITE_FIREBASE_APP_ID=your-firebase-app-id
      VITE_GOOGLE_VISION_API_KEY = your-google-vision-api-key
      VITE_GOOGLE_SEARCH_API_KEY = your-google-search-api-key
      VITE_GOOGLE_CX_ID = your-google-cx-id
      VITE_GOOGLE_VISION_ENDPOINT= your-google-vision-endpoint
      VITE__GOOGLE_SEARCH_ENDPOINT= your-google-search-endpoint

Run the project locally:

npm run dev
This will start the development server, and you can view the project at http://localhost:5173 in your browser.

For Android, you can build and run the app using Capacitor:

     npx cap sync


     npx cap open android

<img width="559" alt="image" src="https://github.com/user-attachments/assets/17ea1d45-dfa1-4a8b-9f7b-117f5d851a77" />

