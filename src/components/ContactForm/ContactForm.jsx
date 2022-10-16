import PropTypes from 'prop-types';
import ScaleLoader from "react-spinners/ScaleLoader";
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { FormStyled } from "components/ContactForm/Form.styled";

import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectOperation } from 'redux/contacts/selectors';
import { addContact, changeContact } from 'redux/contacts/operations';
import { useState } from 'react';


export const ContactForm = ({ contactData }) => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);    
    const operation = useSelector(selectOperation);
    const error = useSelector(selectError);
    const [values, setValues] = useState(() => ({    
        name: contactData.data.name,
        number: contactData.data.number,
    }));
    
    
    const handleSubmit = (values, { resetForm }) => {
        const { name } = values;

        if (!contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            if (!contactData.id) {
                dispatch(addContact(values));
                !error && resetForm();
            } else {
                dispatch(changeContact({ id: contactData.id, data: values }));
                setValues({
                    name: "",
                    number: "",
                });               
            }    
                      
        } else {
            alert(`${name} is already in contacts`);
        }        
    } 

    return (
            <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={PhonebookValidationSchema}>
                <FormStyled>
                    <label>
                        Name
                        <Field
                        type="text"
                        name="name"                        
                        />
                        <ErrorMessage name="name" component="span" />
                    </label>

                    <label>
                        Number
                        <Field
                        type="tel"
                        name="number"                        
                        />
                        <ErrorMessage name="number" component="span" />
                    </label>
                    
                    {contactData.id ?
                        <button type="submit" >{operation === "change" ? <ScaleLoader color="#ffffff" height={25} /> : <>Change contact</>} </button> :
                        <button type="submit" >{operation === "add" ? <ScaleLoader color="#ffffff" height={25} /> : <>Add contact</> } </button> }
                </FormStyled>
            </Formik>
            
        )
    }


ContactForm.propTypes = {
    contactData: PropTypes.object.isRequired,
}


// const values = {    
//         name: "",
//         number: "",
//     }

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