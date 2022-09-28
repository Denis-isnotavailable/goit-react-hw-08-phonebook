import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Container } from "components/Container/Container";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { handleMouseDown, handleMouseUp } from "../utils/HandleMouse";


const LOCAL_STORAGE = "myContacts";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    
    if (contacts) {
      this.setState({ contacts: contacts });
    }    
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem(LOCAL_STORAGE, JSON.stringify(contacts));
    }
  }

  formSubmitHandler = data => {    
    let contactId = nanoid();
    const { contacts } = this.state;
    const { name, number } = data;
    
    if (!contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      this.setState(prevState => ({ contacts: [...prevState.contacts, { id: contactId, name: name, number: number }] }));      
    } else {
      alert(`${name} is already in contacts`);
    } 
  }

  handleFilterChange = data => {    
    this.setState({ filter: data });
  };

  deleteContact = contactId => {    
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== contactId)}));    
  }

  filteredContacts() {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHandler} onMouseDown={ handleMouseDown } onMouseUp={ handleMouseUp } />       

        <h2>Contacts</h2>

        <Filter onFilterChange={this.handleFilterChange} filter={ this.state.filter } />

        <ContactList contacts={ this.filteredContacts() } onDeleteContact={this.deleteContact} onMouseDown={ handleMouseDown } onMouseUp={ handleMouseUp } />
      </Container>
    );
  }  
};
