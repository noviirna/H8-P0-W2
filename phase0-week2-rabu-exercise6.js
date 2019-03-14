function angkaPalindrome(num) {
  //variable nilai palindrom
  var inipalindrom = false;

  //cek next item apakah palindrom
  while(inipalindrom === false) {
    num = num + 1;
    var numStr = num.toString();
    var num_balik ='';
  
    //get num_balik
    for(var i = numStr.length-1; i >= 0; i--) {
        num_balik = num_balik + numStr[i];
        
    }
    //cek jika number sama dengan yang dibalik
    if(numStr == num_balik) {
        inipalindrom = true;
        return num;
    }
   else {
     inipalindrom = false;
   }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(31)); // 33
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001