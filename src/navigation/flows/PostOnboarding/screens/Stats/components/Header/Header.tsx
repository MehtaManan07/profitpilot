import { Pressable, View } from "react-native";

import { BackIcon, StyledText } from "@components";
import { colors } from "@foundation";
import styles from "./styles";
import { Props } from "./type";

const Header = ({ navigateToPrevScreen }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={navigateToPrevScreen}>
        <BackIcon color={colors.common.black} size={20} />
      </Pressable>
      <StyledText variant="h1">Statistics</StyledText>
      <View style={styles.rightIcon}>
        <BackIcon color={colors.common.black} size={20} />
      </View>
    </View>
  );
};

export default Header;
