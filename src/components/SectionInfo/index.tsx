import React,{useState} from "react";

import { Container } from "./styles";

import Avatar from '../Avatar'

interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    photo: string;
    bio: string;
}

interface Data {
    error: boolean
    message: string
    user: User | null
    token: string
}

const SectionInfo: React.FC = () => {
   
    const [storage,setStorage] = useState<Data>()

    React.useEffect(()=>{

       setStorage(JSON.parse(`${localStorage.getItem("data")}`) as Data)

    },[])
    

  return (
    <Container>
      <div className="container-mini-main">
        <Avatar  src={storage?.user?.photo} alt={storage?.user?.name} />
        <div className="container-mini-avatar">
          <p>{storage?.user?.name}</p>
          <p>
            <strong>{storage?.user?.username}</strong>
          </p>
        </div>
      </div>
      <span className="container-mini-description">{storage?.user?.bio}</span>
    </Container>
  );
};

export default SectionInfo;
