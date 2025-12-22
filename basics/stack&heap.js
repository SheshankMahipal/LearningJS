// // MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management

// STACK & HEAP
// 🔹 What is Stack?

// Stores primitive values

// Stores function call info

// Stores references to heap

// Fast & auto-cleared

// let a = 10;

// Stack
// a → 10

// 🔹 What is Heap?

// Stores objects, arrays, functions

// Flexible & dynamic size

// Cleaned by Garbage Collector

// let obj = { x: 1 };

// Stack          Heap
// obj → 0x123 → { x: 1 }

// 🔹 Primitive vs Object (CORE RULE)
// Type	Stored as	Copy behavior
// Primitive	Value	Copy by value
// Object	Reference	Copy by reference
// 🔹 Primitive example
// let a = 5;
// let b = a;
// b = 10;


// ✔ a is still 5

// 🔹 Object example
// let a = { x: 1 };
// let b = a;
// b.x = 2;


// ✔ a.x becomes 2

// 🔹 Function Call Stack

// Functions are pushed

// Finished functions are popped

// function one() { two(); }
// function two() {}
// one();

// two()
// one()
// global

// 🔹 Garbage Collection (Enough to know)

// JS removes unreachable objects

// Uses Mark & Sweep

// Circular references are handled

// Stack is cleared automatically

// 🔹 One Golden Line ⭐

// Primitives live in stack (copied by value),
// objects live in heap (copied by reference).
