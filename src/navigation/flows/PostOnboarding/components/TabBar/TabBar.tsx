import { Pressable, View } from "react-native";

import { CardIcon, HomeIcon, ScannerIcon } from "@components";
import { colors } from "@foundation";

import styles from "./styles";
import { Props } from "./types";
import { useNavigation } from "@react-navigation/native";
import { CardsNavProp } from "../../screens/Cards/types";

const TabBar = ({ flow }: Props) => {
  const navigation = useNavigation<CardsNavProp>();
  const navigateToHome = () => {
    navigation.navigate("Dashboard");
  };
  const navigateToCards = () => {
    navigation.navigate("Cards");
  };
  const navigateToScanner = () => {
    navigation.navigate("Scanner");
  };
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={navigateToHome}>
        <HomeIcon
          color={flow === "home" ? colors.common.black : colors.typography.onyx}
          size={16}
        />
      </Pressable>
      <Pressable onPress={navigateToScanner}>
        <ScannerIcon
          size={16}
          color={
            flow === "scanner" ? colors.common.black : colors.typography.onyx
          }
        />
      </Pressable>
      <Pressable onPress={navigateToCards}>
        <CardIcon
          size={16}
          color={
            flow === "cards" ? colors.common.black : colors.typography.onyx
          }
        />
      </Pressable>
    </View>
  );
};

export default TabBar;
