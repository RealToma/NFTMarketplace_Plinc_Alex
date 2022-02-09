import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import success from "../../../images/success.png"
import BtnCustomize from "../../../components/Buttons/btn_customize1"
import { useNavigate } from "react-router-dom";

const CreateSuccess = () => {
    let navigate = useNavigate();
    return (
        <>
            <StyledContainer>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} fontWeight={"800"} fontSize={"2rem"}>
                    Success!
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} fontWeight={"600"} fontSize={"1.2rem"} marginTop={"1%"}>
                    Your item has been lsited on Plinc.
                </Box>
                <Box display={"flex"} width={"30%"} height={"35vw"} borderRadius={"20px"} marginTop={"3%"}>
                    <img width={"100%"} height={"100%"} src={success} style={{borderRadius:"20px"}} alt=""></img>
                </Box>
                <BtnBottom1 display={"flex"} width={"50%"} marginTop={"5%"}>
                    <Box display={"flex"} flex={"1"} justifyContent={"center"} onClick={() => {
                        navigate("/MyItems");
                        window.scrollTo(0, 0);
                    }} marginBottom={"2%"}>
                        <BtnCustomize
                            color={"white"}
                            back={"#e41a3c"}
                            width={"200px"}
                            height={"50px"}
                            str={"View your item"}
                            borderRadius={"20px"}
                        />
                    </Box>
                    <Box display={"flex"} flex={"1"} justifyContent={"center"} onClick={() => {
                        navigate("/CreateNFT");
                        window.scrollTo(0, 0);
                    }} marginBottom={"2%"}>
                        <BtnCustomize
                            color={"#272224"}
                            back={"#e2dbdb"}
                            width={"200px"}
                            height={"50px"}
                            str={"Sell another item"}
                            borderRadius={"20px"}
                        />
                    </Box>
                </BtnBottom1>
            </StyledContainer>
        </>

    );
};

const BtnBottom1 = styled(Box)`
    @media (max-width: 900px){
        width: 60% !important;
    }
    @media (max-width: 700px){
        width: 70% !important;
    }
    @media (max-width: 600px){
        flex-direction: column !important;
    }
`

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 50px;
`;


export default CreateSuccess;
