import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ alertVisible, alertText }) => {
  /*
  const fadeIn = {
    display: "block",
  };
  const fadeOut = {
    display: "none",
  };
  */

  return (
    <StyledAlert>
      <StyledAlertText>{alertText}</StyledAlertText>
    </StyledAlert>
  );
};

export default Alert;

const StyledAlert = styled.div`
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
  z-index: 1;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 280px;
  }
`;

const StyledAlertText = styled.p`
  color: ${COLOR.WHITE};
  ${TEXT.S};
`;
