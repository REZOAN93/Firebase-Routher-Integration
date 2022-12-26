import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../Firebase.init";
const auth = getAuth(app);

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>This is Home</h1>
      <p>Current User is : {user ? user.displayName : "No Body"}</p>
    </div>
  );
};

export default Home;
