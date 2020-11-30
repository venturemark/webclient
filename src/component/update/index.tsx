// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import {
  PlasmicUpdate,
  DefaultUpdateProps,
} from "component/plasmic/shared/PlasmicUpdate";
import { SlateDocument } from "@udecode/slate-plugins";

interface UpdateProps extends DefaultUpdateProps {
  text: SlateDocument;
}

function Update(props: UpdateProps) {
  const { text } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <PlasmicUpdate
      toggleUpdateView={{
        "aria-label": "Toggle View",
        onPress: () => {
          setIsFlipped(!isFlipped);
        },
      }}
      contentContainer={{
        isFlipped: isFlipped,
        text: text,
      }}
    />
  );
}

export default Update;
