import React, { Component } from "react";
import { ContainerStyled } from "components/Container/Container.styled";

export class Container extends Component {

    render() {
        return <ContainerStyled>
            {this.props.children}
        </ContainerStyled>;
    }
}