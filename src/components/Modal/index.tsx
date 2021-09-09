import React, { useContext } from 'react';
import { ModalContext } from '../../providers/modal';

import { Container } from './styles';


const Modal: React.FC = () => {
  const {visible,modal} = useContext(ModalContext)

  return (
  <Container visible={visible} >
    {modal}
  </Container>
  );
}

export default Modal;


