import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DashboardScreen,
  CardsScreen,
  StatsScreen,
  ScannerScreen,
} from "./screens";
import { PostOnboardingFlowStackParamList } from "./types";
import { NavigationContainer } from "@react-navigation/native";
import navigatorOptions from "./navigatorOptions";
const PostOnboardingFlowStack =
  createNativeStackNavigator<PostOnboardingFlowStackParamList>();
const PostOnboardingFlow = () => {
  return (
    <NavigationContainer>
      <PostOnboardingFlowStack.Navigator
        initialRouteName="Dashboard"
        screenOptions={navigatorOptions}
      >
        <PostOnboardingFlowStack.Screen
          component={DashboardScreen}
          name="Dashboard"
        />
        <PostOnboardingFlowStack.Screen component={CardsScreen} name="Cards" />
        <PostOnboardingFlowStack.Screen component={StatsScreen} name="Stats" />
        <PostOnboardingFlowStack.Screen
          component={ScannerScreen}
          name="Scanner"
        />
      </PostOnboardingFlowStack.Navigator>
    </NavigationContainer>
  );
};

export default PostOnboardingFlow;
