import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import { styled } from "styled-components";
import { Button, Input } from 'antd';
import LoginForm from "../components/auth/LoginForm";


const StyledLoginBox=styled.div`
    background-color:EE4D2D;
`;

const StyledLoginContainer=styled.div`
    display:flex;
    justify-content: center;
    padding:48px 12px;
`;


const LoginPage=()=>{
    return <DefaultLayout>
        <StyledLoginBox>
            <StyledLoginContainer>
                <div>
                    <img width="100" src="https://images.unsplash.com/photo-1685208711000-0946e951f651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"/>
                </div>
                <div>
                    <LoginForm/>
                </div>
            </StyledLoginContainer>
        </StyledLoginBox>
    </DefaultLayout>    
}

export default LoginPage;
