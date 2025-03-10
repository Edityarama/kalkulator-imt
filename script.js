// Event listener untuk form submit
document.getElementById('imtForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah halaman direfresh

    // Ambil nilai berat (kg) dan tinggi (cm) dari form
    const berat = parseFloat(document.getElementById('berat').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);

    // Validasi input
    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        alert("Masukkan berat dan tinggi yang valid!");
        return;
    }

    // Konversi tinggi dari cm ke meter
    tinggi = tinggi / 100;

    // Menghitung IMT
    const imt = berat / (tinggi * tinggi);
    let kategori;
    let rekomendasi = '';

    // Menentukan kategori berdasarkan IMT
    if (imt < 18.5) {
        kategori = 'Kurus';
        document.getElementById('kategoriHasil').classList = 'text-yellow-500 font-bold';
        rekomendasi = `
        <ul>
            <li>Anda perlu menerapkan cara-cara berikut agar badan Anda ideal:</li>
            <li>1. Mengonsumsi makanan tinggi protein seperti ayam dan ikan</li>
            <li>2. Memperbanyak air mineral dan susu</li>
            <li>3. Makan lebih sering dengan porsi sedikit</li>
            <li>4. Perbanyak konsumsi alpukat dan daging merah</li>
        </ul>
        `;
    } else if (imt >= 18.5 && imt <= 24.9) {
        kategori = 'Normal';
        document.getElementById('kategoriHasil').classList = 'text-green-600 font-bold';
        rekomendasi = `
        <ul>
            <li>Jaga berat badanmu dengan cara:</li>
            <li>1. Konsumsi makanan bergizi seperti sayuran, buah-buahan, gandum utuh, produk susu rendah lemak, dan protein tanpa lemak.</li>
            <li>2. Rutin berolahraga</li>
            <li>3. Kelola stres</li>
            <li>4. Istirahat yang cukup</li>
            <li>5. Hindari makanan siap saji</li>
        </ul>`;
    } else {
        kategori = 'Gemuk';
        document.getElementById('kategoriHasil').classList = 'text-red-600 font-bold';
        rekomendasi = `
        <ul>
            <li>Berat badan kamu gemuk, kamu perlu melakukan hal ini:</li>
            <li>1. Konsumsi makanan bergizi seimbang</li>
            <li>2. Batasi asupan gula (4 sendok makan per hari)</li>
            <li>3. Batasi karbohidrat</li>
            <li>4. Konsumsi makanan yang mengandung serat larut, seperti kacang-kacangan</li>
            <li>5. Olahraga rutin</li>
            <li>6. Istirahat yang cukup</li>
            <li>7. Perbanyak minum air putih</li>
        </ul>
        `;
    }

    // Menampilkan hasil
    document.getElementById('imtHasil').textContent = imt.toFixed(2);
    document.getElementById('kategoriHasil').textContent = kategori;
    document.getElementById('rekomendasiHasil').innerHTML = rekomendasi;
    document.getElementById('hasil').classList.remove('hidden');
});
