import styled from "styled-components";

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