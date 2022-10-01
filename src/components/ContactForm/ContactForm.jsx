import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { FormStyled } from "components/ContactForm/Form.styled";


const values = {    
        name: "",
        number: "",
    }

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


export const ContactForm = ({ onSubmit, onMouseDown, onMouseUp }) => {
    
    const handleSubmit = (values, { resetForm }) => {        
        onSubmit(values);
        resetForm();
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

                    <button type="submit" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>Add contact</button>
                </FormStyled>
            </Formik>
            
        )
    }


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onMouseUp: PropTypes.func.isRequired,
}