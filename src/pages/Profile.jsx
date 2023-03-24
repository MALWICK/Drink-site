import React from 'react';
import style from './profile.module.css';

function Profile() {
  return (
    <div className={style.profile}>
      <div className={style.container}>
        <div className={style.left__container}>
          <div className={style.prof__cont}>
            <div className={style.prof__image}>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="avartar"
              />
              <div>
                <i className="fa-solid fa-circle-plus" />
              </div>
            </div>
          </div>
          <div className={style.info}>
            <p>Jah Marant</p>
            <p className={style.p__color}>jahMorant@gmail.com</p>
          </div>
          <div>
            <p>User_APIKEY:27e8u9-0if2nl1r9-0u</p>
          </div>
          <div className={style.log__out}>
            <p>Logout</p>
            <i className="fa-sharp fa-solid fa-arrow-right-to-bracket" />
          </div>
        </div>
        <div className={style.right__container}>
          <div className={style.perso1}>
            <span className={style.details}>personal Details</span>
            <div className={style.input__holder1}>
              <div className={style.firstName}>
                <div className={style.first}>
                  <p> First Name</p>
                </div>
                <input type="text" placeholder="enter your firstName" />
              </div>
              <div className={style.lastName}>
                <div className={style.last}>
                  <p> Last Name</p>
                </div>
                <input type="text" placeholder="enter your lastName" />
              </div>
            </div>
          </div>
          <div className={style.perso1}>
            <span className={style.details}>Contact</span>
            <div className={style.input__holder1}>
              <div className={style.firstName}>
                <div className={style.first}>
                  <p>phone</p>
                </div>
                <input type="text" placeholder="enter your phone number" />
              </div>
              <div className={style.lastName}>
                <div className={style.last}>
                  <p> Email</p>
                </div>
                <input
                  type="text"
                  placeholder="enter your email @gmailcom"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className={style.btn__container}>
            <button className={style.cancle} type="submit">
              Cancel
            </button>
            <button className={style.update} type="submit">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
