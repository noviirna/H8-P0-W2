function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var result = [];
  var genap = []; 
  var ganjil = [];
  var keltiga =[];

  while(arr !== undefined && arr.length > 0){
    for(var i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0 && arr[i] % 3 != 0)
      {
      genap.push(arr[i]);
      arr.splice(i,1);
      }
    }
    for(var i = 0; i < arr.length; i++){
      if(arr[i] % 2 != 0 && arr[i] % 3 != 0){
      ganjil.push(arr[i]);
      arr.splice(i,1);
      }
    }
    for(var i = 0; i < arr.length; i++){
      if(arr[i] % 3 == 0){
      keltiga.push(arr[i]);
      arr.splice(i,1)
      }
    }
    } 
  
  result.push(genap);
  result.push(ganjil);
  result.push(keltiga);
  return result;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]