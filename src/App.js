import { useState } from "react";
import { Instructions } from "./features/instructions/Instructions";
import { Slider } from "./features/slider/Slider";
import { Timer } from "./features/timer/Timer";

const initialTimeState = { minutes: 0, seconds: 0, isActive: false, counter: 1 };
const initialInstructionState = {
  step: 0,
  instruction: "",
  stepsCounter: 0,
  repeatCount: 1,
  cycleCount: 0
};
const initialCountdownState = {
  step1: 4,
  step2: 7,
  step3: 8
};

function App() {
  const [time, setTime] = useState(initialTimeState);
  const [breatheInstructions, setBreatheInstructions] = useState(initialInstructionState);
  const [countdown, setCountdown] = useState(initialCountdownState);

  return (
    <div className="App">
      <Instructions
        time={time}
        initialTimeState={initialTimeState}
        setTime={setTime}
        breatheInstructions={breatheInstructions}
        setBreatheInstructions={setBreatheInstructions}
      />
      <Timer
        time={time}
        setTime={setTime}
        breatheInstructions={breatheInstructions}
        setBreatheInstructions={setBreatheInstructions}
        countdown={countdown} setCountdown={setCountdown}
      />
      <Slider
        breatheInstructions={breatheInstructions}
        setBreatheInstructions={setBreatheInstructions}
      />
    </div>
  );
}

export default App;
