import React from 'react';
import Header from '../component/Header';
import Styles from './Login.module.css';

function Login() {
  return (
    <div>
      <Header />
      <div className={Styles.Login_des}>
        <span>
          <i className="fa-solid fa-house" />
        </span>
        <span className={Styles.homei}>Home</span>
        <i className="fa-solid fa-chevron-right" />
        <p>Account</p>
      </div>
      <div className={Styles.form_container}>
        <h1>Login</h1>
        <div className={Styles.input_fields}>
          <input
            type="text"
            className={Styles.form_control}
            placeholder="Enter your email @gmail"
          />
          <input
            type="text"
            className={Styles.form_control_password}
            placeholder="Enter your email Password"
          />
        </div>
        <p className={Styles.forgot}>Forgot your Password? </p>
        <button type="submit">Sign in </button>
        <p>Create accout</p>
      </div>
    </div>
  );
}

export default Login;
