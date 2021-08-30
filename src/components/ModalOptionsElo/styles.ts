import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  max-height: 218px;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 0.5em;
`;

export const Option = styled.li`
    width: 100%;
    height: 40px;   
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`