import { useState } from "react";
import "./Login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log(`Login with Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label className="login-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="login-input"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="login-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="login-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="button" className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
