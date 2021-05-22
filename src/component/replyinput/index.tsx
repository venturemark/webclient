import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import {
  DefaultReplyInputProps,
  PlasmicReplyInput,
} from "component/plasmic/shared/PlasmicReplyInput";
import { AuthContext } from "context/AuthContext";
import { UserContext } from "context/UserContext";
import { useCreateMessage } from "module/hook/message";
import { ICreateMessage } from "module/interface/message";

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
  const { token } = useContext(AuthContext);
  const userContext = useContext(UserContext);

  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const { mutate: createMessage } = useCreateMessage();

  const handleAddMessage = (data: FormInputs) => {
    if (!data.text) {
      return;
    }

    const newMessage: ICreateMessage = {
      text: data.text,
      userId: userContext.user?.id ?? "",
      ventureId,
      timelineId,
      updateId,
      token,
    };

    createMessage(newMessage);

    //reset form
    reset();
  };

  const handleUserKeyDown = (e: any) => {
    if (e.key === "Enter" && e.metaKey) {
      e.preventDefault();
      handleSubmit(handleAddMessage)();
    }
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
            onKeyDown={handleUserKeyDown}
            ref={register()}
          />
        ),
      }}
      postReplyButton={{
        onPress: () => handleSubmit(handleAddMessage)(),
      }}
    />
  );
}

export default ReplyInput;
