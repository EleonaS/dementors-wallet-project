import React from 'react';
import s from './RegistrationPage.module.css';
// import RegistrationForm from "../../components/RegistrationForm";
import BackgroundContainer from 'components/backgroundContainer/BackgroundContainer';

const RegistrationPage = () => {
  return (
    <BackgroundContainer>
      <div className={s.wrapper}>
        <div className={s.box}>
          {/* <img/> */}
          <p className={s.title}>Finance App</p>
        </div>
        {/* <RegistrationForm/> */}
        <div className={s.ellipseBlur} />
      </div>
    </BackgroundContainer>
  );
};

export default RegistrationPage;
