import PropTypes from 'prop-types';
import { ContactItemStyled } from "components/ContactItem/ContactItem.styled";
import { handleMouseDown, handleMouseUp } from "../../utils/HandleMouse";
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    function onDeleteContact(id) {        
        dispatch(deleteContact(id));       
    };

    return (
        <ContactItemStyled >
            {name}: {number}
            <button type="button"
                onClick={() => onDeleteContact(id)}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                Delete
            </button>
        </ContactItemStyled>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,    
}