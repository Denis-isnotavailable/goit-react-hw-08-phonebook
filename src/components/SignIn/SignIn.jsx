import { Field, Formik, ErrorMessage } from "formik";
import ScaleLoader from "react-spinners/ScaleLoader";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/auth/operations";
import { selectIsAuthLoading, selectIsRefreshing } from "redux/auth/selectors";
// import { SignInFormStyled } from "./SignIn.styled";

import { SignUpFormStyled } from "components/SignUp/SignUp.styled";




const SignIn = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);    
    const isAuthLoading = useSelector(selectIsAuthLoading); 

    console.log(isAuthLoading);
    
    const handleSubmit = (values, { resetForm }) => {
       
        console.log(values);
        dispatch(login(values));
        resetForm();
    };

    return (
        <>
            { !isRefreshing &&
            <Formik initialValues={values} onSubmit={handleSubmit} validationSchema={SignInValidationSchema}>
                <SignUpFormStyled>
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

                    <button type="submit"> { !isAuthLoading ? <ScaleLoader color="#ffffff" height={25} /> : <>Log In</> } </button>
                </SignUpFormStyled>
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