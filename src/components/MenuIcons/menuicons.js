import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const MenuIcons = ({str }) => {
  return (
    <StyledComponent>
      {str}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
    display: flex;
    font-size: 1rem;
    font-weight:500;
    height: 15px;
    color: #272224;
    background-color: #f5f5f5;
    border-radius: 40px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    &:hover{
        cursor: pointer;
        color: #f5f5f5;
        background-color: #272224;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
`;

export default MenuIcons;
