import React, { useContext } from 'react';

import SectionInfo from '../../components/SectionInfo';
import SectionPosts from '../../components/SectionPosts';
import Header from '../../components/Header';

import { 
  Container,
  SectionMain,
  Main
} from './styles';

import {ModalContext} from "../../providers/modal"
import Modal from '../../components/Modal'


const MainPage: React.FC = () => {
  const {visible,modal} = useContext(ModalContext)

  return (
      <Container>
        <SectionMain backgroundColor="var(--white)">
          <Header/>
         <Main>
           <SectionInfo />
           <SectionPosts />
         </Main>
        </SectionMain>
        <Modal visible={visible}> {modal} </Modal>
        </Container>
  );
}

export default MainPage;