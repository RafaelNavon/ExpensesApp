import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { API_URL } from "../constants/api";
import { getColor } from "../lib/chartColors.js"; // 💡 Extracted logic
import { formatChartData } from "../lib/formatChartData.js"; // 💡 Clean separation

const screenWidth = Dimensions.get("window").width;

export default function CategoryPieChart({ userId }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${API_URL}/transactions/summary/category/${userId}`
        );
        const json = await res.json();

        console.log("🍕 Raw category data:", json);

        const formatted = formatChartData(json); // 💡 Cleaned and reused
        console.log("✅ Formatted chart data:", formatted);

        setChartData(formatted);
      } catch (error) {
        console.error("❌ Error fetching chart data:", error);
      }
    };

    if (userId) fetchData();
  }, [userId]);

  if (!chartData.length) {
    return (
      <View>
        <Text>No category data available.</Text>
      </View>
    );
  }

  return (
    <PieChart
      data={chartData}
      width={screenWidth - 20}
      height={220}
      chartConfig={{
        backgroundColor: "#fff",
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        color: () => "#333",
      }}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      absolute
    />
  );
}
