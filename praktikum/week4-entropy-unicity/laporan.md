# Laporan Praktikum Kriptografi
Minggu ke-: 4  
Topik: [entropy_unicity]  
Nama: [Muhamad Iqbal Rasyad Izzaldin]  
NIM: [230202823]  
Kelas: [5IKRA]  

---

## 1. Tujuan
Setelah mengikuti praktikum ini, mahasiswa diharapkan mampu:
Menyelesaikan perhitungan sederhana terkait entropi kunci.
Menggunakan teorema Euler pada contoh perhitungan modular & invers.
Menghitung unicity distance untuk ciphertext tertentu.
Menganalisis kekuatan kunci berdasarkan entropi dan unicity distance.
Mengevaluasi potensi serangan brute force pada kriptosistem sederhana.

---

## 2. Dasar Teori
Entropi Kunci (Key Entropy): Ukuran ketidakpastian atau kompleksitas ruang kunci suatu cipher. Semakin tinggi entropi, semakin sulit kunci ditebak. Rumus:

𝐻
(
𝐾
)
=
log
⁡
2
∣
𝐾
∣
H(K)=log
2
	​

∣K∣

Unicity Distance: Jumlah minimum ciphertext yang dibutuhkan agar kemungkinan satu-satunya plaintext yang cocok dengan ciphertext muncul, bergantung pada entropi kunci dan redundansi bahasa. Rumus:

𝑈
=
𝐻
(
𝐾
)
𝑅
⋅
log
⁡
2
∣
𝐴
∣
U=
R⋅log
2
	​

∣A∣
H(K)
	​


Brute Force Attack: Metode mencoba semua kemungkinan kunci sampai plaintext yang valid ditemukan. Waktu brute force sangat bergantung pada ukuran ruang kunci dan kecepatan komputer.

---

## 3. Alat dan Bahan
Python 3.11 atau lebih baru
Editor Python (VS Code, PyCharm, atau lainnya)
Git dan akun GitHub
Library tambahan: math (standar Python), pycryptodome (opsional untuk cipher modern)

---

## 4. Langkah Percobaan
Membuat folder proyek:
praktikum/week4-entropy-unicity/
├─ src/
├─ screenshots/
└─ laporan.md

Membuat file Python entropy_unicity.py di folder src/.
Menyalin dan menjalankan kode Python untuk perhitungan entropi, unicity distance, dan estimasi brute force.
Mengambil screenshot hasil eksekusi program.
Menulis laporan sesuai format laporan.md.

---

## 5. Source Code
import math

# Fungsi perhitungan entropi kunci
def entropy(keyspace_size):
    return math.log2(keyspace_size)

# Fungsi perhitungan unicity distance
def unicity_distance(HK, R=0.75, A=26):
    return HK / (R * math.log2(A))

# Fungsi estimasi waktu brute force (dalam hari)
def brute_force_time(keyspace_size, attempts_per_second=1e6):
    seconds = keyspace_size / attempts_per_second
    days = seconds / (3600*24)
    return days

# Contoh penggunaan
key_caesar = 26
key_aes128 = 2**128

HK_caesar = entropy(key_caesar)
HK_aes128 = entropy(key_aes128)

print("Entropy Caesar Cipher:", HK_caesar, "bit")
print("Entropy AES-128:", HK_aes128, "bit")
print("Unicity Distance Caesar Cipher:", unicity_distance(HK_caesar))
print("Waktu brute force Caesar Cipher:", brute_force_time(key_caesar), "hari")
print("Waktu brute force AES-128:", brute_force_time(key_aes128), "hari")


---

## 6. Hasil dan Pembahasan
(- Lampirkan screenshot hasil eksekusi program (taruh di folder `screenshots/`).  
- Berikan tabel atau ringkasan hasil uji jika diperlukan.  
- Jelaskan apakah hasil sesuai ekspektasi.  
- Bahas error (jika ada) dan solusinya. 

Hasil eksekusi program Caesar Cipher:

![Hasil Eksekusi](screenshots/output.png)
![Hasil Input](screenshots/input.png)
![Hasil Output](screenshots/output.png)
)

---

## 7. Jawaban Pertanyaan
Arti nilai entropy: Entropi menunjukkan seberapa sulit kunci ditebak. Semakin tinggi entropi, semakin kuat cipher.

Pentingnya unicity distance: Menunjukkan jumlah minimum ciphertext yang dibutuhkan agar satu-satunya plaintext dapat ditemukan, membantu menilai risiko serangan statistik.

Kenapa brute force tetap ancaman: Jika entropi kunci rendah, meskipun algoritma kuat, kunci tetap bisa ditebak dengan mencoba semua kemungkinan.

---

## 8. Kesimpulan
Entropi dan unicity distance dapat digunakan untuk mengevaluasi kekuatan cipher.
Cipher dengan entropi rendah mudah diserang melalui brute force.
Cipher modern seperti AES memiliki entropi tinggi sehingga aman terhadap brute force praktis.

---

## 9. Daftar Pustaka
Stallings, W. (2017).
Cryptography and Network Security: Principles and Practice (7th ed.).
Pearson Education.

Katz, J., & Lindell, Y. (2020).
Introduction to Modern Cryptography (3rd ed.).
CRC Press.

---

## 10. Commit Log
(Tuliskan bukti commit Git yang relevan.  
Contoh:
```
commit abc12345
Author: Muhamad Iqbal Rasyad Izzaldin <zxiqbal28@gmail.com>
Date:   2025-12-23

week4-entropy-unicity: implementasi entropi, unicity distance, brute force
```
