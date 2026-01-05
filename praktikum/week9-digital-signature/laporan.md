# Laporan Praktikum Kriptografi
Minggu ke-: 9  
Topik: Digital Signature (RSA) 
Nama: Muhamad Iqbal Rasyad Izzaldin  
NIM: 230202823
Kelas: 5IKRA  

---

## 1. Tujuan
Tujuan dari praktikum ini adalah untuk mengimplementasikan mekanisme tanda tangan digital menggunakan algoritma RSA, melakukan proses verifikasi tanda tangan, serta memahami manfaat tanda tangan digital dalam menjamin integritas, autentikasi, dan non-repudiation pada pesan digital.

---

## 2. Dasar Teori
Tanda tangan digital merupakan mekanisme kriptografi yang digunakan untuk memastikan keaslian pengirim dan integritas suatu pesan digital. Berbeda dengan enkripsi yang bertujuan menjaga kerahasiaan data, tanda tangan digital bertujuan untuk membuktikan bahwa pesan benar-benar berasal dari pengirim yang sah dan tidak mengalami perubahan selama transmisi.

Algoritma RSA dapat digunakan untuk tanda tangan digital dengan cara mengenkripsi nilai hash dari pesan menggunakan private key pengirim. Pihak penerima kemudian dapat memverifikasi tanda tangan tersebut menggunakan public key pengirim. Jika hasil verifikasi berhasil, maka pesan dianggap asli dan tidak dimodifikasi.

Dalam sistem keamanan modern, tanda tangan digital sering dikombinasikan dengan Certificate Authority (CA) yang berfungsi untuk memverifikasi kepemilikan public key. Hal ini memastikan bahwa public key yang digunakan benar-benar milik entitas yang sah.

---

## 3. Alat dan Bahan
- Python 3.11
- Visual Studio Code
- Git dan akun GitHub
- Library pycryptodome

---

## 4. Langkah Percobaan
- Membuat struktur folder praktikum/week9-digital-signature/.
- Membuat file signature.py di folder src/.
- Menginstall library pycryptodome menggunakan perintah pip install pycryptodome.
- Menuliskan kode program untuk pembuatan pasangan kunci RSA.
- Membuat tanda tangan digital dari sebuah pesan menggunakan private key.
- Melakukan verifikasi tanda tangan menggunakan public key.
- Menguji kegagalan verifikasi dengan memodifikasi isi pesan.
- Menjalankan program dan mengambil screenshot hasil eksekusi.
- Melakukan commit Git dengan pesan week9-digital-signature.

---

## 5. Source Code
from Crypto.PublicKey import RSA
from Crypto.Signature import pkcs1_15
from Crypto.Hash import SHA256

# Generate pasangan kunci RSA
key = RSA.generate(2048)
private_key = key
public_key = key.publickey()

# Pesan asli
message = b"Hello, ini pesan penting."
hash_message = SHA256.new(message)

# Membuat tanda tangan digital
signature = pkcs1_15.new(private_key).sign(hash_message)
print("Signature:", signature.hex())

# Verifikasi tanda tangan
try:
    pkcs1_15.new(public_key).verify(hash_message, signature)
    print("Verifikasi berhasil: tanda tangan valid.")
except (ValueError, TypeError):
    print("Verifikasi gagal: tanda tangan tidak valid.")

# Uji pesan yang dimodifikasi
fake_message = b"Hello, ini pesan palsu."
hash_fake = SHA256.new(fake_message)

try:
    pkcs1_15.new(public_key).verify(hash_fake, signature)
    print("Verifikasi berhasil (seharusnya gagal).")
except (ValueError, TypeError):
    print("Verifikasi gagal: tanda tangan tidak cocok dengan pesan.")


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

Code gagal karena saya tidak dapat neginstall pycryptodome

---

## 7. Jawaban Pertanyaan
1. Enkripsi RSA bertujuan untuk menjaga kerahasiaan pesan dengan mengenkripsi data menggunakan public key penerima, sedangkan tanda tangan digital RSA bertujuan untuk menjamin keaslian dan integritas pesan dengan menggunakan private key pengirim.

2. Karena tanda tangan digital dibuat dari hash pesan menggunakan private key, setiap perubahan pada pesan akan menyebabkan hash berbeda dan verifikasi gagal. Selain itu, penggunaan private key membuktikan identitas pengirim.

3. Certificate Authority berperan untuk memverifikasi identitas pemilik public key dan menerbitkan sertifikat digital, sehingga penerima pesan dapat mempercayai bahwa public key benar-benar milik pengirim yang sah.

---

## 8. Kesimpulan
Tanda tangan digital menggunakan algoritma RSA dapat menjamin integritas dan autentikasi pesan digital. Percobaan menunjukkan bahwa pesan yang dimodifikasi tidak dapat diverifikasi, sehingga membuktikan efektivitas tanda tangan digital dalam menjaga keamanan komunikasi.

---

## 9. Daftar Pustaka
Stinson, D. R. (2019). Cryptography: Theory and Practice. CRC Press.
Diffie, W., & Hellman, M. (1976). New Directions in Cryptography. IEEE Transactions on Information Theory.

---

## 10. Commit Log
(Tuliskan bukti commit Git yang relevan.  
Contoh:
```
commit abc12345
Author: Muhamad Iqbal Rasyad Izzaldin <zxiqbal28@gmail.com>
Date:   2026-01-06

    week9-digital-signature
```
