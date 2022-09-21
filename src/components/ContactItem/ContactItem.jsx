import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ContactItemStyled } from "components/ContactItem/ContactItem.styled";

export class ContactItem extends Component {

    handleMouseDown = e => {
        e.currentTarget.style.backgroundColor = "#00bbff";
    }

    handleMouseUp = e => {
        e.currentTarget.style.backgroundColor = "#e0e0e0";
    }

    render() {
        const { id, name, number, onDeleteContact} = this.props;

        return (
            <ContactItemStyled >
                {name}: {number}
                <button type="button" onClick={() => onDeleteContact(id)} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>Delete</button>
            </ContactItemStyled>
        );
    }
}

ContactItem.propType = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}