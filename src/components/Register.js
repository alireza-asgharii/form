import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//styles
import styles from "../styles/register.module.scss";

//validata function
import { validata } from "../function/validata";

//tost
import tost from "../function/tostify";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

// Context
import { loadingContext } from "../App";

const Register = () => {
  const loadingDsipatch = useContext(loadingContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });
  const [err, setErr] = useState({});
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    checkbox: false,
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
    setErr(validata(data, "register"));
  }, [data, focus]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (Object.keys(err).length === 0) {
      // tost("success", "Registration was successful :)");
      // axios
      //   .post("https://jsonplaceholder.typicode.com/users", data)
      //   .then((res) => {
      //     navigate("/login", { replace: true });
      //   });

      const resolveAfter3Sec = new Promise((resolve) =>
        axios
          .post("https://jsonplaceholder.typicode.com/users", data)
          .then((res) => {
            resolve(res);
            setTimeout(() => navigate("/login", { replace: true }), 2000);
          })
      );
      toast.promise(resolveAfter3Sec, {
        pending: "Please wait",
        success: `Registration is done. Welcome ${data.name} :)`,
        error: "Registration failed",
      });
    } else {
      tost("error", "Registration failed  ");
      setFocus({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        checkbox: true,
      });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>{/* image */}</div>
        <div className={styles.Signup}>
          <div className={styles.header}>
            <h1>Hello</h1>
            <p>Wellcome to your Website </p>
          </div>
          <form onSubmit={submitHandler} className={styles.formContainer}>
            <label>
              <input
                className={
                  err.name && focus.name ? styles.borderRed : styles.borderGreen
                }
                value={data.name}
                onChange={changeHandler}
                type="text"
                name="name"
                placeholder="Enter your name"
                onFocus={focusHandler}
              />
              {err.name && focus.name && <span>{err.name}</span>}
            </label>
            <label>
              <input
                className={
                  err.email && focus.email
                    ? styles.borderRed
                    : styles.borderGreen
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
                  err.password && focus.password
                    ? styles.borderRed
                    : styles.borderGreen
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
            <label>
              <input
                className={
                  err.confirmPassword && focus.confirmPassword
                    ? styles.borderRed
                    : styles.borderGreen
                }
                value={data.confirmPassword}
                onChange={changeHandler}
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                onFocus={focusHandler}
              />
              {err.confirmPassword && focus.confirmPassword && (
                <span>{err.confirmPassword}</span>
              )}
            </label>
            <label className={styles.checkbox}>
              <p>Accept the rules</p>
              <input
                value={data.checkbox}
                onChange={changeHandler}
                type="checkbox"
                name="checkbox"
                onFocus={focusHandler}
              />
              {err.checkbox && focus.checkbox && <span>{err.checkbox}</span>}
            </label>
            <button
              className={styles.SignUpButton}
              onClick={
                Object.keys(err).length === 0
                  ? () => loadingDsipatch(20)
                  : undefined
              }
            >
              Sign up
            </button>
          </form>
          <span className={styles.login}>
            You have an account? <Link to="/login">Login now</Link>
          </span>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
