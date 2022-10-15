import styled from "styled-components";

export const ContainerStyled = styled.section`
    height: 100vh;
    border: 3px solid black;
    border-top: none;
    /* padding-top : ${p => p.theme.space[3]}px; */
    /* padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px; */
    /* padding-bottom: ${p => p.theme.space[5]}px; */

    background-color: #6a6767;
    color: #ffffff;

    
`;

export const ContactsNumber = styled.div`
    padding: ${p => p.theme.space[2]}px;    
    text-align: right;    
    border-bottom: 1px solid #bdb8b8;

`;

export const BoxFilterFormButton = styled.div`
    display: flex;
    align-items: center;
    padding-left: 16px;
    border-bottom: 1px solid #bdb8b8;
    justify-content: space-between;
    
`;