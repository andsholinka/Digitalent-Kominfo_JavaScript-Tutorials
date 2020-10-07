var angka = [54, 120, 13, 78, 2000]

var urutkeAtas = angka.sort(function (a, b) {
    return a - b
})
console.log(urutkeAtas)

var urutkeBawah = angka.sort(function (a, b) {
    return b - a
})
console.log(urutkeBawah)