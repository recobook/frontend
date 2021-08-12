import React, { createContext,useState } from 'react';

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
    user: User
    token: string
}

interface AuthContentData {
  data: Data | null
  login(username:string,password:string): Promise<void>
} 


export const AuthContext = createContext<AuthContentData>({} as AuthContentData );

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Data | null>(null)


  async function login(username:string,password:string) {
    console.log(username,password)
  }

 return (
   <AuthContext.Provider value={{data,login}}>
     {children}
   </AuthContext.Provider>
 );
};

