import React, { useContext } from 'react';
import { ModalContext } from '../../providers/modal';

import { Container } from './styles';


const Modal: React.FC = () => {
  const {visible,modal, setVisible} = useContext(ModalContext)

  return (
  <Container visible={visible} onClick={()=>{setVisible(false)}}>
    {modal}
  </Container>
  );
}

export default Modal;


