# Laporan Praktikum Kriptografi
Minggu ke-: 1  
Topik: Sejarah Kriptografi & Prinsip CIA 
Nama: Muhamad Iqbal Rasyad Izzaldin 
NIM: 230202823
Kelas: 5IKRA  

---

## 1. Tujuan
(Tuliskan tujuan pembelajaran praktikum sesuai modul.)

---

## 2. Dasar Teori
Kriptografi adalah ilmu yang mempelajari cara mengamankan pesan atau data agar tidak dapat dibaca oleh pihak yang tidak berwenang. Teknik ini melibatkan dua proses utama, yaitu enkripsi (penyandian pesan asli menjadi bentuk rahasia) dan dekripsi (mengembalikan pesan rahasia ke bentuk semula). Pada masa klasik, metode kriptografi seperti Caesar Cipher dan Substitution Cipher digunakan dengan menggeser huruf atau mengganti simbol tertentu agar pesan tidak mudah dimengerti oleh orang lain.

Dalam kriptografi modern, algoritma yang digunakan jauh lebih kompleks dan berbasis perhitungan matematika, seperti RSA, AES, dan DES. Sistem ini memanfaatkan konsep modular aritmetika, bilangan prima besar, serta fungsi hash untuk menjaga keamanan data dalam komunikasi digital, seperti pada enkripsi email, transaksi online, dan autentikasi pengguna.

Selain algoritma kriptografi, keamanan informasi juga didasari oleh prinsip CIA Triad, yaitu Confidentiality (kerahasiaan), Integrity (integritas), dan Availability (ketersediaan). Ketiga aspek ini memastikan bahwa data hanya dapat diakses oleh pihak yang berhak, tidak diubah tanpa izin, dan selalu tersedia bagi pengguna yang berwenang. Prinsip CIA menjadi dasar utama dalam membangun sistem keamanan informasi modern.

---

## 3. Alat dan Bahan
(- Python 3.x  
- Visual Studio Code / editor lain  
- Git dan akun GitHub  
- Library tambahan (misalnya pycryptodome, jika diperlukan)  )

---

## 4. Langkah Percobaan
(Tuliskan langkah yang dilakukan sesuai instruksi.  
Contoh format:
1. Membuat file `caesar_cipher.py` di folder `praktikum/week2-cryptosystem/src/`.
2. Menyalin kode program dari panduan praktikum.
3. Menjalankan program dengan perintah `python caesar_cipher.py`.)

---

## 5. Source Code
(Salin kode program utama yang dibuat atau dimodifikasi.  
Gunakan blok kode:

```python
# contoh potongan kode
def encrypt(text, key):
    return ...
```
)

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
(Jawab pertanyaan diskusi yang diberikan pada modul.  
- Pertanyaan 1: …  
- Pertanyaan 2: …  
)
---

## 8. Kesimpulan
(Tuliskan kesimpulan singkat (2–3 kalimat) berdasarkan percobaan.  )

---

## 9. Daftar Pustaka
(Cantumkan referensi yang digunakan.  
Contoh:  
- Katz, J., & Lindell, Y. *Introduction to Modern Cryptography*.  
- Stallings, W. *Cryptography and Network Security*.  )

---

## 10. Commit Log
(Tuliskan bukti commit Git yang relevan.  
Contoh:
```
commit abc12345
Author: Nama Mahasiswa <email>
Date:   2025-09-20

    week2-cryptosystem: implementasi Caesar Cipher dan laporan )
```
