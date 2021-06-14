import {
  DefaultPhotoAvatarProps,
  PlasmicPhotoAvatar,
} from "component/plasmic/shared/PlasmicPhotoAvatar";

interface PhotoAvatarProps extends DefaultPhotoAvatarProps {
  profileDropdown: boolean | "profileDropdown" | undefined;
  setProfileDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  user: {
    name?: string;
  };
}

function PhotoAvatar(props: PhotoAvatarProps) {
  const { profileDropdown, setProfileDropdown, user, ...rest } = props;

  const userInitials =
    user.name
      ?.split(" ")
      .map((n: string) => n[0])
      .join("") ?? "";

  return (
    <PlasmicPhotoAvatar
      {...rest}
      onClick={() => {
        setProfileDropdown && setProfileDropdown(!profileDropdown);
      }}
      userInitials={userInitials}
    />
  );
}

export default PhotoAvatar;
