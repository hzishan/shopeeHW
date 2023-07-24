import { Button, Input, message } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm =()=>{
    const history = useNavigate();
    const {login,isAuthenticated} =useContext(AuthContext);
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const handleLogin=()=>{
        login(username,password).then(({token,error})=>{
            if (!token){
                message.error(error);
            }
        });
    };

    useEffect(()=>{
        isAuthenticated && history("/");
    },[isAuthenticated]);

    return <div>
        <Input 
            size="large" 
            placeholder="account"
            prefix={<UserOutlined />}
            value={username}
            onChange={e=>setUsername(e.target.value)}
        />
        <Input 
            size="large"
            type="password"
            placeholder="password" 
            prefix={<LockOutlined />}
            value={password}
            onChange={e=>setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>login</Button>
    </div>
}

export default LoginForm;