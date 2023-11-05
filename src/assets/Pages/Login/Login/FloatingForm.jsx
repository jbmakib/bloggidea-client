import React from "react";

const FloatingForm = (props) => {
  // const key, type, name, = {}

  return (
    <div className="form-floating mb-3">
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onInput={props.onInput}
        required
      />
      <label htmlFor={props.id}>{props.placeholder}</label>
    </div>
  );
};

export default FloatingForm;
