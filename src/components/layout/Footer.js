import React from "react";
import styled, { css } from "styled-components";
import Container from "../common/Container";


const StyledFooter=styled.div`
    background-color: #FBFBFB;
    padding:40px 0px;
`;

const Footer=()=>{
    return (
    <StyledFooter>
        <Container>this is footer</Container>
    </StyledFooter>
    );
}

export default Footer;