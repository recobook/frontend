import React from "react";
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider';

import { Container, Option } from "./styles";

const ModalProfile: React.FC = () => {
  return (
        <Container>
          <Link to="/profile"><Option><p>Settings</p></Option></Link>
          <Option></Option>
          <Divider />
          <Link to="/login"><Option><p>Logout</p></Option></Link>
        </Container>
  );
};

export default ModalProfile;
