function calculatorFoodAmount(food, tip){  // this function depends(argument) on how much you want to pay for the food and how much is the tip you want to give
   tipPercentage = tip / 100; //
   tipAmount = food * tipPercentage;
   total = sum(food, tipAmount);

   return total;
}

console.log(calculatorFoodAmount(100, 20));



//Arrow function
const sumArrow = (a, b) => a + b;

console.log(sumArrow(10, 20 ))


//Arrays
const groceries = ['apple', 'banana', 'orange', 'coconut'];


groceries.push('mango'); //push use to add something
// console.log(groceries);

// console.log(groceries.slice(1, 4));  //start from 0 and upto 3

// console.log(groceries.indexOf('mango')); //index of the fruits return

// console.log(groceries.length);  //returns the number of elements u have,



//OBJECTS{}- are type of variable but have something called key-value

const person = {
   name: 'Abcd',
   rollno: 'number',
}

//diff way to access of an object
console.log(person.name); // called dot notation,
console.log(person['rollno']); // called bracket notation;

//assign object
person.phone = '1-22-333-4444';
console.log(person.phone);
console.log(person['phone']);
console.log(person);


//this function has 2 arguments
//methods inside of an object -----
// object - car
// properties - car.name = Fiat | car.color = white
//Methods- car.start() | car.drive()
const poople = (name, shirt) => {
    const person2 = {
        name: name,
        shirt: shirt,
        property: 10000,
        liabilities: 5000,
        netWorth: function () {
            return this.property - this.liabilities
        }
    }
    const intro = `Hi, my name ${person2.name} is and color of the shirt is ${person2.shirt} and my prtperty is $${person2.netWorth()} USD`;
    return intro;
}


console.log(poople('Leonardo', 'white'));



