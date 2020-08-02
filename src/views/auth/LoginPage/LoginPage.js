import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import logo from '../../../assets/mxm20_logo.png';
import {
  MxmInput,
  MxmPrependInput,
  MxmButton,
  Error,
  MxmLogoContainer,
  AlignMiddle,
  MxmLoading,
} from '../../../components';
import authService from '../../../services/auth';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, errors } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    document.title = 'Masuk - MAXIMA 2020';
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    reset();
    console.log(data);

    try {
      const returnedData = await authService.login(data);
      console.log(returnedData);
      window.sessionStorage.setItem(
        'token',
        returnedData.accessToken,
      );
      window.location = '/';
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: 'Kata sandi yang kamu masukkan salah!',
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ x: -999, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
      }}
    >
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <AlignMiddle>
            <MxmLogoContainer src={logo} alt="MAXIMA 2020 Logo" />
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
              SELAMAT DATANG!
            </h1>
            <MxmPrependInput>
              <span>00000</span>
              <input
                type="number"
                name="nim"
                placeholder="NIM..."
                ref={register({
                  required: 'Isi NIM kamu',
                  minLength: {
                    value: 5,
                    message: 'NIM harus berupa 5 digit',
                  },
                  maxLength: {
                    value: 5,
                    message: 'NIM harus berupa 5 digit',
                  },
                })}
              />
            </MxmPrependInput>

            {errors.nim && <Error>{errors.nim.message}</Error>}
            <MxmInput
              type="password"
              name="password"
              placeholder="Kata Sandi..."
              ref={register({
                required: 'Isi kata sandi kamu',
              })}
            />
            {errors.password && (
              <Error>{errors.password.message}</Error>
            )}
            {!loading ? (
              <MxmButton mt="1.5em">Masuk</MxmButton>
            ) : (
              <MxmLoading />
            )}
            <Box mt={4}>
              <Link
                to="/daftar"
                exact
                style={{ textDecoration: 'none' }}
              >
                <h4
                  className="mxm-cyan"
                  style={{ textAlign: 'center' }}
                >
                  Belum memiliki akun?
                  <span
                    style={{
                      fontFamily: 'canaro-bold',
                      marginLeft: 5,
                    }}
                  >
                    Daftar akun mahasiswa baru.
                  </span>
                </h4>
              </Link>
              <Link
                to="/daftar-organisator"
                exact
                style={{ textDecoration: 'none' }}
              >
                <h4
                  className="mxm-cyan"
                  style={{ textAlign: 'center' }}
                >
                  Daftar akun organisator
                  <span
                    style={{
                      fontFamily: 'canaro-bold',
                      marginLeft: 5,
                    }}
                  >
                    disini.
                  </span>
                </h4>
              </Link>
            </Box>
          </AlignMiddle>
        </form>
      </Container>
    </motion.div>
  );
};

export default LoginPage;
