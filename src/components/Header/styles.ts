import styled from "styled-components";

export const Container = styled.header`
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