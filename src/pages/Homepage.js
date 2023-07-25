import React, { useContext } from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import Clearfix from "../components/common/ClearFix";
import { styled } from "styled-components";
import { Carousel } from "antd";
import test1 from "../images/banner/test.jpg";
import test2 from "../images/banner/test2.jpg";
import test3 from "../images/banner/test3.jpg";
import { Link } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import AuthContext from "../components/auth/AuthContext";
import PopupModal from "../components/common/PopupModal";

const BannerBox=styled.div`
    display:flex;
    flex-wrap: wrap;
    align-items: flex-end;
`;
const BannerFeatureContainer=styled.div`
    width:100%;
    display:flex;
    background-color:white;
    padding:8px 0px;
    border:1px solid rgba(0,0,0,0.1);
`;
const BannerFeatureColumn=styled.div`
    width:33.33%;
    text-align:center;
`;
const CustomerContainer=styled.div`
    margin-bottom:48px; 
`;
const ProuctCollectionContainer=styled.div`
    margin: 0 -4px 48px -4px;
    display:flex;  
    flex-wrap:wrap;
    `;
const ProductContainer=styled.div`
    // margin:4px;
    padding:4px;
    width:100%;
    @media (min-width:577px){
        width:50%;
    }
    @media (min-width:769px){
        width:16.66%;
    }

`;
const BannerCarouselContainer=styled.div`
    width:100%;
    @media (min-width:769px){
        width:66.67%;
    }
    padding: 0px 2px;
`;
const BannerSectionContainer=styled.div`
    width:100%;
    @media (min-width:769px){
        width:33.33%;
    }
`;const BannerContainer=styled.div`
    width:100%;
    padding:2px;
    
`;

const Image=styled.div`
    width:100%;
    height: ${(props)=>props.height}px;
    background-image: ${(props)=>`url(${props.url})`};
    background-position: center;
    background-size:cover;
`;

const HomePage =()=>{
    const {isAuthenticated}=useContext(AuthContext);
    return <DefaultLayout fixedHeader>
        <PopupModal/>
        <Clearfix />
        {isAuthenticated&&<h1>welcome</h1>}
        <BannerBox>
            <BannerCarouselContainer> 
               <Carousel autoplay>
                <Link to="/poo1">
                    <Image height={200} url={test1} /> 
                </Link>
                <Link to="/poo1">
                    <Image height={200} url={test2} /> 
                </Link>
                <Link to="/poo1">
                    <Image height={200} url={test3} /> 
                </Link>
                </Carousel>
            </BannerCarouselContainer>
            <BannerSectionContainer>
                <BannerContainer>
                    <Image height={100} url={test2} />
                </BannerContainer>
                <BannerContainer>
                    <Image height={100} url={test2} />
                </BannerContainer>
            </BannerSectionContainer>
            <BannerFeatureContainer>
                <BannerFeatureColumn>15天鑑賞期</BannerFeatureColumn>
                <BannerFeatureColumn>蝦皮安心退</BannerFeatureColumn>
                <BannerFeatureColumn>正品保障</BannerFeatureColumn>
            </BannerFeatureContainer>
        </BannerBox>
        <CustomerContainer>
            <Link>
                <Image height={100} url={test3} />
            </Link>
        </CustomerContainer>
        <ProuctCollectionContainer>
            <ProductContainer>
                <Link to="/p001">
                    <ProductCard title="foo" salePrices={[100,200]}  coverUrl={test1}/>
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
        </ProuctCollectionContainer>
    </DefaultLayout>;
};

export default HomePage;