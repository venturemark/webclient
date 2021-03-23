// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicPhotoAvatar,
  DefaultPhotoAvatarProps,
} from "component/plasmic/shared/PlasmicPhotoAvatar";
import { IUser } from "module/interface/user";

interface PhotoAvatarProps extends DefaultPhotoAvatarProps {
  profileDropdown: boolean | "profileDropdown" | undefined;
  setProfileDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
}

function PhotoAvatar(props: PhotoAvatarProps) {
  const { profileDropdown, setProfileDropdown, user, ...rest } = props;

  const userInitials =
    user?.name
      .split(" ")
      .map((n: string) => n[0])
      .join("") ?? "";

  return (
    <PlasmicPhotoAvatar
      {...rest}
      onClick={() => setProfileDropdown && setProfileDropdown(!profileDropdown)}
      userInitials={userInitials}
    />
  );
}

export default PhotoAvatar;
