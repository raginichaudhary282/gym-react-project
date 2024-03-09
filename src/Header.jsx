import React from "react";
import "./styles/header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
        {/* <div className="box"> */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/classes">Classes</Link>
      <Link to="/joinus">JoinUs</Link>
      {/* </div> */}
    </nav>
  );
};

export default Header;