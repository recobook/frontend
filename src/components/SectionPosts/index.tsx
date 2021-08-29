import React, { useEffect, useState } from "react";

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

import Avatar from '../../components/Avatar'

import {faPaperPlane,faEllipsisV,faHeart,faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    Container,
    Post,
    PostHeader,
    PostCarrossel,
    PostLikes,
    PostComments,
    PostEditorComment
} from "./styles";

import {ModalContext} from "../../providers/modal"
import {EloContext} from "../../providers/elos"
import {LikeContext} from '../../providers/likes'

import ModalCreateElo from '../../components/ModalCreateElo'
import api_core from "../../utils/api_core";
import ModalOptionsComment from "../ModalOptionsCommnet";
import { CommentContext } from "../../providers/comments";


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

const SectionPosts: React.FC = () => {

    const [storage,setStorage] = useState<Data>()
    const { setVisible, setModal } = React.useContext(ModalContext)
    const { data,filter,setFilter,fetchMoreElos} = React.useContext(EloContext)
    const { registerLike} = React.useContext(LikeContext)
    const { comment,comments,setComment,listComments,listMoreComments} = React.useContext(CommentContext)
        
    useEffect(()=>{
        setStorage(JSON.parse(`${localStorage.getItem("data")}`) as Data)
    },[])

    useEffect(()=>{
      let observer = new IntersectionObserver((entries)=>{
        if(entries.some(entry => entry.isIntersecting)){
          
          setFilter({
            address: `%${filter.address}%`,
            qtd_comments: filter.qtd_comments,
            qtd_likes: filter.qtd_likes,
            category: filter.category,
            description: `%${filter.description}%`,
            offset: filter.offset + 1
          })
    
    
          fetchMoreElos({
            address: `%${filter.address}%`,
            qtd_comments: filter.qtd_comments,
            qtd_likes: filter.qtd_likes,
            category: filter.category,
            description: `%${filter.description}%`,
            offset: filter.offset
          }).then(() =>{})
  
        }
  
      });
      const target = document.querySelector(`#elo-${data.elos[data?.elos.length - 1]?.id}`)
      
      if(target?.isConnected){
        observer.observe(target);
      }
      return () => observer.disconnect()
  
    },[data.elos])

    async function sendComment() {
      await api_core.post<{error: boolean,message: string}>("/comment",comment,{headers: {Authorization: `${storage?.token}`}})
      await listMoreComments({id_elo: comment.id_elo,offset: 0})
    }
  
  return (
    <Container>
      <div className="container-create-new-elo">
        <Avatar src={storage?.user?.photo} alt={storage?.user?.name} />
        <InputBase
          onFocus={() => {
            setModal(ModalCreateElo)
            setVisible(true);
          }}
          className="input-create-new-elo"
          placeholder={`Qual o novo elo, ${
            storage?.user?.name.split(" ")[0]
          } ?`}
          inputProps={{ "aria-label": "search google maps" }}
        />
      </div>

      {data?.elos.map((elo, index, array) => (
        <Post key={elo.id} id={`elo-${elo.id}`} onLoad={async ()=> {await listComments({id_elo: elo.id,offset: 0})}} >
          <PostHeader>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginLeft: "10px",
              }}
            >
              <Avatar
                src={elo.photo}
                alt={elo.name}
                style={{ marginRight: "10px" }}
              />
              <p>
                {elo.name} - em <strong>{elo.address}</strong>
              </p>
            </div>
            <FontAwesomeIcon
              className="icons"
              icon={faEllipsisV}
              color="#F3F3F3"
              style={{ cursor: "pointer" }}
            />
          </PostHeader>
          <PostCarrossel>
            <div>
              <img src={storage?.user?.photo} alt="" />
            </div>
            <div>
              <img src={storage?.user?.photo} alt="" />
            </div>
            <div>
              <img src={storage?.user?.photo} alt="" />
            </div>
            <div>
              <video
                controls
                width="250"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              />
            </div>
          </PostCarrossel>
          <PostLikes>
            <FontAwesomeIcon
              className="icons"
              icon={faHeart}
              color="#C4C4C4"
              style={{ cursor: "pointer" }}
              onClick={() => registerLike(elo.id)}
            />
            <span>
              {elo.qtd_likes}{" "}
              <strong>{elo.qtd_likes > 1 ? "Likes" : "Like"}</strong>
            </span>
          </PostLikes>
          <PostComments>
              {
                comments.get(elo.id)?.map((comment,index)=>(
                <li key={index}>
                  <div>
                    <strong>{comment.username}</strong>
                    <p>{comment.content}</p>
                  </div>
                  <FontAwesomeIcon className="icons" icon={faEllipsisH} color="#F3F3F3" style={{ cursor: "pointer" }}  onClick={()=> {
                      setModal(ModalOptionsComment)
                      setVisible(true);
                      setComment({id: comment.id,content: comment.content,id_elo: elo.id,id_user: Number(storage?.user?.id)})
                  }} />
                </li>
                ))
              }
          </PostComments>
          <Divider />
          <PostEditorComment>
            <InputBase
              className="input-editor-comment"
              placeholder="Interaja com este elo"
              onChange={event => setComment({id: 0,content: event.target.value,id_elo: elo.id,id_user: Number(storage?.user?.id)})}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <FontAwesomeIcon
              className="icons"
              icon={faPaperPlane}
              color="#EBEBEB"
              style={{ cursor: "pointer" }}
              onClick={sendComment}
            />

          </PostEditorComment>
        </Post>
      ))}
    </Container>
  );
};

export default SectionPosts;