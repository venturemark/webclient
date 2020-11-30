// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicActionsColumn,
  DefaultActionsColumnProps,
} from "component/plasmic/shared/PlasmicActionsColumn";

type NumberValue = undefined | number;
type HasContent = undefined | "hasContent";

interface ActionsColumnProps extends DefaultActionsColumnProps {
  numberValue: NumberValue;
  hasContent: HasContent;
  createUpdate: () => void;
}

function ActionsColumn(props: ActionsColumnProps) {
  const { numberValue, hasContent, createUpdate } = props;
  return (
    <PlasmicActionsColumn
      content={hasContent}
      number={numberValue ? "hasNumber" : undefined}
      numberValue={numberValue}
      sendButton={{
        onPress: createUpdate,
      }}
    />
  );
}

export default ActionsColumn;
