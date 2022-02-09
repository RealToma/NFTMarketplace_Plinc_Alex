import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import cart1 from "../../images/carts/cart1.jpg"
import Menuicon from "../../components/MenuIcons/menuicons"
import BtnCustomize from "../../components/Buttons/btn_customize1"
import { BsFillStarFill, BsStar, BsSuitHeartFill, BsTwitter, BsFillFileEarmarkFill } from "react-icons/bs"
import { IoMdRefreshCircle, IoMdFlag } from "react-icons/io"
import { FaChevronDown, FaPinterest, FaHorse } from "react-icons/fa"
import { RiCamera2Line } from "react-icons/ri"
import { ImArrowLeft2 } from "react-icons/im"
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartDetail = () => {
    let navigate = useNavigate();
    const [flag_fav, set_fav] = useState(false);
    return (
        <>
            <StyledContainer>
                <Box display={"flex"} width={"80%"}>
                    <UploadImgBox display={"flex"} width={"40%"} height={"50vw"} style={{
                        background: `url(${cart1})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px"
                    }}></UploadImgBox>
                    <Box display={"flex"} width={"60%"} marginLeft={"3%"} marginTop={"1%"} flexDirection={"column"}>
                        <ButtonLink1 display={"flex"} >
                            <Box display={"flex"} onClick={() => {
                                navigate("/");
                                window.scrollTo(0, 0);
                            }} width={"100px"} marginRight={"2%"} marginBottom={"1%"}>
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
                            <Box display={"flex"} width={"100px"} marginRight={"2%"} marginBottom={"1%"}>
                                <BtnCustomize
                                    color={"black"}
                                    back={"#c4c4c4"}
                                    width={"100%"}
                                    height={"40px"}
                                    str={"NFT"}
                                    str_icon={<FaHorse />}
                                    borderRadius={"20px"}
                                />
                            </Box>
                            <ShrimpBox display={"flex"} onClick={() => {
                                navigate("/ShrimpSociety");
                                window.scrollTo(0, 0);
                            }} width={"200px"} marginRight={"2%"} marginBottom={"1%"}>
                                <BtnCustomize
                                    color={"black"}
                                    back={"#c4c4c4"}
                                    width={"100%"}
                                    height={"40px"}
                                    str={"The Shrimp Society"}
                                    borderRadius={"20px"}
                                />
                            </ShrimpBox>
                        </ButtonLink1>
                        <Box display={"flex"} marginTop={"2%"} flexDirection={"column"}>
                            <Box display={"flex"} fontSize={"1.4rem"} color={"#272224"} fontWeight={"800"}>Shrimp #1307</Box>
                            <Box display={"flex"} marginTop={"1%"}>
                                <Box display={"flex"} flex={"1"} flexDirection={"column"}>
                                    <Box display={"flex"} alignItems={"center"} fontSize={"1rem"} fontWeight={"600"}>Seller</Box>
                                    <Box display={"flex"} alignItems={"center"} fontSize={"1rem"} fontWeight={"600"} marginTop={"1%"}>Rating</Box>
                                </Box>
                                <Box display={"flex"} flex={"3"} flexDirection={"column"} >
                                    <Box display={"flex"} alignItems={"center"} fontSize={"1rem"} fontWeight={"600"} style={{
                                        textDecoration: "underline"
                                    }}>DiamondHands</Box>
                                    <Box display={"flex"} alignItems={"center"} fontSize={"1rem"} fontWeight={"600"} color={"#f1db12"} marginTop={"1%"}>
                                        <BsFillStarFill color={"#f1db12"} />
                                        <BsFillStarFill color={"#f1db12"} style={{
                                            marginLeft: "2%"
                                        }} />
                                        <BsFillStarFill color={"#f1db12"} style={{
                                            marginLeft: "2%"
                                        }} />
                                        <BsFillStarFill color={"#f1db12"} style={{
                                            marginLeft: "2%"
                                        }} />
                                        <BsStar color={"grey"} style={{
                                            marginLeft: "2%"
                                        }} />
                                        <Box display={"flex"} marginLeft={"3%"} color={"#272224"}>58</Box>
                                    </Box>
                                </Box>
                            </Box>
                            <PriceBox display={"flex"} marginTop="5%">
                                <Box display={"flex"} flex={"2"}>
                                    <Box display={"flex"} flex={"1"} alignItems={"flex-start"} fontSize={"1rem"} fontWeight={"600"}>
                                        Price
                                    </Box>
                                    <Box display={"flex"} flex={"1"} alignItems={"flex-start"} fontSize={"1.8rem"} fontWeight={"800"}>
                                        <Box display={"flex"} alignItems={"center"}><IoMdRefreshCircle />{'\u00a0'}4.23</Box>
                                    </Box>
                                </Box>
                                <Box display={"flex"} flex={"1"} alignItems={"flex-start"} fontSize={"1rem"} fontWeight={"600"} flexDirection={"column"}>
                                    <Box display={"flex"} width={"100%"}>
                                        <BtnCustomize
                                            color={"white"}
                                            back={"#e41a3c"}
                                            width={"100%"}
                                            height={"50px"}
                                            str={"Buy it now"}
                                            borderRadius={"20px"}
                                        />
                                    </Box>
                                    <Box display={"flex"} width={"100%"} marginTop={"3%"}>
                                        <BtnCustomize
                                            color={"black"}
                                            back={"#b9b7b7"}
                                            width={"100%"}
                                            height={"50px"}
                                            str={"Make an offer"}
                                            borderRadius={"20px"}
                                        />
                                    </Box>
                                </Box>
                            </PriceBox>
                            <Box display={"flex"} marginTop={"3%"} flexDirection={"column"}>
                                <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"600"}>NFT description</Box>
                                <NFTDes display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                    The Shrimp Society was established in 2017 to connect<br />
                                    ambitious young innovators, builders, and creators with the <br />
                                    purpose of sharing knowledge, skills.
                                </NFTDes>
                                <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                    <Menuicon str={<FaChevronDown />} />
                                </Box>
                            </Box>
                            <Box display={"flex"} marginTop={"3%"} flexDirection={"column"}>
                                <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"600"}>Collection</Box>
                                <ShrimpBox display={"flex"} marginTop={"2%"} width={"200px"} onClick={() => {
                                    navigate("/ShrimpSociety");
                                }}>
                                    <BtnCustomize
                                        color={"black"}
                                        back={"#b9b7b7"}
                                        width={"100%"}
                                        height={"40px"}
                                        str={"The Shrimp Society"}
                                        borderRadius={"20px"}
                                    />
                                </ShrimpBox>
                            </Box>
                            <Box display={"flex"} marginTop={"3%"} flexDirection={"column"}>
                                <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"}>Properties</Box>
                                <Box display={"flex"} marginTop={"2%"} width={"100%"} flexDirection={"column"}>
                                    <Box display={"flex"} marginBottom={"1%"}>
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
                                    </Box>
                                    <Box display={"flex"} marginBottom={"1%"}>
                                        <MenuIcons>
                                            Neck Accessory: Palm Tree Pendant
                                        </MenuIcons>
                                        <MenuIcons>
                                            Skin: Orange
                                        </MenuIcons>
                                        <MenuIcons>
                                            Eyes: Trippy Black
                                        </MenuIcons>
                                    </Box>
                                    <Box display={"flex"} marginBottom={"1%"}>
                                        <MenuIcons>
                                            Shadow: Shadow
                                        </MenuIcons>
                                        <MenuIcons>
                                            Head: Shrimp Society Hat
                                        </MenuIcons>
                                        <MenuIcons>
                                            Mouth: Nonchalant
                                        </MenuIcons>
                                    </Box>
                                    <Box display={"flex"} marginBottom={"1%"}>
                                        <MenuIcons>
                                            Face Accessory: Futuristic Glasses
                                        </MenuIcons>
                                    </Box>
                                </Box>
                            </Box>
                            <BtnLinkBox display={"flex"} marginTop={"3%"}>
                                <Box display={"flex"} flex={"1"} marginBottom={"2%"}>
                                    <Box display={"flex"} marginRight={"2%"} onClick={() => {
                                        if (flag_fav) {
                                            toast.info("You disabled this item from your unfavourites", { transition: Slide });
                                        }
                                        else {
                                            toast.info("You saved this item to your favourites", { transition: Slide });
                                        }
                                        set_fav(!flag_fav);
                                    }} flex={"1"}>
                                        <ToastContainer position="top-center" limit={1} autoClose={3000} />
                                        {
                                            !flag_fav ?
                                                <BtnCustomize
                                                    color={"black"}
                                                    back={"#f5f5f5"}
                                                    width={"2.5rem"}
                                                    height={"2.5rem"}
                                                    str={<BsSuitHeartFill />}
                                                    borderRadius={"100%"}
                                                />
                                                :
                                                <BtnCustomize
                                                    color={"white"}
                                                    back={"#e41a3c"}
                                                    width={"2.5rem"}
                                                    height={"2.5rem"}
                                                    str={<BsSuitHeartFill />}
                                                    borderRadius={"100%"}
                                                />
                                        }

                                    </Box>
                                    <Box display={"flex"} marginRight={"2%"} flex={"1"}>
                                        <BtnCustomize
                                            color={"black"}
                                            back={"#f5f5f5"}
                                            width={"2.5rem"}
                                            height={"2.5rem"}
                                            str={<BsFillFileEarmarkFill />}
                                            borderRadius={"100%"}
                                        />
                                    </Box>
                                    <Box display={"flex"} marginRight={"2%"} flex={"1"}>
                                        <BtnCustomize
                                            color={"black"}
                                            back={"#f5f5f5"}
                                            width={"2.5rem"}
                                            height={"2.5rem"}
                                            str={<IoMdFlag />}
                                            borderRadius={"100%"}
                                        />
                                    </Box>
                                </Box>
                                <Box display={"flex"} flex={"1"} marginBottom={"2%"}>
                                    <Box display={"flex"} marginRight={"2%"} flex={"1"}>
                                        <BtnCustomize
                                            color={"white"}
                                            back={"#a8137c"}
                                            width={"2.5rem"}
                                            height={"2.5rem"}
                                            str={<RiCamera2Line />}
                                            borderRadius={"100%"}
                                        />
                                    </Box>
                                    <Box display={"flex"} marginRight={"2%"} flex={"1"}>
                                        <BtnCustomize
                                            color={"white"}
                                            back={"#da1616"}
                                            width={"2.5rem"}
                                            height={"2.5rem"}
                                            str={<FaPinterest />}
                                            borderRadius={"100%"}
                                        />
                                    </Box>
                                    <Box display={"flex"} marginRight={"2%"} flex={"1"}>
                                        <BtnCustomize
                                            color={"white"}
                                            back={"#1a6dda"}
                                            width={"2.5rem"}
                                            height={"2.5rem"}
                                            str={<BsTwitter />}
                                            borderRadius={"100%"}
                                        />
                                    </Box>
                                </Box>
                                <EmyBox1 display={"flex"} flex={"1"} marginBottom={"2%"}></EmyBox1>

                            </BtnLinkBox>
                        </Box>
                    </Box>
                </Box>
                <RBox display={"flex"} width={"80%"} marginTop={"100px"} justifyContent={"center"} fontSize={"2rem"} color={"#272224"} fontWeight={"800"}>
                    <Box display={"flex"} >Related products</Box>
                </RBox>
                <Box display={"flex"} width={"80%"} justifyContent={"space-between"} marginTop={"2%"}>
                    <Box display={"flex"} width={"23%"} height={"15vw"} style={{
                        background: `url(${cart1})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px 20px 0px 0px"
                    }}></Box>
                    <Box display={"flex"} width={"23%"} height={"15vw"} style={{
                        background: `url(${cart1})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px 20px 0px 0px"
                    }}></Box>
                    <Box display={"flex"} width={"23%"} height={"15vw"} style={{
                        background: `url(${cart1})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px 20px 0px 0px"
                    }}></Box>
                    <Box display={"flex"} width={"23%"} height={"15vw"} style={{
                        background: `url(${cart1})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px 20px 0px 0px"
                    }}></Box>
                </Box>
            </StyledContainer>
        </>
    );
};


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

const ShrimpBox = styled(Box)`
    @media (max-width: 500px){
        width: 150px !important;
    } 
`

const EmyBox1 = styled(Box)`
    @media (max-width: 900px){
        display: none !important;
    }
`

const BtnLinkBox = styled(Box)`
    @media (max-width: 600px){
        flex-direction: column !important;
    }
`

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

const PriceBox = styled(Box)`
    @media (max-width: 700px){
        flex-direction: column !important;
    }
`

const ButtonLink1 = styled(Box)`
    @media (max-width: 700px){
        flex-direction: column !important;
    }
`

const RBox = styled(Box)`
    @media (max-width: 1000px){
        font-size: 1.8rem !important;
    }
    @media (max-width: 600px){
        font-size: 1.5rem !important;
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

export default CartDetail;
