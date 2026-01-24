# Laporan Praktikum Kriptografi
Minggu ke-: 14  
Topik: Analisis Serangan Kriptografi  
Nama: Muhamad Iqbal Rasyad Izzaldin  
NIM: 230202823  
Kelas: 5IKRA  

---

## 1. Tujuan
Tujuan dari praktikum ini adalah untuk menganalisis serangan kriptografi yang terjadi pada sistem nyata, mengevaluasi kelemahan algoritma kriptografi yang digunakan, serta memberikan rekomendasi solusi atau algoritma pengganti yang lebih aman untuk meningkatkan keamanan sistem informasi.

---

## 2. Dasar Teori
Kriptografi merupakan teknik pengamanan data yang bertujuan menjaga kerahasiaan, integritas, dan autentikasi informasi. Dalam implementasinya, kriptografi banyak digunakan pada sistem penyimpanan password, komunikasi jaringan, dan sistem autentikasi pengguna.

Namun, kelemahan kriptografi tidak hanya berasal dari algoritma yang digunakan, tetapi juga dari kesalahan implementasi dan konfigurasi sistem. Algoritma kriptografi yang sudah usang seperti MD5 atau SHA-1 diketahui rentan terhadap serangan brute force dan collision attack, sehingga tidak lagi direkomendasikan untuk sistem keamanan modern.

Serangan brute force dan dictionary attack merupakan contoh serangan kriptografi yang memanfaatkan lemahnya algoritma hash password atau penggunaan password yang sederhana. Oleh karena itu, pemilihan algoritma kriptografi yang tepat dan konfigurasi sistem yang baik sangat penting untuk mencegah serangan tersebut.

---

## 3. Alat dan Bahan
- Python 3.x
- Visual Studio Code
- Git dan akun GitHub
- Sistem operasi Windows
- Library Python (hashlib untuk hash MD5/SHA)

---

## 4. Langkah Percobaan
- Membuat folder praktikum/week14-analisis-serangan/ sesuai instruksi modul.
- Membuat file laporan.md untuk dokumentasi hasil analisis.
- Menentukan studi kasus serangan kriptografi nyata, yaitu serangan brute force terhadap hash MD5.
- Melakukan percobaan pembuatan hash MD5 menggunakan Python.
- Mengamati kelemahan hash MD5 terhadap serangan brute force sederhana.
- Mendokumentasikan hasil percobaan dalam bentuk screenshot.
- Menyusun rekomendasi algoritma kriptografi yang lebih aman.
- Melakukan commit ke repository Git dengan pesan week14-analisis-serangan.

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
Dari hasil percobaan, terlihat bahwa hash MD5 dapat dihasilkan dengan cepat menggunakan Python. Namun, hash MD5 bersifat deterministik dan tidak menggunakan salt, sehingga hash yang sama akan selalu dihasilkan dari password yang sama.
Hal ini menyebabkan hash MD5 sangat rentan terhadap serangan brute force dan dictionary attack, terutama jika password yang digunakan sederhana. Dengan bantuan wordlist atau database hash yang sudah tersedia, penyerang dapat dengan mudah menemukan password asli dari hash MD5 tersebut.
Berdasarkan hasil tersebut, dapat disimpulkan bahwa penggunaan MD5 untuk penyimpanan password sudah tidak aman dan tidak direkomendasikan pada sistem modern.

Hasil eksekusi program Caesar Cipher:

![Hasil Eksekusi](screenshots/output.png)
![Hasil Input](screenshots/input.png)
![Hasil Output](screenshots/output.png)
)

---

## 7. Jawaban Pertanyaan
1. Mengapa banyak sistem lama masih rentan terhadap brute force atau dictionary attack?
Karena sistem lama masih menggunakan algoritma kriptografi yang sudah usang, seperti MD5 atau SHA-1, serta tidak menerapkan mekanisme keamanan tambahan seperti salting, key stretching, atau pembatasan percobaan login.

2. Apa bedanya kelemahan algoritma dengan kelemahan implementasi?
Kelemahan algoritma berasal dari desain algoritma kriptografi itu sendiri, sedangkan kelemahan implementasi terjadi akibat kesalahan dalam penerapan algoritma, seperti konfigurasi yang salah atau penggunaan parameter yang tidak aman.

3. Bagaimana organisasi dapat memastikan sistem kriptografi mereka tetap aman di masa depan?
Organisasi dapat melakukan audit keamanan secara berkala, memperbarui algoritma kriptografi sesuai standar terbaru, menerapkan best practice keamanan, serta mengikuti perkembangan riset dan rekomendasi dari komunitas keamanan.

---

## 8. Kesimpulan
Berdasarkan analisis yang dilakukan, serangan brute force terhadap hash MD5 menunjukkan bahwa algoritma tersebut tidak lagi aman digunakan. Oleh karena itu, diperlukan penggantian algoritma kriptografi yang lebih kuat dan penerapan konfigurasi keamanan yang tepat untuk melindungi sistem dari serangan kriptografi.

---

## 9. Daftar Pustaka  
Katz, J., & Lindell, Y. Introduction to Modern Cryptography.
OWASP Foundation. Password Storage Cheat Sheet.

---

## 10. Commit Log
```
commit abc12345
Author: Muhamad Iqbal Rasyad Izzaldin <zxiqbal28@gmail.com>
Date:   2026-01-24

    week14-analisis-serangan
```
