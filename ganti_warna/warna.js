// Fungsi untuk mengubah warna latar belakang
function ubahWarna(warna) {
    const body = document.body;

    switch (warna) {
        case 'biru':
            body.style.backgroundColor = '#2ab2ca'; // Ganti dengan kode warna biru yang diberikan
            break;
        case 'darktheme':
            body.style.backgroundColor = '#312727';
            body.style.color = 'white';
            break;
        case 'hijau':
            body.style.backgroundColor = 'green';
            break;
        case 'abuabu':
            body.style.backgroundColor = 'gray';
            break;
        default:
            body.style.backgroundColor = 'white';
    }
}
