/* js/articles.js — Shared article data for news.html & article.html */
const ARTICLES = [
    {
        id: 1, featured: true,
        cat: 'cems', catLabel: 'Teknologi CEMS',
        title: 'Strategi Implementasi CEMS untuk Memenuhi Regulasi KLHK Terbaru 2025',
        excerpt: 'Kementerian Lingkungan Hidup dan Kehutanan (KLHK) memperketat regulasi pemantauan emisi cerobong industri. Berikut strategi terbaik implementasi CEMS yang efisien, akurat, dan sesuai standar PermenLHK No. 13 Tahun 2021 untuk industri energi, petrokimia, dan manufaktur di Indonesia.',
        author: 'Tim Fanka Solusi', avatar: 'FS', date: '2 Juni 2026', readTime: '6 menit', icon: 'fa-industry',
        content: `
            <p>Peraturan Menteri LHK No. 13 Tahun 2021 tentang <strong>Baku Mutu Emisi dari Kegiatan Industri Energi Termal</strong> mewajibkan setiap pembangkit listrik dan fasilitas industri tertentu untuk memasang Continuous Emission Monitoring System (CEMS) yang terkoneksi langsung dengan server KLHK melalui protokol SINASDOK.</p>

            <h3>Apa itu CEMS?</h3>
            <p>CEMS (Continuous Emission Monitoring System) adalah sistem pemantauan emisi gas buang dari cerobong industri secara terus-menerus dan real-time. Parameter yang dipantau mencakup:</p>
            <ul>
                <li><strong>SO₂</strong> — Sulfur Dioksida</li>
                <li><strong>NOₓ</strong> — Nitrogen Oksida</li>
                <li><strong>CO</strong> — Karbon Monoksida</li>
                <li><strong>PM (Debu)</strong> — Particulate Matter</li>
                <li><strong>O₂, Opacity, Flow Rate</strong> — Parameter pendukung</li>
            </ul>

            <h3>Regulasi Terbaru yang Perlu Diperhatikan</h3>
            <p>PermenLHK No. 13/2021 mengatur bahwa setiap fasilitas dengan kapasitas boiler di atas 25 MW wajib memasang CEMS yang memenuhi spesifikasi teknis dan terkoneksi dengan SINASDOK (Sistem Informasi Pelaporan Dokumen Lingkungan Hidup) milik KLHK. Batas waktu pemasangan telah ditetapkan, dan pelanggaran dapat berakibat pencabutan izin operasional.</p>

            <h3>Strategi Implementasi yang Efektif</h3>
            <p><strong>1. Assessment Awal (Site Survey)</strong><br>Sebelum memilih peralatan, lakukan site survey menyeluruh untuk memahami kondisi cerobong, jenis bahan bakar, temperatur gas, kadar moisture, dan konsentrasi estimasi parameter emisi. Hal ini menentukan teknologi analyzer yang paling cocok.</p>
            <p><strong>2. Pemilihan Teknologi yang Tepat</strong><br>Tersedia beberapa teknologi utama: FTIR (Fourier Transform Infrared) seperti Gasmet, Cross-Stack Absorption seperti OPSIS, dan Extractive In-situ. Setiap teknologi memiliki keunggulan spesifik tergantung kondisi operasional.</p>
            <p><strong>3. Instalasi dan Commissioning</strong><br>Proses instalasi harus memperhatikan lokasi sampling point yang sesuai ISO 10396, panjang probe, kondisi platform, dan aksesibilitas untuk maintenance. Commissioning mencakup zero/span calibration, leak test, dan performance verification.</p>
            <p><strong>4. Koneksi ke SINASDOK</strong><br>Data dari CEMS harus dikirimkan ke server KLHK setiap 15 menit dengan format data terstandarisasi. Sistem DAS (Data Acquisition System) yang handal menjadi kunci keberhasilan koneksi ini.</p>
            <p><strong>5. Program QA/QC Berkelanjutan</strong><br>CEMS memerlukan program quality assurance yang mencakup kalibrasi rutin (harian, mingguan, bulanan), audit RATA minimal sekali setahun, dan maintenance preventif terjadwal.</p>

            <h3>Pengalaman Fanka Solusi Indonesia</h3>
            <p>Dengan pengalaman lebih dari 5 tahun dan 47+ proyek CEMS yang berhasil diselesaikan di seluruh Indonesia — mulai dari PLTU Kalimantan hingga fasilitas petrokimia di Jawa Timur — tim Fanka Solusi siap membantu Anda merencanakan, menginstalasi, dan memelihara sistem CEMS yang sesuai regulasi.</p>
            <p>Hubungi tim kami untuk konsultasi gratis dan site assessment tanpa biaya.</p>
        `
    },
    {
        id: 2, featured: false,
        cat: 'proyek', catLabel: 'Proyek & Update',
        title: 'Proyek Selesai: Audit CEMS di PLTU Cirebon Power 660 MW',
        excerpt: 'Tim Quanta Proust Indonesia berhasil menyelesaikan audit RCA dan RATA di PLTU Cirebon Power dengan hasil compliance rate 100%.',
        author: 'Quanta Proust Team', avatar: 'QP', date: '28 Mei 2026', readTime: '4 menit', icon: 'fa-hard-hat',
        content: `
            <p>Tim <strong>Quanta Proust Indonesia</strong> — divisi laboratorium dan audit CEMS dari PT. Fanka Solusi Indonesia — berhasil menyelesaikan proyek audit komprehensif di <strong>PLTU Cirebon Power Unit 2 (660 MW)</strong> yang berlokasi di Kabupaten Cirebon, Jawa Barat.</p>

            <h3>Lingkup Pekerjaan</h3>
            <p>Proyek ini mencakup dua jenis audit utama yang dipersyaratkan oleh KLHK:</p>
            <ul>
                <li><strong>RCA (Reference Calibration Audit)</strong> — Verifikasi akurasi kalibrasi analyzer menggunakan gas referensi bersertifikat BMKG</li>
                <li><strong>RATA (Relative Accuracy Test Audit)</strong> — Pengujian akurasi relatif CEMS terhadap metode referensi manual (RM 3, RM 6, RM 7)</li>
            </ul>

            <h3>Detail Pelaksanaan</h3>
            <p>Audit berlangsung selama <strong>5 hari kerja</strong> (20–24 Mei 2026) dengan melibatkan 6 orang tenaga ahli bersertifikat. Pemantauan dilakukan pada 2 titik cerobong utama dengan parameter:</p>
            <ul>
                <li>SO₂ — Hasil: 48.3 mg/Nm³ (Baku Mutu: 750 mg/Nm³) ✅</li>
                <li>NOₓ — Hasil: 127.6 mg/Nm³ (Baku Mutu: 750 mg/Nm³) ✅</li>
                <li>CO — Hasil: 89.2 mg/Nm³ (Baku Mutu: 500 mg/Nm³) ✅</li>
                <li>Debu (PM) — Hasil: 18.7 mg/Nm³ (Baku Mutu: 100 mg/Nm³) ✅</li>
                <li>Opacity — Hasil: 4.2% (Baku Mutu: 20%) ✅</li>
            </ul>

            <h3>Hasil Audit</h3>
            <p>Seluruh parameter menunjukkan nilai yang jauh di bawah baku mutu emisi yang ditetapkan. Sistem CEMS yang terpasang (OPSIS AR 602 + Durag D-R 820) bekerja dengan akurasi tinggi dengan Relative Accuracy (RA) di bawah 5% untuk semua parameter — memenuhi persyaratan KLHK yang mewajibkan RA ≤ 20%.</p>
            <p><strong>Compliance rate: 100%</strong>. Laporan resmi telah diserahkan kepada pihak Cirebon Power dan KLHK melalui sistem SINASDOK.</p>

            <h3>Apresiasi Klien</h3>
            <p>"Tim Fanka Solusi sangat profesional dan hasil auditnya komprehensif. Kami puas dengan pelayanan dan kecepatan penyelesaian laporan." — <em>Environmental Manager, Cirebon Power</em></p>
        `
    },
    {
        id: 3, featured: false,
        cat: 'lingk', catLabel: 'Lingkungan',
        title: 'Manfaat Monitoring Emisi Kontinu untuk Industri Pengeringan dan Pengolahan',
        excerpt: 'Proses pengeringan dalam skala industri merupakan salah satu aktivitas yang paling mengonsumsi energi sekaligus menghasilkan emisi signifikan.',
        author: 'Dian Komalasari', avatar: 'DK', date: '25 Mei 2026', readTime: '5 menit', icon: 'fa-leaf',
        content: `
            <p>Industri pengeringan dan pengolahan — mencakup industri pangan, kayu, tekstil, dan kimia — kerap luput dari perhatian dalam konteks monitoring emisi. Padahal, proses pengeringan berbasis pembakaran bahan bakar menghasilkan emisi gas buang yang perlu dipantau sesuai regulasi lingkungan.</p>

            <h3>Mengapa Monitoring Emisi Penting untuk Industri Pengeringan?</h3>
            <p>Dryer atau pengering industri yang menggunakan gas alam, diesel, atau biomassa sebagai sumber panas menghasilkan emisi CO, NOₓ, SO₂, dan partikulat. Tanpa monitoring yang tepat, sulit untuk:</p>
            <ul>
                <li>Memastikan kepatuhan terhadap baku mutu emisi</li>
                <li>Mengidentifikasi ineffisiensi pembakaran yang membuang bahan bakar</li>
                <li>Mendeteksi anomali operasional secara dini</li>
                <li>Menyiapkan laporan lingkungan yang akurat</li>
            </ul>

            <h3>Studi Kasus: Efisiensi Energi melalui Monitoring</h3>
            <p>Dalam proyek yang kami tangani di salah satu pabrik pengolahan kayu di Kalimantan, pemasangan CEMS pada rotary dryer berkapasitas 50 ton/jam mengungkap nilai CO yang secara konsisten tinggi di pagi hari. Setelah investigasi, ditemukan bahwa sistem pre-heat burner tidak berfungsi optimal saat cold-start.</p>
            <p>Perbaikan sederhana pada sistem ignition menghasilkan penghematan bahan bakar <strong>sebesar 8% per bulan</strong> — setara dengan penghematan lebih dari Rp 40 juta per bulan. Investasi CEMS terbayar dalam kurang dari 6 bulan.</p>

            <h3>Rekomendasi Parameter Monitoring</h3>
            <p>Untuk industri pengeringan, parameter minimum yang disarankan adalah:</p>
            <ul>
                <li>CO dan CO₂ — indikator efisiensi pembakaran</li>
                <li>O₂ excess — kualitas campuran udara-bahan bakar</li>
                <li>Temperatur gas buang — efisiensi termal keseluruhan</li>
                <li>PM (debu) — jika menggunakan biomassa atau bahan bakar padat</li>
            </ul>

            <h3>Regulasi yang Berlaku</h3>
            <p>PermenLHK No. P.15/2019 tentang Baku Mutu Emisi Kegiatan Industri mengatur nilai ambang batas emisi untuk berbagai jenis kegiatan industri, termasuk industri pengolahan kayu, tekstil, dan pangan. Konsultasikan dengan tim kami untuk memahami kewajiban spesifik industri Anda.</p>
        `
    },
    {
        id: 4, featured: false,
        cat: 'cems', catLabel: 'Teknologi CEMS',
        title: 'Solusi CEMS untuk Meningkatkan Visibilitas Emisi Antar Fasilitas',
        excerpt: 'Mengelola satu lokasi industri sudah merupakan tantangan besar, apalagi jika perusahaan harus mengawasi kepatuhan lingkungan di banyak fasilitas sekaligus.',
        author: 'Rizky Wiratama', avatar: 'RW', date: '20 Mei 2026', readTime: '5 menit', icon: 'fa-chart-line',
        content: `
            <p>Perusahaan dengan fasilitas produksi di berbagai lokasi menghadapi tantangan unik dalam manajemen kepatuhan lingkungan. Bagaimana memastikan semua cerobong di pabrik Sumatera, Kalimantan, dan Sulawesi terpantau secara konsisten dan terpusat?</p>

            <h3>Tantangan Multi-Site Monitoring</h3>
            <p>Dari pengalaman kami menangani klien seperti PLN Group dan Pupuk Indonesia, tantangan utama monitoring multi-fasilitas meliputi:</p>
            <ul>
                <li>Data emisi tersebar di berbagai sistem yang tidak terintegrasi</li>
                <li>Sulit mendeteksi anomali di satu lokasi tanpa tim lokal yang sigap</li>
                <li>Pelaporan ke KLHK memerlukan konsolidasi data manual yang memakan waktu</li>
                <li>Standar kalibrasi dan QA/QC yang tidak konsisten antar lokasi</li>
            </ul>

            <h3>Solusi: Platform Monitoring Terpusat Berbasis Cloud</h3>
            <p>Fanka Solusi Indonesia mengembangkan solusi DAS (Data Acquisition System) berbasis cloud yang memungkinkan monitoring terpusat dari seluruh fasilitas dalam satu dashboard.</p>
            <p><strong>Fitur utama platform ini:</strong></p>
            <ul>
                <li>Dashboard real-time dengan peta lokasi interaktif</li>
                <li>Alert otomatis via SMS/email saat nilai melebihi threshold</li>
                <li>Laporan otomatis format KLHK/SINASDOK</li>
                <li>Trending analysis dan prediksi maintenance</li>
                <li>Akses multi-user dengan role-based access control</li>
            </ul>

            <h3>Implementasi di PLN Nusantara Power</h3>
            <p>Sistem ini berhasil diimplementasikan untuk memantau 12 PLTU di bawah naungan PLN Nusantara Power. Hasilnya, waktu respons terhadap anomali emisi berkurang dari rata-rata 4 jam menjadi kurang dari 15 menit, dan kepatuhan pelaporan SINASDOK meningkat menjadi 99.7%.</p>

            <h3>Mulai dari Mana?</h3>
            <p>Langkah pertama adalah melakukan audit kondisi CEMS eksisting di setiap fasilitas, kemudian merancang arsitektur konektivitas dan platform yang sesuai. Tim IT dan engineering Fanka Solusi siap mendampingi dari tahap perencanaan hingga go-live.</p>
        `
    },
    {
        id: 5, featured: false,
        cat: 'it', catLabel: 'IT & Sistem',
        title: 'Pengembangan DAS (Data Acquisition System) untuk Integrasi Multi-Sensor CEMS',
        excerpt: 'Sistem akuisisi data yang handal adalah tulang punggung operasional CEMS. Tim IT Fanka Solusi mengembangkan solusi DAS berbasis open-protocol.',
        author: 'Andri Julyardhani', avatar: 'AJ', date: '15 Mei 2026', readTime: '7 menit', icon: 'fa-server',
        content: `
            <p>Di balik setiap sistem CEMS yang beroperasi dengan baik, terdapat komponen yang sering terlupakan namun krusial: <strong>Data Acquisition System (DAS)</strong>. DAS adalah otak dari keseluruhan sistem — ia mengumpulkan, memvalidasi, menyimpan, dan mengirimkan data dari semua sensor ke berbagai tujuan secara simultan.</p>

            <h3>Tantangan DAS di Lingkungan Industri</h3>
            <p>DAS untuk CEMS berbeda dengan sistem data industri pada umumnya karena:</p>
            <ul>
                <li>Harus berjalan 24/7 dengan uptime sangat tinggi (>99.5%)</li>
                <li>Menangani berbagai protokol komunikasi: Modbus RTU, Modbus TCP, OPC-UA, PROFIBUS, 4-20mA analog</li>
                <li>Mengintegrasikan analyzer dari berbagai merek yang berbeda-beda</li>
                <li>Harus memenuhi format data SINASDOK secara ketat</li>
                <li>Beroperasi di lingkungan industri dengan suhu, getaran, dan EMI tinggi</li>
            </ul>

            <h3>Arsitektur DAS yang Kami Kembangkan</h3>
            <p>Tim IT Fanka Solusi mengembangkan platform DAS berbasis <strong>Industrial PC (IPC)</strong> dengan arsitektur berlapis:</p>
            <p><strong>Layer 1 — Field Interface:</strong> Koneksi fisik ke analyzer dan sensor melalui berbagai protokol. Gateway konverter protocol digunakan untuk standarisasi komunikasi ke Modbus TCP.</p>
            <p><strong>Layer 2 — Data Engine:</strong> Software akuisisi data berbasis Python yang berjalan di atas Linux Debian, dilengkapi watchdog, auto-restart, dan logging komprehensif.</p>
            <p><strong>Layer 3 — Storage & Validation:</strong> Database SQLite lokal untuk buffer, dengan validasi data otomatis (range check, spike detection, QA flag).</p>
            <p><strong>Layer 4 — Transmission:</strong> Pengiriman data ke SINASDOK setiap 15 menit via HTTPS dengan enkripsi, plus backup ke cloud storage dan server pelanggan.</p>

            <h3>Keunggulan Dibanding DAS Konvensional</h3>
            <ul>
                <li>Open-source base = biaya lisensi nol</li>
                <li>Mudah dikustomisasi untuk kebutuhan spesifik</li>
                <li>Remote access dan update via VPN</li>
                <li>Alert real-time ke operator jika ada data gap atau anomali</li>
            </ul>

            <h3>Implementasi Nyata</h3>
            <p>DAS ini telah berhasil diimplementasikan di lebih dari 15 lokasi industri dengan total 60+ titik sensor terhubung. Rata-rata uptime mencapai 99.8% selama 12 bulan operasional.</p>
        `
    },
    {
        id: 6, featured: false,
        cat: 'proyek', catLabel: 'Proyek & Update',
        title: 'Update Proyek: Commissioning CEMS di PT Pupuk Kaltim Bontang',
        excerpt: 'Proses commissioning dan performance test sistem CEMS di kompleks pabrik pupuk terbesar di Indonesia berjalan sesuai jadwal.',
        author: 'Faisal Andriansyah', avatar: 'FA', date: '10 Mei 2026', readTime: '4 menit', icon: 'fa-flask',
        content: `
            <p>Proyek instalasi dan commissioning sistem CEMS di <strong>PT Pupuk Kaltim Bontang</strong> — pabrik urea dan amoniak terbesar di Indonesia — memasuki tahap akhir dengan hasil yang memuaskan.</p>

            <h3>Latar Belakang Proyek</h3>
            <p>PT Pupuk Kaltim memiliki 8 cerobong emisi utama dari berbagai unit produksi: reformer, boiler, incinerator, dan flare. Seiring dengan persyaratan KLHK dan komitmen perusahaan terhadap sustainability, diputuskan untuk memasang sistem CEMS komprehensif yang terintegrasi dengan platform monitoring terpusat mereka.</p>

            <h3>Spesifikasi Teknis yang Dipasang</h3>
            <ul>
                <li><strong>Analyzer:</strong> Gasmet DX4000 (FTIR) — 8 unit untuk pengukuran multi-komponen</li>
                <li><strong>Dust Monitor:</strong> Dr. Födisch FW 100 — 8 unit</li>
                <li><strong>Flow Meter:</strong> SICK FLOWSIC100 Flare — 8 unit</li>
                <li><strong>DAS:</strong> Platform custom Fanka Solusi (Linux-based IPC)</li>
                <li><strong>Koneksi:</strong> Fiber optic intra-plant + SINASDOK via dedicated internet</li>
            </ul>

            <h3>Progress Commissioning</h3>
            <p>Dari 8 titik cerobong, sebanyak <strong>6 titik (75%) telah selesai</strong> dikalibrasi dan dinyatakan dalam kondisi operasional. Dua titik remaining saat ini dalam proses final adjustment karena kondisi proses yang tidak stabil selama periode commissioning.</p>
            <p>Performance test awal menunjukkan akurasi yang sangat baik dengan deviasi terhadap metode referensi manual kurang dari 3% untuk semua parameter yang diuji.</p>

            <h3>Target Penyelesaian</h3>
            <p>Keseluruhan proyek ditargetkan selesai pada <strong>akhir Juni 2026</strong>, mencakup commissioning 2 titik terakhir, pelatihan operator Pupuk Kaltim, finalisasi dokumentasi teknis, dan handover resmi sistem.</p>

            <h3>Testimoni</h3>
            <p>"Fanka Solusi menunjukkan kompetensi teknis yang sangat baik. Tim mereka responsif dan selalu siap memberikan solusi saat ada tantangan di lapangan." — <em>Kepala Departemen K3 & Lingkungan, PT Pupuk Kaltim</em></p>
        `
    },
    {
        id: 7, featured: false,
        cat: 'lingk', catLabel: 'Lingkungan',
        title: 'Regulasi PROPER 2026: Apa yang Berubah untuk Industri Pertambangan?',
        excerpt: 'Program Penilaian Peringkat Kinerja Perusahaan (PROPER) 2026 membawa sejumlah perubahan signifikan pada kriteria penilaian emisi udara.',
        author: 'Idzny Qur\'any', avatar: 'IQ', date: '5 Mei 2026', readTime: '6 menit', icon: 'fa-balance-scale',
        content: `
            <p><strong>PROPER</strong> (Program Penilaian Peringkat Kinerja Perusahaan dalam Pengelolaan Lingkungan Hidup) adalah instrumen kebijakan KLHK yang menilai kinerja lingkungan perusahaan dengan sistem peringkat dari HITAM hingga EMAS. Untuk siklus 2026, terdapat beberapa perubahan signifikan yang berdampak langsung pada industri pertambangan.</p>

            <h3>Perubahan Utama PROPER 2026</h3>
            <p><strong>1. Kewajiban CEMS untuk Tambang Skala Menengah</strong><br>Sebelumnya hanya wajib untuk kapasitas boiler >25 MW, kini berlaku juga untuk fasilitas pengolahan mineral (smelter) dengan kapasitas produksi >5.000 ton/tahun. Ini berdampak langsung pada operasi RKEF nikel, smelter tembaga, dan fasilitas pemurnian mineral lainnya.</p>

            <p><strong>2. Penambahan Parameter CO₂ dan GRK</strong><br>PROPER 2026 mulai mengintegrasikan pelaporan Gas Rumah Kaca (GRK) sebagai bagian dari kriteria penilaian. Perusahaan yang memiliki sistem monitoring CO₂ dan GRK yang komprehensif akan mendapat nilai tambah signifikan.</p>

            <p><strong>3. Verifikasi Lapangan yang Lebih Ketat</strong><br>Tim verifikator KLHK akan melakukan site visit yang lebih mendalam, termasuk shadow test pada sistem CEMS untuk memvalidasi keakuratan data yang dilaporkan ke SINASDOK.</p>

            <p><strong>4. Kriteria Beyond Compliance Diperluas</strong><br>Untuk meraih peringkat HIJAU dan EMAS, perusahaan kini harus menunjukkan program inovasi lingkungan yang terukur, bukan hanya memenuhi baku mutu.</p>

            <h3>Dampak pada Perusahaan Pertambangan</h3>
            <p>Perusahaan nikel seperti RKEF Harita Group, Merdeka Tsingshan, dan Virtue Dragon Nickel Industry yang telah menjadi klien Fanka Solusi sudah bersiap menghadapi perubahan ini. Kami telah membantu mereka melakukan gap analysis dan roadmap implementasi CEMS sesuai persyaratan PROPER 2026.</p>

            <h3>Langkah Persiapan yang Disarankan</h3>
            <ul>
                <li>Lakukan gap analysis kondisi CEMS eksisting vs persyaratan baru</li>
                <li>Segera pasang CEMS jika belum ada (masa transisi sampai Desember 2026)</li>
                <li>Lakukan audit RATA untuk memvalidasi akurasi sistem CEMS yang sudah ada</li>
                <li>Siapkan dokumentasi program pengelolaan emisi dan GRK</li>
            </ul>
        `
    },
    {
        id: 8, featured: false,
        cat: 'cems', catLabel: 'Teknologi CEMS',
        title: 'Perbandingan Analyzer: Gasmet FTIR vs OPSIS Cross-Stack untuk Monitoring SO₂',
        excerpt: 'Memilih analyzer yang tepat untuk aplikasi spesifik sangat menentukan akurasi data dan biaya maintenance jangka panjang.',
        author: 'Kartino', avatar: 'KT', date: '28 Apr 2026', readTime: '8 menit', icon: 'fa-microscope',
        content: `
            <p>Dua teknologi yang paling banyak digunakan untuk monitoring SO₂ di Indonesia adalah <strong>Gasmet FTIR (Fourier Transform Infrared)</strong> dan <strong>OPSIS Cross-Stack (UV-DOAS)</strong>. Masing-masing memiliki kelebihan dan keterbatasan yang perlu dipahami sebelum memilih untuk aplikasi spesifik Anda.</p>

            <h3>Prinsip Kerja</h3>
            <p><strong>Gasmet FTIR (Extractive):</strong> Gas sampel diambil dari cerobong melalui heated probe, dikondisikan, lalu dianalisis menggunakan teknologi inframerah. FTIR mampu mengukur hingga puluhan komponen gas secara simultan dalam satu pengukuran.</p>
            <p><strong>OPSIS UV-DOAS (In-situ/Cross-Stack):</strong> Menggunakan sinar UV yang ditembakkan lintas cerobong (cross-stack) untuk mengukur absorpsi gas secara langsung tanpa pengambilan sampel. Prinsip non-extractive ini menghilangkan risiko kontaminasi dan kondensasi.</p>

            <h3>Perbandingan Parameter Utama</h3>
            <table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:0.85rem;">
                <thead><tr style="background:var(--primary);color:#fff;"><th style="padding:10px 14px;text-align:left;">Parameter</th><th style="padding:10px 14px;">Gasmet FTIR</th><th style="padding:10px 14px;">OPSIS UV-DOAS</th></tr></thead>
                <tbody>
                    <tr style="background:#f8f9fa;"><td style="padding:9px 14px;">Prinsip</td><td style="padding:9px 14px;text-align:center;">Extractive</td><td style="padding:9px 14px;text-align:center;">In-situ</td></tr>
                    <tr><td style="padding:9px 14px;">Multi-komponen</td><td style="padding:9px 14px;text-align:center;">Ya (50+ gas)</td><td style="padding:9px 14px;text-align:center;">Terbatas (4-6 gas)</td></tr>
                    <tr style="background:#f8f9fa;"><td style="padding:9px 14px;">Maintenance</td><td style="padding:9px 14px;text-align:center;">Lebih intensif</td><td style="padding:9px 14px;text-align:center;">Minimal</td></tr>
                    <tr><td style="padding:9px 14px;">Cocok untuk debu tinggi</td><td style="padding:9px 14px;text-align:center;">Perlu filter ekstra</td><td style="padding:9px 14px;text-align:center;">✅ Sangat baik</td></tr>
                    <tr style="background:#f8f9fa;"><td style="padding:9px 14px;">Biaya investasi</td><td style="padding:9px 14px;text-align:center;">Lebih tinggi</td><td style="padding:9px 14px;text-align:center;">Lebih rendah</td></tr>
                </tbody>
            </table>

            <h3>Rekomendasi Penggunaan</h3>
            <p><strong>Pilih Gasmet FTIR jika:</strong> Anda perlu mengukur banyak komponen gas (termasuk HF, HCl, NH₃, dll.), kondisi gas relatif bersih, dan budget untuk maintenance tersedia.</p>
            <p><strong>Pilih OPSIS UV-DOAS jika:</strong> Kandungan debu (PM) cerobong tinggi, ingin meminimalkan downtime akibat maintenance, atau berfokus pada parameter standar (SO₂, NOₓ, CO, O₂).</p>

            <h3>Pengalaman Lapangan Kami</h3>
            <p>Di PLTU batu bara dengan kadar abu tinggi, OPSIS Cross-Stack terbukti lebih handal dengan uptime >99%. Sementara di industri kimia dan pupuk dengan banyak komponen gas spesifik, Gasmet FTIR memberikan informasi yang jauh lebih kaya. Konsultasikan kebutuhan spesifik Anda dengan tim engineer kami.</p>
        `
    },
    {
        id: 9, featured: false,
        cat: 'umum', catLabel: 'Umum',
        title: 'Fanka Solusi Indonesia Raih Kepercayaan 30+ Klien dalam 5 Tahun Beroperasi',
        excerpt: 'Memasuki tahun ke-5, PT. Fanka Solusi Indonesia terus berkembang dengan portfolio lebih dari 47 proyek yang telah diselesaikan.',
        author: 'Muhammad Fitrah', avatar: 'MF', date: '20 Apr 2026', readTime: '3 menit', icon: 'fa-trophy',
        content: `
            <p>Lima tahun bukan waktu yang singkat untuk sebuah perusahaan engineering. Sejak didirikan pada tahun 2020 di Bekasi, Jawa Barat, <strong>PT. Fanka Solusi Indonesia</strong> telah melewati berbagai tantangan dan tumbuh menjadi salah satu penyedia jasa CEMS dan engineering lingkungan terpercaya di Indonesia.</p>

            <h3>Perjalanan 5 Tahun</h3>
            <p>Berikut adalah milestone penting perjalanan Fanka Solusi Indonesia:</p>
            <ul>
                <li><strong>2020:</strong> Perusahaan didirikan, fokus pada services & maintenance CEMS di wilayah Jawa Barat</li>
                <li><strong>2021:</strong> Ekspansi ke Kalimantan, proyek perdana di PLTU Kalimantan Selatan</li>
                <li><strong>2022:</strong> Pembentukan divisi IT untuk pengembangan DAS custom; total 15 proyek selesai</li>
                <li><strong>2023:</strong> Masuk ke proyek mining di Sulawesi dan Papua (Freeport); 30 proyek selesai</li>
                <li><strong>2024:</strong> Meluncurkan Quanta Proust Indonesia (divisi lab & audit) dan Fankacy (divisi digital)</li>
                <li><strong>2025–2026:</strong> 47+ proyek, 30+ klien, jangkauan 15+ kota di seluruh Indonesia</li>
            </ul>

            <h3>Klien-Klien Terkemuka</h3>
            <p>Kepercayaan yang kami terima dari klien-klien terkemuka menjadi kebanggaan sekaligus tanggung jawab besar. Di antara klien kami: PLN Group (PLN, Indonesia Power, PLN Nusantara Power), Pertamina Hulu Rokan, Pupuk Indonesia Group, PT Freeport Indonesia, Badak LNG, Cirebon Power, DSSP Power, dan banyak lagi.</p>

            <h3>Pesan dari Direktur</h3>
            <p><em>"Lima tahun ini adalah perjalanan yang penuh pembelajaran. Kami sangat bersyukur atas kepercayaan klien-klien kami yang luar biasa. Ke depan, kami berkomitmen untuk terus meningkatkan kompetensi dan memberikan solusi engineering terbaik untuk industri Indonesia. All Services, One Goal."</em></p>
            <p>— <strong>Muhammad Fitrah, Direktur PT. Fanka Solusi Indonesia</strong></p>
        `
    },
    {
        id: 10, featured: false,
        cat: 'it', catLabel: 'IT & Sistem',
        title: 'Implementasi IoT untuk Remote Monitoring CEMS di Lokasi Terpencil',
        excerpt: 'Tantangan monitoring emisi di daerah terpencil — mulai dari keterbatasan jaringan hingga kondisi cuaca ekstrem — dapat diatasi dengan solusi IoT yang tepat.',
        author: 'Gilang Ramdani', avatar: 'GR', date: '12 Apr 2026', readTime: '6 menit', icon: 'fa-wifi',
        content: `
            <p>Industri pertambangan dan energi di Indonesia seringkali berlokasi di daerah yang jauh dari infrastruktur perkotaan — tengah hutan Kalimantan, pegunungan Papua, atau kepulauan terpencil di Sulawesi. Monitoring CEMS di lokasi seperti ini memerlukan pendekatan khusus yang berbeda dari instalasi industri konvensional.</p>

            <h3>Tantangan Utama Remote CEMS</h3>
            <ul>
                <li><strong>Konektivitas terbatas:</strong> Sinyal seluler lemah atau tidak stabil; fiber optic tidak tersedia</li>
                <li><strong>Ketergantungan listrik:</strong> Pemadaman sering terjadi; tidak ada UPS industrial</li>
                <li><strong>Suhu dan kelembaban ekstrem:</strong> Enclosure dan perangkat harus IP65+</li>
                <li><strong>Keterbatasan teknisi lokal:</strong> Tidak ada SDM yang bisa menangani jika terjadi masalah</li>
                <li><strong>Biaya kunjungan lapangan tinggi:</strong> Mobilisasi ke lokasi terpencil sangat mahal</li>
            </ul>

            <h3>Solusi IoT yang Kami Kembangkan</h3>
            <p><strong>1. Multi-Path Connectivity:</strong> Sistem menggunakan koneksi berlapis — prioritas utama fiber/VSAT, failover ke 4G LTE industrial router, dengan fallback ke store-and-forward via SD card jika semua koneksi putus.</p>
            <p><strong>2. Edge Computing:</strong> DAS kami dilengkapi kemampuan edge computing yang mampu menyimpan data lokal hingga 30 hari, memvalidasi dan memproses data secara lokal, dan mengirim ringkasan analitik (bukan raw data) untuk menghemat bandwidth.</p>
            <p><strong>3. Remote Troubleshooting:</strong> Setiap instalasi dilengkapi industrial 4G router dengan kemampuan VPN. Teknisi kami dapat mengakses dan troubleshoot sistem dari Jakarta tanpa harus ke lokasi.</p>
            <p><strong>4. Self-Healing System:</strong> Watchdog timer, automatic restart, dan self-diagnostic memastikan sistem kembali beroperasi sendiri setelah gangguan tanpa intervensi manusia.</p>

            <h3>Implementasi di PT Freeport Indonesia</h3>
            <p>Solusi ini berhasil diimplementasikan untuk monitoring 3 cerobong di area operasional Freeport di Papua yang kondisi geografisnya sangat menantang. Uptime sistem mencapai 98.9% selama 12 bulan pertama operasional — jauh melampaui target 95% yang ditetapkan.</p>
        `
    },
    {
        id: 11, featured: false,
        cat: 'proyek', catLabel: 'Proyek & Update',
        title: 'Proyek Selesai: Instalasi AQMS di Kawasan Industri Morowali',
        excerpt: 'Sistem pemantauan kualitas udara ambien (AQMS) berhasil diinstalasi dan dikalibrasi di kawasan nikel Morowali.',
        author: 'Tim Fanka Solusi', avatar: 'FS', date: '5 Apr 2026', readTime: '4 menit', icon: 'fa-wind',
        content: `
            <p>Proyek instalasi <strong>Air Quality Monitoring System (AQMS)</strong> di kawasan industri nikel Morowali, Sulawesi Tengah telah berhasil diselesaikan dan diserahterimakan kepada klien pada 3 April 2026.</p>

            <h3>Tentang Proyek</h3>
            <p>Kawasan industri Morowali merupakan salah satu kawasan industri nikel terbesar dan terpenting di Indonesia, dengan total luas lebih dari 2.000 hektar dan puluhan fasilitas produksi aktif. Kualitas udara ambien di sekitar kawasan perlu dipantau secara komprehensif untuk memenuhi persyaratan AMDAL dan standar kesehatan lingkungan.</p>

            <h3>Spesifikasi Sistem yang Dipasang</h3>
            <p>AQMS yang dipasang terdiri dari <strong>3 stasiun monitoring</strong> yang ditempatkan strategis di sekitar kawasan (utara, selatan, dan barat kawasan industri). Setiap stasiun mengukur 10 parameter kualitas udara:</p>
            <ul>
                <li>PM₂.₅ dan PM₁₀ (partikulat halus dan kasar)</li>
                <li>SO₂, NO₂, CO, O₃ (gas pencemar utama)</li>
                <li>H₂S (hidrogen sulfida)</li>
                <li>Temperatur, kelembaban, kecepatan dan arah angin</li>
            </ul>

            <h3>Integrasi dengan Sistem Nasional</h3>
            <p>Data dari ketiga stasiun AQMS terintegrasi secara real-time dengan:</p>
            <ul>
                <li>ISPU (Indeks Standar Pencemar Udara) KLHK — via SINASDOK</li>
                <li>Dashboard internal manajemen kawasan industri</li>
                <li>Sistem alert otomatis ke HSE Officer jika ada parameter yang melewati batas</li>
            </ul>

            <h3>Dampak Positif</h3>
            <p>Dengan sistem AQMS ini, manajemen kawasan kini memiliki data baseline kualitas udara yang komprehensif untuk evaluasi dampak lingkungan, komunikasi dengan masyarakat sekitar, dan pemenuhan persyaratan PROPER serta AMDAL.</p>
        `
    },
    {
        id: 12, featured: false,
        cat: 'lingk', catLabel: 'Lingkungan',
        title: 'Noise Monitoring: Standar dan Prosedur Pengukuran Kebisingan Industri',
        excerpt: 'Pemantauan kebisingan lingkungan merupakan bagian dari persyaratan AMDAL dan izin lingkungan di sekitar kawasan industri.',
        author: 'Jessica A', avatar: 'JA', date: '28 Mar 2026', readTime: '5 menit', icon: 'fa-volume-up',
        content: `
            <p>Kebisingan industri (industrial noise) seringkali menjadi sumber konflik antara kawasan industri dengan masyarakat sekitarnya. Regulasi lingkungan Indonesia mewajibkan pengukuran dan pengelolaan kebisingan sebagai bagian dari dokumen AMDAL dan Upaya Pengelolaan Lingkungan (UKL-UPL).</p>

            <h3>Dasar Hukum</h3>
            <p>Regulasi utama yang mengatur baku mutu kebisingan di Indonesia:</p>
            <ul>
                <li><strong>KEP-48/MENLH/11/1996</strong> — Baku mutu tingkat kebisingan (50–70 dB(A) tergantung zona)</li>
                <li><strong>KepMenKes No. 718/1987</strong> — Kebisingan di lingkungan dan tempat kerja</li>
                <li><strong>PermenLHK P.56/2019</strong> — Tata cara pengukuran tingkat kebisingan lingkungan</li>
            </ul>

            <h3>Prosedur Pengukuran yang Benar</h3>
            <p><strong>Peralatan:</strong> Sound Level Meter (SLM) yang telah dikalibrasi, memenuhi standar IEC 61672 kelas 1 atau 2.</p>
            <p><strong>Titik Pengukuran:</strong> Dilakukan di batas properti fasilitas industri dan di lokasi-lokasi sensitif terdekat (permukiman, sekolah, rumah sakit).</p>
            <p><strong>Waktu Pengukuran:</strong></p>
            <ul>
                <li>Siang hari: pukul 06.00–22.00 (baku mutu lebih longgar)</li>
                <li>Malam hari: pukul 22.00–06.00 (baku mutu lebih ketat, 5 dB lebih rendah)</li>
                <li>Durasi: minimal 10 menit per titik, diulang 3 kali</li>
            </ul>

            <h3>Continuous Noise Monitoring</h3>
            <p>Untuk industri dengan operasional 24 jam, disarankan memasang sistem pemantauan kebisingan kontinu (Continuous Noise Monitoring) menggunakan outdoor Sound Level Meter yang tahan cuaca (IP65) yang terkoneksi ke DAS.</p>
            <p>Fanka Solusi Indonesia menyediakan layanan noise monitoring sesuai standar, mulai dari pengukuran periodik, pemasangan sistem monitoring kontinu, hingga penyusunan laporan sesuai format KLHK. Konsultasikan kebutuhan Anda dengan tim environment kami.</p>

            <h3>Solusi Mitigasi Kebisingan</h3>
            <p>Jika hasil pengukuran menunjukkan nilai yang melebihi baku mutu, kami juga dapat membantu merancang solusi mitigasi: acoustic barrier, enclosure untuk peralatan berisik tinggi, atau modifikasi jadwal operasional.</p>
        `
    },
];
