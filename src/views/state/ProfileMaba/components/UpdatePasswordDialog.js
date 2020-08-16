import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from '@material-ui/core';

export default ({
  open,
  handleClose,
  handleSubmit,
  onSubmit,
  register,
  errors,
  watch,
}) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="update-password-dialog-title"
  >
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle id="update-password-dialog-title">
        Ganti Password
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Untuk mengganti password kamu, masukkan password baru kamu
          pada kotak di bawah.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password Baru"
          type="text"
          fullWidth
          inputRef={register({
            required: 'Isi kata sandi kamu',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message:
                'Kata sandi harus mengandung minimal 6 karakter yang terdiri atas huruf dan angka, serta tidak mengandung simbol.',
            },
          })}
        />
        {errors.password && (
          <span style={{ color: 'red' }}>
            {errors.password.message}
          </span>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </form>
  </Dialog>
);
