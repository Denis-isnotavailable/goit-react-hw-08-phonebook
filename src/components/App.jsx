import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Container } from "components/Container/Container";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { handleMouseDown, handleMouseUp } from "../utils/HandleMouse";


const LOCAL_STORAGE = "myContacts";

export const App = () => {

  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE)) ??
                                            [
                                              { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
                                              { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
                                              { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
                                              { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
                                            ]
                                          );
  const [filter, setFilter] = useState("");  

  useEffect(() => {    
    window.localStorage.setItem(LOCAL_STORAGE, JSON.stringify(contacts));
  }, [contacts]);  

  const formSubmitHandler = data => {    
    let contactId = nanoid();    
    const { name, number } = data;
    
    if (!contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      setContacts(prevState => ([...prevState, { id: contactId, name: name, number: number }]));      
    } else {
      alert(`${name} is already in contacts`);
    } 
  }

  const handleFilterChange = data => {    
    setFilter(data);
  };

  const deleteContact = contactId => {    
    setContacts(prevState => (prevState.filter(contact => contact.id !== contactId)));    
  }

  function filteredContacts() {    
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  return (
      <Container>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={formSubmitHandler} onMouseDown={ handleMouseDown } onMouseUp={ handleMouseUp } />       

        <h2>Contacts</h2>

        <Filter onFilterChange={handleFilterChange} filter={ filter } />

        <ContactList contacts={ filteredContacts() } onDeleteContact={deleteContact} onMouseDown={ handleMouseDown } onMouseUp={ handleMouseUp } />
      </Container>
    ); 
};
