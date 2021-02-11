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
//document.getElementById
//let orang = {
   // nama: "Yudistya",
   // umur: 32
  //};
//let biodata = {
    //tanggal: "12 agustus",
    //tempat : "Batam",
//}/

//let gabung = {...orang, ...biodata}

//let human = {
 //   name: 'Sarah',
 //   age: 24,
 //   address: 'Jakarta'
////};

//let name, age, address = human;

//console.log(name); 
//console.log(age); 

// Tambahkan kode JavaScript kalian di file ini

// Tambahkan kode JavaScript kalian di file ini
// Tambahkan kode JavaScript kalian di file ini
function getFormData() {
  let data = new Object()
  data['firstName'] = document.getElementsByTagName('input')[1].value;
  data['lastName'] = document.getElementsByTagName('input')[2].value;
  data['city'] = document.getElementsByTagName('input')[3].value;
  data['zipCode'] = document.getElementsByTagName('input')[4].value;
  data['check'] = document.getElementById('check').checked;
  return (data)
}

function isNumber(str){
  return /^-?\d+$/.test(str)
}

function isLength(str, int){
    return str.length == int
}

function checkboxIsChecked(){
    return document.getElementById('check').checked
}

function validateFormData (obj){
    if (obj.firstName !== undefined && obj.firstName !=""){
        if (obj.lastName !==undefined && obj.lastName !=""){
            if (obj.city !== undefined && obj.city !=""){
                if(obj.zipCode !== undefined && obj.zipCode !=""){
                    if(isNumber(obj.zipCode)){
                        if (checkboxIsChecked()){
                            return true
                        } else {
                            return false
                        } 
                        } else {
                            return false
                        }
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            }else {
                return false
            }
        }else {
            return false
        }

}

function resetForm(){
    document.getElementById("petForm").reset()
}

 
