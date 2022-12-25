import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { users, handlesignOut } = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
        <Link to="/">Order</Link>
        <Link to="/">Review</Link>
        <Link to="/register">Register</Link>
        <span>{users.displayName && users.displayName}</span>
        {users?.uid ? (
          <button onClick={handlesignOut}>Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
