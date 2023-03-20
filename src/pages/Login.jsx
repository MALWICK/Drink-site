/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { saveToken } from '../utils';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Styles from './Login.module.css';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      emailAddress: target.emailAddress.value,
      password: target.password.value,
    };
    console.log(e);
    console.log(user.emailAddress);

    setIsLoading();
    setError('');
    try {
      const { data } = await login(user.emailAddress, user.password);
      saveToken(data.token);
      navigate('/dashboard');
    } catch (e) {
      console.log(e);
      if (e.response.status === 401) {
        setError('Invalid username or password');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={Styles.login__container}>
      <Header />
      <div className={Styles.Login_des}>
        <span>
          <i className="fa-solid fa-house" />
        </span>
        <span className={Styles.homei}>Home</span>
        <i className="fa-solid fa-chevron-right" />
        <p>Account</p>
      </div>
      <form onSubmit={handleSubmit} className={Styles.form_container}>
        <h1>Login</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        <div className={Styles.input_fields}>
          <input
            type="text"
            className={Styles.form_control}
            name="emailAddress"
            placeholder="Enter your email ie. @gmail"
          />
          <input
            type="Password"
            className={Styles.form_control_password}
            name="password"
            placeholder="Enter your Password"
          />
        </div>
        <p className={Styles.forgot}>Forgot your Password? </p>
        <button className={Styles.signin_btn} type="submit">
          Sign in
        </button>
        <p className={Styles.create}>Create account</p>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
