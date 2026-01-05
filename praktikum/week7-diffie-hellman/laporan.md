# Laporan Praktikum Kriptografi
Minggu ke-: 7  
Topik: Diffie-Hellman Key Exchange  
Nama: Muhamad Iqbal Rasyad Izzaldin
NIM: 230202823 
Kelas: 5IKRA 

---

## 1. Tujuan
Tujuan dari praktikum ini adalah untuk memahami dan mengimplementasikan protokol Diffie-Hellman Key Exchange sebagai metode pertukaran kunci rahasia melalui saluran komunikasi publik. Selain itu, praktikum ini bertujuan untuk menganalisis kelemahan keamanan Diffie-Hellman, khususnya terhadap serangan Man-in-the-Middle (MITM).

---

## 2. Dasar Teori
Diffie-Hellman Key Exchange merupakan salah satu protokol kriptografi kunci publik yang digunakan untuk menghasilkan kunci rahasia bersama antara dua pihak melalui saluran komunikasi yang tidak aman. Protokol ini diperkenalkan oleh Whitfield Diffie dan Martin Hellman pada tahun 1976 dan menjadi dasar bagi banyak sistem keamanan modern.

Mekanisme Diffie-Hellman bergantung pada kesulitan masalah logaritma diskrit dalam aritmetika modular. Dua pihak menyepakati sebuah bilangan prima besar dan sebuah generator sebagai parameter publik. Meskipun parameter ini diketahui oleh pihak lain, nilai kunci rahasia tetap aman selama bilangan prima cukup besar.

Namun, Diffie-Hellman murni tidak menyediakan mekanisme autentikasi. Akibatnya, protokol ini rentan terhadap serangan Man-in-the-Middle, di mana penyerang dapat menyamar sebagai pihak sah dan membentuk dua kunci rahasia berbeda dengan masing-masing korban.

---

## 3. Alat dan Bahan
- Python 3.11
- Visual Studio Code
- Git dan akun GitHub
- Sistem operasi Windows / Linux

---

## 4. Langkah Percobaan
- Membuat struktur folder praktikum/week7-diffie-hellman/.
- Membuat file diffie_hellman.py di dalam folder src/.
- Menuliskan kode simulasi Diffie-Hellman sesuai panduan praktikum.
- Menjalankan program menggunakan perintah:
    python diffie_hellman.py
- Mengamati hasil kunci rahasia yang dihasilkan Alice dan Bob.
- Menambahkan simulasi serangan Man-in-the-Middle (MITM).
- Mengambil screenshot hasil eksekusi program.
- Melakukan commit ke repository Git dengan pesan week7-diffie-hellman.

---

## 5. Source Code
import random

# parameter publik
p = 23
g = 5

# private key
a = random.randint(1, p-1)  # Alice
b = random.randint(1, p-1)  # Bob

# public key
A = pow(g, a, p)
B = pow(g, b, p)

# shared secret
shared_secret_A = pow(B, a, p)
shared_secret_B = pow(A, b, p)

print("Public Key Alice:", A)
print("Public Key Bob  :", B)
print("Kunci bersama Alice:", shared_secret_A)
print("Kunci bersama Bob  :", shared_secret_B)


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
1. Diffie-Hellman memungkinkan pertukaran kunci di saluran publik karena keamanan protokol ini bergantung pada kesulitan masalah logaritma diskrit. Meskipun parameter publik diketahui, nilai kunci rahasia tidak dapat dihitung secara efisien oleh pihak lain.
2. Kelemahan utama Diffie-Hellman murni adalah tidak adanya mekanisme autentikasi, sehingga protokol ini rentan terhadap serangan Man-in-the-Middle (MITM).
3. Serangan MITM dapat dicegah dengan menambahkan mekanisme autentikasi, seperti sertifikat digital, tanda tangan digital, atau menggabungkan Diffie-Hellman dengan protokol TLS.

---

## 8. Kesimpulan
Diffie-Hellman Key Exchange memungkinkan dua pihak untuk membentuk kunci rahasia bersama melalui saluran publik. Namun, tanpa autentikasi tambahan, protokol ini rentan terhadap serangan Man-in-the-Middle. Oleh karena itu, implementasi Diffie-Hellman harus dikombinasikan dengan mekanisme keamanan tambahan.

---

## 9. Daftar Pustaka
Diffie, W., & Hellman, M. (1976).
New Directions in Cryptography.
IEEE Transactions on Information Theory, 22(6), 644–654.

Menezes, A. J., van Oorschot, P. C., & Vanstone, S. A. (1996).
Handbook of Applied Cryptography.
CRC Press.

---

## 10. Commit Log
(Tuliskan bukti commit Git yang relevan.  
Contoh:
```
commit abc12345
Author: Muhamad Iqbal Rasyad Izzaldin <zxiqbal28@gmail.com>
Date:   2026-01-06

   week7-diffie-hellman
```
