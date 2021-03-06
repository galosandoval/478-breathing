import styled from "styled-components";
import { Button } from "../utils/Button";

export const ModalStyles = styled.div`
  width: 100%;
  transition: all ease 0.3s;
  display: flex;
  justify-content: center;

  .modal__container {
    position: absolute;
    width: 100%;
    top: 100%;
    background: tomato;
    height: 90vh;
    z-index: 2;
    border-radius: 20px;
    transition: all ease 0.6s;
    opacity: 0.2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1em;
  }
  .show-modal {
    top: 45px;
    opacity: 1;
    transition: all ease 0.6s;
  }
  .modal__title {
    display: flex;
    justify-content: center;
  }
  h2 {
    font-family: "Noto Sans Display", sans-serif;
    font-size: 1.5rem;
    display: inline-block;
    margin: 0;
    text-transform: uppercase;
  }
  a {
    color: black;
    transition: all ease 0.3s;
  }
  a:hover {
    color: white;
    text-decoration: none;
    transition: all ease 0.3s;
  }
  h2::after {
    display: block;
    content: "";
    border-bottom: solid 3px black;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  h2:hover::after {
    transform: scaleX(1);
  }
  .modal__h2::after {
    transform-origin: 100% 50%;
  }
  .modal__button-container {
    display: flex;
    justify-content: center;
  }
  .modal__label {
    display: flex;
    justify-content: center;
  }
  /* .modal__ol {
} */
  .modal__li {
    transition: 0.6s ease all;
  }
  .modal__li:hover {
    transform: translateX(-1em);
    transition: 0.6s ease all;
  }
`;

export const ModalButton = styled(Button)`
  position: absolute;
  top: 3em;
  background-color: #ff6b35;
  &:hover {
    background-color: #ff4b0a;
    transform: scale(1.03);
  }
`;

export const CloseButton = styled(Button)`
    color: black;
`;
