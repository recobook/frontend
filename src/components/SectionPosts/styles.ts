import styled from "styled-components";

export const Container = styled.section`
    width: 620px;
    height: 854px;
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
    margin-top: 30px;

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

    .wrapper-item {
       width: 100%;
       display: flex;
       justify-content: center;
    }   
`

export const PostLikes = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    padding-left:10px;
    margin-bottom: 20px;
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
        justify-content: space-between;
       padding-right: 10px;    
    }

    li > .icons {
        display: none;
    }

    li:hover > .icons {
        display: block;
    }

    li p {
        padding-left: 10px;
        margin-top: 2px;
        text-align: justify;
    }

    li div {
        display: flex;
    
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