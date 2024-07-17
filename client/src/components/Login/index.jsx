import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateRandomCredentials = () => {
    const randomUsername = `user_${Math.floor(Math.random() * 1000)}`;
    const randomPassword = `pass_${Math.floor(Math.random() * 1000)}`;
    return { username: randomUsername, password: randomPassword };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Zəhmət olmasa bütün sahələri doldurun");
      return;
    }
    if (formData.username && formData.password) {
      setError("");
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      setError("İstifadəçi adı və ya şifrə yanlışdır");
    }
  };

  return (
    <div className={styles.register}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>UserName:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
