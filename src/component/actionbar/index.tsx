// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import {
  PlasmicActionBar,
  DefaultActionBarProps,
} from "component/plasmic/shared/PlasmicActionBar";
import ComposeEditor from "component/editor/compose";

interface ActionBarProps extends DefaultActionBarProps {}

type HasContent = undefined | "hasContent";

function ActionBar(props: ActionBarProps) {
  const [hasContent, setHasContent] = useState<HasContent>(undefined);

  return (
    <PlasmicActionBar
      {...props}
      content={hasContent}
      textContainer={{
        render: () => <ComposeEditor setHasContent={setHasContent} />,
      }}
      sendButton={{
        onPress: () => alert("pressed!"),
      }}
    />
  );
}

export default ActionBar;
