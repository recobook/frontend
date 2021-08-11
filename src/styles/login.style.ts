import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: var(--white);
`
export const SectionLogin = styled.section`
    height: 100%;
    width: 100%;
    background-color: var(--white);
`
export const SectionCreateAccount = styled.section`
    height: 100%;
    width: 69.73684210526315%;
    background-color: var(--red);
    display: flex;
    flex-direction: column;
    justify-content:  space-evenly;
    align-items: center;
`
export const Title = styled.h2`
    color: var(--white);
    font-family: var(--font-family);
    font-size: 36px;

    &::after {
    content: '';
    display: block;
    width: 80px;
    height: 6px;
    background-color: var(--white);
    margin: 0 auto;
  }

`
export const Paragraph = styled.p`
    text-align: center;
    text-align: justify;
    font-size: 16px;
    font-family: var(--font-family);
    color: var(--white);
    width: 80%;
    

`
export const ButtonWhite = styled.button`
    width: 270px;
    height: 60px;
    color: var(--red);
    background-color: var(--white);
    border-radius: 7px;
    font-family: var(--font-family);
    font-size: 18px;

`