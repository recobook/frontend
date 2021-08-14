import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white);
    display: flex;
    font-family: 'Roboto',sans-serif;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        height: 1200px;
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

interface SectionProps {
    backgroundColor: string
}

export const Section = styled.div<SectionProps>`
    height: 100%;
    width: 40%;
    background-color: ${props => props.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (max-width: 800px) {
        width: 100%;
    }

`

interface SectionMainProps {
    backgroundColor: string
}

export const SectionMain = styled.div<SectionMainProps>`
    height: 100%;
    width: 60.43927648578811%;
    background-color: ${props => props.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`


interface TitleProps {
    fontSize: string;
    color: string
}


export const Title = styled.h2<TitleProps>`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};

    &::after {
        content: '';
        border-bottom: 3px solid  ${props => props.color};
        width: 80px;
        height: 8px;
        display: block;
        margin: 0 auto;
    } 

    @media only screen and (max-width: 800px) {
        font-size: 36px;
    }
`

interface ButtonProps {
    width: string
    height: string
    color: string
    backgroundColor: string
    fontSize: string
}

export const Button = styled.button<ButtonProps>`
    width: ${props => props.width };
    height: ${props => props.height };
    background-color: ${props => props.backgroundColor};
    font-size: ${props => props.fontSize};
    border-radius: 0.3em;
    color: ${props => props.color};
    cursor: pointer;
`

export const Header = styled.header`
    width: 100%;
    height: 70px;
    padding-left: 30px;
    margin-bottom: 35px;
    display: flex;
    align-items: center;
`
export const Logo = styled.img`
    width: 151px;
    height: 29px;
    object-fit: scale-down;
`
export const Form = styled.form`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

`