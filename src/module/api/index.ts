import * as update from './update';
import * as timeline from './timeline';
import * as metricUpdate from './metricupdate';
import * as metric from './metric';
import * as audience from './audience';

export const API = {
  Audience: audience.Audience,
  Update: update.Update,
  Timeline: timeline.Timeline,
  Metric: metric.Metric,
  MetricUpdate: metricUpdate.MetricUpdate,
};
