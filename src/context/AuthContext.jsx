// context/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

   
  const signup = async (email, password, displayName) => {
     
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    await updateProfile(userCredential.user, {
      displayName: displayName,
    });

    return userCredential;
  }; 

  
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  
  const googleLogin = () => signInWithPopup(auth, provider);
 
  const logout = async () => {
    try {
      await signOut(auth);  
    
    } catch (err) {
      console.error("Logout Error:", err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, googleLogin }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
