const antanaklasiBaseUrl = (kategori) =>
  `https://d1z9g6p5mcoq6s.cloudfront.net/assets/antanaklasi/${kategori}.mp3`;

const twibbonBaseUrl = (nama) =>
  `https://d1z9g6p5mcoq6s.cloudfront.net/assets/twibbon/${nama}.png`;

const twibbonGeneratorUrl = (nama) =>
  `https://mxm.one/twibbon-${nama}`;

const homeMatchParams = [
  {
    params: 'ukm-sains-dan-sosial',
    kategori: 'UKM Sains dan Sosial',
    istilah: 'Koinonikes Eptimonikes',
    voicenote: antanaklasiBaseUrl('sains-dan-sosial'),
    twibbon: twibbonBaseUrl('koinonikes-eptimonikes'),
    kinitro: 'Temukan potensi, jadi diri sendiri!',
    generator: twibbonGeneratorUrl('koinonikes'),
  },
  {
    params: 'ukm-seni-dan-budaya',
    kategori: 'UKM Seni dan Budaya',
    istilah: 'Techni',
    voicenote: antanaklasiBaseUrl('seni-dan-budaya'),
    twibbon: twibbonBaseUrl('techni'),
    kinitro:
      'Lakukan seakan ini hari terakhir, bermimpi seakan hidup abadi!',
    generator: twibbonGeneratorUrl('techni'),
  },
  {
    params: 'ukm-olahraga',
    kategori: 'UKM Olahraga',
    istilah: 'Athlima',
    voicenote: antanaklasiBaseUrl('olahraga'),
    twibbon: twibbonBaseUrl('athlima'),
    kinitro: 'Aku lebih dari impianku!',
    generator: twibbonGeneratorUrl('athlima'),
  },
  {
    params: 'kegiatan-kemahasiswaan-dan-lembaga-semi-otonom',
    kategori: 'Kegiatan Kemahasiswaan dan Lembaga Semi Otonom',
    istilah: 'Drastiriotites',
    voicenote: antanaklasiBaseUrl('mahasiswa-dan-lso'),
    twibbon: twibbonBaseUrl('drastiriotites'),
    kinitro: 'Beri tahu dunia kamu luar biasa!',
    generator: twibbonGeneratorUrl('drastiriotites'),
  },
  {
    params: 'media-kampus',
    kategori: 'Media Kampus',
    istilah: 'Mesou',
    voicenote: antanaklasiBaseUrl('media-kampus'),
    twibbon: twibbonBaseUrl('mesou'),
    kinitro: '1000 langkah besar dimulai dari 1 langkah kecil',
    generator: twibbonGeneratorUrl('mesou'),
  },
  {
    params: 'komunitas',
    kategori: 'Komunitas',
    istilah: 'Koinotita',
    voicenote: antanaklasiBaseUrl('komunitas'),
    twibbon: twibbonBaseUrl('koinotita'),
    kinitro: 'Aku lebih dari sekedar kata mereka!',
    generator: twibbonGeneratorUrl('koinotita'),
  },
  {
    params: 'lembaga-kampus',
    kategori: 'Lembaga Kampus',
    istilah: 'Lydryma',
    voicenote: antanaklasiBaseUrl('lembaga-kampus'),
    twibbon: twibbonBaseUrl('lydryma'),
    kinitro: 'Alasan untuk berhenti adalah sudah sampai di tujuan.',
    generator: twibbonGeneratorUrl('lydryma'),
  },
  {
    params: 'organisasi-dan-himpunan-mahasiswa',
    kategori: 'Organisasi dan Himpunan Mahasiswa',
    istilah: 'Organosi',
    voicenote: antanaklasiBaseUrl('organisasi-dan-himpunan'),
    twibbon: twibbonBaseUrl('organosi'),
    kinitro: 'Satu tujuan, berjuta jalan!',
    generator: twibbonGeneratorUrl('organosi'),
  },
];

const homePantun = [
  {
    baris1: 'Dua tiga kapur barus',
    baris2: 'Masa mau disini terus',
  },
  {
    baris1: 'Dua tiga gajah berlari',
    baris2: 'Perjalananmu telah dimulai dari sini',
  },
  {
    baris1: 'Dua tiga halaman banjir',
    baris2: 'Terimakasih sudah mampir',
  },
];

export default { homeMatchParams, homePantun };
