import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title/index";
import TodoCard from "../../Organisms/TodoCard/index";
import BREAKPOINT from "../../../variables/breakpoint";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Title />
      <StyledTodoCardArea>
        <AlertHandlerProvider>
          <TodoCard />
        </AlertHandlerProvider>
      </StyledTodoCardArea>
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 20px 20px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 20px;
  }
`;

const StyledTodoCardArea = styled.div`
  width: 100%;
  margin-top: 20px;
  max-width: 500px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 280px;
  }
`;
