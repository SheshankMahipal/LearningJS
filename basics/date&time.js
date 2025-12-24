// 🎇 Date & Time:
// ⚽ 1. Date Methods (get and set):

// Date objects represent a single moment in time in a platform-independent format.
//  Date objects contain a number that represents milliseconds since 1 January 1970 UTC.

// Creating Date Objects: 4 ways
// 1. new Date()
// 2. new Date(year,month,day,hours,minutes,seconds,milliseconds)
// 3. new Date(milliseconds)
// 4. new Date(date string)

// 🎃 new Date():
// let curDate = new Date();
// console.log(curDate);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

//🎃 Date.now():
// Returns the numeric value corresponding to the current time-the number of milliseconds elapsed since January 1,1970 00:00:00 UTC.

// console.log(Date.now());

//🎃 new Date(year,month,day,hours,minutes,seconds,milliseconds):
// months are counted from 0 to 11.
// Jan=0 ; Dec=11

// var d = new Date(2022,5,27,4,34,30,0);
// console.log(d.toLocaleString());

//🎃 new Date(date string):
// creates a new date object from a date string.

// var d = new Date("October 13,2021 11:13:00");
// console.log(d.toLocaleString());

// 🎃 new Date(milliseconds):
// creates a new date object as zero time plus milliseconds.

// var d = new Date(0);
// var d = new Date(1609574531435);
// var d = new Date(86400000*2);

// console.log(d.toLocaleString());

// ⚽ Date Methods:
// How to get individual date:
// const cDate = new Date();

// console.log(cDate.toLocaleString());
// console.log(cDate.getFullYear());
// console.log(cDate.getMonth());
// console.log(cDate.getDate());
// console.log(cDate.getDay());

// How to set individual date:
// const cDate = new Date();

// console.log(cDate.setFullYear(2021));
// console.log(cDate.setMonth(4));
// console.log(cDate.setDate(6));

// sets in milliseconds:
// ⚽ Time Methods:
//How to get time:

// const cTime = new Date();

// console.log(cTime.getTime());
// console.log(cTime.getHours());
// console.log(cTime.getSeconds());
// console.log(cTime.getMinutes());
// console.log(cTime.getMilliseconds());

//How to set time:
// const cTime = new Date();

// console.log(cTime.setTime());
// console.log(cTime.setHours(5));
// console.log(cTime.setSeconds(5));
// console.log(cTime.setMinutes(5));
// console.log(cTime.setMilliseconds(5));

// ⌛ Ques:

// var t = new Date().toLocaleTimeString();
// console.log(t);

// var d = new Date().toLocaleDateString();
// console.log(d);

// var td = new Date().toLocaleString();
// console.log(td);
