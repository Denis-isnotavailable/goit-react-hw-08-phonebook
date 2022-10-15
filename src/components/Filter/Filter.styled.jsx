import styled from "styled-components";

export const FilterStyled = styled.div`
    width: 85%;

    p {
        margin-bottom: ${p => p.theme.space[2]}px;
        font-size: ${p => p.theme.fontSizes[3]}px;
        font-weight: ${p => p.theme.fontWeights.middle};
    }

    input {
        width: 93%;
        height: 24px;
        padding-left: 24px;
        padding-right: 8px;
        border-radius: 5px;
        border: 1px solid #bdbdbd;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23212529' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: 0.7% 50%;

        :focus {
            color: #212529;
            background-color: #fff;
            border-color: #bdbdbd;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(213, 212, 212, 0.25);
        }
    }
`;