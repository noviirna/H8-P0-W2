var input = ["0001", "Roman Alamsyah  Suharto", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
//splice array, tambah 'pria' & 'sma internasional metro'
input.splice(4, 1, "Pria", "SMA Internasional Metro");

//cetak array
console.log(input);
console.log('\n');

//split array
tglLahir = input[3];
tglLahir = tglLahir.split("/");


//Mei
switch(tglLahir[1]){
  case '01': bulanLahir = 'Januari';
  break;
  case '02': bulanLahir = 'Februari';
  break;
  case '03': bulanLahir = 'Maret';
  break;
  case '04': bulanLahir = 'April';
  break;
  case '05': bulanLahir = 'Mei';
  break;
  case '06': bulanLahir = 'Juni';
  break;
  case '07': bulanLahir = 'Juli';
  break;
  case '08': bulanLahir = 'Agustus';
  break;
  case '09': bulanLahir = 'September';
  break;
  case '10': bulanLahir = 'Oktober';
  break;
  case '11': bulanLahir = 'November';
  break;
  case '12': bulanLahir = 'Desember';
  break;
  default : bulanLahir = '';
  break;
}
console.log(bulanLahir + "\n");

//["1989", "21", "05"]
var tglLahir_sort = input[3].split('/');

for(var i = tglLahir_sort.length-1; i>=0;i--){
  tglLahir_sort[i] = Number(tglLahir_sort[i]);
}
tglLahir_sort.sort(function(a, b){return b-a});
for(var i = tglLahir_sort.length-1; i>=0;i--){
  tglLahir_sort[i] = tglLahir_sort[i].toString();
}
console.log(tglLahir_sort);
console.log('\n');

//21-05-1989
var tglLahir_baru = [];
for (i = tglLahir.length; i>=0; i--){
  tglLahir_baru = tglLahir.join(" - ");
  }
console.log(tglLahir_baru + '\n');

//Roman Alamsyah
input[1] = input[1].toString();
console.log(input[1].slice(0,14))
}

//cetak
dataHandling2(input);