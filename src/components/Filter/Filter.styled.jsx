import styled from "styled-components";

export const FilterStyled = styled.div`
    p {
        margin-bottom: ${p => p.theme.space[2]}px;
        font-size: ${p => p.theme.fontSizes[3]}px;
        font-weight: ${p => p.theme.fontWeights.middle};
    }
`;