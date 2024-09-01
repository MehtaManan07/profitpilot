import { View } from "react-native";
import FastImage from "react-native-fast-image";

import { StyledText } from "@components";

import styles from "./styles";
import { Props } from "./types";
const currencyMap = {
  USD: {
    symbol: "$",
    icon: "https://media.istockphoto.com/id/1490774609/photo/fourth-of-july-independence-day-full-frame-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=h2BEasoJYJGEuKDYLgw1A1DLtxmKXb1IPw8KzGLKOTI=",
    title: "US Dollar",
  },
  INR: {
    symbol: "₹",
    icon: "https://media.istockphoto.com/id/1295926601/photo/national-flag-of-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=YpbHawVrxiMUOj0Bg8jOsc-HqKA-svyxZV1LMnG5d7A=",
    title: "Indian Rupee",
  },
};
const BankCard = ({ card, variant }: Props) => {
  return (
    <View
      style={[
        styles.wrapper,
        variant === "grey" ? styles.wrapperGreyBg : styles.wrapperBlueBg,
      ]}
    >
      <View style={[styles.row, styles.justifiedContent]}>
        <View style={[styles.row, styles.currencyWrapper]}>
          <FastImage
            source={{ uri: currencyMap[card.currency]["icon"] }}
            style={styles.currencyIcon}
          />
          <StyledText>{currencyMap[card.currency]["title"]}</StyledText>
        </View>
        <FastImage
          source={require("@assets/common/visa-logo.png")}
          style={styles.visa}
        />
      </View>
      <View>
        <StyledText style={styles.whiteText} variant="b2-m">
          Your Balance
        </StyledText>
        <StyledText style={{ fontWeight: "bold" }} variant="h1-pro">
          {currencyMap[card.currency]["symbol"] + " " + card.balance}
        </StyledText>
      </View>
      <View style={[styles.row, styles.justifiedContent]}>
        <View style={{ gap: 2 }}>
          <StyledText style={styles.whiteText} variant="b2-m">
            Account Number
          </StyledText>
          <StyledText variant="b1-m">
            {"**** " + card.accountNumber.slice(-4)}
          </StyledText>
        </View>
        <View>
          <StyledText style={styles.whiteText} variant="b2-m">
            Valid Thru
          </StyledText>
          <StyledText variant="b1-m">{card.validThrough}</StyledText>
        </View>
      </View>
    </View>
  );
};

export default BankCard;
