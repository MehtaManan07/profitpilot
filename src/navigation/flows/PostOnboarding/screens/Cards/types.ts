import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PostOnboardingFlowStackParamList } from "../../types";

export type ICreditCard = {
  name: string;
  number: string;
  expiry: string;
  id: number;
};

export type Props = NativeStackScreenProps<
  PostOnboardingFlowStackParamList,
  "Cards"
>;

export type CardsNavProp = Props['navigation']