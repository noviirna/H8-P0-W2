function pasanganTerbesar(num) {
    // you can only write your code here!
    num = num.toString();
    num = num.split('');
  
    var atemp = [];
    var stemp = '';
    var arrSort = [];
  
    for(var i = 0; i < num.length-1; i++){
      stemp = '';
      atemp = [];
      atemp.push(num[i]);
      atemp.push(num[i+1]);
      stemp = atemp.join('');
      arrSort.push(stemp);
    }
  
    var result = '';
  
    /*
    pakai fungsi sorting terbesar ke terkecil
    result = arrSort.sort(function(a, b){return b-a});
    result = arrSort[0];
    return arrSort[0]; 
    */
  
    //sorting manual terbesar ke terkecil
    var marker;
    var sorttemp;
    marker =0;
    var j = 1;
    while (marker < arrSort.length - 1) {
    //membandingkan isi array [i]dengan [i+1]
    if (arrSort[marker] < arrSort[j]) {
      sorttemp = arrSort[marker];
      arrSort[marker] = arrSort[j];
      arrSort[j] = sorttemp; 
      }
    //condition untuk keluar dari while
    if (j == arrSort.length) {
      marker++;
      j = marker;
      }
    j++;
    }
  
    result = arrSort[0];
    return Number(arrSort[0]);
  
  
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99