import styled from "@emotion/styled";

 export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  box-sizing: border-box;
  max-width: 100vw;
  min-width: 100vw;
`;

 export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
 cursor: pointer;
  border: 1px solid #ccc;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

export const SignInButton = styled.button`
  background-color: #cfeaff;
  color: #111;
  border: none;
  padding: 0.35rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  height: 3.0rem;

  &:hover {
    background-color: #b8dcf7;
  }

  &:active {
    background-color: #a0cfee;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const GoogleLogo = styled.img`
  width: 100%;
  max-width: 280px;
  height: auto;
  
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const Fidgets = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

export const FidgetItem = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.card};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  text-align: center;
`;

export const Feed = styled.section`
  margin-top: auto;
  padding-bottom: 2rem;
`;


