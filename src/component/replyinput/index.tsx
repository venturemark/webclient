// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicReplyInput,
  DefaultReplyInputProps,
} from "component/plasmic/shared/PlasmicReplyInput";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import { ICreateMessage } from "module/interface/message";
import { useCreateMessage } from "module/hook/message";

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
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>("");

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

    // console.log(newMessage);

    // audienceMutation(messageId)
    createMessage(newMessage);

    //reset form
    reset({
      text: "",
    });
  };

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
  }, [getAccessTokenSilently, token]);

  return (
    <PlasmicReplyInput
      replyForm={{
        onSubmit: handleSubmit(handleAddMessage),
      }}
      replyInput={{
        name: "text",
        ref: register(),
      }}
      postReplyButton={{
        type: "submit",
      }}
    />
  );
}

export default ReplyInput;
