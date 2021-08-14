import React, { createContext,useState } from 'react';
import api_core from '../utils/api_core'
interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    photo: string;
    bio: string;
}
interface Data {
    error: boolean
    message: string
    user: User | null
    token: string
}

interface AuthResponseData {
  data: Data | null
  status: number
} 

interface AuthContentData {
  data: AuthResponseData | null
  login(username:string,password:string): Promise<void>
  signup(email:string,name:string,username:string,password:string,confirmPassword:string,photo:string,bio:string): Promise<{status: number;error: any;message: any}>
} 

export const AuthContext = createContext<AuthContentData>({} as AuthContentData );

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthResponseData | null>(null)

  async function login(username:string,password:string) {
    try {
      const {status,data} = await api_core.post(`/auth`,{username,password});
      
      localStorage.setItem("data",JSON.stringify(data))
      localStorage.setItem("isAuthenticated","true")
      setData({data: data,status: status})
      
    } catch (error) {
      localStorage.setItem("isAuthenticated","false")
      setData({ 
      data: {
        error: true,
        message: "Falhou em encontrar usuario, usuário ou senha estão errados" ,
        token: "", 
        user: null
      }, 
      status: 400
    })
      
    }
  }

  async function signup(email:string,name:string,username:string,password:string,confirmPassword:string,photo:string,bio:string) {
    try {

      
      const {status,data} = await api_core.post(
        `/user`,
        {email,name,username,password,photo,bio},
        {
        validateStatus: (status) => { return status === 400 || status === 201} 
      });
      console.log({status,error:data.error,message:data.message})
      return {status,error:data.error,message:data.message}
    } catch (error) {
      return {status: 400,error:true,message: error}
    }
  }
  
  
 return (
   <AuthContext.Provider value={{
     data,
     login,
     signup
    }}>
     {children}
   </AuthContext.Provider>
 );
};

