import React from "react";
import styled, { css } from "styled-components";
import Container from "../common/Container";
import { Link } from "react-router-dom";

import mart from "../../images/mart.png";
import shopeePackage from "../../images/shopee_package.png";
import payment from "../../images/payment.png";
import shopeeDownloadQrcode from "../../images/shopeeDownloadQrcode.png";

const StyledFooter=styled.div`
    background-color: #FBFBFB;
    padding:40px 0px;
`;
const FooterColumn=styled.div`
    display:flex;
    flex-direction:column;
    width:33.3%;
    margin-bottom:8px;
    @media (min-width:769px){
        width:20%;  
    }
    a {
        color:#585858; 
        margin-bottom:2px;
        text-decoration:none;   
    }
`;
const FooterColTitle=styled.div`
    font-weight:bold;
    margin-bottom:8px;

`;

const Box =styled.div`
    display:flex;
    flex-wrap:wrap;
`
const Footer=()=>{
    return (
    <StyledFooter>
        <Container>
            <Box>
            <FooterColumn>
                <FooterColTitle>客服中心</FooterColTitle>
                <Link ro="#!">客服中心</Link>
                <Link>客服中心</Link>
                <Link>客服中心</Link>
                <Link>客服中心</Link>
                <Link>客服中心</Link>
            </FooterColumn>
            <FooterColumn>
                <FooterColTitle>關於蝦皮</FooterColTitle>
            </FooterColumn>
            <FooterColumn>
                <FooterColTitle>付款</FooterColTitle>
                <img src={payment} alt="payment" width="80%"/>
                <FooterColTitle>物流合作</FooterColTitle>
                <img src={mart} alt="mart" width="80%" style={{marginBottom:8}}/>
                <FooterColTitle>蝦皮直送包裝減量標章</FooterColTitle>
                <img src={shopeePackage} alt="shopeePackage" width="80px"/>
            </FooterColumn>
            <FooterColumn>
                <FooterColTitle>關注我們</FooterColTitle>
            </FooterColumn>
            <FooterColumn>
                <FooterColTitle>下載進度</FooterColTitle>
                <Box>
                    <img src={shopeeDownloadQrcode}/>
                    <div>
                        <div>AppStore</div>
                        <div>GooglePlay</div>
                        <div>ApppGallery</div>
                    </div>
                </Box>
            </FooterColumn>
            </Box>
        </Container>
    </StyledFooter>
    );
}

export default Footer;