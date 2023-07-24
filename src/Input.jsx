import React from "react";
import { caracola } from "./utils.js";
import "./Input.css";

const Input = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="Input">
      <label className='label'>Oh caracola magica, </label>
      <textarea
        type="text"
        onChange={({ target }) => {
          setValue(target.value);
        }}
        value={value}
        className="txt"
      />
      <button
        className="btn"
        onClick={() => {
          caracola(value);
        }}
      >
        Preguntar
      </button>
    </div>
  );
};

export default Input;
