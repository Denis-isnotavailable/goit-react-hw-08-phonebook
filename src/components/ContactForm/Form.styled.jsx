import styled from "styled-components";
import { Form } from 'formik';

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
    border: 1px solid black;
    height: 240px;
    width: 260px;
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
        width: 100%;
        margin-top: 8px;    
        border-radius: 5px;
        border: 1px solid #bdbdbd;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;        

        :focus {
            color: #212529;
            background-color: #fff;
            border-color: #bdbdbd;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(213, 212, 212, 0.25);
        }
        
    }

    span {        
        color: ${p => p.theme.colors.red};
    }

    button {
        margin-top: ${p => p.theme.space[4]}px;        
        width: 150px;
        height: 50px;
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