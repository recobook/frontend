import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

import { 
  Container,
  SectionMain,
  Title,
  Header,
  Button,
  Logo,
  Form
} from './styles';

import api_core from '../../utils/api_core';

const ForgoutPassword: React.FC = () => {

  const [firstTry,setFirstTry] = useState(true)
  const [message,setMessage] = useState("")
  const [status,setStatus] = useState(400)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const email = form.get("email") as string
    
    const {status,data} = await api_core.post<{message:string,error:boolean}>("/auth/forgot_password",{email},{
      validateStatus: (status) => { return status === 400 || status === 201} 
    })
    
    setMessage(data.message)
    setStatus(status)
    setFirstTry(false)

  }

  return (
      <Container>
        <SectionMain backgroundColor="var(--white)">
          <Header>
            <Logo src="/assets/logo.png" />
          </Header>
          <Title fontSize="46px" color="var(--red)" >Esqueci minha senha</Title>
          <Form onSubmit={onSubmit}>
            <TextField className="inputs" color="secondary" name="email" type="email" label="email" variant="outlined" required />
            {
              firstTry?<></>:<Alert severity={status === 400 ? "error":"success"}>{`${message}`}</Alert>
            }
            <Button backgroundColor="var(--red)" color="var(--white)" fontSize="18px" height="60px" width="223px" >Quero minha senha</Button>
          </Form>
          <div style={{width: "100%", height: "30px",display: "flex", alignItems: "center",justifyContent: "center"}} >
            <a href="/privacidade.html">privacidade</a>
            <div style={{width: "5px", height: "5px",margin: "0px 20px 0px 20px", borderRadius: "17px", backgroundColor: "#C4C4C4"}} > </div>
            <a href="/termos_de_uso.html">termos de uso</a>
          </div>
        </SectionMain>
        </Container>
  );
}

export default ForgoutPassword;