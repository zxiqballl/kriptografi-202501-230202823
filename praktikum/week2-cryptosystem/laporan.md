# Laporan Praktikum Kriptografi
Minggu ke-: 2  
Topik: Cryptosystem (Komponen, Enkripsi & Dekripsi, Simetris & Asimetris)
Nama: Muhamad Iqbal Rasyad Izzaldin 
NIM: 230202823  
Kelas: 5IKRA 

---
 
## 1. Tujuan
1. Mengidentifikasi komponen dasar kriptosistem ( plaintext< cipertext, kunci, algoritma).
2. Menggambarkan proses enkripsi dan dekripsi sederhana.
3. Mengkasifikasi jenis kriptosistem ( simetris dan asimetris).

---

## 2. Dasar Teori
Kriptosistem adalah suatu sistem yang terdiri dari beberapa komponen yang bekerja sama untuk mengamankan data melalui proses enkripsi dan dekripsi. Komponen utama dari kriptosistem meliputi plaintext (data asli yang akan dilindungi), algoritma enkripsi (proses matematika untuk mengubah plaintext menjadi ciphertext), ciphertext (data terenkripsi yang tidak dapat dibaca tanpa kunci), kunci enkripsi (yang dapat bersifat simetris atau asimetris), dan algoritma dekripsi (proses untuk mengubah ciphertext kembali menjadi plaintext asli). Proses enkripsi menjamin keamanan data selama transmisi atau penyimpanan sehingga hanya pihak yang memiliki kunci yang dapat mengakses informasi asli.
Enkripsi dan dekripsi adalah dua proses utama dalam kriptografi. Enkripsi adalah proses mengubah data asli menjadi format yang tidak dapat dibaca (ciphertext) menggunakan algoritma dan kunci tertentu. Sebaliknya, dekripsi adalah proses mengubah ciphertext kembali menjadi data asli menggunakan kunci yang sesuai. Ada dua jenis utama kriptosistem berdasarkan kunci yang digunakan: kriptosistem simetris yang menggunakan satu kunci yang sama untuk enkripsi dan dekripsi, serta kriptosistem asimetris yang menggunakan sepasang kunci berbeda (kunci publik untuk enkripsi dan kunci privat untuk dekripsi).

---

## 3. Alat dan Bahan
- Python 3.x sebagai bahasa pemrograman utama.
- Visual Studio Code atau editor kode lain untuk menulis program.
- Git dan akun GitHub sebagai alat version control dan penyimpanan kode.
- Library tambahan seperti pycryptodome﻿ untuk mendukung fungsi kriptografi bila diperlukan.

---

## 4. Langkah Percobaan
1. Membuat folder proyek di direktori praktikum/week2-cryptosystem/src/.
2. Membuat file caesar_cipher.py di dalam folder tersebut.
3. Menulis kode Python untuk algoritma Caesar Cipher sesuai panduan praktikum.
4. Menjalankan kode dengan perintah python caesar_cipher.py di terminal/command prompt.
5. Mengamati hasil output berupa teks terenkripsi dan terdekripsi yang muncul pada output program.

---

## 5. Source Code
def encrypt(text, key):
    result = ""
    for char in text:
        if char.isalpha():
            shift = key % 26
            if char.isupper():
                result += chr((ord(char) - 65 + shift) % 26 + 65)
            else:
                result += chr((ord(char) - 97 + shift) % 26 + 97)
        else:
            result += char
    return result

def decrypt(ciphertext, key):
    return encrypt(ciphertext, -key)

if __name__ == "__main__":
    text = input("Masukkan plaintext: ")
    key = int(input("Masukkan kunci (angka): "))
    encrypted = encrypt(text, key)
    print("Hasil Enkripsi:", encrypted)
    decrypted = decrypt(encrypted, key)
    print("Hasil Dekripsi:", decrypted)

---

## 6. Hasil dan Pembahasan

Hasil eksekusi program Caesar Cipher:

![Hasil Eksekusi](screenshots/output.png)
![Hasil Input](screenshots/input.png)
![Hasil Output](screenshots/output.png)

---

## 7. Jawaban Pertanyaan
- Komponen utama dalam sebuah kriptosistem meliputi plaintext (data asli yang ingin diamankan), ciphertext (data terenkripsi yang tidak dapat dibaca tanpa kunci), kunci yang digunakan untuk enkripsi dan dekripsi (bisa berupa kunci simetris atau pasangan kunci asimetris publik dan privat), algoritma kriptografi (prosedur atau metode untuk mengubah plaintext menjadi ciphertext dan sebaliknya), serta proses enkripsi dan dekripsi itu sendiri yang mentransformasikan data dari bentuk asli ke bentuk terenkripsi dan kembali lagi.
  
- Kelebihan sistem simetris dibanding asimetris adalah kecepatan proses enkripsi dan dekripsi yang jauh lebih tinggi serta algoritmanya yang relatif sederhana, sehingga hemat sumber daya komputasi. Namun, kelemahan utama sistem simetris adalah masalah distribusi kunci karena kunci yang sama harus dijaga kerahasiaannya dan dibagi dengan pihak penerima secara aman sebelum komunikasi berlangsung. Jika kunci ini bocor, keamanan komunikasi akan langsung terancam. Sebaliknya, sistem asimetris lebih lambat dan kompleks, tetapi tidak memiliki masalah distribusi kunci yang sama karena menggunakan sepasang kunci publik dan privat yang berbeda.
  
- Distribusi kunci menjadi masalah utama dalam kriptografi simetris karena kunci yang sama harus dikirim secara rahasia kepada penerima tanpa diketahui pihak ketiga. Jika kunci ini telah tersebar atau dicuri, maka pihak tidak berwenang dapat dengan mudah mendekripsi pesan, sehingga keamanan sistem terganggu. Oleh karena itu, metode pengiriman kunci yang aman sangat penting namun sering sulit diwujudkan terutama dalam jaringan yang tidak terpercaya.
---

## 8. Kesimpulan
Kesimpulannya, komponen utama kriptosistem mencakup plaintext, ciphertext, kunci, algoritma, dan proses enkripsi-dekripsi. Sistem simetris unggul dalam kecepatan dan efisiensi, tapi menghadapi tantangan distribusi kunci yang aman, sedangkan sistem asimetris lebih aman dalam pengelolaan kunci tetapi lebih lambat dan kompleks. Distribusi kunci menjadi titik lemah kriptografi simetris yang perlu perhatian khusus untuk menjaga keamanan komunikasi.

---

## 9. Daftar Pustaka
- Stinson, D. R. Cryptography: Theory and Practice. CRC Press, 2005.
- Rivest, R., Shamir, A., & Adleman, L. (1978). “A Method for Obtaining Digital Signatures and Public-Key Cryptosystems.” Communications of the ACM, 21(2), 120-126.
- https://www.its.ac.id/matematika/kriptografi-3/
---

## 10. Commit Log

commit abc12345
Author: Muhamad Iqbal Rasyad Izzaldin <iqbalizzaldin@students.example.com>
Date:   2025-10-21

    week2-cryptosystem: implementasi Caesar Cipher dan laporan 
```
