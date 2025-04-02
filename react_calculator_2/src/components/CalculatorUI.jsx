import { useState } from "react";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorDisplay from "./CalculatorDisplay";
import "./CalculatorUI.css";

const CalculatorUI = () => {
  const [displayValue, setDisplayValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setDisplayValue("");
    } else if (buttonText === "=") {
      setDisplayValue(eval(displayValue).toString());
    } else {
      const newDisplayValue = displayValue + buttonText;
      setDisplayValue(newDisplayValue);
    }
  };

  return (
    <center>
      <CalculatorDisplay displayValue={displayValue} />
      <CalculatorButtons onButtonClick={onButtonClick} />
    </center>
  );
};

export default CalculatorUI;
