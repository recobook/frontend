import styled from "styled-components";

export const Container = styled.div `
    max-width: 814px;
    max-height: 695px;
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

export const TitleCategory = styled.h4`
    width: 100%;
    height: 30px;
    font-size: 19px;
    font-family: Roboto,sans-serif;
    text-align: start;
    line-height: 55px;
    align-items: center;  
    padding-left: 20px;
`;

export const Label = styled.label`
    font-size: 19px;
    font-family: Roboto,sans-serif;
    text-align: center;
    line-height: 55px;
    align-items: center;  
    padding-left: 20px;
`;


export const AreaOptions = styled.ul `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`
export const Option = styled.li `
    list-style-type: none;
    padding-left: 10px;
    max-width: 814px;
    width: 100%;
    line-height: 60px;
    height: 45px;
    border-radius: 0.4em;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`
export const Wrapper = styled.div`
    display: flex;
    height: 32px;
    width: 124px;
    align-items: center;


    .icons {
        margin-left: 10px;
        margin-right: 10px;
        width: 31px;
        height: 31px;
        cursor: pointer;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    
    input[type=number] {
        -moz-appearance: textfield;
        width: 100%;
    }

`

export const InputDscription = styled.input`
    max-width: 127px;
    height: 27px;
    border: none;
    background-color: #EFEFEF;
    font-display: Roboto,sans-serif;
    font-weight: bold;
    border-radius: 0.5em;
`

export const Button = styled.button`
    max-width: 478px;
    max-height: 54px;
    width: 100%;
    height: 54px;
    background-color: #E34D4D;
    font-size: 18px;
    border-radius: 0.3em;
    color: #ffffff;
    cursor: pointer;
    margin: 10px;
`