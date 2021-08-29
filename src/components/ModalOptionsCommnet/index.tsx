import React from 'react'
import { ModalContext } from '../../providers/modal'

import  {
    Container,
    Option
} from './styles'

const ModalOptionsComment: React.FC = () => {

    return (
    <ModalContext.Consumer>
        {
            modal => (
                <Container>
                    <Option><p>Excluir</p></Option>
                    <Option></Option>
                    <Option onClick={()=> {modal.setVisible(false)}} ><p>Cancelar</p></Option>
                </Container>
            )
        }
    </ModalContext.Consumer>
    )
}

export default ModalOptionsComment