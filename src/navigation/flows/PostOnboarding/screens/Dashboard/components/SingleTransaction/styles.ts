import { colors } from "@foundation";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  arrow: { aspectRatio: 1, height: 12 },
  detailsView: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },
  flipIcon: {
    transform: [{ rotate: "180deg" }],
  },
  image: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: colors.common.gray,
    borderRadius: 9999,
    height: 32,
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
