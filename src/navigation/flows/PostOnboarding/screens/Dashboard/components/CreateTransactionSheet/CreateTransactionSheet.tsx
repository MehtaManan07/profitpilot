import { View } from "react-native";
import { useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";

import { BaseButton, Select, SelectRef, StyledText } from "@components";

import styles from "./styles";
import { Props } from "./types";
import { ITransaction } from "../../types";
import { useQueryClient } from "@providers";
import { TransactionQueryData } from "hooks/useHandleTransactions";
import { QueryKeyGenerator } from "@utils";
import { useHandleCards, useHandleTransactions } from "hooks";
import { CardsQueryData } from "hooks/useHandleCards";
import Toast from "react-native-toast-message";

const CreateTransactionSheet = ({ closeSheet }: Props) => {
  const [number, setNumber] = useState("");
  const [payee, setPayee] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const cardRef = useRef<SelectRef>(null);
  const queryClient = useQueryClient();
  const { data: cards } = useHandleCards();
  const { data } = useHandleTransactions();

  const onPressSubmit = () => {
    if (!number || !payee || !cardDetails) {
      return;
    }
    const card = cards?.cards.find(
      (card) => card.accountNumber === cardDetails.split(" - ")[0]
    );
    if (!card) {
      return;
    }
    const currentBalance = card.balance;
    if (currentBalance < parseFloat(number)) {
      Toast.show({
        type: "info",
        text1: "Insufficient funds",
        visibilityTime: 3000,
      });
      return;
    }
    const transaction: ITransaction = {
      amount: parseFloat(number),
      counterpart: payee,
      currency: card.currency,
      id: (data?.transactions?.length ?? 0) + 1,
      timestamp: new Date(),
      type: "sent",
      cardId: card.id,
    };

    queryClient.setQueryData<TransactionQueryData>(
      QueryKeyGenerator.Transactions(),
      (prev?: TransactionQueryData) => {
        if (!prev)
          return {
            transactions: [transaction],
          };
        return { transactions: [transaction, ...prev.transactions] };
      }
    );

    queryClient.setQueryData<CardsQueryData>(
      QueryKeyGenerator.Cards(),
      (prev?: CardsQueryData) => {
        if (!prev) return prev;
        return {
          cards: prev.cards.map((c) => {
            if (c.id === card.id) {
              return {
                ...c,
                balance: c.balance - parseFloat(number),
              };
            } else {
              return c;
            }
          }),
        };
      }
    );

    setCardDetails("");
    setPayee("");
    setNumber("");
    setTimeout(() => {
      closeSheet();
    }, 0);
  };

  return (
    <View style={styles.wrapper}>
      <StyledText variant="h1">Add Transaction</StyledText>
      <View style={{ gap: 4, marginTop: 12 }}>
        <StyledText>Add amount</StyledText>
        <TextInput
          keyboardType="numeric"
          placeholder="3900"
          style={styles.input}
          value={number}
          onChangeText={setNumber}
        />
      </View>
      <View style={{ gap: 4 }}>
        <StyledText>Who are you paying to?</StyledText>
        <TextInput
          placeholder="Alice..."
          style={styles.input}
          value={payee}
          onChangeText={setPayee}
        />
      </View>
      <View style={{ gap: 4 }}>
        <StyledText>Select Card</StyledText>
        <Select
          ref={cardRef}
          size="lg"
          data={
            cards?.cards.map(
              (card) =>
                `${card.accountNumber + " - " + `(Balance is ${card.balance})`}`
            ) ?? []
          }
          onSelect={setCardDetails}
        />
      </View>
      <BaseButton label="Save transaction" onPress={onPressSubmit} />
    </View>
  );
};

export default CreateTransactionSheet;
