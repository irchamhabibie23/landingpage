//function mendapatkanTeks(){
  //  const textH1 = document.getElementsByTagName('h1')[0]
 //   .innerText
 //   console.log(textH1)
  //  document.getElementsByClassName('header')[0]
  //  .innerText = textH1
//}

//function mendapatkanValue(){
   // const valueInput = document.getElementsByTagName('input')[0]
    //.value
   // document.getElementsByTagName('p')[0]
    //.innerText = valueInput
//}

//function operasiPenambah(angkaPertama, angkaKedua){
   // console.log(angkaKedua+angkaPertama)
//}

let orang = {
    nama: "Yudistya",
    umur: 32
  };
let biodata = {
    tanggal: "12 agustus",
    tempat : "Batam",
}

let gabung = {...orang, ...biodata}

let human = {
    name: 'Sarah',
    age: 24,
    address: 'Jakarta'
};

let name, age, address = human;

console.log(name); 
console.log(age); 