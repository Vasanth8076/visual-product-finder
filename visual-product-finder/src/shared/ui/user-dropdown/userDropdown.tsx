import React, { useEffect, useRef } from "react";
import { User } from "firebase/auth";
import {
  Avatar,
  CloseIcon,
  DropdownContainer,
  Footer,
  Greeting,
  Header,
  ManageButton,
  Overlay,
  UserAvatarSection,
  UserEmail,
} from "./styles/userdropdown.styles.ts";

interface Props {
  user: User;
  onSignOut: () => void;
  onClose: () => void;
}

export const UserDropdown: React.FC<Props> = ({ user, onSignOut, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <Overlay>
      <DropdownContainer ref={dropdownRef}>
        <CloseIcon onClick={onClose}>×</CloseIcon>
        <Header>
          <UserEmail>{user.email}</UserEmail>
          <UserAvatarSection>
            <Avatar src={user.photoURL ?? ""} />
            <Greeting>Hi, {user.displayName?.split(" ")[0].toUpperCase()}!</Greeting>
          </UserAvatarSection>
          <ManageButton>Manage your Google Account</ManageButton>
        </Header>

        <ManageButton style={{ marginTop: "1rem", backgroundColor: "#f44336", color: "white" }} onClick={onSignOut}>
          Sign out
        </ManageButton>

        <Footer>
          <span>Privacy policy</span> • <span>Terms of service</span>
        </Footer>
      </DropdownContainer>
    </Overlay>
  );
};
