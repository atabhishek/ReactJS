const student = {
    dislayName: 'Abhishek',
    phone: 9097735184,
    address: {
        country: 'India',
        state: {
            code: 'BR',
            pin: 800008
        }
    }
}




const { address } = student;
console.log(address);

const { address: { country } } = student;
console.log(country);


const { address: { state: { code } } } = student;
console.log(code);


const localForecast = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 66, high: 79 }
}

const { today: { low: lowToday } } = localForecast;
console.log(lowToday);

const { yesterday: { high: highYstdy } } = localForecast;
console.log('High Yersterday : ', highYstdy)