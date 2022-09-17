import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index";
import Task from "../../Molecules/Task/index";
import COLOR from "../../../variables/color";

const TodoCard = () => {
  const [todoTask, setTodoTask] = useState([]);

  let todoTaskList = [];

  todoTaskList = todoTask.map((task) => {
    if (task.state == "TODO")
      if (task.id == todoTask.length - 1) {
        // addTask()が実行されたとき、todoTaskの一番後ろのコンポーネントだけにdefaultIsEditingを渡す
        return (
          <StyledTodoListItem>
            <Task
              key={task.id}
              defalutValue={task.name}
              defalutIsEditing
              onEditComplete={(taskName) =>
                handleEditComplete(task.id, taskName)
              }
              onTaskComplete={() => handleTaskComplete(task.id)}
            />
          </StyledTodoListItem>
        );
      } else {
        return (
          <StyledTodoListItem>
            <Task
              key={task.id}
              defalutValue={task.name}
              onEditComplete={(taskName) =>
                handleEditComplete(task.id, taskName)
              }
              onTaskComplete={() => handleTaskComplete(task.id)}
            />
          </StyledTodoListItem>
        );
      }
  });

  useEffect(() => {
    console.log(todoTaskList);
  }, [todoTask]);

  const addTask = () => {
    const idNum = todoTask.length;
    setTodoTask((todoTask) => [
      ...todoTask,
      { id: idNum, name: "", state: "TODO" },
    ]);
  };

  const handleTaskComplete = (id) => {
    let completedTask = todoTask.map((task) => {
      if (task.id === id) {
        task.state = "DONE";
      }
      return task;
    });
    setTodoTask(completedTask);
    console.log("task complete");
  };

  const handleEditComplete = (id, taskName) => {
    let edittedTask = todoTask.map((task) => {
      if (task.id === id) {
        task.name = taskName;
      }
      return task;
    });
    setTodoTask(edittedTask);
    console.log(`taskname changed: ${taskName}`);
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
