import { getColor } from "./chartColors";

export const formatChartData = (data = []) => {
  return data
    .filter(
      (item) =>
        item && item.category && item.total && !isNaN(Number(item.total))
    )
    .map((item, index) => ({
      name: item.category,
      population: Number(item.total),
      color: getColor(index),
      legendFontColor: "#333",
      legendFontSize: 14,
    }));
};
