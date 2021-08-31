import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { Container, Header, Title, Textarea, Button } from "./styles";

import { ModalContext } from "../../providers/modal";
import { EloContext } from "../../providers/elos";

const ModalUpdateElo: React.FC = () => {

  return (
    <EloContext.Consumer>
      {(elo) => (
        <ModalContext.Consumer>
          {(modal) => (
            <Container>
              <Header>
                <Title>Atualizar seu elo</Title>
                <FontAwesomeIcon
                  className="icons"
                  icon={faTimesCircle}
                  color="#5A5A5A"
                  onClick={() => {
                    modal.setVisible(false);
                  }}
                />
              </Header>
              <Textarea
                placeholder="Insira a nova descrição"
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
                    id_user: elo.elo.id_user
                  })
                }}
              />
              <Button onClick={async ()=> {
                modal.setVisible(false)
                await elo.updateELo(elo.elo)
              }}>Atualizar</Button>
            </Container>
          )}
        </ModalContext.Consumer>
      )}
    </EloContext.Consumer>
  );
};

export default ModalUpdateElo;
