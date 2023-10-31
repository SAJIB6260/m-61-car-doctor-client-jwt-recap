import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebse/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user sign in
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // user logOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // user observation

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false)
            // if user exists then issue a token
            if(currentUser){
                
                axios.post('https://car-doctor-server-jwt-recap-sk-sajibs-projects.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    console.log("token response", res.data)
                })
            }
            else{
                axios.post('https://car-doctor-server-jwt-recap-sk-sajibs-projects.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data)
                })
            }
        });
        return () => {
            return unsubscribe();
        }
    } , [user])


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;