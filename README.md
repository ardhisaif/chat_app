
<h1 align="center">chat_app</h1>

<p align="center">
  Aplikasi chat berbasis web yang dibangun menggunakan Ruby on Rails.
</p>

---


## Prasyarat

Pastikan Anda telah menginstal:

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) versi yang sesuai dengan aplikasi ini.
- [Ruby on Rails](https://guides.rubyonrails.org/getting_started.html#installing-rails) versi yang sesuai dengan aplikasi ini.
- [Bundler](https://bundler.io/) untuk mengelola gem dependencies.

## Langkah-langkah

1. **Clone Repository**

  Clone repository aplikasi ini ke komputer Anda:

  ```sh
  git clone https://github.com/username/repo-name.git
  ```

2. **Instal Dependencies**

  Instal semua gem dependencies yang diperlukan oleh aplikasi:

  ```sh
  bundle install
  ```

3. **Konfigurasi Database**

  Buat dan migrasikan database:

  ```sh
  rails db:create
  rails db:migrate
  ```

4. **Menjalankan Server**

  Jalankan server Rails:

  ```sh
  rails server
  ```

  Akses aplikasi di browser Anda melalui `http://localhost:3000`.

5. **Menjalankan Tes**

  Untuk memastikan semuanya berjalan dengan baik, jalankan tes:

  ```sh
  rails test
  ```

<br>
<br>

---

<br>

# Struktur Direktori di Rails

Aplikasi Rails memiliki struktur direktori yang terorganisir dengan baik. Berikut adalah penjelasan mengenai direktori-direktori utama dalam aplikasi Rails:

- **app/**: Berisi kode untuk model, view, dan controller aplikasi Anda. Direktori ini adalah tempat utama di mana logika aplikasi Anda berada.
  - **models/**: Menyimpan definisi model aplikasi Anda.
  - **views/**: Menyimpan template HTML yang digunakan oleh aplikasi Anda.
  - **controllers/**: Menyimpan controller yang mengatur alur aplikasi Anda.
  - **helpers/**: Menyimpan helper yang digunakan untuk mendukung view.
  - **assets/**: Menyimpan file CSS, JavaScript, dan gambar.

- **config/**: Menyimpan file konfigurasi aplikasi, termasuk routing dan pengaturan environment.
  - **routes.rb**: File ini mendefinisikan rute untuk aplikasi Anda.
  - **database.yml**: File konfigurasi untuk pengaturan database.
  - **environments/**: Menyimpan pengaturan environment untuk development, test, dan production.

- **db/**: Berisi skema dan migrasi database.
  - **migrate/**: Menyimpan file migrasi database.
  - **schema.rb**: Menyimpan skema database saat ini.

- **public/**: Menyimpan file statis seperti HTML, CSS, dan JavaScript yang dapat diakses langsung oleh pengguna.

- **test/**: Berisi file untuk pengujian unit.
  - **fixtures/**: Menyimpan data contoh untuk pengujian.
  - **models/**: Menyimpan pengujian untuk model.
  - **controllers/**: Menyimpan pengujian untuk controller.

- **lib/**: Menyimpan modul dan kelas yang digunakan di seluruh aplikasi Anda.
  - **tasks/**: Menyimpan tugas rake custom.

- **log/**: Menyimpan file log aplikasi Anda.

- **tmp/**: Menyimpan file sementara yang digunakan oleh aplikasi Anda.

- **vendor/**: Menyimpan kode dari pihak ketiga seperti plugin dan gem.


## Memahami MVC di Rails

Rails mengikuti pola arsitektur **MVC** (Model-View-Controller):

- **Model**: Mewakili data dan logika aplikasi. Model berinteraksi dengan database menggunakan Active Record.
- **View**: Mewakili antarmuka pengguna dan bertanggung jawab untuk merender halaman HTML. View biasanya ditulis menggunakan ERB (Embedded Ruby).
- **Controller**: Mengelola interaksi antara model dan view. Controller menangani input dari pengguna, melakukan logika bisnis, dan merender view yang sesuai.

### Contoh Alur Kerja

1. **Request**: Pengguna mengirimkan permintaan ke server.
2. **Router**: Router menentukan controller dan action yang sesuai untuk menangani permintaan.
3. **Controller**: Controller menerima permintaan dan berinteraksi dengan model jika diperlukan.
4. **Model (Database)**: Model mengambil atau memanipulasi data dari database.
5. **Controller (Pengolahan Data)**: Controller mengolah data yang diterima dari model.
6. **View (Rendering HTML)**: View merender halaman HTML menggunakan data yang disediakan oleh controller.
7. **Response**: Server mengirimkan respons kembali ke pengguna dalam bentuk halaman HTML.

### Diagram Alur Kerja

```plaintext
Request → Router → Controller → Model (Database) → Controller (Pengolahan Data) → View (Rendering HTML) → Response (Kembali ke Pengguna)
```
