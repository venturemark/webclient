// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicActionBar,
  DefaultActionBarProps,
} from "component/plasmic/shared/PlasmicActionBar";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { ICreateUpdate } from "module/interface/update";
import { AntSelect } from "component/ant/select";
import { useForm } from "react-hook-form";
import { useCreateUpdate } from "module/hook/update";
import { ITimeline } from "module/interface/timeline";
import { useAuth0 } from "@auth0/auth0-react";

interface ActionBarProps extends DefaultActionBarProps {
  ventureId: string;
  currentTimeline: ITimeline;
}

function ActionBar(props: ActionBarProps) {
  const { ventureId, currentTimeline } = props;
  const { user, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>("");
  const { handleSubmit, register, reset } = useForm();

  const userInitials =
    user?.name
      .split(" ")
      .map((n: string) => n[0])
      .join("") ?? "";

  const defaultTimelineOption = [currentTimeline?.id] ?? [];
  const [selectedTimelines, setSelectedTimelines] = useState(
    defaultTimelineOption
  );

  const [isActive, setIsActive] = useState(false);
  const [isTimelineSelected] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);

  const { mutate: createUpdate } = useCreateUpdate();

  const handlePost = (data: any) => {
    if (selectedTimelines.length < 1) {
      return;
    }

    selectedTimelines.forEach((timelineId) => {
      const newUpdate: ICreateUpdate = {
        text: data.description,
        ventureId,
        timelineId: timelineId,
        token,
      };

      createUpdate(newUpdate);
    });

    //reset
    reset();
    setIsActive(false);
  };

  useEffect(() => {
    if (currentTimeline) {
      const option = [currentTimeline.id];
      setSelectedTimelines(option);
    } else {
      setSelectedTimelines([]);
    }

    //auth
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
  }, [currentTimeline, getAccessTokenSilently, token]);

  return (
    <PlasmicActionBar
      onClick={() => setIsActive(true)}
      isActive={isActive}
      form={{
        onSubmit: handleSubmit(handlePost),
      }}
      photoAvatar={{
        userInitials,
      }}
      title={{
        render: () => (
          <TextareaAutosize
            aria-label="Title"
            style={{
              resize: "none",
              fontSize: "18px",
              fontWeight: 600,
              color: "261A3F",
              fontFamily: "Poppins",
              outline: "none",
              border: "none",
            }}
            rowsMin={1}
            placeholder="Write your update"
            name="title"
            ref={register()}
          />
        ),
      }}
      description={{
        render: () => (
          <TextareaAutosize
            aria-label="Description"
            style={{
              resize: "none",
              fontSize: "15px",
              fontWeight: 300,
              color: "261A3F",
              fontFamily: "Poppins",
              outline: "none",
              border: "none",
            }}
            rowsMin={4}
            placeholder="Description..."
            name="description"
            ref={register()}
          />
        ),
      }}
      tagsContainer={{
        render: () => (
          <AntSelect
            ventureId={ventureId}
            selectedTimelines={selectedTimelines}
            setSelectedTimelines={setSelectedTimelines}
            selectFocused={selectFocused}
            setSelectFocused={setSelectFocused}
          />
        ),
      }}
      post={{
        type: "submit",
      }}
      error={undefined}
      text={undefined}
      timelineSelected={isTimelineSelected}
      selectedItemsContainer={{
        render: () => (
          <AntSelect
            ventureId={ventureId}
            selectedTimelines={selectedTimelines}
            setSelectedTimelines={setSelectedTimelines}
            selectFocused={selectFocused}
            setSelectFocused={setSelectFocused}
          />
        ),
      }}
    />
  );
}

export default ActionBar;
