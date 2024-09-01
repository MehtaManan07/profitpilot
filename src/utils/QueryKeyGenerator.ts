const QueryKeyGenerator = {
  Transactions: () => ["transactions", "local"],
  Cards: () => ["cards", "local"],
  Auth: () => ["auth", "local"],
} as const;

export default QueryKeyGenerator;