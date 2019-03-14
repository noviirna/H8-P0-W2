function angkaPrima(angka) {
    // you can only write your code here!
    switch(angka){
      case 0: return 'inputan salah';
      break;
      case 1: return true;
      break;
      default:
        var hasil = true;
        for(var i = 2; i<angka; i++){
          if(angka % i == 0){
            return false;
          }
        }
        return hasil;
      break;
    }
  }
  
  // TEST CASES
  console.log(angkaPrima(1)); //true
  console.log(angkaPrima(2)); //true
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(4)); // false
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(11)); // true
  