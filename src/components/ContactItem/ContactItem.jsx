import PropTypes from 'prop-types';
import { ContactItemStyled } from "components/ContactItem/ContactItem.styled";

export const ContactItem = ({ id, name, number, onDeleteContact, onMouseDown, onMouseUp }) => {

    return (
            <ContactItemStyled >
                {name}: {number}
                <button type="button"
                    onClick={() => onDeleteContact(id)}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                >
                    Delete
                </button>
            </ContactItemStyled>
        );
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
}