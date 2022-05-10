import "./NavLinks.css";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <Link to="/" onClick={auth.logout}>
            LOGOUT
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
