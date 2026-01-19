# Laporan Praktikum Kriptografi
Minggu ke-: 10  
Topik: Public Key Infrastructure (PKI) & Certificate Authority 
Nama: Muhamad Iqbal Rasyad Izzaldin  
NIM: 230202823  
Kelas: 5IKRA  

---

## 1. Tujuan
Membuat sertifikat digital sederhana menggunakan bahasa pemrograman Python.
Memahami dan menjelaskan peran Certificate Authority (CA) dalam sistem Public Key Infrastructure (PKI).
Menganalisis fungsi PKI dalam menjamin keamanan komunikasi, khususnya pada HTTPS dan TLS.

---

## 2. Dasar Teori
Public Key Infrastructure (PKI) merupakan suatu sistem yang digunakan untuk mengelola kunci publik dan sertifikat digital guna menjamin keamanan komunikasi pada jaringan komputer. PKI memanfaatkan kriptografi kunci publik, di mana setiap entitas memiliki sepasang kunci yaitu kunci publik dan kunci privat.

Certificate Authority (CA) adalah pihak tepercaya yang bertugas menerbitkan sertifikat digital. Sertifikat digital berfungsi untuk mengikat identitas suatu entitas (misalnya domain atau organisasi) dengan kunci publiknya. Sertifikat ini ditandatangani secara digital oleh CA sehingga pihak lain dapat memverifikasi keaslian sertifikat tersebut.

Dalam komunikasi aman seperti HTTPS dan TLS, PKI digunakan untuk mencegah serangan Man-in-the-Middle (MITM). Browser akan memverifikasi sertifikat server menggunakan CA yang telah dipercaya. Jika sertifikat valid, komunikasi akan dienkripsi dan aman dari penyadapan.

---

## 3. Alat dan Bahan
Python 3.11
Visual Studio Code
Git dan GitHub
Library Python:
cryptography
pyopenssl
Sistem operasi Linux / Windows

---

## 4. Langkah Percobaan
- Membuat struktur folder praktikum/week10-pki/.
- Membuat file pki_cert.py pada folder src/.
- Menginstall library yang diperlukan dengan perintah:
   pip install cryptography pyopenssl
- Menuliskan kode Python untuk menghasilkan private key dan sertifikat digital self-signed.
- Menjalankan program dengan perintah:
   python pki_cert.py
- Memastikan file sertifikat cert.pem berhasil dibuat.
- Mengambil screenshot hasil eksekusi program dan menyimpannya pada folder screenshots/.

---

## 5. Source Code
from cryptography import x509
from cryptography.x509.oid import NameOID
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import rsa
from datetime import datetime, timedelta

# Generate key pair
key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=2048
)

# Subject & Issuer (self-signed)
subject = issuer = x509.Name([
    x509.NameAttribute(NameOID.COUNTRY_NAME, u"ID"),
    x509.NameAttribute(NameOID.ORGANIZATION_NAME, u"UPB Kriptografi"),
    x509.NameAttribute(NameOID.COMMON_NAME, u"example.com"),
])

# Build certificate
cert = (
    x509.CertificateBuilder()
    .subject_name(subject)
    .issuer_name(issuer)
    .public_key(key.public_key())
    .serial_number(x509.random_serial_number())
    .not_valid_before(datetime.utcnow())
    .not_valid_after(datetime.utcnow() + timedelta(days=365))
    .sign(key, hashes.SHA256())
)

# Save certificate
with open("cert.pem", "wb") as f:
    f.write(cert.public_bytes(serialization.Encoding.PEM))

print("Sertifikat digital berhasil dibuat: cert.pem")


---

## 6. Hasil dan Pembahasan
Program berhasil menghasilkan sertifikat digital self-signed dalam format .pem. Sertifikat ini memuat informasi identitas seperti negara, organisasi, dan nama domain serta kunci publik yang ditandatangani menggunakan kunci privat yang sama.
Sertifikat yang dihasilkan dapat digunakan untuk simulasi PKI, namun belum dapat dipercaya oleh browser karena tidak ditandatangani oleh CA resmi. Hasil ini sesuai dengan tujuan praktikum untuk memahami konsep dasar sertifikat digital dan PKI.

Hasil eksekusi program Caesar Cipher:

![Hasil Eksekusi](screenshots/output.png)
![Hasil Input](screenshots/input.png)
![Hasil Output](screenshots/output.png)
)

---

## 7. Jawaban Pertanyaan
1. Apa fungsi utama Certificate Authority (CA)?
CA berfungsi sebagai pihak tepercaya yang menerbitkan dan menandatangani sertifikat digital untuk menjamin keaslian identitas pemilik sertifikat.
2. Mengapa self-signed certificate tidak cukup untuk sistem produksi?
Karena self-signed certificate tidak diverifikasi oleh CA tepercaya sehingga browser akan menampilkan peringatan keamanan dan pengguna tidak dapat memastikan keaslian server.
3. Bagaimana PKI mencegah serangan MITM dalam komunikasi TLS/HTTPS?
PKI memastikan bahwa kunci publik server telah diverifikasi oleh CA sehingga penyerang tidak dapat memalsukan identitas server tanpa sertifikat yang valid.

---

## 8. Kesimpulan
Praktikum ini menunjukkan bahwa PKI dan CA memiliki peran penting dalam menjamin keamanan komunikasi digital. Sertifikat digital memungkinkan autentikasi dan enkripsi data sehingga komunikasi menjadi aman dari penyadapan dan pemalsuan.

---

## 9. Daftar Pustaka
Kahn Academy / Mozilla Developer Network (MDN)
Mozilla. Public Key Infrastructure (PKI).

Peterson, L. L., & Davie, B. S.
Computer Networks: A Systems Approach. Morgan Kaufmann.

---

## 10. Commit Log
(Tuliskan bukti commit Git yang relevan.  
Contoh:
```
commit abc12345
Author: Nama Mahasiswa <zxiqbal28@gmail.com>
Date:   2026-01-19

 week10-pki
```
