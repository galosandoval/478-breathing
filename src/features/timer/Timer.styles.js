import styled from "styled-components";
import { Button } from "../utils/Button";

export const TimerStyles = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  .timer__button-container {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 3em;
  }
`;

export const TimerButton = styled(Button)`
  background-color: #228cdb;
  &:hover {
    transform: scale(1.03);
    transition: all ease 0.3s;
    background-color: #2186d4;
  }
`;
