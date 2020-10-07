var namalengkap = ["Andrey", "Sholinka"]
var umur = ["22 tahun"]

var gabung = namalengkap.concat(umur)

gabung.splice(2, 0, "1997")

function tampilan(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

tampilan(gabung);