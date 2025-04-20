import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff; // <- white background
  border-radius: 50px;
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 700px;
 min-width: clamp(60vw, 100%, 95vw); 
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    border-radius: 32px;
    padding: 0.3rem 0.6rem;
  }
`;


export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  opacity: 1;
  cursor: pointer;
`;


export const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  background: transparent;
  color: #000; // <- changed to black text
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #666;
  }
`;


export const IconGroup = styled.div`
  display: flex;
  gap: 1rem;
`;


export const SuggestionsDropdown = styled.div`
  background-color: #fff;
  color: #000;
  border-radius: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 3rem;
  padding: 0.5rem 0;
  
 min-width: clamp(38vw, 100%, 62vw); 
  position: absolute;
  z-index: 10;
`;

export const SuggestionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f1f3f4;
  }
`;

export const LeftIcon = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 16px;
`;

export const Subtitle = styled.span`
  font-size: 12px;
  color: #555;
`;
