# Laporan Praktikum Kriptografi
Minggu ke-: 3  
Topik: [modular_math]  
Nama: [Muhamad Iqbal Rasyad Izzaldin]  
NIM: [230202823]  
Kelas: [5IKRA]  

---

## 1. Tujuan
Tujuan dari praktikum ini adalah untuk memahami konsep dasar aritmetika modular, menghitung Greatest Common Divisor (GCD) menggunakan algoritma Euclidean, menentukan invers modular, serta memahami konsep logaritma diskrit sebagai dasar penerapan kriptografi modern.

---

## 2. Dasar Teori
Aritmetika modular adalah sistem operasi matematika yang bekerja berdasarkan sisa hasil pembagian suatu bilangan terhadap modulus tertentu. Konsep ini sangat penting dalam kriptografi karena operasi enkripsi dan dekripsi dilakukan dalam ruang bilangan terbatas untuk menjaga keamanan data.

Greatest Common Divisor (GCD) adalah bilangan terbesar yang dapat membagi dua bilangan tanpa sisa. Algoritma Euclidean digunakan untuk menghitung GCD secara efisien dan menjadi dasar dari Extended Euclidean Algorithm yang dapat digunakan untuk mencari invers modular.

Logaritma diskrit merupakan masalah matematika untuk mencari eksponen dari suatu bilangan dalam aritmetika modular. Masalah ini tergolong sulit untuk modulus besar, sehingga sering dimanfaatkan sebagai dasar keamanan pada sistem kriptografi kunci publik seperti Diffie–Hellman dan ElGamal.

---

## 3. Alat dan Bahan
- Python 3.11
- Visual Studio Code
- Git dan akun GitHub
- Sistem operasi Windows

---

## 4. Langkah Percobaan
Membuat folder praktikum/week3-modmath-gcd/src/.
Membuat file modular_math.py.
Menuliskan fungsi aritmetika modular, GCD, invers modular, dan logaritma diskrit.
Menjalankan program menggunakan perintah python modular_math.py.
Mengambil screenshot hasil eksekusi program.
Melakukan commit ke repositori GitHub.

---

## 5. Source Code
def mod_add(a, b, n): return (a + b) % n
def mod_sub(a, b, n): return (a - b) % n
def mod_mul(a, b, n): return (a * b) % n
def mod_exp(base, exp, n): return pow(base, exp, n)

def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def egcd(a, b):
    if a == 0:
        return b, 0, 1
    g, x1, y1 = egcd(b % a, a)
    return g, y1 - (b // a) * x1, x1

def modinv(a, n):
    g, x, _ = egcd(a, n)
    if g != 1:
        return None
    return x % n

def discrete_log(a, b, n):
    for x in range(n):
        if pow(a, x, n) == b:
            return x
    return None

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
1. Apa peran aritmetika modular dalam kriptografi modern?
Aritmetika modular digunakan sebagai dasar perhitungan enkripsi dan dekripsi karena memungkinkan operasi matematika dalam ruang terbatas yang aman dan sulit ditebak.

2. Mengapa invers modular penting dalam algoritma kunci publik (misalnya RSA)?
Invers modular digunakan dalam proses dekripsi untuk mengembalikan ciphertext menjadi plaintext, terutama pada perhitungan kunci privat.

3. Apa tantangan utama dalam menyelesaikan logaritma diskrit untuk modulus besar?
Tantangan utamanya adalah kompleksitas komputasi yang sangat tinggi sehingga membutuhkan waktu yang tidak realistis untuk diselesaikan secara brute force.
---

## 8. Kesimpulan
Praktikum ini memberikan pemahaman tentang pentingnya aritmetika modular dan GCD dalam kriptografi. Selain itu, logaritma diskrit terbukti menjadi masalah sulit yang berperan besar dalam keamanan sistem kriptografi modern.

---

## 9. Daftar Pustaka
Katz, J., & Lindell, Y. Introduction to Modern Cryptography.
Stallings, W. Cryptography and Network Security.

---

## 10. Commit Log
(Tuliskan bukti commit Git yang relevan.  
Contoh:
```
commit abc12345
Author: Muhamad Iqbal Rasyad Izzaldin <zxiqbal28@gmail.com>
Date:   2025-12-23

   week3-modmath-gcd: implementasi modular arithmetic, GCD, invers, dan logaritma diskrit
```
