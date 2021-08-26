import React from 'react';

import InputBase from '@material-ui/core/InputBase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

import { 
    Container,
    Header,
    Title,
} from './styles';

const ModalSearchAddress: React.FC = () => {


  async function handleInputSearch(event:React.ChangeEvent<HTMLInputElement>){
    console.log(event.target.value)

  }
  return(
    <Container>
        <Header>
            <FontAwesomeIcon className="icons" icon={faArrowCircleLeft}  color="#5A5A5A" />
            <Title>Buscar Endereço</Title>
        </Header>
        <InputBase
                className="input-search"
                placeholder=""
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={handleInputSearch}
              />
    </Container>
  );
}


export default ModalSearchAddress;


