import { StyledText } from "@components";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";
import { Props } from "./types";

const TransactionChip = ({ title, flipIcon }: Props) => {
  return (
    <View style={styles.wrapper}>
      <FastImage
        source={require("@assets/common/diagonal-arrow.png")}
        style={[styles.icon, flipIcon ? styles.flipIcon : null]}
      />
      <StyledText>{title}</StyledText>
    </View>
  );
};

export default TransactionChip;
