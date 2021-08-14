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

export const Header = styled.header`
    width: 100%;
    height: 70px;
    padding-left: 30px;
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .icons {
        width: 45px;
        height: 35px;
        cursor: pointer;
        margin-left: 10px;
        margin-right: 10px;
    }
    .icon-filter {
        width: 25px;
        height: 25px;
    }
    .column-header {
        display: flex;
        align-items: center;
    }
`
export const Logo = styled.img`
    width: 151px;
    height: 29px;
    object-fit: scale-down;

    @media only screen and (max-width: 800px) {
        width: 60px;
        height: 50px;
        object-fit: scale-down;
    }
`
export const Avatar = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 49em;
`