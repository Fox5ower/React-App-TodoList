import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../index.css";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "5px"
  },
  strong: {
    margin: "0 5px"
  },
  input: {
    marginRight: "1rem"
  }
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          style={styles.input}
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong style={styles.strong}>{`${index + 1}.`}</strong>
        {todo.title}
      </span>
      {/* Заменили коллбэк на байнд, он более производителен. Передаем пустой контекст и айди */}
      <button onClick={removeTodo.bind(null, todo.id)} className="rm">
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
