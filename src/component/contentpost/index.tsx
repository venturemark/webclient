// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import {
  PlasmicContentPost,
  DefaultContentPostProps,
} from "component/plasmic/shared/PlasmicContentPost";
import ReadEditor from "component/editor/read";
import { Node } from "slate";
import { AntDropdown } from "component/ant/dropdown";
import TimelineLink from "component/timelinelink";
import { ITimeline } from "module/interface/timeline";

interface ContentPostProps extends DefaultContentPostProps {
  text: Node[];
  id: string;
  organizationName: string;
  userName: string;
  timelineId: string;
  updateTimelines: ITimeline[];
  date: string;
  setIsVisible: any;
  setCurrentTimeline: React.Dispatch<
    React.SetStateAction<ITimeline | undefined>
  >;
}

function ContentPost(props: ContentPostProps) {
  const {
    text,
    organizationName,
    userName,
    updateTimelines,
    timelineId,
    date,
    id,
    setCurrentTimeline,
    setIsVisible,
  } = props;

  const [isPostDetails, setIsPostDetails] = useState<
    "isPostDetails" | "isUser" | undefined
  >(undefined);

  return (
    <PlasmicContentPost
      state={isPostDetails}
      // iconMenu={{
      //   render: () => <AntDropdown />,
      // }}
      // reply={{
      //   updateId: id,
      //   timelineId: timelineId,
      //   organizationId: organizationName,
      //   userId: userName,
      // }}
      // replyButton={{
      //   onClick: () => setIsPostDetails("isPostDetails"),
      // }}
      // organizationName={organizationName}
      viewReplies={{
        onClick: () => setIsVisible("postDetails"),
      }}
      userName={userName}
      date={date}
      // timelineNamesContainer={{
      //   children: updateTimelines.map((timeline: ITimeline) => (
      //     <TimelineLink
      //       timeline={timeline}
      //       setCurrentTimeline={setCurrentTimeline}
      //     />
      //   )),
      // }}
      // textContainer={{
      //   render: () => <ReadEditor text={text} />,
      // }}
    />
  );
}

export default ContentPost;
