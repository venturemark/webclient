export type IMetric = {
  [key: string]: string | number;
  updateId: string;
  metricId: string;
  timelineId: string;
};
