import "./CalculatorButtons.css";

const CalculatorButtons = () => {
  const buttons = [
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "*",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];
  return (
    <div className="calculator-buttons">
      {buttons.map((buttonVal) => (
        <button>{buttonVal}</button>
      ))}
    </div>
  );
};

export default CalculatorButtons;
