import React from "react";

const TodoItem1 = () => {
  let todoItem = "Milk";
  let todoDate = "04/10/2024";
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

export default TodoItem1;
