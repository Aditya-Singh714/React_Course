import CalculatorButtons from "./CalculatorButtons.";
import CalculatorDisplay from "./CalculatorDisplay";
import "./CalculatorUI.css";

const CalculatorUI = () => {
  return (
    <center>
      <CalculatorDisplay />
      <CalculatorButtons />
    </center>
  );
};

export default CalculatorUI;
