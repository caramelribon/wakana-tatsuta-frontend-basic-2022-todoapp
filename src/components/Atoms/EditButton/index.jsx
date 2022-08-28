import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const EditButton = ({ onClick }) => {
  return (
    <StyleEditButton onClick={onClick}>
      <StyledCicle></StyledCicle>
      <StyledPencilIcon src={pencil} />
    </StyleEditButton>
  );
};

export default EditButton;

const StyledCicle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0;
  background-color: ${COLOR.LIGHT_GRAY};
  transition: all 0.2s ease;
`;

const StyledPencilIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const StyleEditButton = styled.button`
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: none;
  padding: 0px;
  background-color: transparent;
  &:hover {
    ${StyledCicle} {
      opacity: 0.2;
    }
  }
`;
