import { Path, Svg } from "react-native-svg";
import { View } from "react-native";

import { Props } from "./types";
import { colors } from "@foundation";

const HomeIcon = ({ color = colors.common.black, size, ...props }: Props) => (
  <View style={{ aspectRatio: 1, width: size }}>
    <Svg fill="none" height="100%" viewBox="0 0 24 24" width="100%" {...props}>
      <Path
        d="M3 9h18M7 15h2m-2.8 4h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C21 17.48 21 16.92 21 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C19.48 5 18.92 5 17.8 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C3 6.52 3 7.08 3 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C4.52 19 5.08 19 6.2 19z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  </View>
);

export default HomeIcon;
