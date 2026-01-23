# Laporan Praktikum Kriptografi
Minggu ke-: X  
Topik: [judul praktikum]  
Nama: [Nama Mahasiswa]  
NIM: [NIM Mahasiswa]  
Kelas: [Kelas]  

---

## 1. Tujuan
Tujuan dari praktikum ini adalah untuk menganalisis penerapan kriptografi dalam komunikasi digital, khususnya penggunaan SSL/TLS pada email dan website e-commerce. Selain itu, praktikum ini bertujuan untuk memahami peran enkripsi dalam melindungi transaksi online serta mengevaluasi isu etika dan privasi yang muncul akibat penggunaan kriptografi dalam kehidupan sehari-hari.

---

## 2. Dasar Teori
SSL (Secure Sockets Layer) dan TLS (Transport Layer Security) merupakan protokol keamanan yang digunakan untuk melindungi komunikasi data pada jaringan komputer. TLS adalah versi pengembangan dari SSL dan saat ini menjadi standar utama dalam pengamanan komunikasi web, email, dan aplikasi jaringan lainnya. TLS bekerja dengan mengombinasikan kriptografi kunci publik dan kunci simetris untuk menjamin kerahasiaan, integritas, dan autentikasi data.

Dalam konteks web dan e-commerce, TLS diimplementasikan melalui HTTPS. HTTPS memastikan bahwa data sensitif seperti username, password, dan informasi pembayaran dienkripsi sebelum dikirimkan melalui jaringan. Sertifikat digital yang dikeluarkan oleh Certificate Authority (CA) digunakan untuk memverifikasi identitas server dan mencegah serangan seperti Man-in-the-Middle (MITM).

Selain aspek teknis, penggunaan kriptografi juga menimbulkan isu etika dan privasi. Enkripsi melindungi komunikasi pribadi pengguna, namun di sisi lain dapat menyulitkan penegakan hukum dan pengawasan. Oleh karena itu, diperlukan keseimbangan antara keamanan, privasi, dan kepentingan hukum.

---

## 3. Alat dan Bahan
- Browser (Google Chrome / Mozilla Firefox)
- Koneksi internet
- Git dan akun GitHub
- Sistem operasi Windows
- Editor teks (Visual Studio Code)

---

## 4. Langkah Percobaan
- Membuat folder praktikum/week12-aplikasi-tls/ beserta subfolder screenshots/.
- Mengakses website e-commerce menggunakan browser (contoh: Tokopedia dan Shopee).
- Mengecek sertifikat digital dengan klik ikon gembok pada address bar browser.
- Mencatat informasi sertifikat:
- Certificate Authority (Issuer)
- Masa berlaku sertifikat
- Algoritma enkripsi
- Membandingkan website HTTPS dan HTTP.
- Menganalisis penerapan TLS pada transaksi login dan pembayaran.
- Mendokumentasikan hasil pengamatan dalam laporan dan screenshot.
- Melakukan commit Git dengan pesan week12-aplikasi-tls.

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
