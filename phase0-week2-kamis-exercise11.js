function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var atemp = [];
  
    for(var i =0; i < arr.length-1; i++){
      var ntemp;
      ntemp = Number(ntemp);
      ntemp = Number(arr[i]) - Number(arr[i+1]);
      atemp.push(ntemp);
    }
  
    var aritmatik = 0;
  
    for(var i = 0; i< atemp.length; i++){
      if(atemp[0] != atemp[i]){
      aritmatik = aritmatik - 1;
      }
    }
  
    if(aritmatik < 0){
      return false;
    }
    else{
      return true;
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false