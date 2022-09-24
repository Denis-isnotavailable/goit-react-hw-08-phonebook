import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ContactListStyled } from "components/ContactList/ContactList.styled";
import { ContactItem } from "components/ContactItem/ContactItem";

export class ContactList extends Component {

    render() {

        return (
            <ContactListStyled>
                {this.props.contacts.map(({ id, name, number }) => {
                    return <ContactItem key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={this.props.onDeleteContact}
                        onMouseDown={this.props.onMouseDown}
                        onMouseUp={this.props.onMouseUp} />;  
                })}                
            </ContactListStyled>
        );
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
    })),    
    onDeleteContact: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
}