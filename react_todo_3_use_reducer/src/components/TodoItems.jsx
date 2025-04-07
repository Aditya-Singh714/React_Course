import TodoItem from "./TodoItem";
import "./TodoItems.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name} // Fixed key issue
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={() => onDeleteClick(item.name)} // Changed to use id
        />
      ))}
    </div>
  );
};

export default TodoItems;
