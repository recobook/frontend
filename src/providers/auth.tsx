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
} 

export const AuthContext = createContext<AuthContentData>({} as AuthContentData );

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthResponseData | null>(null)

  async function login(username:string,password:string) {
    try {
      const {status,data} = await api_core.post(`/auth`,{username,password});
      
      localStorage.setItem("data",JSON.stringify(data))
      setData({data: data,status: status})
      
    } catch (error) {
      localStorage.setItem("data",JSON.stringify(undefined))
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

 return (
   <AuthContext.Provider value={{
     data,
     login
    }}>
     {children}
   </AuthContext.Provider>
 );
};

