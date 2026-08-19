const DEFAULT_DATA = {
  site: {
    name: "RW 09 Tanjung Mas",
    subtitle: "Kelurahan Tanjung Mas, Kecamatan Semarang Utara",
    tagline: "Bersama Membangun Kampung Pesisir yang Mandiri, Sehat, dan Sejahtera",
    description:
      "RW 09 merupakan salah satu rukun warga di Kelurahan Tanjung Mas, Kecamatan Semarang Utara, Kota Semarang. Berada di kawasan pesisir utara Jawa, wilayah kami kaya akan tradisi bahari, kearifan lokal, dan semangat gotong royong warga.",
    aboutTitle: "Kampung Pesisir dengan Semangat Bahari",
    aboutHeading: "Semangat Bahari",
    aboutDescription:
      "Kelurahan Tanjung Mas berbatasan dengan Laut Jawa di sebelah utara dan menjadi lokasi Pelabuhan Tanjung Emas — satu-satunya pelabuhan di Kota Semarang. Sebagian besar warga berprofesi sebagai nelayan, dan keseharian masyarakat diwarnai tradisi maritim seperti sedekah laut, pasar ikan, hingga pengolahan hasil laut.",
    hero: {
      image:
        "https://images.unsplash.com/photo-1498028658436-4b07a4d1fba4?auto=format&fit=crop&w=900&q=80",
      caption: "Kehidupan masyarakat pesisir Tanjung Mas"
    },
    aboutImages: [
      "https://images.unsplash.com/photo-1500939455407-d8df4b49860b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1531214159280-079b95d72e39?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
    ],
    establishedLabel: "Tahun berdiri",
    establishedValue: "Komunitas RW 09",
    taglineCards: [
      { icon: "wave", title: "Tradisi Bahari", text: "Budaya maritim nelayan yang dijaga lintas generasi." },
      { icon: "users", title: "Gotong Royong", text: "Kebersamaan warga dalam setiap kegiatan lingkungan." }
    ],
    contact: {
      address:
        "RW 09, Kelurahan Tanjung Mas, Kecamatan Semarang Utara, Kota Semarang, Jawa Tengah 50144",
      phone: "(024) 3560341",
      waNumber: "6285241178085",
      whatsappLabel: "WA: 0852-4117-8085",
      email: "kelurahantanjungmas@gmail.com",
      hours: "Senin – Jumat, 08.00 – 15.00 WIB"
    },
    footer: {
      address:
        "RW 09, Kelurahan Tanjung Mas, Kecamatan Semarang Utara, Kota Semarang, Jawa Tengah 50144",
      phone: "(024) 3560341",
      waNumber: "6285241178085",
      whatsappLabel: "WA: 0852-4117-8085",
      email: "kelurahantanjungmas@gmail.com"
    },
    socials: [
      { name: "facebook", label: "Facebook", url: "#kontak" },
      { name: "instagram", label: "Instagram", url: "#kontak" },
      { name: "youtube", label: "YouTube", url: "#kontak" }
    ]
  },
  stats: [
    { label: "Rukun Tetangga (RT)", value: 22 },
    { label: "Kepala Keluarga (KK)", value: 834 },
    { label: "Jumlah Penduduk", value: 5625 },
    { label: "Luas Wilayah", value: "165,9 Ha", unit: true }
  ],
  visi: "Terwujudnya RW 09 Tanjung Mas yang bersih, sehat, religius, dan sejahtera melalui gotong royong seluruh warga serta sinergi dengan pemerintah dan lembaga terkait.",
  misi: [
    "Meningkatkan kualitas kesehatan dan kesejahteraan warga melalui program posyandu dan jaminan kesehatan.",
    "Menumbuhkan ekonomi kerakyatan berbasis potensi pesisir seperti perikanan, UMKM, dan wisata bahari.",
    "Menjaga kebersihan dan kelestarian lingkungan pesisir melalui pengelolaan sampah terpadu (TPS 3R) dan konservasi mangrove.",
    "Memperkuat rasa aman, toleransi, dan kerukunan antarwarga melalui pos kamling dan kegiatan sosial budaya.",
    "Mengembangkan sumber daya manusia warga melalui pendidikan dan pemberdayaan pemuda (karang taruna)."
  ],
  services: [
    {
      id: "administrasi",
      icon: "document",
      title: "Pelayanan Administrasi",
      description:
        "Bantuan pengurusan administrasi kependudukan seperti KTP, KK, akta kelahiran, dan surat pengantar bagi warga RW 09.",
      features: ["Surat pengantar KTP & KK", "Akta kelahiran & kematian", "Surat keterangan domisili"]
    },
    {
      id: "kesehatan",
      icon: "health",
      title: "Kesehatan & Posyandu",
      description:
        "Layanan kesehatan rutin untuk balita, ibu hamil, dan lansia melalui posyandu serta penyuluhan gizi dan stunting.",
      features: ["Posyandu balita & lansia", "Cek kesehatan gratis", "Penyuluhan gizi & pencegahan stunting"]
    },
    {
      id: "keamanan",
      icon: "shield",
      title: "Keamanan & Ketertiban",
      description:
        "Sistem keamanan lingkungan berbasis ronda malam (siskamling), pos kamling, dan siaga bencana rob.",
      features: ["Ronda malam & pos kamling", "Siaga bencana rob", "Sosialisasi kamtibmas"]
    },
    {
      id: "umkm",
      icon: "shop",
      title: "Pemberdayaan UMKM",
      description:
        "Pendampingan pelaku usaha mikro seperti batik, olahan ikan, dan produk khas pesisir untuk meningkatkan ekonomi warga.",
      features: ["Pembinaan batik & olahan ikan", "Pelatihan kewirausahaan", "Pendampingan pemasaran"]
    },
    {
      id: "lingkungan",
      icon: "leaf",
      title: "Kebersihan & Lingkungan",
      description:
        "Pengelolaan sampah terpadu, jumantik, kerja bakti, serta penanaman mangrove untuk menjaga ekosistem pesisir.",
      features: ["Pengolahan sampah TPS 3R", "Kerja bakti & jumantik", "Konservasi mangrove"]
    },
    {
      id: "sosial",
      icon: "heart",
      title: "Sosial & Budaya",
      description:
        "Kegiatan sosial budaya seperti sedekah laut, pengajian, PKK, dan dukungan untuk warga prasejahtera.",
      features: ["Sedekah laut & tradisi bahari", "Kegiatan PKK & pengajian", "Bantuan sosial warga"]
    }
  ],
  programs: [
    {
      id: "p-1",
      category: "Kesehatan",
      title: "Gerakan Cegah Stunting",
      description:
        "Edukasi dan pendampingan kader posyandu untuk menurunkan angka stunting di wilayah pesisir Tanjung Mas.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p-2",
      category: "Lingkungan",
      title: "Menanam 1000 Mangrove",
      description:
        "Penanaman bibit mangrove di bibir pantai bersama warga, mahasiswa, dan komunitas peduli lingkungan.",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p-3",
      category: "Ekonomi",
      title: "Pasar Bahari & UMKM",
      description:
        "Promosi produk batik, olahan bandeng, dan kerajinan khas pesisir melalui pasar rakyat dan pameran UMKM.",
      image: "https://images.unsplash.com/photo-1523813305066-b5c1f0d1f4a2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p-4",
      category: "Sosial",
      title: "Jogo Tonggo & Siaga Rob",
      description:
        "Kegiatan jogo tonggo dan kesiapsiagaan menghadapi banjir rob serta musibah di lingkungan warga.",
      image: "https://images.unsplash.com/photo-1517499410974-2f8c1d2e1b45?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p-5",
      category: "Budaya",
      title: "Festival Sedekah Laut",
      description:
        "Tradisi tahunan warga pesisir sebagai ungkapan syukur nelayan atas hasil laut dan doa keselamatan.",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "p-6",
      category: "Pendidikan",
      title: "Rumah Belajar Anak Pesisir",
      description:
        "Program belajar tambahan dan pendampingan anak-anak nelayan untuk meningkatkan kualitas pendidikan.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  leadership: [
    { name: "H. Ahmad Subarkah", role: "Ketua RW 09", initials: "AS" },
    { name: "Slamet Riyadi", role: "Wakil Ketua RW 09", initials: "SR" },
    { name: "Endang Pujiastuti", role: "Sekretaris RW 09", initials: "EP" },
    { name: "Sri Mulyani", role: "Bendahara RW 09", initials: "SM" },
    { name: "Muhammad Yusuf", role: "Seksi Keamanan & Trantib", initials: "MY" },
    { name: "Ratna Sari", role: "Seksi Kesehatan & Posyandu", initials: "RS" },
    { name: "Budi Santoso", role: "Seksi Ekonomi & UMKM", initials: "BS" },
    { name: "Nur Hayati", role: "Seksi Kebersihan & Lingkungan", initials: "NH" }
  ],
  gallery: [
    { id: "g-1", title: "Musyawarah Warga", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80" },
    { id: "g-2", title: "Kegiatan Nelayan", image: "https://images.unsplash.com/photo-1500939455407-d8df4b49860b?auto=format&fit=crop&w=1200&q=80" },
    { id: "g-3", title: "Kegiatan Kerja Bakti", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" },
    { id: "g-4", title: "Posyandu Balita", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" },
    { id: "g-5", title: "Pantai & Pesisir", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" },
    { id: "g-6", title: "Kegiatan Pemuda", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80" }
  ],
  faq: [
    {
      q: "Di mana letak RW 09 Tanjung Mas?",
      a: "RW 09 terletak di Kelurahan Tanjung Mas, Kecamatan Semarang Utara, Kota Semarang, Jawa Tengah — dekat dengan kawasan Pelabuhan Tanjung Emas dan pesisir Laut Jawa."
    },
    {
      q: "Apa saja layanan yang tersedia bagi warga?",
      a: "Warga dapat memanfaatkan layanan administrasi kependudukan, posyandu dan cek kesehatan, ronda keamanan, pendampingan UMKM, hingga kegiatan sosial budaya dan keagamaan."
    },
    {
      q: "Bagaimana cara bergabung dengan kegiatan warga?",
      a: "Hubungi pengurus RW melalui nomor kontak atau datang langsung ke Balai RW 09 pada jam kerja. Seluruh warga RW 09 dipersilakan berpartisipasi aktif."
    },
    {
      q: "Apakah warga bisa melaporkan masalah lingkungan?",
      a: "Ya. Warga dapat melapor melalui pengurus RT/RW, media sosial resmi, atau langsung kepada Seksi Kebersihan & Lingkungan RW 09."
    }
  ]
};

module.exports = DEFAULT_DATA;