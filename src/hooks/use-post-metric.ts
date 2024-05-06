import { useMutation } from "@tanstack/react-query";
import { IMetric } from "../types/metric";
import { postMetric } from "../services/metrics";
import { queryClient } from "../main";
import { fetchMetricsKey } from "./use-fetch-metrics";

export const usePostMetric = () =>
  useMutation({
    mutationFn: async (metric: IMetric) => await postMetric(metric),
    onSuccess: async () => {
      alert("metric posted!");
      await queryClient.invalidateQueries({ queryKey: fetchMetricsKey });
    },
  });
