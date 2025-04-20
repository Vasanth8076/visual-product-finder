import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.visualproductfinder.app',
  appName: 'visual-product-finder',
  webDir: 'dist',
plugins:{
  FirebaseAuthentication: {
			"skipNativeAuth": false,
			"providers": ["google.com"]}
}

};

export default config;
