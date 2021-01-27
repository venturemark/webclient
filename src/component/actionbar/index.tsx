// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from 'react';
import {
  PlasmicActionBar,
  DefaultActionBarProps,
} from 'component/plasmic/shared/PlasmicActionBar';
import ComposeEditor from 'component/editor/compose';
import { EditorShape } from 'component/editor/compose';
import { INewUpdate } from 'module/interface/update';
import { useMutation, useQueryClient } from 'react-query';
import * as api from 'module/api';

import { initialValueEmpty } from 'component/editor/config/initialValues';
import { Search } from '@venturemark/numnum';
import { serialize } from 'module/serialize';
import { get } from 'module/store';
import { useEditor } from 'component/editor/compose';

interface ActionBarProps extends DefaultActionBarProps {
  organizationId: string;
  timelineId: string;
  userId: string;
}

function ActionBar(props: ActionBarProps) {
  const {
    organizationId,
    timelineId,
    userId,
  } = props;

  const store = get('composeEditor.content') ?? '';
  const initialValue =
    store !== '' ? JSON.parse(store) : initialValueEmpty;
  const hasContentDefault =
    serialize(initialValue) === '' ||
    serialize(initialValue) === undefined
      ? undefined
      : 'hasContent';
  const defaultNumber = Search(serialize(initialValue)) ?? 0;
  const defaultProgress = serialize(initialValue).length;

  const { editorShape, setEditorShape } = useEditor({
    value: initialValue,
    hasContent: hasContentDefault,
    numberValue: defaultNumber[0],
    progress: defaultProgress,
  });

  const audienceId = '1'

  const queryClient = useQueryClient();

  const updateMutation = useMutation<any, any, any>(
    (newUpdate) => {
      return api.API.TexUpd.Create(newUpdate);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries('update');
      },
    },
  );

  const handleAddUpdate = () => {
    if (!timelineId) {
      const error = 'Please select a timeline';
      setEditorShape({ ...editorShape, error });
      return;
    }
    if (!editorShape.hasContent) {
      const error = 'Please enter some text';
      setEditorShape({ ...editorShape, error });
      return;
    }

    if (serialize(editorShape.value).length > 281) {
      const error = `Your update is ${
        serialize(editorShape.value).length
      } characters. The limit is 280 characters`;
      setEditorShape({ ...editorShape, error });
      return;
    }

    const newUpdate: INewUpdate = {
      text: serialize(editorShape.value),
      audienceId,
      organizationId,
      timelineId,
      userId,
    };

    updateMutation.mutate(newUpdate);

    //reset store
    localStorage.setItem(
      'composeEditor.content',
      JSON.stringify(initialValueEmpty),
    );
    //reset editor
    const resetEditor:EditorShape = {
      value: initialValueEmpty,
      string: '',
      hasContent: undefined,
      numberValue: 0,
      error: undefined,
      progress: 0,
    };
    setEditorShape(resetEditor);
  };

  const MIN = 0;
  const MAX = 240;
  const normalize = (value: number) =>
    ((value - MIN) * 100) / (MAX - MIN);

  const [isActive, setIsActive] = useState(false);
  const [timelineSelected, setTimelineSelected] = useState(false);

  return (
    <PlasmicActionBar
      root={{
        onClick: () => setIsActive(true),
      }}
      sendUpdate={{
        handleClick: () => handleAddUpdate(),
      }}
      error={editorShape.error ? 'hasError' : undefined}
      text={normalize(editorShape.progress) > 0 ? 'hasText' : undefined}
      timelineSelected={timelineSelected}
      timelineSelect={{
        onClick: () => setTimelineSelected(true),
      }}
      errorMessage={editorShape.error}
      isActive={isActive}
      textContainer={{
        render: () => (
          <ComposeEditor
            editorShape={editorShape}
            setEditorShape={setEditorShape}
          />
        ),
      }}
    />
  );
}

export default ActionBar;
