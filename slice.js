var angka1 = [1, 2, 3, 4, 5]
var angka2 = angka1.slice(0, 3)
console.log(angka2)

var angka3 = angka1.slice(3)
console.log(angka3)

// Parameter pertama(0) mendefinisikan index elemen pertama yang akan dipotong. Elemen dengan index ini akan ikut masuk ke variabel array yang baru.
// Parameter kedua (3) mendefinisikan batas index terakhir dari array yang dimanipulasi. Elemen dengan index ini tidak masuk ke array yang baru.

// juga bisa hanya menggunakan 1 parameter saja = parameter pertama