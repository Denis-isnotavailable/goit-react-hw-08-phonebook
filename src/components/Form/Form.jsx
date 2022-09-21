import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FormStyled } from "components/Form/Form.styled";

export class Form extends Component {
    state = {    
        name: "",
        number: "",
    }

    handleChange = e => {
        const { name, value } = e.target;    
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }

    reset() {
        this.setState({ name: "", number: "", });
    }

    handleMouseDown = e => {
        e.currentTarget.style.backgroundColor = "#00bbff";
    }

    handleMouseUp = e => {
        e.currentTarget.style.backgroundColor = "#e0e0e0";
    }


    render() {
        const { name, number } = this.state;

        return (
            <FormStyled onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                </label>

                <label>
                    Number
                    <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </label>

                <button type="submit" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>Add contact</button>
            </FormStyled>
        )
    }
}

Form.propType = {
    onSubmit: PropTypes.func.isRequired,
}