# Laporan Praktikum Kriptografi
Minggu ke-: 6  
Topik: [judul praktikum]  
Nama: [Nama Mahasiswa]  
NIM: [NIM Mahasiswa]  
Kelas: [Kelas]  

---

## 1. Tujuan
Tujuan dari praktikum ini adalah untuk memahami dan mengimplementasikan algoritma kriptografi modern, yaitu DES, AES, dan RSA menggunakan bahasa pemrograman Python. Mahasiswa diharapkan mampu melakukan proses enkripsi dan dekripsi data, memahami perbedaan algoritma simetris dan asimetris, serta mengaplikasikan library kriptografi modern secara benar.

---

## 2. Dasar Teori
Kriptografi modern merupakan teknik pengamanan data yang menggunakan algoritma matematika kompleks dan kunci kriptografi untuk menjaga kerahasiaan, integritas, dan autentikasi data. Algoritma modern umumnya lebih aman dibandingkan cipher klasik karena memiliki ruang kunci yang lebih besar dan struktur yang lebih kompleks.

DES (Data Encryption Standard) adalah algoritma kriptografi simetris berbasis blok dengan panjang kunci efektif 56 bit. Meskipun pernah menjadi standar, DES kini dianggap tidak aman karena rentan terhadap brute force attack. AES (Advanced Encryption Standard) merupakan pengganti DES yang menggunakan panjang kunci 128, 192, atau 256 bit dan hingga saat ini masih dianggap sangat aman.

RSA adalah algoritma kriptografi asimetris yang menggunakan sepasang kunci, yaitu kunci publik dan kunci privat. RSA memanfaatkan kesulitan faktorisasi bilangan prima besar dan banyak digunakan untuk pertukaran kunci dan tanda tangan digital.

---

## 3. Alat dan Bahan
- Python 3.11
- Visual Studio Code
- Git dan GitHub
- Library pycryptodome

---

## 4. Langkah Percobaan
- Membuat struktur folder praktikum/week6-cipher-modern/.
- Menginstall library pycryptodome menggunakan pip.
- Membuat file aes.py, rsa.py, dan des.py pada folder src/.
- Menuliskan kode program enkripsi dan dekripsi sesuai panduan.
- Menjalankan program menggunakan terminal.
- Mengambil screenshot hasil eksekusi program.
- Melakukan commit Git dengan pesan week6-cipher-modern.

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
1. Perbedaan DES, AES, dan RSA
DES dan AES adalah algoritma simetris yang menggunakan satu kunci, sedangkan RSA adalah algoritma asimetris yang menggunakan kunci publik dan privat. Dari segi keamanan, AES dan RSA jauh lebih aman dibanding DES.

2. Alasan AES lebih banyak digunakan dibanding DES
AES memiliki panjang kunci yang lebih besar, struktur algoritma yang lebih kuat, dan lebih tahan terhadap serangan kriptografi modern.

3. Alasan RSA dikategorikan sebagai algoritma asimetris
RSA menggunakan dua kunci berbeda (publik dan privat). Kunci publik digunakan untuk enkripsi, sedangkan kunci privat digunakan untuk dekripsi, dengan proses pembangkitan kunci berdasarkan bilangan prima besar.
---

## 8. Kesimpulan
Praktikum ini menunjukkan bahwa algoritma kriptografi modern seperti AES dan RSA mampu mengamankan data dengan baik. AES cocok untuk enkripsi data dalam jumlah besar, sedangkan RSA digunakan untuk pengamanan kunci dan komunikasi aman.

---

## 9. Daftar Pustaka
National Institute of Standards and Technology (NIST).
(2001). FIPS PUB 197: Advanced Encryption Standard (AES).
U.S. Department of Commerce.

Rivest, R. L., Shamir, A., & Adleman, L.
(1978). A Method for Obtaining Digital Signatures and Public-Key Cryptosystems.
Communications of the ACM, 21(2), 120–126.

---

## 10. Commit Log
(Tuliskan bukti commit Git yang relevan.  
Contoh:
```
commit abc12345
Author: Muhamad Iqbal Rasyad Izzaldin <zxiqbal2803@gmail.com>
Date:   2025-12-31

    week6-cipher-modern
```
