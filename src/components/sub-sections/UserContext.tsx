import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/Firebase";

interface UserContextType {
  username: string;
}

const UserContext = createContext<UserContextType>({ username: "User" });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();
        if (userData?.username) {
          setUsername(userData.username);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ username }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
