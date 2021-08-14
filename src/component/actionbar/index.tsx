import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Descendant } from "slate";

import {
  ComposeEditor,
  EditorShape,
  useEditor,
} from "component/editor/compose";
import { TimelineSelect } from "component/materialui/select";
import {
  DefaultActionBarProps,
  PlasmicActionBar,
} from "component/plasmic/shared/PlasmicActionBar";
import { AuthContext } from "context/AuthContext";
import { VentureContext } from "context/VentureContext";
import { useCreateUpdate } from "module/hook/update";
import { ITimeline } from "module/interface/timeline";
import { IUser } from "module/interface/user";
import { IVenture } from "module/interface/venture";

interface ActionBarProps extends DefaultActionBarProps {
  currentVenture: IVenture;
  currentTimeline: ITimeline;
  timelines: ITimeline[];
  user: IUser;
}

type FormData = {
  title: string;
  description: string;
};

const initialValue: Descendant[] = [
  {
    type: 'title',
    children: [
      {
        text: '',
      }
    ]
  }
]

function ActionBar(props: ActionBarProps) {
  const { currentVenture, currentTimeline, user, timelines, ...rest } = props;

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      description: "",
      title: "",
    },
    mode: "onChange",
  });

  const { token } = useContext(AuthContext);
  const ventureContext = useContext(VentureContext);
  const ventureTimelines = ventureContext.currentVentureTimelines;

  const [selectedTimelines, setSelectedTimelines] = useState(
    currentTimeline ? [currentTimeline] : []
  );
  const hasTimelines = ventureTimelines.some(
    (t) => (t.ventureId = currentVenture.id)
  );

  const [isActive, setIsActive] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);

  const { mutate: createUpdate } = useCreateUpdate();

  const { editorShape, setEditorShape } = useEditor({
    value: initialValue,
  })

  const handlePost = (data: FormData) => {
    if (selectedTimelines.length < 1) {
      return;
    }

    selectedTimelines.forEach((timelineId) => {
      createUpdate({
        title: data.title,
        text: data.description ?? "",
        ventureId: currentVenture.id,
        timelineId: timelineId.id,
        token,
      });
    });

    //reset
    reset();
    setEditorShape({
      value: initialValue,
      string: "",
      numberValue: 0,
      error: undefined,
      hasContent: undefined,
      progress: 0,
    })
    setIsActive(false);
  };

  useEffect(() => {
    if (currentTimeline) {
      const option = [currentTimeline];
      setSelectedTimelines(option);
    } else {
      setSelectedTimelines([]);
    }
  }, [currentTimeline]);

  useEffect(() => {
    register("description", {
      required: {
        message: "Required",
        value: true,
      },
      maxLength: {
        message: "Too long",
        value: 280,
      },
    })
  }, [register])

  return (
    <PlasmicActionBar
      {...rest}
      onClick={() => setIsActive(true)}
      isActive={isActive ? "isActive" : false}
      timelineSelected={true}
      form={{
        onSubmit: handleSubmit(handlePost),
      }}
      title={{
        as: ComposeEditor,
        props: {
          autosize: true,
          "aria-label": "Description",
          editorShape,
          setEditorShape(e: EditorShape) {
            setValue("description", JSON.stringify(e.value));
            console.log(JSON.stringify(e.value))
            trigger("description");
            setEditorShape(e)
          },
        },
      }}
      container={{
        style: {
          width: "100%",
        },
      }}
      selectedItemsContainer={{
        as: TimelineSelect,
        props: {
          style: {
            width: "100%",
          },
          currentVenture,
          selectedTimelines,
          setSelectedTimelines,
          selectFocused,
          setSelectFocused,
        },
      }}
      post={{
        isDisabled: !hasTimelines,
        onPress() {
          handleSubmit(handlePost)();
        },
      }}
      error={
        errors.title?.message || errors.description?.message
          ? "hasError"
          : undefined
      }
      errorMessage={{
        message: errors.title?.message || errors.description?.message,
      }}
    />
  );
}

export default ActionBar;
