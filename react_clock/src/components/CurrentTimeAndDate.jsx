import React from "react";

const CurrentTimeAndDate = () => {
  let date = new Date().toLocaleDateString("en-IN", {
    timeZone: "Asia/Kolkata",
  });
  let time = new Date().toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
  });
  return (
    <div>
      <p className="text-primary">
        Current Time: {date} - {time}
      </p>
    </div>
  );
};

export default CurrentTimeAndDate;
