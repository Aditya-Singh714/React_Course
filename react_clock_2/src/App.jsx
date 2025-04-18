import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import AnalogClock from "./components/AnalogClock";

function App() {
  return (
    <div className="app-wrapper d-flex flex-column justify-content-center align-items-center text-center">
      <ClockHeading />
      <ClockSlogan />
      <AnalogClock />
    </div>
  );
}

export default App;
