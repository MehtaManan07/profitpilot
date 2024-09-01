import { StatusBar } from "expo-status-bar";
import Navigator from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import QueryProvider from "@providers";
import { useInit } from "hooks";
import Toast from "react-native-toast-message";

const App = () => {
  useInit();
  return (
    <QueryProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <Navigator />
          <Toast />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryProvider>
  );
};

export default App;
