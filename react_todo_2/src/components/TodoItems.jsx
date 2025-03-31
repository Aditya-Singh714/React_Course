import TodoItem from "./TodoItem";
import "./TodoItems.css";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem todoItem={item.item} todoDate={item.date} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
