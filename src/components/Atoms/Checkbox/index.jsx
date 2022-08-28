import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";

const CheckBox = ({ onClick }) => {
  return (
    <StyleCheckBox onClick={onClick}>
      <StyledCheckIcon src={check} />
    </StyleCheckBox>
  );
};

export default CheckBox;

const StyledCheckIcon = styled.img`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
`;

const StyleCheckBox = styled.button`
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${StyledCheckIcon} {
      display: block;
    }
  }
`;
