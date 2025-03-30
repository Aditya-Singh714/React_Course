const AddTodo = () => {
  return (
    <div className="container text-center">
      <div className="row rows">
        <div className="col-6">
          <input type="text" placeholder="Add a new task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success w-100">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
