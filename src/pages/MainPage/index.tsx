import React, { useContext, useEffect, useState } from 'react';

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter,faHome,faPaperPlane,faEllipsisV,faHeart } from '@fortawesome/free-solid-svg-icons'


import { 
  Container,
  SectionMain,
  Header,
  Logo,
  Avatar,
  Main,
  SectionPosts,
  SectionInfo,
  Post,
  PostHeader,
  PostCarrossel,
  PostLikes,
  PostComments,
  PostEditorComment
} from './styles';
import { Link } from 'react-router-dom';

import {EloContext} from "../../providers/elos"


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

const MainPage: React.FC = () => {
  const [storage,setStorage] = useState<Data>()
  const {
    data,
    filter,
    setFilter,
    searchElos,
    fetchMoreElos
  } = useContext(EloContext)

  useEffect(()=>{
    
    setStorage(
      JSON.parse(`${localStorage.getItem("data")}`) as Data
    )

    setFilter({
      address: `%${filter.address}%`,
      qtd_comments: filter.qtd_comments,
      qtd_likes: filter.qtd_likes,
      category: filter.category,
      description: `%${filter.description}%`,
      offset: filter.offset
    })

    searchElos(filter).then(()=>{})
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



  async function handleInputSearch (event:React.ChangeEvent<HTMLInputElement>){
    setFilter({
        address: `%${event.target.value}%`,
        qtd_comments: filter.qtd_comments,
        qtd_likes: filter.qtd_likes,
        category: filter.category,
        description: `%${filter.description}%`,
        offset: filter.offset
      })

    await searchElos(filter)
  }


  return (
      <Container>
        <SectionMain backgroundColor="var(--white)">
          <Header>
            <Logo src="/assets/logo.png" />
            <div className="column-header">
              <InputBase
                className="input-search"
                placeholder=""
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={handleInputSearch}
              />
              <FontAwesomeIcon className="icons icon-filter" icon={faFilter}  color="#CB6161" />
            </div>
            <div className="column-header">
              <Link to="/" ><FontAwesomeIcon className="icons" icon={faHome} color="#F3F3F3"  /></Link>
              <Avatar src={storage?.user?.photo} alt={storage?.user?.name} />
            </div>
          </Header>
         <Main>
           <SectionInfo>
            <div className="container-mini-main">
              <Avatar src={storage?.user?.photo} alt={storage?.user?.name} />
              <div className="container-mini-avatar" >
                <p>{storage?.user?.name}</p>
                <p><strong>{storage?.user?.username}</strong></p>
              </div>
            </div>
            <span className="container-mini-description" >
              {storage?.user?.bio}
            </span>
           </SectionInfo>
           <SectionPosts>
             <div className="container-create-new-elo" >
             <Avatar src={storage?.user?.photo} alt={storage?.user?.name} />
             <InputBase
                className="input-create-new-elo"
                placeholder={`Qual o novo elo, ${storage?.user?.name.split(" ")[0]} ?`}
                inputProps={{ 'aria-label': 'search google maps' }}
              />
             </div>

              {
                data?.elos.map((elo,index,array) =>(
                    
                  <Post key={elo.id} id={`elo-${elo.id}`} >
                  <PostHeader>
                      <div style={{display: "flex",alignItems: "center",justifyContent: "flex-start",marginLeft:"10px"}}>
                        <Avatar src={storage?.user?.photo} alt={storage?.user?.name} style={{marginRight:"10px"}} />
                        <p>Jadson dos Santos Silva - em <strong>Florinópolis - Santa Catarina</strong></p>
                      </div>
                      <FontAwesomeIcon className="icons" icon={faEllipsisV} color="#F3F3F3" style={{cursor: "pointer"}}  />
                  </PostHeader>
                  <PostCarrossel>
                    <div >
                        <img src={storage?.user?.photo} alt="" />
                    </div>
                    <div >
                        <img src={storage?.user?.photo} alt="" />
                    </div>
                    <div >
                        <img src={storage?.user?.photo} alt="" />
                    </div>
                    <div>
                        <video controls width="250" src="https://www.w3schools.com/html/mov_bbb.mp4" />
                    </div>
                  </PostCarrossel>
                  <PostLikes>
                  <FontAwesomeIcon className="icons" icon={faHeart} color="#DE1A1A" style={{cursor: "pointer"}}  />
                  <span>50 <strong>Mil Likes</strong></span>
                  </PostLikes>
                  <PostComments>
                    <li>
                      <strong>gtjadsonsantos</strong>
                      <p>😍</p>
                    </li>
                    <li>
                      <strong>brufarias2</strong>
                      <p>Eu amei conhecer esse lugar ✨</p>
                    </li>
                    <li>
                      <strong>gaucho516</strong>
                      <p>Bah gurizada, que baita esse lugar</p>
                    </li>
                    <li>
                      <strong>manezinho</strong>
                      <p>Que baita esse lugar feio.</p>
                    </li>
                  </PostComments>
                  <Divider/>
                  <PostEditorComment>
                  <InputBase
                    className="input-editor-comment"
                    placeholder="Interaja com este elo"
                    inputProps={{ 'aria-label': 'search google maps' }}
                  />
                  <FontAwesomeIcon className="icons" icon={faPaperPlane} color="#EBEBEB" style={{cursor: "pointer"}}  />
                  </PostEditorComment>
                </Post>
                ))
              }
           </SectionPosts>
         </Main>
        </SectionMain>
        </Container>
  );
}

export default MainPage;