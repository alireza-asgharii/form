import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//styles
import styles from "../styles/login.module.scss";

//validata function
import { validata } from "../function/validata";

//tost
import tost from "../function/tostify";
import { ToastContainer } from "react-toastify";

//Icons
import google from "../assets/icon/google.png";
import apple from "../assets/icon/apple.png";
import facebook from "../assets/icon/facebook.png";

const Login = () => {
  const [err, setErr] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });

  const changeHandler = (e) => {
    if (e.target.name === "checkbox") {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const focusHandler = (e) => {
    setFocus((prevState) => ({ ...prevState, [e.target.name]: true }));
  };

  useEffect(() => {
    setErr(validata(data));
  }, [data, focus]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (Object.keys(err).length === 0) {
      axios
        .post("https://jsonplaceholder.typicode.com/users", data)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            tost("success", "Log in done");
            setData({
              email: "",
              password: "",
            });
            setFocus({});
          }
        });
    } else {
      tost("error", "Login failed  ");
      setFocus({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>{/* image */}</div>
      <div className={styles.Signup}>
        <div className={styles.header}>
          <h1>Hello Again!</h1>
          <p>
            Wellcome back you've <br /> been missed!
          </p>
        </div>
        <form onSubmit={submitHandler} className={styles.formContainer}>
          <label>
            <input
              className={
                err.email && focus.email ? styles.borderRed : styles.borderGreen
              }
              value={data.email}
              onChange={changeHandler}
              type="email"
              name="email"
              placeholder="Email"
              onFocus={focusHandler}
            />
            {err.email && focus.email && <span>{err.email}</span>}
          </label>
          <label>
            <input
              className={
                err.password && focus.password ? styles.borderRed : styles.borderGreen
              }
              value={data.password}
              onChange={changeHandler}
              type="password"
              name="password"
              placeholder="Password"
              onFocus={focusHandler}
            />
            {err.password && focus.password && <span>{err.password}</span>}
          </label>
          <p className={styles.recoveryPass}>Recovery Password</p>
          <button className={styles.SignUpButton}>Login</button>
        </form>
        <div className={styles.orContinue}>
          <span></span>
          <p>Or continue with</p>
          <span></span>
        </div>
        <div className={styles.iconContainer}>
          <span>
            <img src={google} alt="google" />
          </span>
          <span>
            <img src={apple} alt="apple" />
          </span>
          <span>
            <img src={facebook} alt="facebook" />
          </span>
        </div>
        <span className={styles.login}>
          Not a member? <Link to="/register">Register now</Link>
        </span>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
