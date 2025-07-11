// context/AuthContext.js
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null);
  const[isLoggedIn,setIsLoggedIn]=useState(false);
//   const [watchlist, setWatchlist] = useState([]);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(user => user.email === email && user.password === password);
    if (matchedUser) {
      setUser(matchedUser);
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("currentUser");
  };

  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find(user => user.email === email);
    if (exists) {
      return false; // user already exists
    }
    const newUser = { email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,isLoggedIn, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
