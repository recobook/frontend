import React from 'react';

import { 
  Container,
  Section
} from './styles';

const Login: React.FC = () => {
  return (
      <Container>
        <Section backgroundColor="var(--white)" width="60%"></Section>
        <Section backgroundColor="var(--red)" width="40.43927648578811%">
          <h1>Login</h1>
          <p></p>
          <button></button>
        </Section>
      </Container>
  );
}

export default Login;