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
} from './styles';

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
              <FontAwesomeIcon className="icons" icon={faHome} color="#F3F3F3"  />
              <Avatar src="https://avatars.githubusercontent.com/u/42282908?v=4" alt="Jadson Santos" />
            </div>
          </Header>
         ngoergieg
        </SectionMain>
        </Container>
  );
}

export default MainPage;