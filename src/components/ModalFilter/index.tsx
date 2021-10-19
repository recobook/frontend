import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle ,faPlusCircle,faMinusCircle} from "@fortawesome/free-solid-svg-icons";

import { Container, Header, Title,TitleCategory, AreaOptions,Label, Option,Wrapper,InputDscription,Button,InputCategory } from "./styles";
import { ModalContext } from "../../providers/modal";
import { EloContext } from "../../providers/elos";


const ModalFilter: React.FC = () => {
 
  return (
    <EloContext.Consumer>
     {
       elo => (
        <ModalContext.Consumer>
        {(modal) => (
          <Container>
            <Header>
              <Title>Filtros</Title>
              <FontAwesomeIcon
                className="icons"
                icon={faTimesCircle}
                color="#5A5A5A"
                onClick={()=> modal.setVisible(false)}
              />
            </Header>
            <AreaOptions>
              <TitleCategory>Comumns</TitleCategory>
              <Option>
                <Label>Curtidas</Label>
                <Wrapper>
                  <FontAwesomeIcon className="icons" icon={faMinusCircle} color="#4E4E4E" onClick={_=> {
                    const likes = elo.filter.qtd_likes === 0 ? 0 : elo.filter.qtd_likes - 1;

                    elo.setFilter({
                      address: elo.filter.address,
                      category: elo.filter.category,
                      description: elo.filter.description,
                      offset: elo.filter.offset,
                      qtd_likes: likes,
                      qtd_comments: elo.filter.qtd_comments,
                    })

                  }}  />
                  <span>{elo.filter.qtd_likes}</span>
                  <FontAwesomeIcon className="icons" icon={faPlusCircle} color="#4E4E4E"   onClick={_=> {
                    const likes = elo.filter.qtd_likes + 1;

                    elo.setFilter({
                      address: elo.filter.address,
                      category: elo.filter.category,
                      description: elo.filter.description,
                      offset: elo.filter.offset,
                      qtd_likes: likes,
                      qtd_comments: elo.filter.qtd_comments,
                    })

                  }} />
                </Wrapper>
              </Option>
              <Option>
                <Label>Comentarios</Label>
                <Wrapper>
                  <FontAwesomeIcon className="icons" icon={faMinusCircle} color="#4E4E4E" onClick={_=> {
                    const comments = elo.filter.qtd_comments === 0 ? 0 : elo.filter.qtd_comments - 1;

                    elo.setFilter({
                      address: elo.filter.address,
                      category: elo.filter.category,
                      description: elo.filter.description,
                      offset: elo.filter.offset,
                      qtd_likes: elo.filter.qtd_likes,
                      qtd_comments: comments,
                    })

                  }} />
                    <span>{elo.filter.qtd_comments}</span>
                  <FontAwesomeIcon className="icons" icon={faPlusCircle} color="#4E4E4E" onClick={_=> {
                    const comments = elo.filter.qtd_comments + 1;

                    elo.setFilter({
                      address: elo.filter.address,
                      category: elo.filter.category,
                      description: elo.filter.description,
                      offset: elo.filter.offset,
                      qtd_likes: elo.filter.qtd_likes,
                      qtd_comments: comments,
                    })

                  }} />
                </Wrapper>
              </Option>
              <Option>
                <Label>Descrição</Label>
                <InputDscription
                  defaultValue=""
                  type="text"
                  onChange={(e)=> {

                    elo.setFilter({
                      address: elo.filter.address,
                      category: elo.filter.category,
                      description: `${e.target.value}`,
                      offset: elo.filter.offset,
                      qtd_likes: elo.filter.qtd_likes,
                      qtd_comments: elo.filter.qtd_comments,
                    })

                  }}
                />
              </Option>
             
              <TitleCategory>Financeiro</TitleCategory>
              <Option>
                <Label>Categoria</Label>
                <InputCategory onChange={(e)=>{

                   elo.setFilter({
                    address: elo.filter.address,
                    category: e.target.value,
                    description: elo.filter.description,
                    offset: elo.filter.offset,
                    qtd_likes: elo.filter.qtd_likes,
                    qtd_comments: elo.filter.qtd_comments,
                  })


                }}>
                    <option value="muito barato">muito barato</option>
                    <option value="barato">barato</option>
                    <option value="caro">caro</option>
                    <option value="muito caro">muito caro</option>
                </InputCategory>
              </Option>
            </AreaOptions>
            <Button onClick={async ()=> {
              modal.setVisible(false);
              elo.searchElos(elo.filter).then(()=>{});
            

            }} >Filtrar</Button>
          </Container>
        )}
      </ModalContext.Consumer>
       )
     }
    </EloContext.Consumer>
  );
};

export default ModalFilter;
