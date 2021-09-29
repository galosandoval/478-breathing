import { useState } from "react";
import "./App.css";
import { Instructions } from "./features/instructions/Instructions";
import { Timer } from "./features/timer/Timer";

const initialTimeState = { minutes: 0, seconds: 0, isActive: false, counter: 1 };
const initialInstructionState = { step: 0, instruction: "", stepsCounter: 0 };

function App() {
  const [time, setTime] = useState(initialTimeState);
  const [instructions, setInstructions] = useState(initialInstructionState);
  // console.log("step counter", instructions.stepsCounter);
  return (
    <div className="App">
      <Instructions
        time={time}
        setTime={setTime}
        instructions={instructions}
        setInstructions={setInstructions}
      />
      <Timer
        time={time}
        setTime={setTime}
        instructions={instructions}
        setInstructions={setInstructions}
      />
    </div>
  );
}

export default App;
