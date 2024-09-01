import { useQueryClient } from "@providers";
import { primitiveStorage, QueryKeyGenerator, storageKeys } from "@utils";
import { useEffect } from "react";
import { AppState } from "react-native";
import { TransactionQueryData } from "./useHandleTransactions";
import { CardsQueryData } from "./useHandleCards";
import { initialData } from "@utils/initialCardData";
import { AuthQueryData } from "./useAuth";

const useInit = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const handleAppStateChange = (state: string) => {
      if (state === "active") {
        const transactions = JSON.parse(
          primitiveStorage.getString(storageKeys.transactions) ?? "[]"
        );

        queryClient.setQueryData<TransactionQueryData>(
          QueryKeyGenerator.Transactions(),
          { transactions }
        );

        const cards = JSON.parse(
          primitiveStorage.getString(storageKeys.cards) ?? "[]"
        );

        queryClient.setQueryData<CardsQueryData>(QueryKeyGenerator.Cards(), {
          cards: cards.length > 0 ? cards : initialData,
        });

        const token = primitiveStorage.getString(storageKeys.authToken) ?? "";

        queryClient.setQueryData<AuthQueryData>(QueryKeyGenerator.Auth(), {
          token,
        });
      } else if (state === "background") {
        const allTransactions = queryClient.getQueryData<TransactionQueryData>(
          QueryKeyGenerator.Transactions()
        );
        if (allTransactions) {
          primitiveStorage.set(
            storageKeys.transactions,
            JSON.stringify(allTransactions.transactions)
          );
        }

        const allCards = queryClient.getQueryData<CardsQueryData>(
          QueryKeyGenerator.Cards()
        );
        if (allCards && allCards.cards.length > 0) {
          primitiveStorage.set(
            storageKeys.cards,
            JSON.stringify(allCards.cards)
          );
        }

        const authData = queryClient.getQueryData<AuthQueryData>(
          QueryKeyGenerator.Auth()
        );
        if (authData && authData.token.length > 0) {
          primitiveStorage.set(storageKeys.authToken, authData.token);
        }
      }
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, [queryClient]);
};

export default useInit;
