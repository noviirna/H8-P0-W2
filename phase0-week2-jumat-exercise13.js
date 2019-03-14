function targetTerdekat(arr) {
  // you can only write your code here!
  var tempatX = [];
  var tempatO = [];

  for (var i = 0; i < arr.length; i++){
    switch(arr[i]){
      case '':
      break;
      case 'x':
      tempatX.push(i);
      break;
      case 'o':
      tempatO.push(i);
      break;
      default :
      break;
    }
  }
  var result = [];

  if(tempatX[0] > tempatO[0]){
  var nx = tempatX[0];

  for (var i = 0; i < tempatO.length; i++){
    var selisih = 0;
    selisih = nx - tempatO[i];
    selisih = Math.abs(selisih);
    result.push(selisih);
  }
  result.sort();
  return result[0];
  }
  
  else if(tempatO[0] > tempatX[0]){
  var no = tempatO[0];

  for (var i = 0; i < tempatX.length; i++){
    var selisih = 0;
    selisih = no - tempatX[i];
    selisih = Math.abs(selisih);
    result.push(selisih);
  }
  result.sort();
  return result[0];
  }
  else{
    return 0;
  }

  }

// TEST CASES
console.log(targetTerdekat(['x', ' ', 'o', ' '])); // 2
console.log(targetTerdekat([' ', ' ', 'x', ' ', ' ', 'o', ' ', 'x'])); // 3
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2