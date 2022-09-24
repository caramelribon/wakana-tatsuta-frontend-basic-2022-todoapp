import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index";
import Task from "../../Molecules/Task/index";
import COLOR from "../../../variables/color";

const TodoCard = () => {
  const [todoTask, setTodoTask] = useState([]);
  const [taskAddOREdit, setAddOREdit] = useState(false);

  let todoTaskList = [];
  let todoStateTask = [];

  const handleTaskComplete = (id) => {
    let completedTask = todoTask.map((task) => {
      if (task.id === id) {
        task.state = "DONE";
      }
      return task;
    });
    setTodoTask(completedTask);
  };

  const handleEditComplete = (id, taskName) => {
    let edittedTask = [];
    if (taskName === "") {
      edittedTask = todoTask.filter((task) => {
        return task.id !== id;
      });
    } else {
      edittedTask = todoTask.map((task) => {
        if (task.id === id) {
          task.name = taskName;
        }
        return task;
      });
    }
    setTodoTask(edittedTask);
    setAddOREdit(false);
  };

  // task.stateがTODOのものだけ抽出する
  todoStateTask = todoTask.filter((task) => {
    return task.state === "TODO";
  });

  todoTaskList = todoStateTask.map((task, index) => {
    // addTask()が実行されたとき、todoTaskの一番後ろのコンポーネントだけにdefaultIsEditingを渡す
    return (
      <StyledTodoListItem key={index}>
        <Task
          key={task.id}
          defalutValue={task.name}
          defalutIsEditing={
            taskAddOREdit ? task.id === todoTask.length - 1 : false
          }
          onEditComplete={(taskName) => handleEditComplete(task.id, taskName)}
          onTaskComplete={() => handleTaskComplete(task.id)}
        />
      </StyledTodoListItem>
    );
  });

  const addTask = () => {
    const idNum = todoTask.length;
    setTodoTask((todoTask) => [
      ...todoTask,
      { id: idNum, name: "", state: "TODO" },
    ]);
    setAddOREdit(true);
  };

  return (
    <StyledTodoCard>
      <AddTaskButton onClick={addTask} />
      <StyledTodoList>{todoTaskList}</StyledTodoList>
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
