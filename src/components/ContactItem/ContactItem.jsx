import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ContactItemStyled } from "components/ContactItem/ContactItem.styled";

export class ContactItem extends Component {

    render() {
        const { id, name, number, onDeleteContact} = this.props;

        return (
            <ContactItemStyled >
                {name}: {number}
                <button type="button"
                    onClick={() => onDeleteContact(id)}
                    onMouseDown={this.props.onMouseDown}
                    onMouseUp={this.props.onMouseUp}
                >
                    Delete
                </button>
            </ContactItemStyled>
        );
    }
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
}