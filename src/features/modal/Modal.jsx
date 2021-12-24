import React, { useState } from "react";
import { CloseButton, ModalButton, ModalStyles } from "./Modal.styles";

export const Modal = ({ modal, setModal, initialModalState, disabled }) => {
  const [checked, setChecked] = useState(() =>
    localStorage.getItem("showInstructions") === "false" ? true : false
  );

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
    <ModalStyles onClick={handleClick}>
      <ModalButton disabled={disabled} name="open" onClick={handleClick}>
        ?
      </ModalButton>
      <div className={modal.class}>
        <div className="modal__title">
          <h2 className="modal__h2">4 - 7 - 8</h2>
        </div>
        <p>
          A breathing technique known as "relaxing breath," airms to reduce anxiety or help people
          sleep more quickly. More info at{" "}
          <a
            href="https://www.medicalnewstoday.com/articles/324417"
            target="_blank"
            rel="noreferrer"
          >
            Medical News Today
          </a>
          .
        </p>
        <ol className="modal__ol">
          <li className="modal__li">empty your lungs of air</li>
          <li className="modal__li">breathe in quietly through your nose for 4 seconds</li>
          <li className="modal__li">hold your breath for a count of 7 seconds</li>
          <li className="modal__li">
            exhale forcefully through the mouth, pursing the lips and making a "whoosh" sound for 8
            seconds
          </li>
          <li className="modal__li">repeat the cycle up to 4 times</li>
        </ol>
        <div className="modal__button-container">
          <CloseButton onClick={handleClick} name="close">
            Got It!
          </CloseButton>
        </div>
        {/* <br /> */}
        <label className="modal__label">
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          Don't show me this again
        </label>
      </div>
    </ModalStyles>
  );
};
