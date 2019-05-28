// Soal 1
// Buatlah sebuah method/function untuk me-return biodata Anda, dengan ketentuan
// - name(string)
// 	- address (String)
// 	- hobbies (Array)
// 	- is_married (Boolean)
// 	- school (Obj) with key highSchool, and university
// 	- skills (Array of Obj, with key “name” and “score”)
// 	Return value harus berformat JSON!
	
// Pada readme sebutkan apa itu REST API dan kegunaan JSON pada REST API, dan dipelajarin yaa..

const biodataKu = {
    name: 'Sahrul Sidik',
    address: 'Kp. Lamping, Kel. Gedong Panjang, Kec. Citamiang, Kota Sukabumi',
    hobbies: [
        "read",
        "playing some music like a guitar",
        "learning tutorial from the internet"
    ],
    is_married: false,
    school: {
        highSchool: "SMAN 1 KALIBUNDER 2010-2013", 
        University: "STIE PGRI SUKABUMI 2010-2013" 
    },
    skills : [
    {
        name:  "Basic & Intermediate JavaScript ",
        score: 80
    }
    ],
    nama(){
        console.log(this.name);
    },
    alamat(){
        console.log(this.address);
    },
    hobi(){
        console.log(this.hobbies);
    },
    statusMenikah(){
        if(this.is_married === false) {
            console.log("Belum Menikah Atau =", this.is_married);
        }
    },
    sekolah(){
        console.log(this.school);
    },
    kemampuan(){
        this.skills.forEach(() => {
            console.log(this.skills[0]);
        });
    }
};

// menampilkan object ke json
// console.log(JSON.stringify(biodataKu));

// variabel inisialisasi untuk menampilkan JSON dari object
const data01 = (JSON.stringify(biodataKu));

// Mengambil element dari ID Jawaban-soal dan child tag p dari childnya child ID untuk menimpan biodatanya di element yang di ambil ini
const jawaban01 = document.querySelectorAll('#jawaban-soal p');

const jawaban001 = jawaban01[0];
// console.log(jawaban01);
jawaban001.innerHTML = `(${data01})`





// -----
// mengambil element-element untk jawaban-jawabannya
// ------
// const jawaban02 = jawaban[1];
// console.log(jawaban02);

// const jawaban03 = jawaban[2];
// console.log(jawaban03);

// const jawaban04 = jawaban[3];
// console.log(jawaban04);

// const jawaban05 = jawaban[4];
// console.log(jawaban05);





// -----
// menampilkan bagian- bagian dari object
// -----
// biodataKu.nama();
// Sahrul Sidik

// biodataKu.alamat();
// Kp. Lamping, Kel. Gedong Panjang, Kec. Citamiang, Kota Sukabu

// biodataKu.hobi();
// (3) ["read", "playing some music like a guitar", "learning tutorial from the internet"]

// biodataKu.statusMenikah();
// Belum Menikah Atau = false

// biodataKu.sekolah();
// {highSchool: "SMAN 1 KALIBUNDER 2010-2013", University: "STIE PGRI SUKABUMI 2010-2013"}

// biodataKu.kemampuan();
// {name: "Basic & Intermediate JavaScript ", score: 80}







