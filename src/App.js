import { useState } from "react";
import { Countdown } from "./features/countdown/Countdown";
import { Instructions } from "./features/instructions/Instructions";
import { Select } from "./features/select/Select";
import { Timer } from "./features/timer/Timer";

import "./App.css";

const initialTimeState = { minutes: 0, seconds: 0, isActive: false, counter: 1 };
const initialInstructionState = {
  step: 0,
  instruction: "Hit Start When Ready",
  stepsCounter: 0,
  repeatCount: 1,
  cycleCount: 0
};
const initialCountdownState = {
  step1: { isActive: false },
  step2: { isActive: false },
  step3: { isActive: false }
};

function App() {
  const [time, setTime] = useState(initialTimeState);
  const [breatheInstructions, setBreatheInstructions] = useState(initialInstructionState);
  const [countdown, setCountdown] = useState(initialCountdownState);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <Timer
        breatheInstructions={breatheInstructions}
        initialCountdownState={initialCountdownState}
        initialInstructionState={initialInstructionState}
        initialTimeState={initialTimeState}
        setBreatheInstructions={setBreatheInstructions}
        setCountDown={setCountdown}
        setTime={setTime}
        time={time}
        setDisabled={setDisabled}
      />
      <Countdown countdown={countdown} />
      <Instructions
        breatheInstructions={breatheInstructions}
        countdown={countdown}
        initialTimeState={initialTimeState}
        setBreatheInstructions={setBreatheInstructions}
        setCountdown={setCountdown}
        setDisabled={setDisabled}
        setTime={setTime}
        time={time}
      />
      <Select
        breatheInstructions={breatheInstructions}
        setBreatheInstructions={setBreatheInstructions}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
