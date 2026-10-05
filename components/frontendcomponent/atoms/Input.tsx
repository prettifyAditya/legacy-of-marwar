"use client";

import { useCallback, useEffect, useState } from "react";
import type { HTMLInputTypeAttribute, SyntheticEvent } from "react";

interface InputProps {
  classname?: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  id: string;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export default function Input({
  classname = "",
  label,
  type = "text",
  name,
  id,
  onChange,
  value = "",
  placeholder = "",
  required = false,
  error = "",
}: InputProps) {
  const [isActive, setIsActive] = useState(!!value);
  const [isValid, setIsValid] = useState(!!value);

  useEffect(() => {
    setIsActive(!!value);
    setIsValid(!!value);
  }, [value]);

  const handleForm = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      const val = e.currentTarget.value;
      const valid = val !== "";
      setIsValid(valid);
      setIsActive(valid);
      onChange?.(e);
    },
    [onChange],
  );

  return (
    <div className={`form-group ${isActive ? "active" : ""}  ${classname}`}>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        required={required}
        className={`form-control ${isValid ? "valid" : ""}`}
        onFocus={handleForm}
        onInput={handleForm}
        onChange={handleForm}
        onBlur={handleForm}
      />
      <label htmlFor={id}>{label}</label>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
