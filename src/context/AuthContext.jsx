import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("unknown error in Auth Context");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fakeUser = {
    email: "user",
    password: "password",
  };

  function userLogin(userEmail, userPassword) {
    if (userEmail === fakeUser.email && userPassword === fakeUser.password) {
      dispatch({ type: "login", payload: fakeUser });
    } else {
      alert("incorrect email or password entered");
    }
  }
  function userLogout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ userLogin, userLogout, user, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const contextValue = useContext(AuthContext);
  if (contextValue === undefined) {
    throw new Error(
      "This AuthContext is being used outside of the AuthProvider"
    );
  }
  return contextValue;
}

export { useAuth, AuthProvider };
