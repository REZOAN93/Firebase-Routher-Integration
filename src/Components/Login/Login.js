import React from "react";
import "./Login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../Firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h3>Please Login</h3>
      <div className="googlesign">
        <button onClick={() => handleGoogleSignIn()}>Google Sign In</button>
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
