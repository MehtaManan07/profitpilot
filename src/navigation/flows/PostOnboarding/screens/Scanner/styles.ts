import { colors } from "@foundation";
import { getShadowProps } from "@utils";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomButton: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  container: { alignItems: "center", flex: 1, justifyContent: "center" },
  itemContainer: {
    backgroundColor: colors.common.white,
    height: 70,
    justifyContent: "center",
    marginTop: 30,
    width: "100%",
    ...getShadowProps(),
    paddingLeft: 20,
  },
});

export default styles;
