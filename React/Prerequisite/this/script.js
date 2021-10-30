console.log(this);

function fun1() {
    console.log(this);
}

fun1();


let obj = {

    displayName: 'Abhishek',
    fn: fun1
}

obj.fn();


function fun2() {
    console.log('fun2 : ', this);
    function abc() {
        console.log("abc : ", this);
    }

    abc();
}

let obj2 = {

    fn: fun2
}

obj2.fn();

//using bind method
function fun3() {
    console.log('fun 3 ', this);
    function abc() {
        console.log('fun 3 -> abc', this);
    }
    let res = abc.bind(this);

    res();

}

let obj3 = {
    fn: fun3
}

obj3.fn();

//using arrow function
function fun4() {
    console.log('fun 4 ', this);
    abc = () => {
        console.log('fun 4 -> abc', this);
    }; abc();


}

let obj4 = {
    fn: fun4
}

obj4.fn();