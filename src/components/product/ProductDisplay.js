import React from "react";
import { styled } from "styled-components";
import PurchaseTable from "../payment/PurchaseTable";
import { Rate,Pagination, Card} from 'antd';
import twiter from '../../images/media_app/twiter.png'
import messager from '../../images/media_app/messager.png'
import fb from '../../images/media_app/fb.png'
import like from '../../images/media_app/like.jpg'
import testimg from '../../images/banner/test.jpg'
const ProductTop=styled.div`
    display:flex;
    @media (max-width:610px){
        display:block;
    }
`;
const ProductTopLeft=styled.div`
    width:50%;
    margin:8px 8px 0px 0px;
    @media (max-width:610px){
        width:100%;
        
    }
`;
const ProductTopRight=styled.div`
    width:50%;
    margin:8px 0 0 8px;
    @media (max-width:610px){
        width:100%;
    }
`;

const SquareImg=styled.div`
    width: 450pxv;
    height: 450px;
    background-image: ${(props)=>`url(${props.url})`};
    background-position: center;
    background-size:cover;
`;

const ThumbnailSpace=styled.div`
    display:flex;
    align-items: center;
    img{
        margin-right:8px;
    }
`;

const RowTop=styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-top:16px;
    padding-bottom:16px;
`;

const RowSpace= styled.div`
    display:flex;
    list-style:none;
    padding-top:16px;
    padding-bottom:16px;
    div{
        margin-right:17%;
    }
`;

const ProductDisplay=({
    imgUrl,
    title,
    Prices,
    discountPercentage,
    salesNumber,
    remainNumber,
    ProductColor,
    Productstyle,
    })=>{
        return (
            <ProductTop>
                <ProductTopLeft>
                    <div>
                        <SquareImg url={testimg} height={72}/>
                    </div>
                    <div>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                    <RowSpace>
                        <ThumbnailSpace>
                            <span>share：</span>
                            <img src={twiter} alt="twiter" height={28} style={{borderRadius:"20px"}}></img>
                            <img src={messager} alt="messager" height={28}></img>
                            <img src={fb} alt="messager" height={28}></img>
                            <span style={{marginLeft:"8px"}}>like：</span>
                            <img src={like} alt="messager" height={28}></img>
                        </ThumbnailSpace>
                    </RowSpace>
                </ProductTopLeft>
                <ProductTopRight>
                    <div>{title}</div>
                    <RowTop>
                        <div>
                            <span style={{color:"#ee4d2d"}}>4.9 </span>
                            <Rate disabled allowHalf defaultValue={4.9} style={{color:"#ee4d2d"}}/>
                        </div>
                        <div>|</div>
                        <div>2.2w rating</div>        
                        <div>|</div>
                        <div>5.8w saled</div>                        
                    </RowTop>
                    <PurchaseTable/>
                    <RowSpace>
                        <div>15天鑑賞期</div>
                        <div>蝦皮安心退</div>
                        <div>正品保障</div>
                    </RowSpace>
                </ProductTopRight>
            </ProductTop>
        );
    };

export default ProductDisplay; 