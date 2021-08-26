import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    .container-mini-main {
        width: 217px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .container-mini-avatar {
        display: flex;
        font-size: 14px;
        flex-direction: column;
        align-items: center;
        margin-left: 20px;
        p {
            width:  100%;
        }
    }

    .container-mini-description {
        width: 100%;
        margin-top: 10px;
    }


    @media only screen  and (max-width: 800px) {
        display: none;
    }
`