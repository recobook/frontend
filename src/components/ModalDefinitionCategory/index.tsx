import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

import { 
    Container,
    Header,
    Title,
    AreaOptions,
    Option
} from './styles';

const ModalDefinitionCategory: React.FC = () => {

  return(
    <Container>
        <Header>
            <FontAwesomeIcon className="icons" icon={faArrowCircleLeft}  color="#5A5A5A" />
            <Title>Definição de  Categoria</Title>
        </Header>
        <AreaOptions>
            <Option>Muito Barato</Option>
            <Option>Barato</Option>
            <Option>Caro</Option>
            <Option>Muito Caro</Option>
        </AreaOptions>        
    </Container>
  );
}

export default ModalDefinitionCategory;