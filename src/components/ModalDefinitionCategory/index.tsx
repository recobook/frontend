import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import { Container, Header, Title, AreaOptions, Option } from "./styles";
import { ModalContext } from "../../providers/modal";
import ModalCreateElo from "../ModalCreateElo";

const ModalDefinitionCategory: React.FC = () => {
  return (
    <ModalContext.Consumer>
      {(modal) => (
        <Container>
          <Header>
            <FontAwesomeIcon
              className="icons"
              icon={faArrowCircleLeft}
              color="#5A5A5A"
              onClick={()=> modal.setModal(ModalCreateElo)}
            />
            <Title>Definição de Categoria</Title>
          </Header>
          <AreaOptions>
            <Option>Muito Barato</Option>
            <Option>Barato</Option>
            <Option>Caro</Option>
            <Option>Muito Caro</Option>
          </AreaOptions>
        </Container>
      )}
    </ModalContext.Consumer>
  );
};

export default ModalDefinitionCategory;
