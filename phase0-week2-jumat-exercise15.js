function groupAnimals(animals) {
  // you can only write your code here!
  //animals.sort();
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

  var temp = [];
  var result = []   
  for (var i = 0; i < animals.length-1; i++){
    if(animals[i][0] == animals[i+1][0]){
      if(i==0){
        temp.push(animals[i]);
      }
      temp.push(animals[i+1]);
    }
    else{
      result.push(temp);
      temp = [];
      temp.push(animals[i+1]);
    }
    if(i == animals.length-2){
      result.push(temp);
    }
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
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]



// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cicak', 'cacing'], ['kuda', 'kancil'], ['unta'] ]