import styled from "styled-components";

export const ContactItemStyled = styled.li`
    border-bottom: 1px solid #bdb8b8;
    display: flex;

    div {
        width: 100%;
    }

    p {
        margin-top: 8px;
        margin-bottom: 8px;
        margin-left: 16px;
        margin-right: 16px;
    }
`;


export const PhoneButton = styled.button`
    margin: 0;
    padding: 10px;
    border: none;
    border-right: 1px solid #bdb8b8;
    width: 60px;
    height: 60px;
    background-color: #4f5152;
    cursor: pointer;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: #6b6b71;       
    }
`;

export const SettingsButton = styled.button`
    margin: 0;
    padding: 10px;
    border: none;
    border-left: 1px solid #bdb8b8;
    width: 60px;
    height: 60px;
    background-color: #4f5152;
    cursor: pointer;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: #6b6b71;       
    }
`;

export const DeleteButton = styled.button`
    margin: 0;
    padding: 10px;
    border: none;
    border-left: 1px solid #bdb8b8;
    width: 60px;
    height: 60px;
    background-color: #524f50;
    cursor: pointer;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: #6b6b71;       
    }
`;