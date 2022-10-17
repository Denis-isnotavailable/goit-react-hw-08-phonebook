import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { SharedLayout } from "./SharedLayout/SharedLayout";

import { refresh } from "redux/auth/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const HomePage = lazy(() => import("./HomePage/HomePage"));
const SignUp = lazy(() => import("./SignUp/SignUp"));
const SignIn = lazy(() => import("./SignIn/SignIn"));
const Container = lazy(() => import("components/Container/Container"));

export const App = () => {
  const dispatch = useDispatch();  

  useEffect(() => {
      dispatch(refresh());
  });

  return (   
    <Routes>
      
      <Route path="/" element={<SharedLayout />} >
        <Route path="/" element={<HomePage />} />        
        <Route path="/signUp" element={<RestrictedRoute redirectTo="/contacts" component={<SignUp />} />} />
        <Route path="/signIn" element={<RestrictedRoute redirectTo="/contacts" component={<SignIn />} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/signIn" component={<Container />} />} />
        {/* <Route path="*" element={<div>Not found</div>} /> */}
      </Route>      
      
    </Routes>      
    ); 
};
