import React, { useEffect, useState } from 'react';

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
  const [data,setData] = useState<Data>()

  useEffect(()=>{
    const data = JSON.parse(`${localStorage.getItem("data")}`) as Data
    setData(data)
  },[])

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
              />
              <FontAwesomeIcon className="icons icon-filter" icon={faFilter}  color="#CB6161" />
            </div>
            <div className="column-header">
              <Link to="/" ><FontAwesomeIcon className="icons" icon={faHome} color="#F3F3F3"  /></Link>
              <Avatar src={data?.user?.photo} alt={data?.user?.name} />
            </div>
          </Header>
         <Main>
           <SectionInfo>
            <div className="container-mini-main">
              <Avatar src={data?.user?.photo} alt={data?.user?.name} />
              <div className="container-mini-avatar" >
                <p>{data?.user?.name}</p>
                <p><strong>{data?.user?.username}</strong></p>
              </div>
            </div>
            <span className="container-mini-description" >
              {data?.user?.bio}
            </span>
           </SectionInfo>
           <SectionPosts>
             <div className="container-create-new-elo" >
             <Avatar src={data?.user?.photo} alt={data?.user?.name} />
             <InputBase
                className="input-create-new-elo"
                placeholder={`Qual o novo elo, ${data?.user?.name.split(" ")[0]} ?`}
                inputProps={{ 'aria-label': 'search google maps' }}
              />
             </div>

             <Post>
               <PostHeader>
                  <div style={{display: "flex",alignItems: "center",justifyContent: "flex-start",marginLeft:"10px"}}>
                    <Avatar src={data?.user?.photo} alt={data?.user?.name} style={{marginRight:"10px"}} />
                    <p>Jadson dos Santos Silva - em <strong>Florinópolis - Santa Catarina</strong></p>
                  </div>
                  <FontAwesomeIcon className="icons" icon={faEllipsisV} color="#F3F3F3" style={{cursor: "pointer"}}  />
               </PostHeader>
               <PostCarrossel>
                 <div >
                    <img src={data?.user?.photo} alt="" />
                 </div>
                 <div >
                    <img src={data?.user?.photo} alt="" />
                 </div>
                 <div >
                    <img src={data?.user?.photo} alt="" />
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
           </SectionPosts>
         </Main>
        </SectionMain>
        </Container>
  );
}

export default MainPage;