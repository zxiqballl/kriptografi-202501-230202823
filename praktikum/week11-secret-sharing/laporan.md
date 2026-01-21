# Laporan Praktikum Kriptografi
Minggu ke-: 11  
Topik: Shamir’s Secret Sharing (Secret Sharing Scheme)  
Nama: Muhamad Iqbal Rasyad Izzaldin  
NIM: 230202823  
Kelas: 5IKRA  

---

## 1. Tujuan
Tujuan dari praktikum ini adalah:
Memahami konsep dasar Shamir’s Secret Sharing (SSS).
Melakukan simulasi pembagian sebuah rahasia ke beberapa bagian (shares) menggunakan skema SSS.
Melakukan rekonstruksi rahasia menggunakan sejumlah minimal shares sesuai nilai threshold.
Menganalisis keamanan distribusi rahasia menggunakan skema secret sharing.

---

## 2. Dasar Teori
Shamir’s Secret Sharing (SSS) merupakan skema kriptografi yang diperkenalkan oleh Adi Shamir pada tahun 1979. Skema ini memungkinkan sebuah rahasia dibagi menjadi beberapa bagian (shares) sedemikian rupa sehingga hanya dengan jumlah minimal tertentu (threshold) rahasia tersebut dapat direkonstruksi kembali.
Skema SSS didasarkan pada konsep polinomial dalam aritmetika modular. Rahasia disimpan sebagai konstanta (a₀) dari sebuah polinomial berderajat (k−1). Setiap share merupakan pasangan nilai (x, f(x)). Tanpa minimal k buah share, polinomial tidak dapat direkonstruksi sehingga rahasia tetap aman.
Keamanan Shamir’s Secret Sharing bersifat information-theoretic secure, artinya penyerang yang hanya memiliki kurang dari k share tidak memperoleh informasi apa pun mengenai rahasia asli.

---

## 3. Alat dan Bahan
- Python 3.11
- Visual Studio Code
- Git dan GitHub
- Library Python:
    secretsharing

---

## 4. Langkah Percobaan
- Membuat struktur folder praktikum/week11-secret-sharing/.
- Membuat file secret_sharing.py di dalam folder src/.
- Menginstall library secretsharing dengan perintah:
    pip install secretsharing
- Menuliskan program Python untuk membagi rahasia menjadi beberapa shares.
- Menjalankan program menggunakan perintah:
    python secret_sharing.py
- Melakukan rekonstruksi rahasia menggunakan minimal jumlah share.
- Mengambil screenshot hasil pembagian dan rekonstruksi rahasia.

---

## 5. Source Code
from secretsharing import SecretSharer

# Rahasia yang akan dibagi
secret = "KriptografiUPB2025"

# Membagi rahasia menjadi 5 shares dengan threshold 3
shares = SecretSharer.split_secret(secret, 3, 5)
print("Shares:")
for s in shares:
    print(s)

# Rekonstruksi rahasia menggunakan 3 shares
recovered_secret = SecretSharer.recover_secret(shares[:3])
print("\nRecovered Secret:", recovered_secret)


---

## 6. Hasil dan Pembahasan
Program berhasil membagi rahasia menjadi lima buah shares dengan threshold tiga. Hal ini berarti rahasia hanya dapat direkonstruksi apabila minimal tiga shares digabungkan. Pengujian dilakukan dengan mengambil tiga shares pertama dan hasil rekonstruksi menunjukkan bahwa rahasia yang diperoleh sama dengan rahasia asli.

Hasil ini sesuai dengan konsep Shamir’s Secret Sharing, di mana kurang dari threshold shares tidak cukup untuk memperoleh informasi rahasia. Selama pengujian tidak ditemukan error pada proses pembagian maupun rekonstruksi rahasia. 

Hasil eksekusi program Caesar Cipher:

![Hasil Eksekusi](screenshots/output.png)
![Hasil Input](screenshots/input.png)
![Hasil Output](screenshots/output.png)
)

---

## 7. Jawaban Pertanyaan
1. Apa keuntungan utama Shamir Secret Sharing dibanding membagikan salinan kunci secara langsung?
Keuntungan utama SSS adalah rahasia tidak pernah disimpan atau dibagikan secara utuh. Jika sebagian share bocor, rahasia tetap aman selama jumlah share yang bocor kurang dari threshold.
2. Apa peran threshold (k) dalam keamanan secret sharing?
Threshold (k) menentukan jumlah minimal shares yang dibutuhkan untuk merekonstruksi rahasia. Semakin tepat nilai k ditentukan, semakin seimbang antara keamanan dan ketersediaan rahasia.
3. Berikan satu contoh skenario nyata di mana SSS sangat bermanfaat.
SSS digunakan dalam manajemen kunci cryptocurrency, di mana private key dibagi ke beberapa pihak agar tidak ada satu pihak pun yang memiliki kendali penuh terhadap aset digital.

---

## 8. Kesimpulan
Praktikum ini membuktikan bahwa Shamir’s Secret Sharing merupakan metode yang aman dan efektif untuk mendistribusikan rahasia. Skema ini mampu menjaga keamanan rahasia meskipun sebagian share diketahui oleh pihak yang tidak berwenang.

---

## 9. Daftar Pustaka
- Stinson, D. R. (2019). Cryptography: Theory and Practice. CRC Press. 
- Shamir, A. (1979). How to Share a Secret. Communications of the ACM.

---

## 10. Commit Log
commit abc12345
Author: Muhamad Iqbal Rasyad Izzaldin <zxiqbal28@gmail.com>
Date:   2026-01-22

    week11-secret-sharing
```
