import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Button } from '@material-ui/core';
import UpdatePasswordDialog from './components/UpdatePasswordDialog';

const ProfileMaba = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { register, handleSubmit, reset, errors, watch } = useForm({
    mode: 'onChange',
  });
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const onSubmit = async (data) => {
    reset();
    // eslint-disable-next-line no-param-reassign
  };
  return (
    <Container maxWidth="xs">
      <h1>Profil Kamu</h1>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        onClick={handleClickOpenDialog}
      >
        Ganti Password
      </Button>
      <UpdatePasswordDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        watch={watch}
      />
    </Container>
  );
};

export default ProfileMaba;
