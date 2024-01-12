import axios from "axios";
import { createContext, useEffect, useState } from "react";

const context = createContext()
const initialState ={
    users:JSON.parse(localStorage.getItem('user')) || null
    loading:true
}
const AuthProvider = ({children}) => {
    const [state,setState] = useState(initialState)
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.users))
    },[state.users])

    const login = async (email,password)=>{
        try {
            const response = await axios.post('http://localhost:8800/api/auth/login',{email,password})
        } catch (error) {
            
        }
    }
    return (
        <>
            <context.Provider value={user}>
                {children}
            </context.Provider>
        </>
    );
};

export default AuthProvider;