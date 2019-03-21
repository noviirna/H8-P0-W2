function fpb(angka1, angka2) {
  // you can only write your code here!
  var pembagike1 = [];
  for(var i = 0; i <= angka1; i++){
    if(angka1 % i == 0){
      pembagike1.push(i);
    }
  }

  var pembagike2 = [];
  for(var i = 0; i <= angka2; i++){
    if(angka2 % i == 0){
      pembagike2.push(i);
    }
  }

  for (var i = pembagike2.length - 1; i >= 0; i--){
    for(var j = pembagike1.length - 1; j >= 0; j--){
      if(pembagike1[j] == pembagike2[i]){
        return pembagike1[j];
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
console.log(fpb(16, 16)); // 16
console.log(fpb(50, 10)); // 10
