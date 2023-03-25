/*
angka 1 - 50 urut..
kalau angka keliaptan 3
kalau angka kelipatan 5 --> BUZZ
kalau kelipan 3 dan 5 --> 
*/

function perulangan(nilai) {
    for (let i = 0; i < nilai; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`Nilai ${i} FIZZBUZZ`);
        } else if (i % 3 == 0) {
            console.log(`Nilai ${i} FIZZ`);
        } else if (i % 5 == 0) {
            console.log(`Nilai ${i} BUZZ`);
        } else {
            console.log(`Nilai ${i}`);
        }
    }
}
perulangan(50)

/*
string
example: "rakamin"
output: "nimakar"

example: "mentoring"
outputnya: "gnirotnem"
*/

// let nama = 'Rakamin'
// console.log(nama);
// let split = nama.split('')
// console.log(split);
// let reverse = split.reverse()
// console.log(reverse);
// let join = reverse.join('')
// console.log(join);



const namaBaru = 'Mentoring'
const array = []
let stringArray = ''

for (let i = 0; i < namaBaru.length; i++) {
    array.push(namaBaru[i])
}

stringArray = array.reverse().join('')
console.log(stringArray);