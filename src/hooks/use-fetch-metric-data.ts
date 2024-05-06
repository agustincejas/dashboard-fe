import { useQuery } from "@tanstack/react-query";
import { getMetricData } from "../services/metrics";

export const fetchMetricKey = ["fetch-metrics"];

export const useFetchMetricData = (name: string, start: Date, end: Date) => {
  return useQuery({
    queryKey: [fetchMetricKey],
    queryFn: async () => {
      return await getMetricData(name, start, end);
    },
    enabled: name !== "",
  });
};
