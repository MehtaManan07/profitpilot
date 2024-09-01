import { colors } from "@foundation";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  divider: {
    backgroundColor: colors.common.gray,
    height: 1.2,
    width: "100%",
  },
  input: {
    borderRadius: 12,
    borderWidth: 0.7,
    height: 40,
    padding: 10,
  },
  results: {
    backgroundColor: colors.common.white,
    borderColor: colors.common.gray,
    borderRadius: 12,
    borderWidth: 1.2,
    paddingVertical: 4,
  },
  resultsWrapper: {
    left: 0,
    position: "absolute",
    right: 0,
    top: 44,
    zIndex: 2,
  },
  searchMenuList: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  tile: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 12,
  },
  tileLabel: { color: colors.common.black },
  tileLabelWrapper: { flex: 1 },
});

export default styles;
