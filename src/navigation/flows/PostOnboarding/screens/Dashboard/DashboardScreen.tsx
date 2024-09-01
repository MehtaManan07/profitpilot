import { Pressable, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { PlusIcon, ScreenFrame, StyledText } from "@components";
import { RootHeader } from "../../components";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import {
  BankCard,
  CreateTransactionSheet,
  TransactionChip,
  TransactionSheet,
} from "./components";
import { IBankCard, Props } from "./types";
import { colors } from "@foundation";

import {
  ANIMATION_CONFIGS,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { ReduceMotion } from "react-native-reanimated";
import { useHandleCards } from "hooks";
import Toast from "react-native-toast-message";

const DashboardScreen = ({ navigation }: Props) => {
  const [index, setIndex] = useState(0);
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const createTransactionSheetRef = React.useRef<BottomSheetModal>(null);

  const { data: cardsList } = useHandleCards();

  const cards = useMemo(() => {
    if (!cardsList) return [];
    return cardsList.cards;
  }, [cardsList]);

  const renderItem = ({ item, index }: { item: IBankCard; index: number }) => (
    <Pressable onPress={() => navigation.navigate("Stats", { card: item })}>
      <BankCard card={item} variant={index % 2 != 0 ? "grey" : "blue"} />
    </Pressable>
  );

  const onPressViewAll = () =>
    bottomSheetModalRef.current?.snapToIndex(1, { mass: 1 });

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const onChangeIndex = (index: number) => {
    setIndex(index);
  };

  const onPressRequest = () => {
    Toast.show({
      type: "info",
      text1: "Request feature is coming soon",
      visibilityTime: 3000,
    });
  };

  const onPressTransfer = () => createTransactionSheetRef.current?.present();

  return (
    <BottomSheetModalProvider>
      <ScreenFrame>
        <View style={styles.wrapper}>
          <View style={styles.paddedWrapper}>
            <RootHeader />
          </View>
          <View style={styles.paddedWrapper}>
            <StyledText variant="h1-pro">Account</StyledText>
          </View>
          <FlatList
            horizontal
            contentContainerStyle={styles.listStyles}
            data={cards}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
          <View
            style={[styles.row, styles.justifiedContent, styles.paddedWrapper]}
          >
            <View style={[styles.row, styles.chipsWrapper]}>
              <Pressable onPress={onPressRequest}>
                <TransactionChip flipIcon={false} title="Request" />
              </Pressable>
              <Pressable onPress={onPressTransfer}>
                <TransactionChip flipIcon title="Transfer" />
              </Pressable>
            </View>
            <View style={styles.plusWrapper}>
              <PlusIcon color={colors.common.white} />
            </View>
          </View>
        </View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          enableDismissOnClose={false}
          enableHandlePanningGesture={false}
          enablePanDownToClose={false}
          handleHeight={0}
          index={index}
          snapPoints={["40%", "70%"]}
          animationConfigs={{
            ...ANIMATION_CONFIGS,
            reduceMotion: ReduceMotion.Never,
          }}
          onChange={onChangeIndex}
        >
          <TransactionSheet index={index} onPressViewAll={onPressViewAll} />
        </BottomSheetModal>

        <BottomSheetModal ref={createTransactionSheetRef} snapPoints={["60%"]}>
          <CreateTransactionSheet
            closeSheet={() => createTransactionSheetRef.current?.close()}
          />
        </BottomSheetModal>
      </ScreenFrame>
    </BottomSheetModalProvider>
  );
};

export default DashboardScreen;
