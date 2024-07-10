import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            NLU.com
          </NavLink>
          <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/contacts" className="nav-link">
                Contacts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/divisions" className="nav-link">
                Divisions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/admin" className="nav-link">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;