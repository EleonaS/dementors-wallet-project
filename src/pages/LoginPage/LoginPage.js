import React from 'react';
import s from './LoginPage.module.css';
import Container from 'components/Container';
// import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <Container>
      <div className={s.wrapper}>
        <p className={s.title}>Finance App</p>
        {/* <LoginForm/> */}
      </div>
    </Container>
  );
};

export default LoginPage;
