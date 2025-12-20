let score = "33asd"
let score1 = undefined
let score2 = null
let score3 = true

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)

// console.log(typeof valueInNumber)
// console.log(typeof valueInNumber1)
// console.log(typeof valueInNumber2)
// console.log(typeof valueInNumber3)

// console.log(valueInNumber)
// console.log(valueInNumber1) 
// console.log(valueInNumber2)
// console.log(valueInNumber3)


// "33" => 33
// "33ads" => NaN
// true/false => 1/0

let isLoggedIn = 1
let boolenIsLoogedIn = Boolean(isLoggedIn)
// console.log(boolenIsLoogedIn);
// console.log(typeof boolenIsLoogedIn);

// "" => false
// "hjt" => true


let someNum = 33
let stringNumber = String(someNum)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********** Operations *********** 

let val = 3
let negVal = -val
// console.log(negVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/4);
// console.log(2%3);


const str1 = "Sheshank"
const str2 = " Mahipal"
const str3 = str1 + str2
// console.log(str3)

// //precedence from ecma
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 +2);
// console.log(1 + 2 + "2");

// Key rule to remember
// 👉 The + operator does two different things:
// Number + Number → Addition
// String + Anything → String concatenation
// And JavaScript evaluates expressions left to right

// All + operators have the same precedence
// What actually decides it:
// Left-to-right evaluation
// Type of the operands at each step

// Expression	Step-by-step	Result
// "1" + 2	string + number → string	"12"
// 1 + "2"	number + string → string	"12"
// "1" + 2 + 2	"1"+2 → "12" → "12"+2	"122"
// 1 + 2 + "2"	1+2 → 3 → 3+"2"	"32"

// Once a string appears in a + chain, everything to the right becomes a string

//Increment from mdn
let gameCount = 100;
++gameCount;
gameCount++;
// console.log(gameCount)

// x++ → use now, add later
// ++x → add first, use now
// ++ works only on variables
// You cannot chain ++


// ****** Comparison *******
// Try not to compare two diff datatypes

// console.log(2>1)
// console.log(2<1)
// console.log(2>=1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1)
// console.log("02">1)

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

// null is “nothing” and null is only equal to undefined , but JavaScript treats it as 0 only during numeric comparisons — never during equality checks.
// Expression	What JS does	Result
// null > 0	0 > 0	false
// null == 0	special rule(undefined)	false
// null >= 0	0 >= 0	true


// console.log(undefined > 0)
// console.log(undefined == 0)
// console.log(undefined >= 0)

// undefined > 0	NaN > 0	false
// undefined == 0	special rule	false
// undefined >= 0	NaN >= 0	false

// Equality (==)
// null == undefined → ✅ true
// null == 0 → ❌ false
// undefined == 0 → ❌ false

// 2️⃣ Relational (> < >= <=)

// null → 0
// undefined → NaN
// Any comparison with NaN → ❌ false

// console.log(null == undefined)
// console.log(null === undefined) 

// Avoid == and weird comparisons
// Use strict equality:
// null === 0        // false
// undefined === 0   // false