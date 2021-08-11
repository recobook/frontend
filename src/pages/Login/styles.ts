import styled from "styled-components";





export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white);
    display: flex;
`;

interface SectionProps {
    width: string;
    backgroundColor: string
}

export const Section = styled.div<SectionProps>`
    height: 100%;
    width: ${props => props.width };
    background-color: ${props => props.backgroundColor};

`