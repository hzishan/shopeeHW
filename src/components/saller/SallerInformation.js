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
`;
const ProductSallerLeft=styled.div`
    display:flex;
    width:30%;
    justify-content: space-evenly;
    div{
        margin: 0.2em;
    }
    button{
        width:45%;
        margin-right:8px;
    }
`;
const ProductSallerRight=styled.div`
    display:flex;
    width:70%;
    flex-wrap: wrap;
    align-content: space-around;
    border-left:1px solid #868686;
    div{
        display:flex;
        width:30%;
        margin-left:8px;
        div{
            width:50%;
            color:#868686;
        }
        span{
            color:#d2416a;
        }
    }
`;
const SallerInformation=({
    sallerName
})=>{
    return <ProductSaller>
        <ProductSallerLeft>
            <Link to="/">
                <img src={sallerLogo} height={84}/>
            </Link>
            <div>
                <ProductTitle>{sallerName}</ProductTitle>
                <div>32 mins ago</div>
                <div>
                    <Button danger>conduct</Button>
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