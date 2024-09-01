import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { Platform } from "react-native";

const navigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "slide_from_right",
  orientation: "portrait",
  freezeOnBlur: true,
  animationDuration: Platform.OS === "ios" ? 300 : 0,
};

export default navigatorOptions;
