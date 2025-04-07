import { useContext } from "react";
import "./TodoItems.css";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row align-items-center bg-light p-2 rounded shadow-sm mb-2">
        <div className="col-6 fw-bold">{todoName}</div>
        <div className="col-4 text-muted">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn w-100"
            onClick={() => deleteItem(todoName)}
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
