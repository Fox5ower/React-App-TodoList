import React, { useState } from "react";
import "../index.css";
import PropTypes from "prop-types";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
      />
      <button type="submit" className="btnAdd">
        Add todo
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
};

export default AddTodo;
