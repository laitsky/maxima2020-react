import React from 'react';
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { motion } from 'framer-motion';
import { AlignMiddle, MxmLogoContainer } from '../../../components';
import { MxmLogoText } from '../../../assets';

const FAQ = () => {
  return (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <Container maxWidth="md" style={{ paddingBottom: '2em' }}>
        <AlignMiddle style={{ paddingTop: '2em' }}>
          <motion.div
            initial={{ y: -999, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
          >
            <MxmLogoContainer src={MxmLogoText} alt="Logo MAXIMA" />
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.6,
            }}
          >
            <h1
              className="mxm-navy"
              style={{ fontFamily: 'canaro-bold' }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </motion.div>
        </AlignMiddle>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Seputar MAXIMA</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ol>
                <li>
                  <strong>MAXIMA 2020</strong> adalah kegiatan yang
                  bertujuan untuk memperkenalkan kehidupan
                  non-akademik di UMN kepada mahasiswa, khususnya
                  mahasiswa baru. Pengenalan ini akan dilaksanakan
                  melalui 3 rangkaian acara yaitu:{' '}
                  <strong>HoME</strong> (Hall of Maxima Exhibition),{' '}
                  <strong>STATE</strong> (Student Activities Unit
                  Explore), dan <strong>Malam Puncak MAXIMA</strong>.
                </li>
                <br />
                <strong>
                  <i>
                    Kegiatan MAXIMA juga bersifat wajib untuk seluruh
                    mahasiswa baru
                  </i>
                </strong>
                <br />
                <br />
                <li>
                  <strong>HoME (Hall of Maxima Exhibition)</strong>{' '}
                  adalah pameran yang bertujuan untuk memperkenalkan &
                  memberikan informasi tentang kegiatan organisasi
                  kemahasiswaan (UKM, Komunitas, Media Kampus, dan
                  masih banyak lagi!) yang berada di Universitas
                  Multimedia Nusantara kepada Mahasiswa Baru UMN.
                  Pameran HoME akan dibuka dari tanggal 24 Agustus
                  2020 hingga rangkaian MAXIMA 2020 berakhir.
                </li>
                <br />
                <li>
                  <strong>
                    STATE (Student Activities Unit Explore)
                  </strong>{' '}
                  adalah sebuah kegiatan yang memberikan kesempatan
                  kepada mahasiswa baru UMN untuk mengeksplorasi UKM
                  dan Media Kampus dengan mencoba mengikuti kegiatan
                  yang dilakukan oleh UKM atau Media Kampus di UMN
                  (Free Trial) sekaligus memperkenalkan UKM dan Media
                  kampus kepada mahasiswa baru.
                </li>
                <br />
                <strong>
                  <u>
                    Registrasi STATE akan diselenggarakan pada tanggal
                    31 Agustus - 4 September 2020
                  </u>
                </strong>
                .
                <br />
                <br />
                <strong>
                  <u>
                    Pelaksanaan STATE akan diselenggarakan pada
                    tanggal 7 - 10 September 2020
                  </u>
                </strong>
                .
                <br />
                <br />
                <li>
                  <strong>MAXIMA (Malam Expresi Mahasiswa)</strong>{' '}
                  merupakan acara penutup dari seluruh rangkaian
                  MAXIMA dimana MAXIMA menjadi tempat bagi organisator
                  untuk mengenalkan diri mereka kepada mahasiswa baru
                  melalui penampilan di atas panggung serta
                  booth-booth yang disediakan, serta sebagai
                  kesempatan para mahasiswa untuk mendapat informasi
                  dan mendaftarkan diri di UKM/organisasi pilihan
                  mereka.
                </li>
                <br />
                <strong>
                  <u>
                    MAXIMA akan diselenggarakan pada tanggal 26
                    September 2020
                  </u>
                </strong>
                .
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Waktu Operasional HoME MAXIMA 2020
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  HoME MAXIMA UMN 2020 dapat diakses kapanpun,
                  dimanapun mulai Hari Senin, 24 Agustus 2020 pkl.
                  08:00 WIB
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
            <Typography>Pendaftaran Akun MAXIMA</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Pendaftaran Akun MAXIMA dapat dilakukan pada tanggal
                  31 Agustus 2020 - 4 September 2020 untuk mendaftar
                  dalam rangkaian acara STATE (7 - 10 September 2020)
                  yang merupakan sebuah Free Trial Organisasi.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>Twibbon HoME 2020</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Twibbon dapat diunduh melalui situs web
                  maxima.umn.ac.id mulai Hari Senin, 24 Agustus 2020
                  pkl. 08:00.
                </li>
                <br />
                <li>
                  Pengunggahan Twibbon HoME 2020 harus disesuaikan
                  dengan syarat dan ketentuan yang berlaku, yaitu :
                  <ol>
                    <br />
                    <li>
                      Maximers wajib mengunggah di akun instagram
                      pribadi dan akun tidak di Private.
                    </li>
                    <br />
                    <li>
                      Maximers mengunggah foto tersebut ke instagram
                      dengan men-tag akun Instagram @maximaumn dan
                      menggunakan tagar{' '}
                      <strong>#HoME2020 #PaveYourOwnJourney</strong>.
                    </li>
                    <br />
                    <li>
                      Maximers memberikan caption yang menarik tentang
                      “Sebutkan 3 pengalaman yang paling mengesankan
                      selama masa karantina”.
                    </li>
                    <br />
                    <li>
                      Awali caption kamu dengan kalimat seperti ini,
                      ya!
                      <br />
                      <i>
                        Halo, MAXIMERS! Perkenalkan aku (Nama Lengkap)
                        dan aku siap untuk berpetualang bersama
                        #(Organisasi yang ingin kamu ikuti)
                      </i>
                      .
                    </li>
                    <br />
                    <li>
                      Twibbon tersebut akan digunakan sebagai satu
                      persyaratan untuk mendapatkan +1 SKKM Ilmiah dan
                      Penalaran saat STATE
                    </li>
                    <br />
                    <li>
                      Peserta dapat menuliskan lebih dari 1 organisasi
                      yang diminati dalam caption Instagram.
                    </li>
                    <br />
                    <li>
                      Twibbon bersifat WAJIB untuk pemenuhan SKKM saat
                      STATE nanti.
                    </li>
                    <br />
                    <li>
                      Twibbon digunakan hingga akhir rangkaian MAXIMA
                      2020 (26 September 2020).
                    </li>
                  </ol>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography>
              Syarat & ketentuan HoME 2020 Competition
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ol>
                <li>
                  Kompetisi diselenggarakan pada 24 Agustus 2020 - 28
                  Agustus 2020.
                </li>
                <br />
                <li>
                  Kompetisi terbuka bagi Mahasiswa aktif UMN dan
                  dilaksanakan Pk 08.00 - Pk 20.00 setiap harinya.
                </li>
                <br />
                <li>
                  Maximers mengupload story di akun instagram pribadi
                  dan akun <strong>tidak di Private</strong>.
                </li>
                <br />
                <li>
                  Maximers wajib menggunakan{' '}
                  <strong>filter HoME Competition 2020</strong>.
                </li>
                <br />
                <li>
                  Maximers wajib menggunakan tema{' '}
                  <strong>“Inilah Aku”</strong> yang memiliki arti
                  untuk mengajak setiap Maximers untuk menunjukan
                  siapa dirinya dengan menampilkan bakat-bakatnya
                  dengan tujuan untuk membangun rasa percaya diri.
                </li>
                <br />
                <li>
                  Maximers dapat menggunakan kreativitasnya dalam
                  membuat instagram story (Maks. 2 post story).
                </li>
                <br />
                <li>
                  Maximers dapat menggunakan konsep video berupa cover
                  lagu, dance, mini drama, dan lain sebagainya sesuai
                  dengan tema.
                </li>
                <br />
                <li>
                  Jika video berisi lebih dari satu orang, Story
                  Instagram hanya di-post oleh salah satu perwakilan.
                </li>
                <br />
                <li>
                  Maximers wajib memfollow dan men-mention akun
                  @maximaumn dan @homecompetition2020.
                </li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography>
              Timeline rangkaian acara MAXIMA 2020
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  HoME (Hall of Maxima Exhibition): Dibuka 24 Agustus
                  2020 (Dapat diakses di manapun, kapanpun)
                </li>
                <br />
                <li>
                  Registrasi STATE: 31 Agustus 2020 - 4 September 2020
                </li>
                <br />
                <li>STATE: 7 - 10 September 2020</li>
                <br />
                <li>Malam Puncak : 26 September 2020</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <Typography>
              Perbedaan Pendaftaran STATE dan Pendaftaran Organisasi /
              Media Kampus
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  STATE (Student Activities Unit Explore) merupakan
                  sebuah kesempatan untuk mahasiswa baru untuk
                  mengeksplorasi kegiatan dari organisasi / Media
                  Kampus yang ada di UMN (Free Trial). Sehingga
                  mendaftar di dalam STATE tidak sama dengan
                  mendaftarkan diri dalam organisasi terkait.
                </li>
                <br />
                <li>
                  Pendaftaran Organisasi / Media Kampus akan
                  dijalankan secara mandiri oleh organisasi terkait
                  melalui Open Recruitment yang diselenggarakan oleh
                  organisasi tersebut. Informasi terkait Open
                  Recruitment organisasi tersebut dapat diperoleh
                  melalui sosial media organisasi dan STATE.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <Typography>Cara Mendaftar STATE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Pendaftaran STATE akan dibuka pada tanggal 31
                  Agustus 2020 hingga 4 September 2020 bagi para
                  Mahasiswa Baru UMN 2020.
                </li>
                <br />
                <li>
                  Langkah-langkah untuk mendaftar STATE :
                  <ol>
                    <br />
                    <li>Akses Website maxima.umn.ac.id.</li>
                    <br />
                    <li>
                      Klik ‘Daftar’ untuk mendaftarkan akun baru.
                    </li>
                    <br />
                    <li>
                      Lalu Klik ‘STATE’ untuk memulai pendaftaran
                      kegiatan STATE.
                    </li>
                    <br />
                    <li>
                      Pilih hari yang dituju dan klik kegiatan yang
                      diinginkan (1 Hari hanya bisa 1 STATE).
                    </li>
                    <br />
                    <li>
                      Ketuk ‘Simpan’ untuk menyelesaikan pendaftaran
                      STATE.
                    </li>
                    <br />
                    <li>
                      Jika ingin membatalkan kegiatan, bisa memilih ‘
                      Batalkan STATE ini”.
                    </li>
                    <br />
                    <li>
                      Lihat jadwal STATE mu dari tombol navigasi di
                      bawah “Linimasa”.
                    </li>
                  </ol>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9a-content"
            id="panel9a-header"
          >
            <Typography>Registrasi Ulang saat STATE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Sebelum mengikuti kegiatan STATE yang berlangsung
                  pada tanggal 7-10 September 2020 (18.15-21.30 WIB),{' '}
                  <strong>
                    peserta dihimbau untuk menjalankan ISHOMA dan
                    makan malam terlebih dahulu
                  </strong>
                  .
                </li>
                <br />
                <li>
                  Registrasi ulang akan dimulai pukul{' '}
                  <strong>18.15 - 18.30</strong> WIB dengan tata cara
                  berikut:
                  <ol>
                    <br />
                    <li>
                      Para peserta memasuki ruangan Zoom melalui link
                      yang telah di-share melalui web maxima.umn.ac.id
                      setelah mendaftarkan STATE.
                    </li>
                    <br />
                    <li>
                      Peserta akan dialihkan untuk masuk di{' '}
                      <i>Waiting Room</i> terlebih dahulu.
                    </li>
                    <br />
                    <li>
                      Petugas registrasi akan meminta Peserta untuk
                      mengganti <i>Username</i> peserta menjadi{' '}
                      <strong>Nama Lengkap | NIM</strong> [Contoh:
                      John Smith | 00000012345]
                    </li>
                    <br />
                    <li>
                      Petugas Registrasi akan mendata dan memvalidasi
                      peserta yang telah mengikuti Zoom STATE
                      tersebut.
                    </li>
                    <br />
                    <li>
                      Kemudian, petugas Registrasi akan mengarahkan
                      peserta untuk melakukan{' '}
                      <strong>
                        Registrasi Ulang di website Maxima.umn.ac.id
                        dengan token unik
                      </strong>{' '}
                      yang akan diberikan petugas registrasi melalui{' '}
                      <i>Chat Waiting Room</i>.
                    </li>
                    <br />
                    <li>
                      Petugas registrasi akan mengizinkan peserta
                      untuk masuk ke dalam STATE Room jika telah
                      melakukan Registrasi Ulang dan pengubahan format
                      nama yang sesuai.
                    </li>
                  </ol>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10a-content"
            id="panel10a-header"
          >
            <Typography>Jangan Lupa Absen Pas STATE!</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  Tahu gak sih? Mengikuti STATE dengan baik dan benar
                  akan membuahkan kamu 1 SKKM Ilmiah & Penalaran, loh!
                </li>
                <br />
                <li>
                  Agar kami dapat memastikan kehadiranmu, jangan lupa
                  untuk absensi dengan benar ya Maximers!
                </li>
                <br />
                <li>
                  <strong>
                    Absensi STATE akan dilakukan 2x, yaitu di awal dan
                    di akhir
                  </strong>
                  .
                  <ul>
                    <br />
                    <li>
                      Sebelum STATE dimulai, kamu akan diberikan{' '}
                      <strong>Token Unik</strong> oleh petugas
                      registrasi melalui Chat Waiting Room dan token
                      tersebut perlu kamu isi pada website{' '}
                      <strong>maxima.umn.ac.id</strong>.
                    </li>
                    <br />
                    <li>
                      Pada akhir sesi STATE, peserta akan diwajibkan
                      untuk mengisi <strong>kuesioner</strong> yang
                      akan dijadikan sebagai bukti kehadiran peserta
                      untuk STATE tersebut.
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  Oh ya! Penting banget untuk kalian perhatikan bahwa
                  semua STATE yang kalian daftarkan, harus diikuti
                  hingga selesai ya agar kamu valid untuk menerima
                  SKKM tersebut! Misalnya; jika kamu mendaftarkan diri
                  untuk 2 STATE, maka kamu harus mengikuti kedua STATE
                  tersebut hingga akhir.
                </li>
                <br />
                Mudah diikuti kan, Maximers? Sampai bertemu di STATE!
                ;)
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11a-content"
            id="panel11a-header"
          >
            <Typography>Semua Seputar Token</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  “Token buat apa sih, min?”
                  <ul>
                    <br />
                    <li>
                      Jadi Maximers, saat kalian akan mendaftar untuk
                      STATE kalian akan mendapatkan 3 Token.
                    </li>
                    <br />
                    <li>
                      Nah, 3 token ini bisa kalian gunakan untuk
                      mendaftar maksimal 3 STATE diantara Day 1 sampai
                      Day 4.
                    </li>
                    <br />
                    <li>
                      <strong>(1 Token = 1 STATE)</strong>
                    </li>
                    <br />
                    <li>
                      Penting banget untuk kalian perhatikan bahwa
                      semua STATE yang kalian daftarkan, harus diikuti
                      ya!
                    </li>
                    <br />
                    <li>
                      Misalnya; jika kamu mendaftarkan diri untuk 2
                      STATE, maka kamu harus mengikuti kedua STATE
                      tersebut hingga akhir.
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  “Jika tidak, konsekuensinya apa min?”
                  <ul>
                    <br />
                    <li>
                      Kalau kamu tidak mengikuti semua STATE yang
                      telah kamu daftarkan, kamu akan dianggap tidak
                      valid untuk mendapatkan SKKM Ilmiah & Penalaran
                      ya..
                    </li>
                  </ul>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel12a-content"
            id="panel12a-header"
          >
            <Typography>Peraturan STATE (Penting!)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sebelum mengikuti STATE pada tanggal 7 - 10 September
              2020, yuk simak dulu peraturan-peraturan yang berlaku
              ya!
              <ol>
                <li>
                  STATE akan dimulai pada pukul{' '}
                  <strong>18.15 WIB - selesai</strong> (Paling lambat
                  21.30 WIB).
                </li>
                <br />
                <li>
                  Peserta STATE wajib melakukan{' '}
                  <strong>registrasi ulang</strong> pada pukul{' '}
                  <strong>18.15 - 18.30 WIB</strong> tanpa ada
                  toleransi keterlambatan (Ruangan ZOOM akan di-lock
                  pada pukul 18.30 WIB)
                </li>
                <br />
                <li>
                  Peserta STATE wajib mengubah format username menjadi{' '}
                  <strong>Nama Lengkap| NIM</strong> (e.g., John
                  Smith| 00000012345)
                </li>
                <br />
                <li>
                  Peserta STATE wajib menyalakan kamera saat sesi
                  STATE berlangsung.
                </li>
                <br />
                <li>
                  Peserta STATE diperkenankan untuk menyalakan
                  microphone saat sesi interaktif.
                </li>
                <br />
                <li>
                  Peserta STATE wajib memakai pakaian yang sopan &
                  rapih serta memiliki posisi duduk yang sopan, baik
                  dan benar.
                </li>
                <br />
                <li>
                  Peserta STATE tidak diperkenankan untuk makan dan
                  tidur selama sesi kegiatan.
                </li>
                <br />
                <li>
                  Jika ingin ke toilet, peserta STATE wajib izin
                  kepada panitia melalui chat dan kamera harus tetap
                  dinyalakan.
                </li>
                <br />
                <li>
                  Peserta STATE wajib melakukan{' '}
                  <strong>
                    absensi di awal sesi dan di akhir sesi STATE
                  </strong>
                  .
                </li>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQ;
