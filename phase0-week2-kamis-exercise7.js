function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    kalimat = kalimat.split(' ');
    var count = 0;
    for (var i = 0; i < kalimat.length; i++){
      count = count + 1 ;
    }
    return count;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  console.log(hitungJumlahKata('The quick brown fox jumps over the lazy dog')); // 9