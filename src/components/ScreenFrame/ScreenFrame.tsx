import { View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Props } from "./types";
import { colors } from "@foundation";

const ScreenFrame = ({ children, backgroundColor }: Props) => {
  const insets = useSafeAreaInsets();
  const wrapperStyle: ViewStyle = {
    paddingTop: Math.max(insets.top, 48),
    paddingBottom: insets.bottom,
    backgroundColor: backgroundColor ?? colors.common.gray,
    flex: 1,
  };
  return <View style={wrapperStyle}>{children}</View>;
};

export default ScreenFrame;
