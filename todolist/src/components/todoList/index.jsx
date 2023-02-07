import { useContext, useReducer } from "react";
import { ApplicationCtx } from "../../store/state";
import { TodoItem } from "../todoItem";

export function TodoList() {
  const { state } = useContext(ApplicationCtx);
  const { todoList } = state;

  return (
    <div>
      {todoList.map((todoitem) => (
        <TodoItem data={todoitem}></TodoItem>
      ))}
    </div>
  );
}
