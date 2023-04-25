import React, { useState } from "react";
export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [authetication, setauthetication] = useState(false);
  const login = () => {
    setauthetication(true);
  };
  return (
    <AuthContext.Provider value={{ authetication, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
