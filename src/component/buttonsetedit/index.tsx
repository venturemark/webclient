import {
  DefaultButtonSetEditProps,
  PlasmicButtonSetEdit,
} from "component/plasmic/shared/PlasmicButtonSetEdit";

interface ButtonSetEditProps extends DefaultButtonSetEditProps {
  handleSave?: (e: any) => void;
  handleCancel?: () => void;
  handleDelete?: () => void;
}

function ButtonSetEdit(props: ButtonSetEditProps) {
  const { handleSave, handleCancel, handleDelete, ...rest } = props;

  return (
    <PlasmicButtonSetEdit
      {...rest}
      save={{ onPress: handleSave, elementType: "button" }}
      cancel={{ onPress: handleCancel, elementType: "button" }}
      _delete={{ onPress: handleDelete, elementType: "button" }}
    />
  );
}

export default ButtonSetEdit;
