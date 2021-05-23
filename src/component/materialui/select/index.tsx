import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useContext, useEffect, useRef } from "react";

import { TimelineContext } from "context/TimelineContext";
import { ITimeline } from "module/interface/timeline";

interface SelectProps {
  ventureId: string;
  setSelectedTimelines: React.Dispatch<React.SetStateAction<ITimeline[]>>;
  selectFocused: boolean;
  setSelectFocused: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTimelines: ITimeline[];
}

export function TimelineSelect(props: SelectProps) {
  const {
    ventureId,
    setSelectedTimelines,
    selectFocused,
    setSelectFocused,
    selectedTimelines,
  } = props;

  const select = useRef<any>(null);

  const timelineContext = useContext(TimelineContext);
  const timelines = timelineContext?.allTimelines ?? [];

  const ventureTimelines = timelines.filter(
    (timeline) => timeline.ventureId === ventureId
  );

  const sortedVentureTimelines = ventureTimelines.sort((a: any, b: any) =>
    a.name.localeCompare(b.name)
  );

  useEffect(() => {
    if (selectFocused && select && select.current) {
      select.current?.focus();
      setSelectFocused(false);
    }
  }, [selectFocused, setSelectFocused]);

  return (
    <Autocomplete
      multiple
      value={selectedTimelines}
      onChange={(event, timelines) => {
        setSelectedTimelines(timelines);
      }}
      ref={select}
      options={sortedVentureTimelines}
      disableClearable={true}
      getOptionLabel={(option) => option?.name ?? ""}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option?.name ?? ""}
            {...getTagProps({ index })}
            style={{
              backgroundColor: "#029D7F",
              fontFamily: "Poppins",
              color: "#fff",
            }}
          />
        ))
      }
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Share to:"
          variant="standard"
          style={{ fontFamily: "Poppins" }}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />
      )}
    />
  );
}
