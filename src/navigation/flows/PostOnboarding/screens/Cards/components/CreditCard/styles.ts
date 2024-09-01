import { colors } from "@foundation";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boldFont: { fontWeight: "bold" },
  bottomSection: {
    alignItems: "center",
    backgroundColor: colors.common.white,
    flexDirection: "row",
    gap: 32,
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  cardNumbers: { flexDirection: "row", justifyContent: "space-around" },
  onyxFont: { color: colors.typography.onyx },
  topBlackBg: { backgroundColor: colors.common.black },
  topGreenBg: { backgroundColor: colors.primary.green },
  topSection: {
    gap: 24,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  visa: { height: 24, width: 48 },
  wifi: { aspectRatio: 1, height: 24 },
  wrapper: { borderRadius: 20, overflow: "hidden" },
});

export default styles;
