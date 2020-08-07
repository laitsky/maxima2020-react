const antanaklasiBaseUrl = (kategori) =>
  `https://d1z9g6p5mcoq6s.cloudfront.net/assets/antanaklasi/${kategori}.mp3`;

const homeMatchParams = [
  {
    params: 'sains-dan-sosial',
    kategori: 'Sains dan Sosial',
    istilah: 'Koinonikes Eptimonikes',
    voicenote: antanaklasiBaseUrl('sains-dan-sosial'),
  },
  {
    params: 'seni-dan-budaya',
    kategori: 'Seni dan Budaya',
    istilah: 'Techni',
    voicenote: antanaklasiBaseUrl('seni-dan-budaya'),
  },
  {
    params: 'olahraga',
    kategori: 'Olahraga',
    istilah: 'Athlima',
    voicenote: antanaklasiBaseUrl('olahraga'),
  },
  {
    params: 'mahasiswa-dan-lso',
    kategori: 'Mahasiswa dan LSO',
    istilah: 'Drastiriotites',
    voicenote: antanaklasiBaseUrl('mahasiswa-dan-lso'),
  },
  {
    params: 'media-kampus',
    kategori: 'Media Kampus',
    istilah: 'Mesou',
    voicenote: antanaklasiBaseUrl('media-kampus'),
  },
  {
    params: 'komunitas',
    kategori: 'Komunitas',
    istilah: 'Koinotita',
    voicenote: antanaklasiBaseUrl('komunitas'),
  },
  {
    params: 'lembaga-kampus',
    kategori: 'Lembaga Kampus',
    istilah: 'Lydryma',
    voicenote: antanaklasiBaseUrl('lembaga-kampus'),
  },
  {
    params: 'organisasi-dan-himpunan',
    kategori: 'Organisasi dan Himpunan',
    istilah: 'Organosi',
    voicenote: antanaklasiBaseUrl('organisasi-dan-himpunan'),
  },
];

export default homeMatchParams;
