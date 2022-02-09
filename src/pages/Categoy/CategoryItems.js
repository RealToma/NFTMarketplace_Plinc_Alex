import React, { useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { AiOutlineDesktop } from "react-icons/ai";
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CartMainpage from "../../components/Carts/CartMainpage";
import cart2 from "../../images/carts/cart2.jpg"
import top_back2 from "../../images/top_back2.jpg"
import { useNavigate } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im"

const CategoryItems = () => {
    let navigate = useNavigate();
    const [val_sort, set_sort] = useState('radio1');
    const [val_price, set_price] = useState('radio1');

    return (
        <>
            <StyledContainer>
                <Box display={"flex"} width={"95%"} height={"20vw"} style={{
                    background: `url(${top_back2})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px"
                }} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                    <HeadStr1 display={"flex"} color={"white"} fontSize={"3.5rem"} fontWeight={"700"}>
                        Mens trainers
                    </HeadStr1>
                    <HeadStr2 display={"flex"} color={"white"} fontSize={"1.2rem"} fontWeight={"500"} marginTop={"1%"} justifyContent={"center"}>
                        When it comes to iconic duos, sneakers are definitely up there. From fresh white trainers to classic styles with old-school
                    </HeadStr2>
                    <HeadStr2 display={"flex"} color={"white"} fontSize={"1.2rem"} fontWeight={"500"} justifyContent={"center"}>
                        appeal (checkerboard Vans, we’re looking at you). Looking to rep some seriously cool mod-cons? Take your pick with
                    </HeadStr2>
                    <HeadStr2 display={"flex"} color={"white"} fontSize={"1.2rem"} fontWeight={"500"} justifyContent={"center"}>
                        everything from running shoes to performance trainers by Nike, PUMA and Reebok.
                    </HeadStr2>
                </Box>
                <Carts>
                    <Box display={"flex"} width={"18%"} flexDirection={"column"} >
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                            <CategoryStr>Categories</CategoryStr>
                            <Box display={"flex"} marginLeft={"15%"} flexDirection={"column"} mt={"5%"}>
                                <CategorySel onClick={() => { navigate("/CategoryDetail") }}><Box display={"flex"} width={"10%"}><ImArrowLeft2 /></Box><Box display={"flex"} marginLeft={"5%"}>All categories</Box></CategorySel>
                                <CategorySel onClick={() => { navigate("/CategoryDetail") }}><Box display={"flex"} width={"10%"}><ImArrowLeft2 /></Box><Box display={"flex"} marginLeft={"5%"}>Fashion</Box></CategorySel>
                                <CategorySel onClick={() => { navigate("/CategoryDetail") }}><Box display={"flex"} width={"10%"}><ImArrowLeft2 /></Box><Box display={"flex"} marginLeft={"5%"}>Clothes</Box></CategorySel>
                                <CategorySel onClick={() => { navigate("/CategoryDetail") }}><Box display={"flex"} width={"10%"}><ImArrowLeft2 /></Box><Box display={"flex"} marginLeft={"5%"}>Shoes</Box></CategorySel>
                                <CategorySel onClick={() => { navigate("/CategoryDetail") }}><Box display={"flex"} width={"10%"}><ImArrowLeft2 /></Box><Box display={"flex"} marginLeft={"5%"}>Trainers</Box></CategorySel>
                                <CategorySel onClick={() => { navigate("/CategoryDetail") }}><Box display={"flex"} width={"10%"}></Box><Box display={"flex"} marginLeft={"5%"} fontWeight={"800"}>Mens Trainers</Box></CategorySel>
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} mt={"5%"}>
                            <CategoryStr>Sort by</CategoryStr>
                            <Box display={"flex"} marginLeft={"10%"} flexDirection={"column"} mt={"5%"}>
                                <RadioGroup aria-label="gender" name="gender1" value={val_sort} onChange={(event) => {
                                    set_sort(event.target.value);
                                }}>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio1" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>Price: High to Low</Box></CategorySel1>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio2" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>Price: Low to High</Box></CategorySel1>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio3" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>Just added</Box></CategorySel1>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio4" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>Eco friendly</Box></CategorySel1>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio5" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>Popular</Box></CategorySel1>
                                </RadioGroup>
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} mt={"5%"}>
                            <CategoryStr>Price</CategoryStr>
                            <Box display={"flex"} marginLeft={"10%"} flexDirection={"column"} mt={"5%"}>
                                <RadioGroup aria-label="gender" name="gender1" value={val_price} onChange={(event) => {
                                    set_price(event.target.value);
                                }}>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio1" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>Any price</Box></CategorySel1>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio2" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>Under 5</Box></CategorySel1>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio3" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>10 - 20</Box></CategorySel1>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio4" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>20 - 50</Box></CategorySel1>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio5" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>50 - 100</Box></CategorySel1>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio6" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>Over 100</Box></CategorySel1>
                                    <CategorySel1 alignItems="center"><Box display={"flex"} width={"20%"}><FormControlLabel value="radio7" control={<Radio color={"#3a3737"} size="small" />} /></Box><Box display={"flex"} marginLeft={"5%"}>Custom</Box></CategorySel1>
                                </RadioGroup>
                            </Box>
                            <RangeBox display={"flex"} marginLeft={"10%"} mt={"5%"} mb={"3%"}>
                                <Box component={"input"} width={"45px"} height={"30px"} borderRadius={"20px"} type={"number"} placeholder="0.00" border={"1px solid #3a3737"} style={{ direction: 'rtl', paddingRight: "5%", fontSize: "1rem", fontWeight: "600" }} marginBottom={"2%"}></Box>
                                <Box display={"flex"} ml={"3%"} mr={"3%"} marginBottom={"2%"}>to</Box>
                                <Box component={"input"} width={"45px"} height={"30px"} borderRadius={"20px"} type={"number"} placeholder="0.00" border={"1px solid #3a3737"} style={{ direction: 'rtl', paddingRight: "5%", fontSize: "1rem", fontWeight: "600" }} marginBottom={"2%"}></Box>
                            </RangeBox>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} mt={"5%"}>
                            <CategoryStr>Brand</CategoryStr>
                            <Box display={"flex"} marginLeft={"10%"} flexDirection={"column"} mt={"5%"}>
                                <CategorySel1 alignItems="center"><CheckBox1 display={"flex"} width={"20%"}><FormControlLabel control={<Checkbox color={"#3a3737"} size="small" />} /></CheckBox1><Box display={"flex"} marginLeft={"5%"}>Adidas</Box></CategorySel1>
                                <CategorySel1 alignItems="center"><CheckBox1 display={"flex"} width={"20%"}><FormControlLabel control={<Checkbox color={"#3a3737"} size="small" />} /></CheckBox1><Box display={"flex"} marginLeft={"5%"}>Nike</Box></CategorySel1>
                                <CategorySel1 alignItems="center"><CheckBox1 display={"flex"} width={"20%"}><FormControlLabel control={<Checkbox color={"#3a3737"} size="small" />} /></CheckBox1><Box display={"flex"} marginLeft={"5%"}>Puma</Box></CategorySel1>
                                <CategorySel1 alignItems="center"><CheckBox1 display={"flex"} width={"20%"}><FormControlLabel control={<Checkbox color={"#3a3737"} size="small" />} /></CheckBox1><Box display={"flex"} marginLeft={"5%"}>Reebok</Box></CategorySel1>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} width={"18%"} flexDirection={"column"}>
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                    </Box>
                    <Box display={"flex"} width={"18%"} flexDirection={"column"}>
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"18vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"15vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"20vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                    </Box>
                    <Box display={"flex"} width={"18%"} flexDirection={"column"}>
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"18vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"18vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"18vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                    </Box>
                    <Box display={"flex"} width={"18%"} flexDirection={"column"}>
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"30vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                        <CartMainpage img={cart2} img_width={"100%"} img_height={"25vw"} category={<AiOutlineDesktop />} category_str={"Electronics"} str={"Omnis minus impedit."} price={"257,100.29"} />
                    </Box>
                </Carts>

            </StyledContainer>
        </>

    );
};


const RangeBox = styled(Box)`
    @media (max-width: 900px){
        flex-direction: column !important;

    }
`

const CheckBox1 = styled(Box)`
    @media (max-width: 500px){
        width: 30% !important;
    }
`

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
    @media (max-width: 930px){
        font-size: 0.8rem !important;
    }
    @media (max-width: 740px){
        font-size: 0.6rem !important;
    }
    @media (max-width: 600px){
        display: none !important;
    }
`

const CategorySel = styled(Box)`
    display: flex;
    align-items: center;
    color:#3a3737;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 3%;
    &:hover{
        cursor: pointer;
        color:grey;
    }
    @media (max-width: 1100px) {
        font-size: 0.8rem !important;
    }
    @media (max-width: 600px) {
        font-size: 0.7rem !important;
    }
    @media (max-width: 400px) {
        font-size: 0.6rem !important;
    }

`
const CategorySel1 = styled(Box)`
    display: flex;
    color:#3a3737;
    font-size: 1rem;
    font-weight: 600;
    @media (max-width: 1100px) {
        font-size: 0.8rem !important;
    }
    @media (max-width: 900px) {
        font-size: 0.7rem !important;
    }
    @media (max-width: 600px) {
        font-size: 0.6rem !important;
    }
    @media (max-width: 400px) {
        font-size: 0.45rem !important;
    }
`

const CategoryStr = styled(Box)`
    display: flex;
    margin-left: 10%;
    color:#3a3737;
    font-size: 1.3rem;
    font-weight: 800;
    @media (max-width: 1100px) {
        font-size: 1rem !important;
    }
    @media (max-width: 600px) {
        font-size: 0.8rem !important;
    }
    @media (max-width: 400px) {
        font-size: 0.65rem !important;
    }
`

const Carts = styled(Box)`
    display: flex;
    width: 95%;
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


export default CategoryItems;
