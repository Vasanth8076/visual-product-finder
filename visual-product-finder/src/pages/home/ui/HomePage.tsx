

import React, { useState } from "react";
import { Avatar, Container, Feed, GoogleLogo, Header, Logo, SearchWrapper, SignInButton } from "../styles/homepage.styles.ts";
import { signInWithGoogle, signOutUser } from "../../../features/auth/model/actions.ts";
import { UserDropdown } from "../../../shared/ui/user-dropdown/userDropdown.tsx";
import google_logo_light from "../../../assets/Google_light_logo.png";
import  SearchBar  from "../../../shared/ui/search-bar/SearchBar.tsx";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import google_labes from "../../../assets/google_labs.png";
import { darkTheme } from "../../../shared/theme/theme.ts";
import Loader from "../../../shared/ui/loader/Loader.tsx";
import Fidgets from "../../../shared/ui/fidgets/Fidgets.tsx";

const HomePage = () => {

  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    signInWithGoogle(); 
    setLoading(false);
  };


  const handleSignOut = async () => {
    try {
      await signOutUser();
      setUser(null);
      setShowDropdown(false);
    } catch (err) {
      console.error("Failed to sign out", err);
    }
  };
  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <><Container>
      <Header>
        <img src={google_labes} alt="Google Labs" style={{ height: "42px", width: "42px" }} />
        {user ? (
          <Avatar src={user?.photoURL ?? ""} onClick={() => setShowDropdown(prev => !prev)} alt="User Avatar" crossOrigin="anonymous" />
        ) : (
          <SignInButton onClick={handleSignIn}>Sign in</SignInButton>
        )}
      </Header>

      <Logo>
        {darkTheme ? (
          <GoogleLogo src={google_logo_light} alt="Google Logo" />) : (<GoogleLogo src={google_logo_light} alt="Google Logo" />)}
      </Logo>

      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>

    <Fidgets />

      <Feed>
        <p>Trending Now</p>
      </Feed>
      {user && showDropdown && (
        <UserDropdown user={user} onSignOut={handleSignOut} onClose={handleCloseDropdown} />
      )}
    </Container><Loader show={loading} /></>
  );
};

export default HomePage;
