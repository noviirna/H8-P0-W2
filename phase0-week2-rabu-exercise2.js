function balikString(input) {
  // you can only write your code here!
  var cetak = '';
  var panjang_kata = input.length;
  for(var i = panjang_kata-1; i >= 0; i--){
    cetak = cetak + input[i];
  }
  return cetak;
}

// TEST CASES
console.log(balikString('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikString('John Doe')); // eoD nhoJ
console.log(balikString('I am a bookworm')); // mrowkoob a ma I
console.log(balikString('Coding is my hobby')); // ybbbalikStringoh ym si gnidoC
console.log(balikString('Super')); // repuS