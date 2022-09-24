import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { FormStyled } from "components/ContactForm/Form.styled";

export class ContactForm extends Component {
    // state = {    
    //     name: "",
    //     number: "",
    // }

    values = {    
        name: "",
        number: "",
    }
    
    handleSubmit = (values, { resetForm }) => {        
        this.props.onSubmit(values);
        resetForm();
    }

    handleMouseDown = e => {
        e.currentTarget.style.backgroundColor = "#00bbff";
    }

    handleMouseUp = e => {
        e.currentTarget.style.backgroundColor = "#e0e0e0";
    }


    render() {        
        const namePattern = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
        const phonePattern = "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
        const PhonebookValidationSchema = Yup.object().shape({
            name: Yup.string()
                .matches(namePattern, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
                .min(2, 'Too Short!')
                .max(70, 'Too Long!')
                .required('Required'),
            number: Yup.string()
                .matches(phonePattern, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")    
                .required('Required'),
        });

        return (
            <Formik initialValues={this.values} onSubmit={this.handleSubmit} validationSchema={PhonebookValidationSchema}>
                <FormStyled>
                    <label>
                        Name
                        <Field
                        type="text"
                        name="name"                        
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        // required
                        />
                        <ErrorMessage name="name" component="span" />
                    </label>

                    <label>
                        Number
                        <Field
                        type="tel"
                        name="number"                        
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        // required
                        />
                        <ErrorMessage name="number" component="span" />
                    </label>

                    <button type="submit" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>Add contact</button>
                </FormStyled>
            </Formik>
            
        )
    }
}

// export class ContactForm extends Component {
//     state = {    
//         name: "",
//         number: "",
//     }

//     handleChange = e => {
//         const { name, value } = e.target;    
//         this.setState({ [name]: value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//         this.reset();
//     }

//     reset() {
//         this.setState({ name: "", number: "", });
//     }

//     handleMouseDown = e => {
//         e.currentTarget.style.backgroundColor = "#00bbff";
//     }

//     handleMouseUp = e => {
//         e.currentTarget.style.backgroundColor = "#e0e0e0";
//     }


//     render() {
//         const { name, number } = this.state;

//         return (
//             <FormStyled onSubmit={this.handleSubmit}>
//                 <label>
//                     Name
//                     <input
//                     type="text"
//                     name="name"
//                     value={name}
//                     onChange={this.handleChange}
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                     required
//                     />
//                 </label>

//                 <label>
//                     Number
//                     <input
//                     type="tel"
//                     name="number"
//                     value={number}
//                     onChange={this.handleChange}
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                     required
//                     />
//                 </label>

//                 <button type="submit" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>Add contact</button>
//             </FormStyled>
//         )
//     }
// }

ContactForm.propType = {
    onSubmit: PropTypes.func.isRequired,
}