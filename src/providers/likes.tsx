import React, { createContext } from 'react';
import api_core from '../utils/api_core'
import {storage} from '../utils/storage'

interface LikeContentData {
  registerLike(id_elo:number):Promise<void>

} 

export const LikeContext = createContext<LikeContentData>({} as LikeContentData );

export const LikeProvider: React.FC = ({ children }) => {

  
  async function registerLike(id_elo:number){
    
    await api_core.post("/like",{ id_user: storage.data.user.id, id_elo: id_elo },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${storage.data.token}`
      }
    })
  }

 return (
   <LikeContext.Provider value={{
     registerLike
     }}>
     {children}
   </LikeContext.Provider>
 );
};

