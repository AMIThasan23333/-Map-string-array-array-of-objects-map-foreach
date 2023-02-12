

const numbers = [1,2,3,4,67,8];


const totlaly = numbers.reduce(( previous, current) => previous + current, 0)

console.log(totlaly)

 const total = numbers.reduce((previous, current) => {

    console.log(previous, current);

    return previous + current;

 }, 0 );

