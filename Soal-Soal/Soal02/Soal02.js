// Soal 1
// Buatlah function yang memilik dua buah parameter tanggal untuk menampilkan hari antara dua buah tanggal!
// Contoh:
// Jika function dijalankan
// betweenDays('2019-11-01', '2019-11-05')
// akan diperoleh hasil:
// '2019-11-01', '2019-11-02', '2019-11-03', '2019-11-04', '2019-11-05'


function betweenDays(num1, num2) {
    var arr = [];
    for(let i = num1; i <= num2; i++) {
        arr.push("2019-11-0" + i)
    }
    return arr;
}


console.log(betweenDays(1, 2).join(', '));
// 2019-11-01, 2019-11-02
console.log(betweenDays(1, 5).join(', '));
// 2019-11-01, 2019-11-02, 2019-11-03, 2019-11-04, 2019-11-05


var data02 = betweenDays;

const jawaban02 = document.querySelectorAll('#jawaban-soal p');   

const jawaban002 = jawaban02[1];
// console.log(jawaban01);
jawaban002.innerHTML = `
                                                function betweenDays(num1, num2) { <br>
&#160&#160&#160&#160&#160                           var arr = [];   <br>
&#160&#160&#160&#160&#160                           for(let i = num1; i <= num2; i++) { <br>
&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160      arr.push("2019-11-0" + i);   <br>
&#160&#160&#160&#160&#160                       }   <br>
                                                return arr; <br>
                                                }   <br><br>
console.log(betweenDays(1, 2).join(', '));  <br>
// 2019-11-01, 2019-11-02   <br><br>
console.log(betweenDays(1, 5).join(', '));  <br>
// 2019-11-01, 2019-11-02, 2019-11-03, 2019-11-04, 2019-11-05

`























