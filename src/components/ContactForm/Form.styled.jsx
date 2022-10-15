import styled from "styled-components";
import { Form } from 'formik';

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
    border: 1px solid black;
    height: 240px;
    width: 280px;
    border-radius: ${p => p.theme.radii[0]}px;
    background-color: #6a6767;
    color: #ffffff;

    label {
        display: block;
        height: 48px;
        /* margin-bottom: ${p => p.theme.space[3]}px;  */
        padding-bottom: ${p => p.theme.space[4]}px;       
        
    }

    input {
        display: block;
        width: 200px;
        border-radius: 5px;
        
    }

    span {
        color: ${p => p.theme.colors.red};
    }

    button {
        margin-top: ${p => p.theme.space[4]}px;
        padding: 16px;
        border-radius: ${p => p.theme.radii[0]}px;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        color: #c7c6c6;
        border: 1px solid #5b5b5e;        
    
        background-color: #4f5152;

        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

        :hover,
        :focus {
            background-color: #6b6b71;
            color: #ffffff;
        }
    }

`;

export const ButtonOpenStyled = styled.button`
    
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 60px;
    height: 60px;
    color: #c7c6c6;
    border: 1px solid #5b5b5e;
    font-size: 64px;
    
    background-color: #4f5152;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        background-color: #6b6b71;
        color: #ffffff;
    }
`;