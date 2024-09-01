export type IBankCard = {
  balance: number;
  currency: "USD" | "INR";
  accountNumber: string;
  validThrough: string;
  id: number;
  name: string;
};

export interface ITransaction {
  id: number; // Unique identifier for the transaction
  type: "sent" | "received"; // Indicates whether the transaction was sent or received
  counterpart: string; // Name of the person involved in the transaction (either sent to or received from)
  amount: number; // Transaction amount
  currency: "USD" | "INR"; // Currency type
  timestamp: Date; // Date and time of the transaction
  cardId: number; // Unique identifier of the card involved in the transaction
}

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PostOnboardingFlowStackParamList } from "../../types";

export type Props = NativeStackScreenProps<
  PostOnboardingFlowStackParamList,
  "Dashboard"
>;
