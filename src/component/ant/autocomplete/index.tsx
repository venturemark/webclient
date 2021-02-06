import React, { useRef, useEffect } from "react";
import { AutoComplete } from "antd";

interface Option {
  value: string;
}

interface SelectProps {
  options: Option[];
  onChange: any;
  setUserFocus?: any;
  userFocus?: boolean;
}

export function AntAutocomplete(props: SelectProps) {
  const { options, onChange, setUserFocus, userFocus } = props;

  const autocomplete = useRef<any>(null);

  useEffect(() => {
    if (userFocus && autocomplete && autocomplete.current) {
      autocomplete.current?.focus();
      setUserFocus(false);
    }
  }, [userFocus, setUserFocus]);

  return (
    <AutoComplete
      style={{
        width: 200,
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "14px",
      }}
      options={options}
      onChange={onChange}
      ref={autocomplete}
      onSelect={() => setUserFocus(true)}
      placeholder="Search for you name"
      filterOption={(inputValue, option) =>
        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
}
