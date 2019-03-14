function fpb(angka1, angka2) {
  // you can only write your code here!
  var temp1 = [];
  for(var i = 0; i < angka1; i++){
    if(angka1 % i == 0){
      temp1.push(i);
    }
  }
  var temp2 = [];
  for(var i = 0; i < angka2; i++){
    if(angka2 % i == 0){
      temp2.push(i);
    }
  }

  for (var i = temp2.length - 1; i >= 0; i--){
    for(var j = temp1.length - 1; j >= 0; j--){
      if(temp1[j] == temp2[i]){
        return temp1[j];
      }
    }
  }
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1