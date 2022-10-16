import FadeLoader from "react-spinners/FadeLoader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectFilteredContacts, selectOperation } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";

import { ContainerStyled, ContactsNumber, BoxFilterFormButton } from "components/Container/Container.styled";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { ButtonOpenStyled } from "components/ContactForm/Form.styled";
import { Modal } from "components/Modal/Modal";


const Container = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    const operation = useSelector(selectOperation);
    const error = useSelector(selectError);
    const [ismodalOpen, setIsmodalOpen] = useState(false);
    const [changingData, setChangingData] = useState({id: null, data: {name: "", number: ""}});
    

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const openChangingModal = contactData => {
        setIsmodalOpen(true);
        setChangingData(contactData);        
    }

    const closeModal = () => {
        setIsmodalOpen(false);
        setChangingData({ id: null, data: { name: "", number: "" } });        
    }

    return (
        <ContainerStyled>
            <ContactsNumber>contacts: {contacts.length}</ContactsNumber>
            {ismodalOpen && <Modal
                onClose={closeModal}                
                contactData={changingData} />}
            <BoxFilterFormButton>
                <Filter />
                <ButtonOpenStyled type="button" onClick={() => setIsmodalOpen(true)} >+</ButtonOpenStyled>
            </BoxFilterFormButton> 
            
            {operation === "fetch" && !error ? <FadeLoader /> : <ContactList openModal={openChangingModal} /> }
        
        </ContainerStyled>);
}


export default Container;