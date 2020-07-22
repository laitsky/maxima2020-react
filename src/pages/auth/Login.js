import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import logo from '../../assets/mxm20_logo.png';
import { MxmInput } from '../../components/reusable/input';
import { MxmButton } from '../../components/reusable/button';
import { Error } from '../../components/reusable/error';
import { MxmLogoContainer } from '../../components/reusable/container';

const Login = () => {
  const {
    register, handleSubmit, reset, errors,
  } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <MxmLogoContainer src={logo} alt="MAXIMA 2020 Logo" />
          <h1 className="mxm-navy" style={{ textAlign: 'center', fontFamily: 'canaro-bold' }}>SELAMAT DATANG!</h1>
          <MxmInput
            type="text"
            name="email"
            placeholder="Email..."
            ref={register({ required: 'Isi email kamu' })}
          />
          { errors.email && <Error>{errors.email.message}</Error> }
          <MxmInput
            type="password"
            name="password"
            placeholder="Kata Sandi..."
            ref={register({ required: 'Isi kata sandi kamu' })}
          />
          { errors.password && <Error>{errors.password.message}</Error>}
          <MxmButton mt="1.5em">Masuk</MxmButton>
          <Box mt={4}>
            <Link to="/daftar" exact style={{ textDecoration: 'none' }}>
              <h4 className="mxm-cyan">
                Belum memiliki akun?
                <span style={{ fontFamily: 'canaro-bold', marginLeft: 5 }}>Daftar</span>
              </h4>
            </Link>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default Login;
