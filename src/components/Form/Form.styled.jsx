import styled from "styled-components";

export const FormStyled = styled.form`
    // display: flex;
    // flex-direction: column;

    label {
        display: block;
        margin-bottom: ${p => p.theme.space[3]}px;        
    }

    input {
        display: block;
    }

    button {
        border-radius: ${p => p.theme.radii[0]}px;
        cursor: pointer;
    }

`;