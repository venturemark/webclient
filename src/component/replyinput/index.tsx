import { useContext } from "react";
import { useForm } from "react-hook-form";

import InputTextArea from "component/inputtextarea";
import {
  DefaultReplyInputProps,
  PlasmicReplyInput,
} from "component/plasmic/shared/PlasmicReplyInput";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { useCreateMessage } from "module/hook/message";

type FormData = {
  text: string;
};

interface ReplyInputProps extends DefaultReplyInputProps {
  updateId: string;
  timelineId: string;
  ventureId: string;
}

function ReplyInput(props: ReplyInputProps) {
  const { updateId, timelineId, ventureId } = props;
  const { token } = useContext(AuthContext);
  const userContext = useContext(UserContext);

  const { register, handleSubmit, reset, setValue, trigger, watch } =
    useForm<FormData>({
      defaultValues: {
        text: "",
      },
    });
  const values = watch();
  const { mutate: createMessage } = useCreateMessage();

  const handleAddMessage = (data: FormData) => {
    if (!data.text) {
      return;
    }

    createMessage({
      text: data.text,
      userId: userContext.user?.id ?? "",
      ventureId,
      timelineId,
      updateId,
      token,
    });

    //reset form
    reset();
  };

  return (
    <PlasmicReplyInput
      replyForm={{
        onSubmit: handleSubmit(handleAddMessage),
      }}
      replyInput={{
        as: InputTextArea,
        props: {
          ...register("text", {
            required: {
              message: "Required",
              value: true,
            },
            maxLength: {
              message: "Too long",
              value: 100,
            },
          }),
          autosize: true,
          "aria-label": "Text",
          onChange(e: string) {
            setValue("text", e);
            trigger("text");
          },
          value: values.text,
        },
      }}
      postReplyButton={{
        onPress: () => handleSubmit(handleAddMessage)(),
      }}
    />
  );
}

export default ReplyInput;
