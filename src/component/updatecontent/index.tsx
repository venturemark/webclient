// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import {
  PlasmicUpdateContent,
  DefaultUpdateContentProps,
} from "component/plasmic/shared/PlasmicUpdateContent";
import ReadEditor from "component/editor/read";
import { Node } from "slate";
import { AntDropdown } from "component/ant/dropdown";
import TimelineLink from "component/TimelineLink";
import { ITimeline } from "module/interface/timeline";

interface UpdateContentProps extends DefaultUpdateContentProps {
  text: Node[];
  id: string;
  organizationName: string;
  userName: string;
  timelineId: string;
  updateTimelines: ITimeline[];
  date: string;
  setCurrentTimeline: React.Dispatch<
    React.SetStateAction<ITimeline | undefined>
  >;
}

function UpdateContent(props: UpdateContentProps) {
  const {
    text,
    organizationName,
    userName,
    updateTimelines,
    timelineId,
    date,
    id,
    setCurrentTimeline,
  } = props;

  const [isReply, setIsReply] = useState<"isReply" | "isUser" | undefined>(
    undefined
  );

  return (
    <PlasmicUpdateContent
      state={isReply}
      iconMenu={{
        render: () => <AntDropdown updateId={id} />,
      }}
      reply={{
        updateId: id,
        timelineId: timelineId,
        organizationId: organizationName,
        userId: userName,
      }}
      replyButton={{
        onClick: () => setIsReply("isReply"),
      }}
      organizationName={organizationName}
      userName={userName}
      date={date}
      timelineNamesContainer={{
        children: updateTimelines.map((timeline: ITimeline) => (
          <TimelineLink
            timeline={timeline}
            setCurrentTimeline={setCurrentTimeline}
          />
        )),
      }}
      textContainer={{
        render: () => <ReadEditor text={text} />,
      }}
    />
  );
}

export default UpdateContent;
