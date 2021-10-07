import { useEffect, useState } from "react";
import { Countdown } from "./features/countdown/Countdown";
import { Instructions } from "./features/instructions/Instructions";
import { Select } from "./features/select/Select";
import { Timer } from "./features/timer/Timer";

import "./App.css";
import { Modal } from "./features/modal/Modal";

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
const initialModalState = { isDisplayed: false, class: "modal__container" };
const initialCircleState = {
  circle1: { class: "countdown__svg-1", isVisible: true },
  circle2: { class: "countdown__svg-2", isVisible: true },
  circle3: { class: "countdown__svg-3", isVisible: true }
};

function App() {
  const [time, setTime] = useState(initialTimeState);
  const [breatheInstructions, setBreatheInstructions] = useState(initialInstructionState);
  const [countdown, setCountdown] = useState(initialCountdownState);
  const [disabled, setDisabled] = useState(false);
  const [modal, setModal] = useState(initialModalState);
  const [circle, setCircle] = useState(initialCircleState);

  const handleClick = (event) => {
    document.addEventListener(
      "click",
      (e) => {
        e = e || window.event;
        const target = e.target;
        if (target.id === "root") {
          setModal(initialModalState);
        }
      },
      false
    );
    if (event.target.className === "App") {
      setModal(initialModalState);
    }
  };

  useEffect(() => {
    const showInstructions = "showInstructions";
    if (localStorage.getItem(showInstructions) === null) {
      localStorage.setItem(showInstructions, true);
    }
    setTimeout(() => {
      const item = localStorage.getItem("showInstructions");
      if (item === "true") {
        console.log("In here");
        setModal({ class: "modal__container show-modal", isDisplayed: true });
      }
    }, 2000);
  }, []);

  return (
    <div className="App" onClick={handleClick}>
      <Modal modal={modal} setModal={setModal} initialModalState={initialModalState} />
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
      <Countdown countdown={countdown} circle={circle} setCircle={setCircle} />
      <Instructions
        breatheInstructions={breatheInstructions}
        countdown={countdown}
        initialCircleState={initialCircleState}
        initialTimeState={initialTimeState}
        setBreatheInstructions={setBreatheInstructions}
        setCircle={setCircle}
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
