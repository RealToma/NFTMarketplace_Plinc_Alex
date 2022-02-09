import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { FaUser, FaWallet, FaSearch } from "react-icons/fa";
import { ImHome, ImHeart, ImPlus } from "react-icons/im";
import { AiFillAppstore } from "react-icons/ai";
import { BsLayersFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import plinc_icon from "../../images/plinc_icon01.svg"

const Header = () => {
    let navigate = useNavigate();
    return (
        <StyledContainer>
            <Box display={"flex"} flex={"1"} justifyContent={"center"} alignItems={"center"}>
                <Box display={"flex"} flex={"1"} justifyContent={"center"} alignItems={"center"}>
                    <IconCircle><Box width={"1.8rem"} height={"1.8rem"} style={{
                        background: `url(${plinc_icon})`, backgroundSize: "cover", borderRadius: "100%"
                    }}></Box></IconCircle>
                </Box>
                <Box display={"flex"} flex={"1"} justifyContent={"center"} alignItems={"center"}>
                    <IconCircle onClick={() => {
                        navigate("/");
                    }}><ImHome /></IconCircle>
                </Box>
                <Box display={"flex"} flex={"1"} justifyContent={"center"} alignItems={"center"}>
                    <IconCircle><AiFillAppstore /></IconCircle>
                </Box>
                <Box display={"flex"} flex={"1"} justifyContent={"center"} alignItems={"center"}>
                    <IconCircle onClick={() => {
                        navigate("/FavouriteItems");
                    }}><ImHeart /></IconCircle>
                </Box>
            </Box>
            <SearchBox display={"flex"} flex={"3"} justifyContent={"center"} alignItems={"center"} width={"100%"}>
                <Box height={"2.5rem"} display={"flex"} bgcolor={"#f5f5f5"} color={"#272224"} borderRadius={"40px"} width={"100%"}>
                    <Box display={"flex"} color={"#272224"} fontSize={"1.3rem"} justifyContent={"center"} alignItems={"center"} fontWeight={"500"} marginLeft={"2%"}>
                        <FaSearch />
                    </Box>
                    <Box component={"input"} border={"none"} style={{ outline: "none" }} width={"80%"} bgcolor={"#f5f5f5"} marginLeft={"2%"} placeholder="Search for products and brands" color={"#272224"} fontSize={"1.3rem"}></Box>
                </Box>
            </SearchBox>
            <Box display={"flex"} flex={"0.8"} justifyContent={"center"} alignItems={"center"}>
                <Box display={"flex"} flex={"1"} justifyContent={"center"} alignItems={"center"}>
                    <IconCircle onClick={() => {
                        navigate("/CreateNFT");
                    }}><ImPlus /></IconCircle>
                </Box>
                <Box display={"flex"} flex={"1"} justifyContent={"center"} alignItems={"center"}>
                    <IconCircle><BsLayersFill /></IconCircle>
                </Box>
                <Box display={"flex"} flex={"1"} justifyContent={"center"} alignItems={"center"}>
                    <IconCircle onClick={() => {
                        navigate("/MyItems");
                    }}><FaUser /></IconCircle>
                </Box>
            </Box>
            <Box display={"flex"} flex={"0.8"} justifyContent={"center"} alignItems={"center"}>
                <Box display={"flex"} color={"#272224"} fontSize={"1rem"} justifyContent={"center"} alignItems={"center"} fontWeight={"900"} style={{ cursor: "pointer" }} width={"100%"}>
                    <Box><FaWallet /></Box> <WalletStr display={"flex"} marginLeft={"2%"}>Select Wallet</WalletStr>
                </Box>
            </Box>
        </StyledContainer>
    );
};

const WalletStr = styled(Box)`
    @media (max-width: 900px){
        font-size: 0.8rem !important;
  }
  @media (max-width: 800px){
        font-size: 0.7rem !important;
  }
  @media (max-width: 700px){
        font-size: 1rem !important;
  }
  @media (max-width: 500px){
        font-size: 0.8rem !important;
  }
  @media (max-width: 400px){
        font-size: 0.6rem !important;
  }
`

const SearchBox = styled(Box)`
    @media (max-width: 700px){
        display: none !important;
  }
`

const IconCircle = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    background-color: #f5f5f5;
    color: #272224;
    font-size: 1.3rem;
    &:hover{
        cursor: pointer;
        color: #f5f5f5;
        background-color: #272224;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
`

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    width: 100%;
    height: 64px;
    margin-top:10px;
`;


export default Header;
