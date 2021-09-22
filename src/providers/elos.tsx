import React, { createContext,useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import api_core from '../utils/api_core'
import api_dobby from '../utils/api_dobby';
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
  updateELo(elo:Elo): Promise<void>
  images: FileList | null
  videos: FileList | null
  setImages(files: FileList | null):void
  setVideos(files: FileList | null):void
  createElo(elo:Elo,images: FileList|null,videos:FileList|null): Promise<void>

} 

export const EloContext = createContext<EloContentData>({} as EloContentData );

export const EloProvider: React.FC = ({ children }) => {
  const [elo,setElo] = useState<Elo>({} as Elo)
  
  const [images,setImages] = useState<FileList | null>(null)
  const [videos,setVideos] = useState<FileList | null>(null)

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
    
    setElos([])

    const {data} = await api_core.get<EloResponseData>("/elos",
    {
      params,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${storage.data.token}`
      }
    }
    )
  
    setElos(data.elos)
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
    await api_core.delete(`/elo/${elo.id}`,
    { data: {id_user: id_user},  
      headers: { 'Content-Type': 'application/json', 'Authorization': `${storage.data.token}` } 
    }
    ) 
    
  }

  async function updateELo(elo:Elo) {
    
    await api_core.put(`/elo/${elo.id}`,
    {
      address: elo.address,
      category: elo.category,
      description: elo.description,
      id_user: storage.data.user.id
    },
    {
      headers: { 'Content-Type': 'application/json', 'Authorization': `${storage.data.token}` } 
    }) 
  }

  async function createElo(elo:Elo,images: FileList|null,videos:FileList|null) {

    const {data} = await  api_core.post<{error: boolean,message: string,id: number}>( "/elo",elo, {headers: { 'Content-Type': 'application/json', 'Authorization': `${storage.data.token}` } })

    const formDataImages = new FormData();
    const formDataVideos = new FormData();

  
    if(images?.length){

      for (let index = 0; index < images.length; index++) {
        const image = images.item(index);
        if (image){
          const uuid = uuidv4()
          const filename = `${uuid}${image.name}`.replaceAll(" ","")

          formDataImages.append(filename,image,filename)
          
          await api_core.post("/image",{url: `http://0.0.0.0:1993/images/${filename}`, id_elo: data.id },{ headers: { 'Content-Type': 'application/json', 'Authorization': `${storage.data.token}` }})
        }

      }
    }
    
    if(videos?.length){

      for (let index = 0; index < videos.length; index++) {
        const video = videos.item(index);
        if (video){
          const uuid = uuidv4()
          const filename = `${uuid}${video.name}`.replaceAll(" ","")

          formDataVideos.append(filename,video,filename)

          await api_core.post("/video",{url: `http://0.0.0.0:1993/videos/${filename}`, id_elo: data.id },{ headers: { 'Content-Type': 'application/json', 'Authorization': `${storage.data.token}` }})          
        }

      }

    }
    
    await api_dobby.post("/image",formDataImages,{ headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `${storage.data.token}` } })
    
    await api_dobby.post("/video",formDataVideos,{ headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `${storage.data.token}` } })
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
     deleteELo,
     updateELo,
     videos,
     images,
     setImages,
     setVideos,
     createElo
     }}>
     {children}
   </EloContext.Provider>
 );
};

