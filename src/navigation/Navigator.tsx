import { useAuth } from "hooks";
import { PostOnboardingFlow, OnboardingFlow } from "./flows";
import { Show } from "@components";

const Navigator = () => {
  const { data } = useAuth();
  return (
    <Show
      fallback={<OnboardingFlow />}
      when={(data?.token?.length ?? 0) > 0}
    >
      <PostOnboardingFlow />
    </Show>
  );
};

export default Navigator;
