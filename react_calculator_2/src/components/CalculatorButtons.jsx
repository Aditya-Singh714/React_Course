import "./CalculatorButtons.css";

const CalculatorButtons = ({ onButtonClick }) => {
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
        <button onClick={() => onButtonClick(buttonVal)} key={buttonVal}>
          {buttonVal}
        </button>
      ))}
    </div>
  );
};

export default CalculatorButtons;
