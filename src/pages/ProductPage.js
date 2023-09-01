import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import ProductDisplay from "../components/product/ProductDisplay";
import ProductRating from "../components/product/ProductRating";
import ProductTitle from "../components/common/ProductTitle";
import SallerInformation from "../components/saller/SallerInformation";
import { styled } from "styled-components";

const productBasicList=["Discount","Transport","Color","Style","Amount"];


const ProductPage =({
    productImg,
    productRegular,
    productInformation,
})=>{
    return <DefaultLayout>
        <div>
            <ProductDisplay 
                imgUrl={productImg}
            />
        </div>
        <div>
            <SallerInformation
                sallerName="haha"
            />
        </div>
        <div>
            <ProductTitle>Regular</ProductTitle>
            {productRegular}
            <ProductTitle>Information</ProductTitle>
            {productInformation}
        </div>
        <div>
            <ProductTitle>Rating</ProductTitle>
            <ProductRating rating={4.6}></ProductRating>
        </div>

    </DefaultLayout>;
};

export default ProductPage;