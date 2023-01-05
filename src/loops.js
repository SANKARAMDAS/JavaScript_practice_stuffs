const fruits = ['Apple', 'Bananan', 'mango','orange', 'coconut','Apple', 'Bananan', 'mango','orange', 'coconut','Apple', 'Bananan', 'mango','orange', 'coconut','Apple', 'Bananan', 'mango','orange', 'coconut'];

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
new way
for (const fruit of fruits) {
    console.log(fruit);
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

for (let i =0; i<numbers.length; i++) {
    console.log(numbers[i]);
}

let result =[];

for(const numb of numbers) {
    // console.log(numb * 2 );  //multiply each number with 2
     result.push(numb * 2);  //double down the number, get new one.
}

console.log(result);

//function
const double = (numbers) => {
    let result = [];
    for(const numb of numbers) {
     result.push(numb ** 2);  //exponential
}
    return result;
}
console.log(double([1,2,3,4,5,6]))

const howManyNumbers =  () => {

    // let result = 0;
    //
    // for (const index in phrase){
    //     // console.log(Number (letter) + 1); //it will start from 1, not 0
    //     console.log(Number(index) + 1)
    //     result = Number(index) + 1
    // }
    return  { result: phrase.length }
}
const phrase = prompt('write your phrase');

console.log(howManyNumbers(phrase));


const sumArray = (numbers) => {
     let result = 0;
     //for lop
    for(const number of numbers){
        console.log(number)
        result = result + number
    }
    return {result}
}

const nums = [1,2,3,4,5]
console.log(sumArray(nums));


// sum of Array through loop
const sumNumb = (numbers) => {
    let result = 0;
    for (const number of numbers) {
        console.log(number);
        result = result + number;
    }
    return {result};
}

const numb = [1,2,3];
console.log(sumNumb(numb));

// loop through numbers
const max = (numbers) => {

    let result = numbers[0];

    for (const number of numbers) {
       if (number > result) {
           result = number
       }
    }

    return {result};
}

console.log(max([1,2,3,4,5,6,1,20,1]));
//
//
//function letter frequency return
const ltFrequency = (phrase) =>{
    console.log(phrase);

    //make a frequency object{}
    let frequency = {}
    for (const letter of phrase){
        //check the letter exist in frequency
        if (letter in frequency) {
            //if exist- increment value by 1
            frequency[letter] = frequency[letter] + 1 ;
            or
            frequency[letter] +=1 ;
            or
            frequency[letter] ++;
        } else {
            //otherwise, set value to 1
            frequency[letter] = 1;
        }
        console.log(letter);
    }
    return frequency
}

console.log(ltFrequency('haha'));
//

//word frequency

const wordFrequecy = (phrase) => {
  const words = phrase.split(' ');
  return  letterFrequency(words);
}

console.log(wordFrequecy('lol what lol'));


//map - loops and returns array
// filter - loops and return an array with matching conditions
// higher order function   reducer
let result = [1,2,3,4].map(numbers => numbers * 2)
console.log(result)
const  doubleMap = (numbers) => {
  return numbers.map(numbers => numbers * 2)
}

console.log(doubleMap([1,2,3]))

//filter
const filter = (numbers, greaterThan) => {
  let result = [];
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}

console.log(filter([1,2,3,4,5,6], 3))


const nums = [1,2,3,4,5,6]
console.log(nums.filter(num => num >= 2))

const actors = [
  {name: 'Jhonny', netWorth: 20000000},
  {name: 'Amber', netWorth: 1000},
  {name: 'leonardo', netWorth: 40000000}
]

let result = actors.filter(actor => actor.netWorth > 1000);
console.log(result);
let names = actors.filter(actor => actor.name).join(', ');
playground.innerHTML = `<h1>${JSON.stringify(result)}</h1>`
