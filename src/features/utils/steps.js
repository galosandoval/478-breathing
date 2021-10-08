export const startStep0 = (setCountdown, setCircle, countdown, setCircleTimeout) => {
  if (!countdown.step0.isActive) {
    setCountdown((state) => ({ ...state, step0: { ...state.step0, isActive: true } }));
    const clearCircle = setTimeout(() => {
      setCircle((state) => ({
        ...state,
        circle0: {
          ...state.circle0,
          isVisible: false,
          class: "countdown__svg-0 hide-countdown"
        }
      }));
      setCountdown((state) => ({ ...state, step0: { ...state.step0, ranOnce: true } }));
    }, 3000);
    setCircleTimeout(clearCircle);
  }
};

export const startStep1 = (
  breatheInstructions,
  setBreatheInstructions,
  setCountdown,
  countdown,
  setCircle,
  setCircleTimeout,
  initialCircleState,
  instruction,
  stepsCounter,
  step
) => {
  if (stepsCounter === 0 && step === 0) {
    setBreatheInstructions({
      ...breatheInstructions,
      step: 1,
      cycleCount: (breatheInstructions.cycleCount += 1),
      instruction: "Breathe In"
    });
    setCountdown({
      ...countdown,
      step0: { ...countdown.step0, isActive: false },
      step1: { isActive: true },
      step3: { isActive: false }
    });
    const clearCircle = setTimeout(() => {
      setCircle((state) => ({
        ...state,
        circle1: {
          ...state.circle1,
          isVisible: false,
          class: "countdown__svg-1 hide-countdown"
        }
      }));
    }, 3700);
    setCircleTimeout(clearCircle);
    if (instruction === "Repeat") {
      setBreatheInstructions((state) => ({ ...state, instruction: "Breathe In", step: 1 }));
      setCircle((state) => ({ ...state, circle3: initialCircleState.circle3 }));
    }
  }
};

export const startStep2 = (setCircle, setBreatheInstructions, setCountdown, setCircleTimeout) => {
  const clearCircle = setTimeout(() => {
    setCircle((state) => ({
      ...state,
      circle2: {
        ...state.circle2,
        isVisible: false,
        class: "countdown__svg-2 hide-countdown"
      }
    }));
  }, 6400);
  setCircleTimeout(clearCircle);
  setBreatheInstructions((state) => ({
    ...state,
    step: 2,
    instruction: "Hold Your Breath",
    stepsCounter: 0
  }));
  setCountdown((state) => ({
    ...state,
    step1: { isActive: false },
    step2: { isActive: true }
  }));
};

export const startStep3 = (setCircle, setCircleTimeout, setBreatheInstructions, setCountdown) => {
  const clearCircle = setTimeout(() => {
    setCircle((state) => ({
      ...state,
      circle3: {
        ...state.circle3,
        isVisible: false,
        class: "countdown__svg-3 hide-countdown"
      }
    }));
  }, 7100);
  setCircleTimeout(clearCircle);
  setBreatheInstructions((state) => ({
    ...state,
    step: 3,
    instruction: "Breathe Out",
    stepsCounter: 0
  }));
  setCountdown((state) => ({
    ...state,
    step2: { isActive: false },
    step3: { isActive: true }
  }));
};
