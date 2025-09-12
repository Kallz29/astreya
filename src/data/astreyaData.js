export const astreyaData = {
  home: {
    title: "Astreya Worldbuilding",
    tagline: "Selamat datang, petualang, di dunia Astreya.",
    intro: [
      "Astreya adalah dunia di mana batas antara alam dan sihir sangat tipis. Kehidupan tumbuh subur, tetapi ancaman kuno masih membayangi.",
      "Setiap wilayah di Astreya kini berkembang secara mandiri, dengan pemimpin, rakyat, dan budayanya masing-masing.",
      "Namun, sejarah memiliki cara untuk kembali, dan misteri masa lalu mulai terungkap.",
      "Astreya kini menunggu para petualang yang berani untuk menorehkan kisahnya."
    ]
  },

  regions: [
 {
      name: "Gelvara",
      title: "Gelvara",
      julukan: "Negeri Salju Abadi",
      deskripsi: "Dataran luas yang tertutup es dan salju abadi. Dihuni oleh suku-suku Frostborn yang tangguh dan hidup dalam klan-klan pemburu.",
      rakyat: "Frostborn",
      pemimpin: "Jaya Volkov",
      pekerjaan: "Tambang Es, Pemburu Hewan Buas, Pengrajin Kulit",
      sumberDayaAlam: "Kristal Es, Bijih Besi Dingin",
      agama: "Pemuja Roh Es",
      imageEnv: "./assets/env_gelvara.png",
      legend: [
        { name: "Benteng Es" },
        { name: "Gletser Retak" },
        { name: "Lembah Reruntuhan" },
        { name: "Hutan Beku" },
        { name: "Sungai Pembeku" }
      ],
      coords: { top: "27%", left: "74%" }
    },
    {
      name: "Drenmar",
      title: "Drenmar",
      julukan: "Hutan Kuno",
      deskripsi: "Hutan lebat dan misterius yang dipenuhi oleh elf yang bijaksana dan menjaga tradisi kuno. Rumah bagi sihir yang mengalir kuat dan artefak kuno.",
      rakyat: "Suku Lirien",
      pemimpin: "Elaria Cahyarimbun",
      pekerjaan: "Pemburu, Pemanen Sihir",
      sumberDayaAlam: "Kayu Suci, Herbal Langka",
      agama: "Pemuja Pohon Cahaya",
      imageEnv: "./assets/env_drenmar.png",
      legend: [
        { name: "Perlindungan Lirien" },
        { name: "Pohon Hati" },
        { name: "Sungai Kehidupan" },
        { name: "Reruntuhan Bawah Pohon" },
        { name: "Danau Cahaya" }
      ],
      coords: { top: "45%", left: "90%" }
    },
    {
      name: "Lembara",
      title: "Lembara",
      julukan: "Kota Cahaya",
      deskripsi: "Pusat peradaban, pengetahuan, dan ibukota di Astreya. Wilayah ini adalah rumah bagi manusia dari berbagai latar belakang, yang datang untuk mencari ilmu, kekayaan, dan kesempatan, seluruh arsip Astreya terdapat diwilayah ini",
      rakyat: "Klan Veritas",
      pemimpin: "Arimantya Cahyamaguna",
      pekerjaan: "Pedagang, Penyihir, Pengrajin",
      sumberDayaAlam: "Batu Permata, Bahan Ramuan",
      agama: "Beragam, toleran",
      imageEnv: "./assets/env_lembara.png",
      legend: [
        { name: "Akademi Veritas" },
        { name: "Pusat Arcane" },
        { name: "Reruntuhan Bawah Tanah" },
        { name: "Area Ladang" },
        { name: "Jembatan Sinar" }
      ],
      coords: { top: "60%", left: "57%" }
    },
    {
      name: "Nalarra",
      title: "Nalarra",
      julukan: "Kepulauan Badai",
      deskripsi: "Kepulauan vulkanik yang diselimuti kabut, menjadi rumah bagi para bajak laut dan pelaut yang mencari kebebasan dari hukum daratan.",
      rakyat: "Anak Badai",
      pemimpin: "Kapten Balam",
      pekerjaan: "Bajak Laut, Nelayan, Pengumpul Harta Karun",
      sumberDayaAlam: "Harta Karun, Ikan Langka",
      agama: "Pemuja Dewa Laut",
      imageEnv: "./assets/env_nalarra.png",
      legend: [
        { name: "Pangkalan Bajak Laut" },
        { name: "Teluk Bayangan" },
        { name: "Kapal Hantu" },
        { name: "Tebing Berpetir" },
        { name: "Kuil yang Tenggelam" }
      ],
      coords: { top: "72%", left: "10%" }
    },
    {
      name: "Hijrana",
      title: "Hijrana",
      julukan: "Rawa Terlupakan",
      deskripsi: "Wilayah rawa yang luas, di mana reruntuhan kuno tersembunyi di balik kabut dan vegetasi yang lebat. Dihuni oleh suku yang hidup selaras dengan alam rawa.",
      rakyat: "Suku Lumina",
      pemimpin: "Raja Bhaskara",
      pekerjaan: "Petani Rawa, Pengumpul Herbal",
      sumberDayaAlam: "Lumpur Subur, Tumbuhan Obat",
      agama: "Pemuja Roh Tanah",
      imageEnv: "./assets/env_hijrana.png",
      legend: [
        { name: "Desa Terapung" },
        { name: "Hutan Pohon Kristal" },
        { name: "Sumber Mata Air" },
        { name: "Gubuk Terbengkalai" },
        { name: "Jalur Lumina" }
      ],
      coords: { top: "58%", left: "22%" }
    },
    {
      name: "Shirana",
      title: "Shirana",
      julukan: "Rimba Hidup",
      deskripsi: "Rimba yang lebat dan penuh kehidupan, menjadi rumah bagi suku-suku yang ahli dalam berburu dan meramu obat. Hutan ini memiliki kehidupan yang unik dan terkadang berbahaya.",
      rakyat: "Penjaga Rimba",
      pemimpin: "Ratu Aruna",
      pekerjaan: "Pemburu, Peramu Obat",
      sumberDayaAlam: "Buah Eksotis, Kulit Hewan",
      agama: "Animisme",
      imageEnv: "./assets/env_shirana.png",
      legend: [
        { name: "Pondok Penjaga" },
        { name: "Reruntuhan Tersembunyi" },
        { name: "Sungai Ular" },
        { name: "Gua Penyembuhan" },
        { name: "Pohon Raksasa" }
      ],
      coords: { top: "75%", left: "92%" }
    },
    {
      name: "Pasvara",
      title: "Pasvara",
      julukan: "Oase Terakhir",
      deskripsi: "Tanah gurun yang luas dan kering, di mana suku nomaden bertahan hidup dengan kebijaksanaan kuno. Di bawah pasirnya, terdapat rahasia peradaban yang terlupakan.",
      rakyat: "Nomad Asyrian",
      pemimpin: "Amir Zaid",
      pekerjaan: "Peternak Unta, Pengrajin Kulit",
      sumberDayaAlam: "Rempah-rempah, Mata Air Suci",
      agama: "Pemuja Matahari",
      imageEnv: "./assets/env_pasvara.png",
      legend: [
        { name: "Oase Harapan" },
        { name: "Jalur Perdagangan Kuno" },
        { name: "Reruntuhan Batu Rune" },
        { name: "Bukit Gema" },
        { name: "Titik Bayangan" }
      ],
      coords: { top: "88%", left: "55%" }
    },
    {
      name: "Kavvara",
      title: "Kavvara",
      julukan: "Pegunungan Baja",
      deskripsi: "Pegunungan terjal di barat daya. Rumah bagi para kurcaci yang ahli dalam penambangan dan pandai besi. Di dalamnya, mereka menambang mineral langka dan membangun kota di bawah tanah.",
      rakyat: "Suku Besi-Arang",
      pemimpin: "Raja Gromdin 'Tangan Besi'",
      pekerjaan: "Penambang, Pandai Besi",
      sumberDayaAlam: "Emas, Perak, Mineral Langka",
      agama: "Pemuja Dewa Api",
      imageEnv: "./assets/env_kavvara.png",
      legend: [
        { name: "Gerbang Kurcaci" },
        { name: "Pabrik Besi Arang" },
        { name: "Tambang Kristal" },
        { name: "Jembatan Besi" },
        { name: "Jantung Pegunungan" }
      ],
      coords: { top: "88%", left: "13%" }
    },
  ],
};
