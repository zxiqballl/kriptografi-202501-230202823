# Laporan Praktikum Kriptografi
Minggu ke-: 2  
Topik: Cryptosystem (komponen, Enkripsi & Deskripsi, Simetris & Asimetris)  
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
Kriptosistem adalah suatu sistem yang terdiri dari beberapa komponen yang bekerja sama untuk mengamankan data melalui proses enkripsi dan dekripsi. Komponen utama dari kriptosistem meliputi plaintext (data asli yang akan dilindungi), algoritma enkripsi (proses matematika untuk mengubah plaintext menjadi ciphertext), ciphertext (data terenkripsi yang tidak dapat dibaca tanpa kunci), kunci enkripsi (yang dapat bersifat simetris atau asimetris), dan algoritma dekripsi (proses untuk mengubah ciphertext kembali menjadi plaintext asli). Proses enkripsi menjamin keamanan data selama transmisi atau penyimpanan sehingga hanya pihak yang memiliki kunci yang dapat mengakses informasi asli.​

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

- if __name__ == "__main__":
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
