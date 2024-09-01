import { colors } from "@foundation";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerTitle: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8
  },
  iconWrapper: {
    backgroundColor: colors.common.white,
    borderRadius: 9999,
    padding: 4,
  },
  profilePic: {
    aspectRatio: 1,
    borderRadius: 9999,
    height: 40,
  },
  unreadWrapper: {
    aspectRatio: 1,
    backgroundColor: colors.common.brightGreen,
    borderColor: colors.common.white,
    borderRadius: 9999,
    borderWidth: 1.2,
    position: "absolute",
    right: 6,
    top: 0,
    width: 8,
    zIndex: 2,
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12
  },
});

export default styles;
