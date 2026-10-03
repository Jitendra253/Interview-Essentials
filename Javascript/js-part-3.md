# Question: What is the Difference Between var, let, and const?

## 20-Second Interview Answer

> `var`, `let`, and `const` are used to declare variables in JavaScript. `var` is function-scoped and can be redeclared and reassigned. `let` is block-scoped and can be reassigned but not redeclared. `const` is block-scoped and cannot be reassigned after initialization.

---

# Easy Remember

| Feature | var | let | const |
|----------|-----|-----|--------|
| Scope | Function | Block | Block |
| Reassign | Yes | Yes | No |
| Redeclare | Yes | No | No |
| Hoisted | Yes | Yes | Yes |

---

# Example

```javascript
var a = 10;
var a = 20; // Allowed

let b = 10;
// let b = 20; ❌

const c = 10;
// c = 20; ❌
```

---

# One-Line Interview Summary

`var` is old and function-scoped, `let` is block-scoped and reassignable, and `const` is block-scoped and cannot be reassigned.


# Question: What is the Difference Between == and ===?

## 20-Second Interview Answer

> `==` compares only values after type conversion, while `===` compares both value and data type without type conversion. In modern JavaScript, `===` is preferred because it gives more predictable results.

---

# Easy Remember

```javascript
==
Loose Equality
```

```javascript
===
Strict Equality
```

---

# Example

```javascript
5 == "5"
```

Output:

```javascript
true
```

---

```javascript
5 === "5"
```

Output:

```javascript
false
```

Because:

```javascript
number !== string
```

---

# One-Line Interview Summary

`==` checks value only after type conversion, while `===` checks both value and type.

# Question: What are call(), apply(), and bind()?

## 20-Second Interview Answer

> `call()`, `apply()`, and `bind()` are methods used to control the value of `this` inside a function. `call()` and `apply()` execute the function immediately, while `bind()` returns a new function.

---

# Easy Remember

```javascript
call()
Arguments Separately
```

```javascript
apply()
Arguments As Array
```

```javascript
bind()
Returns New Function
```

---

# Example

```javascript
const user = {
  name: "John"
};

function greet(city) {
  console.log(this.name, city);
}

greet.call(user, "Cuttack");
```

Output:

```javascript
John Cuttack
```

---

```javascript
greet.apply(user, ["Cuttack"]);
```

Output:

```javascript
John Cuttack
```

---

```javascript
const fn =
  greet.bind(user, "Cuttack");

fn();
```

Output:

```javascript
John Cuttack
```

---

# One-Line Interview Summary

`call()` and `apply()` invoke a function immediately, while `bind()` returns a new function with a fixed `this` value.

# Question: What is a Higher Order Function?

## 20-Second Interview Answer

> A Higher Order Function is a function that takes another function as an argument or returns a function. Examples include `map()`, `filter()`, and `reduce()`.

---

# Example

```javascript
function greet() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(greet);
```

---

# Common Examples

```javascript
map()
filter()
reduce()
forEach()
```

---

# One-Line Interview Summary

A Higher Order Function is a function that accepts or returns another function.

# Question: What is a Pure Function?

## 20-Second Interview Answer

> A Pure Function always returns the same output for the same input and does not modify external data or create side effects.

---

# Example

```javascript
function add(a, b) {
  return a + b;
}
```

Pure Function:

```javascript
add(2, 3);
```

Always returns:

```javascript
5
```

---

# Not Pure

```javascript
let count = 0;

function increment() {
  count++;
}
```

Because it changes external data.

---

# One-Line Interview Summary

A Pure Function produces the same output for the same input and has no side effects.

# Question: What is the Difference Between map() and forEach()?

## 20-Second Interview Answer

> `map()` creates and returns a new array, while `forEach()` only loops through the array and does not return a new array.

---

# Example

```javascript
const nums = [1, 2, 3];

const result =
  nums.map(num => num * 2);

console.log(result);
```

Output:

```javascript
[2, 4, 6]
```

---

```javascript
const nums = [1, 2, 3];

const result =
  nums.forEach(num => num * 2);

console.log(result);
```

Output:

```javascript
undefined
```

---

# One-Line Interview Summary

`map()` returns a new transformed array, while `forEach()` is used only for iteration.

# Question: What is the Difference Between Synchronous and Asynchronous JavaScript?

## 20-Second Interview Answer

> Synchronous code executes one line at a time and waits for each task to complete. Asynchronous code allows long-running tasks to run in the background without blocking other code.

---

# Synchronous Example

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```javascript
A
B
C
```

---

# Asynchronous Example

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
```

Output:

```javascript
A
C
B
```

---

# One-Line Interview Summary

Synchronous code blocks execution, while asynchronous code allows other tasks to run without waiting.

# Question: What is Error Handling in JavaScript?

## 20-Second Interview Answer

> Error Handling is the process of managing runtime errors using `try`, `catch`, and `finally` blocks so that the application does not crash unexpectedly.

---

# Example

```javascript
try {
  console.log(a);
} catch (error) {
  console.log(error.message);
}
```

Output:

```javascript
a is not defined
```

---

# finally

```javascript
try {
  console.log("Try");
} finally {
  console.log("Finally");
}
```

Output:

```javascript
Try
Finally
```

---

# One-Line Interview Summary

JavaScript uses `try`, `catch`, and `finally` to handle errors gracefully.

# Question: What is an IIFE?

## 20-Second Interview Answer

> IIFE stands for Immediately Invoked Function Expression. It is a function that runs immediately after it is defined.

---

# Example

```javascript
(function() {
  console.log("Hello");
})();
```

Output:

```javascript
Hello
```

---

# Arrow Function IIFE

```javascript
(() => {
  console.log("Hello");
})();
```

---

# Why Use IIFE?

- Avoid global variables
- Create private scope
- Execute code immediately

---

# One-Line Interview Summary

An IIFE is a function that executes immediately after it is created.

# Question: What are Important Object Methods in JavaScript?

## 20-Second Interview Answer

> JavaScript provides built-in object methods such as `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.freeze()`, and `Object.seal()` to work with object properties.

---

# Object.keys()

```javascript
const user = {
  name: "John",
  age: 25
};

console.log(
  Object.keys(user)
);
```

Output:

```javascript
["name", "age"]
```

---

# Object.values()

```javascript
console.log(
  Object.values(user)
);
```

Output:

```javascript
["John", 25]
```

---

# Object.entries()

```javascript
console.log(
  Object.entries(user)
);
```

Output:

```javascript
[
  ["name", "John"],
  ["age", 25]
]
```

---

# Object.freeze()

```javascript
const user = {
  name: "John"
};

Object.freeze(user);

user.name = "David";

console.log(user.name);
```

Output:

```javascript
John
```

Cannot add, delete, or modify properties.

---

# Object.seal()

```javascript
const user = {
  name: "John"
};

Object.seal(user);

user.name = "David";
```

Modification allowed.

Adding or deleting properties is not allowed.

---

# One-Line Interview Summary

`Object.keys()`, `Object.values()`, and `Object.entries()` help read object data, while `Object.freeze()` and `Object.seal()` control object modifications.