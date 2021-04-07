import React, { useRef, useEffect, useState } from "react";
import { Select, Tag } from "antd";
import { ITimeline } from "module/interface/timeline";
import { RefSelectProps } from "antd/lib/select";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { TimelineContext } from "component/app";

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
  ventureId: string;
  setSelectedTimelines: React.Dispatch<React.SetStateAction<string[]>>;
  selectFocused: boolean;
  setSelectFocused: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTimelines: string[];
}

export function AntSelect(props: SelectProps) {
  const {
    ventureId,
    setSelectedTimelines,
    selectFocused,
    setSelectFocused,
    selectedTimelines,
  } = props;
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>("");

  const select = useRef<RefSelectProps>(null);

  const timelineContext = useContext(TimelineContext);
  const timelines = timelineContext?.timelines ?? [];

  const ventureTimelines = timelines.filter(
    (timeline) => timeline.ventureId === ventureId
  );

  const sortedVentureTimelines = ventureTimelines.sort((a: any, b: any) =>
    a.name.localeCompare(b.name)
  );

  const options =
    sortedVentureTimelines?.map((timeline: ITimeline) => {
      return {
        value: timeline.id,
        label: timeline.name,
      };
    }) ?? [];

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setToken(token);
      } catch (error) {
        console.log(error.error);
      }
    };
    if (token === "") {
      getToken();
    }

    if (selectFocused && select && select.current) {
      select.current?.focus();
      setSelectFocused(false);
    }
  }, [selectFocused, setSelectFocused, getAccessTokenSilently, token]);

  return (
    <Select
      mode="multiple"
      onChange={(timelines: string[]) => {
        setSelectedTimelines(timelines);
      }}
      // dropdownStyle={{ width: "200px" }}
      placeholder={"Share to: "}
      // loading={isLoading}
      showAction={["focus"]}
      value={selectedTimelines}
      defaultOpen
      ref={select}
      tagRender={tagRender}
      bordered={false}
      style={{ width: "372px", marginBottom: "-8px" }}
      options={options}
    />
  );
}
