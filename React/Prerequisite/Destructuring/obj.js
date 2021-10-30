const student = {
    displayName: 'Abhishek',
    phone: 9097735184
}


let firstName = student.displayName;
let phoneNo = student.phone;
console.log(firstName);
console.log(phoneNo);

// let { displayName } = student;
// console.log(displayName);

let { displayName, phone } = student;

console.log(displayName, phone);