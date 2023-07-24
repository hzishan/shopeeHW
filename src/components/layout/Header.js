import React, { useContext } from "react";
import styled,{css} from "styled-components";
import Container from "../common/Container";
import logo from "../../images/shopee_logo.png";
import { Input } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import AuthContext from "../auth/AuthContext";


const StyledHeader=styled.header`
    background-color: #FA5130;
    width:100vw;
    padding: 16px 0px;
    ${(props) =>
        props.fixed &&
        css`
            z-index:50;
            position: sticky;
            top: 0;
        `}
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
const Box =styled.div`
    display:flex;   
    align-items:center;
`

const Header=(props)=>{
    const { isAuthenticated }=useContext(AuthContext)
    return(
    <StyledHeader fixed={props.fixed}>
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
                    {/* {console.log("hah",isAuthenticated)} */}
                    {isAuthenticated ? (
                        <a href="#!">帳號</a>
                        ) : (
                            <a href="#!">登入/註冊</a>
                        )}
                    
                </Toolbar>
            </StyledHeaderSection>
            <StyledHeaderSection>
                <Link to="/">
                    <img src={logo} alt="logo" height={48}></img>
                </Link>
                <Box>
                    <Input.Search 
                        style={{marginRight:8}}
                        placeholder="在商城搜尋"
                        onSearch={(value) => console.log(value)} 
                        enterButton 
                    />
                    <Link to="/cart">
                        <ShoppingCartOutlined style={{fontSize:32, color: '#FFF'}}/>
                    </Link>
                </Box>
            </StyledHeaderSection> 
        </Container>
    </StyledHeader>
    );
};

export default Header;