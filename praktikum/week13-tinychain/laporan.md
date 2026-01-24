# Laporan Praktikum Kriptografi
Minggu ke-: 13  
Topik: TinyChain – Proof of Work (PoW)  
Nama: Muhamad Iqbal Rasyad Izzaldin
NIM: 230202823 
Kelas: 5IKRA

---

## 1. Tujuan
Tujuan dari praktikum ini adalah untuk memahami peran fungsi hash dalam teknologi blockchain, mengimplementasikan simulasi sederhana Proof of Work (PoW), serta menganalisis bagaimana mekanisme kriptografi digunakan untuk menjaga keamanan dan integritas data pada sistem cryptocurrency.

---

## 2. Dasar Teori
Blockchain merupakan struktur data terdistribusi yang terdiri dari rangkaian blok yang saling terhubung menggunakan hash kriptografi. Setiap blok berisi data transaksi, hash blok sebelumnya, timestamp, dan nonce. Fungsi hash, seperti SHA-256, digunakan untuk menghasilkan nilai hash unik yang sensitif terhadap perubahan data. Proof of Work (PoW) adalah mekanisme konsensus yang mengharuskan node (miner) menyelesaikan teka-teki komputasi dengan menemukan nilai nonce tertentu agar hash blok memenuhi tingkat kesulitan (difficulty) yang ditentukan. Proses ini membutuhkan waktu dan sumber daya komputasi. Dengan PoW, blockchain menjadi sulit dimanipulasi karena setiap perubahan data memerlukan perhitungan ulang seluruh blok berikutnya. Hal ini menjadikan blockchain aman terhadap serangan seperti pemalsuan data dan double spending.

---

## 3. Alat dan Bahan
- Python 3.11
- Visual Studio Code
- Git dan akun GitHub
- Library bawaan Python (hashlib, time)

---

## 4. Langkah Percobaan
- Membuat folder praktikum/week13-tinychain/src/.
- Membuat file tinychain.py.
- Menuliskan kode program blockchain sederhana dan Proof of Work sesuai panduan.
- Menjalankan program menggunakan perintah:
- python tinychain.py
- Mengamati proses mining blok dan hash yang dihasilkan.
- Mengambil screenshot hasil eksekusi program.

---

## 5. Source Code
import hashlib
import time

class Block:
    def __init__(self, index, previous_hash, data, timestamp=None):
        self.index = index
        self.timestamp = timestamp or time.time()
        self.data = data
        self.previous_hash = previous_hash
        self.nonce = 0
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        value = str(self.index) + str(self.timestamp) + str(self.data) + str(self.previous_hash) + str(self.nonce)
        return hashlib.sha256(value.encode()).hexdigest()

    def mine_block(self, difficulty):
        while self.hash[:difficulty] != "0" * difficulty:
            self.nonce += 1
            self.hash = self.calculate_hash()
        print(f"Block mined: {self.hash}")

class Blockchain:
    def __init__(self):
        self.chain = [self.create_genesis_block()]
        self.difficulty = 4

    def create_genesis_block(self):
        return Block(0, "0", "Genesis Block")

    def get_latest_block(self):
        return self.chain[-1]

    def add_block(self, new_block):
        new_block.previous_hash = self.get_latest_block().hash
        new_block.mine_block(self.difficulty)
        self.chain.append(new_block)

# Uji coba blockchain
my_chain = Blockchain()
print("Mining block 1...")
my_chain.add_block(Block(1, "", "Transaksi A → B: 10 Coin"))

print("Mining block 2...")
my_chain.add_block(Block(2, "", "Transaksi B → C: 5 Coin"))


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
1. Mengapa fungsi hash sangat penting dalam blockchain?
Fungsi hash menjamin integritas data karena perubahan sekecil apa pun pada data akan menghasilkan hash yang berbeda secara signifikan.

2. Bagaimana Proof of Work mencegah double spending?
PoW membuat perubahan transaksi menjadi sangat mahal secara komputasi sehingga pelaku tidak dapat dengan mudah memodifikasi blok yang sudah tervalidasi.

3. Apa kelemahan dari PoW dalam hal efisiensi energi?
PoW membutuhkan daya komputasi dan energi yang sangat besar sehingga kurang ramah lingkungan dan tidak efisien.

---

## 8. Kesimpulan
Dari praktikum ini dapat disimpulkan bahwa fungsi hash dan Proof of Work memiliki peran penting dalam menjaga keamanan blockchain. PoW mampu mencegah manipulasi data, namun memiliki kelemahan pada konsumsi energi yang tinggi.

---

## 9. Daftar Pustaka
Stinson, D. R. Cryptography: Theory and Practice, CRC Press, 2019.
Nakamoto, S. Bitcoin: A Peer-to-Peer Electronic Cash System, 2008.

---

## 10. Commit Log
(Tuliskan bukti commit Git yang relevan.  
Contoh:
```
commit abc12345
Author: Muhamad Iqbal Rasyad Izzaldin <zxiqbal28@gmail.com>
Date:   2026-01-24

    week13-tinychain: implementasi blockchain sederhana dengan Proof of Work
```
