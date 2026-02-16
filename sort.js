let name = ['Tiba', 'sefali', 'adiba', 'madina','Amira'];
let sortedName = name.sort();
console.log(sortedName);

let numbers = [1, 24, 7, 39, 3];
// let sorted = numbers.sort();
let sortedAsc = [...numbers].sort(function(a, b) {return a - b});
let sortedDsc = [...numbers].sort(function(a, b) {return b - a});
console.log(sortedAsc);
console.log(sortedDsc);