import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && (
      <div className="alert alert-warning text-center p-3 rounded shadow-sm">
        <h2 className="fw-bold text-dark">Boost Your Productivity! 🚀</h2>
        <p className="mb-0 text-muted">
          Plan, prioritize, and accomplish more. Stay organized, stay ahead!
        </p>
      </div>
    )
  );
};

export default WelcomeMessage;
