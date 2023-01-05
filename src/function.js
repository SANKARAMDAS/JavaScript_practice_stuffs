function sayMyName() {  //function sayMyName has an argument called name
    console.log('Testing');
}

// sayMyName();


function sayMyName2(name) {  //function sayMyName has an argument called name
    console.log(name);
}

sayMyName2('San.D');


//this is a function called "greetings"
//it has 1 argument called "name"
//console the name
function greetings(name) {
    greet = 'hi ' + name + ' ,nice to meet you!';  //concatenate

    greet = `hi ${name}, nice to meet you!`;
    console.log(greet);
}

// greetings('Testing');

//multiple arguments on a function
function sum(a, b) {
    //return use for to do or combined result
    return a + b;
}

sum1 = sum(1, 2 );
console.log(sum1);