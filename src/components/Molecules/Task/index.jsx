import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import CheckBox from "../../Atoms/Checkbox/index";
import Input from "../../Atoms/Input/index";
import EditButton from "../../Atoms/EditButton/index";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Task = ({
  defalutValue,
  defalutIsEditing,
  onEditComplete,
  onTaskComplete,
  taskName,
}) => {
  // タスクが編集中かどうかの状態管理
  const [isEditing, setIsEditing] = useState({ defalutIsEditing });

  onTaskComplete = () => {
    setIsEditing(false);
    console.log("task completed");
  };

  const onEditStart = () => {
    setIsEditing(true);
  };

  onEditComplete = (taskName) => {
    setIsEditing(false);
    console.log(`taskname changed: ${taskName}`);
    console.log({ taskName });
  };

  return (
    <StyledTask>
      <CheckBox onClick={() => onTaskComplete()} />
      {isEditing ? (
        <Input defalutValue={defalutValue} onEditComplete={onEditComplete} />
      ) : (
        <StyledTaskNameArea>
          <StyledTaskTitle>{defalutValue}</StyledTaskTitle>
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
