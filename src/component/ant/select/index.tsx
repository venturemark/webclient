import React, { useRef, useEffect } from "react";
import { Select, Tag } from "antd";
import { useTimelines } from "module/hook/timeline";
import { ITimeline, ITimelineQuery } from "module/interface/timeline";
import { RefSelectProps } from "antd/lib/select";

function tagRender(props: any) {
  const { label, closable, onClose } = props;

  return (
    <Tag
      color={"#FFF"}
      closable={closable}
      onClose={onClose}
      style={{
        margin: 5,
        borderRadius: 10,
        backgroundColor: "#029D7F",
        fontFamily: "Poppins",
        border: "none",
        padding: "5px 10px",
        fontSize: "14px",
        marginTop: "-2px",
      }}
    >
      {label}
    </Tag>
  );
}

interface SelectProps {
  userId: string;
  organizationId: string;
  setSelectedTimelines: React.Dispatch<React.SetStateAction<string[]>>;
  selectFocused: boolean;
  setSelectFocused: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTimelines: string[];
}

export function AntSelect(props: SelectProps) {
  const {
    userId,
    organizationId,
    setSelectedTimelines,
    selectFocused,
    setSelectFocused,
    selectedTimelines,
  } = props;

  const select = useRef<RefSelectProps>(null);

  const timelineSearch: ITimelineQuery = {
    userId,
    organizationId,
  };
  const { isLoading, data: timelines } = useTimelines(timelineSearch);

  const options =
    timelines?.map((timeline: ITimeline) => {
      return {
        value: timeline.id,
        label: timeline.name,
      };
    }) ?? [];

  useEffect(() => {
    if (selectFocused && select && select.current) {
      select.current?.focus();
      setSelectFocused(false);
    }
  }, [selectFocused, setSelectFocused]);

  return (
    <Select
      mode="multiple"
      onChange={(timelines: string[]) => {
        setSelectedTimelines(timelines);
      }}
      dropdownStyle={{ width: "200px" }}
      placeholder={"Select Timeline"}
      loading={isLoading}
      showAction={["focus"]}
      value={selectedTimelines}
      defaultOpen
      ref={select}
      tagRender={tagRender}
      bordered={false}
      style={{ width: "80%", marginTop: "8px" }}
      options={options}
    />
  );
}
