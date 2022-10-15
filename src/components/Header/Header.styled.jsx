import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
    border: 1px solid black;
    background-color: #424040;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);    

    span {
        display: block;
        font-size: 12px;
    }

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;        
    }

    li {
        color: #acabab;
        font-size: 18px;

        :first-child {            
            margin-right: auto;
            font-size: 24px;
            /* width: 100%; */
        }

        :nth-child(2) {
            border-left: 2px solid #6c6767;
            border-right: 2px solid #6c6767;
        }

        :nth-child(4) {
            border-left: 2px solid #6c6767;
            border-right: 2px solid #6c6767;
        }
    }
`;

export const NavLinkStyled = styled(NavLink)`
    color: inherit;
    display: block;
    text-decoration: none;    

    padding: 16px 16px;
    height: 32px;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);    
   

    &.active {
        color: #ffffff;   
    }

    :hover:not(.active),
    :focus:not(.active) {
        color: #dbdad3;
        background-color: #343131;
    }
`;