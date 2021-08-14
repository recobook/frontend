import React, { useEffect, useState } from 'react';

import InputBase from '@material-ui/core/InputBase';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter,faHome } from '@fortawesome/free-solid-svg-icons'


import { 
  Container,
  SectionMain,
  Header,
  Logo,
  Avatar,
  Main,
  SectionPosts,
  SectionInfo
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
              <Avatar src={data?.user?.photo} alt="Jadson Santos" />
            </div>
          </Header>
         <Main>
           <SectionInfo>
            <div className="container-mini-main">
              <Avatar src={data?.user?.photo} alt="Jadson Santos" />
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
             Lista de posts
           </SectionPosts>
         </Main>
        </SectionMain>
        </Container>
  );
}

export default MainPage;