/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
  TextField,
  Divider,
  Box,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Swal from 'sweetalert2';
import acaraService from '../../../../../services/acara';

const TambahPIC = () => {
  const history = useHistory();
  const { register, handleSubmit, reset, errors } = useForm();
  const [organisatorAccounts, setOrganisatorAccounts] = useState([]);
  const [stateList, setStateList] = useState([]);
  useEffect(() => {
    document.title = 'Tambah PIC Organisator STATE MAXIMA 2020';
    const fetchOrganisatorAccounts = async () => {
      try {
        const returnedOrganisatorAccounts = await acaraService.getAllOrganisators();
        setOrganisatorAccounts(returnedOrganisatorAccounts);
      } catch (error) {
        Swal.fire({
          title: 'Perhatian!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Coba lagi',
        });
      }
    };
    const fetchStateList = async () => {
      try {
        const returnedStateList = await acaraService.getAllState();
        setStateList(returnedStateList);
      } catch (error) {
        Swal.fire({
          title: 'Perhatian!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Coba lagi',
        });
      }
    };
    fetchOrganisatorAccounts();
    fetchStateList();
  }, []);

  const onSubmit = async (data) => {
    reset();
    const newData = {
      nim: organisatorAccounts.find(
        (d) => d.name === data.akunOrganisator,
      ).nim,
      state_id: stateList.find((d) => d.name === data.state).state_id,
    };
    try {
      await acaraService.addPIC(newData);
      history.push({
        pathname: '/acara/pic-organisator',
        message:
          'Kamu berhasil mengaitkan akun organisator dengan kegiatan STATE!',
      });
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
  };
  return (
    <Container maxWidth="md" style={{ paddingTop: '2em' }}>
      <h1>Ini adalah halaman Tambah PIC</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          <Autocomplete
            id="organisatorAccounts-combo-box"
            options={organisatorAccounts}
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
              <>
                {option.name} ({option.nim})
              </>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                name="akunOrganisator"
                label="Pilih akun organisator"
                variant="outlined"
                inputRef={register({
                  required: 'Pilih akun organisator!',
                })}
              />
            )}
          />
          {errors.akunOrganisator && (
            <span>{errors.akunOrganisator.message}</span>
          )}
          <Box paddingBottom="2em" />
          <Autocomplete
            id="stateList-combo-box"
            options={stateList}
            getOptionLabel={(option) => option.name}
            renderOption={(option) => (
              <>
                <img
                  src={option.link_logo}
                  width={35}
                  height={35}
                  alt="logo"
                />
                {option.name} (Day {option.day})
              </>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                name="state"
                label="Pilih kegiatan STATE"
                variant="outlined"
                inputRef={register({
                  required: 'Pilih kegiatan STATE!',
                })}
              />
            )}
          />
          <Box paddingBottom="2em" />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default TambahPIC;
