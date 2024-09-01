import { Pressable, View } from "react-native";
import { BaseButton, StyledText } from "@components";
import { FlatList } from "react-native-gesture-handler";

import ScreenFrame from "@components/ScreenFrame";

import { RootHeader } from "../../components";

import { CreditCard } from "./components";
import styles from "./styles";
import { useHandleCards } from "hooks";
import { useMemo } from "react";
import { IBankCard } from "../Dashboard/types";
import { Props } from "./types";
import Toast from "react-native-toast-message";

const CardsScreen = ({ navigation }: Props) => {
  const { data: cardsList } = useHandleCards();

  const cards = useMemo(() => {
    if (!cardsList) return [];
    return cardsList.cards;
  }, [cardsList]);

  const renderItem = ({ item, index }: { item: IBankCard; index: number }) => (
    <Pressable onPress={() => navigation.navigate("Stats", { card: item })}>
      <CreditCard card={item} variant={index % 2 != 0 ? "black" : "green"} />
    </Pressable>
  );
  const onPressAdd = () => {
    Toast.show({
      type: "info",
      text1: "You will be able to add a new card soon",
      visibilityTime: 3000,
    });
  };
  return (
    <ScreenFrame>
      <View style={styles.wrapper}>
        <RootHeader />
        <FlatList
          contentContainerStyle={styles.listStyles}
          data={cards}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <StyledText variant="h1-pro">My Cards</StyledText>
          }
        />
        <View style={styles.bottomButton}>
          <BaseButton label="Add New Card" onPress={onPressAdd} />
        </View>
      </View>
    </ScreenFrame>
  );
};

export default CardsScreen;
