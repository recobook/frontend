import React, { useContext, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';


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

const CreateAccount: React.FC = () => {

  const { signup } = useContext(AuthContext)
  const [firstTry,setFirstTry] = useState(true)
  const [,setError] = useState(false)
  const [message,setMessage] = useState("")
  const [status,setStatus] = useState(200)
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const email = form.get("email") as string
    const name = form.get("name") as string
    const username = form.get("username") as string
    const password = form.get("password") as string
    const confirmPassword = form.get("confirm-password") as string
    const photo =  "http://0.0.0.0:1993/0.png"
    const bio = ""
    
    const {error,message,status} =await signup(
      email,
      name,
      username,
      password,
      confirmPassword,
      photo,
      bio
      );
      
      setError(error)
      setMessage(message)
      setStatus(status)    
      setFirstTry(false)
  }

  return (
      <Container>
        <SectionMain backgroundColor="var(--white)">
          <Header>
          <a href={`http://${window.location.host}/login`}><Logo src="/assets/logo.png" /></a>
          </Header>
          <Title fontSize="46px" color="var(--red)" >Criar sua conta</Title>
          <Form onSubmit={onSubmit}>
            <TextField className="inputs" color="secondary" name="email" label="Email" type="email" variant="outlined" required />
            <TextField className="inputs" color="secondary" name="name" label="Nome" type="text" variant="outlined" required/>
            <TextField className="inputs" color="secondary" name="username" label="Nome de usuário" type="text" variant="outlined" required/>
            <TextField className="inputs" color="secondary" name="password" label="Senha" type="password" variant="outlined" required/>
            <TextField className="inputs" color="secondary" name="confirm-password" label="Confirmar Senha" type="password" variant="outlined" required />
            {
              firstTry?<></>:<Alert severity={status === 400 ? "error":"success"}>{`${message}`}</Alert>
            }
            <Button backgroundColor="var(--red)" color="var(--white)" fontSize="18px" height="60px" width="223px" >Criar minha conta</Button>
          </Form>
          <div style={{width: "100%", height: "30px",display: "flex", alignItems: "center",justifyContent: "center"}} >
            <a href="/privacidade.html">privacidade</a>
            <div style={{width: "5px", height: "5px",margin: "0px 20px 0px 20px", borderRadius: "17px", backgroundColor: "#C4C4C4"}} > </div>
            <a href="/termos_de_uso.html">termos de uso</a>
          </div>
        </SectionMain>
        <Section backgroundColor="var(--red)">
          <Title fontSize="33px" color="var(--white)" >Ajude a compartilhar as boas experiências</Title>
        </Section>
      </Container>
  );
}

export default CreateAccount;