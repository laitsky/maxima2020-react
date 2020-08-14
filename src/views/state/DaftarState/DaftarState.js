import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Box, TextField } from '@material-ui/core';
import { MxmButton } from '../../../components/reusable/button';
import Header from './components/Header';
import logo from '../../../assets/mxm_white.png';
import {
  RadioContainer,
  RadioLabelSlot,
  StateSelectOverflow,
} from './components/styled';
import studentService from '../../../services/student';
import './DaftarState.scss';

const DaftarState = ({ day }) => {
  const [organisators, setOrganisators] = useState([]);
  const [filter, setFilter] = useState('');
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const returnedData = await studentService.getAllState();
        // menambahkan key 'slot' (quota - registered) ke dalam variable organisators
        const organisatorsWithSlot = await returnedData
          .filter((data) => data.day === day)
          .map((data) => ({
            ...data,
            slot: data.quota - data.registered,
          }));
        setOrganisators(organisatorsWithSlot);
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

  const onSubmit = async (data) => {
    const { organisator } = data;
    history.push(
      `/state/detail-organisator/${organisator
        .split(' ')
        .join('-')
        .toLowerCase()}`,
    );
  };

  const organisatorsToShow = filter
    ? organisators.filter((o) =>
        o.name.toLowerCase().includes(filter.trim().toLowerCase()),
      )
    : organisators;
  return (
    <>
      <Header logo={logo} day={day} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingBottom="1em"
        boxSizing="border-box"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="text"
            label="Cari kegiatan..."
            color="secondary"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            fullWidth
          />
          <StateSelectOverflow>
            {organisatorsToShow.map((data) => (
              <RadioContainer key={data.nama}>
                <input
                  type="radio"
                  name="organisator"
                  id={data.name}
                  value={data.name}
                  ref={register({
                    required: 'Kamu harus memilih salah satu opsi!',
                  })}
                  disabled={!data.slot}
                />
                <label htmlFor={data.name} className="radio">
                  {data.name}
                </label>
                <RadioLabelSlot slot={data.slot}>
                  {!data.slot ? 'FULL' : data.slot}
                </RadioLabelSlot>
              </RadioContainer>
            ))}
          </StateSelectOverflow>
          {errors.organisator && errors.organisator.message}
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <MxmButton type="submit">Pilih</MxmButton>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default DaftarState;
