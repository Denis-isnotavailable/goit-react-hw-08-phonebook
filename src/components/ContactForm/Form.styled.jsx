import styled from "styled-components";
import { Form } from 'formik';

export const FormStyled = styled(Form)`
    // display: flex;
    // flex-direction: column;

    label {
        display: block;
        margin-bottom: ${p => p.theme.space[3]}px;        
    }

    input {
        display: block;
    }

    span {
        color: ${p => p.theme.colors.red};
    }

    button {
        border-radius: ${p => p.theme.radii[0]}px;
        cursor: pointer;
    }

`;