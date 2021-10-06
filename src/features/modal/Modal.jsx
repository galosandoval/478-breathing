import React, { useState } from "react";
import "./modal.css";

const initialState = { isDisplayed: false, class: "modal__container" };

export const Modal = () => {
  const [modal, setModal] = useState(initialState);
  const [checked, setChecked] = useState(false);

  const handleClick = (event) => {
    const { name } = event.target;
    if (name === "open") {
      setModal({ class: "modal__container show-modal", isDisplayed: true });
    } else if (name === "close") {
      if (checked) {
        localStorage.setItem("show-instructions", false);
      }
      console.log("hello");
      setModal(initialState);
    }
  };
  return (
    <div className="modal">
      <button name="open" onClick={handleClick} className="modal__button button">
        ?
      </button>
      <div className={modal.class}>
        <h2>Instructions</h2>
        <p>Reduce your stress in less than 2 minutes</p>
        <button onClick={handleClick} name="close">
          Got It!
        </button>
        <br />
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          Don't show me this again
        </label>
      </div>
    </div>
  );
};
