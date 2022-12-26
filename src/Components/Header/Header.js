import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../Firebase.init";

const auth = getAuth(app);

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
        <Link to="/orders">Order</Link>
        <Link to="/">Review</Link>
        <Link to="/register">Register</Link>
        <Link to="/about">About</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
