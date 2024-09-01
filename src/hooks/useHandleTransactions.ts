import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { useQueryClient } from "@providers";

import { QueryKeyGenerator } from "@utils";
import { ITransaction } from "../navigation/flows/PostOnboarding/screens/Dashboard/types";

export type QueryData = {
  transactions: ITransaction[];
};
interface Options<TData>
  extends Omit<
    UseQueryOptions<QueryData, unknown, TData, string[]>,
    "queryKey" | "queryFn" | "cacheTime" | "select"
  > {
  select?: (data: QueryData) => TData;
}

const useTransactionDataQuery = <T = QueryData>(options?: Options<T>) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: QueryKeyGenerator.Transactions(),
    queryFn: async ({ queryKey }) => {
      const previousData = queryClient.getQueryData<QueryData>(queryKey);

      // TODO: Handle de-duplication.
      if (previousData) {
        return previousData;
      } else {
        return {
          transactions: [],
        };
      }
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    ...options,
  });

  return query;
};

export default useTransactionDataQuery;
export type { QueryData as TransactionQueryData };
