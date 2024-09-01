import { colors } from "@foundation";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listStyles: {
    gap: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
  month: {
    paddingHorizontal: 6 + 4,
    paddingVertical: 4 + 4,
  },
  monthWrapper: {
    backgroundColor: colors.common.white,
    borderRadius: 20,
    paddingVertical: 12,
  },
  selectedMonth: {
    backgroundColor: colors.primary.blue,
    borderRadius: 9999,
  },
  tabbar: { alignSelf: "center", paddingBottom: 64 },
  wrapper: { flex: 1, gap: 20, paddingHorizontal: 20 },
});

export default styles;
