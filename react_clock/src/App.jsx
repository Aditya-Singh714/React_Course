import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTimeAndDate from "./components/CurrentTimeAndDate";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTimeAndDate />
    </center>
  );
}

export default App;
