import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/operations";
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from "redux/auth/selectors";
import { HeaderStyled, NavLinkStyled } from "./Header.styled";



export const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
    console.log(user);

    return (
        <HeaderStyled>
            <nav>
                <ul>
                    <li><NavLinkStyled to="/" end >Phonebook</NavLinkStyled></li>
                    {!isLoggedIn && !isRefreshing && <li><NavLinkStyled to="/signUp" >Sign Up</NavLinkStyled></li>}
                    {!isLoggedIn && !isRefreshing && <li><NavLinkStyled to="/signIn" >Sign In</NavLinkStyled></li>}
                    {isLoggedIn && <li><NavLinkStyled to="/contacts" ><span>{ user.name }</span> Contacts</NavLinkStyled></li>}
                    {isLoggedIn && <li><NavLinkStyled
                        to="/signIn"
                        end
                        onClick={() => dispatch(logout())} >
                        {/* <span>{ user.email }</span> */}
                        Sign Out
                    </NavLinkStyled></li>}
                </ul>

                {/* <NavLinkStyled to="/" end >Phonebook</NavLinkStyled>
                <NavLinkStyled to="signUp" >Sign Up</NavLinkStyled>
                <NavLinkStyled to="signIn" >Sign In</NavLinkStyled>
                <NavLinkStyled to="contacts" >Contacts</NavLinkStyled>
                <NavLinkStyled to="signIn" >Sign Out</NavLinkStyled> */}
            </nav>
        </HeaderStyled>
    );
}