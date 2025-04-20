import React from "react";

import { useLocation } from "react-router-dom";
import { CardGrid, Confidence, EmptyText, Image, Label, LabelCard, ProductCard, ProductLink, ProductTitle, SubTitle, Title, Wrapper } from "../styles/lensresults.styles.ts";
import SearchBar from "../../../shared/ui/search-bar/SearchBar.tsx";

const LensResultsPage = () => {
  const location = useLocation();
  const products = location.state?.products || [];
  const labels = location.state?.visionLabels || [];

  return (
    <><div style={{ padding: "24px", position: "fixed", zIndex: 1, width: "90%" , background: "#F5F5F5" }}>
      <SearchBar />
    </div><Wrapper>

        <Title> Search Results</Title>

        <SubTitle>Matched Products</SubTitle>
        <CardGrid>
          {products.length === 0 ? (
            <EmptyText>No products found.</EmptyText>
          ) : (
            products.map((item: any, index: number) => (
              <ProductCard key={index} onClick={() => window.open(item.link, "_blank")}>
                <Image src={item.image?.thumbnailLink || "https://via.placeholder.com/150"} alt={item.title} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductLink href={item.link} target="_blank">Visit</ProductLink>
              </ProductCard>
            ))
          )}
        </CardGrid>

        <SubTitle>Vision Labels</SubTitle>
        <CardGrid>
          {labels.map((label: any, index: number) => (
            <LabelCard key={index}>
              <Label>{label.description}</Label>
              <Confidence>Confidence: {(label.score * 100).toFixed(2)}%</Confidence>
            </LabelCard>
          ))}
        </CardGrid>
      </Wrapper></>
  );
};

export default LensResultsPage;


