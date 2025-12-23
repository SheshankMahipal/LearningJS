//Number 

// const score = 400
// console.log(score)

// const age = new Number(2500000)
// console.log(age)

// console.log(age.toString().length)
// console.log(age.toFixed(2))
// console.log(age.toLocaleString('en-IN'))

// const num = 1223.487

// console.log(num.toPrecision(4))
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

//Math Object:
// Allows you to perform mathematical tasks on numbers.

//  console.log(Math.PI); // Value of pi.

//2. Math.round():
// returns the value of x rounded to its nearest integer.

// let num = 10.89;
// console.log(Math.round(num));

//3. Math.pow(x,y):
// returns the value of x powers of y.

// console.log(Math.pow(3,4));
// console.log(3**4);

//4. Math.sqrt(x):
// returns the sqaure root of x.

// console.log(Math.sqrt(36));
// console.log(Math.sqrt(64));

//5. Math.abs(x):
// returns the absolute (+ive) value of x.

// console.log(Math.abs(-55));
// console.log(Math.abs(45-55));

//6. Math.ceil(x):
// returns the value of x rounded upto its nearest integer.

// console.log(Math.ceil(4.51)); //5
// console.log(Math.ceil(99.00001));  //100
// console.log(Math.ceil(-6.99)); // -6

// value mein decimal se upr jaate hi value increment hota hai.

// 7. Math.floor():
// returns the value of x rounded down to its nearest integer.

// console.log(Math.floor(4.99)); //4
// console.log(Math.floor(99.99)); //99

//8. Math.min():
// can be used to find the lowest value in a list of arguments.

// console.log(Math.min(5,4,23,67));

//9. Math.max():
// can be used to find the highest value in a list of arguments.

// console.log(Math.max(5,4,23,67));

//10. Math.random():
// returns a random number b/w 0 (include) and 1(excluded).

// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1 )) + min)

//11. Math.trunc():
// returns only the integer part of a number.

// console.log(Math.trunc(99.285));

//Ques:
// If the argument is positive number: Math.trunc() == Math.floor().
// If the argument is negative number: Math.trunc() == Math.ceil().

// console.log(Math.trunc(4.6));
// console.log(Math.floor(4.6)); //rounded down.

// console.log(Math.trunc(-4.6));
// console.log(Math.ceil(-4.6)); // value decimal se upr jaate hi hai roundoff. 