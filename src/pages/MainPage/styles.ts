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
    height: 50px;
    padding-left: 30px;
    margin-bottom: 15px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;

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
    cursor: pointer;
`
export const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
`
export const SectionInfo = styled.section`
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
export const SectionPosts = styled.section`
    width: 620px;
    height: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
    .container-create-new-elo {
        width: 602px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F3F3F3;
        border-radius: 0.5em;
        margin-bottom: 30px;

        @media only screen and (max-width: 800px) {
            width: 100%;
        }
    }
    .input-create-new-elo {
        border: 1px solid #D6D6D6;
        width: 85%;
        height: 33px;
        border-radius: 0.5em;
        padding-left: 10px;
        margin-left: 10px;
        color: #9D9D9D;
        background-color: #E2E2E2;
        border-radius: 0.5em;

        @media only screen and (max-width: 800px) {
            width: 80%;
        }
    }

    @media only screen and (max-width: 800px) {
            width: 90%;
    }
    

`
export const Post = styled.div `
    display: flex;
    flex-direction: column;
    width: 602px;
    border: 1px solid #D6D6D6;

    @media only screen and (max-width: 800px) {
        width: 100%;
    }
` 
export const PostHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: 14px;
    }
    height: 60px;
    .icons {
        width: 32px;
        height: 32px;
    }
`
export const PostCarrossel = styled.div`
    width: 100%;
    max-width: 602px;
    height: 614px;
    display: flex;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }

    img {
        max-width: 616px;
        height: 100%;

        @media only screen and (max-width: 800px) {
            max-width: 400px;
            object-fit: scale-down;
            height: 100%;
        }
    }
    video {
        width: 600px;
        height: 100%;

        @media only screen and (max-width: 900px) {
            width: 590px;
            height: 100%;
        }

        @media only screen and (max-width: 800px) {
            width: 430px;
            height: 500px;
        }


    }
 
`
export const PostLikes = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    padding-left:10px;
` 
export const PostComments = styled.div`
    width: 100%;
    height: 66px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
    li {
        list-style-type: none;
        display: flex;
        padding-left: 10px;
    }

    li p {
        padding-left: 10px;
        margin-top: 2px;
        text-align: justify;
    }
  
` 
export const PostEditorComment = styled.div`
    display: flex;
    align-items: center;
    height: 71px;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;

    .input-editor-comment {
        
        width: 395px;
        height: 42px;
        border-radius: 0.5em;
        padding-left: 10px;

        @media only screen and (max-width: 800px) {
            width: 90%;
        }

   }

   .icons {
       width: 32px;
       height: 32px;
   }
`