import React from 'react'
import { CommentContext } from '../../providers/comments'
import { ModalContext } from '../../providers/modal'

import  {
    Container,
    Option
} from './styles'

const ModalOptionsComment: React.FC = () => {

    return (
    <CommentContext.Consumer>
        {
            comment => (
                <ModalContext.Consumer>
                {
                    modal => (
                        <Container>
                            <Option onClick={async ()=> {
                                modal.setVisible(false)
                                await comment.deleteComment({
                                    id: comment.comment.id,
                                    id_user: comment.comment.id_user,
                                    id_elo: comment.comment.id_elo
                                })
                            }}
                            ><p>Excluir</p></Option>
                            <Option></Option>
                            <Option onClick={()=> {modal.setVisible(false)}} ><p>Cancelar</p></Option>
                        </Container>
                    )
                }
                </ModalContext.Consumer>
            )
        }
    </CommentContext.Consumer>
    )
}

export default ModalOptionsComment
