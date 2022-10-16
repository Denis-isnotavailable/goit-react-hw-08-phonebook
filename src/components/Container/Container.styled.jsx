import styled from "styled-components";

export const ContainerStyled = styled.section`
    min-height: 80vh;
    border: 3px solid black;
    border-top: none;

    background-color: #6a6767;
    color: #ffffff;

    
`;

export const ContactsNumber = styled.div`
    padding: ${p => p.theme.space[2]}px;    
    text-align: right;    
    border-bottom: 3px solid #bdb8b8;

`;

export const BoxFilterFormButton = styled.div`
    display: flex;
    align-items: center;
    padding-left: 16px;
    border-bottom: 3px solid #bdb8b8;
    justify-content: space-between;
    
`;