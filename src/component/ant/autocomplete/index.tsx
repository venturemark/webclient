import React from 'react';
import { AutoComplete } from 'antd';

interface Option {
  value: string;
}

interface SelectProps {
  options: Option[];
  onChange: any;
}

export function AntAutocomplete(props: SelectProps) {
  const { options, onChange } = props;
  return (
    <AutoComplete
      style={{ width: 200 }}
      options={options}
      onChange={onChange}
      placeholder="try to type `b`"
      filterOption={(inputValue, option) =>
        option!.value
          .toUpperCase()
          .indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
}
