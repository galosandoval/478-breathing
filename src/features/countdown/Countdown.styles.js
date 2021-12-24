import styled from "styled-components";

export const CountdownStyles = styled.div`
  position: relative;
  width: 100%;
  left: 126px;

  .countdown__svg-0 {
    position: absolute;
    transform: rotateY(-180deg) rotateZ(-90deg);
    height: 17em;
    width: 17em;
    bottom: -155.6px;
    left: -64.6px;
    z-index: -1;
    opacity: 1;
  }
  .countdown__circle-0 {
    stroke-dasharray: 533px;
    stroke-dashoffset: 0px;
    stroke-linecap: unset;
    stroke-width: 14px;
    stroke: #e0efda;
    fill: none;
  }
  .countdown__svg-1 {
    position: absolute;
    transform: rotateY(-180deg) rotateZ(-90deg);
    height: 17em;
    width: 17em;
    bottom: -155.6px;
    left: -64.6px;
    z-index: -1;
    opacity: 1;
    transition: opacity cubic-bezier(0.4, 0, 1, 1) 0.3s;
  }
  .countdown__circle-1 {
    stroke-dasharray: 660px;
    stroke-dashoffset: 0px;
    stroke-linecap: unset;
    stroke-width: 30px;
    stroke: #b298dc;
    fill: none;
  }
  .countdown__svg-2 {
    position: absolute;
    transform: rotateY(-180deg) rotateZ(-90deg);
    height: 21em;
    width: 21em;
    bottom: -187.5px;
    left: -94.5px;
    z-index: -1;
    opacity: 1;
    transition: opacity cubic-bezier(0.4, 0, 1, 1) 0.6s;
  }
  .countdown__circle-2 {
    stroke-dasharray: 848px;
    stroke-dashoffset: 0px;
    stroke-linecap: unset;
    stroke-width: 32.2px;
    stroke: #a663cc;
    fill: none;
  }
  .countdown__svg-3 {
    position: absolute;
    transform: rotateY(-180deg) rotateZ(-90deg);
    height: 24em;
    width: 24em;
    bottom: -211px;
    left: -113.4px;
    z-index: -1;
    opacity: 1;
    transition: opacity cubic-bezier(0.4, 0, 1, 1) 0.9s;
  }
  .countdown__circle-3 {
    stroke-dasharray: 1037px;
    stroke-dashoffset: 0px;
    stroke-linecap: unset;
    stroke-width: 31px;
    stroke: #6f2dbd;
    fill: none;
  }
  .hide-countdown {
    opacity: 0;
  }
`;
