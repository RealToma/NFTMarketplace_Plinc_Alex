import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import BtnCategory1 from "../Buttons/btn_category1";

const CartListForSale = ({ img, img_width, img_height, str }) => {
  return (
    <StyledComponent width={img_width}>
      <Cartimg display={"flex"} width={img_width} height={img_height} style={{
        background: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px"
      }}></Cartimg>
      <DetailStr>{str}</DetailStr>
      <BtnForSale display={"flex"} marginTop={"10px"} width={"90%"}>
        <BtnCategory1 width={"100%"} height={"40px"} str={"List this for sale"} str_icon={""} bcolor={"#e2dbdb"} fcolor={"#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} />
      </BtnForSale>

    </StyledComponent>
  );
};

const BtnForSale = styled(Box)`

`

const Cartimg = styled(Box)`
    &:hover{
      box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.5),
      0 0 0 0px rgb(255, 255, 255), 0.5em 0.5em 1em rgba(0, 0, 0, 0.5);
    }
`
const DetailStr = styled(Box)`
    display: flex;
    width: 90%;
    margin-top:10px;
    font-weight: 600;
    color: #272224;
    font-size: 1rem;
    @media (max-width: 800px){
        font-size: 0.8rem !important;
    }
    @media (max-width: 600px){
        font-size: 0.6rem !important;
    }
    @media (max-width: 500px){
        font-size: 0.5rem !important;
    }
    @media (max-width: 400px){
        font-size: 0.4rem !important;
    }
`

const StyledComponent = styled(Box)`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

export default CartListForSale;
