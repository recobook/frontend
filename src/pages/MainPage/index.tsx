import React from 'react';

import SectionInfo from '../../components/SectionInfo';
import SectionPosts from '../../components/SectionPosts';
import Header from '../../components/Header';

import { 
  Container,
  SectionMain,
  Main
} from './styles';

import Modal from '../../components/Modal'

const MainPage: React.FC = () => {

  return (
      <Container>
        <SectionMain backgroundColor="var(--white)">
          <Header/>
         <Main>
           <SectionInfo />
           <SectionPosts />
         </Main>
        </SectionMain>
        <Modal />
        </Container>
  );
}

export default MainPage;
