import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Styles from './Register.module.css';
import { register } from '../api/auth';

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      emailAddress: target.emailAddress.value,
      phone: target.phone.value,
      password: target.password.value,
    };

    setIsLoading(true);
    await register(data);
    setIsLoading(false);
    navigate('/login');
  };

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
        <p>{isLoading ? 'Loading...' : ''}</p>
      </div>
      <div className={Styles.form_container}>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            required
          />
          <input type="text" placeholder="Last Name" name="lastName" required />
          <input type="tel" placeholder="Contact " name="phone" required />
          <input
            type="email"
            placeholder="Email Adress "
            name="emailAddress"
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          {/*   <input
            type="password"
            placeholder="Password Confirmation"
            name="passwordConfirmation"
            required
          /> */}
          <div className={Styles.pass}>
            <span
              className={Styles.tooltip}
              data-tooltip="password must consist of symbols & letters."
            >
              ?
            </span>
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
