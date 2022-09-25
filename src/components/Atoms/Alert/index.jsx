import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Alert = ({ alertVisible, alertText }) => {
  const fadeIn = {
    display: "block",
  };
  const fadeOut = {
    display: "none",
  };

  return (
    <StyledAlert className={alertVisible ? fadeIn : fadeOut}>
      <StyledAlertText>{alertText}</StyledAlertText>
    </StyledAlert>
  );
};

export default Alert;

const StyledAlert = styled.div`
  position: absolute;
  top: 80px;
  margin: 0px auto;
  width: 400px;
  height: 40px;
  padding: 10px 20px;
  background-color: ${COLOR.RED};
  border-radius: 4px;
  display: none;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 280px;
  }
`;

const StyledAlertText = styled.p`
  color: ${COLOR.WHITE};
  ${TEXT.S};
`;
