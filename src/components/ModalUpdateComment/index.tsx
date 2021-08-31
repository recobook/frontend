import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import { Container, Header, Title, Textarea, Button } from "./styles";

import { ModalContext } from "../../providers/modal";
import { CommentContext } from "../../providers/comments";
import { storage } from "../../utils/storage";

const ModalUpdateComment: React.FC = () => {

  return (
    <CommentContext.Consumer>
      {(comment) => (
        <ModalContext.Consumer>
          {(modal) => (
            <Container>
              <Header>
                <Title>Atualizar seu comentario</Title>
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
                placeholder="Insira o novo comentário"
                onChange={event => {
                  comment.setComment({
                    content: event.target.value,
                    id: comment.comment.id,
                    id_elo: comment.comment.id_elo,
                    id_user: storage.data.user.id
                  })
                }}
              />
              <Button onClick={async ()=> {
                modal.setVisible(false)
                await comment.updateComment(comment.comment)
              }}>Atualizar</Button>
            </Container>
          )}
        </ModalContext.Consumer>
      )}
    </CommentContext.Consumer>
  );
};

export default ModalUpdateComment;
