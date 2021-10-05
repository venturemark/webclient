import {
  BlockquotePlugin,
  BoldPlugin,
  EditablePlugins,
  HeadingPlugin,
  ItalicPlugin,
  ListPlugin,
  MentionPlugin,
  ParagraphPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from "@udecode/slate-plugins";
// @refresh reset
import React, { useCallback } from "react";
import { Editor } from "slate";
import { Slate } from "slate-react";

import { EditorShape } from "../compose";
import { Element, ElementProps } from "../element";

const plugins = [
  ParagraphPlugin(),
  BoldPlugin(),
  UnderlinePlugin(),
  ItalicPlugin(),
  StrikethroughPlugin(),
  BlockquotePlugin(),
  MentionPlugin(),
  ListPlugin(),
  HeadingPlugin(),
];

interface EditorProps {
  editor: Editor;
  editorShape: EditorShape;
}

export function ReadonlyEditor(props: EditorProps) {
  const { editor, editorShape } = props;
  const renderElement = useCallback(
    (props: ElementProps) => <Element {...props} />,
    []
  );

  return (
    <div style={{ marginTop: "0" }}>
      <Slate editor={editor} value={editorShape.value} onChange={() => {}}>
        <EditablePlugins
          plugins={plugins}
          renderElement={[renderElement]}
          readOnly
        />
      </Slate>
    </div>
  );
}
