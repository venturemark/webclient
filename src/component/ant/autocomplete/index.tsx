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
      style={{
        width: 200,
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: '14px',
      }}
      options={options}
      onChange={onChange}
      placeholder="Search for you name"
      filterOption={(inputValue, option) =>
        option!.value
          .toUpperCase()
          .indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
}
