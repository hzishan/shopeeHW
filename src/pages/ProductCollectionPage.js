import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import Clearfix from "../components/common/ClearFix";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import test1 from "../images/banner/test.jpg";
import test2 from "../images/banner/test2.jpg";
import test3 from "../images/banner/test3.jpg";
import ProductMenu from "../components/product/ProductMenu";


const LeftCollectionPage=styled.div`
    display:flex;
    width:20%;
    // @media (max-width:577px){
    //     width:20%;
    // }
    // @media (max-width:769px){
    //     width:15%;
    // }
`;

const RightCollectionPage=styled.div`
    display:flex;
    width:80%;
    flex-wrap:wrap;
    // @media (max-width:577px){
    //     width:80%;
    // }
    // @media (max-width:769px){
    //     width:85%;
    // }

`;

const ProductContainer=styled.div`
    padding:4px;
    width:100%;
    @media (min-width:577px){
        width:25%;
    }
    @media (min-width:769px){
        width:20%;
    }
`;

const ProductCollectionPage =()=>{
    return <DefaultLayout fixedHeader>
        {/* <div style={{display:"flex"}}> */}
        <LeftCollectionPage >
            <ProductMenu/>
        </LeftCollectionPage>
        <RightCollectionPage>
            <ProductContainer>
                <Link to="/p001">
                    <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test1}/>
                </Link>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test2}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test3}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test1}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test2}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test3}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test1}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test2}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test3}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test1}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test2}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test3}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test1}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test2}/>
            </ProductContainer>
            <ProductContainer>
                <ProductCard title="foo" salePrices={[100,200]} listPrices={[200,299]} coverUrl={test3}/>
            </ProductContainer>
        </RightCollectionPage>
        {/* </div> */}
    </DefaultLayout>;
};

export default ProductCollectionPage;