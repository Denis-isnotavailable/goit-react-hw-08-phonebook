import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ContainerStyled } from "components/Container/Container.styled";

export class Container extends Component {

    render() {
        return <ContainerStyled>
            {this.props.children}
        </ContainerStyled>;
    }
}


Container.propTypes = {
    children: PropTypes.node.isRequired,
}