import React, { useState } from 'react';
import { Select, Tag } from 'antd';
import { useTimelines } from 'module/hook/timeline';
import { ITimelineQuery } from 'module/interface/timeline';

// const options = [{ value: 'gold', label: 'name' }, { value: 'lime', label: 'cousin' }, { value: 'green',label: 'home' }, { value: 'cyan',label: 'house' }];

function tagRender(props: any) {
  const { label, closable, onClose } = props;

  return (
    <Tag
      color={'green'}
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
  setSelectedTimeline: any;
}

export function AntSelect(props: SelectProps) {
  const {
    audienceId,
    userId,
    organizationId,
    setSelectedTimeline,
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
        ...timeline,
        value: timeline.id,
        label: timeline.name,
      };
    }) ?? [];

  return (
    <Select
      mode="multiple"
      showArrow
      onChange={(value: [string]) => {
        console.log('change value', value);
        setSelectedTimeline(value[0]);
      }}
      placeholder={'Select Timeline'}
      tagRender={tagRender}
      // defaultValue={['gold', 'cyan', 'yellow', 'green']}
      style={{ width: '100%' }}
      options={options}
    />
  );
}
