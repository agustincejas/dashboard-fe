import axios from "axios";
import { ChartDatasets, IMetric } from "../types/metric";
const { VITE_BE_URL } = import.meta.env;
const METRICS_URL = `${VITE_BE_URL}/api/metrics`;

export const getMetrics = async (): Promise<string[]> => {
  try {
    const response = await axios.get(METRICS_URL);

    return response.data as string[];
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getMetricData = async (
  name: string,
  start: Date,
  end: Date
): Promise<ChartDatasets> => {
  try {
    const response = await axios.get(
      `${METRICS_URL}/${name}?startDate=${start.getTime()}&endDate=${end.getTime()}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postMetric = async (metric: IMetric) => {
  try {
    await axios.post(METRICS_URL, metric);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
