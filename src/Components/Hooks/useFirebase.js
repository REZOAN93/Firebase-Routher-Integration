import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase.init";

const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const useFirebase = () => {
  const [users, setUser] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handlesignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = users.uid;
        // ...
        setUser(users);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return { users, signInWithGoogle, handlesignOut };
  //   return [user, setUser];
};
export default useFirebase;
