import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "ADD_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }
  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const handleNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
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
