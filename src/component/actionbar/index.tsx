// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicActionBar,
  DefaultActionBarProps,
} from "component/plasmic/shared/PlasmicActionBar";
// import { EditorShape } from "component/editor/compose";
import { INewUpdate } from "module/interface/update";
import { AntSelect } from "component/ant/select";
import { useForm } from "react-hook-form";
// import { initialValueEmpty } from "component/editor/config/initialValues";
// import { Search } from "@venturemark/numnum";
// import { serialize } from "module/serialize";
// import { get } from "module/store";
// import { useEditor } from "component/editor/compose";
import { useCreateUpdate } from "module/hook/update";
import { ITimeline } from "module/interface/timeline";
import { useAuth0 } from "@auth0/auth0-react";

interface ActionBarProps extends DefaultActionBarProps {
  ventureId: string;
  userId: string;
  currentTimeline: ITimeline;
}

function ActionBar(props: ActionBarProps) {
  const { ventureId, userId, currentTimeline } = props;
  const { user, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>("");
  const { handleSubmit, register, reset } = useForm();

  // const store = get("composeEditor.content") ?? "";
  // const initialValue = store !== "" ? JSON.parse(store) : initialValueEmpty;
  // const hasContentDefault =
  //   serialize(initialValue) === "" || serialize(initialValue) === undefined
  //     ? undefined
  //     : "hasContent";
  // const defaultNumber = Search(serialize(initialValue)) ?? 0;
  // const defaultProgress = serialize(initialValue).length;
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

  // const { editorShape, setEditorShape } = useEditor({
  //   value: initialValue,
  //   hasContent: hasContentDefault,
  //   numberValue: defaultNumber[0],
  //   progress: defaultProgress,
  // });

  const { mutate: createUpdate } = useCreateUpdate();

  const handlePost = (data: any) => {
    if (selectedTimelines.length < 1) {
      // const error = "Please select a timeline";
      // setEditorShape({ ...editorShape, error });
      return;
    }
    // if (!editorShape.hasContent) {
    //   const error = "Please enter some text";
    //   // setEditorShape({ ...editorShape, error });
    //   return;
    // }

    // if (serialize(editorShape.value).length > 281) {
    //   const error = `Your update is ${
    //     serialize(editorShape.value).length
    //   } characters. The limit is 280 characters`;
    //   setEditorShape({ ...editorShape, error });
    //   return;
    // }

    // how do we manage tokens in the same place?

    selectedTimelines.forEach((timelineId) => {
      const newUpdate: INewUpdate = {
        // text: serialize(editorShape.value),
        text: data.description,
        ventureId,
        timelineId: timelineId,
        userId,
        token,
      };

      console.log("creating this update:", newUpdate);

      createUpdate(newUpdate);
    });

    //reset
    reset();
    setIsActive(false);

    //reset store
    // localStorage.setItem(
    //   "composeEditor.content",
    //   JSON.stringify(initialValueEmpty)
    // );

    //reset editor
    // const resetEditor: EditorShape = {
    //   value: initialValueEmpty,
    //   string: "",
    //   hasContent: undefined,
    //   numberValue: 0,
    //   error: undefined,
    //   progress: 0,
    // };

    // setEditorShape(resetEditor);
  };

  // const MIN = 0;
  // const MAX = 240;
  // const normalize = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

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
        ref: register(),
        name: "title",
      }}
      description={{
        ref: register(),
        name: "description",
      }}
      tagsContainer={{
        render: () => (
          <AntSelect
            userId={userId}
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
      // sendUpdate={{
      //   handleClick: () => handleAddUpdate() }}

      // error={editorShape.error ? "hasError" : undefined}
      error={undefined}
      // text={normalize(editorShape.progress) > 0 ? "hasText" : undefined}
      text={undefined}
      timelineSelected={isTimelineSelected}
      add={
        {
          // onClick: () => {
          //   setIsTimelineSelected(true);
          //   setSelectFocused(true);
          // },
        }
      }
      selectedItemsContainer={{
        render: () => (
          <AntSelect
            userId={userId}
            ventureId={ventureId}
            selectedTimelines={selectedTimelines}
            setSelectedTimelines={setSelectedTimelines}
            selectFocused={selectFocused}
            setSelectFocused={setSelectFocused}
          />
        ),
      }}
      // errorMessage={editorShape.error}
      // textContainer={{
      //   render: () => (
      //     <ComposeEditor
      //       editorShape={editorShape}
      //       setEditorShape={setEditorShape}
      //     />
      //   ),
      // }}
    />
  );
}

export default ActionBar;
