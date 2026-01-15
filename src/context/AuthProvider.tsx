import { auth, db } from "@/services/firebase.config";
import { onAuthStateChanged, type User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { UserData } from "@/models/interface";
import { doc, onSnapshot } from "firebase/firestore";
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
     if (!currentUser) {
        setUserData(null);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    let unsubscribeUser: () => void = () => {};
    

    if (user) {
      const userRef = doc(db, "users", user.uid);

      //  getDoc(userRef).then((snapshot) => {
      //   if (snapshot.exists()) {
      //     setUserData(snapshot.data() as UserData);
      //   } else {
      //     setUserData(null);
      //   }
      //   setLoading(false);
      // }).catch((error) => {
      //   console.error("Error fetching user data:", error);
      //   setLoading(false);
      // });


      unsubscribeUser = onSnapshot(userRef, (snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.data() as UserData);
        } else {
          setUserData(null);
        }
        setLoading(false);
      });
    }

    return unsubscribeUser;
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading, userData }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};


// if (!user) {
    //   setUserData(null);
    //   setLoading(false);
    //   return;
    // }