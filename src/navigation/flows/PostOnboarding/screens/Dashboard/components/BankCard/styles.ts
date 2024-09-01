import { colors } from "@foundation";
import { getWindowWidth } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  currencyIcon: { aspectRatio: 1, borderRadius: 9999, width: 20 },
  currencyWrapper: {
    backgroundColor: colors.common.white,
    borderRadius: 9999,
    gap: 8,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  justifiedContent: { justifyContent: "space-between" },
  row: { alignItems: "center", flexDirection: "row" },
  visa: { height: 24, width: 48 },
  whiteText: { color: colors.common.white },
  wrapper: {
    borderRadius: 20,
    gap: 24,
    minWidth: getWindowWidth() * 0.65,
    overflow: "hidden",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  wrapperBlueBg: { backgroundColor: colors.primary.blue },
  wrapperGreyBg: { backgroundColor: colors.common.darkGray },
});

export default styles;
