// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState } from "react";
import {
  PlasmicHome,
  DefaultHomeProps,
} from "component/plasmic/shared/PlasmicHome";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ISearchVenture, IVenture } from "module/interface/venture";
import { ISearchUser } from "module/interface/user";
import { useUser } from "module/hook/user";
import { useVenture } from "module/hook/venture";
import { useGetToken } from "module/auth";
import { Redirect, useParams, useLocation } from "react-router-dom";
import { IUpdate } from "module/interface/update";

interface ParamTypes {
  ventureSlug: string;
  timelineSlug: string;
}

type VariantType = "isEmpty" | "isTimeline" | "isVenture" | undefined;
type IsActive = "feed" | "settings" | "members" | undefined;
type IsVisible = "postDetails" | "mobileSidebar" | "showModal" | undefined;
type ModalType = "deleteTimeline" | "deleteVenture" | "editProfile" | undefined;

interface HomeProps extends DefaultHomeProps {
  timelineVariant?: "isTimeline";
  activeState?: IsActive;
  modalType?: ModalType;
  isVisible?: IsVisible;
}

export function Home(props: HomeProps) {
  const {
    timelineVariant,
    activeState,
    modalType,
    isVisible: visibleProp,
  } = props;
  const token = useGetToken();
  const { ventureSlug } = useParams<ParamTypes>();
  const url = useLocation();

  const userSearch: ISearchUser = {
    token,
  };
  const {
    data: userData,
    isSuccess: userSuccess,
    isError: userError,
  } = useUser(userSearch);
  const user = userData;

  const ventureSearch: ISearchVenture = {
    userId: user?.id,
    token: token,
  };

  const { data: ventureData, isSuccess: ventureSuccess } = useVenture(
    ventureSearch
  );

  const ventures = ventureData ?? [];
  const currentVenture = ventureSlug
    ? ventures.filter(
        (venture: IVenture) =>
          venture.name.toLowerCase().replace(/\s/g, "") === ventureSlug
      )[0]
    : ventures[0];

  const ventureId = currentVenture?.id ?? "";
  const ventureHandle = currentVenture?.name?.toLowerCase().replace(/\s/g, "");

  const variant = timelineVariant ? "isTimeline" : "isVenture";
  const active = activeState ? activeState : "feed";

  // local hooks shared with page-level elements
  const [isVisible, setIsVisible] = useState<IsVisible>(visibleProp);
  const [post, setPost] = useState<IUpdate>();
  const [variantType] = useState<VariantType>(variant);

  if (userSuccess && !user) {
    return <Redirect to={`/signin`} />;
  }

  if (userError && !user) {
    return <Redirect to={`/signin`} />;
  }

  if (
    ventureSuccess &&
    ventureData.length < 1 &&
    url.pathname !== "/newventure"
  ) {
    return <Redirect to={`/newventure`} />;
  }
  if (
    ventureSlug === undefined &&
    ventureHandle &&
    url.pathname !== "/newventure" &&
    url.pathname !== "/editprofile"
  ) {
    return <Redirect to={`/${ventureHandle}/feed`} />;
  }

  // if (timelineSuccess && !timelinesData) {
  //   return <Redirect to={`/newtimeline`} />;
  // }

  return (
    <>
      <PlasmicHome
        isVisible={isVisible}
        header={{
          isVisible,
          setIsVisible,
          user,
        }}
        modal={{
          isVisible,
          setIsVisible,
          modalType,
        }}
        main={{
          variantType,
          isActive: active,
          setIsVisible,
          setPost,
          currentVenture,
          ventureId,
          user,
        }}
        sidebar={{
          userId: user?.id,
          ventures,
        }}
        postDetails={{
          setIsVisible,
          post,
          ventureId,
        }}
      />
    </>
  );
}

export default withAuthenticationRequired(Home);
