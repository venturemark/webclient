import React from 'react';
import { Select, Tag } from 'antd';
import { useTimelines } from 'module/hook/timeline';
import { ITimelineQuery } from 'module/interface/timeline';

function tagRender(props: any) {
  const { label, closable, onClose } = props;

  return (
    <Tag
      color={'gold'}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3, borderRadius: 8 }}
    >
      {label}
    </Tag>
  );
}

interface SelectProps {
  audienceId: string;
  userId: string;
  organizationId: string;
  setSelectedTimelines: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

export function AntSelect(props: SelectProps) {
  const {
    audienceId,
    userId,
    organizationId,
    setSelectedTimelines,
  } = props;

  const timelineSearch: ITimelineQuery = {
    audienceId,
    userId,
    organizationId,
  };
  const { data: timelines } = useTimelines(timelineSearch);

  const options =
    timelines?.map((timeline: any) => {
      return {
        value: timeline.id,
        label: timeline.name,
      };
    }) ?? [];

  return (
    <Select
      mode="multiple"
      showArrow
      onChange={(timelines: [string]) => {
        setSelectedTimelines(timelines);
      }}
      placeholder={'Select Timeline'}
      tagRender={tagRender}
      // defaultValue={['gold', 'cyan', 'yellow', 'green']}
      style={{ width: '100%' }}
      options={options}
    />
  );
}
