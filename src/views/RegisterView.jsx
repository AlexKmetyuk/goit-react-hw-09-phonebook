import { useState } from "react";
import { useDispatch } from "react-redux";
import authOps from "../redux/auth/auth-operations";

const RegisterView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister();

    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const onRegister = () => {
    dispatch(authOps.register({ name, email, password }));
  };

  return (
    <div className="app">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input name="name" value={name} onChange={handleChangeName} />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterView;
