/*
Sembako
- Disebuah negara terdapat 3 wilayah
- Wilayah 1 penghasil beras
- Wilayah 2 penghasil sayur
- Wilayah 3 penghasil buah

Ini adalah harga normal
- Harga beras = 10000/kg
- Harga sayur = 5000/ikat
- Harga buah = 20000/kg

- Jika wilayah tersebut penghasil komoditas maka gunakan harga normal
- Jika wilayah tersebut bukan komoditas maka harga akan naik 5%

Hitunglah kebutuhan per wilayah
Wilayah 1
Beras sebanyak 100kg
Sayur 30 ikat
Buah 50 kg

Wilayah 2
Beras sebanyak 200kg
Sayur 50 ikat
Buah 200 kg

Wilayah 3
Beras sebanyak 10kg
Sayur 5 ikat
Buah 20 kg
*/

let wilayah1 = 'Beras'
let wilayah2 = 'Sayur'
let wilayah3 = 'Buah'

let hargaBeras = 10000
let hargaSayur = 5000
let hargaBuah = 20000
let kenaikanHarga = 0.5


function kebutuhan(beras, sayur, buah, wilayah) {
    anggaranBeras = 0
    anggaranSayur = 0
    anggaranBuah = 0

    if (wilayah == 'Beras') {
        anggaranBeras = hargaBeras * beras
        anggaranSayur = hargaSayur * sayur * kenaikanHarga
        anggaranBuah = hargaBuah * buah * kenaikanHarga
        total = anggaranBeras + anggaranSayur + anggaranBuah
    } else if (wilayah == 'Sayur' ) {
        anggaranBeras = hargaBeras * beras + kenaikanHarga
        anggaranSayur = hargaSayur * sayur
        anggaranBuah = hargaBuah * buah * kenaikanHarga
        total = anggaranBeras + anggaranSayur + anggaranBuah
    } else if (wilayah == 'Buah') {
        anggaranBeras = hargaBeras * beras * kenaikanHarga
        anggaranSayur = hargaSayur * sayur * kenaikanHarga
        anggaranBuah = hargaBuah * buah
        total = anggaranBeras + anggaranSayur + anggaranBuah
    } else {
        console.log(`Ada memasuki kawasan wilayah yang tidak terdeteksi`);
    }

    let anggaran = []
    anggaran.push(anggaranBeras)
    anggaran.push(anggaranSayur)
    anggaran.push(anggaranBuah)
}

function arr() {
    
}