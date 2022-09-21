import styled from "styled-components";

export const ContactItemStyled = styled.li`
    button {
        margin-left: ${p => p.theme.space[3]}px;
        border-radius: ${p => p.theme.radii[0]}px;
        cursor: pointer;
    }
`;