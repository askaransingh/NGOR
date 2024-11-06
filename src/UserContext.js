import React, { createContext, useState, useEffect } from 'react';
import { auth } from './config/firebase'; // Assuming your Firebase setup file is named firebase.js
import { onAuthStateChanged } from "firebase/auth";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Restore user from localStorage or session if available
  useEffect(() => {
    // const storedUser = localStorage.getItem('user');
    // if (storedUser) {
    //   setUser(JSON.parse(storedUser));
    // }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          setUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          });
          localStorage.setItem('user', JSON.stringify(user)); // Store user in localStorage
        } else {
          // User is signed out
          setUser(null);
          localStorage.removeItem('user'); // Clear user from localStorage
        }
      });
  
      return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
