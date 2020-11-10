// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {
  PlasmicUpdate,
  DefaultUpdateProps
} from "component/plasmic/flipcard/PlasmicUpdate";
import "./index.css";

interface UpdateProps extends DefaultUpdateProps {}

export function Component(props: UpdateProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <PlasmicUpdate
        {...props}
        className={"update"}
        state={"text"}
        toggleUpdateView={{
          "aria-label": "Toggle View",
          onPress: () => {
            setIsFlipped(!isFlipped);
          }
        }}
      />
      <PlasmicUpdate
        {...props}
        className={"update"}
        state={"graph"}
        toggleUpdateView={{
          "aria-label": "Toggle View",
          onPress: () => {
            setIsFlipped(!isFlipped);
          }
        }}
      />
    </ReactCardFlip>
  );
}
