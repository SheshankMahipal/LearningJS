//1️⃣ Why Memory Management Exists

// Programs use memory to store data

// Unused memory must be freed

// JavaScript handles this automatically using Garbage Collection (GC)

// 2️⃣ Stack vs Heap (Quick Recap)
// Area	Stores	Behavior
// Stack	Primitives, function calls, references	Fast, auto-cleared
// Heap	Objects, arrays, functions	Dynamic, GC-managed
// 3️⃣ Garbage Collection (Core Idea)

// If a value is unreachable, it is removed from memory.

// JavaScript does NOT free memory based on usage — only reachability.

// 4️⃣ GC Roots (Starting Points)

// Garbage collector starts from:

// Global objects (window, globalThis)

// Call stack variables

// Closures

// Active DOM nodes

// Active event listeners & timers

// Anything reachable from these → kept

// 5️⃣ Reference Counting (Concept Only/Older Algo)
// How it works:

// Count how many references point to an object

// If count = 0 → delete

// Example:
// let a = {};
// let b = a;
// a = null;
// b = null;


// ✔ Object deleted

// ❌ Problem:
// a.other = b;
// b.other = a;

// Circular references → never reach count 0 ❌

// 📌 JavaScript does NOT use this algorithm

// 6️⃣ Mark-and-Sweep (Used by JavaScript)
// Step 1: Mark

// Start from GC roots

// Mark all reachable objects

// Step 2: Sweep

// Delete everything unmarked

// ✔ Handles circular references
// ✔ Modern & reliable

// 7️⃣ Memory Leaks (What GC Cannot Fix)

// Leaks happen when objects are still reachable but no longer needed

// Common causes:

// Global variables

// Unremoved event listeners

// Uncleared timers

// Closures holding large data

// Detached DOM nodes

// Growing arrays / caches

// 8️⃣ Fix Patterns (Must Remember)

// ✔ Use let / const
// ✔ Remove event listeners
// ✔ Clear intervals & timeouts
// ✔ Set unused references to null
// ✔ Use WeakMap / WeakSet
// ✔ Limit cache size

// 9️⃣ WeakMap & WeakSet (Leak-Safe)

// Keys are weakly referenced

// Automatically GC’d

// Ideal for DOM-related data

// const wm = new WeakMap();
// wm.set(domNode, data);

// 🔟 Chrome Heap Snapshot (Purpose)

// Used to:

// Find memory leaks

// Compare memory before & after actions

// Trace who is keeping objects alive

// Key focus:

// Retained size

// Retainers chain

// ⭐ One Golden Rule

// Garbage collector removes what is unreachable — not what you don’t want.

// 🧠 One-Line Interview Summary

// JavaScript manages memory using stack, heap, and a mark-and-sweep garbage collector based on reachability.