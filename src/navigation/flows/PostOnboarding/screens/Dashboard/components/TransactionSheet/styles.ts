import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  justifiedContent: { justifyContent: "space-between" },
  row: { alignItems: "center", flexDirection: "row" },
  transactionsFallback: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  wrapper: {
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
});

export default styles;
