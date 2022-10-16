import PropTypes from 'prop-types';
import { ContactListStyled } from "components/ContactList/ContactList.styled";
import { ContactItem } from "components/ContactItem/ContactItem";
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';


export const ContactList = ({ openModal }) => {
    const contacts = useSelector(selectFilteredContacts);    

    return (
        <ContactListStyled>
            {contacts.map(({ id, name, number }) => {
                return <ContactItem key={id}
                    id={id}
                    name={name}
                    number={number}
                    openModal={openModal}
                />;
            })}
        </ContactListStyled>
    );
};

ContactList.propTypes = {
    openModal: PropTypes.func.isRequired,
}