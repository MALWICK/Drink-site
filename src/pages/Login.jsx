import React from 'react';
import Footer from '../component/Footer';
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
            placeholder="Enter your email ie. @gmail"
          />
          <input
            type="text"
            className={Styles.form_control_password}
            placeholder="Enter your Password"
          />
        </div>
        <p className={Styles.forgot}>Forgot your Password? </p>
        <button className={Styles.signin_btn} type="submit">
          Sign in
        </button>
        <p className={Styles.create}>Create account</p>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
