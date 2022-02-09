import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const BlogText = ({ headstr, link1, link2, link3, link4 }) => {
  return (
    <StyledComponent fontSize={"1rem"}>
      <Box display={"flex"} color={"#272224"} fontWeight={"600"}>
        {headstr}
      </Box>
      <Box display={"flex"} flexDirection={"column"} marginTop={"10px"}>
        <LinkURL display={"flex"} alignItems={"center"} color={"#272224"} fontWeight={"400"}>
          {link1}
        </LinkURL>
        <LinkURL display={"flex"} alignItems={"center"} color={"#272224"} fontWeight={"400"}>
          {link2}
        </LinkURL>
        <LinkURL display={"flex"} alignItems={"center"} color={"#272224"} fontWeight={"400"}>
          {link3}
        </LinkURL>
        <LinkURL display={"flex"} alignItems={"center"} color={"#272224"} fontWeight={"400"}>
          {link4}
        </LinkURL>
      </Box>
    </StyledComponent>
  );
};

const LinkURL = styled(Box)`
  &:hover{
    cursor: pointer;
    color: grey;
  }
`
const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) 
  {
    font-size: 0.8rem !important;
  }
  @media (max-width: 600px) 
  {
    font-size: 0.6rem !important;
  }
`;

export default BlogText;
