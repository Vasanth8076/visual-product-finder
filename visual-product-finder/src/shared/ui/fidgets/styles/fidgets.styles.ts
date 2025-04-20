// shared/ui/fidgets/styles.ts
import styled from "@emotion/styled";



export const FidgetItem = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  color: #5f6368;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(60, 64, 67, 0.1);
  }

  &:focus {
    outline: none;
    background-color: rgba(60, 64, 67, 0.2);
  }
`;

export const FidgetsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 3rem 16px;
  align-items: center;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;
