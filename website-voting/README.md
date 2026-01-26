# \# AmankanVoting - Voting Aman Berbasis Blockchain

# 

# Aplikasi web untuk voting yang aman menggunakan blockchain dan MetaMask wallet.

# 

# \## Fitur

# \- ✅ Koneksi MetaMask Wallet

# \- ✅ Voting dengan blockchain

# \- ✅ Hasil voting real-time

# \- ✅ User interface yang responsif

# 

# \## Persyaratan

# \- MetaMask browser extension

# \- Blockchain network (Sepolia Testnet / Hardhat lokal / dll)

# \- Smart Contract sudah ter-deploy

# 

# \## 📘 Lampiran: Panduan Pengguna (Manual Book) - AmankanVoting

# 

# 1\. Persiapan Awal

# 

# Sebelum menggunakan aplikasi, pastikan setiap pengguna telah memenuhi persyaratan teknis berikut:

# ```python

# \- Browser: Gunakan Google Chrome atau Brave Browser (versi Desktop lebih disarankan).

# \- Extension: Sudah menginstal MetaMask Wallet.

# \- Jaringan: Pastikan jaringan pada MetaMask diatur ke Sepolia Test Network.

# \- Saldo: Memiliki sedikit Sepolia ETH (untuk biaya gas transaksi).

# ```

# 

# 2\. Langkah-langkah Penggunaan

# 

# Tahap A: Registrasi Alamat Wallet (Hanya Sekali)

# Karena sistem menggunakan mekanisme Whitelist, alamat anda harus didaftarkan dulu oleh Owner.

# ```python

# \- Salin (Copy) alamat publik MetaMask Anda (format: 0x...).

# \- Kirimkan alamat tersebut kepada Administrator.

# \- Tunggu konfirmasi hingga status Anda menjadi "Terdaftar" di sistem.

# ```

# 

# Tahap B: Menghubungkan Wallet ke Website

# ```python

# \- Buka URL Website AmankanVoting https://lordzerav.github.io/website-voting/

# \- Masukkan Alamat Smart Contract yang diberikan Admin pada kolom "Konfigurasi Contract".

# \- Klik tombol "Hubungkan Wallet".

# \- Akan muncul pop-up MetaMask; pilih akun Anda dan klik "Connect".

# \- Pastikan status koneksi berubah menjadi hijau dengan alamat wallet Anda muncul di layar.

# ```

# 

# Tahap C: Melakukan Voting (Proses Kriptografi)

# ```python

# \- Pilih salah satu opsi yang tersedia: "Ya" (Setuju) atau "Tidak" (Tolak).

# \- Klik tombol "Vote".

# \- PENTING: MetaMask akan muncul kembali untuk meminta Digital Signature (Tanda Tangan Digital).

# \- Periksa detail transaksi, lalu klik "Confirm".

# \- Tunggu proses mining berlangsung (biasanya 10-20 detik). Jangan menutup halaman sebelum muncul notifikasi "Voting Berhasil!".

# ```

# 

# Tahap D: Melihat Hasil Real-Time

# ```python

# \- Setelah transaksi berhasil, data suara Anda akan tersimpan secara permanen di Blockchain.

# \- Klik tombol "Refresh" pada bagian "Hasil Voting" untuk melihat pembaruan jumlah suara yang masuk.

# ```

# 

# 3\. Jika Ada Error

# 

# Berikut ini beberapa solusi yang kami tawarkan jika terjadi beberapa situasi error seperti berikut ini:

# ```python

# Anda bukan pemilih yang terdaftar, User denied transaction, dan Voting sudah ditutup

# ```

# 

# Solusi sesuai urutan

# ```python

# Hubungi admin untuk melakukan pendaftaran alamat wallet anda, ulangi klik Vote dan pilih Confirm dan terakhir

# artinya sesi telah berakhir atau diakhiri oleh owner

# ```

# 



