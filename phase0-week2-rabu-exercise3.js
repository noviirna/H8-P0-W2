var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
    ["0005", "Kim Nam Joon", "Seoul", "6/4/1970", "Makan"]
]

function dataHandling(input){
var noId ='';
var nama ='';
var tempatLahir ='';
var tglLahir ='';
var hobi ='';

for(var i = 0; i < input.length; i++){
    for(var j = 0; j< input[i].length; j++){
        switch(j){
        case 0 : noId = noId + input[i][j];
        break;
        case 1 : nama = nama + input[i][j];
        break;
        case 2 : tempatLahir = tempatLahir + input[i][j];
        break;
        case 3 : tglLahir = tglLahir + input[i][j];
        break;
        case 4 : hobi = hobi + input[i][j];
        break;
        default :
        break;
        }
}
console.log('id = ' + noId);
console.log('nama = ' + nama);
console.log('TTL = ' + tempatLahir + ', ' + tglLahir);
console.log('hobi = ' + hobi);
console.log('\n');

noId ='';
nama ='';
tempatLahir='';
tglLahir='';
hobi='';
}
}
dataHandling(input);