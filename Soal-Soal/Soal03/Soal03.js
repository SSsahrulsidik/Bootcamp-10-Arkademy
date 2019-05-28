// Soal 3

// Buatlah fungsi yang mepunya sebuah parameter yang bekerja untuk menghitung jumlah huruf hidup pada sebuah string.
// Contoh:
// 	Jika function dijalankan
// count_vowels(‘programmer’)
// Maka akan dicetak/return: 3
// count_vowels(‘hmm..’)
// Maka akan dicetak/return: 0


// ini belum selesai dan hasilnya tidak sesuai
function count_vowels(param) {
    let m = 'm', hasil = 0, jmlParam = 3;
    for(i=0; i<param.length; i++) {
        if(param[i] === m) {
            hasil += 3;
        } else {
            return 0;
        }
    }
    return hasil;

}
console.log(count_vowels("programmer"));
// 0
console.log(count_vowels("hmm.."));
// 0

