import { Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { SignInFormStyled } from "./SignIn.styled";
import { login } from "redux/auth/operations";
import { selectIsRefreshing } from "redux/auth/selectors";


const SignIn = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);
    
    const handleSubmit = (values, { resetForm }) => {
       
        console.log(values);
        dispatch(login(values));
        resetForm();
    };

    return (
        <>
            { !isRefreshing &&
            <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={SignInValidationSchema}>
                <SignInFormStyled>
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

                    <button type="submit">Sign In</button>
                </SignInFormStyled>
            </Formik > }
        </>
        
        
    );
};


const values = {
    email: "",
    password: "",
};

const SignInValidationSchema = Yup.object().shape({    
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('Required'),
});


export default SignIn;