import { Path, Svg } from "react-native-svg";
import { View } from "react-native";

import { Props } from "./types";
import { colors } from "@foundation";

const ScannerIcon = ({ color = colors.common.black, size, ...props }: Props) => (
  <View style={{ aspectRatio: 1, width: size }}>
    <Svg fill="none" height="100%" viewBox="0 0 24 24" width="100%" {...props}>
      <Path
        d="M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2M2 12h20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </Svg>
  </View>
);

export default ScannerIcon;
