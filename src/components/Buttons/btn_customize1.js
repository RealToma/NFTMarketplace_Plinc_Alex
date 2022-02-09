import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const BtnCustomize1 = ({
  color,
  back,
  width,
  height,
  border,
  str,
  str_icon,
  borderRadius,
  disable
}) => {
  return (
    <BtnCus
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={width}
      height={height}
      color={color}
      bgcolor={back}
      border={border}
      borderRadius={borderRadius}
      sx={{
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "18px",
        lineheight: "24px",
      }}
    >
      <Box display={"flex"} >{str_icon}</Box>
      <Box display={"flex"} marginLeft={"2%"}>{str}</Box>
    </BtnCus>
  );
};

const BtnCus = styled(Box)`
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 0px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 800px)
  {
      font-size: 16px !important;
  }
  @media (max-width: 500px)
  {
      font-size: 14px !important;
  }
  @media (max-width: 400px)
  {
      font-size: 12px !important;
  }
`;

export default BtnCustomize1;
