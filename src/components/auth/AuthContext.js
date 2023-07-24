import React ,{ useEffect, useState } from "react";


const defaultContextValue={
    isAuthenticated:false,
}
const AuthContext =React.createContext(defaultContextValue);


export const AuthProvider = ({children}) => {
    const [isAuthenticated,setAuthenticated]=useState(
        defaultContextValue.isAuthenticated
    );

    useEffect(()=>{
        const authState=JSON.parse(localStorage.getItem("shopee:auth.state"))
        if(authState && authState.token){
            setAuthenticated(true);
        }
    },[]);

    return (
        <AuthContext.Provider 
            value={{
                isAuthenticated,
                login: async (username,password)=>{
                    if(username ==="test"){
                        const token="good_token"
                        localStorage.setItem(
                            "shopee:auth.state",
                            JSON.stringify({token})
                        );
                        setAuthenticated(true)
                        return {token};
                    }
                    setAuthenticated(false)
                    return {token:null,error:"invalid password"};
                },
                logout: async()=>{
                    setAuthenticated(false)
                    localStorage.removeItem("shopee:auth.state")
                },
                }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;