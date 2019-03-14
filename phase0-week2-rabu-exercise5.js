var kata_balik;
function palindrome(kata) {
  // you can only write your code here!
  //var kata_balik = '';
  kata_balik = '';
  for(var i = kata.length-1; i >= 0; i--){
    kata_balik = kata_balik + kata[i];
  }
  console.log('\n"'+ kata + '" dibalik jadi "' + kata_balik + '"')

  if(kata === kata_balik){
    return true;
  }
  else{
    return false;
  }
  
}
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('xoxox'));