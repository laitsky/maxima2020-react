import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import logo from '../../../assets/mxm20_logo.png';
import {
  MxmInput,
  MxmPrependInput,
  MxmAppendInput,
  MxmButton,
  Error,
  MxmLogoContainer,
  AlignMiddle,
  MxmLoading,
} from '../../../components';

import authService from '../../../services/auth';

const DaftarMaba = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, errors, watch } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    document.title = 'Pendaftaran Akun Mahasiswa Baru - MAXIMA 2020';
  }, []);

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = async (data) => {
    setLoading(true);
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
      const returnedData = await authService.daftar(dataMaba);
      console.log(returnedData);
    } catch (ex) {
      console.log(ex.response.data);
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ y: -999, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
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
                textAlign: 'center',
                fontSize: 'x-large',
                fontFamily: 'canaro-bold',
              }}
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
              <span>000000</span>
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
              ref={register({
                required: 'Isi kata sandi kamu',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message:
                    'Kata sandi harus mengandung minimal 6 karakter yang terdiri atas huruf dan angka, serta tidak mengandung simbol.',
                },
              })}
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
            {!loading ? (
              <MxmButton mt="1.5em">Daftar</MxmButton>
            ) : (
              <MxmLoading />
            )}
            <Box mt={4}>
              <Link
                to="/login"
                exact
                style={{ textDecoration: 'none' }}
              >
                <h4 className="mxm-cyan">
                  Sudah memiliki akun?
                  <span
                    style={{
                      fontFamily: 'canaro-bold',
                      marginLeft: 5,
                    }}
                  >
                    Masuk
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

export default DaftarMaba;
