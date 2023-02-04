//Available in current version
//This code counts the occurrences of remo , rj and default

console.count('default');   //default = 1
console.count('remo');      //remo = 1
console.count('remo');      //remo = 2
console.count('rj');        //rj = 1
console.countReset('remo'); //remo = reset
console.count('remo');      //remo = 1
console.countReset('remo'); //remo = reset
console.count('rj');        //rj = 2
console.count();            //default = 2

console.count('Gab');
console.count('Joshua');
console.count('Dave')
console.count('Gab');
console.count('Joshua');
console.count('Dave');
console.countReset('Gab');
console.count('Wowie');
console.count('Gab');