import React from "react";
import { Card } from 'antd';
import { styled } from "styled-components";

const SquareImg=styled.div`
    padding-top:100%;
    background-position:center;
    background-image: ${(props) => `url(${props.src})`};
    background-size:cover;
`;

const ListPriceLabel=styled.span`
    color:#F7A797;
    text-decoration-line:line-through;
`;

const SalePriceLabel=styled.span`
    color:#F7A797;
`;
const ProductCard=({
    coverUrl,
    title,
    listPrices,
    salePrices,
    discountPercentage,
    salesNumber,
    rating,
    isLiked,
    })=>{
        return (
        <Card hoverable cover={<SquareImg alt="cover" src={coverUrl}/>}>
            <Card.Meta title={title} description={
                <div>
                    {listPrices && listPrices.length > 0 && 
                        (<ListPriceLabel>${listPrices[0]}</ListPriceLabel>)}
                    {salePrices && salePrices.length > 0 && 
                        (<SalePriceLabel>${salePrices[0]}</SalePriceLabel>)}
                </div>}
             /> 
        </Card>
        );
    };

export default ProductCard; 