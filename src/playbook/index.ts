import { Node } from "slate";
import { options } from "component/editor/config/initialValues";
import { IUpdate } from "module/interface/update";
import { ITimeline } from "module/interface/timeline";
import { IMetric } from "module/interface/metric";

export const feedbackText: Node[] = [
  {
    children: [
      {
        type: options.p.type,
        children: [
          {
            text: "Feedback",
          },
        ],
      },
    ],
  },
];

export const revenueText: Node[] = [
  {
    children: [
      {
        type: options.p.type,
        children: [
          {
            text: "Revenue",
          },
        ],
      },
    ],
  },
];

export const usersText: Node[] = [
  {
    children: [
      {
        type: options.p.type,
        children: [
          {
            text: "Users",
          },
        ],
      },
    ],
  },
];

export const featuresText: Node[] = [
  {
    children: [
      {
        type: options.p.type,
        children: [
          {
            text: "features",
          },
        ],
      },
    ],
  },
];

// export const defaultUpdatesUser: IUpdate[] = [
//   {
//     updateId: "now",
//     userId: "userId",
//     timelineId: "timelineId",
//     numberValue: 23,
//     isFlipped: false,
//     isContext: false,
//     text: defaultText,
//   },
// ];
//
// export const defaultUpdatesFeature: IUpdate[] = [
//   {
//     updateId: "now1",
//     userId: "userId",
//     timelineId: "timelineId",
//     numberValue: 23,
//     isFlipped: false,
//     isContext: false,
//     text: defaultText,
//   },
// ];
//
// export const defaultUpdatesUserFeedback: IUpdate[] = [
//   {
//     updateId: "now2",
//     userId: "userId",
//     timelineId: "timelineId",
//     numberValue: 23,
//     isFlipped: false,
//     isContext: false,
//     text: defaultText,
//   },
// ];
//
// export const defaultUpdatesRevenue: IUpdate[] = [
//   {
//     updateId: "now3",
//     userId: "userId",
//     timelineId: "timelineId",
//     numberValue: 23,
//     isFlipped: false,
//     isContext: false,
//     text: defaultText,
//   },
// ];

export const defaultUserData: any = [
  {
    "Reoccuring Users": 50,
    updateId: "updateId",
    timelineId: "users",
  },
  {
    "Recurring Users": 55,
    updateId: "updateId",
    timelineId: "users",
  },
  {
    "Recurring Users": 40,
    updateId: "updateId",
    timelineId: "users",
  },
  {
    "Recurring Users": 35,
    updateId: "updateId",
    timelineId: "users",
  },
  {
    "Recurring Users": 39,
    updateId: "updateId",
    timelineId: "users",
  },
  {
    "Recurring Users": 40,
    updateId: "updateId",
    timelineId: "users",
  },
  {
    "Recurring Users": 50,
    updateId: "updateId",
    timelineId: "users",
  },
];

export const defaultFeaturesData: any = [
  {
    "Features Shipped": 50,
    updateId: "updateId",
    timelineId: "features",
  },
  {
    "Features Shipped": 55,
    updateId: "updateId",
    timelineId: "features",
  },
  {
    "Features Shipped": 40,
    updateId: "updateId",
    timelineId: "features",
  },
  {
    "Features Shipped": 35,
    updateId: "updateId",
    timelineId: "features",
  },
  {
    "Features Shipped": 39,
    updateId: "updateId",
    timelineId: "features",
  },
  {
    "Features Shipped": 40,
    updateId: "updateId",
    timelineId: "features",
  },
  {
    "Features Shipped": 50,
    updateId: "updateId",
    timelineId: "features",
  },
];

export const defaultUserFeedbackData: any = [
  {
    "User Feedback": 50,
    updateId: "updateId",
    timelineId: "feedback",
  },
  {
    "User Feedback": 55,
    updateId: "updateId",
    timelineId: "feedback",
  },
  {
    "User Feedback": 40,
    updateId: "updateId",
    timelineId: "feedback",
  },
  {
    "User Feedback": 35,
    updateId: "updateId",
    timelineId: "feedback",
  },
  {
    "User Feedback": 39,
    updateId: "updateId",
    timelineId: "feedback",
  },
  {
    "User Feedback": 40,
    updateId: "updateId",
    timelineId: "feedback",
  },
  {
    "User Feedback": 50,
    updateId: "updateId",
    timelineId: "feedback",
  },
];

export const defaultRevenueData: any = [
  {
    "Recurring Revenue": 50,
    updateId: "updateId",
    timelineId: "revenue",
  },
  {
    "Recurring Revenue": 55,
    updateId: "updateId",
    timelineId: "revenue",
  },
  {
    "Recurring Revenue": 40,
    updateId: "updateId",
    timelineId: "revenue",
  },
  {
    "Recurring Revenue": 35,
    updateId: "updateId",
    timelineId: "revenue",
  },
  {
    "Recurring Revenue": 39,
    updateId: "updateId",
    timelineId: "revenue",
  },
  {
    "Recurring Revenue": 40,
    updateId: "updateId",
    timelineId: "revenue",
  },
  {
    "Recurring Revenue": 50,
    updateId: "updateId",
    timelineId: "revenue",
  },
];

export const DefaultUpdates: IUpdate[] = [
  {
    updateId: "now1",
    userId: "userId",
    timelineId: "users",
    numberValue: 23,
    isFlipped: false,
    isContext: false,
    text: usersText,
  },
  {
    updateId: "now2",
    userId: "userId",
    timelineId: "revenue",
    numberValue: 23,
    isFlipped: false,
    isContext: false,
    text: revenueText,
  },
  {
    updateId: "now3",
    userId: "userId",
    timelineId: "features",
    numberValue: 23,
    isFlipped: false,
    isContext: false,
    text: featuresText,
  },
  {
    updateId: "now4",
    userId: "userId",
    timelineId: "feedback",
    numberValue: 23,
    isFlipped: false,
    isContext: false,
    text: feedbackText,
  },
];

export const DefaultData: any = [
  {
    date: "January 1, 2019",
    "Reoccuring Users": 50,
    updateId: "now1",
    timelineId: "users",
  },
  {
    date: "January 1, 2019",
    "Features Shipped": 50,
    updateId: "now3",
    timelineId: "features",
  },

  {
    date: "July 1, 2019",
    "Recurring Revenue": 50,
    updateId: "now2",
    timelineId: "revenue",
  },
  {
    date: "July 1, 2019",
    "User Feedback": 50,
    updateId: "now4",
    timelineId: "feedback",
  },
];

export const DefaultTimelines: ITimeline[] = [
  {
    name: "Feature Development",
    dataKey: "Feature Development",
    userId: "userId",
    timelineId: "features",
    date: "now",
    updates: [],
    data: [],
    isCurrent: false,
  },
  {
    name: "User Feedback",
    dataKey: "User Feedback",
    userId: "userId",
    timelineId: "feedback",
    date: "now",
    updates: [],
    data: [],
    isCurrent: false,
  },
  {
    name: "Recurring Users",
    dataKey: "Recurring Users",
    userId: "userId",
    timelineId: "users",
    date: "now",
    updates: [],
    data: [],
    isCurrent: true,
  },
  {
    name: "Recurring Revenue",
    dataKey: "Recurring Revenue",
    userId: "userId",
    timelineId: "revenue",
    date: "now",
    updates: [],
    data: [],
    isCurrent: false,
  },
];
