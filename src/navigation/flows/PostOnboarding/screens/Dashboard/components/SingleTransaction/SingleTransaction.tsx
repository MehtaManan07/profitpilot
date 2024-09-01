import { StyledText } from "@components";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { Props } from "./types";
import styles from "./styles";
import { colors } from "@foundation";
import { formatTimestampToTime } from "@utils";

const transactionTypeMap = {
  sent: {
    flipIcon: true,
    text: "Transfer to",
  },
  received: {
    flipIcon: false,
    text: "Received from",
  },
};

const SingleTransaction = ({ transaction }: Props) => {
  const isSent = transaction.type === "sent";
  return (
    <View style={styles.wrapper}>
      <View style={styles.detailsView}>
        <View style={styles.image}>
          <FastImage
            source={require("@assets/common/diagonal-arrow.png")}
            style={[styles.arrow, isSent ? styles.flipIcon : null]}
          />
        </View>
        <View>
          <StyledText>
            {transactionTypeMap[transaction.type]["text"]}{" "}
            {transaction.counterpart}
          </StyledText>
          <StyledText variant="b2-m">
            {formatTimestampToTime(new Date(transaction.timestamp))}
          </StyledText>
        </View>
      </View>
      <StyledText>
        <StyledText
          style={{
            color: isSent ? colors.common.red : colors.common.brightGreen,
          }}
        >
          {isSent ? "- " : "+ "}
        </StyledText>
        {transaction.amount}
      </StyledText>
    </View>
  );
};

export default SingleTransaction;
