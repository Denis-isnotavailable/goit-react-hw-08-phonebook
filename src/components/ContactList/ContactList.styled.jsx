import styled from "styled-components";

export const ContactListStyled = styled.ul`
    li:not(:last-child) {
        margin-bottom: ${p => p.theme.space[2]}px;
    }
`;