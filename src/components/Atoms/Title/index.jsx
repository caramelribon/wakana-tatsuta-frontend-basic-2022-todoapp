import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";

const Title = () => {
  return <StyledTitle>SIMPLE TODO APP</StyledTitle>;
};

export default Title;

const StyledTitle = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.L}
  font-family: ${FONTFAMILY.ROBOTO};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.M}
    font-family: ${FONTFAMILY.NOTO_SANS};
  }
`;
