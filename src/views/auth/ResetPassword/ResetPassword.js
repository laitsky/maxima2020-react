import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Swal from 'sweetalert2';
import logo from '../../../assets/mxm20_logo.png';
import { MxmLogoContainer, AlignMiddle } from '../../../components';
import CreateOTP from './components/CreateOTP';
import Confirmation from './components/Confirmation';
import userService from '../../../services/user';

const ResetPassword = () => {
  const [hasOTP, setHasOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, errors } = useForm({
    mode: 'onChange',
  });
  const history = useHistory();
  useEffect(() => {
    document.title = 'Reset Password - MAXIMA 2020';
  }, []);

  const requestOTP = async (nim) => {
    reset();
    setLoading(true);
    try {
      await userService.createOTP(nim);
      setHasOTP(true);
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (data) => {
    reset();
    setLoading(true);
    try {
      await userService.resetPassword(data);
      history.push({
        pathname: '/login',
        data: {
          severity: 'info',
          message: `Kamu berhasil melakukan reset password. Silakan masuk.`,
        },
      });
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container maxWidth="sm" style={{ minHeight: '100vh' }}>
      <AlignMiddle>
        <MxmLogoContainer src={logo} alt="MAXIMA 2020 Logo" />
      </AlignMiddle>
      <h1
        className="mxm-navy"
        style={{
          margin: 0,
          marginBottom: '0.5em',
          fontSize: 'x-large',
          textAlign: 'center',
          fontFamily: 'canaro-bold',
        }}
      >
        HALAMAN RESET PASSWORD
      </h1>
      {hasOTP ? (
        <Confirmation
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={resetPassword}
          loading={loading}
        />
      ) : (
        <CreateOTP
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={requestOTP}
          loading={loading}
        />
      )}
    </Container>
  );
};

export default ResetPassword;
