import React from 'react';

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

const MainPage: React.FC = () => {

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
              <Avatar src="https://avatars.githubusercontent.com/u/42282908?v=4" alt="Jadson Santos" />
            </div>
          </Header>
         <Main>
           <SectionInfo>
            <div className="container-mini-main">
              <Avatar src="https://avatars.githubusercontent.com/u/42282908?v=4" alt="Jadson Santos" />
              <div className="container-mini-avatar" >
                <p>Jadson dos Santos Silva</p>
                <p><strong>gtjadsonsantos</strong></p>
              </div>
            </div>
            <span className="container-mini-description" >
              💻 Um garoto que programa
              <br/>
              23 ☀️
              <br/>
              Florianópolis 🏴‍☠️
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