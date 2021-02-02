import React from 'react';
import { Select, Tag } from 'antd';
import { useTimelines } from 'module/hook/timeline';
import { ITimelineQuery } from 'module/interface/timeline';
import SelectTimeline from 'component/SelectTimeline';

function tagRender(props: any) {
  const { label, closable, onClose } = props;

  return (
    <Tag
      color={'#FFF'}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
        borderRadius: 8,
        backgroundColor: '#029D7F',
        fontFamily: 'Poppins',
        border: 'none',
        padding: '5px 10px',
        fontSize: '14px',
      }}
    >
      {label}
    </Tag>
  );
}

interface SelectProps {
  userId: string;
  organizationId: string;
  setSelectedTimelines: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

export function AntSelect(props: SelectProps) {
  const { userId, organizationId, setSelectedTimelines } = props;

  const timelineSearch: ITimelineQuery = {
    userId,
    organizationId,
  };
  const { isLoading, data: timelines } = useTimelines(timelineSearch);

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
      placeholder={<SelectTimeline />}
      loading={isLoading}
      tagRender={tagRender}
      bordered={false}
      style={{ width: '100%' }}
      options={options}
    />
  );
}
