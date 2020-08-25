import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Container,
  TextField,
  Divider,
} from '@material-ui/core';
import Swal from 'sweetalert2';
import adminService from '../../../../../services/admin';

const originUrl = 'https://mxm20.s3-ap-southeast-1.amazonaws.com';
const cdnUrl = 'https://d1z9g6p5mcoq6s.cloudfront.net';

const EditState = () => {
  const history = useHistory();
  const { stateId } = useParams();
  const [data, setData] = useState({});
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = async (formData) => {
    reset();
    // eslint-disable-next-line no-param-reassign
    formData.link_logo = formData.link_logo.replace(
      originUrl,
      cdnUrl,
    );

    try {
      const returnedStatus = await adminService.editState(
        formData,
        stateId,
      );
      if (returnedStatus === 200) {
        history.push({
          pathname: '/admin/state-lists',
          message: `Kamu berhasil menyunting data kegiatan STATE ${data.name}`,
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
  };
  useEffect(() => {
    document.title = 'Edit Kegiatan STATE - MAXIMA 2020';
    const fetchData = async () => {
      try {
        let returnedData = await adminService.getStateById(stateId);
        returnedData = returnedData.find(
          (d) => d.state_id === Number(stateId),
        );
        setData(returnedData);
      } catch (error) {
        Swal.fire({
          title: 'Perhatian!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Coba lagi',
        });
      }
    };
    fetchData();
  }, []);

  return (
    <Container maxWidth="md" styte={{ paddingTop: '2em' }}>
      <h1>Edit Kegiatan STATE</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          <TextField
            key={data.name}
            defaultValue={data.name}
            type="text"
            name="name"
            label="Nama Kegiatan"
            variant="outlined"
            inputRef={register({
              required: 'Isi nama kegiatan',
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            key={data.quota}
            defaultValue={data.quota}
            type="number"
            name="quota"
            label="Kuota"
            variant="outlined"
            inputRef={register({
              required: 'Isi kuota',
            })}
          />
          {errors.quota && <span>{errors.quota.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            key={data.day}
            defaultValue={data.day}
            type="number"
            name="day"
            label="Hari ke-"
            variant="outlined"
            inputRef={register({
              required: 'Pilih hari',
              min: {
                value: 1,
                message: 'Hari paling kecil adalah 1',
              },
              max: {
                value: 4,
                message: 'Hari paling besar adalah 4',
              },
            })}
          />
          {errors.day && <span>{errors.day.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            key={data.link_logo || 'logo'}
            defaultValue={data.link_logo}
            type="text"
            name="link_logo"
            label="Link Logo"
            variant="outlined"
            inputRef={register()}
          />
          <Box paddingBottom="2em" />
          <TextField
            key={data.room || 'room'}
            defaultValue={data.room}
            type="text"
            name="room"
            label="Link Zoom"
            variant="outlined"
            inputRef={register()}
          />
          <Box paddingBottom="2em" />
          <Button type="submit" variant="contained" color="primary">
            Ubah
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default EditState;
