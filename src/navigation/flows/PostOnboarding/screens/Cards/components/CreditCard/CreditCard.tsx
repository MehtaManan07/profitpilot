import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { StyledText } from "@components";
import styles from "./styles";
import { Props } from "./types";
import { colors } from "@foundation";

const CreditCard = ({ card, variant }: Props) => {
  const cardNumbers = card.accountNumber.match(/.{1,4}/g) as string[];

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.topSection,
          variant === "green" ? styles.topGreenBg : styles.topBlackBg,
        ]}
      >
        <FastImage
          resizeMode="contain"
          style={styles.wifi}
          source={
            variant === "black"
              ? require("@assets/common/wifi-white.png")
              : require("@assets/common/wifi-logo.png")
          }
        />
        <View style={styles.cardNumbers}>
          {cardNumbers.map((number) => (
            <StyledText
              key={number}
              variant="h1-pro"
              style={{
                color:
                  variant === "green"
                    ? colors.common.black
                    : colors.common.white,
              }}
            >
              {number}
            </StyledText>
          ))}
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View>
          <StyledText variant="b1-m">{card.name}</StyledText>
          <StyledText style={styles.onyxFont} variant="b1-m">
            Exp {` `}
            <StyledText style={styles.boldFont} variant="b1-m">
              {card.validThrough}
            </StyledText>
          </StyledText>
        </View>
        <FastImage
          source={require("@assets/common/visa-logo.png")}
          style={styles.visa}
        />
      </View>
    </View>
  );
};

export default CreditCard;
