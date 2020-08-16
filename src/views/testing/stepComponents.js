/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Box, Container } from '@material-ui/core';
import './Survei.scss';
import {
  MxmInput,
  MxmTextArea,
} from '../../components/reusable/input';

const SectionOne = () => (
  <Container maxWidth="sm">
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className="section-step"
    >
      <span className="step-title-input">Nama Lengkap</span>
      <MxmInput
        name="nama"
        placeholder="Nama Lengkap"
        variant="filled"
      />

      <br />

      <span className="step-title-input">NIM</span>
      <MxmInput
        name="nim"
        placeholder="Nomor Induk Mahasiswa"
        variant="filled"
      />

      <br />

      <span className="step-title-input">STATE</span>
      <MxmInput
        name="state_name"
        placeholder="Kegiatan STATE"
        variant="filled"
      />

      <br />

      <span className="step-title-radio">
        Apakah kamu menelusuri HoME 2020 dalam web maxima.umn.ac.id?
      </span>
      <Box display="flex" flexDirection="row">
        <input
          type="radio"
          className="step-radio-btn"
          name="step1-1"
          id="yes"
        />
        <label htmlFor="yes" className="step-label">
          Ya
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step1-1"
          id="no"
        />
        <label htmlFor="no" className="step-label">
          Tidak
        </label>
      </Box>

      <br />

      <span className="step-title-radio">
        Faktor apakah yang mendorongmu untuk menentukan UKM/Media
        Kampus saat STATE 2020?
      </span>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ width: '100%' }}
      >
        <Box className="step-aligner">
          <input
            type="radio"
            className="step-radio-btn"
            name="step1-2"
            id="home2020"
            style={{ maxWidth: '50%' }}
          />
          <label htmlFor="home2020" className="step-label">
            Melihat HoME 2020
          </label>
          <input
            type="radio"
            className="step-radio-btn"
            name="step1-2"
            id="teman"
          />
          <label htmlFor="teman" className="step-label">
            Diajak teman
          </label>
          <input
            type="radio"
            className="step-radio-btn"
            name="step1-2"
            id="kakel"
          />
          <label htmlFor="kakel" className="step-label">
            Diberitahu kakak kelas
          </label>
          <input
            type="radio"
            className="step-radio-btn"
            name="step1-2"
            id="sosmed"
          />
          <label htmlFor="sosmed" className="step-label">
            Menelusuri sosial media UKM/Media kampus secara mandiri
          </label>
        </Box>
      </Box>
    </Box>
  </Container>
);

const SectionTwo = () => (
  <Container maxWidth="sm">
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className="section-step"
    >
      <span className="step-title-radio">
        HoME 2020 membantu saya untuk mengetahui organisasi yang
        sesuai dengan minat & bakat saya.
      </span>
      <Box display="flex" flexDirection="row">
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-1"
          id="step2-1-rate1"
        />
        <label htmlFor="step2-1-rate1" className="step-label">
          1
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-1"
          id="step2-1-rate2"
        />
        <label htmlFor="step2-1-rate2" className="step-label">
          2
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-1"
          id="step2-1-rate3"
        />
        <label htmlFor="step2-1-rate3" className="step-label">
          3
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-1"
          id="step2-1-rate4"
        />
        <label htmlFor="step2-1-rate4" className="step-label">
          4
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-1"
          id="step2-1-rate5"
        />
        <label htmlFor="step2-1-rate5" className="step-label">
          5
        </label>
      </Box>

      <br />

      <span className="step-title-radio">
        STATE membantu saya untuk mengenali UKM/ Media Kampus yang
        saya minati.
      </span>
      <Box display="flex" flexDirection="row">
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-2"
          id="step2-2-rate1"
        />
        <label htmlFor="step2-2-rate1" className="step-label">
          1
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-2"
          id="step2-2-rate2"
        />
        <label htmlFor="step2-2-rate2" className="step-label">
          2
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-2"
          id="step2-2-rate3"
        />
        <label htmlFor="step2-2-rate3" className="step-label">
          3
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-2"
          id="step2-2-rate4"
        />
        <label htmlFor="step2-2-rate4" className="step-label">
          4
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-2"
          id="step2-2-rate5"
        />
        <label htmlFor="step2-2-rate5" className="step-label">
          5
        </label>
      </Box>

      <br />

      <span className="step-title-radio">
        Materi yang disampaikan saat STATE 2020 sangat informatif dan
        jelas
      </span>
      <Box display="flex" flexDirection="row">
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-3"
          id="step2-3-rate1"
        />
        <label htmlFor="step2-3-rate1" className="step-label">
          1
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-3"
          id="step2-3-rate2"
        />
        <label htmlFor="step2-3-rate2" className="step-label">
          2
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-3"
          id="step2-3-rate3"
        />
        <label htmlFor="step2-3-rate3" className="step-label">
          3
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-3"
          id="step2-3-rate4"
        />
        <label htmlFor="step2-3-rate4" className="step-label">
          4
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-3"
          id="step2-3-rate5"
        />
        <label htmlFor="step2-3-rate5" className="step-label">
          5
        </label>
      </Box>

      <br />

      <span className="step-title-radio">
        STATE sangat mempengaruhi keputusan saya untuk mengikuti UKM/
        Media Kampus yang saya pilih
      </span>
      <Box display="flex" flexDirection="row">
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-4"
          id="step2-4-rate1"
        />
        <label htmlFor="step2-4-rate1" className="step-label">
          1
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-4"
          id="step2-4-rate2"
        />
        <label htmlFor="step2-4-rate2" className="step-label">
          2
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-4"
          id="step2-4-rate3"
        />
        <label htmlFor="step2-4-rate3" className="step-label">
          3
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-4"
          id="step2-4-rate4"
        />
        <label htmlFor="step2-4-rate4" className="step-label">
          4
        </label>
        <input
          type="radio"
          className="step-radio-btn"
          name="step2-4"
          id="step2-4-rate5"
        />
        <label htmlFor="step2-4-rate5" className="step-label">
          5
        </label>
      </Box>

      <br />
      <span className="step-title-input">
        Apakah materi yang disampaikan sesuai dengan harapan kamu?
        Kenapa?
      </span>
      <MxmTextArea placeholder="Jawaban Kamu..." name="materi" />

      <br />

      <span className="step-title-radio">
        Setelah mengikuti STATE 2020, saya memutuskan untuk....
      </span>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{ width: '100%' }}
      >
        <Box className="step-aligner">
          <input
            type="radio"
            className="step-radio-btn"
            name="step2-6"
            id="bergabung"
          />
          <label htmlFor="bergabung" className="step-label">
            Memilih untuk bergabung dengan UKM/ Media Kampus yang saya
            pilih
          </label>
          <input
            type="radio"
            className="step-radio-btn"
            name="step1-6"
            id="nobergabung"
          />
          <label htmlFor="nobergabung" className="step-label">
            Memilih untuk tidak bergabung dengan UKM/ Media kampus
            yang saya pilih
          </label>
        </Box>
      </Box>
    </Box>
  </Container>
);

const SectionThree = () => (
  <Container maxWidth="sm">
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className="section-step"
    >
      <span className="step-title-input">
        Kritik & Saran untuk HoME 2020?
      </span>
      <MxmTextArea name="section3_1" placeholder="Jawaban Kamu..." />

      <br />

      <span className="step-title-input">
        Kritik & Saran untuk STATE 2020?
      </span>
      <MxmTextArea name="section3_2" placeholder="Jawaban Kamu..." />
    </Box>
  </Container>
);

export default { SectionOne, SectionTwo, SectionThree };
