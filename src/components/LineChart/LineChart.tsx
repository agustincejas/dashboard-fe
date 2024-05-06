import { ChartDatasets } from "../../types/metric";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend
);

interface LineChartProps {
  chartData?: ChartDatasets;
  chartDataLabel: string;
}
const LineChart = ({ chartData, chartDataLabel }: LineChartProps) => {
  const data = {
    labels: [...chartData!.labels],
    datasets: [
      {
        label: chartDataLabel,
        data: chartData?.data.map((metric) => metric.value) || [],
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "Average per day",
        data: chartData?.avgPerDay.map((metric) => metric.value) || [],
        borderColor: "rgb(178, 75, 192)",
      },
      {
        label: "Average per hour",
        data: chartData?.avgPerHour.map((metric) => metric.value) || [],
        borderColor: "rgb(192, 75, 81)",
      },
      {
        label: "Average per minute",
        data: chartData?.avgPerMin.map((metric) => metric.value) || [],
        borderColor: "rgb(81, 192, 75)",
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
