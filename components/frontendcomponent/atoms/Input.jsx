"use client"
import { useState, useCallback, useEffect } from "react"

export default function Input({ classname = "", label, type = "text", name, id, onChange, value = "", placeholder = "", required = false, error = "" }) {
  const [isActive, setIsActive] = useState(!!value)
  const [isValid, setIsValid] = useState(!!value)

  useEffect(() => {
    setIsActive(!!value)
    setIsValid(!!value)
  }, [value])

  const handleForm = useCallback((e) => {
    const val = e.target.value
    const valid = val !== ""
    setIsValid(valid)
    setIsActive(valid)
    if (onChange) onChange(e)
  }, [onChange])

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
  )
}