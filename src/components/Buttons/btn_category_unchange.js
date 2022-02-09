import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const BtnCategoryUC = ({ width, height, str, str_icon, bcolor, fcolor, border, bradious, fsize, fweight, fstyle }) => {
  return (
    <BtnCus
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={width}
      height={height}
      color={fcolor}
      bgcolor={bcolor}
      border={border}
      borderRadius={bradious}
      fontSize={fsize}
      fontWeight={fweight}
      fontStyle={fstyle}
      font_color={fcolor}
    >
      <Box display={"flex"} marginRight={"2%"}>{str_icon}</Box>
      <Box display={"flex"} >{str}</Box>
    </BtnCus>
  );
};

const BtnCus = styled(Box)`
    &:hover{
        cursor: pointer;
        /* color: #f5f5f5;
        background-color: ${({ font_color }) => font_color}; */
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    @media (max-width: 600px){
        height: 30px !important;
        font-size: 0.8rem !important;
    }
    @media (max-width: 400px){
        font-size: 0.6rem !important;
    }
`;

export default BtnCategoryUC;
