import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { AiOutlineDesktop } from "react-icons/ai";
import CartMainpage from "../../components/Carts/CartMainpage";
import car2 from "../../images/carts/car2.jpg"
import BtnCustomize from "../../components/Buttons/btn_customize1"
import { RiErrorWarningFill, RiMoneyDollarCircleFill } from "react-icons/ri"


const FavouriteItems = () => {
    return (
        <>
            <StyledContainer>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} fontWeight={"800"} fontSize={"2rem"}>
                    My favourite items
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} fontWeight={"600"} fontSize={"1.2rem"} marginTop={"2%"}>
                    Total value
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} fontWeight={"800"} fontSize={"2rem"} marginTop={"2%"}>
                    <RiMoneyDollarCircleFill />{'\u00a0'}58.35
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} marginTop={"2%"} width={"100%"}>
                    <BtnCustomize
                        color={"#e21e3f"}
                        back={"#e9c5cb"}
                        width={"150px"}
                        height={"40px"}
                        str_icon={<RiErrorWarningFill />}
                        str={"Delete all"}
                        borderRadius={"20px"}
                    />
                </Box>
                <Carts>
                    <CartMainpage img={car2} img_width={"18vw"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"25.29"} color={"#272224"} flagfav={true}/>
                    <CartMainpage img={car2} img_width={"18vw"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"25.29"} color={"#272224"} flagfav={true}/>
                    <CartMainpage img={car2} img_width={"18vw"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"25.29"} color={"#272224"} flagfav={true}/>
                    <CartMainpage img={car2} img_width={"18vw"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"25.29"} color={"#272224"} flagfav={true}/>
                </Carts>
                <Carts>
                    <CartMainpage img={car2} img_width={"18vw"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"25.29"} color={"#272224"} flagfav={true}/>
                    <CartMainpage img={car2} img_width={"18vw"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"25.29"} color={"#272224"} flagfav={true}/>
                    <Box display={"flex"} width={"18vw"}></Box>
                    <Box display={"flex"} width={"18vw"}></Box>
                </Carts>
            </StyledContainer>
        </>

    );
};

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


export default FavouriteItems;
