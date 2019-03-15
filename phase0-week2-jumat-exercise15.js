function groupAnimals(animals) {
  // you can only write your code here!
  //animals.sort();
  for (var i = animals.length-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
      if(animals[j-1]>animals[j]){
        var temp = animals[j-1];
        animals[j-1] = animals[j];
        animals[j] = temp;
      }
    }
  }

  var temp = [];
  temp.push(animals[0]);
  
  var result = []   
  
  for (var i = 0; i < animals.length-1; i++){
    if(animals[i][0] == animals[i+1][0]){
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
  console.log(groupAnimals(['cacing', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]