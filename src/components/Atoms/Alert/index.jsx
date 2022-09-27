import React from "react";
import styled from "styled-components";
import "../../../style.css";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ visible, errorText }) => {
  return (
    <div className={visible ? "fadeIn" : "fadeOut"}>
      <StyledAlertText>{errorText}</StyledAlertText>
    </div>
  );
};

export default Alert;

const StyledAlertText = styled.p`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  width: 400px;
  height: 40px;
  padding: 10px 20px;
  background-color: ${COLOR.RED};
  border-radius: 4px;
  color: ${COLOR.WHITE};
  ${TEXT.S};
  z-index: 1;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 20px;
    width: 280px;
  }
`;
