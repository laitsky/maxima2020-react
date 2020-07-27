import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import logo from '../../../assets/mxm20_logo.png';
import {
  MxmInput,
  MxmPrependInput,
} from '../../../components/reusable/input';
import { MxmButton } from '../../../components/reusable/button';
import { Error } from '../../../components/reusable/error';
import {
  MxmLogoContainer,
  AlignMiddle,
} from '../../../components/reusable/container';
import authService from '../../../services/auth';

const LoginPage = () => {
  const { register, handleSubmit, reset, errors } = useForm({
    mode: 'onChange',
  });
  const onSubmit = async (data) => {
    reset();
    console.log(data);
    try {
      const returnedData = await authService.loginMaba(data);
      console.log(returnedData.accessToken);
      window.sessionStorage.setItem(
        'token',
        returnedData.accessToken,
      );
    } catch (ex) {
      console.log(ex.response.data);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AlignMiddle>
          <MxmLogoContainer src={logo} alt="MAXIMA 2020 Logo" />
          <h1
            className="mxm-navy"
            style={{ textAlign: 'center', fontFamily: 'canaro-bold' }}
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
              maxLength: { value: 2, message: 'error message' },
            })}
          />
          {errors.password && (
            <Error>{errors.password.message}</Error>
          )}
          <MxmButton mt="1.5em">Masuk</MxmButton>
          <Box mt={4}>
            <Link
              to="/daftar"
              exact
              style={{ textDecoration: 'none' }}
            >
              <h4 className="mxm-cyan">
                Belum memiliki akun?
                <span
                  style={{ fontFamily: 'canaro-bold', marginLeft: 5 }}
                >
                  Daftar
                </span>
              </h4>
            </Link>
          </Box>
        </AlignMiddle>
      </form>
    </Container>
  );
};

export default LoginPage;
