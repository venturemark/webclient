// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React from "react";
import ReactCardFlip from "react-card-flip";
import {
  PlasmicUpdateContent,
  DefaultUpdateContentProps,
} from "component/plasmic/shared/PlasmicUpdateContent";
import ReadEditor from "component/editor/read";
import { SlateDocument } from "@udecode/slate-plugins";
import { DataItem } from "component/linechart";

interface UpdateContentProps extends DefaultUpdateContentProps {
  isFlipped: boolean;
  text: SlateDocument;
  dataKey: string;
  data: DataItem[];
  name: string;
}

function UpdateContent(props: UpdateContentProps) {
  const { isFlipped, text, data, dataKey, name } = props;
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <PlasmicUpdateContent
        state="text"
        textContainer={{
          render: () => <ReadEditor text={text} />,
        }}
      />
      <PlasmicUpdateContent
        state="graph"
        metric={{
          name: name,
          dataKey: dataKey,
          data: data,
        }}
      />
    </ReactCardFlip>
  );
}

export default UpdateContent;
