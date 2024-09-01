import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  lgWrapper: {
    alignSelf: "stretch",
    borderRadius: 16,
    height: 52,
  },
  row: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    zIndex: Platform.select({ web: 1 }),
  },
  wrapper: {
    borderRadius: 16,
    gap: 8,
    justifyContent: "center",
  },
});

export default styles;
