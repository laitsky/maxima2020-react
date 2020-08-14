import React from 'react';
import { TextField, Box } from '@material-ui/core';
import './Survei.scss';

const SectionOne = () => (
  <Box>
    <TextField name="nama" label="Nama Lengkap" variant="filled" />
    <TextField
      name="nim"
      label="Nomor Induk Mahasiswa"
      variant="filled"
    />
    <TextField
      name="state_name"
      label="Kegiatan STATE"
      variant="filled"
    />
    <div>
      Apakah kamu menelusuri HoME 2020 dalam web maxima.umn.ac.id?
      RADIO DISINIII
    </div>
    <div>
      Faktor apakah yang mendorongmu untuk menentukan UKM/Media Kampus
      saat STATE 2020? RADIO DISINIiii
    </div>
  </Box>
);

const SectionTwo = () => (
  <Box>
    <h1>Radio disini bossssssssss</h1>
    <p>
      "Apakah materi yang disampaikan sesuai dengan harapan kamu?
      Kenapa?" buat pertanyaan yang ini ga usah, ntar gua yang atur
    </p>
  </Box>
);

const SectionThree = () => (
  <div>
    <h1>Ini halaman 3, ntar gua yang aturrrr</h1>
  </div>
);

export default { SectionOne, SectionTwo, SectionThree };
