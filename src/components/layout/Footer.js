import React from "react";
import styled, { css } from "styled-components";
import Container from "../common/Container";
import { Link } from "react-router-dom";

import mart from "../../images/footersm/mart.png";
import shopeePackage from "../../images/footersm/shopee_package.png";
import payment from "../../images/footersm/payment.png";
import shopeeDownloadQrcode from "../../images/footersm/shopeeDownloadQrcode.png";

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
                <Link>蝦皮商城</Link>
                <Link>付款方式</Link>
                <Link>蝦皮錢包</Link>
                <Link>蝦幣</Link>
                <Link>運費補助</Link>
                <Link>退貨退款</Link>
                <Link>聯絡客服</Link>
                <Link>防詐騙宣傳</Link>
                <Link>延長訂單撥款</Link>
            </FooterColumn>
            <FooterColumn>
                <FooterColTitle>關於蝦皮</FooterColTitle>
                <Link ro="#!">加入我們</Link>
                <Link>蝦皮條款</Link>
                <Link>隱私權政策</Link>
                <Link>蝦皮商城</Link>
                <Link>賣家中心</Link>
                <Link>限時特賣</Link>
                <Link>聯絡媒體</Link>
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
                <Link to="https://facebook.com/ShopeeTW" class="FA0WjS">
                    <img class="_6ZyW8Y" src="https://down-tw.img.susercontent.com/file/952b3cd5f11daa5242f9448fb76b5ae2"/>
                    <span class="xTjlXx">Facebook</span>
                </Link>
                <Link to="https://instagram.com/Shopee_TW" class="FA0WjS">
                    <img class="_6ZyW8Y" src="https://down-tw.img.susercontent.com/file/fc9052e647a0ec204e480fc27a35309f"/>
                    <span class="xTjlXx">Instagram</span>
                </Link>
                <Link to="https://page.line.me/shopee?openQrModal=true" class="FA0WjS">
                    <img class="_6ZyW8Y" src="https://down-tw.img.susercontent.com/file/8e2a1c69fe7255b705d0687c779fa962"/>
                        <span class="xTjlXx">Line</span>
                </Link>
                <Link to="https://linkedin.com/company/shopee" class="FA0WjS">
                    <img class="_6ZyW8Y" src="https://down-tw.img.susercontent.com/file/144b82f1a4b78ebdc1ea68ec15a9eeae"/>
                    <span class="xTjlXx">LinkedIn</span>
                </Link>
                <Link to="https://shopee.tw/blog" class="FA0WjS">
                    <img class="_6ZyW8Y" src="https://down-tw.img.susercontent.com/file/b3153fde9f151c179cb2b4d854205ab9"/>
                    <span class="xTjlXx">蝦品輯部落格</span>
                </Link>
            </FooterColumn>
            <FooterColumn>
                <FooterColTitle>下載進度</FooterColTitle>
                <Box>
                    <img src={shopeeDownloadQrcode}/>
                    <div>
                        <div>AppStore</div>
                        <div>GooglePlay</div>
                        <div>AppGallery</div>
                    </div>
                </Box>
            </FooterColumn>
            </Box>
        </Container>
    </StyledFooter>
    );
}

export default Footer;