import React from "react";
import { Box } from "@material-ui/core";

const CustomLabel = ({ bcolor, fcolor, ftype, fsize, fweight, str, icon ,mt }) => {
  return (
    <Box display={"flex"} marginTop={mt} bgcolor={bcolor} color={fcolor} fontFamily={ftype} fontSize={fsize} fontWeight={fweight} >
      {
        icon === undefined ? <><Box display={"flex"} >{str}</Box></> : <><Box display={"flex"} mr={"2%"} >{icon}</Box><Box display={"flex"} >{str}</Box></>
      }
    </Box>
  );
};

export default CustomLabel;
