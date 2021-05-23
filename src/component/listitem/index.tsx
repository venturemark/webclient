import {
  DefaultListItemProps,
  PlasmicListItem,
} from "component/plasmic/shared/PlasmicListItem";

interface ListItemProps extends DefaultListItemProps {
  onClick?: () => void;
}

function ListItem(props: ListItemProps) {
  const { onClick, ...rest } = props;

  return <PlasmicListItem onClick={onClick} {...rest} />;
}

export default ListItem;
