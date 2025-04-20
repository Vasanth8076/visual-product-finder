import  {auth}  from "../../../../firebaseconfig.ts"; 
import { GoogleAuthProvider, OAuthProvider ,getAuth, signInWithCredential, signOut} from "firebase/auth";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";


const init = auth


export const signInWithGoogle = async () => {
  try {
    const result = await FirebaseAuthentication.signInWithGoogle();

    if (!result.credential.idToken) throw new Error("No idToken returned");

    const credential = GoogleAuthProvider.credential(result.credential.idToken, result.credential.accessToken);
    await signInWithCredential(getAuth(), credential);
  } catch (err) {
    console.error("Google Sign-in error:", err);
  }
};


export const signOutUser = async (): Promise<void> => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    console.error("Sign-out error:", error);
    throw error;
  }
};