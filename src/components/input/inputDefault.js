import React from "react";

export const InputDefault = ({
  placeholder,
  disabled,
  value,
  onChange,
  name
}) => (
  <input
    placeholder={placeholder}
    disabled={disabled}
    value={value}
    onChange={onChange}
    name={name}
  />
);
