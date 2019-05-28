// Soal 5

// Buat sebuah function memiliki tiga buah parameter yang berfungsi untuk me-replace karakter yang terdapat dalam suatu string dengan parameter sebuah string, karakter yang akan di-replace dan karakter baru!
// Peringatan! soal nomer 4 dilarang menggunakan built-in function replace, gunakan manipulasi array dengan perulangan.
// contoh:
// 	Jika function dijalankan
// 		ganti_kata(“purwakarta”,’a’,’o’)
// 	akan di cetak di layar
// 		“purwokerto”


function ganti_kata(par1, par2, par3) {
    let string1 = par1.indexOf(par2);
    let string2 = par1.indexOf(par2, (string1+ 1));
    let string3 = par1.indexOf(par2, (string1 + string1));
    // tes string
    // console.log(string1);
    // console.log(string2);
    // console.log(string3);
    let hasil = '';
    for(let i = string1.length; i < par1.length; i++) {
        hasil += par1[i];
        }
    return hasil;

}
console.log(ganti_kata("purakarta", "a", "o"));
// “purwokerto”

// function reverseString (text) {
//     var tulisan ='';
//     for(var i = text.length-1; i>0; i--) {
//       tulisan+= text[i];
//       }
//     return tulisan;
//   }

// // TEST CASES
// console.log(reverseString('Hello World and Coders'));



























