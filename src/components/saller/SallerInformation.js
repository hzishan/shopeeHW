import React from "react";
import ProductTitle from "../common/ProductTitle";
import { Link } from "react-router-dom";
import sallerLogo from "../../images/media_app/messager.png"
import { styled } from "styled-components";
import { Button } from "antd";

const ProductSaller=styled.div`
    display:flex;
    background-color:#f5f5f5;
    padding:8px;
    @media (max-width:712px){
        flex-wrap:wrap;
    }
`;
const ProductSallerLeft=styled.div`
    display:flex;
    width:30%;
    align-items: center;
    img{
        height:84px;
    }
    div{
        margin:8px;
    }
    button{
        width:45%;
        margin-right:8px;
    }
    @media (max-width:1046px){
        width:40%;
    }
    @media (max-width:850px){
        width:50%;
    }
    @media (max-width:712px){
        width:100%;
        div{
            display:flex;
            align-items: center;
            white-space: nowrap;
        }
        img{
            height:48px;
        }
    }
`;
const ProductSallerRight=styled.div`
    display:flex;
    width:70%;
    flex-wrap:wrap;
    align-content: space-around;
    border-left:1px solid #868686;
    div{
        display:flex;
        width:30%;
        align-items: center;
        margin-left:8px;
        flex-wrap:nowrap;
        div{
            width:70%;
            color:#868686;
            display: inline-block;
            white-space: nowrap;
        }
        span{
            width:30%;
            color:#d2416a;
        }
    }
    @media (max-width:712px){
        width:100%;
        border-top:1px solid #868686;
        border-left:none;
        padding-top:8px;
        div{
            width:30%;
        }
    }

`;

const SallerInformation=({
    sallerName
})=>{
    return <ProductSaller>
        <ProductSallerLeft>
            <Link to="/">
                <img src={sallerLogo}/>
            </Link>
            <div>
                <div style={{fontSize:"24px",fontWeight:"bold"}}>{sallerName}</div>
                <div>32 mins ago</div>
                <div>
                    <Button danger style={{textAlign:"center"}}>conduct</Button>
                    <Button>market</Button>
                </div>
            </div>
        </ProductSallerLeft>
        <ProductSallerRight>
            <div>
                <div>商品評價</div>
                <span>9855</span>
            </div>
            <div>
                <div>聊聊回應率</div>
                <span>55%</span>
            </div>            
            <div>
                <div>加入時間</div>
                <span></span>
            </div>            
            <div>
                <div>商品</div>
                <span></span>
            </div>
            <div>
                <div>回應速度</div>
                <span></span>
            </div>
            <div>
                <div>粉絲</div>
                <span></span>
            </div>                
        </ProductSallerRight>
        
    </ProductSaller>
};

export default SallerInformation;