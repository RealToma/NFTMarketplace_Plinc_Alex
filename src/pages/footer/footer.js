import React, { useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import BlogText from "../../components/BlogText/BlogText";
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import "./footer.css"

const Mainpage = () => {
    const [value, setValue] = useState('')
    const changeHandler = (value) => {
        setValue(value)
    }

    return (
        <>
            <StyledContainer>
                <Box display={"flex"} width={"80%"} justifyContent={"space-between"}>
                    <Box display={"flex"} width={"23%"}>
                        <BlogText headstr={"Buying"} link1={"Buying basics"} link2={"Shop by category"} link3={"Saved items"} link4={"Promoted brands"} />
                    </Box>
                    <Box display={"flex"} width={"23%"}>
                        <BlogText headstr={"Selling"} link1={"Buying basics"} link2={"Shop by category"} link3={"Saved items"} link4={"Promoted brands"} />
                    </Box>
                    <Box display={"flex"} width={"23%"}>
                        <BlogText headstr={"Community"} link1={"Buying basics"} link2={"Shop by category"} link3={"Saved items"} link4={"Promoted brands"} />
                    </Box>
                    <Box display={"flex"} width={"23%"} flexDirection={"column"}>
                        <BlogText1 display={"flex"} color={"#272224"} fontSize={"1rem"} fontWeight={"600"}>
                            Current location
                        </BlogText1>
                        <Box display={"flex"} marginTop={"10px"}>
                            <CountryDropdown className="country_select" value={value} onChange={changeHandler} preferredCountries={['gb', 'us']} />
                        </Box>
                    </Box>
                </Box>
                <FLink display={"flex"} width={"80%"} marginTop={"50px"} color={"#272224"} fontSize={"1rem"}>
                    <Box display={"flex"}>Copyright © 2017-2021 Plinc ltd. All Rights Reserved. </Box>
                    <Box display={"flex"}>{'\u00a0'}{'\u00a0'}<Underline1>User Agreement</Underline1>, {'\u00a0'}<Underline1>Privacy</Underline1>,{'\u00a0'} <Underline1>Cookies</Underline1>  {'\u00a0'}and {'\u00a0'}<Underline1>AdChoice</Underline1></Box>
                </FLink>

            </StyledContainer>
        </>

    );
};

const BlogText1 = styled(Box)`
  @media (max-width: 800px) 
  {
    font-size: 0.8rem !important;
  }
  @media (max-width: 600px) 
  {
    font-size: 0.6rem !important;
  }
`

const FLink = styled(Box)`
    @media (max-width: 700px) {
        flex-direction: column !important;
    }
    @media (max-width: 800px) 
    {
        font-size: 0.8rem !important;
    }

`

const Underline1 = styled(Box)`
    text-decoration: underline;
    font-weight: 500;
    &:hover{
    cursor: pointer;
    color: grey;
  }
`

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 50px;
`;

export default Mainpage;
