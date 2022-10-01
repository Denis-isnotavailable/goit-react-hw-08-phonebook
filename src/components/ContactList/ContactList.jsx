import PropTypes from 'prop-types';
import { ContactListStyled } from "components/ContactList/ContactList.styled";
import { ContactItem } from "components/ContactItem/ContactItem";

export const ContactList = ({contacts, onDeleteContact, onMouseDown, onMouseUp }) => {

    return (
            <ContactListStyled>
                {contacts.map(({ id, name, number }) => {
                    return <ContactItem key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={onDeleteContact}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp} />;  
                })}                
            </ContactListStyled>
        );
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