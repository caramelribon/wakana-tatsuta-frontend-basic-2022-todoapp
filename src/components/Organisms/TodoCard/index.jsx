import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index";
import Task from "../../Molecules/Task/index";
import COLOR from "../../../variables/color";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  // タスクのStateが"TODO"のものを抽出
  const todoStateTask = taskList.filter((task) => {
    return task.state === "TODO";
  });

  // タスクを追加したときの関数(AddTaskButtonを押したとき)
  const addTask = () => {
    setTaskList((taskList) => [...taskList, { name: "", state: "TODO" }]);
  };

  // タスクが完了したときの関数(CheckBoxにチェックを入れたとき)
  const handleTaskComplete = (taskIndex) => {
    const completedTask = taskList.filter((task, index) => {
      return index !== taskIndex;
    });
    setTaskList(completedTask);
  };

  // タスクの編集が完了したときの関数
  const handleEditComplete = (taskIndex, taskName) => {
    let editedTask = [];
    if (taskName === "") {
      editedTask = taskList.filter((task, index) => {
        return index !== taskIndex;
      });
    } else {
      editedTask = taskList.map((task, index) => {
        if (index === taskIndex) {
          task.name = taskName;
        }
        return task;
      });
    }
    setTaskList(editedTask);
  };

  return (
    <StyledTodoCard>
      <AddTaskButton onClick={addTask} />
      <StyledTodoList>
        {todoStateTask.map((task, index) => (
          <StyledTodoListItem key={index}>
            <Task
              defaultValue={task.name}
              defaultIsEditing={true}
              onEditComplete={(taskName) => handleEditComplete(index, taskName)}
              onTaskComplete={() => handleTaskComplete(index)}
            />
          </StyledTodoListItem>
        ))}
      </StyledTodoList>
    </StyledTodoCard>
  );
};

export default TodoCard;

const StyledTodoCard = styled.div`
  padding: 20px;
  border-radius: 4px;
  background-color: ${COLOR.DEEP_BLUE_GRAY};
`;

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  box-sizing: border-box;
`;

const StyledTodoListItem = styled.div`
  margin-top: 10px;
`;
