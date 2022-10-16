import { Suspense } from "react";
import FadeLoader from "react-spinners/FadeLoader";

import { Header } from "components/Header/Header";
import { Outlet } from "react-router-dom";
import { SharedLayoutStyled } from "./SharedLayout.styled";




export const SharedLayout = () => {
    return (
        <SharedLayoutStyled>
            <Header />            
            <Suspense fallback={<FadeLoader />} >
                <Outlet />
            </Suspense>
        </SharedLayoutStyled>
    );
}