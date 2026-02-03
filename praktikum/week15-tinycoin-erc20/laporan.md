# Laporan Praktikum Kriptografi
Minggu ke-: 15  
Topik: Implementasi Smart Contract ERC20 (TinyCoin)  
Nama: Muhamad Iqbal Rasyad Izzaldin
NIM: 230202823  
Kelas: 5IKRA  

---

## 1. Tujuan
Tujuan dari praktikum ini adalah untuk memahami konsep dasar pengembangan smart contract berbasis blockchain dengan standar ERC20. Mahasiswa diharapkan mampu mengimplementasikan smart contract token ERC20 menggunakan bahasa pemrograman Solidity, melakukan proses deployment pada jaringan Ethereum testnet, serta mendokumentasikan hasil implementasi dan pengujian ke dalam repository Git. Selain itu, praktikum ini bertujuan untuk melatih pemahaman dasar keamanan smart contract dalam sistem kriptografi modern.

---

## 2. Dasar Teori
Blockchain merupakan teknologi buku besar terdistribusi (distributed ledger) yang memungkinkan pencatatan transaksi secara transparan, aman, dan tidak dapat diubah (immutable). Salah satu platform blockchain yang paling populer adalah Ethereum, yang mendukung eksekusi smart contract, yaitu program yang berjalan secara otomatis di atas blockchain sesuai dengan aturan yang telah ditentukan.

ERC20 adalah standar token yang digunakan pada blockchain Ethereum untuk memastikan interoperabilitas antar token dan aplikasi terdesentralisasi (DApps). Standar ini mendefinisikan fungsi-fungsi utama seperti transfer, balanceOf, dan totalSupply, sehingga token yang dibuat dapat dengan mudah digunakan oleh wallet dan exchange yang mendukung ERC20.

Dalam konteks kriptografi, keamanan smart contract sangat bergantung pada penerapan algoritma kriptografi asimetris, hashing, serta mekanisme konsensus blockchain. Kesalahan implementasi pada smart contract dapat menyebabkan kerugian besar, sehingga diperlukan analisis keamanan meskipun kontrak yang dibuat bersifat sederhana.

---

## 3. Alat dan Bahan
- Solidity ^0.8.x
- Remix IDE
- OpenZeppelin ERC20 Library
- Akun Ethereum Testnet (Sepolia / Goerli)
- Git dan akun GitHub
- Web browser (Chrome / Firefox)

---

## 4. Langkah Percobaan
- Membuat struktur folder praktikum/week15-tinycoin-erc20/ sesuai dengan instruksi modul.
- Membuat file TinyCoin.sol pada folder contracts/
- Menuliskan kode smart contract ERC20 menggunakan library OpenZeppelin.
- Melakukan kompilasi smart contract melalui Remix IDE.
- Melakukan deployment kontrak ke jaringan Ethereum testnet.
- Mencatat alamat smart contract hasil deployment.
- Melakukan pengujian fungsi utama seperti balanceOf dan transfer.
- Mengambil screenshot hasil deployment dan transaksi token.
- Menyusun laporan praktikum dan melakukan commit ke repository GitHub.

---

## 5. Source Code
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TinyCoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("TinyCoin", "TNC") {
        _mint(msg.sender, initialSupply);
    }
}


---

## 6. Hasil dan Pembahasan
- Smart contract TinyCoin berhasil dikompilasi tanpa error.
- Kontrak berhasil di-deploy ke jaringan Ethereum testnet.
- Saldo awal pemilik kontrak sesuai dengan nilai initialSupply.
- Fungsi transfer berhasil memindahkan token ke alamat lain.
- Total supply token tetap konsisten setelah transaksi dilakukan. 

Hasil eksekusi program Caesar Cipher:

![Hasil Eksekusi](screenshots/output.png)
![Hasil Input](screenshots/input.png)
![Hasil Output](screenshots/output.png)
)

---

## 7. Jawaban Pertanyaan
1. Apa fungsi utama ERC20 dalam ekosistem blockchain?
ERC20 berfungsi sebagai standar teknis untuk pembuatan token pada blockchain Ethereum. Standar ini memastikan bahwa token dapat digunakan secara konsisten oleh berbagai wallet, exchange, dan aplikasi terdesentralisasi tanpa perlu penyesuaian khusus.

2. Bagaimana mekanisme transfer token bekerja dalam kontrak ERC20?
Mekanisme transfer token dilakukan melalui fungsi transfer(address, amount), yang akan mengurangi saldo pengirim dan menambah saldo penerima sesuai jumlah token yang dikirim. Setiap transfer akan dicatat sebagai transaksi di blockchain dan tidak dapat diubah.

3. Apa risiko utama dalam implementasi smart contract dan bagaimana cara mitigasinya?
Risiko utama meliputi reentrancy attack, integer overflow/underflow, serta kesalahan logika kontrak. Mitigasi dapat dilakukan dengan menggunakan library terpercaya seperti OpenZeppelin, menerapkan Solidity versi terbaru, melakukan audit kode, dan melakukan pengujian menyeluruh sebelum deployment.

---

## 8. Kesimpulan
Berdasarkan praktikum yang telah dilakukan, dapat disimpulkan bahwa smart contract ERC20 TinyCoin berhasil diimplementasikan dan diuji pada jaringan Ethereum testnet. Praktikum ini memberikan pemahaman dasar mengenai pengembangan token berbasis blockchain serta pentingnya aspek keamanan dalam smart contract.

---

## 9. Daftar Pustaka
- Stinson, D. R. (2019). Cryptography: Theory and Practice. CRC Press.
- OpenZeppelin Documentation.

---

## 10. Commit Log
(Tuliskan bukti commit Git yang relevan.  
Contoh:
```
commit abc12345
Author: Muhamad Iqbal Rasyad Izzaldin <zxiqbal28@gmail.com>
Date:   2026-02-03

    week15-tinycoin-erc20
```
