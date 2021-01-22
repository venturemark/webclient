// @refresh reset
import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Slate, withReact } from 'slate-react';
import {
  ParagraphPlugin,
  HeadingPlugin,
  BoldPlugin,
  EditablePlugins,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  BlockquotePlugin,
  ListPlugin,
  MentionPlugin,
  pipe,
  withImageUpload,
  withLink,
  withList,
  withMarks,
  withInlineVoid,
} from '@udecode/slate-plugins';
import { Node } from 'slate';
import { initialValueEmpty } from 'component/editor/config/initialValues';

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

const withPlugins = [
  withReact,
  withHistory,
  withLink(),
  withList(),
  withMarks(),
  withImageUpload(),
  withInlineVoid({ plugins }),
] as const;

interface EditorProps {
  text: Node[];
}

const ReadEditor = (props: EditorProps) => {
  const { text } = props;

  const textValue = [
    {
      type: 'paragraph',
      children: [
        {
          text: text,
        },
      ],
    },
  ];

  const existingValue = !text
    ? initialValueEmpty
    : typeof text != 'string'
    ? text
    : textValue;

  const [value, setValue] = useState(
    typeof existingValue === 'string'
      ? JSON.parse(existingValue)
      : existingValue,
  );

  const editor = useMemo(
    () => pipe(createEditor(), ...withPlugins),
    [],
  );

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    >
      <EditablePlugins
        plugins={plugins}
        spellCheck
        autoFocus
        readOnly
      />
    </Slate>
  );
};

export default ReadEditor;
