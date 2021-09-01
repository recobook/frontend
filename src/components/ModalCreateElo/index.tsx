import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faFileImage,
  faFileVideo,
  faMapMarkedAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

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
  Icon,
} from "./styles";

import { ModalContext } from "../../providers/modal";
import { EloContext } from "../../providers/elos";

import ModalDefinitionCategory from "../ModalDefinitionCategory";
import ModalSearchAddress from "../ModalSearchAddress";
import { storage } from "../../utils/storage";

const ModalCreateElo: React.FC = () => {
  return (
    <EloContext.Consumer>
      {(elo) => (
        <ModalContext.Consumer>
          {(modal) => (
            <Container>
              <Header>
                <Title>Criar um novo Elo</Title>
                <FontAwesomeIcon
                  className="icons"
                  icon={faTimesCircle}
                  color="#5A5A5A"
                  onClick={() => modal.setVisible(false)}
                />
              </Header>
              <Textarea
                placeholder="Nos conte sobre sua experiência ?"
                value={elo.elo.description}
                onChange={event => {
                    elo.setElo({
                        address: elo.elo.address,
                        bio: elo.elo.bio,
                        category: elo.elo.category,
                        description: event.target.value,
                        id: elo.elo.id,
                        name: elo.elo.name,
                        photo: elo.elo.photo,
                        qtd_comments: elo.elo.qtd_comments,
                        qtd_likes: elo.elo.qtd_likes,
                        username: elo.elo.username,
                        id_user: storage.data.user.id
                    })
                }}
                rows={50}
                required
              />
              <AreaActions>
                <ContainerOptions>
                  <TitleOptions>Adicione em seu post</TitleOptions>
                  <ContainerIcons>
                    <Icon>
                      <label htmlFor="input-image">
                        <FontAwesomeIcon
                          className="icons"
                          icon={faFileImage}
                          color="#64D162"
                        />
                      </label>
                      <input
                        id="input-image"
                        type="file"
                        accept=".png,.jpg,.jpeg,.svg" 
                        onChange={(event) => {elo.setImages(event.target.files)}}
                        style={{ display: "none" }}
                        multiple
                      />
                    </Icon>

                    <Icon>
                      <label htmlFor="input-video">
                        <FontAwesomeIcon
                          className="icons"
                          icon={faFileVideo}
                          color="#00B1E9"
                        />
                      </label>
                      <input
                        id="input-video"
                        type="file"
                        accept=".ogg,.mp4" 
                        onChange={(event) => {elo.setVideos(event.target.files)}}
                        style={{ display: "none" }}
                        multiple
                      />
                    </Icon>

                    <FontAwesomeIcon
                      className="icons"
                      icon={faMapMarkedAlt}
                      onClick={() => modal.setModal(ModalSearchAddress)}
                      color="#FF4156"
                    />
                    <FontAwesomeIcon
                      className="icons"
                      icon={faDollarSign}
                      onClick={() => modal.setModal(ModalDefinitionCategory)}
                      color="#323557"
                    />
                  </ContainerIcons>
                </ContainerOptions>
                <Button onClick={async ()=> {
                   modal.setVisible(false)
                   await elo.createElo(elo.elo,elo.images,elo.videos)
                }} >Elo</Button>
              </AreaActions>
            </Container>
          )}
        </ModalContext.Consumer>
      )}
    </EloContext.Consumer>
  );
};

export default ModalCreateElo;
