import React, { createContext,useState } from 'react';
import api_core from '../utils/api_core'
interface Elo {
    id: number;
    address: string;
    category: string;
    description: string
    id_user?: number
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
  filter:EloParam,
  searchElos(params:EloParam):Promise<void>
  fetchMoreElos(params:EloParam):Promise<void>

  setFilter(params:EloParam): void
} 

export const EloContext = createContext<EloContentData>({} as EloContentData );

export const EloProvider: React.FC = ({ children }) => {
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
    
    const storage = JSON.parse(`${localStorage.getItem("data")}`) as { error: boolean,message: string,user: {id:number,name:string,email:string,username:string,photo:string},token: string}

    const {data} = await api_core.get<EloResponseData>("/elos",
    {
      params,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${storage.token}`
      }
    }
    )
    

    setElos([...data.elos])
    setError(data.error)
    setMessage(data.message)
    
  }

  async function fetchMoreElos(params:EloParam){
    
    const storage = JSON.parse(`${localStorage.getItem("data")}`) as { error: boolean,message: string,user: {id:number,name:string,email:string,username:string,photo:string},token: string}

    const {data} = await api_core.get<EloResponseData>("/elos",
    {
      params,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${storage.token}`
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


 return (
   <EloContext.Provider value={{
     data: {elos,error,message},
     filter,
     setFilter,
     searchElos,
     fetchMoreElos
     }}>
     {children}
   </EloContext.Provider>
 );
};

