import { forwardRef } from "react";
import { Text } from "react-native";

import styles from "./styles";
import { textVariants } from "@foundation";

import type { Props } from "./types";

const StyledText = forwardRef<Text, Props>(
  ({ children, style, variant = "b1-m", ...props }, ref) => {
    const fontStyle = textVariants[variant];

    return (
      <Text
        ref={ref}
        style={[styles.text, fontStyle, style]}
        {...props}
        allowFontScaling={false}
      >
        {children}
      </Text>
    );
  }
);

export default StyledText;
