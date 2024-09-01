import { View, Image } from "react-native";
import styles from "./styles";
import { BellIcon } from "@components/Icons";
import { colors } from "@foundation";
import Animated from "react-native-reanimated";
import StyledText from "@components/StyledText";

const imageUri = "https://randomuser.me/api/portraits/women/82.jpg";

const RootHeader = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerTitle}>
        <Image source={{ uri: imageUri }} style={styles.profilePic} />
        <View>
          <StyledText>Welcome back!</StyledText>
          <StyledText style={{ fontWeight: 'bold' }}>Ginny Weasley</StyledText>
        </View>
      </View>
      <View style={styles.iconWrapper}>
        <Animated.View style={styles.unreadWrapper} />
        <BellIcon color={colors.common.black} size={20} />
      </View>
    </View>
  );
};

export default RootHeader;
