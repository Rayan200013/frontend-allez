import { Link } from "react-router-dom";
import "../css/NavBar.css";
import SearchBar from "./SearchBar";
import logo from "../images/logo.jpg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rayan-navBar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo-allez-retour" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Category">
                categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destination">
                DESTINATION
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="#">
                HELP
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            
          </form> */}
          {/* <SearchBar /> */}

          <div className="d-flex align-items-center">
            {/* <button className=" btn-link mx-2">
              <i className="far fa-circle-user"></i> 
            </button> */}

            <button className=" btn-primary mx-2 allez-nav-search-button">
              <Link to="/SignIn">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
