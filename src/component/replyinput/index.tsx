// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React from "react";
import {
  PlasmicReplyInput,
  DefaultReplyInputProps,
} from "component/plasmic/shared/PlasmicReplyInput";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useForm } from "react-hook-form";
import { ICreateMessage } from "module/interface/message";
import { useCreateMessage } from "module/hook/message";
import { useGetToken } from "module/auth";

type FormInputs = {
  text: string;
};

interface ReplyInputProps extends DefaultReplyInputProps {
  updateId: string;
  timelineId: string;
  ventureId: string;
}

function ReplyInput(props: ReplyInputProps) {
  const { updateId, timelineId, ventureId } = props;
  const token = useGetToken();

  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const { mutate: createMessage } = useCreateMessage();

  const handleAddMessage = (data: FormInputs) => {
    if (!data.text) {
      return;
    }

    const newMessage: ICreateMessage = {
      text: data.text,
      ventureId,
      timelineId,
      updateId,
      token,
    };

    createMessage(newMessage);

    //reset form
    reset();
  };

  return (
    <PlasmicReplyInput
      replyForm={{
        onSubmit: handleSubmit(handleAddMessage),
      }}
      replyInput={{
        render: () => (
          <TextareaAutosize
            aria-label="Description"
            style={{
              resize: "none",
              fontSize: "16px",
              fontWeight: 300,
              color: "261A3F",
              fontFamily: "Poppins",
              outline: "none",
              border: "1px",
              borderColor: "1px solid #E0E0E0",
              width: "100%",
              padding: "20px 15px",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
            rowsMin={1}
            placeholder="Description..."
            name="text"
            ref={register()}
          />
        ),
      }}
      postReplyButton={{
        type: "submit",
      }}
    />
  );
}

export default ReplyInput;
