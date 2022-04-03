import React from 'react';
import s from './RegistrationPage.module.css';
import Container from 'components/Container';
// import RegistrationForm from "../../components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <Container>
      <div className={s.wrapper}>
        <p className={s.title}>Finance App</p>
        {/* <RegistrationForm/> */}
      </div>
    </Container>
  );
};

export default RegistrationPage;
