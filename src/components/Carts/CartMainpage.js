import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { IoMdRefreshCircle } from "react-icons/io"
import { FaTrashAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import BtnCustomize from "../Buttons/btn_customize1";

const CartMainpage = ({ img, img_width, img_height, category, category_str, str, price, color, flagbtn, flagfav }) => {
  let navigate = useNavigate();
  return (
    <StyledComponent width={img_width}>
      <Cartimg display={"flex"} width={img_width} height={img_height} style={{
        background: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px"
      }} onClick={() => {
        if (flagbtn === '0') {
          navigate("/CartDetail")
        }
        else if (flagbtn === '1') {
          navigate("/CartDetail")
        }
        else {
          return;
        }
        window.scrollTo(0, 0);
      }}></Cartimg>
      <DetailStr>{str}</DetailStr>
      <CartDetailData display={"flex"} marginTop={"10px"} width={"90%"}>
        <Box display={"flex"} flex={"1"} justifyContent={"flex-start"} alignItems={"center"} >
          <CartButton display={"flex"} bgcolor={"#ccc9c9"} color={color} borderRadius={"20px"} fontWeight={"600"}  fontSize={"1rem"} style={{
            padding: "3px 10px 3px 10px "
          }} alignItems={"center"} onClick={() => {
            if (flagbtn === '0') {
              navigate("/CategoryItems")
            }
            else if (flagbtn === '1') {
              navigate("/FavouriteItems")
            }
            else {
              return;
            }
            window.scrollTo(0, 0);
          }}>
            {category}{'\u00a0'}{category_str}
          </CartButton>
        </Box>
        <RightDetail display={"flex"} flex={"1"} justifyContent={"flex-end"} alignItems={"center"} color={"#272224"} fontSize={"1.2rem"} fontWeight={"800"}><IoMdRefreshCircle />{'\u00a0'}{price}</RightDetail>
      </CartDetailData>
      {flagfav === true ?
        <>
          <Box display={"flex"} position={"absolute"} right={"4%"} top={"2%"} width={"30px"} height={"30px"}>
            <BtnCustomize
              color={"#e21e3f"}
              back={"#e9c5cb"}
              width={"100%"}
              height={"100%"}
              str_icon={<FaTrashAlt />}
              borderRadius={"100%"}
            />

          </Box>
        </> : <></>
      }
    </StyledComponent>
  );
};

const CartDetailData = styled(Box)`
  @media (max-width: 1300px) {
    flex-direction: column !important;
  }
`
const RightDetail = styled(Box)`
    @media (max-width: 1300px) {
    justify-content: flex-start !important;
    margin-top: 2%;
    font-size: 1rem !important;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem !important;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem !important;
  }
  @media (max-width: 400px) {
    font-size: 0.5rem !important;
  }
`

const CartButton = styled(Box)`
  &:hover{
    cursor: pointer;
    background-color: #3a3737;
    color: #ccc9c9;
  }
  @media (max-width: 1000px) {
    font-size: 1rem !important;
    padding: 2px 8px 2px 8px !important;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem !important;
    padding: 1px 5px 1px 5px !important;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem !important;
  }
  @media (max-width: 400px) {
    font-size: 0.5rem !important;
  }
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
    @media (max-width: 800px) {
      font-size: 0.8rem !important;
      padding: 1px 5px 1px 5px !important;
    }
    @media (max-width: 600px) {
      font-size: 0.6rem !important;
    }
`

const StyledComponent = styled(Box)`
    display: flex;
    position: relative;
    flex-direction: column;
    /* width: 100%; */
    align-items: center;
    margin-bottom: 30px;
`;

export default CartMainpage;
