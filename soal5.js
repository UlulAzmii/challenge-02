const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  //formatter rupiah
  const formatRupiah = (angka) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });
    return formatter.format(angka);
  };

  // Total Keuntungan, Total Modal, persentase keuntungan
  let totalKeuntungan = 0;
  let totalModal = 0;

  for (const data of dataPenjualan) {
    const { hargaJual, hargaBeli, totalTerjual, sisaStok } = data;
    const keuntungan = (hargaJual - hargaBeli) * totalTerjual;
    totalKeuntungan += keuntungan;

    const modal = hargaBeli * (totalTerjual + sisaStok);
    totalModal += modal;
  }

  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  // produk buku terlaris
  let terjualTerbanyak = 0;
  let produkBukuTerlaris = '';

  for (const data of dataPenjualan) {
    if (data.totalTerjual > terjualTerbanyak) {
      terjualTerbanyak = data.totalTerjual;
      produkBukuTerlaris = data.namaProduk;
    }
  }

  // penulis Terlaris
  let penjualanTerbanyak = 0;
  const penulisTerlaris = {};

  for (const data of dataPenjualan) {
    const { penulis, totalTerjual } = data;

    if (!penulisTerlaris[penulis]) {
      penulisTerlaris[penulis] = 0;
    }
    penulisTerlaris[penulis] += totalTerjual;

    if (penulisTerlaris[penulis] > penjualanTerbanyak) {
      penjualanTerbanyak = penulisTerlaris[penulis];
    }
  }

  const penulisBookTerlaris = Object.keys(penulisTerlaris).find(
    (penulis) => penulisTerlaris[penulis] === penjualanTerbanyak
  );

  const hasil = {
    totalKeuntungan: formatRupiah(totalKeuntungan),
    totalModal: formatRupiah(totalModal),
    persentaseKeuntungan: persentaseKeuntungan.toFixed(2) + '%',
    produkBukuTerlaris,
    penulisBookTerlaris,
  };

  return hasil;
}

// Panggil fungsi getInfoPenjualan dengan dataPenjualanNovel sebagai argumen
const hasilInfoPenjualan = getInfoPenjualan(dataPenjualanNovel);
console.log(hasilInfoPenjualan);
