import React from "react";
const AuthContextFirst = React.createContext({
  authetication: false,
  login: () => {},
});

export default AuthContextFirst;
