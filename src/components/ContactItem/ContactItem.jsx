import React, { Component } from "react";
import { ContactItemStyled } from "components/ContactItem/ContactItem.styled";

export class ContactItem extends Component {

    render() {
        const { id, name, number, onDeleteContact} = this.props;

        return (
            <ContactItemStyled >
                {name}: {number}
                <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
            </ContactItemStyled>
        );
    }
}