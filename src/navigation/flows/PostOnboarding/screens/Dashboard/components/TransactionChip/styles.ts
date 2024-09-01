import { colors } from "@foundation";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flipIcon: {
    transform: [{ rotate: "180deg" }],
  },
  icon: { aspectRatio: 1, height: 10 },
  wrapper: {
    alignItems: "center",
    backgroundColor: colors.common.white,
    borderRadius: 20,
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  }
});

export default styles;
