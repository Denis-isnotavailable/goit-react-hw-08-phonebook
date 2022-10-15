import { Header } from "components/Header/Header";
import { Outlet } from "react-router-dom";
import { SharedLayoutStyled } from "./SharedLayout.styled";
import { Suspense } from "react";



export const SharedLayout = () => {
    return (
        <SharedLayoutStyled>
            <Header />            
            <Suspense fallback={<div>Loading contacts...</div>} >
                <Outlet />
            </Suspense>
        </SharedLayoutStyled>
    );
}