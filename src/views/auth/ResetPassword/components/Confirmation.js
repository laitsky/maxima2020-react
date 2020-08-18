import React from 'react';
import Alert from '@material-ui/lab/Alert';
import {
  MxmInput,
  MxmPrependInput,
  MxmButton,
  Error,
  AlignMiddle,
  MxmLoading,
} from '../../../../components';

export default ({
  register,
  errors,
  handleSubmit,
  onSubmit,
  loading,
}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <AlignMiddle>
      <Alert severity="info">
        Kode OTP berhasil dikirimkan ke email student kamu.
      </Alert>
      <MxmPrependInput>
        <span>000000</span>
        <input
          type="number"
          name="nim"
          placeholder="Masukkan NIM kamu"
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
        placeholder="Password Baru"
        ref={register({
          required: 'Isi kata sandi kamu',
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
            message:
              'Kata sandi harus mengandung minimal 6 karakter yang terdiri atas huruf dan angka, serta tidak mengandung simbol.',
          },
        })}
      />
      {errors.password && <Error>{errors.password.message}</Error>}
      <MxmInput
        type="text"
        name="otp"
        placeholder="Masukkan Kode OTP"
        ref={register({
          required: 'Isi kode OTP kamu',
        })}
      />
      {errors.otp && <Error>{errors.otp.message}</Error>}

      {loading ? (
        <MxmLoading />
      ) : (
        <MxmButton mt="1.5em">Reset Password!</MxmButton>
      )}
    </AlignMiddle>
  </form>
);
