import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import CartListForSale from "../../components/Carts/CartListForSale";
import car2 from "../../images/carts/car2.jpg"
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import { MdVerified, MdLayers } from "react-icons/md"
import BtnCategory1 from "../../components/Buttons/btn_category1";
import user1 from "../../images/user1.jpg";
import { useNavigate } from "react-router-dom";

const MyItems = () => {
    let navigate = useNavigate();
    return (
        <>
            <StyledContainer>
                <Box display={"flex"} width={"150px"} height={"150px"} style={{
                    background: `url(${user1})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "100%"
                }} position={"relative"}>
                    <Box display={"flex"} position={"absolute"} right={"0px"} bottom={"10%"} width={"30px"} height={"30px"} bgcolor={"white"} borderRadius={"100%"} border={"2px solid white"} justifyContent={"center"} alignItems={"center"}><MdVerified fontSize={"2rem"} color={"#421e3f"} /></Box>
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} fontWeight={"800"} fontSize={"2rem"} marginTop={"2%"}>
                    My items
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} fontWeight={"600"} fontSize={"1.2rem"} marginTop={"2%"}>
                    Total value
                </Box>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} fontWeight={"800"} fontSize={"2rem"} marginTop={"2%"}>
                    <RiMoneyDollarCircleFill />{'\u00a0'}20.65
                </Box>
                <Box display={"flex"} alignItems={"center"} marginTop={"2%"} width={"60%"} flexWrap={"wrap"} justifyContent={"center"}>
                    <Box display={"flex"} marginBottom={"2%"} ml={"1%"} mr={"1%"}><BtnCategory1 width={"120px"} height={"40px"} str={"All items"} str_icon={<MdLayers />} bcolor={"#e2dbdb"} fcolor={"#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} /></Box>
                    <Box display={"flex"} marginBottom={"2%"} ml={"1%"} mr={"1%"}><BtnCategory1 width={"120px"} height={"40px"} str={"Listed items"} str_icon={<MdLayers />} bcolor={"#e2dbdb"} fcolor={"#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} /></Box>
                    <Box display={"flex"} marginBottom={"2%"} ml={"1%"} mr={"1%"}><BtnCategory1 width={"120px"} height={"40px"} str={"Wallet"} str_icon={<MdLayers />} bcolor={"#e2dbdb"} fcolor={"#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} /></Box>
                    <Box display={"flex"} marginBottom={"2%"} ml={"1%"} mr={"1%"}><BtnCategory1 width={"120px"} height={"40px"} str={"Your bids"} str_icon={<MdLayers />} bcolor={"#e2dbdb"} fcolor={"#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} /></Box>
                    <Box display={"flex"} marginBottom={"2%"} ml={"1%"} mr={"1%"}><BtnCategory1 width={"120px"} height={"40px"} str={"Your offers"} str_icon={<MdLayers />} bcolor={"#e2dbdb"} fcolor={"#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} /></Box>
                    <Box display={"flex"} marginBottom={"2%"} ml={"1%"} mr={"1%"}><BtnCategory1 width={"120px"} height={"40px"} str={"Activity"} str_icon={<MdLayers />} bcolor={"#e2dbdb"} fcolor={"#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} /></Box>
                </Box>
                <Carts>
                    <Box display={"flex"} onClick={()=>{navigate("/DescribeItem"); window.scrollTo(0, 0);}}><CartListForSale img={car2} img_width={"18vw"} img_height={"25vw"}  str={"Millionpoundape #139"}/></Box>
                    <Box display={"flex"} onClick={()=>{navigate("/DescribeItem"); window.scrollTo(0, 0);}}><CartListForSale img={car2} img_width={"18vw"} img_height={"25vw"}  str={"Millionpoundape #139"}/></Box>
                    <Box display={"flex"} onClick={()=>{navigate("/DescribeItem"); window.scrollTo(0, 0);}}><CartListForSale img={car2} img_width={"18vw"} img_height={"25vw"}  str={"Millionpoundape #139"}/></Box>
                    <Box display={"flex"} onClick={()=>{navigate("/DescribeItem"); window.scrollTo(0, 0);}}><CartListForSale img={car2} img_width={"18vw"} img_height={"25vw"}  str={"Millionpoundape #139"}/></Box>
                    <Box display={"flex"} onClick={()=>{navigate("/DescribeItem"); window.scrollTo(0, 0);}}><CartListForSale img={car2} img_width={"18vw"} img_height={"25vw"}  str={"Millionpoundape #139"}/></Box>
                    <Box display={"flex"} onClick={()=>{navigate("/DescribeItem"); window.scrollTo(0, 0);}}><CartListForSale img={car2} img_width={"18vw"} img_height={"25vw"}  str={"Millionpoundape #139"}/></Box>
                    <Box display={"flex"} onClick={()=>{navigate("/DescribeItem"); window.scrollTo(0, 0);}}><CartListForSale img={car2} img_width={"18vw"} img_height={"25vw"}  str={"Millionpoundape #139"}/></Box>
                    <Box display={"flex"} onClick={()=>{navigate("/DescribeItem"); window.scrollTo(0, 0);}}><CartListForSale img={car2} img_width={"18vw"} img_height={"25vw"}  str={"Millionpoundape #139"}/></Box>
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
    flex-wrap: wrap;
`

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 50px;
`;


export default MyItems;
