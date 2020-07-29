import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button } from '@material-ui/core';
import Header from './components/Header';
import logo from '../../../assets/mxm_white.png';
import {
  StateTokenContainer,
  RadioContainer,
  RadioLabelSlot,
} from './components/styled';
import './DaftarState.css';

const DaftarState = () => {
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  const datas = [
    {
      nama: 'Medic',
      slot: 20,
    },
    {
      nama: 'UESC',
      slot: 8,
    },
    {
      nama: 'Rencang',
      slot: 78,
    },
    {
      nama: 'Sonora',
      slot: 0,
    },
    {
      nama: 'Komcor',
      slot: 32,
    },
  ];

  return (
    <>
      <Header logo={logo} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <StateTokenContainer mt="2em">
          Kamu memiliki 3 token
        </StateTokenContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          {datas.map((data) => (
            <RadioContainer key={data.nama}>
              <input
                type="radio"
                name="organisator"
                id={data.nama}
                value={data.nama}
                ref={register({
                  required: 'Kamu harus memilih salah satu opsi!',
                })}
                disabled={!data.slot}
              />
              <label htmlFor={data.nama} className="radio">
                {data.nama}
              </label>
              <RadioLabelSlot slot={data.slot}>
                {!data.slot ? 'FULL' : data.slot}
              </RadioLabelSlot>
            </RadioContainer>
          ))}
          {errors.organisator && errors.organisator.message}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default DaftarState;
