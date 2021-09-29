import React, { useEffect, useState } from "react";

const initialTimeState = { minutes: 0, seconds: 0, isActive: false, counter: 1 };

export const Timer = () => {
  const [time, setTime] = useState(initialTimeState);

  const handleClick = () => {
    setTime({ ...time, isActive: !time.isActive });
  };
  console.log("seconds", time.seconds);
  useEffect(() => {
    let intervalId;
    if (time.isActive) {
      intervalId = setInterval(() => {
        const secondCounter = time.counter % 60;
        const minuteCounter = Math.floor(time.counter / 60);

        setTime({
          ...time,
          minutes: minuteCounter,
          seconds: secondCounter,
          counter: (time.counter += 1)
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [time]);
  return (
    <div>
      {time.minutes}: {time.seconds < 10 ? "0" + time.seconds : time.seconds}
      <button onClick={handleClick}>Start</button>
    </div>
  );
};
