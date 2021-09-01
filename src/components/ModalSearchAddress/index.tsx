import React from "react";

import InputBase from "@material-ui/core/InputBase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import { Container, Header, Title } from "./styles";
import { ModalContext } from "../../providers/modal";
import { EloContext } from "../../providers/elos";

import ModalCreateElo from "../ModalCreateElo";
import { storage } from "../../utils/storage";

const ModalSearchAddress: React.FC = () => {

  return (
    <EloContext.Consumer>
      {(elo) => (
        <ModalContext.Consumer>
          {(modal) => (
            <Container>
              <Header>
                <FontAwesomeIcon
                  className="icons"
                  icon={faArrowCircleLeft}
                  color="#5A5A5A"
                  onClick={() => modal.setModal(ModalCreateElo)}
                />
                <Title>Buscar Endereço</Title>
              </Header>
              <InputBase
                className="input-search"
                placeholder=""
                inputProps={{ "aria-label": "search google maps" }}
                value={elo.elo.address}
                onChange={event => {
                  elo.setElo({
                    address: event.target.value,
                    bio: elo.elo.bio,
                    category: elo.elo.category,
                    description: elo.elo.description,
                    id: elo.elo.id,
                    name: elo.elo.name,
                    photo: elo.elo.photo,
                    qtd_comments: elo.elo.qtd_comments,
                    qtd_likes: elo.elo.qtd_likes,
                    username: elo.elo.username,
                    id_user: storage.data.user.id
                })
                }}
              />
            </Container>
          )}
        </ModalContext.Consumer>
      )}
    </EloContext.Consumer>
  );
};

export default ModalSearchAddress;
