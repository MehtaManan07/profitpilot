import type { ReactNode } from "react";
import type { AccessibilityProps } from "react-native";
import colorSchemes from "./scheme";

export interface Props extends AccessibilityProps {
  label: string;
  testID?: string;
  onPress?: () => void;
  variant?: keyof typeof colorSchemes;
}


export type ButtonBackgroundProps = {
  children: ReactNode;
  backgroundColor: string;
};
