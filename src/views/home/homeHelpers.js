const antanaklasiBaseUrl = (kategori) =>
  `https://d1z9g6p5mcoq6s.cloudfront.net/assets/antanaklasi/${kategori}.mp3`;

const twibbonBaseUrl = (nama) =>
  `https://d1z9g6p5mcoq6s.cloudfront.net/assets/twibbon/${nama}.png`;

const homeMatchParams = [
  {
    params: 'ukm-sains-dan-sosial',
    kategori: 'UKM Sains dan Sosial',
    istilah: 'Koinonikes Eptimonikes',
    voicenote: antanaklasiBaseUrl('sains-dan-sosial'),
    twibbon: twibbonBaseUrl('koinonikes-eptimonikes'),
  },
  {
    params: 'ukm-seni-dan-budaya',
    kategori: 'UKM Seni dan Budaya',
    istilah: 'Techni',
    voicenote: antanaklasiBaseUrl('seni-dan-budaya'),
    twibbon: twibbonBaseUrl('techni'),
  },
  {
    params: 'ukm-olahraga',
    kategori: 'UKM Olahraga',
    istilah: 'Athlima',
    voicenote: antanaklasiBaseUrl('olahraga'),
    twibbon: twibbonBaseUrl('athlima'),
  },
  {
    params: 'kegiatan-kemahasiswaan-dan-lembaga-semi-otonom',
    kategori: 'Kegiatan Kemahasiswaan dan Lembaga Semi Otonom',
    istilah: 'Drastiriotites',
    voicenote: antanaklasiBaseUrl('mahasiswa-dan-lso'),
    twibbon: twibbonBaseUrl('drastiriotites'),
  },
  {
    params: 'media-kampus',
    kategori: 'Media Kampus',
    istilah: 'Mesou',
    voicenote: antanaklasiBaseUrl('media-kampus'),
    twibbon: twibbonBaseUrl('mesou'),
  },
  {
    params: 'komunitas',
    kategori: 'Komunitas',
    istilah: 'Koinotita',
    voicenote: antanaklasiBaseUrl('komunitas'),
    twibbon: twibbonBaseUrl('koinotita'),
  },
  {
    params: 'lembaga-kampus',
    kategori: 'Lembaga Kampus',
    istilah: 'Lydryma',
    voicenote: antanaklasiBaseUrl('lembaga-kampus'),
    twibbon: twibbonBaseUrl('lydryma'),
  },
  {
    params: 'organisasi-dan-himpunan-mahasiswa',
    kategori: 'Organisasi dan Himpunan Mahasiswa',
    istilah: 'Organosi',
    voicenote: antanaklasiBaseUrl('organisasi-dan-himpunan'),
    twibbon: twibbonBaseUrl('organosi'),
  },
];

export default homeMatchParams;
