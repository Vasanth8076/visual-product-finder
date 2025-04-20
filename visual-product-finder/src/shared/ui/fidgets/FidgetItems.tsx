
import React from "react";
import styled from "@emotion/styled";
import { LucideIcon } from "lucide-react";

interface FidgetsItemProps {
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

const ItemWrapper = styled.div<{ bgColor: string }>`
  background-color: ${(p) => p.bgColor};
  width: 100px;
  height: 100px;
  border-radius: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 12px;
`;

const FidgetsItem: React.FC<FidgetsItemProps> = ({ icon: Icon, bgColor, iconColor }) => {
  return (
    <ItemWrapper bgColor={bgColor}>
      <Icon size={25} color={iconColor} />
    </ItemWrapper>
  );
};

export default FidgetsItem;
