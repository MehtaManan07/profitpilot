import { BaseButton, Pagination, ScreenFrame } from "@components";
import StyledText from "@components/StyledText";
import { colors } from "@foundation";
import { getWindowHeight, getWindowWidth, QueryKeyGenerator } from "@utils";
import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import FastImage from "react-native-fast-image";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { queryClient } from "@providers";
import { AuthQueryData } from "hooks/useAuth";
const data = [
  "https://plus.unsplash.com/premium_vector-1720925714524-04b632e5ae35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluYW5jZSUyMGFwcHN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_vector-1682309356579-759952b95e1b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpbmFuY2UlMjBhcHBzfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_vector-1720931652710-7bfbe41ae29a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jZSUyMGFwcHN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_vector-1682310583377-49aa69b08ff7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpbmFuY2UlMjBhcHBzfGVufDB8fDB8fHww",
];
const FUEScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const renderItem = ({ item }: { item: string }) => {
    return (
      <View
        style={{
          width: getWindowWidth(),
          height: getWindowHeight() * 0.5,
        }}
      >
        <FastImage
          source={{ uri: item }}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
    );
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.ceil(contentOffset.x / getWindowWidth());
    setCurrentIndex(index);
  };
  const onPress = () => {
    const randomLongString = Array(100)
      .fill(0)
      .map(() => Math.random().toString(36).charAt(2))
      .join("");
    queryClient.setQueryData<AuthQueryData>(QueryKeyGenerator.Auth(), {
      token: randomLongString,
    });
  };
  const renderPagination = data.map((i, index) => (
    <Pagination
      key={i}
      backgroundColor={colors.common.black}
      currentIndex={currentIndex}
      index={index}
    />
  ));
  return (
    <ScreenFrame>
      <View style={styles.wrapper}>
        <StyledText style={styles.paddedWrapper} variant="h1-pro">
          ProfitPilot.
        </StyledText>
        <View style={styles.scrollWrapper}>
          <ScrollView
            disableIntervalMomentum
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
          >
            {data.map((item) => renderItem({ item }))}
          </ScrollView>
          <View style={styles.pagination}>{renderPagination}</View>
          <StyledText
            style={styles.paddedWrapper}
            variant="h1-large"
          >{`YOUR\nFINANCIAL\nNAVIGATOR`}</StyledText>
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <BaseButton label="Get Started" variant="black" onPress={onPress} />
      </View>
    </ScreenFrame>
  );
};

export default FUEScreen;
