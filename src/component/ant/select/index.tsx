import React from 'react';
import { Select, Tag } from 'antd';

const options = [{ value: 'gold', label: 'name' }, { value: 'lime', label: 'cousin' }, { value: 'green',label: 'home' }, { value: 'cyan',label: 'house' }];

function tagRender(props:any) {
  const { label, value, closable, onClose } = props;

  return (
    <Tag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3, borderRadius:8 }}>
      {label}
    </Tag>
  );
}

// interface SelectProps {

// }

export function AntSelect() {
  return (
    <Select
      mode="multiple"
      showArrow
      placeholder={"Select Timeline"}
      tagRender={tagRender}
      defaultValue={['gold', 'cyan', 'yellow', 'green']}
      style={{ width: '100%' }}
      options={options}
    />
  );
}
