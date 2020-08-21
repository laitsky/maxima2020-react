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

const ytUrl = 'https://youtu.be';
const embedYtUrl = 'https://youtube.com/embed';
const EditHome = () => {
  const history = useHistory();
  const { homeId } = useParams();
  const [data, setData] = useState({});
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = async (formData) => {
    reset();
    // membuat objek baru karena perlu melakukan replace link
    // origin S3 ke CloudFront serta youtube ke youtube embed
    const newData = {
      ...formData,
      link_logo: formData.link_logo.replace(originUrl, cdnUrl),
      link_video: formData.link_video.replace(ytUrl, embedYtUrl),
    };
    console.log(newData);

    try {
      const retunedStatus = await adminService.editHome(
        newData,
        homeId,
      );
      if (retunedStatus === 200) {
        history.push({
          pathname: '/admin/home-lists',
          message: `Kamu berhasil menyunting data organisator HoME ${data.name}`,
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
    document.title = 'Edit Organisator HoME - MAXIMA 2020';
    const fetchData = async () => {
      try {
        let returnedData = await adminService.getHomeById(homeId);
        returnedData = returnedData.find(
          (d) => d.home_id === Number(homeId),
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
      <h1>Edit Organisator HoME</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          <TextField
            key={data.name}
            defaultValue={data.name}
            type="text"
            name="name"
            label="Nama Organisator"
            variant="outlined"
            inputRef={register({
              required: 'Isi nama organisator',
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            key={data.kategori}
            defaultValue={data.kategori}
            type="text"
            name="kategori"
            label="Kategori"
            variant="outlined"
            inputRef={register({
              required: 'Isi kategori',
            })}
          />
          {errors.kategori && <span>{errors.kategori.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            key={data.search_key}
            defaultValue={data.search_key}
            type="text"
            name="search_key"
            label="Kata Kunci"
            variant="outlined"
            inputRef={register({
              required: 'Isi kata kunci',
            })}
          />
          {errors.search_key && (
            <span>{errors.search_key.message}</span>
          )}
          <Box paddingBottom="2em" />
          <TextField
            key={data.narasi}
            defaultValue={data.narasi}
            type="text"
            name="narasi"
            label="Narasi"
            variant="outlined"
            inputRef={register({
              required: 'Isi narasi',
            })}
          />
          {errors.narasi && <span>{errors.narasi.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            multiline
            rows={10}
            key={data.narasi_panjang}
            defaultValue={data.narasi_panjang}
            type="text"
            name="narasi_panjang"
            label="Narasi Panjang"
            variant="outlined"
            inputRef={register({
              required: 'Isi narasi panjang',
            })}
          />
          {errors.narasi_panjang && (
            <span>{errors.narasi_panjang.message}</span>
          )}
          <Box paddingBottom="2em" />
          <TextField
            key={data.link_logo}
            defaultValue={data.link_logo}
            type="text"
            name="link_logo"
            label="Link Logo"
            variant="outlined"
            inputRef={register({
              required: 'Isi link logo',
            })}
          />
          {errors.link_logo && (
            <span>{errors.link_logo.message}</span>
          )}
          <Box paddingBottom="2em" />
          <TextField
            key={data.link_video}
            defaultValue={data.link_video}
            type="text"
            name="link_video"
            label="Link Video"
            variant="outlined"
            inputRef={register()}
          />
          <Box paddingBottom="2em" />
          <TextField
            key={data.line}
            defaultValue={data.line}
            type="text"
            name="line"
            label="Media Sosial (LINE)"
            variant="outlined"
            inputRef={register()}
          />
          <Box paddingBottom="2em" />
          <TextField
            key={data.instagram}
            defaultValue={data.instagram}
            type="text"
            name="instagram"
            label="Media Sosial (Instagram)"
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

export default EditHome;
