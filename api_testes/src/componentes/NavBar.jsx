import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="menu_principal">
        <Link to="/Home">Home</Link>
        <Link to="/Page01">Pagina 01</Link>
        <Link to="/Page02">Pagina 02</Link>
      </nav>
    );
  }
}

export default NavBar;
