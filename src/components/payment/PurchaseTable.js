import React from "react";
import { Button } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { styled } from "styled-components";


const RowDiv=styled.div`
    display:flex;
    color:#868686;
    justify-content: space-between;
    align-items: center;
    span{
        white-space:nowrap;
        padding:6px;
        width:30%;
    }
`;

const NumInput=styled.input`
    width:28px;
    text-align:center;
`;
const CouponDiv=styled.div`
    display:flex;
    div{
        padding:6px;
        margin:0 8px;
        background-color:#f9e3e6;
        color:#d10720;
    }
`;
const discountCoupon=["20%off","30%off","-100$"];
const Couponlist=discountCoupon.map((i) => <div>{i}</div>);

const PurchaseTable=({
    
})=>{
    return <div>
        <div>
            <RowDiv>
                <span>Disount Choice</span>
                <CouponDiv>{Couponlist}</CouponDiv>
            </RowDiv>
            <RowDiv>
                <span>Transport</span>
            </RowDiv>
            <RowDiv>
                <span>Amount</span>
                <div style={{display:"flex"}}>
                    <button>-</button>
                    <NumInput value="1"/>
                    <button>+</button>
                </div>
                <div>remain 1235</div>
            </RowDiv> 
        </div>

        <Button type="primary" danger style={{margin:"8px"}}>
            <ShoppingCartOutlined/>cart
        </Button>
        <Button danger>purchase</Button>
    </div>
};

export default PurchaseTable;