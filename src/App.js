import { useEffect, useState } from "react";
import styled from "styled-components";

import { GlobalStyles } from "./globalStyles";
import { Countdown } from "./features/countdown/Countdown";
import { Instructions } from "./features/instructions/Instructions";
import { Select } from "./features/select/Select";
import { Timer } from "./features/timer/Timer";
import { Modal } from "./features/modal/Modal";

const initialTimeState = { minutes: 0, seconds: 0, isActive: false, counter: 1 };
const initialInstructionState = {
  step: 0,
  instruction: "Hit Start When Ready",
  stepsCounter: 0,
  repeatCount: 4,
  cycleCount: 0
};
const initialCountdownState = {
  step0: { isActive: false, ranOnce: false },
  step1: { isActive: false },
  step2: { isActive: false },
  step3: { isActive: false }
};
const initialModalState = { isDisplayed: false, class: "modal__container" };
const initialCircleState = {
  circle0: { class: "countdown__svg-0", isVisible: true },
  circle1: { class: "countdown__svg-1", isVisible: true },
  circle2: { class: "countdown__svg-2", isVisible: true },
  circle3: { class: "countdown__svg-3", isVisible: true }
};

const AppStyles = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 25em;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
`;

function App() {
  const [time, setTime] = useState(initialTimeState);
  const [breatheInstructions, setBreatheInstructions] = useState(initialInstructionState);
  const [countdown, setCountdown] = useState(initialCountdownState);
  const [disabled, setDisabled] = useState(false);
  const [circle, setCircle] = useState(initialCircleState);
  const [modal, setModal] = useState(initialModalState);
  const [circleTimeout, setCircleTimeout] = useState(null);

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
        setModal({ class: "modal__container show-modal", isDisplayed: true });
      }
    }, 5000);
  }, []);

  return (
    <AppStyles className="App" onClick={handleClick}>
      <GlobalStyles />
      <Modal
        disabled={disabled}
        modal={modal}
        setModal={setModal}
        initialModalState={initialModalState}
      />
      <Timer
        breatheInstructions={breatheInstructions}
        circleTimeout={circleTimeout}
        countdown={countdown}
        initialCircleState={initialCircleState}
        initialCountdownState={initialCountdownState}
        initialInstructionState={initialInstructionState}
        initialTimeState={initialTimeState}
        setBreatheInstructions={setBreatheInstructions}
        setCircle={setCircle}
        setCountDown={setCountdown}
        setDisabled={setDisabled}
        setTime={setTime}
        time={time}
      />
      <Countdown countdown={countdown} circle={circle} setCircle={setCircle} />
      <Instructions
        breatheInstructions={breatheInstructions}
        countdown={countdown}
        initialCircleState={initialCircleState}
        initialCountdownState={initialCountdownState}
        initialTimeState={initialTimeState}
        setBreatheInstructions={setBreatheInstructions}
        setCircle={setCircle}
        setCircleTimeout={setCircleTimeout}
        setCountdown={setCountdown}
        setDisabled={setDisabled}
        setTime={setTime}
        time={time}
      />
      <Select
        breatheInstructions={breatheInstructions}
        disabled={disabled}
        setBreatheInstructions={setBreatheInstructions}
      />
    </AppStyles>
  );
}

export default App;
