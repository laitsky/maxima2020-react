import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import logo from '../../../assets/mxm20_logo.png';
import {
  MxmInput,
  MxmPrependInput,
  MxmAppendInput,
} from '../../../components/reusable/input';
import { MxmButton } from '../../../components/reusable/button';
import { Error } from '../../../components/reusable/error';
import {
  MxmLogoContainer,
  AlignMiddle,
} from '../../../components/reusable/container';
import authService from '../../../services/auth';

const DaftarMaba = () => {
  const { register, handleSubmit, reset, errors, watch } = useForm({
    mode: 'onChange',
  });
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = async (data) => {
    reset();
    // eslint-disable-next-line no-param-reassign
    delete data.password_conf;
    const dataMaba = {
      ...data,
      email: `${data.email}@student.umn.ac.id`,
      roles: 'maba',
    };
    console.log(dataMaba);
    try {
      const returnedData = await authService.daftarMaba(dataMaba);
      console.log(returnedData);
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
            PENDAFTARAN AKUN BARU MAXIMA 2020
          </h1>
          <MxmInput
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            ref={register({ required: 'Isi nama lengkap kamu' })}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
          <MxmPrependInput>
            <span>00000</span>
            <input
              type="number"
              name="nim"
              placeholder="NIM"
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
          <MxmAppendInput>
            <input
              type="text"
              name="email"
              placeholder="Email"
              ref={register({
                required: 'Isi email kamu',
                pattern: {
                  value: /(?:\s|^)(?![a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\S+\b(?=\s|$)/gi,
                  message: 'Tidak perlu memasukkan domain email',
                },
              })}
            />
            <span>@student.umn.ac.id</span>
          </MxmAppendInput>
          {errors.email && <Error>{errors.email.message}</Error>}
          <MxmInput
            type="password"
            name="password"
            placeholder="Kata Sandi"
            ref={register({ required: 'Isi kata sandi kamu' })}
          />
          {errors.password && (
            <Error>{errors.password.message}</Error>
          )}
          <MxmInput
            type="password"
            name="password_conf"
            placeholder="Ulangi Kata Sandi"
            ref={register({
              validate: (val) =>
                val === password.current || 'Kata sandi tidak sama',
            })}
          />
          {errors.password_conf && (
            <Error>{errors.password_conf.message}</Error>
          )}
          <MxmButton mt="1.5em">Daftar</MxmButton>
          <Box mt={4}>
            <Link
              to="/login"
              exact
              style={{ textDecoration: 'none' }}
            >
              <h4 className="mxm-cyan">
                Sudah memiliki akun?
                <span
                  style={{ fontFamily: 'canaro-bold', marginLeft: 5 }}
                >
                  Masuk
                </span>
              </h4>
            </Link>
          </Box>
        </AlignMiddle>
      </form>
    </Container>
  );
};

export default DaftarMaba;
