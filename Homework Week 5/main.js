// Inisialisasi Data Array
let peserta = []

// Class Peserta
class Peserta {
    constructor(nama, umur, sangu) {
        this.nama = nama
        this.umur = umur
        this.sangu = sangu
    }
}

// Fungsi Push Data Array Asynchronous
async function actionPush() {
    let nama = document.getElementById('nama').value
    let umur = document.getElementById('umur').value
    let sangu = document.getElementById('sangu').value

    // Fungsi validasi
    validasiForm()

    let tampungPeserta = await new Peserta(nama, umur, sangu)
    await peserta.push({nama: tampungPeserta.nama, umur: tampungPeserta.umur, sangu: tampungPeserta.sangu})

    return true
}

// Fungsi Create Tabel
function lihatTabel() {
    let tabel = ``
    tabel += `
        <table align='center' border='1px solid' width='600'>
    `
    tabel += `
        <tr align='center'>
            <td> Nama Peserta </td>
            <td> Umur Peserta </td>
            <td> Uang Sangu Peserta </td>
        </tr>
    `

    console.log(peserta)
    for (let i = 0; i < peserta.length; i++) {
        // Menampilkan input data pada console
        console.log(`
            Nama: ${peserta[i].nama}
            Umur: ${peserta[i].umur}
            Uang Saku: ${peserta[i].sangu}
        `)
        
        tabel += `
            <tr>
                <td> ${peserta[i].nama} </td>
                <td> ${peserta[i].umur} </td>
                <td> ${peserta[i].sangu} </td>
            </tr>
        `
    }

    tabel += `
        </table>
    `

    showRata()
    document.getElementById('tabel').innerHTML = tabel
}

// Fungsi Tabs
function tabs(event, halamanTab) {
    lihatTabel()

    let tabContent = document.getElementsByClassName('tabContents')
    for(let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none'
    }
    
    let tabLink = document.getElementsByClassName('tabLinks')
    for(let i =0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(' active', '')
    }

    document.getElementById(halamanTab).style.display = 'block'
    event.currentTarget.className += ' active'
}

// Inisialisasi Validasi Form
let namaError = document.getElementById('namaError')
let umurError = document.getElementById('umurError')
let sanguError = document.getElementById('sanguError')
let submitError = document.getElementById('submitError')

// Fungsi validasi form
function validasiNama() {
    let nama = document.getElementById('nama').value

    if(nama.length == 0) {
        namaError.innerHTML = 'Nama tidak boleh kosong'
        return false
    }
    if(nama.length < 10) {
        namaError.innerHTML = 'Nama minimal 10 karakter'
        return false
    }

    namaError.innerHTML = ''
    return true
}

function validasiUmur() {
    let umur = document.getElementById('umur').value

    if(umur == 0) {
        umurError.innerHTML = 'Umur tidak boleh kosong'
        return false
    }
    if(umur < 25) {
        umurError.innerHTML = 'Umur anda belum mencukupi (min 25)'
        return false
    }

    umurError.innerHTML = ''
    return true
}

function validasiSangu() {
    let sangu = document.getElementById('sangu').value

    if(sangu == 0) {
        sanguError.innerHTML = 'Uang sangu tidak boleh kosong'
        return false
    }
    if(sangu < 100000 || sangu > 1000000) {
        sanguError.innerHTML = 'Range uang saku 100.000 sampai 1.000.000'
        return false
    }

    sanguError.innerHTML = ''
    return true
}

function validasiForm() {
    if(!validasiNama() || !validasiUmur() || !validasiSangu()) {
        submitError.style.display = 'block'
        // submitError.innerHTML = 'Isi yang benar yaa 😉'
        // setTimeout(function() {}, 2000)
        return false
    }
}

// Fungsi tabel untuk rata-rata
function showRata() {
    let tabel = ``
    tabel += `
    <table align='center' border='1px' width='400'>
    `
    tabel += `
        <tr>
            <td> Rata-rata umur </td>
            <td> Rata-rata uang saku </td>
        </tr>
    `

    let avgUmur
    let totalAvgUmur = 0
    let avgSangu
    let totalAvgSangu = 0

    for(let i = 0; i < peserta.length; i++) {
        totalAvgUmur += parseInt(peserta[i].umur)
        totalAvgSangu += parseInt(peserta[i].sangu)
    }

    avgUmur = totalAvgUmur / peserta.length
    avgSangu = totalAvgSangu / peserta.length

    console.log(`
        Average Umur: ${avgUmur}
        Average Sangu: ${avgSangu}
    `)

    tabel += `
        <tr>
            <td> ${avgUmur} </td>
            <td> ${avgSangu} </td>
        </tr>
    `

    tabel += `
        </table>
    `

    document.getElementById('tabelAvg').innerHTML = tabel
}