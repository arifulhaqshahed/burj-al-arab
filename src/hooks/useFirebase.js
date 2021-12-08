import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isloggedIn, setIsLoggedIn] = useState(false);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({});
  const [name, setName] = useState("");

  const auth = getAuth();

  const createNewUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        const { email } = result.user;
        const newUser = {
          email: email,
        };
        setNewUser(newUser);
        setError("");
        updateName(name);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        const { displayName } = result.user;
        const user = {
          email: email,
          displayName: displayName,
        };
        setUser(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateName = (name) => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    createNewUser,
    signInUser,
    googleSignIn,
    logOut,
    newUser,
    updateName,
  };
};

export default useFirebase;
