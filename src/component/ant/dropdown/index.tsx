import React from "react";
import { Menu, Dropdown, message } from "antd";
import { IconDotMenuIcon } from "component/plasmic/shared/icons/PlasmicIcon__IconDotMenu";

function handleMenuClick(e: any) {
  // e.preventDefault()
  e.domEvent.preventDefault();
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Edit</Menu.Item>
    <Menu.Item key="2">Archive</Menu.Item>
  </Menu>
);

interface DropdownProps {}

export function AntDropdown(props: DropdownProps) {
  return (
    <Dropdown overlay={menu} trigger={["click"]} overlayStyle={{ zIndex: 50 }}>
      <IconDotMenuIcon style={{ cursor: "pointer" }} />
    </Dropdown>
  );
}
