import { createContext, useContext, useState, useEffect } from "react";
import { auth, provider } from "../firebase/firebase"; 
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     
      if (currentUser) {
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName, 
        });
      } else {
        setUser(null); 
      }
    });

    return () => unsubscribe(); 
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser({
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName, 
      });
    } catch (error) {
      console.error("Error signing in with Google: ", error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null); 
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
