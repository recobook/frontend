import React, { useEffect, useState } from "react";
import InputBase from '@material-ui/core/InputBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter,faHome} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


import { Container } from "./styles";

import Logo from '../Logo'
import Avatar from '../Avatar'
import { EloContext } from "../../providers/elos";
import { ModalContext } from "../../providers/modal";
import ModalFilter from "../ModalFilter";
import ModalProfile from "../ModalProfile";

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


const Header: React.FC = () => {

    const [storage,setStorage] = useState<Data>()

    const {
      filter,
      setFilter,
      searchElos
    } = React.useContext(EloContext)

    const {setModal,setVisible} = React.useContext(ModalContext)

    async function handleInputSearch (event:React.ChangeEvent<HTMLInputElement>){
      setFilter({
          address: `%${event.target.value}%`,
          qtd_comments: filter.qtd_comments,
          qtd_likes: filter.qtd_likes,
          category: filter.category,
          description: filter.description,
          offset: 0
        })
        await searchElos(filter)  
    }
 
  
    useEffect(()=>{
    
      setStorage( JSON.parse(`${localStorage.getItem("data")}`) as Data )
  
      setFilter({
        address: `%Praia%`,
        qtd_comments: filter.qtd_comments,
        qtd_likes: filter.qtd_likes,
        category: filter.category,
        description: `%${filter.description}%`,
        offset: filter.offset
      })
  
      searchElos(filter).then(()=>{})

    },[])    

  return (
    <Container>

      <a href={window.location.href} ><Logo src="/assets/logo.png" /></a>
      <div className="column-header">
        <InputBase
          className="input-search"
          placeholder=""
          inputProps={{ "aria-label": "search google maps" }}
          onChange={handleInputSearch}
        />

        <FontAwesomeIcon className="icons icon-filter" icon={faFilter} color="#CB6161" onClick={() => {
            setModal(ModalFilter)
            setVisible(true)
        }}

        />
      </div>
      <div className="column-header">
        <Link to="/">
          <FontAwesomeIcon className="icons" icon={faHome} color="#F3F3F3" />
        </Link>
        <Avatar src={storage?.user?.photo} alt={storage?.user?.name} onClick={()=> {
          setModal(ModalProfile)
          setVisible(true)
        }} />
      </div>
    </Container>
  );
};

export default Header;
