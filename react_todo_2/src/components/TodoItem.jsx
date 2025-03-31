import "./TodoItems.css";

const TodoItem = ({ todoItem, todoDate }) => {
  return (
    <div className="container">
      <div className="row rows">
        <div className="col-6">{todoItem}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger w-100">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
