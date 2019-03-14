function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var atemp = [];
  
    for(var i =0; i < arr.length-1; i++){
      var ntemp;
      ntemp = Number(ntemp);
      ntemp = Number(arr[i+1]) / Number(arr[i]);
      atemp.push(ntemp);
    }
  
    var geometri = 0;
  
    for(var i = 0; i< atemp.length; i++){
      if(atemp[0] != atemp[i]){
      geometri = geometri - 1;
      }
    }
  
    if(geometri < 0){
      return false;
    }
    else{
      return true;
    } 
    return atemp;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false