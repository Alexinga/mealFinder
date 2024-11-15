import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  // console.log(isAuthenticated, "outside of useEffect");
  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
    // console.log(isAuthenticated, "inside of useEffect");
  }, [isAuthenticated, navigate]);
  return children;
  // return isAuthenticated ? children : null;
}
