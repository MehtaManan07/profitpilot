import { View } from "react-native";
import styles from "./styles";
const whiteOpacityColor = "rgba(0,0,0,0.32)";
const Pagination: React.FC<{
  index: number;
  backgroundColor: string;
  currentIndex: number;
}> = (props) => {
  const { index, backgroundColor, currentIndex } = props;
  const isActive = currentIndex === index;
  const width = isActive ? 6 : 4;

  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: isActive ? backgroundColor : whiteOpacityColor,
          width,
        },
      ]}
    />
  );
};

export default Pagination;
