import "./TodoItems.css";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row align-items-center bg-light p-2 rounded shadow-sm mb-2">
        <div className="col-6 fw-bold">{todoName}</div>
        <div className="col-4 text-muted">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger w-100"
            onClick={() => onDeleteClick(todoName)}
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
