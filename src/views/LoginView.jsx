import { useState } from "react";
import { useDispatch } from "react-redux";
import authOps from "../redux/auth/auth-operations.js";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const onLogin = () => [
    dispatch(authOps.login({ email, password }))
  ]

  return (
    <div className="app">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView

