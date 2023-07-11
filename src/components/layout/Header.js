import React from "react";
import styled from "styled-components";

const StyledHeader=styled.header`
    background-color: #FA5130;
    width:100vw;
    height:200px;
`;
const Header=()=>{
    return <StyledHeader>This is a Header</StyledHeader>;
};

export default Header;