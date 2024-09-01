import { IBankCard } from "./screens/Dashboard/types";

export type PostOnboardingFlowStackParamList = {
  Dashboard: undefined;
  Cards: undefined;
  Scanner: undefined;
  Stats: { card: IBankCard };
};
