import { useDispatch, useSelector } from "react-redux";
import { FaSignOutAlt } from "react-icons/fa";
import { logout } from "redux/auth/operations";
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from "redux/auth/selectors";
import { HeaderStyled, NavLinkStyled } from "./Header.styled";



export const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);    
    // console.log(user);

    return (
        <HeaderStyled>
            <nav>
                <ul>
                    <li><NavLinkStyled to="/" end >Phonebook</NavLinkStyled></li>
                    {!isLoggedIn && !isRefreshing && <li><NavLinkStyled to="/signUp" >Sign Up</NavLinkStyled></li>}
                    {!isLoggedIn && !isRefreshing && <li><NavLinkStyled to="/signIn" >Log In</NavLinkStyled></li>}
                    {isLoggedIn && <li><NavLinkStyled to="/contacts" ><span>{ user.name }</span> Contacts</NavLinkStyled></li>}
                    {isLoggedIn && <li><NavLinkStyled
                        to="/signIn"
                        end
                        onClick={() => dispatch(logout())} >
                        {/* <span>{ user.email }</span> */}
                        <FaSignOutAlt size={35}/>
                    </NavLinkStyled></li>}
                </ul>
                
            </nav>
        </HeaderStyled>
    );
}