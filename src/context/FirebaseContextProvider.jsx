import React from "react";
import { useEffect } from "react";
import FirebaseContext from "./FirebaseContext";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setSignOutState, setUserLoginDetails } from "../Redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "disneyplus-clone-8415e.firebaseapp.com",
  projectId: "disneyplus-clone-8415e",
  storageBucket: "disneyplus-clone-8415e.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`,
};  

//   Initializing app and other configurations
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const firebaseAuth = getAuth(firebaseApp);
// const firestoreDb = getFirestore(firebaseApp);
// const firebaseStorage = getStorage(firebaseApp);

const FirebaseContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  useEffect(() => {
    ManageAuthStateOnChange();
  }, []);

  function setUser(user) {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  }
 
  function removeUser(){
    dispatch(setSignOutState())
  }

  function SigninWithGoogle() {
    try {
      signInWithPopup(firebaseAuth, googleProvider).then((result) => {
        // console.log(result.user);
        setUser(result.user);
      });
    } catch (e) {
      console.log("error occured", e);
    }
  }

  function SignoutUser() {
    signOut(firebaseAuth);
    removeUser();
  
  }
   
  function ManageAuthStateOnChange() {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // console.log("SignedinSuccess", user);
        setUser(user);
        navigate("/home")
      } else {
        console.log("user is signed out", user);
        navigate("/")
      } 
    });
  }


  return (
    <FirebaseContext.Provider value={{ SigninWithGoogle,ManageAuthStateOnChange,SignoutUser }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
