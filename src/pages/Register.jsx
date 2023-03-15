import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Styles from './Register.module.css';

function Register() {
  return (
    <div className={Styles.register__container}>
      <Header />
      <div className={Styles.register__des}>
        <span>
          <i className="fa-solid fa-house" />
        </span>
        <span className={Styles.homei}>Home</span>
        <i className="fa-solid fa-chevron-right" />
        <p>Create Account</p>
      </div>
      <div className={Styles.form_container}>
        <h1>Create Account</h1>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="tel" placeholder="Contact " />
          <input type="email" placeholder="Email " />
          <input type="password" placeholder="Password" />
          <div className={Styles.pass}>
            <span
              className={Styles.tooltip}
              data-tooltip="password must consist of symbols & letters."
            >
              ?
            </span>
          </div>
        </form>
        <button type="submit">Create</button>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
