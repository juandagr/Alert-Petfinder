import { Link } from "react-router-dom";

import "./header.styles.scss";

import React from "react";

/**
 * header component
 */
const Header = () => {
  return (
    <div className="header">
      <Link className="title" to="/">
        ALERT PETFINDER
      </Link>
      <Link className="title" to="/about">
        About
      </Link>
    </div>
  );
};

export default Header;
