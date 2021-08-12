import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { 
  Container,
  Section,
  SectionMain,
  Title,
  Header,
  Button,
  Logo,
  Form
} from './styles';

import {AuthContext} from '../../providers/auth';


const Login: React.FC = () => {

  const {login} = useContext(AuthContext)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const username = form.get("username") as string
    const password = form.get("password") as string

    await login(username,password);
  }

  return (
      <Container>
        <SectionMain backgroundColor="var(--white)" width="60%">
          <Header>
            <Logo src="/assets/logo.png" />
          </Header>
          <Title fontSize="46px" color="var(--red)" >Entre em sua conta</Title>
          <Form onSubmit={onSubmit}>
            <TextField style={{width: "460px", height: "60px" }} color="secondary" name="username" label="username" variant="outlined" required />
            <TextField style={{width: "460px", height: "60px" }} color="secondary" name="password" label="Senha" variant="outlined" required/>
            <div style={{width: "460px",display: "flex", alignItems: "center",justifyContent: "space-between"}} >
              <FormControlLabel control={<Checkbox  />} label="Me lembre" />
              <a href="/esqueci_minha_senha">privacidade</a>
            </div>
            <Button backgroundColor="var(--red)" color="var(--white)" fontSize="18px" height="60px" width="223px" >Entrar</Button>
          </Form>
          <div style={{width: "460px", height: "30px",display: "flex", alignItems: "center",justifyContent: "center"}} >
            <a href="/privacidade">privacidade</a>
            <div style={{width: "5px", height: "5px",margin: "0px 20px 0px 20px", borderRadius: "17px", backgroundColor: "#C4C4C4"}} > </div>
            <a href="/termos_de_uso">termos de uso</a>
          </div>
        </SectionMain>
        <Section backgroundColor="var(--red)" width="40.43927648578811%">
          <Title fontSize="36px" color="var(--white)" >Seja BemVindo</Title>
          <p style={{ width: "90%",textAlign: "center" , color: "var(--white)"  }} >Sistema universal de recomendação de Locais</p>
          <p style={{ width: "90%",textAlign: "justify", color: "var(--white)"  }} >
            Um website gratuito para os usuários compartilharem a 
            sua experiência com determinado local do mundo, de fo
            rma que outras pessoas consigam saber que você viveu 
            essa experência e quer que outras pessoas tenha essa 
            mesma sensação em suas vidas.
            O nosso objetivo é simples, em defender que bons momentos de
            vem ser compartilhados de uma forma simples.
          </p>
          <Button backgroundColor="var(--white)" color="var(--red)" fontSize="18px" height="60px" width="223px"  >Criar Conta</Button>
        </Section>
      </Container>
  );
}

export default Login;