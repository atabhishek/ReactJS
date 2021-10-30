const arr = [1, 2, 3, 4];

// const [a, b] = arr;
// console.log(a, b);

// const [a, b, , d] = arr;
// console.log(a, b, d)


// const [a, b, c, d, extra] = arr;
// console.log(a, b, c, d, extra)


const [a, b, c, d, extra = 5] = arr;
console.log(a, b, c, d, extra)

