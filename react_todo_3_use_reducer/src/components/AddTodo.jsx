import { useState } from "react";
import "./AddTodo.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center my-3">
      <div className="row g-2">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success w-100"
            onClick={handleAddButtonClicked}
            disabled={!todoName.trim() || !dueDate} // Prevent empty adds
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
