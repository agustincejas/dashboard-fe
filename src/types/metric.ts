export interface IMetric {
  id?: string;
  timestamp: number;
  name: string;
  value: number;
}

export interface IMetricWithDate extends IMetric {
  date: Date;
}

export interface ChartDatasets {
  labels: string[];
  data: IMetric[];
  avgPerDay: IMetric[];
  avgPerHour: IMetric[];
  avgPerMin: IMetric[];
}
