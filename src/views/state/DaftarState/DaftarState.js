import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { MxmButton } from '../../../components/reusable/button';
import Header from './components/Header';
import logo from '../../../assets/mxm_white.png';
import {
  StateTokenContainer,
  RadioContainer,
  RadioLabelSlot,
  StateSelectOverflow,
} from './components/styled';
import studentService from '../../../services/student';
import './DaftarState.css';

const DaftarState = ({ day }) => {
  const [data, setData] = useState(false);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const { organisator } = data;
    history.push({
      pathname: `/state/detail-organisator/${organisator.toLowerCase()}`,
      day,
    });
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
      <Header logo={logo} day={day} />
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
          <StateSelectOverflow>
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
          </StateSelectOverflow>
          {errors.organisator && errors.organisator.message}
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <MxmButton
              type="submit"
              variant="contained"
              color="primary"
            >
              Pilih
            </MxmButton>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default DaftarState;
