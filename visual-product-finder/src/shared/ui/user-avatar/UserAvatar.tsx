// src/shared/ui/user-avatar/UserAvatar.tsx

import React from "react";
import { Avatar  } from "../../../pages/home/styles/homepage.styles.ts";

interface UserAvatarProps {
  photoURL: string | null;
  onClick: () => void;
  alt: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ photoURL, onClick, alt }) => {
  return (
    <Avatar
      src={photoURL ?? ""}
      onClick={onClick}
      alt={alt}
    />
  );
};

export default UserAvatar;
