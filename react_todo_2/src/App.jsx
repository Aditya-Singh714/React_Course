import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    { item: "Milk", date: "04/10/2024" },
    { item: "Bread", date: "04/10/2024" },
    { item: "Play video games", date: "04/10/2024" },
    { item: "Eat lunch", date: "04/10/2024" },
    { item: "Code the new feature", date: "04/10/2024" },
    { item: "Workout", date: "04/10/2024" },
    { item: "Read a book", date: "04/10/2024" },
    { item: "Go for a walk", date: "04/10/2024" },
    { item: "Cook dinner", date: "04/10/2024" },
    { item: "Watch a movie", date: "04/10/2024" },
    { item: "Listen to a podcast", date: "04/10/2024" },
    { item: "Practice a new programming language", date: "04/10/2024" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
