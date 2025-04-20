import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: transparent;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background: #2d2d2d;
  border-radius: 20px;
  padding: 1.5rem;
  width: 340px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
  color: white;
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ccc;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserEmail = styled.div`
  font-size: 0.95rem;
  color: #ccc;
  margin-bottom: 0.5rem;
`;

export const UserAvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Greeting = styled.div`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ManageButton = styled.button`
  margin-top: 1rem;
  background: none;
  border: 1px solid #888;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #8ab4f8;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Footer = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
  text-align: center;
  color: #888;
`;
