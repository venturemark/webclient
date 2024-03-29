import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useContext, useEffect, useRef } from "react";

import { VentureContext } from "context/VentureContext";
import { ITimeline } from "module/interface/timeline";
import { IVenture } from "module/interface/venture";

interface SelectProps {
  currentVenture: IVenture;
  setSelectedTimelines: React.Dispatch<React.SetStateAction<ITimeline[]>>;
  selectFocused: boolean;
  setSelectFocused: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTimelines: ITimeline[];
}

export function TimelineSelect(props: SelectProps) {
  const {
    currentVenture,
    setSelectedTimelines,
    selectFocused,
    setSelectFocused,
    selectedTimelines,
  } = props;

  const select = useRef<any>(null);
  const { timelines } = useContext(VentureContext);

  const ventureTimelines = timelines.filter(
    (timeline) =>
      timeline.ventureId === currentVenture.id &&
      (currentVenture.userRole === "owner" ||
        (currentVenture.userRole === "member" && timeline.membersWrite))
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
      getOptionSelected={(option, value) => option.id === value.id}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option?.name ?? ""}
            {...getTagProps({ index })}
            style={{
              backgroundColor: "#2E8C8D",
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
          variant="standard"
          style={{ fontFamily: "Poppins" }}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />
      )}
    />
  );
}
