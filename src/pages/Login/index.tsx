import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";

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

  const { login,data } = useContext(AuthContext)
  const [firstTry,setFirstTry] = useState(true)
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    setFirstTry(false)
    const form = new FormData(event.currentTarget);
    const username = form.get("username") as string
    const password = form.get("password") as string

    await login(username,password);
  }

  return (
      <Container>
        <SectionMain backgroundColor="var(--white)">
          <Header>
            <Logo src="/assets/logo.png" />
          </Header>
          <Title fontSize="46px" color="var(--red)" >Entre em sua conta</Title>
          <Form onSubmit={onSubmit}>
            <TextField className="inputs" color="secondary" name="username" label="username" variant="outlined" required />
            <TextField className="inputs" color="secondary" name="password" label="Senha" type="password" variant="outlined" required/>
            {
              firstTry?<></>:<Alert severity={data?.status === 400 ? "error":"success"}>{data?.data?.message}</Alert>
            }
            <div className="area-options-login" >
              <div></div>
              <a href="/esqueci_minha_senha">Esqueci Minha Senha</a>
            </div>
            <Button backgroundColor="var(--red)" color="var(--white)" fontSize="18px" height="60px" width="223px" >Entrar</Button>
          </Form>
          <div style={{width: "100%", height: "30px",display: "flex", alignItems: "center",justifyContent: "center"}} >
            <a href="/privacidade">privacidade</a>
            <div style={{width: "5px", height: "5px",margin: "0px 20px 0px 20px", borderRadius: "17px", backgroundColor: "#C4C4C4"}} > </div>
            <a href="/termos_de_uso">termos de uso</a>
          </div>
        </SectionMain>
        <Section backgroundColor="var(--red)">
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
          <Link to="/signup" >
            <Button backgroundColor="var(--white)" color="var(--red)" fontSize="18px" height="60px" width="223px"  >Criar Conta</Button>
          </Link>
        </Section>
      </Container>
  );
}

export default Login;