import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link to="/"> Home </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/login"> Login </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/bitcoinrates"> Bitcoin Rates </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};
