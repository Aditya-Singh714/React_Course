import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    if (!itemName.trim() || !itemDueDate) return; // Prevent empty tasks
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { id: Date.now(), name: itemName, dueDate: itemDueDate }, // Added unique id
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemId) => {
    const newTodoItems = todoItems.filter((item) => item.id !== todoItemId);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="container my-5">
      <div className="todo-container p-4 rounded shadow">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 ? <WelcomeMessage /> : null}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </div>
  );
}

export default App;
