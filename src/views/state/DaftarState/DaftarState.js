import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Container } from '@material-ui/core';
import { MxmButton } from '../../../components/reusable/button';
import { AlignMiddle } from '../../../components/reusable/container';
import Header from './components/Header';
import logo from '../../../assets/mxm_white.png';
import {
  StateTokenContainer,
  RadioContainer,
  RadioLabelSlot,
} from './components/styled';
import './DaftarState.css';

const DaftarState = () => {
  const { register, handleSubmit, errors } = useForm();

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
        paddingBottom="1em"
        boxSizing="border-box"
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
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <MxmButton type="submit" variant="contained" color="primary">
              Submit
            </MxmButton>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default DaftarState;
