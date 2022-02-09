import React from "react";
import { Box } from "@material-ui/core";

const CustomInput = ({ type, textalign, width, height, padding, border, bradius, pholder, bcolor, fcolor, ftype, fsize, fweight, str, icon ,mt }) => {
  return (
    <Box display={"flex"} component={"input"} type={"number"}  textAlign={textalign} width={width} height={height} padding={padding} border={border} borderRadius={bradius} placeholder={pholder} marginTop={mt} bgcolor={bcolor} color={fcolor} fontFamily={ftype} fontSize={fsize} fontWeight={fweight} >
    </Box>
  );
};

export default CustomInput;
