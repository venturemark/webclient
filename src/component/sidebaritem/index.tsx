// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from 'react';
import { PressEvent } from '@react-types/shared';
import {
  PlasmicSidebarItem,
  DefaultSidebarItemProps,
} from 'component/plasmic/shared/PlasmicSidebarItem';

interface SidebarItemProps extends DefaultSidebarItemProps {
  name: string;
  hasIcon?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  startIcon?: boolean;
  onPress?: (e: PressEvent) => void;
  isCurrent: boolean;
}

function SidebarItem(props: SidebarItemProps) {
  const {
    name,
    hasIcon,
    onClick,
    startIcon,
    onPress,
    isCurrent,
  } = props;
  return (
    <PlasmicSidebarItem
      name={name}
      isCurrent={isCurrent}
      hasIcon={hasIcon}
      onClick={onClick}
      startIcon={startIcon}
      itemButton={{
        onPress: (e) => {
          onPress ? onPress(e) : console.log('null');
        },
      }}
    />
  );
}

export default SidebarItem;
