import { colors } from "@foundation";
import { getWindowWidth } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.common.white,
    borderRadius: 8,
    elevation: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: getWindowWidth() / 3,
  },
});

export default styles;
