# Laporan Praktikum Kriptografi
    Minggu ke-: 1  
    Topik: Sejarah Kriptografi & Prinsip CIA 
    Nama: Muhamad Iqbal Rasyad Izzaldin 
    NIM: 230202823
    Kelas: 5IKRA  

---

## 1. Tujuan
1. Era Klasik

Kriptografi klasik muncul jauh sebelum komputer ada. Tujuannya sederhana: menyembunyikan isi pesan agar hanya penerima yang tahu maknanya.
Beberapa contoh terkenal:

Caesar Cipher (Julius Caesar, Romawi Kuno): setiap huruf digeser beberapa posisi dalam alfabet (misalnya A→D jika geser 3).

Substitution Cipher: mengganti setiap huruf dengan huruf lain atau simbol tertentu.

Transposition Cipher: mengacak urutan huruf tanpa mengubah huruf itu sendiri.

Kelemahan kriptografi klasik adalah mudah dipecahkan dengan analisis frekuensi huruf atau teknik brute force, karena hanya bergantung pada pola alfabet dan kunci yang pendek.

2. Era Mekanis dan Elektromekanis

Pada abad ke-20, terutama masa Perang Dunia II, kriptografi mulai menggunakan mesin untuk mengenkripsi pesan.
Contoh paling terkenal adalah Mesin Enigma yang digunakan oleh Jerman. Mesin ini menggunakan roda berputar (rotor) untuk menghasilkan sandi kompleks yang berubah setiap kali tombol ditekan.
Upaya memecahkan Enigma oleh Alan Turing dan timnya di Inggris menjadi tonggak lahirnya komputer modern dan kriptanalisis otomatis.

3. Era Kriptografi Modern

Setelah komputer berkembang pesat, kriptografi beralih dari metode manual menjadi algoritma matematis berbasis komputer.

Tahun 1970-an: muncul Data Encryption Standard (DES), algoritma simetris pertama yang distandarkan.

1977: diperkenalkan RSA (Rivest–Shamir–Adleman), sistem kriptografi kunci publik (asymmetric encryption) yang memungkinkan komunikasi aman tanpa berbagi kunci rahasia terlebih dahulu.

Saat ini, digunakan algoritma seperti AES (Advanced Encryption Standard), ECC (Elliptic Curve Cryptography), dan SHA (Secure Hash Algorithm) untuk menjaga keamanan data digital di internet, e-banking, hingga sistem IoT.

---

## 2. Dasar Teori
Kriptografi adalah ilmu yang mempelajari cara mengamankan pesan atau data agar tidak dapat dibaca oleh pihak yang tidak berwenang. Teknik ini melibatkan dua proses utama, yaitu enkripsi (penyandian pesan asli menjadi bentuk rahasia) dan dekripsi (mengembalikan pesan rahasia ke bentuk semula). Pada masa klasik, metode kriptografi seperti Caesar Cipher dan Substitution Cipher digunakan dengan menggeser huruf atau mengganti simbol tertentu agar pesan tidak mudah dimengerti oleh orang lain.

Dalam kriptografi modern, algoritma yang digunakan jauh lebih kompleks dan berbasis perhitungan matematika, seperti RSA, AES, dan DES. Sistem ini memanfaatkan konsep modular aritmetika, bilangan prima besar, serta fungsi hash untuk menjaga keamanan data dalam komunikasi digital, seperti pada enkripsi email, transaksi online, dan autentikasi pengguna.

Selain algoritma kriptografi, keamanan informasi juga didasari oleh prinsip CIA Triad, yaitu Confidentiality (kerahasiaan), Integrity (integritas), dan Availability (ketersediaan). Ketiga aspek ini memastikan bahwa data hanya dapat diakses oleh pihak yang berhak, tidak diubah tanpa izin, dan selalu tersedia bagi pengguna yang berwenang. Prinsip CIA menjadi dasar utama dalam membangun sistem keamanan informasi modern.

---

## 3. Alat dan Bahan
(- Python 3.x  
- Visual Studio Code / editor lain  
- Git dan akun GitHub  
- Library tambahan (misalnya pycryptodome, jika diperlukan)  )

---

## 4. Langkah Percobaan
(Tuliskan langkah yang dilakukan sesuai instruksi.  
Contoh format:
1. Membuat file `caesar_cipher.py` di folder `praktikum/week2-cryptosystem/src/`.
2. Menyalin kode program dari panduan praktikum.
3. Menjalankan program dengan perintah `python caesar_cipher.py`.)

---

## 5. Source Code
    # ==============================
    # Program: Caesar Cipher
    # Pembuat: Muhamad Iqbal Rasyad Izzaldin
    # Deskripsi: Implementasi algoritma kriptografi klasik
    # ==============================

    # Fungsi enkripsi
    def encrypt(text, key):
    result = ""
    for char in text:
        if char.isalpha():  # cek apakah karakter huruf
            shift = 65 if char.isupper() else 97  # huruf besar atau kecil
            result += chr((ord(char) - shift + key) % 26 + shift)
        else:
            result += char  # karakter non-huruf tidak diubah
    return result

    # Fungsi dekripsi
    def decrypt(cipher, key):
    result = ""
    for char in cipher:
        if char.isalpha():
            shift = 65 if char.isupper() else 97
            result += chr((ord(char) - shift - key) % 26 + shift)
        else:
            result += char
    return result

    # Program utama
    print("=== Program Caesar Cipher ===")
    plain_text = input("Masukkan teks: ")
    key = int(input("Masukkan kunci (angka): "))

    # Enkripsi
    encrypted_text = encrypt(plain_text, key)
    print(f"\nTeks terenkripsi : {encrypted_text}")

    # Dekripsi
    decrypted_text = decrypt(encrypted_text, key)
    print(f"Teks terdekripsi : {decrypted_text}"
    )

---

## 6. Hasil dan Pembahasan

Hasil eksekusi program Caesar Cipher:

![Hasil Eksekusi](screenshots/output.png)
![Hasil Input](screenshots/input.png)
![Hasil Output](screenshots/output.png)
)

---

## 7. Jawaban Pertanyaan
    1. Tokoh yang dianggap sebagai bapak kriptografi modern adalah Whitfield Diffie dan Martin Hellman.
    2.  RSA (Rivest–Shamir–Adleman)
        ECC (Elliptic Curve Cryptography)
        Diffie–Hellman Key Exchange
    3. Perbedaan utamanya terletak pada kompleksitas algoritma dan media penggunaannya:
        Kriptografi klasik menggunakan operasi sederhana seperti substitusi dan transposisi huruf, dilakukan secara manual, dan kuncinya relatif mudah ditebak.
        Kriptografi modern menggunakan rumus matematika kompleks dan komputer, melibatkan bilangan besar, fungsi hash, serta sistem kunci publik dan privat,               sehingga jauh lebih aman dan efisien untuk komunikasi digital.
---

## 8. Kesimpulan
Berdasarkan percobaan yang dilakukan, dapat disimpulkan bahwa algoritma Caesar Cipher merupakan bentuk dasar dari kriptografi klasik yang bekerja dengan cara menggeser huruf berdasarkan nilai kunci tertentu. Proses enkripsi dan dekripsi pada algoritma ini masih sederhana, namun memberikan pemahaman dasar tentang prinsip kerja kriptografi modern.
Melalui praktikum ini juga dipahami pentingnya penerapan prinsip CIA (Confidentiality, Integrity, Availability) dalam menjaga keamanan informasi pada sistem digital masa kini.

---

## 9. Daftar Pustaka
1. Pohlig, S. C., & Hellman, M. E. “An Improved Algorithm for Computing Logarithms Over GF(p) and Its Cryptographic Significance.” IEEE Transactions on Information Theory, vol. 24, no. 1, Jan. 1978, pp. 106-110.
2. Hellman, M. E. “An Overview of Public-Key Cryptography.” IEEE Communications Magazine, vol. 16, no. 11, 1978, pp. 24-32.
3. Bellare, M., & Rogaway, P. Introduction to Modern Cryptography. 2nd ed., CRC Press, 2005.

---

## 10. Commit Log
commit 4f8b2a7
Author: Muhamad Iqbal Rasyad Izzaldin <iqbalizzaldin@students.example.com>
Date:   2025-10-10 14:32:00 +0700

    week1-cryptography: implementasi Caesar Cipher dan pembuatan laporan praktikum

```
