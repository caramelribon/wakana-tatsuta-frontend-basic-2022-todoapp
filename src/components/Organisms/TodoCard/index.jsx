import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index";
import Task from "../../Molecules/Task/index";
import COLOR from "../../../variables/color";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

const TodoCard = () => {
  // const AlertHandlerContext = useAlertHandlerContext();
  // タスクの状態管理
  const [taskList, setTaskList] = useState([]);
  // 初期化処理するための状態管理
  const [initializedAction, setInitializedAction] = useState(false);

  // 初期化時処理(LocalStorageからタスクリストを取得)
  useEffect(() => {
    const firstTaskListData = localStorage.getItem("taskList");
    if (firstTaskListData !== null) {
      const firstTaskList = JSON.parse(firstTaskListData);
      setTaskList(firstTaskList);
    }
    setInitializedAction(true);
  }, []);

  // タスクリストの状態や値が変化したときLocalStorageの値を変更
  useEffect(() => {
    const serveData = JSON.stringify(taskList);
    localStorage.setItem("taskList", serveData);
  }, [taskList]);

  // タスクを追加したときの関数(AddTaskButtonを押したとき)
  const addTask = () => {
    setTaskList((taskList) => [...taskList, { name: "", state: "TODO" }]);
    setInitializedAction(false);
  };

  // タスクが完了したときの関数(CheckBoxにチェックを入れたとき)
  const handleTaskComplete = (taskIndex) => {
    const completedTask = taskList.map((task, index) => {
      if (index === taskIndex) {
        // taskListのタスクのstateを変更
        task.state = "DONE";
      }
      return task;
    });
    setTaskList(completedTask);
  };

  // タスクの編集が完了したときの関数
  const handleEditComplete = (taskIndex, taskName) => {
    let editedTask = [];
    // タスク名がないとき(削除)
    if (taskName === "") {
      // taskListから消す
      editedTask = taskList.filter((task, index) => {
        return index !== taskIndex;
      });
      // アラートを出す
      // AlertHandlerContext.setAlert("タスクの名前が設定されていません。");
    } else {
      // タスク名があるとき(追加)
      editedTask = taskList.map((task, index) => {
        if (index === taskIndex) {
          // taskListのタスク名を変更
          task.name = taskName;
        }
        return task;
      });
    }
    setTaskList(editedTask);
    setInitializedAction(false);
  };

  return (
    <StyledTodoCard>
      <AddTaskButton onClick={addTask} />
      {/* <StyledTodoList>
        {taskList.map((task, index) => {
          if (task.state === "TODO") {
            return (
              <StyledTodoListItem key={index}>
                <Task
                  defaultValue={task.name}
                  defaultIsEditing={!initializedAction}
                  onEditComplete={(taskName) =>
                    handleEditComplete(index, taskName)
                  }
                  onTaskComplete={() => handleTaskComplete(index)}
                />
              </StyledTodoListItem>
            );
          }
        })}
      </StyledTodoList> */}
    </StyledTodoCard>
  );
};

export default TodoCard;

const StyledTodoCard = styled.div`
  padding: 20px;
  border-radius: 4px;
  background-color: ${COLOR.LIGHT_BLACK};
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
