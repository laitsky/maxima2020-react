import React from 'react';
import {
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
      {loading ? (
        <MxmLoading />
      ) : (
        <MxmButton mt="1.5em">Kirim OTP</MxmButton>
      )}
    </AlignMiddle>
  </form>
);
