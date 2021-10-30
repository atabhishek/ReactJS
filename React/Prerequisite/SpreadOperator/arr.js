let arr = [1, 2, 3, 4];
let arr2 = arr;
arr2.push(5);

console.log("spread : ", ...arr);

console.log(arr);
console.log(arr2);

let arr3 = [...arr];
arr3.push(6);
console.log(arr3);