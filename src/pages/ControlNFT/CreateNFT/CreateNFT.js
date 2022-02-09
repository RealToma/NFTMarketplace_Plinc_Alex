import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Modal } from "@material-ui/core";
import styled from "styled-components";
import BtnCustomize from "../../../components/Buttons/btn_customize1"
import BtnCategoryUC from "../../../components/Buttons/btn_category_unchange";
import 'react-toastify/dist/ReactToastify.css';
import { ImArrowLeft2, ImImages } from "react-icons/im"
import { FaCloudUploadAlt, FaFirefox } from "react-icons/fa"
import { RiErrorWarningFill } from "react-icons/ri"
import { MdDeleteForever } from "react-icons/md";
import trashbin from "../../../images/trashbin01.png"
import CustomLabel from "../../../components/Forms/CustomLabel";
import CustomInput from "../../../components/Forms/CustomInput";
import CustomDropdown from "../../../components/Forms/CustomDropdown";

const CreateNFT = () => {
    let navigate = useNavigate();
    const [flag_type, set_type] = useState(true);
    const [flag_pricetype, set_pricetype] = useState(false);
    const [upload_img, set_uploadimg] = useState('');
    const [upload_img_phy, set_uploadimg_phy] = useState([]);
    const fileInputRef = useRef();
    const fileInputRef_phy = useRef();
    const [flag_go, set_go] = useState(0);
    const [flag_go1, set_go1] = useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [desname, set_desname] = useState("");
    const [descontent, set_descontent] = useState("");
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

    const options = [
        'Dropdown List01', 'Dropdown List02', 'Dropdown List03'
    ];

    return (
        <>
            <StyledContainer>
                {!flag_type ? <>
                    {flag_go1 === 0 ?
                        <>
                            <HeaderStr display={"flex"} fontSize={"2rem"} color={"#272224"} fontWeight={"700"}>
                                Add an image of the item you want to sell
                            </HeaderStr>
                            <Box display={"flex"} width={"80%"} marginTop={"2%"}>
                                <Box display={"flex"} flexDirection={"column"} width={"40%"} alignItems={"center"}>
                                    <UploadImgBox display={"flex"} width={"100%"} height={"50vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"}>
                                        {upload_img === undefined || upload_img === "" ? "" : <img src={upload_img} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                    </UploadImgBox>
                                    <Box display={"flex"} marginTop={"2%"} width={"95%"} justifyContent={"center"}>
                                        <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                            set_uploadimg(e.target.src)
                                        }}>
                                            {upload_img_phy[0] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[0])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                        </Box>
                                        <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                            set_uploadimg(e.target.src)
                                        }}>
                                            {upload_img_phy[1] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[1])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                        </Box>
                                        <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                            set_uploadimg(e.target.src)
                                        }}>
                                            {upload_img_phy[2] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[2])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                        </Box>
                                        <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                            set_uploadimg(e.target.src)
                                        }}>
                                            {upload_img_phy[3] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[3])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                        </Box>
                                    </Box>
                                </Box>
                                <Box display={"flex"} width={"60%"} marginLeft={"3%"} marginTop={"1%"} flexDirection={"column"}>
                                    <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"}  >Item type</Box>
                                    <Box display={"flex"} marginTop={"2%"} flexDirection={"column"}>
                                        <Box display={"flex"} width={"100%"} >
                                            <Box display={"flex"} width={"300px"} borderRadius={"20px"} bgcolor={"#e2dbdb"} padding={"3px"}>
                                                <Box display={"flex"} width={"50%"} onClick={() => { set_type(!flag_type) }}>
                                                    <BtnCategoryUC width={"100%"} height={"40px"} str={"Physical item"} bcolor={!flag_type ? "#272224" : "#e2dbdb"} fcolor={!flag_type ? "#f5f5f5" : "#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} />
                                                </Box>
                                                <Box display={"flex"} width={"50%"} onClick={() => { set_type(!flag_type) }}>
                                                    <BtnCategoryUC width={"100%"} height={"40px"} str={"Digital NFT"} bcolor={flag_type ? "#272224" : "#e2dbdb"} fcolor={flag_type ? "#f5f5f5" : "#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <DetailStr1 display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"5%"}>
                                            Your files will be uploaded to the decentralized web via Arweave. <br />
                                            Depending on file type it can take up to 1 minute. Arweave is a <br />
                                            type of cloud storage that backs data with sustainable and <br />
                                            perpetual endowments.
                                        </DetailStr1>
                                        <Box display={"flex"} width={"100%"} marginTop={"5%"} onClick={() => {
                                            fileInputRef.current.click();
                                        }}>
                                            <Box display={"flex"} width={"300px"}>
                                                <input onChange={(e) => {
                                                    set_uploadimg(URL.createObjectURL(e.target.files[0]))
                                                    let temp = [];
                                                    temp.push(e.target.files[0]);
                                                    set_uploadimg_phy(temp);
                                                }} multiple={false} ref={fileInputRef} type='file' accept="image/*" hidden />
                                                <BtnCustomize
                                                    color={"#272224"}
                                                    back={"#e2dbdb"}
                                                    width={"100%"}
                                                    height={"50px"}
                                                    str_icon={<FaCloudUploadAlt />}
                                                    str={"Upload the NFT image"}
                                                    borderRadius={"20px"}
                                                />
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"} marginTop={"5%"}>Other photos (optional)</Box>
                                        {upload_img_phy.length < 2 ?
                                            <MultiUploadBox onClick={() => {
                                                let temp_phy = [];
                                                temp_phy = upload_img_phy;
                                                if (temp_phy.length === 0) {
                                                    alert("You must select main image first.");
                                                    return;
                                                }
                                                fileInputRef_phy.current.click();
                                            }}>
                                                <input onChange={(e) => {
                                                    if (e.target.files.length > 3) {
                                                        alert("You must select files less than 3.");
                                                        return;
                                                    }
                                                    let temp_phy = [...upload_img_phy];
                                                    for (var i = 0; i < e.target.files.length; i++) {
                                                        temp_phy.push(e.target.files[i])
                                                    }
                                                    set_uploadimg_phy(temp_phy);
                                                }} multiple={true} ref={fileInputRef_phy} type='file' accept="image/*" hidden />
                                                <Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"} marginTop={"3%"} marginBottom={"3%"}>
                                                    <ImImages fontSize={"2rem"} ></ImImages>
                                                </Box>
                                                <MultiUploadStr>
                                                    Upload 3 other images in PNG or JPG format
                                                </MultiUploadStr>
                                                <MultiUploadStr>
                                                    Drag and drop files here, or click to browse your device
                                                </MultiUploadStr>
                                            </MultiUploadBox> :
                                            <MultiUploadBox1 >
                                                {
                                                    upload_img_phy.map((item, index) => {
                                                        return (
                                                            <MultiImageDelete display={"flex"} index={index} mt={"1%"} mb={"1%"} width={"100%"} borderRadius={"5px"}>
                                                                <Box display={"flex"} flex={"7"} justifyContent={"flex-start"} alignItems={"center"} fontWeight={"500"}>
                                                                    <Box display={"flex"} fontSize={"1.5rem"} alignItems={"center"}><MdDeleteForever /></Box>
                                                                    <Box display={"flex"} marginLeft={"2%"} alignItems={"center"} fontSize={"1rem"} flexWrap={"wrap"} style={{ "word-break": "break-word" }}>{item.name}</Box>
                                                                </Box>
                                                                <Box display={"flex"} flex={"3"} justifyContent={"flex-end"} alignItems={"center"} fontSize={"1rem"} fontWeight={"500"} color={"#85330c"}>{(item.size / 1024).toFixed(2)}KB</Box>
                                                            </MultiImageDelete>
                                                        );
                                                    })
                                                }
                                            </MultiUploadBox1>
                                        }

                                        {upload_img_phy.length < 2 ?
                                            <Box display={"flex"} width={"100%"} marginTop={"5%"}>
                                                <Box display={"flex"} width={"300px"} style={{ "opacity": "0.3" }} onClick={() => {
                                                }}>
                                                    <BtnCustomize
                                                        color={"white"}
                                                        back={"#e41a3c"}
                                                        width={"100%"}
                                                        height={"50px"}
                                                        str={"Write a description"}
                                                        borderRadius={"20px"}

                                                    />
                                                </Box>
                                            </Box>
                                            :
                                            <BtnBottom1 display={"flex"} width={"100%"} marginTop={"5%"}>
                                                <Box display={"flex"} flex={"1"} justifyContent={"flex-start"} marginBottom={"2%"} onClick={() => {
                                                    set_go1(1);
                                                    window.scrollTo(0, 0);
                                                }}>
                                                    <BtnCustomize
                                                        color={"white"}
                                                        back={"#e41a3c"}
                                                        width={"200px"}
                                                        height={"50px"}
                                                        str={"Write a description"}
                                                        borderRadius={"20px"}
                                                    />
                                                </Box>
                                                <Box display={"flex"} flex={"1"} justifyContent={"flex-start"} marginBottom={"2%"} onClick={() => {
                                                    let temp_upload = "", temp_uploadphy = [];
                                                    set_uploadimg(temp_upload);
                                                    set_uploadimg_phy(temp_uploadphy)
                                                    window.scrollTo(0, 0);
                                                }}>
                                                    <BtnCustomize
                                                        color={"#272224"}
                                                        back={"#e2dbdb"}
                                                        width={"200px"}
                                                        height={"50px"}
                                                        str={"Cancel your listing"}
                                                        str_icon={<RiErrorWarningFill />}
                                                        borderRadius={"20px"}
                                                    />
                                                </Box>
                                            </BtnBottom1>}


                                    </Box>
                                </Box>
                            </Box>
                        </> :
                        flag_go1 === 1 ?
                            <>
                                <HeaderStr1 display={"flex"} fontSize={"2rem"} color={"#272224"} fontWeight={"700"}>
                                    Describe your item
                                </HeaderStr1>
                                <Box display={"flex"} width={"80%"} marginTop={"2%"}>
                                    <Box display={"flex"} flexDirection={"column"} width={"40%"} alignItems={"center"}>
                                        <UploadImgBox display={"flex"} width={"100%"} height={"50vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"}>
                                            {upload_img === undefined || upload_img === "" ? "" : <img src={upload_img} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                        </UploadImgBox>
                                        <Box display={"flex"} marginTop={"2%"} width={"95%"} justifyContent={"center"}>
                                            <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                                set_uploadimg(e.target.src)
                                            }}>
                                                {upload_img_phy[0] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[0])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                            </Box>
                                            <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                                set_uploadimg(e.target.src)
                                            }}>
                                                {upload_img_phy[1] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[1])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                            </Box>
                                            <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                                set_uploadimg(e.target.src)
                                            }}>
                                                {upload_img_phy[2] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[2])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                            </Box>
                                            <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                                set_uploadimg(e.target.src)
                                            }}>
                                                {upload_img_phy[3] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[3])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box display={"flex"} width={"60%"} marginLeft={"3%"} marginTop={"1%"} flexDirection={"column"}>
                                        <Box display={"flex"} >
                                            <Box display={"flex"} onClick={() => {
                                                set_go1(0);
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
                                        <DetailStr1 display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"5%"}>
                                            The more detail you can use the better chance of achieving a <br />
                                            sale. Remember to describe any special features, buyers love<br />
                                            unique and interesting NFTs.
                                        </DetailStr1>
                                        <Box display={"flex"} marginTop={"5%"} flexDirection={"column"}>
                                            <CustomLabel fsize={"1.2rem"} fweight={"700"} fcolor={"#272224"} str={"Category"} />
                                            <Box display={"flex"} component={"input"} width={"70%"} borderRadius={"10px"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"500"} bgcolor={"white"} marginTop={"1%"} padding={"10px"} border={"1px solid #e2dbdb"} placeholder="Start typing to choose a category"></Box>
                                            <CustomLabel fsize={"1.2rem"} fweight={"700"} fcolor={"#272224"} str={"Name"} />
                                            <Box display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                                {desname.length}/70
                                            </Box>
                                            <Box display={"flex"} component={"input"} width={"70%"} borderRadius={"10px"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"500"} bgcolor={"white"} marginTop={"1%"} padding={"10px"} border={"1px solid #e2dbdb"} placeholder="Deep thought"
                                                value={desname}
                                                onChange={(e) => {
                                                    if (e.target.value.length > 70) {
                                                        alert("The length must be less than 70.");
                                                        return;
                                                    }
                                                    set_desname(e.target.value);
                                                }}></Box>
                                        </Box>
                                        <Box display={"flex"} marginTop={"3%"} flexDirection={"column"}>
                                            <CustomLabel fsize={"1.2rem"} fweight={"700"} fcolor={"#272224"} str={"Product description"} />
                                            <Box display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                                {descontent.length}/600
                                            </Box>
                                            <Box display={"flex"} component={"textarea"} fontSize={"1rem"} color={"#272224"} fontWeight={"500"} bgcolor={"white"} marginTop={"1%"} width={"70%"} height={"100px"} border={"1px solid #e2dbdb"} borderRadius={"10px"} padding={"10px"} placeholder="Type description here."
                                                value={descontent}
                                                onChange={(e) => {
                                                    if (e.target.value.length > 600) {
                                                        alert("The length must be less than 600.");
                                                        return;
                                                    }
                                                    set_descontent(e.target.value);
                                                }}
                                            >
                                            </Box>
                                        </Box>
                                        <CustomLabel fsize={"1.2rem"} fweight={"700"} fcolor={"#272224"} str={"How many availble"} mt={"3%"} />
                                        <CustomInput type={"number"} width={"150px"} textalign={"center"} bradius={"10px"} fsize={"1.2rem"} fcolor={"#272224"} fweight={"500"} bcolor={"white"} mt={"2%"} padding={"10px"} border={"1px solid #e2dbdb"} pholder={"0"} />

                                        <CustomLabel fsize={"1.2rem"} fweight={"700"} fcolor={"#272224"} str={"Condition"} mt={"3%"} />
                                        <CustomDropdown width={"300px"} bradius={"20px"} fsize={"1.2rem"} fcolor={"#272224"} fweight={"500"} bcolor={"white"} mt={"2%"} padding={"10px"} border={"1px solid #e2dbdb"} pholder={"Item condition"} list={options} />

                                        <Box display={"flex"}>
                                            <Box display={"flex"} flexDirection={"column"}>
                                                <CustomLabel fsize={"1.2rem"} fweight={"700"} fcolor={"#272224"} str={"Brand"} mt={"3%"} />
                                                <CustomDropdown width={"500px"} bradius={"20px"} fsize={"1.2rem"} fcolor={"#272224"} fweight={"500"} bcolor={"white"} mt={"2%"} padding={"10px"} border={"1px solid #e2dbdb"} pholder={"Choose a brand"} list={options} />
                                            </Box>
                                            <Box display={"flex"} ml={"3%"} flexDirection={"column"}>
                                                <CustomLabel fsize={"1.2rem"} fweight={"700"} fcolor={"#272224"} str={"Size"} mt={"3%"} />
                                                <CustomDropdown width={"150px"} bradius={"20px"} fsize={"1.2rem"} fcolor={"#272224"} fweight={"500"} bcolor={"white"} mt={"2%"} padding={"10px"} border={"1px solid #e2dbdb"} pholder={""} list={options} />
                                            </Box>
                                        </Box>

                                        <CustomLabel fsize={"1.2rem"} fweight={"700"} fcolor={"#272224"} str={"Postage"} mt={"3%"} />
                                        <CustomDropdown width={"500px"} bradius={"20px"} fsize={"1.2rem"} fcolor={"#272224"} fweight={"500"} bcolor={"white"} mt={"2%"} padding={"10px"} border={"1px solid #e2dbdb"} pholder={"Choose a postage method"} list={options} />


                                        <Box display={"flex"} width={"100%"} marginTop={"5%"}>
                                            <Box display={"flex"} flex={"1"} justifyContent={"flex-start"} onClick={() => {
                                                set_go1(2);
                                                window.scrollTo(0, 0);
                                                // navigate("/PriceSuccess");
                                            }}>
                                                <BtnCustomize
                                                    color={"white"}
                                                    back={"#e41a3c"}
                                                    width={"200px"}
                                                    height={"40px"}
                                                    str={"Set the price"}
                                                    borderRadius={"20px"}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </> :
                            flag_go1 === 2 ?
                                <>
                                    <HeaderStr display={"flex"} fontSize={"2rem"} color={"#272224"} fontWeight={"700"}>
                                        Add an image of the item you want to sell
                                    </HeaderStr>
                                    <Box display={"flex"} width={"80%"} marginTop={"2%"}>
                                        <Box display={"flex"} flexDirection={"column"} width={"40%"} alignItems={"center"}>
                                            <UploadImgBox display={"flex"} width={"100%"} height={"50vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"}>
                                                {upload_img === undefined || upload_img === "" ? "" : <img src={upload_img} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                            </UploadImgBox>
                                            <Box display={"flex"} marginTop={"2%"} width={"95%"} justifyContent={"center"}>
                                                <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                                    set_uploadimg(e.target.src)
                                                }}>
                                                    {upload_img_phy[0] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[0])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                                </Box>
                                                <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                                    set_uploadimg(e.target.src)
                                                }}>
                                                    {upload_img_phy[1] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[1])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                                </Box>
                                                <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                                    set_uploadimg(e.target.src)
                                                }}>
                                                    {upload_img_phy[2] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[2])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                                </Box>
                                                <Box display={"flex"} justifyContent={"center"} flex={"1"} ml={"1%"} mr={"1%"} height={"6vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} onClick={(e) => {
                                                    set_uploadimg(e.target.src)
                                                }}>
                                                    {upload_img_phy[3] === undefined ? "" : <img src={URL.createObjectURL(upload_img_phy[3])} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} width={"60%"} marginLeft={"3%"} marginTop={"1%"} flexDirection={"column"}>
                                            <Box display={"flex"} >
                                                <Box display={"flex"} onClick={() => {
                                                    set_go1(1);
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
                                                {!flag_pricetype ?
                                                    <DetailStr1 display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                                        Setting a low starting price means that your item will attract <br />
                                                        more bidders. We recommend looking at other similar items to <br />
                                                        get an idea of the market value.
                                                    </DetailStr1>
                                                    :
                                                    <DetailStr1 display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                                        Setting a fair asking price means that your item will sell more <br />
                                                        quickly. We recommend looking at other similar items to get an <br />
                                                        idea of the market value.
                                                    </DetailStr1>
                                                }

                                                <Box display={"flex"} marginTop={"5%"} width={"100%"} >
                                                    <Box display={"flex"} width={"300px"} borderRadius={"20px"} bgcolor={"#e2dbdb"} padding={"3px"}>
                                                        <Box display={"flex"} width={"50%"} onClick={() => { set_pricetype(!flag_pricetype) }}>
                                                            <BtnCategoryUC width={"100%"} height={"40px"} str={"Auction"} bcolor={!flag_pricetype ? "#272224" : "#e2dbdb"} fcolor={!flag_pricetype ? "#f5f5f5" : "#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} />
                                                        </Box>
                                                        <Box display={"flex"} width={"50%"} onClick={() => { set_pricetype(!flag_pricetype) }}>
                                                            <BtnCategoryUC width={"100%"} height={"40px"} str={"Buy it now"} bcolor={flag_pricetype ? "#272224" : "#e2dbdb"} fcolor={flag_pricetype ? "#f5f5f5" : "#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                {!flag_pricetype ?
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
                                                        navigate("/CreateSuccess");
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
                                </> :
                                <></>
                    }
                </>
                    :
                    <>{flag_go === 0 ?
                        <>
                            <HeaderStr display={"flex"} fontSize={"2rem"} color={"#272224"} fontWeight={"700"}>
                                Add an image of the item you want to sell
                            </HeaderStr>
                            <Box display={"flex"} width={"80%"} marginTop={"2%"}>
                                <UploadImgBox display={"flex"} width={"40%"} height={"50vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} >
                                    {upload_img === '' ? "" : <img src={upload_img} width={"100%"} height={"100%"} alt="" style={{ borderRadius: "20px" }}></img>}
                                </UploadImgBox>
                                <Box display={"flex"} width={"60%"} marginLeft={"3%"} marginTop={"1%"} flexDirection={"column"}>
                                    <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"}  >Item type</Box>
                                    <Box display={"flex"} marginTop={"2%"} flexDirection={"column"}>
                                        <Box display={"flex"} width={"100%"} >
                                            <Box display={"flex"} width={"300px"} borderRadius={"20px"} bgcolor={"#e2dbdb"} padding={"3px"}>
                                                <Box display={"flex"} width={"50%"} onClick={() => { set_type(!flag_type); }}>
                                                    <BtnCategoryUC width={"100%"} height={"40px"} str={"Physical item"} bcolor={!flag_type ? "#272224" : "#e2dbdb"} fcolor={!flag_type ? "#f5f5f5" : "#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} />
                                                </Box>
                                                <Box display={"flex"} width={"50%"} onClick={() => { set_type(!flag_type); }}>
                                                    <BtnCategoryUC width={"100%"} height={"40px"} str={"Digital NFT"} bcolor={flag_type ? "#272224" : "#e2dbdb"} fcolor={flag_type ? "#f5f5f5" : "#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <DetailStr1 display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"5%"}>
                                            Your files will be uploaded to the decentralized web via Arweave. <br />
                                            Depending on file type it can take up to 1 minute. Arweave is a <br />
                                            type of cloud storage that backs data with sustainable and <br />
                                            perpetual endowments.
                                        </DetailStr1>
                                        <Box display={"flex"} width={"100%"} marginTop={"5%"} onClick={() => {
                                            fileInputRef.current.click();
                                        }}>
                                            <Box display={"flex"} width={"300px"}>
                                                <input onChange={(e) => {
                                                    set_uploadimg(URL.createObjectURL(e.target.files[0]))
                                                }} multiple={false} ref={fileInputRef} type='file' accept="image/*" hidden />
                                                <BtnCustomize
                                                    color={"#272224"}
                                                    back={"#e2dbdb"}
                                                    width={"100%"}
                                                    height={"50px"}
                                                    str_icon={<FaCloudUploadAlt />}
                                                    str={"Upload the NFT image"}
                                                    borderRadius={"20px"}
                                                />
                                            </Box>

                                        </Box>
                                        <Box display={"flex"} width={"100%"} marginTop={"5%"}>
                                            {
                                                upload_img === undefined || upload_img === "" ?
                                                    <Box display={"flex"} width={"300px"} onClick={() => {
                                                    }} style={{ "opacity": "0.3" }}>
                                                        <BtnCustomize
                                                            color={"white"}
                                                            back={"#e41a3c"}
                                                            width={"100%"}
                                                            height={"50px"}
                                                            str={"Write a description"}
                                                            borderRadius={"20px"}
                                                        />
                                                    </Box> :
                                                    <Box display={"flex"} width={"300px"} onClick={() => {
                                                        set_go(1);
                                                        window.scrollTo(0, 0);
                                                    }}>
                                                        <BtnCustomize
                                                            color={"white"}
                                                            back={"#e41a3c"}
                                                            width={"100%"}
                                                            height={"50px"}
                                                            str={"Write a description"}
                                                            borderRadius={"20px"}
                                                        />
                                                    </Box>
                                            }

                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </> :
                        flag_go === 1 ?
                            <>
                                <HeaderStr1 display={"flex"} fontSize={"2rem"} color={"#272224"} fontWeight={"700"}>
                                    Describe your item
                                </HeaderStr1>
                                <Box display={"flex"} width={"80%"} marginTop={"2%"}>
                                    <Box display={"flex"} width={"40%"} height={"50vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} >
                                        <Box display={"flex"} width={"100%"} height={"100%"}>
                                            {upload_img === '' ? "" : <img src={upload_img} width={"100%"} height={"100%"} style={{ borderRadius: "20px" }} alt=""></img>}
                                        </Box>
                                    </Box>
                                    <Box display={"flex"} width={"60%"} marginLeft={"3%"} marginTop={"1%"} flexDirection={"column"}>
                                        <Box display={"flex"} >
                                            <Box display={"flex"} onClick={() => {
                                                set_go(0);
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
                                        <DetailStr1 display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"5%"}>
                                            The more detail you can use the better chance of achieving a <br />
                                            sale. Remember to describe any special features, buyers love<br />
                                            unique and interesting NFTs.
                                        </DetailStr1>
                                        <Box display={"flex"} marginTop={"5%"} flexDirection={"column"}>
                                            <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"}>Name</Box>
                                            <Box display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                                {desname.length}/70
                                            </Box>
                                            <Box display={"flex"} component={"input"} width={"70%"} borderRadius={"10px"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"500"} bgcolor={"white"} marginTop={"1%"} padding={"10px"} border={"1px solid #e2dbdb"} placeholder="Deep thought"
                                                value={desname}
                                                onChange={(e) => {
                                                    if (e.target.value.length > 70) {
                                                        alert("The length must be less than 70.");
                                                        return;
                                                    }
                                                    set_desname(e.target.value);
                                                }}></Box>
                                        </Box>

                                        <Box display={"flex"} marginTop={"3%"} flexDirection={"column"}>
                                            <Box display={"flex"} fontSize={"1.2rem"} color={"#272224"} fontWeight={"700"}>Description</Box>
                                            <Box display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                                {descontent.length}/600
                                            </Box>
                                            <Box display={"flex"} component={"textarea"} fontSize={"1rem"} color={"#272224"} fontWeight={"500"} bgcolor={"white"} marginTop={"1%"} width={"70%"} height={"200px"} border={"1px solid #e2dbdb"} borderRadius={"10px"} padding={"10px"} placeholder="Type description here."
                                                value={descontent}
                                                onChange={(e) => {
                                                    if (e.target.value.length > 600) {
                                                        alert("The length must be less than 600.");
                                                        return;
                                                    }
                                                    set_descontent(e.target.value);
                                                }}
                                            >
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} width={"100%"} marginTop={"5%"}>
                                            <Box display={"flex"} flex={"1"} justifyContent={"flex-start"} onClick={() => {
                                                set_go(2);
                                                window.scrollTo(0, 0);
                                                // navigate("/PriceSuccess");
                                            }}>
                                                <BtnCustomize
                                                    color={"white"}
                                                    back={"#e41a3c"}
                                                    width={"200px"}
                                                    height={"40px"}
                                                    str={"Set the price"}
                                                    borderRadius={"20px"}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </> :
                            flag_go === 2 ?
                                <>
                                    <HeaderStr display={"flex"} fontSize={"2rem"} color={"#272224"} fontWeight={"700"}>
                                        Add an image of the item you want to sell
                                    </HeaderStr>
                                    <Box display={"flex"} width={"80%"} marginTop={"2%"}>
                                        <Box display={"flex"} width={"40%"} height={"50vw"} bgcolor={"#e2dbdb"} borderRadius={"20px"} >
                                            <Box display={"flex"} width={"100%"} height={"100%"}>
                                                {upload_img === '' ? "" : <img src={upload_img} width={"100%"} height={"100%"} style={{ borderRadius: "20px" }} alt=""></img>}
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} width={"60%"} marginLeft={"3%"} marginTop={"1%"} flexDirection={"column"}>
                                            <Box display={"flex"} >
                                                <Box display={"flex"} onClick={() => {
                                                    set_go(1);
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
                                                {!flag_pricetype ?
                                                    <DetailStr1 display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                                        Setting a low starting price means that your item will attract <br />
                                                        more bidders. We recommend looking at other similar items to <br />
                                                        get an idea of the market value.
                                                    </DetailStr1>
                                                    :
                                                    <DetailStr1 display={"flex"} fontSize={"1rem"} color={"#272224"} fontWeight={"600"} marginTop={"2%"}>
                                                        Setting a fair asking price means that your item will sell more <br />
                                                        quickly. We recommend looking at other similar items to get an <br />
                                                        idea of the market value.
                                                    </DetailStr1>
                                                }

                                                <Box display={"flex"} marginTop={"5%"} width={"100%"} >
                                                    <Box display={"flex"} width={"300px"} borderRadius={"20px"} bgcolor={"#e2dbdb"} padding={"3px"}>
                                                        <Box display={"flex"} width={"50%"} onClick={() => { set_pricetype(!flag_pricetype) }}>
                                                            <BtnCategoryUC width={"100%"} height={"40px"} str={"Auction"} bcolor={!flag_pricetype ? "#272224" : "#e2dbdb"} fcolor={!flag_pricetype ? "#f5f5f5" : "#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} />
                                                        </Box>
                                                        <Box display={"flex"} width={"50%"} onClick={() => { set_pricetype(!flag_pricetype) }}>
                                                            <BtnCategoryUC width={"100%"} height={"40px"} str={"Buy it now"} bcolor={flag_pricetype ? "#272224" : "#e2dbdb"} fcolor={flag_pricetype ? "#f5f5f5" : "#272224"} border={""} bradious={"20px"} fsize={"1rem"} fweight={"600"} fstyle={""} />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                {!flag_pricetype ?
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
                                                        navigate("/CreateSuccess");
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
                                </> :
                                <></>
                    }</>
                }
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
                                    set_go(1);
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

const MultiImageDelete = styled(Box)`
    &:hover{
        cursor: pointer;
        background-color: grey;
    }
`

const MultiUploadBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2%;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #e2dbdb;
    &:hover{
        cursor: pointer;
        background-color: #e2dbdb;
    }
`

const MultiUploadBox1 = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2%;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #e2dbdb;
    padding-bottom: 2%;
    padding-top: 2%;
    padding-left: 5%;
    padding-right: 5%;
`

const MultiUploadStr = styled(Box)`
    display: flex;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1%;
    @media (max-width: 1000px){
        font-size:0.8rem !important;
    }
    @media (max-width: 800px){
        font-size: 0.6rem !important;
    }
    @media (max-width: 600px){
        display: none  !important;
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

const UploadImgBox = styled(Box)`
    @media (max-width: 800px){
        height: 60vw !important;
    }
    @media (max-width: 500px){
        height: 70vw !important;
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

const HeaderStr = styled(Box)`
    @media (max-width: 1200px){
        font-size: 1.8rem !important;
    }
    @media (max-width: 800px){
        font-size: 1.5rem !important;
    }
    @media (max-width: 600px){
        font-size: 1rem !important;
    }
    @media (max-width: 400px){
        font-size: 0.7rem !important;
    }
`
const HeaderStr1 = styled(Box)`
    @media (max-width: 1200px){
        font-size: 1.8rem !important;
    }
    @media (max-width: 800px){
        font-size: 1.5rem !important;
    }
    @media (max-width: 600px){
        font-size: 1rem !important;
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

export default CreateNFT;
