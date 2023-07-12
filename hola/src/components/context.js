import { useState, createContext } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  return (
    <Context.Provider
      value={{
        locale,
        setLocale,
      }}
    >
      {children}
    </Context.Provider>
  );
};