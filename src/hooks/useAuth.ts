import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { useQueryClient } from "@providers";

import { QueryKeyGenerator } from "@utils";

export type QueryData = {
  token: string;
};
interface Options<TData>
  extends Omit<
    UseQueryOptions<QueryData, unknown, TData, string[]>,
    "queryKey" | "queryFn" | "cacheTime" | "select"
  > {
  select?: (data: QueryData) => TData;
}

const useAuth = <T = QueryData>(options?: Options<T>) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: QueryKeyGenerator.Auth(),
    queryFn: async ({ queryKey }) => {
      const previousData = queryClient.getQueryData<QueryData>(queryKey);

      // TODO: Handle de-duplication.
      if (previousData) {
        return previousData;
      } else {
        return {
          token: "",
        };
      }
    },
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    ...options,
  });

  return query;
};

export default useAuth;
export type { QueryData as AuthQueryData };
