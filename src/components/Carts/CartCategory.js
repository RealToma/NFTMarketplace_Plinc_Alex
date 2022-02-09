import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const CartCategory = ({ img, img_width, img_height, category_str }) => {
  return (
    <StyledComponent width={img_width}>
      <Cartimg width={img_width} height={img_height} style={{
        background: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px"
      }} >{category_str}</Cartimg>
    </StyledComponent>
  );
};

const Cartimg = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
    &:hover{
      box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.5),
      0 0 0 0px rgb(255, 255, 255), 0.5em 0.5em 1em rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 1200px){
        font-size: 1.2rem !important;
    }
    @media (max-width: 900px){
        font-size: 1rem !important;
    }
    @media (max-width: 750px){
        font-size: 0.8rem !important;
    }
    @media (max-width: 600px){
        font-size: 0.6rem !important;
    }
    @media (max-width: 450px){
        font-size: 0.4rem !important;
    }

`

const StyledComponent = styled(Box)`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
`;

export default CartCategory;
