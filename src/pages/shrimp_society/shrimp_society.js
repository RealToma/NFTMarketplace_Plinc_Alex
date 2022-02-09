import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { AiOutlineDesktop } from "react-icons/ai";
import CartMainpage from "../../components/Carts/CartMainpage";
import car1 from "../../images/carts/car1.jpg"
import top_back1 from "../../images/bmw.jpg"
import BtnCustomize from "../../components/Buttons/btn_customize1"
import { useNavigate } from "react-router-dom";
import {ImArrowLeft2} from "react-icons/im"

const ShrimpSociety = () => {
    let navigate = useNavigate();
    return (
        <>
            <StyledContainer>
                <Box display={"flex"} width={"90%"} height={"20vw"} style={{
                    background: `url(${top_back1})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px"
                }} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                    <HeadStr1 display={"flex"} color={"white"} fontSize={"3.5rem"} fontWeight={"700"}>
                        The Shrimp Society
                    </HeadStr1>
                    <HeadStr2 display={"flex"} color={"white"} fontSize={"1.5rem"} fontWeight={"500"} marginTop={"1%"} justifyContent={"center"}>
                        The Shrimp Society was established in 2017 to connect ambitious young innovators, builders, and creators
                    </HeadStr2>
                    <HeadStr2 display={"flex"} color={"white"} fontSize={"1.5rem"} fontWeight={"500"} justifyContent={"center"} marginTop={"1%"}>
                        with the purpose of sharing knowledge, skills.
                    </HeadStr2>
                </Box>
                <Box display={"flex"} width={"100px"} justifyContent={"center"} marginTop={"2%"} onClick={() => {
                    navigate("/CartDetail");
                    window.scrollTo(0, 0);
                }}>
                    <BtnCustomize
                        color={"black"}
                        back={"#c4c4c4"}
                        width={"100%"}
                        height={"40px"}
                        str={"Back"}
                        str_icon = {<ImArrowLeft2/>}
                        borderRadius={"20px"}
                    />
                </Box>
                <Carts>
                    <Box display={"flex"} width={"23%"} flexDirection={"column"}>
                        <CartMainpage img={car1} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={car1} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={car1} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                    </Box>
                    <Box display={"flex"} width={"23%"} flexDirection={"column"}>
                        <CartMainpage img={car1} img_width={"100%"} img_height={"15vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={car1} img_width={"100%"} img_height={"12vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={car1} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={car1} img_width={"100%"} img_height={"20vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                    </Box>
                    <Box display={"flex"} width={"23%"} flexDirection={"column"}>
                        <CartMainpage img={car1} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={car1} img_width={"100%"} img_height={"15vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={car1} img_width={"100%"} img_height={"15vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={car1} img_width={"100%"} img_height={"15vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                    </Box>
                    <Box display={"flex"} width={"23%"} flexDirection={"column"}>
                        <CartMainpage img={car1} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={car1} img_width={"100%"} img_height={"30vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={car1} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                    </Box>
                </Carts>
            </StyledContainer>
        </>

    );
};
const HeadStr1 = styled(Box)`
    @media (max-width: 1400px){
        font-size: 3rem !important;
    }
    @media (max-width: 1100px){
        font-size: 2.5rem !important;
    }
    @media (max-width: 900px){
        font-size: 2rem !important;
    }
    @media (max-width: 700px){
        font-size: 1.8rem !important;
    }
    @media (max-width: 500px){
        font-size: 1.5rem !important;
    }
`

const HeadStr2 = styled(Box)`
    @media (max-width: 1400px){
        font-size: 1.2rem !important;
    }
    @media (max-width: 1100px){
        font-size: 1rem !important;
    }
    @media (max-width: 900px){
        font-size: 0.8rem !important;
    }
    @media (max-width: 700px){
        font-size: 0.6rem !important;
    }
    @media (max-width: 600px){
        display: none !important;
    }
`

const Carts = styled(Box)`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin-top: 50px;
`

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 50px;
`;


export default ShrimpSociety;
