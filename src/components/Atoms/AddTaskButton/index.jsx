import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import plus from "../../../assets/svg/plus.svg";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledAddTaskButton onClick={onClick}>
      <StyledHover />
      <StyledButtonContainer>
        <StyledPlusIcon src={plus} />
        <StyledButtonText>タスクを追加</StyledButtonText>
      </StyledButtonContainer>
    </StyledAddTaskButton>
  );
};

export default AddTaskButton;

const StyledHover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  border-radius: 12px;
  opacity: 0;
  background-color: ${COLOR.GREEN};
  transition: all 0.2s ease;
`;

const StyledPlusIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledButtonText = styled.p`
  color: ${COLOR.GREEN};
  ${TEXT.S};
  margin: 0px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 2px 6px;
`;

const StyledAddTaskButton = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  padding: 0px;
  background-color: transparent;
  &:hover {
    ${StyledHover} {
      opacity: 0.2;
    }
  }
`;
