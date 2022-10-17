import { Field, Formik, ErrorMessage } from "formik";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { register } from "redux/auth/operations";
import { selectIsAuthLoading, } from "redux/auth/selectors";
import { SignUpFormStyled } from "./SignUp.styled";



const SignUp = () => {
    const dispatch = useDispatch();
    const isAuthLoading = useSelector(selectIsAuthLoading);
    // const errorAuth = useSelector(selectAuthError);

    const handleSubmit = (values, ) => {        
        // console.log(values);
        dispatch(register(values));        
    }

//     {
//   "name": "Adriansssssss Cross",
//   "email": "acrosssssss@mail.com",
//   "password": "examplepwd12345"
// }
    // {name: 'Rosie Simpson', email: 'dsfbfg@gmail.com', password: '123456йцукен'}


    return (
        <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={SignUpValidationSchema} >
            <SignUpFormStyled>
                <label>
                    Name
                    <Field type="text" name="name" placeholder="Enter your name" />
                    <ErrorMessage name="name" component="span" />
                </label>

                <label>
                    Email
                    <Field type="email" name="email" placeholder="Enter your email" />
                    <ErrorMessage name="email" component="span" />
                </label>

                <label>
                    Password
                    <Field type="password" name="password" placeholder="Enter your password" />
                    <ErrorMessage name="password" component="span" />
                </label>

                <button type="submit"> { isAuthLoading ? <ScaleLoader color="#ffffff" height={25} /> : <>Sign Up</> } </button>
            </SignUpFormStyled>
        </Formik>        
    )
}


const values = {    
    name: "",
    email: "",
    password: "",
}
const namePattern = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const SignUpValidationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(namePattern, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan")
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('Required'),
});

export default SignUp;