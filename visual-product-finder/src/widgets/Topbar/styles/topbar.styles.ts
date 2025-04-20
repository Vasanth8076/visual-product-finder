import styled from '@emotion/styled';
export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  background-color: #ffffffcc; // semi-transparent white
  backdrop-filter: blur(8px);  // for glass effect
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
`;

export const Content = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
