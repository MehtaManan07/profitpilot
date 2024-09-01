import { MMKV } from "react-native-mmkv";

const STORAGE_ENCRYPTION_KEY = "profitpilot-wer3roueborb0945hr4trhi";

const primitiveStorage = new MMKV({
  id: "profitpilot-storage",
  encryptionKey: STORAGE_ENCRYPTION_KEY,
});

export const storageKeys = {
  transactions: "transactions list",
  cards: "cards list",
  authToken: "auth token",
};

export default primitiveStorage;
