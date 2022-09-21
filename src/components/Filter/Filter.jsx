import React, { Component } from "react";
import { FilterStyled } from "components/Filter/Filter.styled";

export class Filter extends Component {

    handleChange = e => {
        const { value } = e.target;
        this.props.onChange(value);        
    };

    render() {
        return (
            <FilterStyled>
                <p>Find contacts by name</p>
                <input
                    type="text"
                    name="filter"
                    onChange={this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"              
                />
            </FilterStyled>
        );
    }
}