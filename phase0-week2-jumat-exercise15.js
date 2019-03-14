function groupAnimals(animals) {

//animals = animals.sort();
var marker;
var a;
var tempanimal;
marker =0;
a = 1;

while (marker < animals.length - 1) {
  //untuk keluar dari looping while
  if (a == animals.length) {
    marker++;
    a = marker;
    }

  if (animals[marker] > animals[a]) { // kalau mau ascending, < tinggal diganti menjadi >
    tempanimal = animals[marker];
    animals[marker] = animals[a];
    animals[a] = tempanimal;
    }
  a++;
  }


//temporary variabel untuk nampung string nama hewan
var temp = '';

for(var i = 0; i < animals.length-1; i++){  
    var current = '';
    current = animals[i];

    var next = '';
    next = animals[i+1];

    var firstLetterC  = '';
    firstLetterC = current[0];

    var firstLetterN = '';
    firstLetterN = next[0];
    
    //inisiasi variabel penampung string
    if(i == 0){
      temp = temp + current;
    }
    
    //cek huruf depan, jika huruf depan var[i] == var[i+1] maka pisahkan dengan -, jika tidak, maka pisahkan dengan %
    if(firstLetterC == firstLetterN){
      temp = temp + '-' + next;
      }
    else{
      temp = temp + '%' + next;
    }
  }
  
  //pisahkan sesuai kelompok
  var tempresult = [];
  tempresult = temp.split('%');

  //assign temporary result ke result
  var result = tempresult

  //pisahkan per hewan dalam kelompok
  for(var i = 0; i<result.length; i++){
    result[i] = result[i].split('-');
  }

  //sorting isi array[i]
  for(var i = 0; i<result.length; i++){
    var arrtemp = [];
    for(var j = result[i].length-1; j >= 0; j--){
      arrtemp.push(result[i][j]);
    }
    result[i] = arrtemp;
  }
  return result;
}



// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cicak', 'cacing'], ['kuda', 'kancil'], ['unta'] ]