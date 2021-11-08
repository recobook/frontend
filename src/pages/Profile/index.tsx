import React from "react";
import Header from "../../components/Header";
import api_core from "../../utils/api_core";
import { storage } from "../../utils/storage";
import { v4 as uuidv4 } from "uuid";

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
import api_dobby from "../../utils/api_dobby";

const EditProfile: React.FC = () => {
  const [name, setName] = React.useState(storage.data.user.name);
  const [username, setUsername] = React.useState(storage.data.user.username);
  const [bio, setBio] = React.useState(storage.data.user.bio);
  const [email, setEmail] = React.useState(storage.data.user.email);
  const [images, setImages] = React.useState<FileList | null>(null);
  const [message, setMessage] = React.useState("");

  function validate() {
    return true;
  }

  async function handleClick() {
    if (validate()) {
      const formDataImages = new FormData();

      const payload = {
        name: name,
        email: email,
        username: username,
        photo: storage.data.user.photo,
        bio: bio,
      };

      if (images) {
        if (images?.length) {
          for (let index = 0; index < images.length; index++) {
            const image = images.item(index);
            if (image) {
              const uuid = uuidv4();
              const filename = `${uuid}${image.name}`.replaceAll(" ", "");
              payload.photo = `http://0.0.0.0:1993/users/${filename}`;
              formDataImages.append(filename, image, filename);
            }
          }
        }
        await api_dobby.post("/user", formDataImages, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${storage.data.token}`,
          },
        });
      }

      localStorage.setItem(
        "data",
        JSON.stringify({
          error: storage.data.error,
          message: storage.data.message,
          user: {
            id: storage.data.user.id,
            name: payload.name,
            email: payload.email,
            username: payload.username,
            photo: payload.photo,
            bio: payload.bio,
          },
          token: storage.data.token,
        })
      );

      const { data } = await api_core.put<{ error: boolean; message: string }>(
        `/user/${storage.data.user.id}`,
        payload,
        {
          headers: {
            Authorization: storage.data.token,
          },
        }
      );
      if (data.error) {
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    }
  }

  return (
    <ViewEditProfileContianer>
      <div>
        <Inline>
          <Label htmlFor="photo">Photo</Label>
          <Input
            id="photo"
            type="file"
            accept=".png,.jpg,.jpeg,.svg"
            onChange={(event) => setImages(event.target.files)}
            style={{ border: "none" }}
          />
        </Inline>
        <Inline>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Inline>
        <Inline>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Inline>
        <Inline>
          <Label htmlFor="bio">Bio</Label>
          <InputTextArea
            id="bio"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
        </Inline>
        <Inline>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Inline>
        {message}
      </div>
      <Button onClick={handleClick}>Submit</Button>
    </ViewEditProfileContianer>
  );
};

const ChangedPassword: React.FC = () => {
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");

  function validade() {
    if (password.length === 0) {
      setMessage("A senha não pode ser em branco");
    }

    if (password.length < 8) {
      setMessage("A senha deve ter no mínimo 8 caracteres");
    }

    return true;
  }
  async function handleClick() {
    if (validade()) {
      const payload = {
        name: storage.data.user.name,
        email: storage.data.user.email,
        username: storage.data.user.username,
        password: password,
        photo: storage.data.user.photo,
        bio: storage.data.user.bio,
      };

      const { data } = await api_core.put<{ error: boolean; message: string }>(
        `/user/${storage.data.user.id}`,
        payload,
        {
          headers: {
            Authorization: storage.data.token,
          },
        }
      );

      if (data.error) {
        setMessage("Falha em atualizar a senha");
      } else {
        setMessage("Senha atualizada com sucesso");
      }
    }
  }

  return (
    <ViewChangedPassword>
      <div>
        <Inline>
          <Label htmlFor="password-new">New Password</Label>
          <Input
            id="password-new"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Inline>
        {message}
      </div>
      <Button onClick={handleClick}>Change Password</Button>
    </ViewChangedPassword>
  );
};

const Profile: React.FC = () => {
  const [view, setView] = React.useState<JSX.Element | null>(<EditProfile />);

  return (
    <Container>
      <SectionMain backgroundColor="var(--white)">
        <Header />
        <Main>
          <Sidebar>
            <Option onClick={() => setView(<EditProfile />)}>
              <p>Edit Profile</p>
            </Option>
            <Option onClick={() => setView(<ChangedPassword />)}>
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
