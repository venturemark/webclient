export type IMetricUpdate = {
  [key: string]: string | number;
  id: string;
  userId: string;
  timelineId: string;
  value: number;
};
