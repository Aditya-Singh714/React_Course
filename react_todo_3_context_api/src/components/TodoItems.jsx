import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import "./TodoItems.css";

const TodoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={() => deleteItem(item.id)}
        />
      ))}
    </div>
  );
};

export default TodoItems;
