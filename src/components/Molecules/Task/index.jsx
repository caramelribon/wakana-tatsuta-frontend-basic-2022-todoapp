import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import CheckBox from "../../Atoms/Checkbox/index";
import Input from "../../Atoms/Input/index";
import EditButton from "../../Atoms/EditButton/index";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Task = (props) => {
  // inputを表示するか、タスク名を表示するかの状態管理
  const [isVisible, setVisibility] = useState(false);
  // タスクが編集中かどうかの状態管理
  const [isEdit, setEdit] = useState(props.defalutEdit);

  const onTaskComplete = () => {
    setVisibility(false);
    setEdit(false);
    console.log("task completed");
  };

  const onEditStart = () => {
    setVisibility(true);
    setEdit(true);
  };

  const onEditComplete = (taskName) => {
    setVisibility(false);
    setEdit(false);
    console.log(`taskname changed: ${taskName}`);
  };

  return (
    <StyledTask>
      <CheckBox onClick={() => onTaskComplete()} />
      {isVisible ? (
        <Input
          defalutValue={props.defalutValue}
          onEditComplete={onEditComplete}
        />
      ) : (
        <StyledTaskNameArea>
          <StyledTaskTitle>{props.defalutValue}</StyledTaskTitle>
          <EditButton onClick={() => onEditStart()} />
        </StyledTaskNameArea>
      )}
    </StyledTask>
  );
};

export default Task;

const StyledTask = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: 2px 6px;
  width: 256px;
`;

const StyledTaskNameArea = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`;

const StyledTaskTitle = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};
  margin: 0px 10px 0px 0px;
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`;
