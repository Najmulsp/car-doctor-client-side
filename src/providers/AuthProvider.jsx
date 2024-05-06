import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/Firebase.Config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // observer
    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, (user) =>{
                setUser(user);
                // console.log("user", user)
                setLoading(false)
            
        })
        return () =>{
             return unSubscribe();
        }
    }, [])

    // google log in
    const handleGoogleLogin = () =>{
        setLoading(true);
      return  signInWithPopup(auth, googleProvider)
    }

    // github log in
    const handleGithubLogin = () =>{
        setLoading(true);
      return  signInWithPopup(auth, githubProvider)
    }

    // facebook log in
    const handleFacebookLogin = () =>{
        setLoading(true);
        return  signInWithPopup(auth, facebookProvider)
    }


    // log out
    const logout = () =>{
        setLoading(true);
        setUser(null);
        signOut(auth);
    }



    const authInfo ={
        user,
        loading,
        createUser,
        loginUser,
        logout,
        handleGoogleLogin,
        handleGithubLogin,
        handleFacebookLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;