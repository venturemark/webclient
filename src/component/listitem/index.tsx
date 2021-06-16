import { Link } from "react-router-dom";

import {
  DefaultListItemProps,
  PlasmicListItem,
} from "component/plasmic/shared/PlasmicListItem";

interface ListItemProps extends DefaultListItemProps {
  onClick?: () => void;
  href?: string;
}

function ListItem(props: ListItemProps) {
  const { href, onClick, ...rest } = props;

  return (
    <PlasmicListItem
      {...rest}
      onClick={onClick}
      link={
        href
          ? {
              as: Link,
              props: {
                to: href,
              },
            }
          : {}
      }
    />
  );
}

export default ListItem;
