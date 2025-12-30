# Laporan Praktikum Kriptografi
Minggu ke-: 5  
Topik: Cipher Klasik (Caesar, Vigenère, Transposisi)  
Nama: Muhamad Iqbal Rasyad Izzaldin  
NIM: 230202823  
Kelas: 5IKRA

---

## 1. Tujuan
Praktikum ini bertujuan untuk memahami dan mengimplementasikan algoritma kriptografi klasik, yaitu Caesar Cipher, Vigenère Cipher, dan cipher transposisi sederhana. Mahasiswa diharapkan mampu melakukan proses enkripsi dan dekripsi serta memahami kelemahan cipher klasik terhadap berbagai jenis serangan kriptanalisis.

---

## 2. Dasar Teori
Cipher klasik merupakan metode kriptografi awal yang digunakan untuk mengamankan pesan dengan teknik substitusi dan transposisi. Cipher ini bekerja dengan cara mengubah susunan atau nilai karakter plaintext menjadi ciphertext menggunakan aturan tertentu. Contoh cipher klasik yang umum digunakan adalah Caesar Cipher dan Vigenère Cipher.

Caesar Cipher adalah cipher substitusi sederhana yang melakukan pergeseran alfabet berdasarkan kunci berupa bilangan bulat. Meskipun mudah diimplementasikan, Caesar Cipher memiliki ruang kunci yang sangat kecil sehingga mudah dipecahkan dengan brute force maupun analisis frekuensi.

Vigenère Cipher merupakan pengembangan dari Caesar Cipher dengan menggunakan kunci berupa kata, sehingga pergeseran karakter menjadi bervariasi. Walaupun lebih kuat dibanding Caesar Cipher, Vigenère Cipher tetap rentan terhadap serangan analisis frekuensi jika panjang kunci dapat ditebak. Cipher transposisi berbeda dengan substitusi karena tidak mengubah karakter, tetapi hanya mengubah posisi karakter dalam pesan.

---

## 3. Alat dan Bahan
-Python 3.11
-Visual Studio Code
-Sistem operasi Windows
-Git dan akun GitHub
-Library standar Python

---

## 4. Langkah Percobaan
-Membuat struktur folder praktikum/week5-cipher-klasik/.
-Membuat file Python caesar.py, vigenere.py, dan transpose.py di folder src/.
-Menyalin kode program sesuai panduan praktikum.
-Menjalankan program menggunakan perintah python nama_file.py.
-Mengamati hasil enkripsi dan dekripsi.
-Mengambil screenshot hasil eksekusi program.
-Melakukan commit ke repository GitHub dengan pesan week5-cipher-klasik..)

---

## 5. Source Code
def vigenere_encrypt(plaintext, key):
    result = []
    key = key.lower()
    key_index = 0
    for char in plaintext:
        if char.isalpha():
            shift = ord(key[key_index % len(key)]) - 97
            base = 65 if char.isupper() else 97
            result.append(chr((ord(char) - base + shift) % 26 + base))
            key_index += 1
        else:
            result.append(char)
    return "".join(result)

def vigenere_decrypt(ciphertext, key):
    result = []
    key = key.lower()
    key_index = 0
    for char in ciphertext:
        if char.isalpha():
            shift = ord(key[key_index % len(key)]) - 97
            base = 65 if char.isupper() else 97
            result.append(chr((ord(char) - base - shift) % 26 + base))
            key_index += 1
        else:
            result.append(char)
    return "".join(result)

print("=== VIGENERE CIPHER ===")
text = input("Masukkan teks: ")
key = input("Masukkan kunci (huruf): ")

cipher = vigenere_encrypt(text, key)
print("Ciphertext :", cipher)
print("Decrypted  :", vigenere_decrypt(cipher, key))


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
1. Apa kelemahan utama algoritma Caesar Cipher dan Vigenère Cipher?
Caesar Cipher memiliki ruang kunci yang kecil sehingga mudah diserang brute force. Vigenère Cipher lebih kuat, tetapi tetap rentan terhadap analisis frekuensi jika panjang kunci diketahui atau dapat ditebak.

2. Mengapa cipher klasik mudah diserang dengan analisis frekuensi?
Karena cipher klasik mempertahankan pola statistik bahasa asli, seperti frekuensi kemunculan huruf, sehingga pola tersebut dapat dianalisis untuk menemukan kunci.

3. Bandingkan kelebihan dan kelemahan cipher substitusi vs transposisi.
Cipher substitusi mudah diimplementasikan tetapi mempertahankan pola frekuensi huruf. Cipher transposisi menyembunyikan pola posisi karakter, namun masih dapat dipecahkan jika algoritma dan kunci diketahui.
---

## 8. Kesimpulan
Cipher klasik dapat digunakan untuk memahami konsep dasar kriptografi, namun memiliki banyak kelemahan keamanan. Caesar Cipher dan Vigenère Cipher rentan terhadap serangan kriptanalisis. Oleh karena itu, cipher klasik tidak direkomendasikan untuk pengamanan data modern.

---

## 9. Daftar Pustaka
Stallings, W. Cryptography and Network Security, 2017.

Katz, J., & Lindell, Y. Introduction to Modern Cryptography..  )

---

## 10. Commit Log
(Tuliskan bukti commit Git yang relevan.  
Contoh:
```
commit abc12345
Author: Muhamad Iqbal Rasyad Izzaldin <zxiqbal2803@gmail.com>
Date:   30-12-2025

    week5-cipher-klasik: implementasi cipher klasik dan laporan
```
