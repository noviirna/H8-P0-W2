function xo(str) {
  var jum_o = '';
  var jum_x = '';

  for (var i = 0; i <= str.length; i++){
    if(str[i] == 'o'){
      jum_o = jum_o + 1;
    }
    else if (str[i] == 'x'){
      jum_x = jum_x + 1;
    }
    else{
      //do nothing
    }
  }

  if(jum_o === jum_x){
    return true;
  }
  else{
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true