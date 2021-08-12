import styled from "styled-components";





export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white);
    display: flex;
    font-family: 'Roboto',sans-serif;
`;

interface SectionProps {
    width: string;
    backgroundColor: string
}

export const Section = styled.div<SectionProps>`
    height: 100%;
    width: ${props => props.width };
    background-color: ${props => props.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

`

export const SectionMain = styled.div<SectionProps>`
    height: 100%;
    width: ${props => props.width };
    background-color: ${props => props.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
`
export const Form = styled.form`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

`