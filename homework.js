/*
- Buatlah 100 nilai random (1 sampai 50) pada 1 array
- Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array
- Gunakan 2 array yang telah dibuat untuk mendapatkan
    - Min
    - Max
    - Total
    - Rata rata
- Bandingkan kedua buah array, contoh
    - Min lebih besar array genap
    - Max lebih besar array ganjil
    - Total memiliki nilai sama antara array genap dan ganjil
    - Rata rata lebih besar array ganjil

Output dari aplikasi
- Array dengan jumlah index 100
- Array genap dengan jumlah index 50
- Array ganjil dengan jumlah index 50
- Min, Max, Total, Rata rata pada setiap array (genap dan ganjil)
- Perbandingan nilai min, max, total dan rata rata

Catatan :
- Dilarang menggunakan fungsi bawaan untuk min, max, total dan rata rata
- Buatlah menjadi beberapa fungsi agar kode dapat digunakan kembali
- Push ke REPO dan upload link REPO, tolong repo dalam status public
*/

// Variabel
let array = []
let arrayGenap = []
let arrayGanjil = []
let total = 0
let totalGenap = 0
let totalGanjil = 0
let rataRata = 0
let rataRataGenap = 0
let rataRataGanjil = 0
let minGanjil = 0
let minGenap = 0
let maxGanjil = 0
let maxGenap = 0

// Fungsi untuk mencari bilangan random
function bilRandom(min, max) {
    return array.push(Math.floor(Math.random() * (max - min + 1) + min))
}

// Fungsi untuk perulangan for
function index(nilai) {
    // Variabel untuk menyimpan index genap & ganjil
    let j = 0
    let k = 0
    
    for (let i = 0; i < nilai; i++) {
        // Fungsi Bilangan Random
        bilRandom(1, 50)
        // Perbandingan Ganjil & Genap
        if (i % 2 != 0) {
            arrayGanjil[j] = array[i]
            totalGanjil += arrayGanjil[j]
            j++
        } else {
            arrayGenap[k] = array[i]
            totalGenap += arrayGenap[k]
            k++
        }
        total += array[i]
    }
    rataRata = total / array.length
    rataRataGanjil = totalGanjil / arrayGanjil.length
    rataRataGenap = totalGenap / arrayGenap.length

    return maxMin(arrayGenap, arrayGanjil)
}

// Fungsi untuk Max & Min
function maxMin(arrayGenap, arrayGanjil)
{
    genap = arrayGenap.length
    ganjil = arrayGanjil.length
    console.log(`${arrayGenap} Genap`);
    console.log(`${arrayGanjil} Ganjil`);

    for (let i = 0; i < genap; i++) {
        if (minGenap == 0) {
            minGenap = arrayGenap[i]
        } else if (minGenap >= arrayGenap[i]) {
            minGenap = arrayGenap[i]
        } else if (maxGenap <= arrayGenap[i]) {
            maxGenap = arrayGenap[i]
        } else {
            maxGenap
        }
    }
    for (let i = 0; i < ganjil; i++) {
        if (minGanjil == 0) {
            minGanjil = arrayGanjil[i]
        } else if (minGanjil >= arrayGanjil[i]) {
            minGanjil = arrayGanjil[i]
        } else if (maxGanjil <= arrayGanjil[i]) {
            maxGanjil = arrayGanjil[i]
        } else {
            maxGanjil
        }
    }
}


// Fungsi untuk Perbandingan
function perbandingan(genap, ganjil) {
    if (genap == totalGenap && ganjil == totalGanjil ) {
        if (genap > ganjil) {
            console.log(`Total nilai pada array genap ${genap} lebih besar dari total nilai pada array ganjil ${ganjil}`);
        } else if (genap < ganjil) {
            console.log(`Total nilai pada array ganjil ${ganjil} lebih besar dari total nilai pada array genap ${genap}`);
        } else {
            console.log(`Total nilai pada array ganjil ${ganjil} memiliki nilai yang sama dengan total nilai pada array genap ${genap}`);
        }    
    } else if (genap == rataRataGenap && ganjil == rataRataGanjil) {
        if (genap > ganjil) {
            console.log(`Rata-rata nilai pada array genap ${genap} lebih besar dari rata-rata nilai pada array ganjil ${ganjil}`);
        } else if (genap < ganjil) {
            console.log(`Rata-rata nilai pada array ganjil ${ganjil} lebih besar dari rata-rata nilai pada array genap ${genap}`);
        } else {
            console.log(`Rata-rata nilai pada array ganjil ${ganjil} memiliki nilai yang sama dengan rata-rata nilai pada array genap ${genap}`);
        }
    } else if (genap == minGenap && ganjil == minGanjil) {
        if (genap > ganjil) {
            console.log(`Min nilai pada array genap ${genap} lebih besar dari min nilai pada array ganjil ${ganjil}`);
        } else if (genap < ganjil) {
            console.log(`Min nilai pada array ganjil ${ganjil} lebih besar dari min nilai pada array genap ${genap}`);
        } else {
            console.log(`Min nilai pada array ganjil ${ganjil} memiliki nilai yang sama dengan min nilai pada array genap ${genap}`);
        }
    } else if (genap == maxGenap && ganjil == maxGanjil) {
        if (genap > ganjil) {
            console.log(`Max nilai pada array genap ${genap} lebih besar dari max nilai pada array ganjil ${ganjil}`);
        } else if (genap < ganjil) {
            console.log(`Max nilai pada array ganjil ${ganjil} lebih besar dari max nilai pada array genap ${genap}`);
        } else {
            console.log(`Max nilai pada array ganjil ${ganjil} memiliki nilai yang sama dengan max nilai pada array genap ${genap}`);
        }
    }
    else {
        console.log('Error Function');
    }

}


// Pemanggilan fungsi
index(100)
console.log(`===== Bilangan Random pada Array =====`);
console.log(array);
// console.log(total);
console.log(`\n===== Full Array =====`);
console.log(`Nilai Random pada Array = [${array}]`)
console.log(`Total seluruh nilai pada Array = ${total}`);
console.log(`Rata-rata seluruh nilai pada Array = ${rataRata}`);

console.log(`\n===== Array Genap =====`);
console.log(arrayGenap);
console.log(`Array Genap = [${arrayGenap}]`)
console.log(`Total nilai pada Array Genap = ${totalGenap}`);
console.log(`Rata-rata nilai pada Array Genap = ${rataRataGenap}`);
console.log(`Min nilai pada Array Genap = ${minGenap}`);
console.log(`Max nilai pada Array Genap = ${maxGenap}`);

console.log(`\n===== Array Ganjil =====`);
console.log(arrayGanjil);
console.log(`Array Ganjil = [${arrayGanjil}]`)
console.log(`Total nilai pada Array Ganjil = ${totalGanjil}`);
console.log(`Rata-rata nilai pada Array Ganjil = ${rataRataGanjil}`);
console.log(`Min nilai pada Array Ganjil = ${minGanjil}`);
console.log(`Max nilai pada Array Ganjil = ${maxGanjil}`);

// Pemanggilan fungsi perbandingan
console.log(`\n ===== Perbandingan =====`);
perbandingan(totalGenap, totalGanjil)
perbandingan(rataRataGenap, rataRataGanjil)
perbandingan(minGenap, minGanjil)
perbandingan(maxGenap, maxGanjil)