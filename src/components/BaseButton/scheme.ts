import { colors } from "@foundation";

export type ColorSchemeColors = {
  backgroundColor: string;
  contentColor: string;
};
const colorSchemes = {
  black: {
    backgroundColor: colors.common.black,
    contentColor: colors.common.white,
  },
  blue: {
    backgroundColor: colors.primary.blue,
    contentColor: colors.common.black,
  },
} as const satisfies Record<string, ColorSchemeColors>;

export default colorSchemes;
