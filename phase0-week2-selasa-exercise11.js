function balikKata(kata) {
  // you can only write your code here!
  var cetak = '';
  var panjang_kata = kata.length;
  for(var i = panjang_kata; i >= 0; i--){
    cetak = cetak + kata.charAt(i);
  }
  return cetak;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS