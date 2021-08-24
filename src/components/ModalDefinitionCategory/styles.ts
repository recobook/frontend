import styled from "styled-components";

export const Container = styled.form `
    max-width: 594px;
    max-height: 537px;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 0.5em;
`;

export const Header = styled.header `
    display: flex;
    width: 100%;
    height: 61px;
    border: 0.9px solid #D6D6D6;
    align-items: center;
    padding-right: 10px;
    justify-content: space-between;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    .icons {
        width: 38.75px;
        height: 38.75px;
        cursor: pointer;
        margin-left: 10px;
    }
`
export const Title = styled.h2`
    width: 100%;
    height: 100%;
    font-size: 19px;
    font-family: Roboto,sans-serif;
    text-align: center;
    line-height: 55px;
    align-items: center;  
`;

export const AreaOptions = styled.ul `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`
export const Option = styled.li `
    border: 1px solid #D6D6D6;
    list-style-type: none;
    padding-left: 10px;
    background-color: #F2F2F2;
    max-width: 478px;
    width: 100%;
    line-height: 60px;
    height: 58px;
    border-radius: 0.4em;
    margin-top: 15px;
    cursor: pointer;

    &:hover {
        border: 2px solid #84BCF3;
    }

`