import { colors } from "@foundation";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  chipsWrapper: { gap: 12 },
  justifiedContent: { justifyContent: "space-between" },
  listStyles: { gap: 20, paddingLeft: 20, paddingRight: 20 },
  paddedWrapper: { paddingHorizontal: 20 },
  plusWrapper: {
    alignItems: "center",
    aspectRatio: 1,
    backgroundColor: colors.common.black,
    borderRadius: 9999,
    height: 40,
    justifyContent: "center",
  },
  row: { flexDirection: "row" },
  wrapper: {
    gap: 20,
  },
});

export default styles;
