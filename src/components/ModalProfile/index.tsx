import React from "react";
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider';

import { Container, Option } from "./styles";

import { ModalContext } from '../../providers/modal'


const ModalProfile: React.FC = () => {
  return (
      <ModalContext.Consumer>
       {
         modal => (
          <Container>
            <Link to="/profile"><Option><p>Settings</p></Option></Link>
            <Option></Option>
            <Divider />
            <Link to="/login"><Option><p>Logout</p></Option></Link>
            <Option onClick={()=>{ modal.setVisible(false) }}><p>Cancelar</p></Option>
          </Container>
         )
       }
      </ModalContext.Consumer>
  );
};

export default ModalProfile;

