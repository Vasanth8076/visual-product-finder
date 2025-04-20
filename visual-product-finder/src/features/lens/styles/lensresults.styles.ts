import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 130px 16px 32px; 
  background-color: #f5f5f5;
  color: #212121;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 80px 12px 24px;
  }
`;


export const Title = styled.h2`
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top:25px;
  color: #333;
`;

export const SubTitle = styled.h3`
  font-size: 14px;
  margin: 20px 0 12px;
  color: #444;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 480px) {
    height: 130px;
  }
`;

export const ProductTitle = styled.p`
  margin: 10px 0;
  font-weight: 600;
  font-size: 14px;
  color: #222;
`;

export const ProductLink = styled.a`
  color: #1a73e8;
  font-size: 13px;
  text-decoration: underline;

  &:hover {
    color: #0b59d2;
  }
`;

export const LabelCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 14px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`;

export const Label = styled.p`
  margin: 10px 0 6px;
  font-weight: 600;
  color: #333;
`;

export const Confidence = styled.span`
  color: #666;
  font-size: 14px;
`;

export const EmptyText = styled.p`
  text-align: center;
  font-size: 16px;
  color: #999;
`;

// Optional: Fixed search bar wrapper
export const SearchBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1024px;
  padding: 16px;
  background-color: #ffffff;
  z-index: 999;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;
