import { View, Pressable } from "react-native";
import { useCallback, useMemo } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Show, StyledText } from "@components";
import { colors } from "@foundation";

import styles from "./styles";
import { Props } from "./types";
import SingleTransaction from "../SingleTransaction";
import { ITransaction } from "../../types";
import { useHandleTransactions } from "hooks";
import TabBar from "navigation/flows/PostOnboarding/components/TabBar";
import { getWindowHeight } from "@utils";

const TransactionSheet = ({ onPressViewAll, index }: Props) => {
  const tabbarTopOffset = getWindowHeight() * ((index + 1) * 0.3);
  const { data } = useHandleTransactions();
  const renderItem = useCallback(
    (item: ITransaction) => (
      <SingleTransaction key={item.timestamp.toString()} transaction={item} />
    ),
    []
  );
  const transactions = useMemo(() => {
    if (!data) return [];
    return data.transactions;
  }, [data]);

  const hasTransactions = transactions.length > 0;
  return (
    <>
      <View style={styles.wrapper}>
        <View style={[styles.row, styles.justifiedContent]}>
          <StyledText variant="h1">Transactions</StyledText>
          <Show when={hasTransactions}>
            <Pressable onPress={onPressViewAll}>
              <StyledText style={{ color: colors.typography.onyx }}>
                View All
              </StyledText>
            </Pressable>
          </Show>
        </View>

        <ScrollView
          contentContainerStyle={{ paddingBottom: 40 }}
          scrollEnabled={index === 1}
          showsVerticalScrollIndicator={false}
        >
          <Show
            when={hasTransactions}
            fallback={
              <View style={styles.transactionsFallback}>
                <StyledText variant="h1-pro">No Transactions yet😞</StyledText>
              </View>
            }
          >
            <>{transactions.map(renderItem)}</>
          </Show>
        </ScrollView>
      </View>
      <View
        style={{
          alignSelf: "center",
          position: "absolute",
          top: tabbarTopOffset,
        }}
      >
        <TabBar flow="home" />
      </View>
    </>
  );
};

export default TransactionSheet;
