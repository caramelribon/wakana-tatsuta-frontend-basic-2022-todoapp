import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = props.defaultValue;
      inputRef.current.focus();
      inputRef.current.onblur = (e) => {
        const inputText = e.target.value;
        props.onEditComplete(inputText);
      };
      inputRef.current.onkeypress = (e) => {
        const inputText = e.target.value;
        if (e.key === "Enter") {
          props.onEditComplete(inputText);
        }
      };
    }
  }, []);

  return <StyledInput ref={inputRef} type="text" name="input"></StyledInput>;
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  flex: 1 1 auto;
  height: 20px;
  border-radius: 2px;
  border: none;
  outline: none;
  padding: 0px 4px;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S};
`;
