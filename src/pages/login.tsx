import React from 'react';

import {
    Container,
    SectionLogin,
    SectionCreateAccount,
    Title,
    Paragraph,
    ButtonWhite
} from '../styles/login.style'



const Login: React.FC = () => {


  return (
    <Container>
      <SectionLogin> 
        
      </SectionLogin>
      <SectionCreateAccount>
         <Title>Seja Bem Vindo</Title>
         <Paragraph>
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sistema universal de recomendação de Locais
            <br/><br/>

            Um website gratuito para os usuários compartilharem a sua experiência com determinado local do mundo, de forma que outras pessoas consigam saber que você viveu essa experência e quer que outras pessoas tenha essa mesma sensação em suas vidas smiling_face_with_three_hearts. O nosso objetivo é simples, em defender que bons momentos devem ser compartilhados de uma forma simples.

         </Paragraph>
         <ButtonWhite>Criar Conta</ButtonWhite>
      </SectionCreateAccount>
    </Container>    
    );


}


export default Login;