let student = {
    name: 'Abhishek',
    phone: 9097735184,
    address: {
        country: 'India',
        state: {
            code: 'BR',
            pin: 800008
        }
    }
}

let student2 = student;
student2.name = 'abcd';

// console.log(student);
// console.log(student2);

let student3 = { ...student };//shallow copy
student3.name = 'Abhishek';

// console.log(student);
// console.log(student3);

// student3.address.country = 'US';

// console.log(student);
// console.log(student3);

// student3 = { ...student, address: { ...student.address } };

// student3.address.country = 'US';

// console.log(student);
// console.log(student3);

// student3.address.state.code = 'BLR';

// console.log(student);
// console.log(student3);

// student3 = { ...student, address: { ...student.address, state: { ...student.address.state } } }; //deep copy


// student3.address.state.code = 'BLR';

// console.log(student);
// console.log(student3);

let student4 = JSON.parse(JSON.stringify({ ...student }));//Deep Copy Shortcut

student4.address.state.code = 'BLR';
student4.address.state.pin = 560037;
console.log(student);
console.log(student4);
