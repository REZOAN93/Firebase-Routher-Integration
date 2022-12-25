import React from "react";
import useFirebase from "../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h3>Please Login</h3>
      <div className="googlesign">
        <button onClick={signInWithGoogle}>Google Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" name="" id="" />
        <br />
        <input type="password" placeholder="Password" name="" id="" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
