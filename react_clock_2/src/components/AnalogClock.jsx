import { useEffect, useState } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  return (
    <div className="analog-clock">
      <div className="center-point" />
      <div
        className="hand hour-hand"
        style={{ transform: `rotate(${hourDeg}deg)` }}
      />
      <div
        className="hand minute-hand"
        style={{ transform: `rotate(${minuteDeg}deg)` }}
      />
      <div
        className="hand second-hand"
        style={{ transform: `rotate(${secondDeg}deg)` }}
      />
    </div>
  );
};

export default AnalogClock;
