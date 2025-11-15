const accId = 45963
let accEmail = "sheshankm@yahoo.com"
var accPassword = "123455"
accCity = "Sgnr"
let accState; 

// const can't be changed
// accId = 45687 --not allowed

accEmail = "sheshank.01@gmail.com"
accPassword = "7894561323"
accCity = "Blr"

/*
Prefer not to use VAR bcoz of issue with block & functional scope.  
For accState no value is defined so it's undefined.
*/

console.log(accId);
console.table([accId,accEmail,accPassword,accCity,accState])
