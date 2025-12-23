// 🎇 Strings (imp):
// String is zero or more characters written inside quotes, used for storing and manipulating text. single and double quotes can be used.
// can be created as primitives, from string literals, or as objects, using the String() constructor.

//  let myName = 'sheshank';
//  let myChannelName = 'mahipal';

// let name3 = new String("shank"); Now string is like a object: key value pair "0":"s", "1":"h"

// console.log(`Hello name is ${myName} and channel name is ${myChannelName}`) //modern way

// console.log(myName);
// console.log(myChannelName);
// console.log(name3);

// 🎃 String.prototype.length:
// Reflects the length of the string.

// let myName = 'Sheshank M';
// console.log(myName.length);

// ⚽ Escape Character:
// let anySent = "We the \"best\" music";
//  let anySent = "We the 'best' music";
// console.log(anySent);

// if u don't want to mess,simply use the alternate quotes.

// ⚽ Finding a string in a string.
// String.prototype.indexOf(searchValue [, fromIndex])
// it returns the index of (position) the first occurence of a specified text in a string.

// const data = 'Sheshank';
// console.log(data.indexOf('h', 2)); //counts positions from zero.

//🎃 String.prototype.lastIndexOf(searchValue [, fromIndex])
//returns the index within the calling string object of the last occurence of search value , or -1 if not found.

// const data = 'SheshankSh';
// console.log(data.lastIndexOf('h'));

// ⚽ Searching for a string in a string.
// String.prototype.search(regexp)
// The search() searches a string for a specified value and returns the position of the match.

// const data = 'Sheshank Mahipal';
// let data1 = data.search("Mahipal");
// console.log(data1);

// doesn't take second argument as index.

// ⚽ Extracting String parts:
// There are 3 methods for extracting a part of a string.

//slice(start, end)
//substring(start, end)
//substr(start, length)

// 🎃 slice() extracts a part of a string and returns the extracted part in a new string.
// 2 parameters start and end(not included).

// var str = "Apple, kiwi, banana";
// let res = str.slice(0,5);
// let res = str.slice(7,-3); // -3 means last three elements ko remove krke.

// console.log(res);

// The original array will not change.
//Counts positions from zero.

//⌛ Ques= display only 280 ch of a string like the one used in twitter?

// let myTweet = " lorem efiwjfwo ecdjweoif cndcewfjw nceucewydh wijnewijchfw uhurhrhrhrfhw qwdhuwdodwjdqw9idqwio jeidjwckicjwicjwivhr jcewicjeiceiejewic ijcdicjwiociovjrw9v wjceoiccjeijwe ejcei9fjecjcjc9 wdjcdicjsiwqw0du cjicjxjjvv9vdjd0cdw0sjjvcj vvjr89eruvufji 9fjvf89vjc dud98d jdc89u dcdi jijde9d vhe9vh erj9hw jc89 jdcjdij cudhvr9 hv0cd cj89 ";
// let actual = myTweet.slice(0,280);
// console.log(myTweet);
// console.log(actual.length);

// 🎃 substring():
// similar to Slice method 
// diff is that it can't accept negative indexes.

// var str = "Apple, kiwi, banana";
// let res = str.substring(7,11);
// let res = str.substring(8,-5); // start begining se hoga abb.

// console.log(res);

// If we give -ive value then the characters are counted from 0th pos.


// 🎃 substr(): // deprecated
// similar to slice
// diff is that second parameter specifies the length of the extracted part.

// var str = "Apple, kiwi, banana";
// let res = str.substr(7);
// let res = str.substr(-6); // Agar back side se extract krna ho toh use substr.
// console.log(res);

// ⚽ Replacing String content():
// String.prototype.replace(searchFor , replacewith)
// replaces a specified value with another value in a string.

// let biodata = `I am Sheshank mahipal Sheshank`;
// let replace = biodata.replace('Sheshank' , 'sheshank' );
// console.log(replace);

// No change in original string.
// By default, the replace() method replaces only the 1st match.
// case sensitive SHESHANK will not work.

// ⚽ Extracting String characters:
// There are 3 methods for Extracting String characters.

//charAt(pos)
//charCodeAt(pos)
// Property Access

// 🎃 charAt() method:
// returns the character at a specified index (pos) in a string.

// let str = "HELLO WORLD";
// console.log(str.charAt(9)); //L

// 🎃 charCodeAt() method:
// returns the unicode of the character at a specified index in a string.
// The method returns a UTF-16 code (an integer b/w 0 and 65535)

// var str = "HELLO WORLD";
// console.log(str.charCodeAt(0));

// The unicode std provides a unique number for every character, no matter the platform,device,application,or language. UTF-8 is a popular unicode encoding which has 88-bit code units.

//⌛ Ques-Return the unicode of the last ch in a string

// var str = "HELLO WORLD";
// let lastChar = str.length-1;
// console.log(str.charCodeAt(lastChar)); // Unicode of D is 68.

// 🎃 Property Access ES5(2009) allows property access on strings.

// var str = "HELLO WORLD";
// console.log(str[2]); // Array jaisa hai kuch kuch.

// ⚽ Other useful methods:

// 🎃 upper and lowercase:

// let name = "Sheshank Mahipal";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// 🎃 concat() method:
// joins two or more strings.

// let fName = "Sheshank";
// let lName = "Mahipal";

// console.log(fName.concat(lName));
// console.log(`${fName} ${lName}`);
// console.log(fName + lName);
// console.log(fName.concat(" " ,lName));

//🎃 trim() method:
// removes whitespace from both sides of a string.

// var str = "       Sheshank   ";
// console.log(str.trim());

// 🎃 Converting a String to an array
// A string can be converted to an array with the split() method:

// var text = "a,b,c,|, d,e";
// console.log(text.split(",")); //split on commas
// console.log(text.split("|")); //split on pipe
// console.log(text.split(" ")); //split on spaces