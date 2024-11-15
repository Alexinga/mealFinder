import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { userLogin, isAuthenticated } = useAuth();
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  // console.log(isAuthenticated);
  function handleSubmit(e) {
    e.preventDefault();
    if (newUser && newPassword) {
      userLogin(newUser, newPassword);
    }
    if (newUser === "" && newPassword === "") {
      alert("You need to enter an email and password");
    }
  }
  useEffect(() => {
    const checkAuth = () => {
      if (isAuthenticated === true) {
        navigate("/app");
      }
    };
    checkAuth();
  }, [isAuthenticated, navigate]);
  return (
    <section className="my-3 min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>Login Page</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mx-0">
          <form
            onSubmit={handleSubmit}
            className="col-12 col-md-6 p-3 mx-auto bg-light-gray shadow-sm border rounded-2"
          >
            <div className="mb-3">
              <label htmlFor="emailLogin" className="form-label">
                Email Address
              </label>
              <input
                id="emailLogin"
                type="text"
                className="form-control"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="passLogin" className="form-label">
                Password
              </label>
              <input
                id="passLogin"
                type="text"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              ></input>
            </div>
            <button>login</button>
          </form>
        </div>
      </div>
    </section>
  );
}
