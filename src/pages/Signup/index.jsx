import React, { useState } from "react";
import styles from "./signUp.module.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className={styles.backg}>
        <div className={styles.inner}>
          <Link to="/">
            <img
              className={styles.goBack}
              src="https://texnomart.uz/_nuxt/img/close-medium.ea79cf9.svg"
            />
          </Link>
          <div className={styles.title}>
            <h1>Вход</h1>
          </div>
          <div className={styles.Email}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Введите свою почту"
            />
          </div>
          <div className={styles.Password}>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Введите свой пароль"
            />
          </div>
          <div className={styles.button}>
            <button>Войти по почте</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
