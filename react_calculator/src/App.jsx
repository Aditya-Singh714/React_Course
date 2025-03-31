import "./App.css";
import CalculatorHeading from "./components/CalculatorHeading";
import CalculatorUI from "./components/CalculatorUI";

function App() {
  return (
    <center>
      <CalculatorHeading />
      <div className="calculator">
        <CalculatorUI />
      </div>
    </center>
  );
}

export default App;
