//for of loop
// let numbers = [1, 2, 3, 4, 5];
//  let num_rev = [];
// for(let num of numbers){
//    num_rev.unshift(num);
// }
// console.log(num_rev);

// let num = [1, 2, 3];
// num.push(40);
// console.log(num);

//plain for loop
let flowers = ['sunflower', 'marigold', 'rose'];
let num_rev = [];
for(let i = 0; i < flowers.length; i ++){
    // num_rev.unshift(flowers[i]);
    const flower = flowers[i];
    num_rev.unshift(flower);
}
console.log(num_rev);

//while-loop
let names = ['Tisha', 'Tarin', 'Tasif'];
let reverse = [];
let i = names.length - 1;
while(i >= 0){
    let name = names[i];
    reverse.push(name);
    i --;
}
console.log(reverse);

