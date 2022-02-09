import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Modal } from "@material-ui/core";
import styled from "styled-components";
import car2 from "../../../images/carts/car2.jpg"
import BtnCustomize from "../../../components/Buttons/btn_customize1"
import { ImArrowLeft2 } from "react-icons/im"
import BtnCategoryUC from "../../../components/Buttons/btn_category_unchange";
import { FaFirefox } from "react-icons/fa"
import 'react-toastify/dist/ReactToastify.css';
import { RiErrorWarningFill } from "react-icons/ri"
import trashbin from "../../../images/trashbin01.png"

const PriceItem = () => {
    let navigate = useNavigate();
    const [flag_type, set_type] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    const style1 = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "30%",
        borderRadius: "10px",
        backgroundColor: "white",
        border: "none",
        display: "flex",
        flexDirection: "column",
        outline: "none"
    };

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
                                navigate("/DescribeItem");
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
                            <DetailStr1 display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                The more detail you can use the better chance of achieving a <br />
                                sale. Remember to describe any special features, buyers love<br />
                                unique and interesting NFTs.
                            </DetailStr1>
                            <Box display={"flex"} marginTop={"5%"} width={"100%"} >
                                <Box display={"flex"} width={"300px"} borderRadius={"20px"} bgcolor={"#e2dbdb"} padding={"3px"}>
                                    <Box display={"flex"} width={"50%"} onClick={() => { set_type(!flag_type) }}>
                                        <BtnCategoryUC width={"100%"} height={"40px"} str={"Auction"} bcolor={!flag_type ? "#272224" : "#e2dbdb"} fcolor={!flag_type ? "#f5f5f5" : "#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} />
                                    </Box>
                                    <Box display={"flex"} width={"50%"} onClick={() => { set_type(!flag_type) }}>
                                        <BtnCategoryUC width={"100%"} height={"40px"} str={"Buy it now"} bcolor={flag_type ? "#272224" : "#e2dbdb"} fcolor={flag_type ? "#f5f5f5" : "#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} />
                                    </Box>
                                </Box>
                            </Box>
                            {!flag_type ?
                                <>
                                    <Box display={"flex"} marginTop={"5%"} flexDirection={"column"} width={"100%"}>
                                        <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"} marginTop={"2%"} >Set a start price</Box>
                                        <Box display={"flex"} position={"relative"} marginTop={"2%"} width={"100%"}>
                                            <InputBox1 component={"input"} width={"300px"} height={"50px"} borderRadius={"20px"} type={"number"} placeholder="0.00" border={"1px solid #3a3737"} style={{ direction: 'rtl', paddingLeft: "1%", paddingRight: "2%", fontSize: "2rem", fontWeight: "700" }}></InputBox1>
                                            <Box display={"flex"} position={"absolute"} left={"3%"} top={"30%"}><FaFirefox fontSize={"1.5rem"} /></Box>
                                        </Box>
                                    </Box>
                                    <Box display={"flex"} marginTop={"2%"} flexDirection={"column"}>
                                        <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"} marginTop={"2%"} >Set a duration</Box>
                                        <Box display={"flex"} position={"relative"} marginTop={"2%"} width={"100%"}>
                                            <InputBox1 component={"input"} width={"300px"} height={"50px"} borderRadius={"20px"} type={"number"} placeholder="Day Duration" border={"1px solid #3a3737"} style={{ direction: 'rtl', paddingLeft: "1%", paddingRight: "2%", fontSize: "2rem", fontWeight: "700" }}></InputBox1>
                                            <Box display={"flex"} position={"absolute"} left={"3%"} top={"30%"}><FaFirefox fontSize={"1.5rem"} /></Box>
                                        </Box>
                                    </Box>
                                </> :
                                <>
                                    <Box display={"flex"} marginTop={"5%"} flexDirection={"column"} width={"100%"}>
                                        <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"} marginTop={"2%"} >Set a price</Box>
                                        <Box display={"flex"} position={"relative"} marginTop={"2%"} width={"100%"}>
                                            <InputBox1 component={"input"} width={"300px"} height={"50px"} borderRadius={"20px"} type={"number"} placeholder="0.00" border={"1px solid #3a3737"} style={{ direction: 'rtl', paddingLeft: "1%", paddingRight: "2%", fontSize: "2rem", fontWeight: "700" }}></InputBox1>
                                            <Box display={"flex"} position={"absolute"} left={"3%"} top={"30%"}><FaFirefox fontSize={"1.5rem"} /></Box>
                                        </Box>
                                    </Box>
                                </>
                            }
                            <BtnBottom1 display={"flex"} width={"100%"} marginTop={"5%"}>
                                <Box display={"flex"} flex={"1"} justifyContent={"flex-start"} marginBottom={"2%"} onClick={() => {
                                    navigate("/PriceSuccess");
                                    window.scrollTo(0, 0);
                                }}>
                                    <BtnCustomize
                                        color={"white"}
                                        back={"#e41a3c"}
                                        width={"200px"}
                                        height={"50px"}
                                        str={"List your item"}
                                        borderRadius={"20px"}
                                    />
                                </Box>
                                <Box display={"flex"} flex={"1"} justifyContent={"flex-start"} marginBottom={"2%"} onClick={() => {
                                    handleOpen();
                                    window.scrollTo(0, 0);
                                }}>
                                    <BtnCustomize
                                        color={"#272224"}
                                        back={"#e2dbdb"}
                                        width={"200px"}
                                        height={"50px"}
                                        str={"Delete your listing"}
                                        str_icon={<RiErrorWarningFill />}
                                        borderRadius={"20px"}
                                    />
                                </Box>
                            </BtnBottom1>
                        </Box>
                    </Box>
                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <ModalBox1 style={style1} >
                        <MHeader>Want to delete this listing?</MHeader>
                        <MContent>
                            <ModalHeadStr1 display={"flex"} marginTop={"3%"} width={"100%"} justifyContent={"center"}>
                                You won’t be able to undo this action
                            </ModalHeadStr1>
                            <Box display={"flex"} width={"90%"} height={"350px"} borderRadius={"20px"} marginTop={"3%"}>
                                <img width={"100%"} height={"100%"} src={trashbin} style={{ borderRadius: "20px" }} alt=""></img>
                            </Box>
                            <Box display={"flex"} marginTop={"5%"} justifyContent={"space-between"} width={"80%"} alignItems={"center"} marginBottom={"5%"}>
                                <Box display={"flex"} width={"60%"} justifyContent={"center"} onClick={() => {
                                    navigate("/MyItems");
                                    window.scrollTo(0, 0);
                                    handleClose();
                                }}>
                                    <BtnCustomize
                                        color={"white"}
                                        back={"#e41a3c"}
                                        width={"250px"}
                                        height={"40px"}
                                        str={"Delete your listing"}
                                        str_icon={<RiErrorWarningFill />}
                                        borderRadius={"20px"}
                                    />
                                </Box>
                                <Box display={"flex"} width={"30%"} justifyContent={"center"} onClick={() => {
                                    handleClose()
                                }}>
                                    <BtnCustomize
                                        color={"#272224"}
                                        back={"#e2dbdb"}
                                        width={"100px"}
                                        height={"40px"}
                                        str={"Cancel"}
                                        borderRadius={"20px"}
                                    />
                                </Box>
                            </Box>
                        </MContent>
                    </ModalBox1>
                </Modal>
            </StyledContainer>
        </>
    );
};

const BtnBottom1 = styled(Box)`
    @media (max-width: 800px){
        flex-direction: column !important;
    }
`

const InputBox1 = styled(Box)`
    @media (max-width: 800px){
        width: 250px !important;
    }
    @media (max-width: 500px){
        width: 180px !important;
        height: 40px !important;
        font-size: 1.2rem !important;
    }
`

const DetailStr1 = styled(Box)`
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
    @media (max-width: 800px){
        height: 60vw !important;
    }
    @media (max-width: 500px){
        height: 70vw !important;
    }
`

const ModalHeadStr1 = styled(Box)`
    @media (max-width: 600px){
        font-size:12px !important;
    }
    @media (max-width: 400px){
        font-size:10px !important;
    }
`

const ModalBox1 = styled(Box)`
    @media (max-width: 1400px){
        width: 40% !important;
    }
    @media (max-width: 1000px){
        width: 50% !important;
    }
    @media (max-width: 800px){
        width: 60% !important;
    }
    @media (max-width: 600px){
        width: 70% !important;
    }
    @media (max-width: 400px){
        width: 80% !important;
    }
`

const MHeader = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
    font-weight: 700;
    font-size: 1.7rem;
    color: #272224;
    margin-top: 10%;
    align-items: center;
    @media (max-width: 1000px){
        font-size: 1.5rem !important;
    }
    @media (max-width: 700px){
        font-size: 1.3rem !important;
    }
    @media (max-width: 400px){
        font-size: 1rem !important;
    }
`;

const MContent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: #272224;
  font-weight: 500;
`;

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
    
`;

export default PriceItem;
