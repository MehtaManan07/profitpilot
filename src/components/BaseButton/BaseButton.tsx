import { Pressable, View } from "react-native";
import Animated from "react-native-reanimated";

import styles from "./styles";

import type { ButtonBackgroundProps, Props } from "./types";
import colorSchemes from "./scheme";
import StyledText from "../StyledText";

const BaseButton = ({
  label,
  testID,
  onPress,
  variant = "blue",
  ...props
}: Props) => {
  const colors = colorSchemes[variant];

  const labelStyle = {
    color: colors["contentColor"],
  };

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      testID={testID}
      onPress={onPress}
      {...props}
    >
      <ButtonBackground backgroundColor={colors.backgroundColor}>
        <Animated.View style={styles.row}>
          <StyledText style={labelStyle} variant="b1-m">{label}</StyledText>
        </Animated.View>
      </ButtonBackground>
    </Pressable>
  );
};

const ButtonBackground = ({
  children,
  backgroundColor,
}: ButtonBackgroundProps) => {
  const backgroundWrapperStyle = { backgroundColor: backgroundColor };

  return (
    <View style={[styles.lgWrapper, backgroundWrapperStyle]}>{children}</View>
  );
};

export default BaseButton;
