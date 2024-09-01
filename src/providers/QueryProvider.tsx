import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

interface Props {
  children?: ReactNode;
}

const QueryProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const useQueryClient = () => queryClient;

export default QueryProvider;
export { queryClient, useQueryClient };
