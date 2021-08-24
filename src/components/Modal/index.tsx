import React from 'react';

import { Container } from './styles';

interface PropsModal {
  visible: boolean;
}
const Modal: React.FC<PropsModal> = ({children,visible}) => {
  return (
  <Container visible={visible} >
    {children}
  </Container>
  );
}

export default Modal;