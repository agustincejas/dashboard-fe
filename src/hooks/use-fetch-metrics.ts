import { useQuery } from "@tanstack/react-query";
import { getMetrics } from "../services/metrics";

export const fetchMetricsKey = ["fetch-metrics"];

export const useFetchMetrics = () => {
  return useQuery({
    queryKey: fetchMetricsKey,
    queryFn: async () => {
      return await getMetrics();
    },
  });
};
