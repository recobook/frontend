import React from 'react'
import { EloContext } from '../../providers/elos'
import { ModalContext } from '../../providers/modal'
import { storage } from '../../utils/storage'
import ModalUpdateElo from '../ModalUpdateElo'

import  {
    Container,
    Option
} from './styles'

const ModalOptionsElo: React.FC = () => {

    return (
    <EloContext.Consumer>
        {
            elo => (
                <ModalContext.Consumer>
                {
                    modal => (
                        <Container>
                            <Option onClick={async ()=> {
                                modal.setVisible(false)
                                await elo.deleteELo(elo.elo.id,storage.data.user.id)
                            }}
                            ><p>Excluir</p></Option>
                            <Option onClick={()=>{
                                modal.setVisible(true)
                                modal.setModal(ModalUpdateElo)
                            }}>Atualizar</Option>
                            <Option></Option>
                            <Option onClick={()=> {modal.setVisible(false)}} ><p>Cancelar</p></Option>
                        </Container>
                    )
                }
                </ModalContext.Consumer>
            )
        }
    </EloContext.Consumer>
    )
}

export default ModalOptionsElo
