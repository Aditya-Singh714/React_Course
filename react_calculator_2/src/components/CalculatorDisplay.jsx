import "./CalculatorDisplay.css";

const CalculatorDisplay = ({ displayValue }) => {
  return (
    <div>
      <input className="display" type="text" value={displayValue} readOnly />
    </div>
  );
};

export default CalculatorDisplay;
