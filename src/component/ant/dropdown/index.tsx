import React from 'react';
import { Menu, Dropdown, Button, message, } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {IconDotMenuIcon} from 'component/plasmic/shared/icons/PlasmicIcon__IconDotMenu'

function handleMenuClick(e:any) {
  // e.preventDefault()
  e.domEvent.preventDefault()
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      Edit
    </Menu.Item>
    <Menu.Item key="2">
      Archive
    </Menu.Item>
  </Menu>
);

interface DropdownProps {
  timelineId?: string;
  updateId?: string;
  // setSelectedTimelines: React.Dispatch<
  //   React.SetStateAction<string[]>
  // >;
}

export function AntDropdown(props: DropdownProps) {
  const {updateId, timelineId} = props

  

  return (
    <Dropdown overlay={menu} trigger={['click']} overlayStyle={{"zIndex": 50}}>
        <IconDotMenuIcon/> 
    </Dropdown>
  );
}
