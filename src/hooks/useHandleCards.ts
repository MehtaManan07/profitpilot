import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { useQueryClient } from "@providers";

import { QueryKeyGenerator } from "@utils";
import { IBankCard } from "../navigation/flows/PostOnboarding/screens/Dashboard/types";

export type QueryData = {
  cards: IBankCard[];
};
interface Options<TData>
  extends Omit<
    UseQueryOptions<QueryData, unknown, TData, string[]>,
    "queryKey" | "queryFn" | "cacheTime" | "select"
  > {
  select?: (data: QueryData) => TData;
}

const useHandleCards = <T = QueryData>(options?: Options<T>) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: QueryKeyGenerator.Cards(),
    queryFn: async ({ queryKey }) => {
      const previousData = queryClient.getQueryData<QueryData>(queryKey);

      // TODO: Handle de-duplication.
      if (previousData) {
        return previousData;
      } else {
        return {
          cards: [],
        };
      }
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    ...options,
  });

  return query;
};

export default useHandleCards;
export type { QueryData as CardsQueryData };
