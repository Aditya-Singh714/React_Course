import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    if (!itemName.trim() || !itemDueDate) return;

    const newTodoItems = [
      ...todoItems,
      { id: Date.now(), name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemId) => {
    const newTodoItems = todoItems.filter((item) => item.id !== todoItemId);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <div className="container my-5">
        <div className="todo-container p-4 rounded shadow">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </div>
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
