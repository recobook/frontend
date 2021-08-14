import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter,faHome } from '@fortawesome/free-solid-svg-icons'


import { 
  Container,
  SectionMain,
  Header,
  Logo,
} from './styles';

const MainPage: React.FC = () => {

  return (
      <Container>
        <SectionMain backgroundColor="var(--white)">
          <Header>
            <Logo src="/assets/logo.png" />
            <div>
              <input type="text" name="" id="" />
              <FontAwesomeIcon icon={faFilter} />
            </div>
            <div>
              <img src="https://avatars.githubusercontent.com/u/42282908?v=4" alt="Jadson Santos" width="44" height="44" />
              <FontAwesomeIcon icon={faHome} />
            </div>
          </Header>
         ngoergieg
        </SectionMain>
        </Container>
  );
}

export default MainPage;