import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Box, TextField } from '@material-ui/core';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ y: -999, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
      }}
      className="state-daftar-bg"
    >
      <Box style={{ minHeight: '100vh' }}>
        <Header logo={logo} day={day} />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingTop="1em"
          paddingBottom="1em"
          boxSizing="border-box"
        >
          <motion.div
            initial={{ y: 999, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 0.5,
            }}
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
                  <RadioContainer
                    key={data.nama}
                    className="state-radio"
                  >
                    <input
                      type="radio"
                      name="organisator"
                      id={data.name}
                      value={data.name}
                      ref={register({
                        required:
                          'Kamu harus memilih salah satu opsi!',
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
                style={{ paddingTop: '1em' }}
              >
                <MxmButton type="submit">Pilih</MxmButton>
              </Box>
            </form>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default DaftarState;
