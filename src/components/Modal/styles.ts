import styled from "styled-components";

interface IContainer {
  visible: boolean
}


export const Container = styled.div<IContainer>`
  display: ${props => (props.visible ? "flex" : "none")}; 
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.4);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

