import React, { useRef, useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

// import { Select, Tag } from "antd";
// import { ITimeline } from "module/interface/timeline";
import { RefSelectProps } from "antd/lib/select";
// import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { TimelineContext } from "component/app";

// function tagRender(props: any) {
//   const { label, closable, onClose } = props;

//   return (
//     <Tag
//       color={"#FFF"}
//       closable={closable}
//       onClose={onClose}
//       style={{
//         margin: 5,
//         borderRadius: 10,
//         backgroundColor: "#029D7F",
//         fontFamily: "Poppins",
//         border: "none",
//         padding: "5px 10px",
//         fontSize: "14px",
//         marginTop: "-2px",
//       }}
//     >
//       {label}
//     </Tag>
//   );
// }

interface SelectProps {
  ventureId: string;
  setSelectedTimelines: React.Dispatch<React.SetStateAction<string[]>>;
  selectFocused: boolean;
  setSelectFocused: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTimelines: string[];
}

// export function AntSelect(props: SelectProps) {
//   const {
//     ventureId,
//     setSelectedTimelines,
//     selectFocused,
//     setSelectFocused,
//     selectedTimelines,
//   } = props;

//   const select = useRef<RefSelectProps>(null);

//   const timelineContext = useContext(TimelineContext);
//   const timelines = timelineContext?.allTimelines ?? [];

//   const ventureTimelines = timelines.filter(
//     (timeline) => timeline.ventureId === ventureId
//   );

//   const sortedVentureTimelines = ventureTimelines.sort((a: any, b: any) =>
//     a.name.localeCompare(b.name)
//   );

//   const options =
//     sortedVentureTimelines?.map((timeline: ITimeline) => {
//       return {
//         value: timeline.id,
//         label: timeline.name,
//       };
//     }) ?? [];

//   useEffect(() => {
//     if (selectFocused && select && select.current) {
//       select.current?.focus();
//       setSelectFocused(false);
//     }
//   }, [selectFocused, setSelectFocused]);

//   return (
//     <Select
//       mode="multiple"
//       onChange={(timelines: string[]) => {
//         setSelectedTimelines(timelines);
//       }}
//       // dropdownStyle={{ width: "200px" }}
//       // loading={isLoading}
//       showAction={["focus"]}
//       value={selectedTimelines}
//       // defaultOpen
//       ref={select}
//       tagRender={tagRender}
//       bordered={false}
//       style={{ width: "372px", marginTop: "-6px" }}
//       options={options}
//     />
//   );
// }

export function TimelineSelect(props: SelectProps) {
  const {
    ventureId,
    setSelectedTimelines,
    selectFocused,
    setSelectFocused,
    selectedTimelines,
  } = props;

  const select = useRef<RefSelectProps>(null);

  const timelineContext = useContext(TimelineContext);
  const timelines = timelineContext?.allTimelines ?? [];

  const ventureTimelines = timelines.filter(
    (timeline) => timeline.ventureId === ventureId
  );

  const sortedVentureTimelines = ventureTimelines.sort((a: any, b: any) =>
    a.name.localeCompare(b.name)
  );

  // const options =
  //   sortedVentureTimelines?.map((timeline: ITimeline) => {
  //     return {
  //       value: timeline.id,
  //       label: timeline.name,
  //     };
  //   }) ?? [];

  useEffect(() => {
    if (selectFocused && select && select.current) {
      select.current?.focus();
      setSelectFocused(false);
    }
  }, [selectFocused, setSelectFocused]);

  console.log("selectedTimelines", selectedTimelines);
  console.log("select focus", selectFocused);

  const fixedOptions = [sortedVentureTimelines[0]];
  const [value, setValue] = React.useState([
    ...fixedOptions,
    sortedVentureTimelines[13],
  ]);

  return (
    <Autocomplete
      multiple
      value={value}
      onChange={(event, newValue) => {
        setValue([
          ...fixedOptions,
          ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
        ]);
      }}
      ref={select}
      options={sortedVentureTimelines}
      getOptionLabel={(option) => option?.name ?? ""}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option?.name ?? ""}
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
            style={{
              backgroundColor: "#029D7F",
              fontFamily: "Poppins",
              color: "#fff",
            }}
          />
        ))
      }
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Share to:"
          variant="outlined"
          placeholder="Add timeline"
        />
      )}
    />
  );
}
