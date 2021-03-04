// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
  PlasmicAddEditTimeline,
  DefaultAddEditTimelineProps,
} from "component/plasmic/shared/PlasmicAddEditTimeline";
import { useForm } from "react-hook-form";
import { INewTimeline } from "module/interface/timeline";
import { useCreateTimeline } from "module/hook/timeline";
import { useAuth0 } from "@auth0/auth0-react";
import { getUser, getVenture } from "module/store";
import { useHistory } from "react-router-dom";

interface AddEditTimelineProps extends DefaultAddEditTimelineProps {
  setIsActive: any;
}

function AddEditTimeline(props: AddEditTimelineProps) {
  const { setIsActive, ...rest } = props;
  const history = useHistory();
  const { handleSubmit, register, reset } = useForm();
  const { getAccessTokenSilently } = useAuth0();
  const { mutate: createTimeline } = useCreateTimeline();
  const [token, setToken] = useState<string>("");
  const userId = getUser()?.id ?? "";
  const ventureId = getVenture()?.id ?? "";

  const handleCreate = (data: any) => {
    if (!token || !data.name || !data.description) {
      return;
    }
    const timeline: INewTimeline = {
      name: data.name,
      desc: data.description,
      userId,
      ventureId: ventureId,
      token: token,
    };

    createTimeline(timeline);
    reset();
    history.push(`/${ventureId}/feed`);
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
    <PlasmicAddEditTimeline
      settings={{
        onSubmit: handleSubmit(handleCreate),
      }}
      name={{
        register: register(),
        name: "name",
      }}
      description={{
        register: register(),
        name: "description",
      }}
      visibility={{}}
      {...rest}
    />
  );
}

export default AddEditTimeline;
