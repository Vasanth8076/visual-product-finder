
import { LucideImage, Languages, GraduationCap, Music } from "lucide-react";
import { FidgetsWrapper } from "./styles/fidgets.styles.ts";
import FidgetsItem from "./FidgetItems.tsx";

const fidgetsData = [
  { icon: LucideImage, bgColor: "#4d3c19", iconColor: "#ffce45" },      
  { icon: Languages, bgColor: "#2e3345", iconColor: "#aab9ff" },         
  { icon: GraduationCap, bgColor: "#293c35", iconColor: "#b7f5d8" },     
  { icon: Music, bgColor: "#3e2c2d", iconColor: "#ff8a91" },          
];

const Fidgets: React.FC = () => {
  return (
    <FidgetsWrapper>
      {fidgetsData.map((item, idx) => (
        <FidgetsItem
          key={idx}
          icon={item.icon}
          bgColor={item.bgColor}
          iconColor={item.iconColor}
        />
      ))}
    </FidgetsWrapper>
  );
};

export default Fidgets;
