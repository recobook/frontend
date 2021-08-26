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
    justify-content: space-evenly;
`