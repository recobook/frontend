import styled from "styled-components";

export const Container = styled.div`
    max-width: 594px;
    max-height: 537px;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 0.5em;
    align-items: center;
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
export const Textarea = styled.textarea`
    width: 100%;
    height: 50%;
    padding-top: 5px;
    padding-left: 15px;
    font-family: Roboto,sans-serif;
    font-size: 18px;
    outline: none;
`