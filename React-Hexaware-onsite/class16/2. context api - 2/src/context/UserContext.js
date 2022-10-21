import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

const USER = { name: "Guest", isGuestUser: true };

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(USER);

  function login(username) {
    setUser({ isGuestUser: false, name: username });
  }

  function logout() {
    setUser(USER);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const { user, login, logout } = useContext(UserContext);
  return { user, login, logout };
}
