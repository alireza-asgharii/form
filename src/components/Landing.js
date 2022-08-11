import React from "react";
import { Link } from "react-router-dom";

//styles
import styles from '../styles/Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      </div>
      <div className={styles.buttonContainer}>
        <h3>
          Discover your <br />
          Dream job Here
        </h3>
        <p>
          Explore all the most exiting jobs roles based on your interest And
          study major
        </p>
        <div className={styles.button}>
          <Link to="/register">Register</Link>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;