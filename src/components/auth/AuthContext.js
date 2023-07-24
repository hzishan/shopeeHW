import React ,{ useState } from "react";


const defaultContextValue={
    isAuthenticated:false,
}
const AuthContext =React.createContext(defaultContextValue);


export const AuthProvider = ({children}) => {
    const [isAuthenticated,setAuthenticated]=useState(
        defaultContextValue.isAuthenticated
    );
    return (
        <AuthContext.Provider 
            value={{
                isAuthenticated,
                }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;