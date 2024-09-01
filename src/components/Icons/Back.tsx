import { Path, Svg } from "react-native-svg";
import { View } from "react-native";

import { Props } from "./types";
import { colors } from "@foundation";

const BackIcon = ({ color = colors.common.black, size, ...props }: Props) => (
  <View style={{ aspectRatio: 1, width: size }}>
    <Svg fill="none" height="100%" viewBox="0 0 16 16" width="100%" {...props}>
      <Path
        d="M6.222 3.778c-1.627 1.25-2.44 2.046-3.703 3.704 1.266 1.627 2.09 2.423 3.703 3.703M3.482 7.481h10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
      />
    </Svg>
  </View>
);

export default BackIcon;
