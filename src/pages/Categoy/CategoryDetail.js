import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import CartCategory from "../../components/Carts/CartCategory";
import cart3 from "../../images/carts/cart3.jpg"


const CategoryDetail = () => {
    return (
        <>
            <StyledContainer>
                <HeadStr1 display={"flex"} justifyContent={"center"} alignItems={"center"} fontWeight={"800"} fontSize={"3.5rem"}>
                    Product categories
                </HeadStr1>
                <Carts>
                    <Box display={"flex"} width={"100%"}>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Furniture"}/>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Play equipment"}/>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Home & Garden"}/>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Toys & Games "}/>
                    </Box>
                    <Box display={"flex"} width={"100%"} marginTop={"2%"}>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Apparel & Accessories"}/>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Footware"}/>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Baby & Toddler"}/>
                    </Box>
                    <Box display={"flex"} width={"100%"} marginTop={"2%"}>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Lawn & Garden"}/>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Collectables"}/>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Clothing"}/>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Home entertainment"}/>
                    </Box>
                    <Box display={"flex"} width={"100%"} marginTop={"2%"}>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Sporting goods"}/>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Pets"}/>
                        <CartCategory img={cart3} img_width={"90%"} img_height={"18vw"} category_str={"Decoration"}/>
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
        font-size: 2.8rem !important;
    }
    @media (max-width: 900px){
        font-size: 2.5rem !important;
    }
    @media (max-width: 700px){
        font-size: 2rem !important;
    }
    @media (max-width: 500px){
        font-size: 1.8rem !important;
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

const Carts = styled(Box)`
    display: flex;
    width: 95%;
    margin-top: 50px;
    flex-direction: column;
`

export default CategoryDetail;
