// src/constants/products.ts
import { Product } from "@/types";

export const DISTRIBUTOR_INFO = {
  name: "BariklanaStore",
  phone: "6281915915707",
  address: "Palu, Sulawesi Tengah, Indonesia",
};

export const PRODUCTS: Product[] = [
  // SUSU
  {
    id: "gomilk",
    name: "BARIKLANA GOMILK 200gr",
    slug: "bariklana-gomilk-200gr",
    price: 48000,
    category: "Susu",
    tagline: "Pelopor Susu Kambing Etawa Plus Herbal Pertama di Indonesia",
    description: "Enak, Sehat, dan Kaya Manfaat! Susu kambing etawa Gomilk adalah formulasi khusus berbahan dasar dari perahan susu kambing etawa pilihan yang dikombinasikan dengan ekstrak herbal pilihan...",
    image: "/bariklana-gomilk-200gr.png",
    benefits: [
      "Menyehatkan mata dan menjaga daya tahan tubuh", 
      "Kandungan kalsium (Ca) yang tinggi membantu menguatkan tulang, gigi dan baik bagi penderita rematik serta mencegah kerapuhan tulang (Osteoporosis)",
      "Baik untuk penderita hipertensi, darah rendah, maupun diabetes",
      "Mengatasi asma, TBC, bronkitis, dan penumonia", 
      "Menambah vitalitas dan daya tahan tubuh",
      "Menumbuhkembangkan sel otak dan sel saraf",
      "Baik untuk ibu hami dna menyusui",
      "Pengganti susu formula bagi anak-anak yang alergi susu sapi"
    ],
    advantages: [
      "Mengandung Ekstrak Daun Kelor & Mengkudu",
      "Tidak Bau Amis",
      "Rasa Gurih Alami Tanpa Gula Berlebih",
      "Cocok untuk semua usia (1th - Lansia)"
    ],
    stock: 100,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Gomilk`
  },
  {
    id: "bariklanahitawa200gr",
    name: "BARIKLANA HITAWA 200gr",
    slug: "bariklana-hitawa-200gr",
    price: 59000,
    category: "Susu",
    tagline: "Susu Kambing Etawa Plus Jahe",
    description: "Susu Untuk Sendi dan Tulang Kuat! Hitawa adalah formulasi dari susu kambing etawa terbaik yang dikombinasikan dengan ekstrak jahe merah, temulawak dan kunyit, kayu manis, dan madu...",
    image: "/bariklana-hitawa-200gr.png",
    benefits: ["Menjaga kesehatan tulang, otot dan sendi", "Membantu mengatasi asam urat", "Meningkatkan vitalitas"],
    advantages: [
      "Kombinasi Jahe Merah & Temulawak",
      "Efektif untuk nyeri sendi & pegal linu",
      "Tanpa efek samping bahan kimia",
      "Aman bagi penderita diabetes"
    ],
    stock: 100,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Hitawa`
  },
  {
    id: "bariklanagomilksachet1box",
    name: "BARIKLANA GOMILK SACHET 1 box",
    slug: "bariklana-gomilk-sachet-1-box",
    price: 220000,
    category: "Susu",
    tagline: "Enak, Sehat, dan Kaya Manfaat!",
    description: "Susu kambing etawa Gomilk adalah formulasi khusus berbahan dasar dari perahan susu kambing etawa pilihan yang dikombinasikan dengan ekstrak herbal pilihan, yaitu daun kelor dan herbal lainnya yang sudah dikenal khasiatnya oleh masyarakat untuk terapi berbagai macam penyakit degeneratif. Dari hasil penelitian para ahli dan bukti sejarah membuktikan bahwa susu kambing mempunyai kelebihan dibanding dengan susu hewan lainnya. Dapat dikonsumsi mulai anak usia 1 tahun hingga lansia. Aman dan sangat baik untuk ibu hamil dan menyusui.",
    image: "/bariklana-gomilk-sachet-1-box.png",
    benefits: [
      "Menyehatkan mata dan menjaga daya tahan tubuh",
      "Kandungan kalsium (Ca) yang tinggi membantu menguatkan tulang, gigi dan baik bagi penderita rematik serta mencegah kerapuhan tulang (Osteoporosis)",
      "Baik untuk penderita hipertensi, darah rendah, maupun diabetes",
      "Mengatasi asma, TBC, bronkitis, dan penumonia",
      "Menambah vitalitas dan daya tahan tubuh",
      "Menumbuhkembangkan sel otak dan sel saraf",
      "Baik untuk ibu hami dna menyusui",
      "Pengganti susu formula bagi anak-anak yang alergi susu sapi"
    ],
    advantages: [
      "Kombinasi Jahe Merah & Temulawak",
      "Efektif untuk nyeri sendi & pegal linu",
      "Tanpa efek samping bahan kimia",
      "Aman bagi penderita diabetes"
    ],
    stock: 100,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Hitawa`
  },
  
  // MADU
  {
    id: "madu-bariklana",
    name: "BARIKLANA PROPOLIS MINT SYAFIKA",
    slug: "bariklana-propolis-mint-syafika",
    price: 182000,
    category: "Madu",
    tagline: "Sejuta Manfaat di Setiap Tetesnya",
    description: "Propolis adalah produk lebah yang dihasilkan dari getah tumbuh-tumbuhan... Propolis Mint Syafika dapat membantu mencegah dan menyembuhkan penyakit ringan maupun penyakit kronis.",
    image: "/BariklanaPropolisMintSyafika.png",
    benefits: ["Meredakan gejala herpes", "Memiliki efek antikanker", "Mengatasi gangguan pencernaan"],
    advantages: [
      "Teknologi Nano (Cepat Meresap)",
      "Ekstrak Mint yang Menyegarkan",
      "Bebas Alkohol",
      "Isi Lebih Pekat & Berkualitas"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },
  {
    id: "bariklanamadueyetama",
    name: "BARIKLANA MADU EYETAMA",
    slug: "bariklana-madu-eyetama",
    price: 118000,
    category: "Madu",
    tagline: "Nutrisi Mata Minus, Plus, Berair, dan Buram",
    description: "Merupakan madu herbal yang terbuat dari bahan-bahan herbal pilihan, terbukti aman dan khusus mengatsi masalah kesehatan mata. Dibuat dengan teknologi enzym yang meningkatkan kualitas produk Madu Eyetama, sehingga dalam 15 menit efeknya langsung terasa.",
    image: "/bariklana-madu-eyetama.png",
    benefits: [
      "Menjaga kesehatan mata",
      "Membantu mengatsi mata lelah atau gangguan mata karena banyak membaca, menonton TV, di depan komputer, mengendarai kendaraan",
      "Membantu menghambat mata minus",
      "Mencegah dan membantu pemulihan akibat oenyakit glaukoma, katarak, dan gangguan retina",
      "Mengatasi mata merah, berair, gatal, belekan, dan bengkak"
    ],
    advantages: [
      "Teknologi Nano (Cepat Meresap)",
      "Ekstrak Mint yang Menyegarkan",
      "Bebas Alkohol",
      "Isi Lebih Pekat & Berkualitas"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },
  {
    id: "bariklanahitapromaduanak",
    name: "BARIKLANA HITAPRO MADU ANAK",
    slug: "bariklana-hitapro-madu-anak",
    price: 118000,
    category: "Madu",
    tagline: "Nutrisi Kecerdasan Otak dan Tumbuh Kembang Anak",
    description: "Hitapro Madu Anak adalah madu yang diformulasikan khusus untuk anak, dengan tambahan herbal alami daun bidara, daun kelor, pegagan, ikan gabus, babbatussauda, temulawak.",
    image: "/bariklana-hitapro-madu-anak.png",
    benefits: [
      "Nutrisis kecerdasan otak",
      "Merangsang nafsu makan",
      "Menguatkan hafalan Si Kecil",
      "Menjaga kesehatan mata",
      "Meningkatkan stamina dan imun",
      "Mengobati : demam, batuk & pilek",
      "Menyembuhkan luka"
    ],
    advantages: [
      "Teknologi Nano (Cepat Meresap)",
      "Ekstrak Mint yang Menyegarkan",
      "Bebas Alkohol",
      "Isi Lebih Pekat & Berkualitas"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },

  // SUPLEMEN
  {
    id: "bariklanavirgincoconutoil100ml",
    name: "BARIKLANA VIRGIN COCONUT OIL 100ml",
    slug: "bariklana-virgin-coconut-oil-100ml",
    price: 45000,
    category: "Suplemen",
    tagline: "Minyak Kelapa Murni Untuk Kesehatan Tubuh",
    description: "VCO Bariklana adalah minyak yang diperoleh dari daigng buah kelapa tua yang segar dan diproses dengan diperas menggunakan teknik cold-presses atau tanpa melibatkan adanya panas baik pans kompor ataupun panas matahari sehingga menghasilkan produk minyak murni dari kelapa",
    image: "/bariklana-virgin-coconut-oil.png",
    benefits: [
      "Menjaga berat badan",
      "Menjaga kadar kolesterol",
      "Mencegah obesitas",
      "Membantu mengibati diabetes, penyakit jantung, dan osteoporosis",
      "Mencegah penyakt akibat radikal bebas",
      "Mengatasi masalah gigi",
      "Mejaga kesehatan tulang",
      "Menjaga kesehatannkulit dan baik untuk rambut",
      "Meningkatkan imun",
      "Mempercepat pengeringan luka Dll"
    ],
    advantages: [
      "-"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },
  {
    id: "bariklanavirgincoconutoil250ml",
    name: "BARIKLANA VIRGIN COCONUT OIL 250ml",
    slug: "bariklana-virgin-coconut-oil-250ml",
    price: 77000,
    category: "Suplemen",
    tagline: "Minyak Kelapa Murni Untuk Kesehatan Tubuh",
    description: "VCO Bariklana adalah minyak yang diperoleh dari daigng buah kelapa tua yang segar dan diproses dengan diperas menggunakan teknik cold-presses atau tanpa melibatkan adanya panas baik pans kompor ataupun panas matahari sehingga menghasilkan produk minyak murni dari kelapa",
    image: "/bariklana-virgin-coconut-oil.png",
    benefits: [
      "Menjaga berat badan",
      "Menjaga kadar kolesterol",
      "Mencegah obesitas",
      "Membantu mengibati diabetes, penyakit jantung, dan osteoporosis",
      "Mencegah penyakt akibat radikal bebas",
      "Mengatasi masalah gigi",
      "Mejaga kesehatan tulang",
      "Menjaga kesehatannkulit dan baik untuk rambut",
      "Meningkatkan imun",
      "Mempercepat pengeringan luka Dll"
    ],
    advantages: [
      "-"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },
  {
    id: "bariklanafishioil",
    name: "BARIKLANA FISHI OIL",
    slug: "bariklana-fishi-oil",
    price: 65000,
    category: "Suplemen",
    tagline: "100% Ekstrak Minyak Ikan Salmon",
    description: "Fishi Oil merupakan minyak yang diekstrak dari ikan salmon. Bermanfaat untuk memelihara kesehatan tubuh, terutama jantung dan pembuluh darah. Selain itu, minyak ikan salmon juga baik digunakan untuk mendukung otak anak. Memiliki kandungan Omega 3, EPA-DHA, Vitamin A, Vitamin D, dan protein.",
    image: "/bariklana-fishi-oil.png",
    benefits: [
      "Menambah nafsu makan",
      "Menambah berat badan",
      "Meningkatkan kekebalan tubuh",
      "Meningkatkan kecerdasan otak dan konsentrasi",
      "Menyehatkan jantung",
      "Sumber protein",
      "Meingkatkan produksi sel darah merah",
      "Menguatkan daya ingat",
      "Nutrisi untuk pertumbuhan",
      "Menjaga imunitas dan mengurangi kolesterol jahat"
    ],
    advantages: [
      "-"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },
  {
    id: "bariklanaviomax",
    name: "BARIKLANA VIOMAX",
    slug: "bariklana-viomax",
    price: 100000,
    category: "Suplemen",
    tagline: "Ekstrak Sambiloto dan Herbal Pilihan",
    description: "Viomax adalah kapsul herbal yang terbuat dari bahan-bahan herbal berkualitas dan dibuat dengan teknologi modern sehingga menghasilkan produk herbal yang InsyaaAllah berkhasiat.",
    image: "/bariklana-viomax.png",
    benefits: [
      "Membantu mengobati stroke.",
      "Membantu mengatasi darah tinggi.",
      "Membantu menurunkan kolesterol.",
      "Membantu meredakan bronkitis.",
      "Membantu mengatasi sinusitis.",
      "Membantu meredakan migrain.",
      "Membantu mengatasi ambeien/wasir.",
      "Membantu mengatasi berbagai keluhan kesehatan lainnya."
    ],
    advantages: [
      "-"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },

  // BODYCARE

  {
    id: "bariklanadeodorantspray60ml",
    name: "BARIKLANA DEODORANT SPRAY 60ml",
    slug: "bariklana-deodorant-spray-60ml",
    price: 39000,
    category: "Bodycare",
    tagline: "Deo Spray Berbahan Alami, Praktis, dan Aman",
    description: "Deodorant Spray Bariklana merupakan produk deodorant alami berbahan bahan dasar daun bidara, jeruk nipis, daun sirih, tawas, dan aloevera. Membantu mengatsi masalah bau badan dan keringat berlebih, dengan perlindungan aktif hingga 12 jam. Siap temani aktivitas kamu seharian!",
    image: "/bariklana-deodorant-spray.png",
    benefits: [
      "Mengurangi produksi keringat berlebih",
      "Menghilangkan kuman/bakteri penyebab bau badan",
      "Tidak meninggalkan noda pada baju",
      "Mencerahkan ketiak",
      "Tidak lengket",
      "Tidak menumbat pori",
      "Non-alkohol"
    ],
    advantages: [
      "Hemat 2-3 bulan pemakaian",
      "Aman untuk ibu hamil & menyusui",
      "Bisa diaplikasi untuk ketiak, kaki, sepatu, dan helm"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },
  {
    id: "bariklanadeodorantspray100ml",
    name: "BARIKLANA DEODORANT SPRAY 100ml",
    slug: "bariklana-deodorant-spray-100ml",
    price: 51000,
    category: "Bodycare",
    tagline: "Deo Spray Berbahan Alami, Praktis, dan Aman",
    description: "Deodorant Spray Bariklana merupakan produk deodorant alami berbahan bahan dasar daun bidara, jeruk nipis, daun sirih, tawas, dan aloevera. Membantu mengatsi masalah bau badan dan keringat berlebih, dengan perlindungan aktif hingga 12 jam. Siap temani aktivitas kamu seharian!",
    image: "/bariklana-deodorant-spray.png",
    benefits: [
      "Mengurangi produksi keringat berlebih",
      "Menghilangkan kuman/bakteri penyebab bau badan",
      "Tidak meninggalkan noda pada baju",
      "Mencerahkan ketiak",
      "Tidak lengket",
      "Tidak menumbat pori",
      "Non-alkohol"
    ],
    advantages: [
      "Hemat 2-3 bulan pemakaian",
      "Aman untuk ibu hamil & menyusui",
      "Bisa diaplikasi untuk ketiak, kaki, sepatu, dan helm"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },
  {
    id: "bariklanamagnesium60ml",
    name: "BARIKLANA MAGNESIUM 60ml",
    slug: "bariklana-magnesium-60ml",
    price: 51000,
    category: "Bodycare",
    tagline: "Lotion Terapi/Pijat Multifungsi",
    description: "Magnesium adalah lotion terapi/pijat multifungsi, dengan kandungan utama MAgnesium dan herbal-herbal alami lainnya. Telah diformulasikan khusus untuk menjawab semua keluahan berbagai macam penyakit. Dengan cara Transdermal (merupakan salah satu bentuk sistem penghantaran obat dengan cara ditempel melalui kulit) yang kami terpakna pada lotion BARIKLANA MAGNESIUM memudahkan lebih terserap oleh tubuh sehingga efektif dan effisien langsung ke titik sakit.",
    image: "/bariklana-magnesium.png",
    benefits: [
      "Mengurangi rasa capek dan pegal pada tubuh",
      "Meredakan sakit kepala",
      "Mengobati keseleo/bengkak saat beraktivitas",
      "Membantu mengibati nyeri sendi, nyeri otot, dan lain-lain",
      "Cocok untuk meredakan gejala demam, batuk dan pilek",
      "Mengobati gatal-gatal dan eksim",
      "Membantu mengatasi masalah hipertensi yang bisa datang kapan jasa",
      "Meredakan Disminore/nyeri haid",
      "Disfungsi ereksi yang memebuat rumah tangga kurang harmonis",
      "Membantu mengatasi masalah susah tidur (insomnia)",
      "Membantu meredakan asam urat, asam lambung, dll"
    ],
    advantages: [
      "Sebagai anti nyamuk",
      "Aman untuk terapi stroke dan syaraf kejepit"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },
  {
    id: "bariklanamagnesium60ml",
    name: "BARIKLANA MAGNESIUM 60ml",
    slug: "bariklana-magnesium-60ml",
    price: 51000,
    category: "Bodycare",
    tagline: "Lotion Terapi/Pijat Multifungsi",
    description: "Magnesium adalah lotion terapi/pijat multifungsi, dengan kandungan utama MAgnesium dan herbal-herbal alami lainnya. Telah diformulasikan khusus untuk menjawab semua keluahan berbagai macam penyakit. Dengan cara Transdermal (merupakan salah satu bentuk sistem penghantaran obat dengan cara ditempel melalui kulit) yang kami terpakna pada lotion BARIKLANA MAGNESIUM memudahkan lebih terserap oleh tubuh sehingga efektif dan effisien langsung ke titik sakit.",
    image: "/bariklana-magnesium.png",
    benefits: [
      "Mengurangi rasa capek dan pegal pada tubuh",
      "Meredakan sakit kepala",
      "Mengobati keseleo/bengkak saat beraktivitas",
      "Membantu mengibati nyeri sendi, nyeri otot, dan lain-lain",
      "Cocok untuk meredakan gejala demam, batuk dan pilek",
      "Mengobati gatal-gatal dan eksim",
      "Membantu mengatasi masalah hipertensi yang bisa datang kapan jasa",
      "Meredakan Disminore/nyeri haid",
      "Disfungsi ereksi yang memebuat rumah tangga kurang harmonis",
      "Membantu mengatasi masalah susah tidur (insomnia)",
      "Membantu meredakan asam urat, asam lambung, dll"
    ],
    advantages: [
      "Sebagai anti nyamuk",
      "Aman untuk terapi stroke dan syaraf kejepit"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },
  {
    id: "bariklanamagnesium100ml",
    name: "BARIKLANA MAGNESIUM 100ml",
    slug: "bariklana-magnesium-100ml",
    price: 180000,
    category: "Bodycare",
    tagline: "Lotion Terapi/Pijat Multifungsi",
    description: "Magnesium adalah lotion terapi/pijat multifungsi, dengan kandungan utama MAgnesium dan herbal-herbal alami lainnya. Telah diformulasikan khusus untuk menjawab semua keluahan berbagai macam penyakit. Dengan cara Transdermal (merupakan salah satu bentuk sistem penghantaran obat dengan cara ditempel melalui kulit) yang kami terpakna pada lotion BARIKLANA MAGNESIUM memudahkan lebih terserap oleh tubuh sehingga efektif dan effisien langsung ke titik sakit.",
    image: "/bariklana-magnesium.png",
    benefits: [
      "Mengurangi rasa capek dan pegal pada tubuh",
      "Meredakan sakit kepala",
      "Mengobati keseleo/bengkak saat beraktivitas",
      "Membantu mengibati nyeri sendi, nyeri otot, dan lain-lain",
      "Cocok untuk meredakan gejala demam, batuk dan pilek",
      "Mengobati gatal-gatal dan eksim",
      "Membantu mengatasi masalah hipertensi yang bisa datang kapan jasa",
      "Meredakan Disminore/nyeri haid",
      "Disfungsi ereksi yang memebuat rumah tangga kurang harmonis",
      "Membantu mengatasi masalah susah tidur (insomnia)",
      "Membantu meredakan asam urat, asam lambung, dll"
    ],
    advantages: [
      "Sebagai anti nyamuk",
      "Aman untuk terapi stroke dan syaraf kejepit"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },
  {
    id: "bariklanasabunsulfur",
    name: "BARIKLANA SABUN SULFUR",
    slug: "bariklana-sabun-sulfur",
    price: 25000,
    category: "Bodycare",
    tagline: "Untuk kulit Gatal, Panu, Kadas, Kurap",
    description: "Sabun Sulfur adalah sabun gatal yang berbahan dasar Sulfur, ekstak binahong, minyak biji jarak, coconut oil, dan ekstrak daun bidara. Belerang berfungsi sebagai eksfoliator ringan yang memebantu mengangkat sel-sel kulit mati pada bekas jerawat, luka dan mempercepat proses pembentukan sel kulit yang sehat, memilki sifat pengobatan unutk meringkankan gejala eksim, seperti peradangan, kulit kering, dna gatal.",
    image: "/bariklana-sabun-sulfur.png",
    benefits: [
      "Membantu mengatasi maslah kulit dan berbagai keluhan gatal.",
      "Membantu mengurangi masalah panu, kadas, kurap, kutu air, koreng, eksim, biduran, dna herpes",
      "Membantu memudarkan bekas luka",
      "Mengurangi bau badan",
      "Antibaketeri dan antiinflamasi",
      "Memebersihkan pori-pori kulit",
      "Mengobati Dermatitis Seboroik (penyakit kulit kronis yang menyebabkan kulit kemerahan, gatal, bersisik, dan berketombe)",
      "Mengurangi minyak berlebih",
      "Antioksidan dan anti penuaan dini seperti keriput",
      "Memperbaiki dan mencegah kerusakan sel kulit",
      "Mengatasi jerawat & memudarkan bekas jerawat"
    ],
    advantages: [
      "-"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Madu`
  },  

  // KOPI

  {
    id: "kopi-etawa",
    name: "BARIKLANA KOPI MANTRA",
    slug: "bariklana-kopi-mantra",
    price: 60000,
    category: "Kopi",
    tagline: "Kopi Laki Idaman Istri Siap Menjadi Raja Setiap Hari",
    description: "Perpaduan antara biji kopi berkualitas tinggi dengan bahan-bahan herbal alami seperti kayu manis, jahe merah, kayu secang, gula aren, cabe jawa dan lada hitam...",
    image: "/bariklana-kopi-mantra.png",
    benefits: ["Meningkatkan stamina pria", "Meningkatkan mood", "Melancarkan peredaran darah"],
    advantages: [
      "-"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Kopi`
  },
  {
    id: "bariklanakopisusumantra",
    name: "BARIKLANA KOPI SUSU MANTRA",
    slug: "bariklana-kopi-susu-mantra",
    price: 60000,
    category: "Kopi",
    tagline: "Rahasia Energi, Vitalitas dan Kehangtan Alami",
    description: "Kopi susu mantra menghadirkan banyak manfaat, kaya antioksidan, hangat di perut, mendukung daya tahan tubuh, hingga membantu menjaga kejernihan dan hormon, cocok untuk pasangan suami istri. Dengan racikan bahan alami seperti biji kopi pilihan, susu etawa, jahe merah, daun kelor, kapulaga, sereh, safron, kayu manis.",
    image: "/bariklana-kopi-susu-mantra.png",
    benefits: [
      "Meningkatkan energi dan vitalitas", 
      "Menyetabilkan kadar gula darah", 
      "Meningkatkan kesehatan sistem pencernaan dan melancarkan peredaran darah.",
      "Meningkatkan mood",
      "Membantu detoksifikasi tubuh"
    ],
    advantages: [
      "-"
    ],
    stock: 50,
    waLink: `https://wa.me/${DISTRIBUTOR_INFO.phone}?text=Order+Kopi`
  }
];