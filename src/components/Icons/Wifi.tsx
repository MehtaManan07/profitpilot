import { Circle, Path, Svg } from "react-native-svg";
import { Props } from "./types";
import { View } from "react-native";

const WifiIcon = ({ size, ...props }: Props) => (
  <View style={{ aspectRatio: 1, width: size }}>
    <Svg
      fill="#000"
      height="64px"
      viewBox="0 0 365.892 365.892"
      width="64px"
      {...props}
    >
      <Circle cx={182.945} cy={286.681} r={41.494} />
      <Path d="M182.946 176.029c-35.658 0-69.337 17.345-90.09 46.398-5.921 8.288-4.001 19.806 4.286 25.726a18.358 18.358 0 0010.704 3.438c5.754 0 11.423-2.686 15.021-7.724 13.846-19.383 36.305-30.954 60.078-30.954 23.775 0 46.233 11.571 60.077 30.953 5.919 8.286 17.437 10.209 25.726 4.288 8.288-5.92 10.208-17.438 4.288-25.726-20.751-29.055-54.43-46.399-90.09-46.399z" />
      <Path d="M182.946 106.873c-50.938 0-99.694 21.749-133.77 59.67-6.807 7.576-6.185 19.236 1.392 26.044a18.372 18.372 0 0012.32 4.725 18.397 18.397 0 0013.723-6.116c27.091-30.148 65.849-47.439 106.336-47.439s79.246 17.291 106.338 47.438c6.808 7.576 18.468 8.198 26.043 1.391 7.576-6.808 8.198-18.468 1.391-26.043-34.078-37.922-82.836-59.67-133.773-59.67z" />
      <Path d="M360.611 112.293c-47.209-48.092-110.305-74.577-177.665-74.577-67.357 0-130.453 26.485-177.664 74.579-7.135 7.269-7.027 18.944.241 26.079a18.377 18.377 0 0012.918 5.281 18.39 18.39 0 0013.161-5.522c40.22-40.971 93.968-63.534 151.344-63.534 57.379 0 111.127 22.563 151.343 63.532 7.136 7.269 18.812 7.376 26.08.242 7.268-7.135 7.376-18.811.242-26.08z" />
    </Svg>
  </View>
);

export default WifiIcon;
