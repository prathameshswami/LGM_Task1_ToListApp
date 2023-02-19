import React from "react";
import TodoItem from "./TodoItem";
import Alerts from "./Alerts";

export default function Todos(props) {

  let myStyle = {
    minHeight : "90vh",
    margin: "40px auto"
  }

  return (
    <div className="container text-center my-3" style={myStyle}>
      <h4><strong><u>Todo's List</u></strong></h4>
      {props.todos.length === 0
        ? <Alerts/>
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.srno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
