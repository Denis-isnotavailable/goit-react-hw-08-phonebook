import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Container } from "components/Container/Container";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

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

  formSubmitHandler = data => {    
    let contactId = nanoid();
    const { contacts } = this.state;
    const { name, number } = data;

    // this.setState(({ contacts }) => {
    //   if (contacts.some(contact => contact.name === name)) {
    //     return alert(`${name} is already in contacts`);
    //   } 
    //   return { contacts: [...contacts, { id: contactId, name: name, number: number }] };
    // });
    
    if (!contacts.some(contact => contact.name === name)) {
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

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHandler} />        

        <h2>Contacts</h2>

        <Filter onChange={this.handleFilterChange} />

        <ContactList contacts={ this.state.contacts } filter={ this.state.filter } onDeleteContact={this.deleteContact} />  
      </Container>
    );
  }  
};
