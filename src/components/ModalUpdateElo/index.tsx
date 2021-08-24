import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import { 
    Container,
    Header,
    Title,
    Textarea
} from './styles';


const ModalUpdateElo: React.FC<{id_elo:number}> = ({id_elo}) => {

  async function handleInputSearch(event:React.ChangeEvent<HTMLTextAreaElement>){
    console.log(event.target.value)
  }

  return(
    <Container>
        <Header>
            <Title>Atualizar seu elo</Title>
            <FontAwesomeIcon className="icons" icon={faTimesCircle}  color="#5A5A5A" onClick={() => {window.location.href = "/"}} />
        </Header>
        <Textarea placeholder="O que vai querer mudar ?" onChange={handleInputSearch} />
    </Container>
  );
}

export default ModalUpdateElo;


