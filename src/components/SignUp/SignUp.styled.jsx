import styled from "styled-components";
import { Form } from 'formik';

export const SignUpFormStyled = styled(Form)`

    padding: 32px;
    height: 80vh;

    color: #ffffff;
    background-color: #6a6767;
    background-image: url(https://cdn-icons-png.flaticon.com/512/2448/2448997.png);
    background-repeat: no-repeat;

    label {
        display: block;
        height: 48px;        
        padding-bottom: 48px;       
    }

    input {
        display: block;
        margin-top: 8px;
        
        padding: 0 16px;
        width: 250px;
        height: 24px;        
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
        font-size: 24px;
        color: #ffffff;
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