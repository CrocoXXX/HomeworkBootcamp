let array = []
let arrayGenap = []
let arrayGanjil = []
let minGenap
let maxGenap
let totalGenap = 0
let rataRataGenap = 0

let minGanjil
let maxGanjil
let totalGanjil = 0
let rataRataGanjil = 0


for (let i = 0; i < array.length; i++) {
    array.push(Math.floor(Math.random()*50))
}
console.log(array);

for (let index = 0; index < array.length; index++) {
    if (index % 2 == 0) {
        arrayGenap.push(array[index])
    } else {
        arrayGanjil.push(array[index])
    }
}
console.log(`Array Genap = ${arrayGenap}`);
console.log(`Array Ganjil = ${arrayGanjil}`);


for (let index = 0; index < 50; index++) {
    minGenap = arrayGenap[0]
    maxGenap = arrayGenap[0]
    minGanjil = arrayGanjil[0]
    maxGanjil = arrayGanjil[0]

    if (minGanjil > arrayGanjil[index]) {
        minGanjil = arrayGanjil[index]
    } 
    if (minGenap > arrayGenap[index]) {
        minGenap = minGenap[index]
    }
    if (maxGanjil < arrayGanjil[index]) {
        maxGanjil = maxGanjil[index]
    }
    if (maxGenap < maxGenap[index]) {
        maxGenap = maxGenap[index]
    }

    totalGanjil += arrayGanjil [index]
    totalGenap += arrayGenap[index]
}

rataRataGanjil = totalGanjil / arrayGanjil.length
rataRataGenap = totalGenap / arrayGenap.length

console.log(`=== Analisis Data Ganjil ===`);
console.log(`Min = ${minGanjil}`);
console.log(`Max = ${maxGanjil}`);
console.log(`Total = ${totalGanjil}`);
console.log(`Rata-rata = ${rataRataGanjil}`);

console.log(`=== Analisis Data Genap ===`);
console.log(`Min = ${minGenap}`);
console.log(`Max = ${maxGenap}`);
console.log(`Total = ${totalGenap}`);
console.log(`Rata-rata = ${rataRataGenap}`);

if (maxGanjil > maxGenap) {
    console.log(`Max Ganjil lebih besar dari Max Genap`);
} else if (maxGanjil < maxGenap) {
    console.log(`Max Genap lebih besar dari Max Ganjil`);
} else {
    console.log(`Max pada kedua Array sama`);
}

if (minGanjil > minGenap) {
    console.log(`Min Ganjil lebih besar dari Min Genap`);
} else if (minGanjil < minGenap) {
    console.log(`Min Genap lebih besar dari Min Ganjil`);
} else {
    console.log(`Min pada kedua Array sama`);
}
