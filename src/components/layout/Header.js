import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import logo from "../../images/shopee_logo.png";
import { Input } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";


const StyledHeader=styled.header`
    background-color: #FA5130;
    width:100vw;
    padding: 16px 0px;
    `;

const StyledHeaderSection=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:8px;
`
const Navigate=styled.div`
    a{
        margin:0px 4px;
        color:white;
        text-decoration:none;
    }
`
const Toolbar=styled.div`
    a{
        margin:0px 6px;
        color:white;
        text-decoration:none;

    }
`
const Flex =styled.div`
    display:flex;   
    align-items:center;
`

const Header=()=>{
    return(
    <StyledHeader>
        <Container> 
            <StyledHeaderSection>
                <Navigate>
                    <a href="#!">蝦皮購物</a>
                    <a href="#!">下載</a>
                    <a href="#!">追蹤我們</a>
                    <a href="#!">部落格</a>
                </Navigate>
                <Toolbar>
                    <a href="#!">通知</a>
                    <a href="#!">幫助中心</a>
                    <a href="#!">帳號</a>
                </Toolbar>
            </StyledHeaderSection>
            <StyledHeaderSection>
                <Link to="/">
                    <img src={logo} alt="logo" height={48}></img>
                </Link>
                <Flex>
                    <Input.Search 
                        style={{marginRight:8}}
                        placeholder="在商城搜尋"
                        onSearch={(value) => console.log(value)} 
                        enterButton 
                    />
                    <Link to="/cart">
                        <ShoppingCartOutlined style={{fontSize:32, color: '#FFF'}}/>
                    </Link>
                </Flex>
            </StyledHeaderSection> 
        </Container>
    </StyledHeader>
    );
};

export default Header;