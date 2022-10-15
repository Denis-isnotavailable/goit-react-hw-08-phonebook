// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";

import { ContainerStyled, ContactsNumber, BoxFilterFormButton } from "components/Container/Container.styled";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { ButtonOpenStyled } from "components/ContactForm/Form.styled";
import { Modal } from "components/Modal/Modal";
import { useState } from "react";


const Container = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    const [ismodalOpen, setIsmodalOpen] = useState(false);
    

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const closeModal = () => {
      setIsmodalOpen(false);
    }
    

    // const formSubmitHandler = data => {
    //     const { name } = data;
        
    //     if (!contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
    //     dispatch(addContact(data));      
    //     } else {
    //     alert(`${name} is already in contacts`);
    //     } 
    // }

    return (
        <ContainerStyled>
            <ContactsNumber>contacts: {contacts.length}</ContactsNumber>
            {ismodalOpen && <Modal onClose={closeModal}/>}
            <BoxFilterFormButton>
                <Filter />
                <ButtonOpenStyled type="button" onClick={() => setIsmodalOpen(true)} >+</ButtonOpenStyled>
            </BoxFilterFormButton>
            

            {/* <ContactForm onSubmit={formSubmitHandler} />        */}

            

            
            <ContactList
                // contacts={contacts}
            />
        
        </ContainerStyled>);
}


export default Container;