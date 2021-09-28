import React, { createContext } from 'react';
import api_core from '../utils/api_core';
import { storage } from '../utils/storage';

interface Comment {id:number,id_elo:number,id_user:number, content:string}
interface Comments {id:number,id_elo:number,id_user:number, content:string, username: string}

interface ResponseComment  {
  "error": boolean,
  "message": string,
  "comments": [
    {
      "id": number,
      "content": string,
      "id_elo": number,
      "id_user": number,
      "username": string
    }
  ]
}


interface CommentContentData {
  comment: Comment
  comments: Map<number, {id: number;content: string;id_elo: number;id_user: number;username: string;}[]>,
  setComment: (comment: Comment) => void
  addComments:(id_elo:number,comment:Comments) => void
  deleteComment:(payload: {id:number,id_elo:number,id_user:number}) => Promise<void>
  listComments(params:{id_elo:number,offset:number}): Promise<void>
  listMoreComments(params:{id_elo:number,offset:number}): Promise<void>
  updateComment(payload: Comment): Promise<void>
} 

export const CommentContext = createContext<CommentContentData>({} as CommentContentData );

export const CommentProvider: React.FC = ({ children }) => {
  const [comment,setComment] = React.useState<Comment>({id: 0,id_elo: 0,id_user: 0,content: ""}); 
  const [comments, setComments] = React.useState(new Map<number,{"id": number,"content": string,"id_elo": number,"id_user": number,"username": string}[]>());
  
  async function listComments(params:{id_elo:number,offset:number}) {
    const {data} = await api_core.get<ResponseComment>("/comments",{params,headers: {Authorization: storage.data.token}})
    setComments(new Map().set(params.id_elo,data.comments)) 
  }
  async function listMoreComments(params:{id_elo:number,offset:number}) {
    const {data} = await api_core.get<ResponseComment>("/comments",{params,headers: {Authorization: storage.data.token}})

    
      setComments(new Map().set(params.id_elo,[...data.comments])) 
    
  }

  async function addComments(id_elo:number,comment:Comments) {
    
    setComments(new Map().set(id_elo,[comments.get(id_elo)?.filter(item => comment.id - 1 !== item.id )]))
  }

  async function deleteComment(payload: {id:number,id_elo:number,id_user:number}) {    
    setComments(new Map().set(payload.id_elo,comments.get(payload.id_elo)?.filter(item => payload.id !== item.id )))
    await api_core.delete(`/comment`,{ data: payload, headers: {Authorization: storage.data.token}})
  }
  

  async function updateComment(payload: Comment) {
    setComments(new Map().set(payload.id_elo,comments.get(payload.id_elo)?.map(item => {

      if (item.id === payload.id) {
        item.content = payload.content
      }

      return item
    })))
    
    await api_core.put(`/comment`,payload,{ headers: {Authorization: storage.data.token}})
  }

 return (
   <CommentContext.Provider value={{comment,comments,deleteComment,updateComment,addComments,setComment,listComments,listMoreComments}}>
     {children}
   </CommentContext.Provider>
 );
};

