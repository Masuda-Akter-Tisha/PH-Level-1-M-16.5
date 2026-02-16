//simple method
const number = [1, 2, 3, 4, 5];
let revers = number.reverse();
console.log(revers);

//for of
// let revers = [];
// for (let num of number){
//     revers = num + ' ' + revers;
// }
//  console.log(revers);


 //plain for loop
 let rev = [];
 for (let i = 0; i <number.length; i ++){
    rev = number[i] +' '+ rev;
 }
 console.log(rev);

 //while loop

 const flowers = ['rose', 'marigold', 'sunflower'];
 let i = flowers.length - 1;
 let reve = [];
 while( i >= 0 ){
   reve = flowers[i] + ' ' + reve;
   i --;
 }
 console.log(reve);