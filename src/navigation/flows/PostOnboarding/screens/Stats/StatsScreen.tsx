import { Pressable, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

import { ScreenFrame, StyledText } from "@components";

import { BankCard } from "../Dashboard/components";
import { randomChartData } from "./data";
import { chartConfig } from "./chartConfig";
import { Header } from "./components";
import styles from "./styles";
import { Props } from "./types";
import TabBar from "../../components/TabBar";
import { getWindowWidth } from "@utils";

const StatsScreen = ({ navigation, route }: Props) => {
  const navigateToPrevScreen = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const months = Object.keys(randomChartData);

  const [selectedMonth, setSelectedMonth] = useState("January");

  return (
    <ScreenFrame>
      <View style={styles.wrapper}>
        <Header navigateToPrevScreen={navigateToPrevScreen} />
        <BankCard card={route.params.card} variant="grey" />
        <View style={styles.monthWrapper}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.listStyles}
            showsHorizontalScrollIndicator={false}
          >
            {months.map((month) => (
              <Pressable
                key={month}
                style={[
                  styles.month,
                  selectedMonth === month ? styles.selectedMonth : null,
                ]}
                onPress={() => setSelectedMonth(month)}
              >
                <StyledText>{month.slice(0, 3)}</StyledText>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <LineChart
              bezier
              chartConfig={chartConfig}
              data={randomChartData[selectedMonth]}
              height={220}
              width={getWindowWidth() * 3}
              yAxisInterval={1} // optional, defaults to 1
              yAxisLabel="$"
              style={{
                borderRadius: 16,
                overflow: "hidden",
              }}
            />
          </ScrollView>
        </View>
      </View>
      <View style={styles.tabbar}>
        <TabBar flow="stats" />
      </View>
    </ScreenFrame>
  );
};

export default StatsScreen;
