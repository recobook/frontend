import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white);
    display: flex;
    font-family: 'Roboto',sans-serif;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
    }

    .inputs {
        width: 460px;
        height: 60px;

        @media only screen and (max-width: 800px) {
            width: 90%;
        }
    }
    .area-options-login {
        width: 460px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: 800px) {
            width: 90%;
        }
    }
    
`;

interface SectionMainProps {
    backgroundColor: string
}

export const SectionMain = styled.div<SectionMainProps>`
    height: 100%;
    width: 100%;
    background-color: ${props => props.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    @media only screen and (max-width: 800px) {
        width: 100%;
    }

    .input-search {
        border: 1px solid #D6D6D6;
        width: 395px;
        height: 42px;
        border-radius: 0.5em;
        padding-left: 10px;

        @media only screen and (max-width: 800px) {
            width: 90%;
        }
    }
`

export const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    
`
export const Sidebar = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: #FCFCFC;
    width: 312px;
    border: 1px solid #E7E7E7;
`
export const Option = styled.li `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 55px;
    font-size: 14px;
    font-family: Roboto,sans-serif;
    
    :hover {
        border-left: 1px solid #303030;
    }
`
export const ViewEditProfileContianer = styled.div`
    max-width: 859px;
    max-height: 662px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FCFCFC;
    border: 1px solid #E7E7E7;
    justify-content: space-around;
    padding-left: 40px;
`

export const Inline = styled.div `
    display: flex;
    margin-bottom: 15px;
`

export const Label = styled.label`
    font-size: 14px;
    font-family: Roboto,sans-serif;
    width: 87px;
    margin-right: 30px;
    font-weight: bold;
`

export const Input = styled.input`
    max-width: 395px;
    width: 100%;
    height: 42px;
    border: 1px solid #D6D6D6;
`
export const InputTextArea = styled.textarea`
    max-width: 395px;
    width: 100%;
    height: 42px;
    border: 1px solid #D6D6D6;
`

export const Button = styled.button `
    background-color: #468DD2;
    width: 120px;
    height: 35px;
    color: #fff;
    border-radius: 0.5em;
    font-weight: bolder;
    cursor: pointer;
`
export const ViewChangedPassword = styled.div`
    max-width: 859px;
    max-height: 662px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FCFCFC;
    border: 1px solid #E7E7E7;
    justify-content: space-around;
    padding-left: 40px;
`
