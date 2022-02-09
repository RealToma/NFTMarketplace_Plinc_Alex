import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { GiSofa } from "react-icons/gi";
import { AiOutlineDesktop, AiFillCar } from "react-icons/ai";
import { FaTshirt, FaBoxes, FaHandHoldingHeart } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { MdEmojiPeople, MdSpeaker, MdLocationOn } from "react-icons/md";
import { BsSuitHeartFill } from "react-icons/bs"
import CartMainpage from "../../components/Carts/CartMainpage";
import cart1 from "../../images/carts/cart1.jpg"


const Mainpage = () => {

    return (
        <>
            <StyledContainer>
                <Topbar1>
                    <Box display={"flex"} flexWrap={"wrap"} width={"100%"} >
                        <MenuIcons>
                            <GiSofa /> {'\u00a0'}Home & Garden
                        </MenuIcons>
                        <MenuIcons>
                            <AiOutlineDesktop /> {'\u00a0'}Electronics
                        </MenuIcons>
                        <MenuIcons>
                            <FaTshirt /> {'\u00a0'}Fashion
                        </MenuIcons>
                        <MenuIcons>
                            <IoIosFootball /> {'\u00a0'}Sports & Leisure
                        </MenuIcons>
                        <MenuIcons>
                            <MdEmojiPeople /> {'\u00a0'}Health & Beauty
                        </MenuIcons>
                        <MenuIcons>
                            <FaBoxes /> {'\u00a0'}Toys
                        </MenuIcons>
                        <MenuIcons>
                            <AiFillCar /> {'\u00a0'}Motors
                        </MenuIcons>
                        <MenuIcons>
                            <MdSpeaker /> {'\u00a0'}Home entertainment
                        </MenuIcons>
                        <MenuIcons>
                            <FaHandHoldingHeart /> {'\u00a0'}Collectibles
                        </MenuIcons>
                        <MenuIcons>
                            <MdLocationOn /> {'\u00a0'}Local
                        </MenuIcons>
                    </Box>

                </Topbar1>
                <Carts>
                    <Box display={"flex"} width={"23%"} flexDirection={"column"}>
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#272224"} flagbtn={"0"} />
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"25vw"} category={<BsSuitHeartFill />} category_str={"32.9K"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#e92828"} flagbtn={"1"} />
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#272224"} flagbtn={"0"} />
                    </Box>
                    <Box display={"flex"} width={"23%"} flexDirection={"column"}>
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"15vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#272224"} flagbtn={"0"} />
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"12vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#272224"} flagbtn={"0"} />
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"25vw"} category={<BsSuitHeartFill />} category_str={"32.9K"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#e92828"} flagbtn={"1"} />
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"20vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#272224"} flagbtn={"0"} />
                    </Box>
                    <Box display={"flex"} width={"23%"} flexDirection={"column"}>
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#272224"} flagbtn={"0"} />
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"20vw"} category={<BsSuitHeartFill />} category_str={"32.9K"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#e92828"} flagbtn={"1"} />
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"20vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#272224"} flagbtn={"0"} />
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"20vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#272224"} flagbtn={"0"} />
                    </Box>
                    <Box display={"flex"} width={"23%"} flexDirection={"column"}>
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"25vw"} category={<BsSuitHeartFill />} category_str={"32.9K"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#e92828"} flagbtn={"1"} />
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"30vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#272224"} flagbtn={"0"} />
                        <CartMainpage img={cart1} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} color={"#272224"} flagbtn={"0"} />
                    </Box>
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

const MenuIcons = styled(Box)`
    display: flex;
    font-size: 1rem;
    font-weight:500;
    color: #272224;
    background-color: #f5f5f5;
    border-radius: 40px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2%;
    &:hover{
        cursor: pointer;
        color: #f5f5f5;
        background-color: black;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

`
const Topbar1 = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: center;
`

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 20px;
`;


export default Mainpage;
