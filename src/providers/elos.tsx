import React, { createContext,useState } from 'react';

import api_core from '../utils/api_core'
import {storage} from '../utils/storage'

interface Elo {
    id:number,
    description:string,
    qtd_likes:number,
    qtd_comments:number,
    category:string,
    address:string,
    id_user?:number
    name:string
    username:string
    photo:string
    bio:string
}
interface EloParam {
  address: string;
  qtd_comments: number;
  qtd_likes: number;
  category: string;
  description: string
  offset: number
  
}

interface EloResponseData {
  error: boolean
  message: string
  elos: Elo[]
} 

interface EloContentData {
  data: EloResponseData 
  elo: Elo 
  setElo(elo:Elo): void
  filter:EloParam,
  searchElos(params:EloParam):Promise<void>
  fetchMoreElos(params:EloParam):Promise<void>
  setFilter(params:EloParam): void
  deleteELo(id_elo: number,id_user: number): Promise<void>
} 

export const EloContext = createContext<EloContentData>({} as EloContentData );

export const EloProvider: React.FC = ({ children }) => {
  const [elo,setElo] = useState<Elo>({} as Elo)
  const [elos,setElos] = useState<Elo[]>([])
  const [error,setError] = useState(false)
  const [message,setMessage] = useState("")
  const [filter,setFilter] = useState<EloParam>({
    address: `%Almirante%`,
    qtd_comments: 0,
    qtd_likes: 0,
    category: 'caro',
    description: '%%',
    offset: 0
  })

  async function searchElos(params:EloParam){
    
    
    const {data} = await api_core.get<EloResponseData>("/elos",
    {
      params,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${storage.data.token}`
      }
    }
    )
    

    setElos([...data.elos])
    setError(data.error)
    setMessage(data.message)
    
  }

  async function fetchMoreElos(params:EloParam){
    

    const {data} = await api_core.get<EloResponseData>("/elos",
    {
      params,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${storage.data.token}`
      }
      }
    )
        
    const map = new Map();
    const joinElos = [...elos,...data.elos]

    joinElos.forEach(elo => {
      if(!map.has(elo.id))
          map.set(elo.id,elo);
    })

    setElos([...map.values()])
    setError(data.error)
    setMessage(data.message)

  }
 
  async function deleteELo(id_elo: number,id_user: number) {
  const {data} = await api_core.delete(`/elo/${elo.id}`,
    { data: {id_user: id_user},  
      headers: { 'Content-Type': 'application/json', 'Authorization': `${storage.data.token}` } 
    }
    ) 
    console.log(data)
  }

  async function updateELo() {
    
  }
  
 return (
   <EloContext.Provider value={{
     data: {elos,error,message},
     elo,
     setElo,
     filter,
     setFilter,
     searchElos,
     fetchMoreElos,
     deleteELo
     }}>
     {children}
   </EloContext.Provider>
 );
};

