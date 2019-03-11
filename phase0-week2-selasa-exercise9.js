console.log('Exercises 9 - Tugas 1\n')
//BUATLAH KODE FUNCTION DISINI

function shoutOut(){
  return 'Halo Function!';
}

console.log(shoutOut()); // Menampilkan "Halo Function!" di console

console.log('\n================');
console.log('\nExercises 9 - Tugas 2\n');

var num1 = 5;
var num2 = 6;

function calculateMultiply(a,b){
  return a * b;
}

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log('\n================');
console.log('\nExercises 9 - Tugas 3 \n');

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(name, age, address, hobby){
return 'Nama saya ' + name + ', umur saya '+ age +' tahun, alamat saya di '+ address +', dan saya punya hobby yaitu '+ hobby +'!'
}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"