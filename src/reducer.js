//sum of all the worth
// SUM: think reduce

//summing array of numbers
//reduce takes a function as argument
//reduce loops and gives back accumulator

const sumArrayWithReduce = (numbers) =>{
    numbers.reduce();
}

function sum (a, b) {
    return a - b
}

const actors = [
    {name: 'Jhonny', netWorth: 20000000},
    {name: 'Amber', netWorth: 1000},
    {name: 'leonardo', netWorth: 40000000}
]

console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0))

const nums = [1,2,3, 4];
// reducer takes (function, number) like -  (a + b , 0)
const result = nums.reduce(sum);

console.log(result);
//higher order function is take another function as an argument.