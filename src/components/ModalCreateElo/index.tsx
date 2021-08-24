import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle,faFileImage,faFileVideo,faMapMarkedAlt,faDollarSign } from '@fortawesome/free-solid-svg-icons'

import { 
    Container,
    Header,
    Title,
    Textarea,
    AreaActions,
    ContainerOptions,
    TitleOptions,
    Button,
    ContainerIcons,
    Icon
} from './styles';

const ModalCreateElo: React.FC = () => {

  return(
    <Container>
        <Header>
            <Title>Criar um novo Elo</Title>
            <FontAwesomeIcon className="icons" icon={faTimesCircle}  color="#5A5A5A" onClick={() => {window.location.href = "/"}} />
        </Header>
        <Textarea placeholder="Nos conte sobre sua experiência ?" rows={50} required />
        <AreaActions >
            <ContainerOptions>
                <TitleOptions>Adicione em seu post</TitleOptions>
                <ContainerIcons>
                    <Icon>
                        <label htmlFor="input-image">
                            <FontAwesomeIcon className="icons" icon={faFileImage}  color="#64D162" />
                        </label>
                        <input id="input-image" type="file"  style={{display: "none"}} multiple />
                    </Icon>
                    
                    <Icon>
                        <label htmlFor="input-video">
                        <FontAwesomeIcon className="icons" icon={faFileVideo}  color="#00B1E9" />
                        </label>
                        <input id="input-video" type="file"  style={{display: "none"}} multiple />
                    </Icon>

                    <FontAwesomeIcon className="icons" icon={faMapMarkedAlt}  color="#FF4156" />
                    <FontAwesomeIcon className="icons" icon={faDollarSign}  color="#323557" />
                </ContainerIcons>
            </ContainerOptions>
            <Button>Elo</Button>
        </AreaActions>
    </Container>
  );
}

export default ModalCreateElo;