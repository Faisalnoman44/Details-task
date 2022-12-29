import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut}from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const googleProvide = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvide);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe
    }, [])

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         setLoading(false);
    //     })

    //     return () => unsubscribe;
    // }, [])


    const authInfo = {
        createUser,
        googleSignIn,
        logIn,
        logOut,
        user,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;