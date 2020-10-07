var angka = [1, 2, 3, 4]
console.log(angka)

angka.splice(0, 2, "a", "b")
console.log(angka)

// Parameter 1 (0) adalah parameter yang mendefinisikan bahwa penyisipan elemen baru akan dimulai dari index elemen kedua
// Parameter 2 (2) mendefinisikan berapa jumlah elemen yang akan dihapus dari array tersebut. Elemen yang akan dihapus ini juga dihitung berdasarkan parameter pertama
// Parameter 3 (“a”, “b”) adalah elemen-elemen yang akan diselipkan ke dalam array tersebut.