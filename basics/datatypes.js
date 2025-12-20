 // "use strict"; //treat all JS code as newer version, currently newer version is get picked.

// alert(3+3) // we are using node.js not browser
// Focus on code readability. 

// Docs: 
// https://tc39.es/ecma262/ ECMA Script standards set for JS. All browser compatiable
// MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript

let name = "Sheshank"
let age = 25
let isLoggedIn = false
let state = null

//number => range 2 to power 53 tak
// bigint
// boolean = true/false
// string = ""
// null = standalone value/type (is a object type)
// undefined
// symbol = unique


//object

console.log(typeof null); // object

//Reason why typeof null is object: https://www.google.com/search?q=why+typeof+null+is+object+in+javascript&oq=why+typeof+null+is+object&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyCQgAEEUYORiABDIHCAEQABiABDIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjINCAUQABiGAxiABBiKBTIKCAYQABiABBiiBNIBCDgwMjlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
// type tag to identify the value's type. 
// object = 000 (binary type tag)
// null has zero memory address so it is also 000 type tag 
// bcoz of this when typeof opr is applied on null it returns object since object & null both have 000 type tag defined.

console.log(typeof undefined); // undefined

