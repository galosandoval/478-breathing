import React, { useState } from "react";
import "./modal.css";

export const Modal = ({ modal, setModal, initialModalState }) => {
  const [checked, setChecked] = useState(() =>
    localStorage.getItem("showInstructions") === "false" ? true : false
  );

  console.log("localstorage", localStorage.getItem("showInstructions"));

  const handleClick = (event) => {
    const { name } = event.target;
    if (name === "open") {
      setModal({ class: "modal__container show-modal", isDisplayed: true });
    } else if (name === "close") {
      if (checked) {
        localStorage.setItem("showInstructions", false);
      } else {
        localStorage.setItem("showInstructions", true);
      }
      setModal(initialModalState);
    }
  };
  return (
    <div className="modal">
      <button name="open" onClick={handleClick} className="modal__button button">
        ?
      </button>
      <div className={modal.class}>
        <h2>What is 4-7-8?</h2>
        <p>A breathing technique known as </p>
        <div className="modal__button-container">

        <button onClick={handleClick} name="close">
          Got It!
        </button>
        </div>
        {/* <br /> */}
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
