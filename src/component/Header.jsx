import React from 'react';
import header from './header.module.css';

function Header() {
  return (
    <div className={header.header}>
      <div className={header.left_header}>
        <div className={header.liq_heading}>
          <h2>Liquory</h2>
        </div>
        <div className={header.menu}>
          <i className="fa-solid fa-bars" />
        </div>
        <div className={header.home}>
          <p>Home</p>
        </div>
        <div className={header.shop}>
          <p>Shop</p>
          <i className="fa-solid fa-caret-down" />
        </div>
        <div className={header.page}>
          <p>Page</p>
          <i className="fa-solid fa-caret-down" />
        </div>
        <div className={header.contact}>
          <p>Contact</p>
          <i className="fa-solid fa-caret-down" />
        </div>
      </div>
      <div className={header.right_header}>
        <div className={header.search}>
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div>
          <p>Sign in </p>
        </div>
        <span>Or</span>
        <div>
          <p>Register</p>
        </div>
        <div>
          <i className="fa-regular fa-heart" />
        </div>
        <div>
          <i className="fa-sharp fa-solid fa-basket-shopping" />
        </div>
      </div>
    </div>
  );
}

export default Header;
