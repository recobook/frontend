import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import { Container, Header, Title, AreaOptions, Option } from "./styles";
import { ModalContext } from "../../providers/modal";
import { EloContext } from "../../providers/elos";
import ModalCreateElo from "../ModalCreateElo";
import { storage } from "../../utils/storage";

const ModalDefinitionCategory: React.FC = () => {

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
                <Title>Definição de Categoria</Title>
              </Header>
              <AreaOptions>
                <Option style={{backgroundColor: `${elo.elo.category === "muito barato" ?"#32a852":"#D6D6D6" }`}}  onClick={()=>{
                  elo.setElo({
                    address: elo.elo.address,
                    bio: elo.elo.bio,
                    category: "muito barato",
                    description: elo.elo.description,
                    id: elo.elo.id,
                    name: elo.elo.name,
                    photo: elo.elo.photo,
                    qtd_comments: elo.elo.qtd_comments,
                    qtd_likes: elo.elo.qtd_likes,
                    username: elo.elo.username,
                    id_user: storage.data.user.id
                })
                }} >Muito Barato</Option>
                <Option style={{backgroundColor: `${elo.elo.category === "barato" ?"#32a852":"#D6D6D6" }`}} onClick={()=>{
                  elo.setElo({
                    address: elo.elo.address,
                    bio: elo.elo.bio,
                    category: "barato",
                    description: elo.elo.description,
                    id: elo.elo.id,
                    name: elo.elo.name,
                    photo: elo.elo.photo,
                    qtd_comments: elo.elo.qtd_comments,
                    qtd_likes: elo.elo.qtd_likes,
                    username: elo.elo.username,
                    id_user: storage.data.user.id
                })
                }} >Barato</Option>
                <Option style={{backgroundColor: `${elo.elo.category === "caro" ?"#32a852":"#D6D6D6" }`}} onClick={()=>{
                  elo.setElo({
                    address: elo.elo.address,
                    bio: elo.elo.bio,
                    category: "caro",
                    description: elo.elo.description,
                    id: elo.elo.id,
                    name: elo.elo.name,
                    photo: elo.elo.photo,
                    qtd_comments: elo.elo.qtd_comments,
                    qtd_likes: elo.elo.qtd_likes,
                    username: elo.elo.username,
                    id_user: storage.data.user.id
                })
                }} >Caro</Option>
                <Option style={{backgroundColor: `${elo.elo.category === "muito caro" ?"#32a852":"#D6D6D6" }`}} onClick={()=>{
                  elo.setElo({
                    address: elo.elo.address,
                    bio: elo.elo.bio,
                    category: "muito caro",
                    description: elo.elo.description,
                    id: elo.elo.id,
                    name: elo.elo.name,
                    photo: elo.elo.photo,
                    qtd_comments: elo.elo.qtd_comments,
                    qtd_likes: elo.elo.qtd_likes,
                    username: elo.elo.username,
                    id_user: storage.data.user.id
                })
                }} >Muito Caro</Option>
              </AreaOptions>
            </Container>
          )}
        </ModalContext.Consumer>
      )}
    </EloContext.Consumer>
  );
};

export default ModalDefinitionCategory;
