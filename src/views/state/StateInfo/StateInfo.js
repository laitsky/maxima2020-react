/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './StateInfo.scss';

const StateInfo = () => {
  return (
    <div id="state_info-container">
      <Container maxWidth="sm">
        <h1
          style={{
            fontFamily: 'canaro-bold',
            letterSpacing: 1.5,
            color: '#F4224B',
            paddingTop: '2.5em',
            marginTop: 0,
          }}
        >
          Ahoi, Wanderers.
        </h1>
        <h2>Temukan informasi yang kamu perlukan disini.</h2>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Cara Mendaftar STATE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Pendaftaran STATE akan dibuka pada tanggal 31 Agustus
              2020 hingga 4 September 2020 bagi para Mahasiswa Baru
              UMN 2020. Langkah-langkah untuk mendaftar STATE:
              <ul>
                <li>Akses Website maxima.umn.ac.id</li>
                <li>Klik 'Masuk' untuk mendaftarkan aku baru</li>
                <li>
                  Lalu klik 'STATE' untuk memulai pendaftaran kegiatan
                  STATE
                </li>
                <li>
                  Pilih hari yang dituju dan klik kegiatan yang
                  diinginkan
                </li>
                <li>
                  Ketuk 'Simpan' untuk menyelesaikan pendaftaran STATE
                </li>
                <li>
                  Jika ingin membatalkan kegiatan, bisa memilih
                  'Batalkan STATE ini'
                </li>
                <li>
                  Lihat jadwal STATE mu dari tombol navigasi dibawah,
                  "Schedule"
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Registrasi Ulang saat STATE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sebelum mengikuti kegiatan STATE yang berlangsung pada
              tanggal 7-10 September 2020 (18.15-21.30 WIB),{' '}
              <span style={{ fontWeight: 'bold' }}>
                peserta dihimbau untuk menjalankan ISHOMA dan makan
                malam terlebih dahulu.
              </span>
              <br />
              Registrasi ulang akan dimulai pukul{' '}
              <span style={{ fontWeight: 'bold' }}>
                18.15 - 18.30
              </span>
              WIB dengan tata cara berikut:
              <ul>
                <li>
                  Para peserta memasuki ruangan Zoom melalui link yang
                  telah di-share melalui web maxima.umn.ac.id setelah
                  mendaftarkan STATE.
                </li>
                <li>
                  Peserta akan dialihkan untuk masuk di Waiting Room
                  terlebih dahulu.
                </li>
                <li>
                  Petugas registrasi akan meminta Peserta untuk
                  mengganti Username peserta menjadi{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    Nama Lengkap | NIM
                  </span>{' '}
                  <br />
                  [Contoh: John Smith | 00000012345]
                </li>
                <li>
                  Petugas Registrasi akan mendata dan memvalidasi
                  peserta yang telah mengikuti Zoom STATE tersebut.
                </li>
                <li>
                  Kemudian, petugas Registrasi akan mengarahkan
                  peserta untuk melakukan Registrasi Ulang di website
                  Maxima.umn.ac.id dengan token unik yang akan
                  diberikan petugas registrasi melalui Chat Waiting
                  Room.
                </li>
                <li>
                  Petugas registrasi akan mengizinkan peserta untuk
                  masuk ke dalam STATE Room jika telah melakukan
                  Registrasi Ulang dan pengubahan format nama yang
                  sesuai.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Jangan Lupa Absen Pas STATE!</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Tahu gak sih? Mengikuti STATE dengan baik dan benar akan
              membuahkan kamu 1 SKKM Ilmiah & Penalaran, loh! <br />
              Agar kami dapat memastikan kehadiranmu, jangan lupa
              untuk absensi dengan benar ya Maximers!
              <br />
              Absensi STATE akan dilakukan 2x, yaitu di awal dan di
              akhir.
              <ul>
                <li>
                  Sebelum STATE dimulai, kamu akan diberikan{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    Token Unik
                  </span>{' '}
                  oleh petugas registrasi melalui Chat Waiting Room
                  dan token tersebut perlu kamu isi pada website{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    maxima.umn.ac.id
                  </span>
                </li>
                <li>
                  Pada akhir sesi STATE, peserta akan diwajibkan untuk
                  mengisi{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    kuesioner
                  </span>{' '}
                  yang akan dijadikan sebagai bukti kehadiran peserta
                  untuk STATE tersebut.
                </li>
              </ul>
              Oh ya! Penting banget untuk kalian perhatikan bahwa
              semua STATE yang kalian daftarkan, harus diikuti hingga
              selesai ya agar kamu valid untuk menerima SKKM tersebut!
              <br />
              Misalnya; jika kamu mendaftarkan diri untuk 2 STATE,
              maka kamu harus mengikuti kedua STATE tersebut hingga
              akhir.
              <br />
              Mudah diikuti kan, Maximers? Sampai bertemu di STATE! ;)
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>Semua Seputar Token</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <span style={{ fontStyle: 'italic' }}>
                “Token buat apa sih, min?”{' '}
              </span>
              <br /> <br />
              Jadi Maximers, saat kalian akan mendaftar untuk STATE
              kalian akan mendapatkan 3 Token.
              <br />
              Nah, 3 token ini bisa kalian gunakan untuk mendaftar
              maksimal 3 STATE diantara Day 1 sampai Day 4. (1 Token =
              1 STATE)
              <br />
              Penting banget untuk kalian perhatikan bahwa semua STATE
              yang kalian daftarkan, harus diikuti ya!
              <br />
              Misalnya; jika kamu mendaftarkan diri untuk 2 STATE,
              maka kamu harus mengikuti kedua STATE tersebut hingga
              akhir.
              <br />
              <span style={{ fontStyle: 'italic' }}>
                “Jika tidak, konsekuensinya apa min?”
              </span>
              <br />
              Kalau kamu tidak mengikuti semua STATE yang telah kamu
              daftarkan, kamu akan dianggap tidak valid untuk
              mendapatkan SKKM Ilmiah & Penalaran ya..
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};

export default StateInfo;
