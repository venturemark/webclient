// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from 'react';
import {
  PlasmicUpdateContent,
  DefaultUpdateContentProps,
} from 'component/plasmic/shared/PlasmicUpdateContent';
import ReadEditor from 'component/editor/read';
import { Node } from 'slate';

interface UpdateContentProps extends DefaultUpdateContentProps {
  text: Node[];
  id: string;
  organizationName: string;
  userName: string;
  timelineName: string;
  date: string;
}

function UpdateContent(props: UpdateContentProps) {
  const {
    text,
    organizationName,
    userName,
    timelineName,
    date,
    id,
  } = props;

  const [isReply, setIsReply] = useState<'isReply' | 'isUser'>(
    'isUser',
  );

  return (
    <PlasmicUpdateContent
      state={isReply}
      reply={{
        updateId: id,
        timelineId: timelineName,
        organizationId: organizationName,
        userId: userName,
      }}
      replyButton={{
        onClick: () => setIsReply('isReply'),
      }}
      organizationName={organizationName}
      userName={userName}
      timelineName={timelineName}
      date={date}
      textContainer={{
        render: () => <ReadEditor text={text} />,
      }}
    />
  );
}

export default UpdateContent;
