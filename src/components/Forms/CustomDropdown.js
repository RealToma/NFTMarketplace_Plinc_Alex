import React, { useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

const CustomDropdown = ({ width, height, border, bradius, pholder, bcolor, fcolor, ftype, fsize, fweight, mt, list }) => {
  const [flag_drop, set_flag_drop] = useState(false);
  const [str_sel, set_str_sel] = useState(pholder);
  return (
    <DropBox display={"flex"} alignItems={"center"} position={"relative"} width={width} height={height} border={border} borderRadius={bradius} placeholder={pholder} marginTop={mt} bgcolor={bcolor} color={fcolor} fontFamily={ftype} fontSize={fsize} fontWeight={fweight}
      onClick={() => {
        set_flag_drop(!flag_drop)
      }}>
      <Box display={"flex"} ml={"5%"} mt={"3%"} mb={"3%"}>{str_sel}</Box>
      {!flag_drop ? "" : <DropBox zIndex={3} display={"flex"} flexDirection={"column"} position={"absolute"} bgcolor={"white"} width={width} borderRadius={bradius} top={"120%"} left={"0%"} border={border} justifyContent={"center"} paddingTop={"3%"} paddingBottom={"3%"}>
        { list.map((item, index)=>{
          return(
            <Box index={index} display={"flex"} ml={"5%"} mt={"1%"} mb={"1%"} justifyContent={"flex-start"} 
            onClick={()=>{
              set_str_sel(item);
            }}>{item}</Box>
          )
        })}
        
      </DropBox>
      }
      <Box display={"flex"} height={"100%"} position={"absolute"} right={"3%"} alignItems={"center"} top={"0"}>{!flag_drop ? <FaAngleDown fontSize={"1.5rem"} /> : <FaAngleUp fontSize={"1.5rem"} />}</Box>
    </DropBox>
  );
};

const DropBox = styled(Box)`
    @media (max-width: 600px){
        width:200px !important;
        font-size: 1rem !important;
    }
    @media (max-width: 450px){
        width:150px !important;
        font-size: 0.8rem !important;
    }
`

export default CustomDropdown;
