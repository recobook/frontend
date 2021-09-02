import React from "react";
import Header from "../../components/Header";
import Alert from '@material-ui/lab/Alert';


import {
  Container,
  Main,
  SectionMain,
  Sidebar,
  Option,
  ViewEditProfileContianer,
  ViewChangedPassword,
  Label,
  Input,
  InputTextArea,
  Inline,
  Button,
} from "./styles";

const EditProfile: React.FC = () => {


    function handleSubmit() {}
  return (
    <ViewEditProfileContianer>
      <div>
        <Inline>
          <Label htmlFor="photo">Photo</Label>
          <Input id="photo" />
        </Inline>
        <Inline>
          <Label htmlFor="name">Name</Label>
          <Input id="name" />
        </Inline>
        <Inline>
          <Label htmlFor="username">Username</Label>
          <Input id="username" />
        </Inline>
        <Inline>
          <Label htmlFor="bio">Bio</Label>
          <InputTextArea id="bio" />
        </Inline>
        <Inline>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" />
        </Inline>
      </div>
      <Button>Submit</Button>
    </ViewEditProfileContianer>
  );
};

const ChangedPassword: React.FC = () => {
    
    const [password,setPassword] = React.useState("")
    const [message,setMessage] = React.useState<JSX.Element | null>()

    function validate() {
        if(password.length === 0) {
            setMessage(<Alert severity="error">A senha não pode ser em branco</Alert>)
            return false
        }        
        if(password.length < 8) {
            setMessage(<Alert severity="error">A senha deve conter no mínimo 8 caracteres</Alert>)
            return false
        }  

        return true
    }
    

    function handleSubmit() {
        if(validate()){

        }        

    }

  return (
    <ViewChangedPassword>
      <div>
        <Inline>
          <Label htmlFor="password-new">New Password</Label>
          <Input id="password-new" type="password" />
        </Inline>
        {message}
      </div>
      <Button onClick={handleSubmit}>Change Password</Button>
    </ViewChangedPassword>
  );
};

const Profile: React.FC = () => {
    const [view,setView] = React.useState<React.FC>(ChangedPassword)

  return (
    <Container>
      <SectionMain backgroundColor="var(--white)">
        <Header />
        <Main>
          <Sidebar>
            <Option onClick={()=> setView(EditProfile)}>
              <p>Edit Profile</p>
            </Option>
            <Option onClick={()=> setView(ChangedPassword)}>
              <p>Changed Password</p>
            </Option>
          </Sidebar>
          {view}
        </Main>
      </SectionMain>
    </Container>
  );
};

export default Profile;
