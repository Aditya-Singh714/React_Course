import TodoItem from "./TodoItem";
import "./TodoItems.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id} // Fixed key issue
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={() => onDeleteClick(item.id)} // Changed to use id
        />
      ))}
    </div>
  );
};

export default TodoItems;
