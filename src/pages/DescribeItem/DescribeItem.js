import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import car2 from "../../images/carts/car2.jpg"
import Menuicon from "../../components/MenuIcons/menuicons"
import BtnCustomize from "../../components/Buttons/btn_customize1"
import { FaChevronDown } from "react-icons/fa"
import { ImArrowLeft2 } from "react-icons/im"
import 'react-toastify/dist/ReactToastify.css';

const DescribeItem = () => {
    let navigate = useNavigate();
    return (
        <>
            <StyledContainer>
                <Box display={"flex"} width={"80%"}>
                    <UploadImgBox display={"flex"} width={"40%"} height={"50vw"} style={{
                        background: `url(${car2})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px"
                    }}></UploadImgBox>
                    <Box display={"flex"} width={"60%"} marginLeft={"3%"} marginTop={"1%"} flexDirection={"column"}>
                        <Box display={"flex"} >
                            <Box display={"flex"} onClick={() => {
                                navigate("/MyItems");
                                window.scrollTo(0, 0);
                            }} width={"100px"} marginRight={"2%"}>
                                <BtnCustomize
                                    color={"black"}
                                    back={"#c4c4c4"}
                                    width={"100%"}
                                    height={"40px"}
                                    str={"Back"}
                                    str_icon={<ImArrowLeft2 />}
                                    borderRadius={"20px"}
                                />
                            </Box>
                        </Box>
                        <Box display={"flex"} marginTop={"2%"} flexDirection={"column"}>
                            <NFTDes display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                The more detail you can use the better chance of achieving a <br />
                                sale. Remember to describe any special features, buyers love<br />
                                unique and interesting NFTs.
                            </NFTDes>
                            <Box display={"flex"} marginTop={"2%"} flexDirection={"column"}>
                                <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"}>Collection</Box>
                                <Box display={"flex"} width={"70%"} borderRadius={"10px"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"500"} bgcolor={"#e2dbdb"} marginTop={"1%"} padding={"10px"}>The Shrimp Society</Box>
                            </Box>
                            <Box display={"flex"} marginTop={"2%"} flexDirection={"column"}>
                                <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"}>ID</Box>
                                <Box display={"flex"} width={"70%"} borderRadius={"10px"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"500"} bgcolor={"#e2dbdb"} marginTop={"1%"} padding={"10px"}>Shrimp #1307</Box>
                            </Box>

                            <Box display={"flex"} marginTop={"3%"} flexDirection={"column"}>
                                <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"}>Description</Box>
                                <Box display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                    377/600
                                </Box>
                                <Box display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"1%"} width={"70%"} border={"1px solid #e2dbdb"} borderRadius={"10px"} padding={"10px"}>
                                    The Shrimp Society was established in 2017 to connect <br />
                                    ambitious young innovators, builders, and creators with the <br />
                                    purpose of sharing knowledge, skills.
                                    <br />
                                    <br />
                                    Are you a shrimp?
                                    <br />
                                    <br />
                                    AMBITIOUS
                                    <br />
                                    You have large goals, and are actually doing something about it.
                                    <br />
                                    INNOVATIVE
                                    <br />
                                    You live at the edge of technology, culture, and cutting-edge ideas.
                                    <br />
                                    <br />
                                    COLLABORATIVE
                                    <br />
                                    You want to support & be around other Shrimp.
                                </Box>
                                <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                    <Menuicon str={<FaChevronDown />} />
                                </Box>
                            </Box>
                            <Box display={"flex"} marginTop={"3%"} flexDirection={"column"}>
                                <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"600"}>Properties</Box>
                                <Box display={"flex"} marginTop={"2%"} width={"100%"}>
                                    <Box display={"flex"} marginBottom={"1%"} flexWrap={"wrap"}>
                                        <MenuIcons>
                                            Background: Green
                                        </MenuIcons>
                                        <MenuIcons>
                                            Shell: Green
                                        </MenuIcons>
                                        <MenuIcons>
                                            Chest: Shrimp
                                        </MenuIcons>
                                        <MenuIcons>
                                            Clothing: White Turtle Neck
                                        </MenuIcons>
                                        <MenuIcons>
                                            Neck Accessory: Palm Tree Pendant
                                        </MenuIcons>
                                        <MenuIcons>
                                            Skin: Orange
                                        </MenuIcons>
                                        <MenuIcons>
                                            Eyes: Trippy Black
                                        </MenuIcons>
                                        <MenuIcons>
                                            Shadow: Shadow
                                        </MenuIcons>
                                        <MenuIcons>
                                            Head: Shrimp Society Hat
                                        </MenuIcons>
                                        <MenuIcons>
                                            Mouth: Nonchalant
                                        </MenuIcons>
                                        <MenuIcons>
                                            Face Accessory: Futuristic Glasses
                                        </MenuIcons>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display={"flex"} width={"150px"} marginTop={"5%"} onClick={()=>{
                                navigate("/PriceItem");
                                window.scrollTo(0, 0);
                            }}>
                                <BtnCustomize
                                    color={"white"}
                                    back={"#e41a3c"}
                                    width={"100%"}
                                    height={"50px"}
                                    str={"Set the price"}
                                    borderRadius={"20px"}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </StyledContainer>
        </>
    );
};

const NFTDes = styled(Box)`
    @media (max-width: 800px){
        font-size: 0.8rem !important;
    }
    @media (max-width: 600px){
        font-size: 0.6rem !important;
    }
    @media (max-width: 400px){
        font-size: 0.5rem !important;
    }
`

const UploadImgBox = styled(Box)`
    @media (max-width: 900px){
        height: 70vw !important;
    }
    @media (max-width: 600px){
        height: 80vw !important;
    }
    @media (max-width: 400px){
        height: 100vw !important;
    }
`

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
    
`;

const MenuIcons = styled(Box)`
display: flex;
    margin-right: 1%;
    font-size: 1rem;
    font-weight:500;
    color: #272224;
    background-color: #e2dbdb;
    border-radius: 40px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 1%;
    &:hover{
        cursor: pointer;
        color: #f5f5f5;
        background-color: #272224;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    @media (max-width: 1000px){
        font-size: 0.8rem !important;
    }
    @media (max-width: 800px){
        font-size: 0.7rem !important;
    }
    @media (max-width: 600px){
        font-size: 0.6rem !important;
    }

`

export default DescribeItem;
