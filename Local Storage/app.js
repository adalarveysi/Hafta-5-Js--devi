function verileriListele() {
    const veriListesi = document.getElementById('veriListesi');
    veriListesi.innerHTML = ''; // Önceki verileri temizle

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const veri = JSON.parse(localStorage.getItem(key));

        const li = document.createElement('li');
        li.innerHTML = `${veri.isim} - ${veri.email} <button class="btn btn-warning" onclick="veriyiDuzenle('${key}')">Düzenle</button> <button class="btn btn-danger"onclick="veriyiSil('${key}')">Sil</button>`;
        veriListesi.appendChild(li);
    }
}

// Formu gönderdiğinizde veriyi LocalStorage'e ekleyin
const veriEkleForm = document.getElementById('veriEkleForm');
veriEkleForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const isim = document.getElementById('isim').value;
    const email = document.getElementById('email').value;
    const veri = { isim, email };

    // Veriyi JSON formatına çevirip LocalStorage'e ekledik.
    localStorage.setItem(email, JSON.stringify(veri));

    // Formu temizle
    veriEkleForm.reset();

    // Verileri listele
    verileriListele();
});

// Veriyi düzenle
function veriyiDuzenle(key) {
    const veri = JSON.parse(localStorage.getItem(key));
    const yeniIsim = prompt('Yeni İsim:', veri.isim);
    if (yeniIsim !== null) {
        veri.isim = yeniIsim;
        localStorage.setItem(key, JSON.stringify(veri));
        verileriListele();
    }
}

// Veriyi sil
function veriyiSil(key) {
    const silmeOnay = confirm('Bu veriyi silmek istediğinizden emin misiniz?');
    if (silmeOnay) {
        localStorage.removeItem(key);
        verileriListele();
}
}