import React from "react";

//styles
import styles from "../styles/register.module.scss";
import { Link } from "react-router-dom";




const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {/* image */}
      </div>
      <div className={styles.Signup}>
        <div className={styles.header}>
          <h1>Hello</h1>
          <p>Wellcome to your Website </p>
        </div>
        <form className={styles.formContainer}>
          <label>
            <input type="text" name="name" placeholder="Enter your name" />
            <span>Err message!</span>
          </label>
          <label>
            <input type="email" name="email" placeholder="Email" />
            {/* <span>Err message!</span> */}
          </label>
          <label>
            <input type="password" name="password" placeholder="Password" />
            {/* <span>Err message!</span> */}
          </label>
          <label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
            <span>password is not definde!</span>
          </label>
          <label className={styles.checkbox}>
            <p>Accept the rules</p>
            <input type="checkbox" name="checkbox" />
            <span>Err message!</span>
          </label>
          <button className={styles.SignUpButton}>Sign up</button>
        </form>
        {/* <div className={styles.iconContainer}>
        <span>Or continue with</span>
        <span>
          <img src={google} alt="logo" />
        </span>
        <span>
          <img src={apple} alt="logo" />
        </span>
        <span>
          <img src={facebook} alt="logo" />
        </span>
      </div> */}
        <span className={styles.login}>
          You have an account? <Link to="/login">Login now</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
