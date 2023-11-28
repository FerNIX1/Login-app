import { createContext,useState } from "react";

export const UserContext=createContext(); 

export const UserProvider=({children})=>{
    const [user,setUser]=useState({ /* por defecto */
        email:"user",
        password:"",
        LoggedIn:false
    });
    const login=(email,password)=>{
        setUser({                  
            email:email,
            password:password,
            LoggedIn:true
        })
    }
    const logout=()=>{
        setUser({
            email:"",
            password:"",
            LoggedIn:false
        })
    }
    return (
        <UserContext.Provider value={{user,login,logout}}>
         {children}
        </UserContext.Provider>
    )
}