# JavaScript Interview Notes

# Question: What are Variables in JavaScript?

## Interview Answer

A variable is a container used to store data in memory. It allows us to save values and reuse them throughout the program.

In JavaScript, variables can store different types of data such as numbers, strings, booleans, objects, arrays, and functions.

## Easy Remember

Variable = Named Storage Location for Data

## Syntax

```javascript
let name = "John";
const age = 25;
var city = "Bhubaneswar";
```

## Types of Variable Declarations

### 1. var

- Function-scoped
- Can be reassigned
- Can be redeclared
- Hoisted and initialized with `undefined`

```javascript
var name = "John";
var name = "Peter"; // Allowed
```

### 2. let

- Block-scoped
- Can be reassigned
- Cannot be redeclared in the same scope

```javascript
let age = 25;
age = 26; // Allowed
```

### 3. const

- Block-scoped
- Cannot be reassigned
- Must be initialized during declaration

```javascript
const PI = 3.14;
```

## Example

```javascript
let username = "Jitendra";
let experience = 3;

console.log(username);
console.log(experience);
```

## Real-world Use Cases

- Store user information
- Store API responses
- Manage application state
- Perform calculations

## Common Follow-up Questions

### What is the difference between let, const, and var?

| Feature | var | let | const |
|----------|-----|-----|-------|
| Scope | Function | Block | Block |
| Reassign | Yes | Yes | No |
| Redeclare | Yes | No | No |
| Hoisting | Yes | Yes | Yes |

### Which one should we use most of the time?

Use `const` by default.

Use `let` when the value needs to change.

Avoid `var` in modern JavaScript because it can cause unexpected behavior due to function scope and redeclaration.

## One-Line Interview Summary

A variable is a named container used to store and manage data in memory, and JavaScript provides `var`, `let`, and `const` to declare variables.

# Question: What are Data Types in JavaScript? Explain Primitive vs Reference Data Types.

## Interview Answer

JavaScript data types are divided into two categories:

1. Primitive Data Types
2. Reference (Non-Primitive) Data Types

The main difference is that primitive values are stored directly in memory, while reference values are stored by reference (memory address).

## Easy Remember

- Primitive → Stores Actual Value
- Reference → Stores Memory Address (Reference)

## Primitive Data Types

Primitive data types are immutable and stored directly in memory.

### Types of Primitive Data Types

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

### Example

```javascript
let name = "Jitendra";
let age = 25;
let isActive = true;
let city;
let data = null;
let id = Symbol("id");
let bigNumber = 12345678901234567890n;
```

## Characteristics of Primitive Data Types

- Store actual value
- Immutable
- Compared by value
- Copied by value

### Example

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Here, changing `b` does not affect `a` because a copy of the value is created.

---

## Reference (Non-Primitive) Data Types

Reference data types store a reference (memory address) instead of the actual value.

### Types of Reference Data Types

- Object
- Array
- Function
- Date
- Map
- Set

### Example

```javascript
const user = {
  name: "Jitendra",
  age: 25
};

const fruits = ["Apple", "Mango"];

function greet() {
  console.log("Hello");
}
```

## Characteristics of Reference Data Types

- Stored by reference
- Mutable
- Compared by reference
- Copied by reference

### Example

```javascript
let obj1 = {
  name: "John"
};

let obj2 = obj1;

obj2.name = "Peter";

console.log(obj1.name); // Peter
console.log(obj2.name); // Peter
```

Here, both variables point to the same object in memory.

---

## Primitive vs Reference

| Feature | Primitive | Reference |
|----------|-----------|-----------|
| Stores | Actual Value | Memory Address |
| Mutable | No | Yes |
| Compared By | Value | Reference |
| Copy Behavior | Copy Value | Copy Reference |
| Examples | String, Number, Boolean | Object, Array, Function |

## Comparison Example

### Primitive Comparison

```javascript
let a = 10;
let b = 10;

console.log(a === b); // true
```

Both values are the same.

### Reference Comparison

```javascript
let obj1 = { name: "John" };
let obj2 = { name: "John" };

console.log(obj1 === obj2); // false
```

Even though the content is the same, they are stored at different memory locations.

---

## Common Follow-up Questions

### Is null a primitive data type?

Yes, `null` is a primitive data type.

### Are arrays primitive or reference types?

Arrays are reference data types because they are objects in JavaScript.

### Why are objects compared as false even when their values are the same?

Because JavaScript compares their memory references, not their content.

---

## One-Line Interview Summary

Primitive data types store actual values and are copied by value, whereas reference data types store memory references and are copied by reference.


# Question: What are Operators in JavaScript?

## Interview Answer

Operators are special symbols or keywords used to perform operations on values and variables.

They help us perform tasks such as calculations, comparisons, assigning values, and checking conditions.

## Easy Remember

Operator = Performs an Operation on Data

Example:

```javascript
let sum = 10 + 5;
```

Here, `+` is an operator that adds two values.

---

# Types of Operators in JavaScript

## 1. Arithmetic Operators

Used for mathematical calculations.

| Operator | Description | Example |
|----------|-------------|---------|
| + | Addition | 10 + 5 |
| - | Subtraction | 10 - 5 |
| * | Multiplication | 10 * 5 |
| / | Division | 10 / 5 |
| % | Modulus (Remainder) | 10 % 3 |
| ** | Exponentiation | 2 ** 3 |

### Example

```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
```

---

## 2. Assignment Operators

Used to assign values to variables.

| Operator | Example |
|----------|---------|
| = | x = 10 |
| += | x += 5 |
| -= | x -= 5 |
| *= | x *= 5 |
| /= | x /= 5 |

### Example

```javascript
let x = 10;

x += 5;

console.log(x); // 15
```

---

## 3. Comparison Operators

Used to compare values.

The result is always `true` or `false`.

| Operator | Description |
|----------|-------------|
| == | Equal Value |
| === | Equal Value and Type |
| != | Not Equal |
| !== | Not Equal Value or Type |
| > | Greater Than |
| < | Less Than |
| >= | Greater Than or Equal |
| <= | Less Than or Equal |

### Example

```javascript
console.log(10 == "10");   // true
console.log(10 === "10");  // false
console.log(10 > 5);       // true
```

### Important Interview Point

```javascript
10 == "10"   // true
10 === "10"  // false
```

`==` checks only value.

`===` checks both value and data type.

Always prefer `===` in modern JavaScript.

---

## 4. Logical Operators

Used to combine multiple conditions.

| Operator | Description |
|----------|-------------|
| && | AND |
| \|\| | OR |
| ! | NOT |

### Example

```javascript
let age = 25;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // true
```

---

## 5. Increment and Decrement Operators

Used to increase or decrease a value by 1.

### Increment (++)

```javascript
let count = 5;

count++;

console.log(count); // 6
```

### Decrement (--)

```javascript
let count = 5;

count--;

console.log(count); // 4
```

---

## 6. Ternary Operator

Short form of if-else.

### Syntax

```javascript
condition ? value1 : value2;
```

### Example

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

---

## 7. Type Operator

### typeof

Used to find the data type of a value.

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 100);     // number
console.log(typeof true);    // boolean
```

---

## Common Follow-up Questions

### What is the difference between == and ===?

- `==` compares only values.
- `===` compares both values and data types.

```javascript
10 == "10"   // true
10 === "10"  // false
```

### Which comparison operator should be preferred?

Always use `===` because it avoids type coercion and gives more predictable results.

### What is the use of the ternary operator?

It is a shorthand way to write simple if-else conditions.

---

## One-Line Interview Summary

Operators are symbols that perform operations on values and variables, such as arithmetic calculations, comparisons, assignments, and logical evaluations.
# Question: What are Function Declaration, Function Expression, and Arrow Function in JavaScript?

## Interview Answer

A function is a reusable block of code designed to perform a specific task.

In JavaScript, functions can be created in three common ways:

1. Function Declaration
2. Function Expression
3. Arrow Function

The main differences are in syntax, hoisting behavior, and how they handle `this`.

## Easy Remember

- Function Declaration → Traditional way, fully hoisted
- Function Expression → Function stored in a variable
- Arrow Function → Shorter syntax, introduced in ES6

---

# 1. Function Declaration

A function is declared using the `function` keyword and a function name.

## Syntax

```javascript
function greet() {
  console.log("Hello");
}
```

## Example

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
```

## Hoisting

Function declarations are fully hoisted.

```javascript
sayHello();

function sayHello() {
  console.log("Hello");
}
```

Output:

```javascript
Hello
```

This works because the entire function is moved to the top during the creation phase.

---

# 2. Function Expression

A function is assigned to a variable.

## Syntax

```javascript
const greet = function () {
  console.log("Hello");
};
```

## Example

```javascript
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 4));
```

## Hoisting

Function expressions are not fully hoisted.

```javascript
sayHello();

const sayHello = function () {
  console.log("Hello");
};
```

Output:

```javascript
ReferenceError
```

Only the variable is hoisted, not the function definition.

---

# 3. Arrow Function

Arrow functions were introduced in ES6.

They provide a shorter syntax for writing functions.

## Syntax

```javascript
const greet = () => {
  console.log("Hello");
};
```

## Example

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));
```

### Short Form

```javascript
const add = (a, b) => a + b;
```

If there is only one expression, `return` is implicit.

---

# Key Differences

| Feature | Function Declaration | Function Expression | Arrow Function |
|----------|---------------------|--------------------|----------------|
| Named Function | Yes | Optional | Usually Anonymous |
| Hoisted | Yes | No | No |
| Syntax | Traditional | Function in Variable | Shortest |
| Own `this` | Yes | Yes | No |
| Suitable for Object Methods | Yes | Yes | Usually No |

---

# this Keyword Difference

## Regular Function

```javascript
const user = {
  name: "John",
  greet: function () {
    console.log(this.name);
  }
};

user.greet();
```

Output:

```javascript
John
```

`this` refers to the object.

---

## Arrow Function

```javascript
const user = {
  name: "John",
  greet: () => {
    console.log(this.name);
  }
};

user.greet();
```

Output:

```javascript
undefined
```

Arrow functions do not have their own `this`.
They inherit `this` from their surrounding scope.

---

# When to Use

## Function Declaration

Use when creating reusable functions that need hoisting.

```javascript
function calculateTotal() {}
```

## Function Expression

Use when assigning functions to variables or passing them as values.

```javascript
const calculateTotal = function () {};
```

## Arrow Function

Use for callbacks and short functions.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);
```

---

# Common Follow-up Questions

### Which functions are hoisted?

Only Function Declarations are fully hoisted.

### Do arrow functions have their own `this`?

No. Arrow functions inherit `this` from the surrounding scope.

### Can arrow functions be used as constructors?

No.

```javascript
const Person = (name) => {
  this.name = name;
};

new Person("John"); // Error
```

### Which function type is most commonly used in React?

Arrow Functions, because they are concise and work well with callbacks and event handlers.

---

# One-Line Interview Summary

Function Declarations are fully hoisted traditional functions, Function Expressions are functions stored in variables, and Arrow Functions are shorter ES6 functions that do not have their own `this`.


# Question: What is Scope in JavaScript? Explain Global Scope, Function Scope, and Block Scope.

## Interview Answer

Scope determines where a variable can be accessed in a program.

JavaScript has three main types of scope:

1. Global Scope
2. Function Scope
3. Block Scope

Scope helps prevent variable conflicts and controls the visibility of variables.

## Easy Remember

Scope = Where a Variable Can Be Accessed

- Global Scope → Accessible Everywhere
- Function Scope → Accessible Inside the Function Only
- Block Scope → Accessible Inside the Block Only

---

# 1. Global Scope

A variable declared outside any function or block belongs to the global scope.

It can be accessed from anywhere in the program.

## Example

```javascript
let company = "OpenAI";

function showCompany() {
  console.log(company);
}

console.log(company);
showCompany();
```

Output:

```javascript
OpenAI
OpenAI
```

## Key Point

Global variables can be accessed throughout the application.

---

# 2. Function Scope

Variables declared inside a function can only be accessed within that function.

## Example

```javascript
function greet() {
  let message = "Hello";
  console.log(message);
}

greet();

console.log(message);
```

Output:

```javascript
Hello
ReferenceError
```

## Key Point

Function-scoped variables are hidden from the outside world.

---

# 3. Block Scope

Variables declared using `let` and `const` inside a block `{}` are only accessible within that block.

Blocks are created by:

- if statements
- for loops
- while loops
- switch statements
- standalone {}

## Example

```javascript
if (true) {
  let age = 25;
  const city = "Bhubaneswar";

  console.log(age);
  console.log(city);
}

console.log(age);
```

Output:

```javascript
25
Bhubaneswar
ReferenceError
```

## Key Point

`let` and `const` are block-scoped.

---

# var vs let vs const Scope

## var (Function Scoped)

```javascript
if (true) {
  var name = "John";
}

console.log(name);
```

Output:

```javascript
John
```

`var` ignores block scope.

---

## let (Block Scoped)

```javascript
if (true) {
  let name = "John";
}

console.log(name);
```

Output:

```javascript
ReferenceError
```

---

## const (Block Scoped)

```javascript
if (true) {
  const name = "John";
}

console.log(name);
```

Output:

```javascript
ReferenceError
```

---

# Scope Chain

When JavaScript looks for a variable, it searches:

1. Current Scope
2. Parent Scope
3. Global Scope

This process is called the Scope Chain.

## Example

```javascript
let globalVar = "Global";

function outer() {
  let outerVar = "Outer";

  function inner() {
    console.log(globalVar);
    console.log(outerVar);
  }

  inner();
}

outer();
```

Output:

```javascript
Global
Outer
```

The inner function can access variables from its parent and global scope.

---

# Common Follow-up Questions

### What is Scope?

Scope defines where a variable is accessible in a program.

### Is var block-scoped?

No.

`var` is function-scoped.

### Are let and const block-scoped?

Yes.

Both `let` and `const` are block-scoped.

### What is the Scope Chain?

JavaScript searches for variables from the current scope to parent scopes until it reaches the global scope.

---

# One-Line Interview Summary

Scope determines where variables can be accessed, and JavaScript provides Global Scope, Function Scope, and Block Scope to control variable visibility and prevent conflicts.
# Question: What is Hoisting in JavaScript?

## Interview Answer

Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

This means variables and functions can be used before they are declared in the code.

However, only declarations are hoisted, not initializations.

## Easy Remember

Hoisting = JavaScript "lifts" declarations to the top before execution.

---

# Variable Hoisting

## Using var

```javascript
console.log(name);

var name = "John";
```

JavaScript treats it like:

```javascript
var name;

console.log(name);

name = "John";
```

Output:

```javascript
undefined
```

### Why?

The variable declaration is hoisted, but the value assignment remains in the original position.

---

# Hoisting with let and const

## Example

```javascript
console.log(age);

let age = 25;
```

Output:

```javascript
ReferenceError
```

## Example

```javascript
console.log(city);

const city = "Bhubaneswar";
```

Output:

```javascript
ReferenceError
```

### Why?

`let` and `const` are hoisted, but they remain in a Temporal Dead Zone (TDZ) until their declaration is reached.

---

# Function Hoisting

Function Declarations are fully hoisted.

## Example

```javascript
greet();

function greet() {
  console.log("Hello");
}
```

Output:

```javascript
Hello
```

JavaScript moves the entire function declaration to the top.

---

# Function Expression Hoisting

## Example

```javascript
greet();

const greet = function () {
  console.log("Hello");
};
```

Output:

```javascript
ReferenceError
```

### Why?

Only the variable declaration is hoisted, not the function assignment.

---

# Arrow Function Hoisting

## Example

```javascript
sayHello();

const sayHello = () => {
  console.log("Hello");
};
```

Output:

```javascript
ReferenceError
```

Arrow functions behave like function expressions.

---

# Temporal Dead Zone (TDZ)

The Temporal Dead Zone is the period between entering a scope and declaring a `let` or `const` variable.

During this period, the variable exists but cannot be accessed.

## Example

```javascript
console.log(age);

let age = 25;
```

Output:

```javascript
ReferenceError
```

---

# Hoisting Summary

| Declaration Type | Hoisted | Accessible Before Declaration |
|------------------|----------|------------------------------|
| var | Yes | Yes (`undefined`) |
| let | Yes | No (TDZ) |
| const | Yes | No (TDZ) |
| Function Declaration | Yes | Yes |
| Function Expression | No | No |
| Arrow Function | No | No |

---

# Common Follow-up Questions

### Are let and const hoisted?

Yes.

They are hoisted but cannot be accessed before declaration because of the Temporal Dead Zone (TDZ).

### Why does var return undefined instead of an error?

Because `var` is hoisted and initialized with `undefined`.

### Which functions are fully hoisted?

Only Function Declarations are fully hoisted.

### What is the Temporal Dead Zone (TDZ)?

The time between entering a scope and the variable declaration where `let` and `const` cannot be accessed.

---

# One-Line Interview Summary

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution, allowing function declarations and `var` variables to be referenced before their declaration, while `let` and `const` remain in the Temporal Dead Zone until initialized.


# Question: What is a Closure in JavaScript?

## Interview Answer

A closure is a function that remembers and can access variables from its outer scope even after the outer function has finished executing.

Closures are created whenever an inner function uses variables from its parent function.

They are commonly used for data privacy, maintaining state, and creating reusable functions.

## Easy Remember

Closure = Function + Remembered Outer Variables

Even if the outer function is finished, the inner function still remembers its variables.

---

# Basic Example

```javascript
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
```

## How It Works

### Step 1

```javascript
const counter = outer();
```

`outer()` executes and returns the `inner` function.

Normally, local variables should be removed from memory after the function finishes.

---

### Step 2

```javascript
counter();
```

The `inner` function still has access to `count`.

This happens because JavaScript creates a closure and keeps `count` alive.

---

# Why is Closure Needed?

Without closures, local variables would disappear after function execution.

Closures allow functions to remember and use previous values.

---

# Real-World Example: Private Counter

```javascript
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },

    decrement() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
```

Here, `count` cannot be accessed directly from outside.

This provides data privacy.

---

# Real-World Use Cases

## 1. Data Privacy

```javascript
function bankAccount() {
  let balance = 1000;

  return function () {
    return balance;
  };
}

const getBalance = bankAccount();

console.log(getBalance());
```

---

## 2. Event Handlers

```javascript
button.addEventListener("click", function () {
  console.log("Button Clicked");
});
```

The callback remembers variables from its outer scope.

---

## 3. setTimeout

```javascript
function greet(name) {
  setTimeout(function () {
    console.log(`Hello ${name}`);
  }, 1000);
}

greet("John");
```

The callback remembers the value of `name`.

---

# Closure and Scope Chain

```javascript
let globalVar = "Global";

function outer() {
  let outerVar = "Outer";

  function inner() {
    console.log(globalVar);
    console.log(outerVar);
  }

  return inner;
}

const fn = outer();
fn();
```

Output:

```javascript
Global
Outer
```

The inner function can access:

1. Its own scope
2. Parent scope
3. Global scope

This is called the Scope Chain.

---

# Common Follow-up Questions

### When is a Closure Created?

Whenever a function is created inside another function and accesses variables from the outer function.

### Why does the outer variable still exist after the function finishes?

Because the inner function keeps a reference to that variable.

### What are the advantages of Closures?

- Data privacy
- State management
- Reusable functions
- Event handlers
- Callbacks

### Can Closures Cause Memory Issues?

Yes.

If closures keep references to large objects that are no longer needed, they can increase memory usage.

---

# Most Common Interview Example

```javascript
function outer() {
  let message = "Hello";

  return function inner() {
    console.log(message);
  };
}

const fn = outer();
fn();
```

Output:

```javascript
Hello
```

### Explanation

Even though `outer()` has finished execution, the `inner()` function still remembers the variable `message`.

This behavior is called a Closure.

---

# One-Line Interview Summary

A closure is a function that remembers and can access variables from its outer scope even after the outer function has completed execution.


# Question: What is the `this` Keyword in JavaScript?

## Interview Answer

The `this` keyword refers to the object that is currently executing the function.

The value of `this` depends on how a function is called, not where it is defined.

## Easy Remember

`this` = "Who is calling the function?"

To determine the value of `this`, always look at the object before the dot (`.`).

---

# 1. this in Global Scope

## Example (Browser)

```javascript
console.log(this);
```

Output:

```javascript
window
```

In the browser's global scope, `this` refers to the `window` object.

---

# 2. this Inside an Object Method

## Example

```javascript
const user = {
  name: "John",

  greet() {
    console.log(this.name);
  }
};

user.greet();
```

Output:

```javascript
John
```

### Why?

Here, `user` is calling the function.

```javascript
user.greet();
```

So:

```javascript
this === user
```

---

# 3. this Inside a Regular Function

## Example

```javascript
function show() {
  console.log(this);
}

show();
```

### Browser (Non-Strict Mode)

```javascript
window
```

### Strict Mode

```javascript
"use strict";

function show() {
  console.log(this);
}

show();
```

Output:

```javascript
undefined
```

---

# 4. this in Arrow Functions

Arrow functions do not have their own `this`.

They inherit `this` from the surrounding scope.

## Example

```javascript
const user = {
  name: "John",

  greet: () => {
    console.log(this.name);
  }
};

user.greet();
```

Output:

```javascript
undefined
```

### Why?

Arrow functions use the outer scope's `this`, not the object's `this`.

---

# Regular Function vs Arrow Function

## Regular Function

```javascript
const user = {
  name: "John",

  greet() {
    console.log(this.name);
  }
};

user.greet();
```

Output:

```javascript
John
```

---

## Arrow Function

```javascript
const user = {
  name: "John",

  greet: () => {
    console.log(this.name);
  }
};

user.greet();
```

Output:

```javascript
undefined
```

---

# 5. this Inside a Constructor Function

## Example

```javascript
function Person(name) {
  this.name = name;
}

const user = new Person("John");

console.log(user.name);
```

Output:

```javascript
John
```

### Why?

When using `new`, `this` refers to the newly created object.

---

# 6. Explicit Binding using call(), apply(), and bind()

JavaScript allows us to manually set the value of `this`.

## call()

```javascript
function greet() {
  console.log(this.name);
}

const user = {
  name: "John"
};

greet.call(user);
```

Output:

```javascript
John
```

---

## apply()

```javascript
function greet(city) {
  console.log(this.name, city);
}

const user = {
  name: "John"
};

greet.apply(user, ["Bhubaneswar"]);
```

Output:

```javascript
John Bhubaneswar
```

---

## bind()

```javascript
function greet() {
  console.log(this.name);
}

const user = {
  name: "John"
};

const newFunc = greet.bind(user);

newFunc();
```

Output:

```javascript
John
```

---

# Summary Table

| Situation | Value of this |
|------------|--------------|
| Global Scope (Browser) | window |
| Object Method | The Object |
| Regular Function (Strict Mode) | undefined |
| Regular Function (Non-Strict Mode) | window |
| Arrow Function | Inherits from Parent Scope |
| Constructor Function | Newly Created Object |
| call/apply/bind | Explicitly Assigned Object |

---

# Common Follow-up Questions

### What determines the value of `this`?

The way a function is called determines the value of `this`.

### Does an Arrow Function have its own `this`?

No.

Arrow functions inherit `this` from their surrounding scope.

### Why is `this` undefined in strict mode?

Because JavaScript avoids automatically binding `this` to the global object.

### Which is preferred for object methods?

Regular functions.

```javascript
const user = {
  greet() {
    console.log(this);
  }
};
```

because they get the correct object reference.

---

# Most Common Interview Question

## What is the output?

```javascript
const user = {
  name: "John",

  greet() {
    console.log(this.name);
  }
};

user.greet();
```

Output:

```javascript
John
```

### Why?

Because `user` is calling the function, so `this` refers to the `user` object.

---

# One-Line Interview Summary

The `this` keyword refers to the object that is executing the function, and its value depends on how the function is called.

"this refers to the object that is currently executing a function. Its value is determined by how the function is called. In object methods, this refers to the object itself, while arrow functions do not have their own this and inherit it from the surrounding scope."




# Question: What are Objects and Arrays in JavaScript?

## Interview Answer

"Objects are used to store data in key-value pairs, whereas arrays are used to store ordered collections of values. Both are reference data types and are commonly used together, such as an array of objects returned from APIs."

Objects and Arrays are reference data types in JavaScript.

- Objects are used to store data in the form of key-value pairs.
- Arrays are used to store multiple values in an ordered list.

Both are widely used for managing and organizing data in JavaScript applications.

## Easy Remember

- Object → Stores data as Key : Value pairs
- Array → Stores data as an Ordered List

---

# Objects in JavaScript

An object is a collection of related data stored as key-value pairs.

## Syntax

```javascript
const user = {
  name: "John",
  age: 25,
  city: "Bhubaneswar"
};
```

---

## Accessing Object Properties

### Dot Notation

```javascript
console.log(user.name);
```

Output:

```javascript
John
```

### Bracket Notation

```javascript
console.log(user["age"]);
```

Output:

```javascript
25
```

---

## Adding a Property

```javascript
user.email = "john@gmail.com";

console.log(user);
```

---

## Updating a Property

```javascript
user.age = 30;
```

---

## Deleting a Property

```javascript
delete user.city;
```

---

## Object with Methods

```javascript
const user = {
  name: "John",

  greet() {
    console.log(`Hello ${this.name}`);
  }
};

user.greet();
```

Output:

```javascript
Hello John
```

---

# Array in JavaScript

An array is used to store multiple values in a single variable.

## Syntax

```javascript
const fruits = ["Apple", "Mango", "Orange"];
```

---

## Accessing Array Elements

Array indexes start from 0.

```javascript
console.log(fruits[0]);
```

Output:

```javascript
Apple
```

---

## Adding Elements

### push()

Adds an element to the end.

```javascript
fruits.push("Banana");
```

---

### unshift()

Adds an element to the beginning.

```javascript
fruits.unshift("Grapes");
```

---

## Removing Elements

### pop()

Removes the last element.

```javascript
fruits.pop();
```

---

### shift()

Removes the first element.

```javascript
fruits.shift();
```

---

## Looping Through an Array

```javascript
const fruits = ["Apple", "Mango", "Orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
});
```

---

# Object vs Array

| Feature | Object | Array |
|----------|---------|--------|
| Data Storage | Key-Value Pairs | Ordered List |
| Access | Key | Index |
| Example | user.name | fruits[0] |
| Use Case | Related Properties | Collection of Items |

---

# Example

## Object

```javascript
const employee = {
  id: 1,
  name: "John",
  role: "Developer"
};
```

Access:

```javascript
employee.name;
```

---

## Array

```javascript
const employees = ["John", "Peter", "Sam"];
```

Access:

```javascript
employees[0];
```

---

# Real-World Example

## Array of Objects

This is the most common structure used in APIs and React applications.

```javascript
const users = [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Peter"
  }
];
```

Access:

```javascript
console.log(users[0].name);
```

Output:

```javascript
John
```

---

# Common Follow-up Questions

### Are Objects and Arrays Primitive Data Types?

No.

Both are Reference Data Types.

### How do you find the length of an Array?

```javascript
fruits.length;
```

### How do you get all keys from an Object?

```javascript
Object.keys(user);
```

### How do you get all values from an Object?

```javascript
Object.values(user);
```

### Can Arrays store different data types?

Yes.

```javascript
const data = [
  "John",
  25,
  true,
  { city: "Bhubaneswar" }
];
```

---

# Most Common Interview Question

## What is the difference between Objects and Arrays?

### Answer

Objects store data as key-value pairs and are used to represent entities.

Arrays store data as ordered collections and are used to manage lists of items.

Example:

```javascript
const user = {
  name: "John",
  age: 25
};

const users = ["John", "Peter", "Sam"];
```

---

# One-Line Interview Summary

Objects store data as key-value pairs, while arrays store multiple values in an ordered list, and both are reference data types in JavaScript.


# Question: What is Destructuring in JavaScript?

## Interview Answer

Destructuring is an ES6 feature that allows us to extract values from objects and arrays and assign them to variables in a cleaner and shorter way.

"Destructuring is an ES6 feature used to extract values from objects and arrays into variables. It makes code shorter, cleaner, and is commonly used in React for props and hooks."
It helps write more readable and maintainable code.

## Easy Remember

Destructuring = Unpacking Values from Objects or Arrays

---

# 1. Object Destructuring

Instead of accessing properties one by one:

```javascript
const user = {
  name: "John",
  age: 25
};

console.log(user.name);
console.log(user.age);
```

We can use destructuring:

```javascript
const user = {
  name: "John",
  age: 25
};

const { name, age } = user;

console.log(name);
console.log(age);
```

Output:

```javascript
John
25
```

---

# Renaming Variables

```javascript
const user = {
  name: "John",
  age: 25
};

const { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);
```

Output:

```javascript
John
25
```

---

# Default Values

```javascript
const user = {
  name: "John"
};

const { name, city = "Bhubaneswar" } = user;

console.log(city);
```

Output:

```javascript
Bhubaneswar
```

---

# 2. Array Destructuring

Instead of:

```javascript
const fruits = ["Apple", "Mango", "Orange"];

const first = fruits[0];
const second = fruits[1];
```

Use:

```javascript
const fruits = ["Apple", "Mango", "Orange"];

const [first, second] = fruits;

console.log(first);
console.log(second);
```

Output:

```javascript
Apple
Mango
```

---

# Skipping Values

```javascript
const fruits = ["Apple", "Mango", "Orange"];

const [first, , third] = fruits;

console.log(first);
console.log(third);
```

Output:

```javascript
Apple
Orange
```

---

# Rest Operator with Destructuring

```javascript
const fruits = ["Apple", "Mango", "Orange", "Banana"];

const [first, ...remaining] = fruits;

console.log(first);
console.log(remaining);
```

Output:

```javascript
Apple
["Mango", "Orange", "Banana"]
```

---

# Destructuring Function Parameters

Very common in React and modern JavaScript.

## Without Destructuring

```javascript
function greet(user) {
  console.log(user.name);
}
```

## With Destructuring

```javascript
function greet({ name }) {
  console.log(name);
}
```

---

# React Example

```javascript
function User({ name, age }) {
  return (
    <div>
      {name} - {age}
    </div>
  );
}
```

This is one of the most common uses of destructuring in React.

---

# Object vs Array Destructuring

## Object Destructuring

Uses property names.

```javascript
const { name, age } = user;
```

---

## Array Destructuring

Uses positions (indexes).

```javascript
const [first, second] = fruits;
```

---

# Common Follow-up Questions

### What is the advantage of Destructuring?

- Cleaner code
- Less repetition
- Improved readability
- Easier extraction of values

### Can we set default values during destructuring?

Yes.

```javascript
const { city = "Bhubaneswar" } = user;
```

### Can destructuring be used in function parameters?

Yes.

```javascript
function greet({ name }) {
  console.log(name);
}
```

### Which is more common in React: Object or Array Destructuring?

Both.

```javascript
const [count, setCount] = useState(0); // Array Destructuring

function User({ name }) {} // Object Destructuring
```

---

# Most Common Interview Question

## What is the difference between Object and Array Destructuring?

### Object Destructuring

Extracts values using property names.

```javascript
const { name } = user;
```

### Array Destructuring

Extracts values using positions (indexes).

```javascript
const [first] = fruits;
```

---

# One-Line Interview Summary

Destructuring is an ES6 feature that allows us to extract values from objects and arrays and assign them to variables in a concise and readable way.


# Question: What are Spread (...) and Rest (...) Operators in JavaScript?

## Interview Answer

The Spread and Rest operators use the same syntax (`...`) but serve different purposes.

- Spread Operator → Expands or copies elements.
- Rest Operator → Collects multiple elements into a single array.

"Spread and Rest operators both use .... Spread is used to expand arrays or objects, while Rest is used to collect multiple values into a single array. Spread is commonly used for copying and merging, whereas Rest is commonly used in function parameters and destructuring."
The difference depends on where and how the operator is used.

## Easy Remember

- Spread → Spread Out Values
- Rest → Gather Remaining Values

---

# 1. Spread Operator

The Spread Operator expands elements of an array or object.

## Array Example

```javascript
const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5];

console.log(arr2);
```

Output:

```javascript
[1, 2, 3, 4, 5]
```

---

# Copying an Array

```javascript
const numbers = [1, 2, 3];

const copy = [...numbers];

console.log(copy);
```

Output:

```javascript
[1, 2, 3]
```

---

# Merging Arrays

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged);
```

Output:

```javascript
[1, 2, 3, 4]
```

---

# Object Spread

```javascript
const user = {
  name: "John"
};

const updatedUser = {
  ...user,
  age: 25
};

console.log(updatedUser);
```

Output:

```javascript
{
  name: "John",
  age: 25
}
```

---

# Copying Objects

```javascript
const user = {
  name: "John",
  age: 25
};

const copy = { ...user };
```

---

# 2. Rest Operator

The Rest Operator collects multiple values into a single array.

## Function Parameters

```javascript
function sum(...numbers) {
  console.log(numbers);
}

sum(10, 20, 30, 40);
```

Output:

```javascript
[10, 20, 30, 40]
```

---

# Summing Values

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(10, 20, 30));
```

Output:

```javascript
60
```

---

# Array Destructuring with Rest

```javascript
const fruits = ["Apple", "Mango", "Orange", "Banana"];

const [first, ...remaining] = fruits;

console.log(first);
console.log(remaining);
```

Output:

```javascript
Apple
["Mango", "Orange", "Banana"]
```

---

# Object Destructuring with Rest

```javascript
const user = {
  name: "John",
  age: 25,
  city: "Bhubaneswar"
};

const { name, ...details } = user;

console.log(name);
console.log(details);
```

Output:

```javascript
John

{
  age: 25,
  city: "Bhubaneswar"
}
```

---

# Spread vs Rest

| Feature | Spread Operator | Rest Operator |
|----------|----------------|---------------|
| Purpose | Expands Values | Collects Values |
| Usage | Arrays, Objects, Function Calls | Function Parameters, Destructuring |
| Result | Multiple Values | Single Array/Object |
| Direction | One → Many | Many → One |

---

# Quick Example

## Spread

```javascript
const arr = [1, 2, 3];

console.log(...arr);
```

Output:

```javascript
1 2 3
```

Values are expanded.

---

## Rest

```javascript
function show(...args) {
  console.log(args);
}

show(1, 2, 3);
```

Output:

```javascript
[1, 2, 3]
```

Values are collected.

---

# Real-World React Examples

## Updating State

```javascript
setUser({
  ...user,
  name: "John"
});
```

---

## Props Destructuring

```javascript
function User({ name, ...props }) {
  console.log(props);
}
```

---

# Common Follow-up Questions

### Do Spread and Rest use the same syntax?

Yes.

Both use:

```javascript
...
```

The behavior depends on the context.

### Can Spread be used with Objects?

Yes.

```javascript
const newObj = { ...obj };
```

### Can Rest be used in Function Parameters?

Yes.

```javascript
function sum(...numbers) {}
```

### Which operator is commonly used in React state updates?

Spread Operator.

```javascript
setState({
  ...state,
  name: "John"
});
```

---

# Most Common Interview Question

## How do you identify whether `...` is Spread or Rest?

### Answer

If it expands values, it is Spread.

```javascript
const arr2 = [...arr1];
```

If it collects values, it is Rest.

```javascript
function sum(...numbers) {}
```

---

# One-Line Interview Summary

The Spread Operator expands elements from arrays or objects, while the Rest Operator collects multiple values into a single array or object using the same `...` syntax.


# Question: What are Template Literals in JavaScript?

## Interview Answer

Template Literals are a feature introduced in ES6 that allows us to create strings using backticks (`` ` ``) instead of single (`'`) or double (`"`) quotes.

They make string interpolation, multi-line strings, and dynamic content creation much easier and more readable.

## Easy Remember

Template Literals = Strings + Variables + Expressions

Use backticks:

```javascript
` `
```

---

# Why Do We Need Template Literals?

Before ES6, string concatenation was used.

## Without Template Literals

```javascript
const name = "John";

console.log("Hello " + name);
```

Output:

```javascript
Hello John
```

---

## With Template Literals

```javascript
const name = "John";

console.log(`Hello ${name}`);
```

Output:

```javascript
Hello John
```

Much cleaner and easier to read.

---

# String Interpolation

Interpolation means inserting variables or expressions inside a string.

Syntax:

```javascript
${expression}
```

## Example

```javascript
const name = "John";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:

```javascript
My name is John and I am 25 years old.
```

---

# Using Expressions

You can perform calculations inside `${}`.

```javascript
const a = 10;
const b = 20;

console.log(`Sum = ${a + b}`);
```

Output:

```javascript
Sum = 30
```

---

# Multi-Line Strings

Before ES6:

```javascript
const text =
  "Hello\n" +
  "Welcome\n" +
  "To JavaScript";
```

---

## With Template Literals

```javascript
const text = `
Hello
Welcome
To JavaScript
`;

console.log(text);
```

Output:

```javascript
Hello
Welcome
To JavaScript
```

---

# Function Calls Inside Template Literals

```javascript
function greet(name) {
  return `Hello ${name}`;
}

console.log(`${greet("John")}`);
```

Output:

```javascript
Hello John
```

---

# Real-World Example

Creating dynamic messages:

```javascript
const user = {
  name: "John",
  role: "Developer"
};

const message = `
Name: ${user.name}
Role: ${user.role}
`;

console.log(message);
```

---

# React Example

```javascript
const name = "John";

return <h1>{`Welcome ${name}`}</h1>;
```

Template literals are commonly used for dynamic UI text.

---

# Template Literals vs String Concatenation

| Feature | String Concatenation | Template Literals |
|----------|---------------------|------------------|
| Readability | Less | Better |
| Variables | `+` Operator | `${}` |
| Multi-Line Support | Difficult | Easy |
| Expressions | Less Clean | Cleaner |

---

# Common Follow-up Questions

### What symbol is used for Template Literals?

Backticks:

```javascript
` `
```

Not:

```javascript
' '
" "
```

### What is String Interpolation?

Inserting variables or expressions inside a string using:

```javascript
${}
```

### Can we execute expressions inside Template Literals?

Yes.

```javascript
`${10 + 20}`
```

### Can Template Literals create multi-line strings?

Yes.

That is one of their biggest advantages.

---

# Most Common Interview Question

## What is the difference between Template Literals and Normal Strings?

### Normal Strings

```javascript
const name = "John";

console.log("Hello " + name);
```

### Template Literals

```javascript
const name = "John";

console.log(`Hello ${name}`);
```

Template Literals provide cleaner syntax, string interpolation, and multi-line support.

---

# One-Line Interview Summary

Template Literals are ES6 strings enclosed in backticks that allow string interpolation, multi-line strings, and embedded expressions using `${}` syntax.


# Question: What is the map() Method in JavaScript?

## Interview Answer

The `map()` method is an array method that creates a new array by applying a function to each element of the original array.

It does not modify the original array and always returns a new array.

## Easy Remember

map() = Transform Each Element → Return New Array

---

# Syntax

```javascript
array.map((element, index, array) => {
  return transformedValue;
});
```

---

# Basic Example

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled);
```

Output:

```javascript
[2, 4, 6, 8]
```

---

# Short Form

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
```

Output:

```javascript
[2, 4, 6, 8]
```

---

# Original Array is Not Modified

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(numbers);
console.log(doubled);
```

Output:

```javascript
[1, 2, 3]
[2, 4, 6]
```

---

# Converting Data

```javascript
const users = ["john", "peter", "sam"];

const upperCaseUsers = users.map(user => user.toUpperCase());

console.log(upperCaseUsers);
```

Output:

```javascript
["JOHN", "PETER", "SAM"]
```

---

# Array of Objects Example

```javascript
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Sam" }
];

const names = users.map(user => user.name);

console.log(names);
```

Output:

```javascript
["John", "Peter", "Sam"]
```

---

# React Example

One of the most common uses of `map()` is rendering lists.

```javascript
const users = ["John", "Peter", "Sam"];

function App() {
  return (
    <div>
      {users.map((user, index) => (
        <h3 key={index}>{user}</h3>
      ))}
    </div>
  );
}
```

---

# Parameters of map()

```javascript
array.map((element, index, array) => {})
```

### element

Current item being processed.

```javascript
num
```

### index

Current position of the item.

```javascript
0, 1, 2...
```

### array

The original array.

```javascript
numbers
```

---

# Example Using Index

```javascript
const fruits = ["Apple", "Mango", "Orange"];

fruits.map((fruit, index) => {
  console.log(index, fruit);
});
```

Output:

```javascript
0 Apple
1 Mango
2 Orange
```

---

# map() vs forEach()

| Feature | map() | forEach() |
|----------|--------|----------|
| Returns New Array | Yes | No |
| Used for Transformation | Yes | No |
| Can Chain Methods | Yes | No |
| Modifies Original Array | No | No |

---

# Example

## map()

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(result);
```

Output:

```javascript
[2, 4, 6]
```

---

## forEach()

```javascript
const numbers = [1, 2, 3];

const result = numbers.forEach(num => num * 2);

console.log(result);
```

Output:

```javascript
undefined
```

---

# Common Follow-up Questions

### Does map() modify the original array?

No.

It returns a new array.

### What does map() return?

A new transformed array.

### When should we use map()?

When we want to transform data and create a new array.

### Can map() be used on objects?

No.

`map()` is an array method and works only on arrays.

---

# Most Common Interview Question

## Difference Between map() and forEach()

### map()

Returns a new array.

```javascript
const result = numbers.map(num => num * 2);
```

### forEach()

Returns `undefined`.

```javascript
numbers.forEach(num => console.log(num));
```

Use `map()` when you need a transformed array.

Use `forEach()` when you only need to perform an action.

---

# One-Line Interview Summary

The `map()` method iterates over an array, applies a function to each element, and returns a new transformed array without modifying the original array.




# Question: What is the filter() Method in JavaScript?

## Interview Answer

The `filter()` method is an array method that creates a new array containing only the elements that satisfy a given condition.

It does not modify the original array and always returns a new array.

## Easy Remember

filter() = Keep Only Matching Elements

---

# Syntax

```javascript
array.filter((element, index, array) => {
  return condition;
});
```

If the condition returns:

- `true` → Element is included
- `false` → Element is excluded

---

# Basic Example

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
```

Output:

```javascript
[2, 4, 6]
```

---

# Filtering Greater Values

```javascript
const numbers = [10, 20, 30, 40, 50];

const result = numbers.filter(num => num > 25);

console.log(result);
```

Output:

```javascript
[30, 40, 50]
```

---

# Original Array is Not Modified

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter(num => num > 2);

console.log(numbers);
console.log(result);
```

Output:

```javascript
[1, 2, 3, 4]
[3, 4]
```

---

# Array of Objects Example

```javascript
const users = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);
```

Output:

```javascript
[
  { id: 1, active: true },
  { id: 3, active: true }
]
```

---

# Real-World Example

Filter products by price.

```javascript
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1000 }
];

const expensiveProducts = products.filter(
  product => product.price > 1000
);

console.log(expensiveProducts);
```

---

# React Example

```javascript
const users = [
  { id: 1, active: true },
  { id: 2, active: false }
];

function App() {
  return (
    <div>
      {users
        .filter(user => user.active)
        .map(user => (
          <h3 key={user.id}>{user.id}</h3>
        ))}
    </div>
  );
}
```

---

# Parameters of filter()

```javascript
array.filter((element, index, array) => {})
```

### element

Current item being processed.

### index

Current position of the item.

### array

The original array.

---

# Example Using Index

```javascript
const fruits = ["Apple", "Mango", "Orange"];

const result = fruits.filter((fruit, index) => index > 0);

console.log(result);
```

Output:

```javascript
["Mango", "Orange"]
```

---

# filter() vs map()

| Feature | filter() | map() |
|----------|----------|--------|
| Purpose | Select Elements | Transform Elements |
| Returns | Filtered Array | New Transformed Array |
| Array Size | Can Be Smaller | Usually Same Size |
| Condition Required | Yes | No |

---

# Example

## filter()

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter(num => num > 2);

console.log(result);
```

Output:

```javascript
[3, 4]
```

---

## map()

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.map(num => num * 2);

console.log(result);
```

Output:

```javascript
[2, 4, 6, 8]
```

---

# Common Follow-up Questions

### Does filter() modify the original array?

No.

It returns a new array.

### What does filter() return?

A new array containing only the elements that satisfy the condition.

### Can filter() return an empty array?

Yes.

```javascript
const result = [1, 2, 3].filter(num => num > 10);

console.log(result);
```

Output:

```javascript
[]
```

### Can filter() be chained with map()?

Yes.

```javascript
const result = numbers
  .filter(num => num > 2)
  .map(num => num * 2);
```

---

# Most Common Interview Question

## Difference Between map() and filter()

### map()

Transforms every element and returns a new array.

```javascript
numbers.map(num => num * 2);
```

### filter()

Returns only elements that match a condition.

```javascript
numbers.filter(num => num > 2);
```

---

# One-Line Interview Summary

The `filter()` method creates a new array containing only the elements that satisfy a specified condition without modifying the original array.



# Question: What is the reduce() Method in JavaScript?

## Interview Answer

The `reduce()` method is an array method that reduces all elements of an array into a single value.

It processes each element one by one and accumulates the result in an accumulator.

Common use cases include calculating sums, averages, totals, counting items, and transforming data.

## Easy Remember

reduce() = Many Values → One Value

Examples:

- Sum of numbers
- Total price of products
- Count occurrences
- Group data

---

# Syntax

```javascript
array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
```

### Parameters

- accumulator → Stores the accumulated result
- currentValue → Current element being processed
- initialValue → Starting value of accumulator

---

# Basic Example: Sum of Numbers

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);
```

Output:

```javascript
10
```

---

# How reduce() Works

```javascript
const numbers = [1, 2, 3, 4];
```

| Iteration | acc | curr | Result |
|------------|-----|------|---------|
| 1 | 0 | 1 | 1 |
| 2 | 1 | 2 | 3 |
| 3 | 3 | 3 | 6 |
| 4 | 6 | 4 | 10 |

Final Result:

```javascript
10
```

---

# Short Form

```javascript
const sum = numbers.reduce(
  (acc, curr) => acc + curr,
  0
);
```

---

# Find Maximum Value

```javascript
const numbers = [10, 20, 50, 30];

const max = numbers.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});

console.log(max);
```

Output:

```javascript
50
```

---

# Total Price Example

```javascript
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1000 }
];

const total = products.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log(total);
```

Output:

```javascript
51500
```

---

# Count Occurrences

```javascript
const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "apple"
];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
```

Output:

```javascript
{
  apple: 3,
  banana: 1,
  orange: 1
}
```

---

# React Example

Calculate cart total.

```javascript
const cart = [
  { price: 1000 },
  { price: 2000 },
  { price: 500 }
];

const totalPrice = cart.reduce(
  (acc, item) => acc + item.price,
  0
);
```

Output:

```javascript
3500
```

---

# reduce() vs map() vs filter()

| Method | Purpose | Returns |
|----------|----------|----------|
| map() | Transform Elements | New Array |
| filter() | Select Elements | New Array |
| reduce() | Convert Array to Single Value | Single Value |

---

# Example

## map()

```javascript
[1, 2, 3].map(num => num * 2);
```

Output:

```javascript
[2, 4, 6]
```

---

## filter()

```javascript
[1, 2, 3].filter(num => num > 1);
```

Output:

```javascript
[2, 3]
```

---

## reduce()

```javascript
[1, 2, 3].reduce((acc, curr) => acc + curr, 0);
```

Output:

```javascript
6
```

---

# Common Follow-up Questions

### What does reduce() return?

A single value.

Examples:

- Number
- Object
- Array
- String

Depending on the logic.

### What is the accumulator?

A variable that stores the result of previous iterations.

### Why do we pass an initial value?

To define the starting value of the accumulator.

```javascript
.reduce((acc, curr) => acc + curr, 0)
```

Here `0` is the initial value.

### Can reduce() return an object?

Yes.

```javascript
const result = arr.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});
```

---

# Most Common Interview Question

## Difference Between map(), filter(), and reduce()

### map()

Transforms every element.

```javascript
arr.map(item => item * 2);
```

Returns:

```javascript
New Array
```

---

### filter()

Selects matching elements.

```javascript
arr.filter(item => item > 2);
```

Returns:

```javascript
New Array
```

---

### reduce()

Combines all elements into one value.

```javascript
arr.reduce((acc, curr) => acc + curr, 0);
```

Returns:

```javascript
Single Value
```

---

# One-Line Interview Summary

The `reduce()` method processes all elements of an array and reduces them into a single value using an accumulator, making it useful for calculations, totals, counting, and data transformation.


# Question: What is the find() Method in JavaScript?

## Interview Answer

The `find()` method is used to find and return the **first element** in an array that satisfies a given condition.

If no element matches the condition, it returns `undefined`.

## Easy Remember

find() = First Matching Element

- Returns only one element
- Stops searching after the first match
- Returns `undefined` if no match is found

---

# Syntax

```javascript
array.find((element) => {
  return condition;
});
```

---

# Basic Example

```javascript
const numbers = [10, 20, 30, 40, 50];

const result = numbers.find(num => num > 25);

console.log(result);
```

Output:

```javascript
30
```

Explanation:

- 10 → false
- 20 → false
- 30 → true ✅

`find()` immediately returns `30` and stops searching.

---

# Array of Objects Example

```javascript
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Sam" }
];

const user = users.find(user => user.id === 2);

console.log(user);
```

Output:

```javascript
{
  id: 2,
  name: "Peter"
}
```

---

# If No Match Exists

```javascript
const numbers = [10, 20, 30];

const result = numbers.find(num => num > 100);

console.log(result);
```

Output:

```javascript
undefined
```

---

# Real-World Example

Finding a product by ID from API data.

```javascript
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Keyboard" }
];

const product = products.find(
  product => product.id === 3
);

console.log(product);
```

Output:

```javascript
{
  id: 3,
  name: "Keyboard"
}
```

---

# find() vs filter()

## find()

Returns the first matching element.

```javascript
const result = [1, 2, 3, 4, 5]
  .find(num => num > 2);

console.log(result);
```

Output:

```javascript
3
```

---

## filter()

Returns all matching elements.

```javascript
const result = [1, 2, 3, 4, 5]
  .filter(num => num > 2);

console.log(result);
```

Output:

```javascript
[3, 4, 5]
```

---

# Common Follow-up Questions

### What does find() return?

The first matching element.

### What happens if no element matches?

It returns:

```javascript
undefined
```

### Does find() return an array?

No.

It returns a single element or object.

### When should we use find()?

When we need only one matching item from an array.

---

# One-Line Interview Summary

The `find()` method returns the first element in an array that satisfies a condition and returns `undefined` if no matching element is found.


# Question: What is the some() Method in JavaScript?

## Interview Answer

The `some()` method checks whether at least one element in an array satisfies a given condition.

It returns:

- `true` → If at least one element matches
- `false` → If no elements match

It stops checking as soon as it finds the first matching element.

## Easy Remember

some() = "Is There At Least One Match?"

---

# Syntax

```javascript
array.some((element, index, array) => {
  return condition;
});
```

Returns:

```javascript
true or false
```

---

# Basic Example

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.some(num => num > 3);

console.log(result);
```

Output:

```javascript
true
```

Explanation:

- 1 > 3 ❌
- 2 > 3 ❌
- 3 > 3 ❌
- 4 > 3 ✅

As soon as it finds `4`, it returns `true`.

---

# No Match Example

```javascript
const numbers = [1, 2, 3];

const result = numbers.some(num => num > 10);

console.log(result);
```

Output:

```javascript
false
```

---

# Array of Objects Example

```javascript
const users = [
  { id: 1, active: false },
  { id: 2, active: false },
  { id: 3, active: true }
];

const hasActiveUser = users.some(
  user => user.active
);

console.log(hasActiveUser);
```

Output:

```javascript
true
```

---

# Real-World Example

Check if a product is out of stock.

```javascript
const products = [
  { name: "Laptop", stock: 10 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 5 }
];

const hasOutOfStock = products.some(
  product => product.stock === 0
);

console.log(hasOutOfStock);
```

Output:

```javascript
true
```

---

# some() vs every()

## some()

Checks if at least one element matches.

```javascript
const numbers = [2, 4, 6, 7];

const result = numbers.some(num => num % 2 !== 0);

console.log(result);
```

Output:

```javascript
true
```

Because `7` is odd.

---

## every()

Checks if all elements match.

```javascript
const numbers = [2, 4, 6, 7];

const result = numbers.every(num => num % 2 === 0);

console.log(result);
```

Output:

```javascript
false
```

Because `7` is not even.

---

# some() vs find()

| Method | Returns |
|----------|----------|
| some() | true / false |
| find() | First Matching Element |
| filter() | Array of Matching Elements |

---

## some()

```javascript
const result = [1, 2, 3].some(num => num > 2);
```

Output:

```javascript
true
```

---

## find()

```javascript
const result = [1, 2, 3].find(num => num > 2);
```

Output:

```javascript
3
```

---

# Common Follow-up Questions

### What does some() return?

A boolean value:

```javascript
true or false
```

### Does some() return the matching element?

No.

It only returns `true` or `false`.

### Does some() stop after finding a match?

Yes.

It stops immediately after finding the first matching element.

### When should we use some()?

When we only need to know whether at least one matching element exists.

---

# Most Common Interview Question

## Difference Between some() and every()

### some()

At least one element must satisfy the condition.

```javascript
numbers.some(num => num > 5);
```

---

### every()

All elements must satisfy the condition.

```javascript
numbers.every(num => num > 5);
```

---

# One-Line Interview Summary

The `some()` method checks whether at least one element in an array satisfies a condition and returns `true` or `false`.


# Question: What is the sort() Method in JavaScript?

## Interview Answer

The `sort()` method is used to sort the elements of an array.

By default, `sort()` converts elements to strings and sorts them in ascending alphabetical order.

To sort numbers correctly, we use a compare function.

## Easy Remember

sort() = Arrange Elements in Order

- Alphabetical Order (Default)
- Ascending Order
- Descending Order

---

# Syntax

```javascript
array.sort(compareFunction);
```

---

# Default Sorting

```javascript
const fruits = ["Orange", "Apple", "Mango"];

fruits.sort();

console.log(fruits);
```

Output:

```javascript
["Apple", "Mango", "Orange"]
```

---

# Problem with Numbers

```javascript
const numbers = [10, 5, 100, 25];

numbers.sort();

console.log(numbers);
```

Output:

```javascript
[10, 100, 25, 5]
```

### Why?

By default, `sort()` converts numbers to strings.

```javascript
"10"
"100"
"25"
"5"
```

Then it sorts alphabetically.

---

# Ascending Order

Use:

```javascript
(a, b) => a - b
```

## Example

```javascript
const numbers = [10, 5, 100, 25];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output:

```javascript
[5, 10, 25, 100]
```

---

# Descending Order

Use:

```javascript
(a, b) => b - a
```

## Example

```javascript
const numbers = [10, 5, 100, 25];

numbers.sort((a, b) => b - a);

console.log(numbers);
```

Output:

```javascript
[100, 25, 10, 5]
```

---

# How Compare Function Works

```javascript
(a, b) => a - b
```

### If Result < 0

```javascript
a comes before b
```

### If Result > 0

```javascript
b comes before a
```

### If Result = 0

```javascript
No change
```

---

# Sorting Array of Objects

Very common in React and API data.

## Sort by Age

```javascript
const users = [
  { name: "John", age: 30 },
  { name: "Peter", age: 20 },
  { name: "Sam", age: 25 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);
```

Output:

```javascript
[
  { name: "Peter", age: 20 },
  { name: "Sam", age: 25 },
  { name: "John", age: 30 }
]
```

---

# Sort by Name

```javascript
const users = [
  { name: "John" },
  { name: "Peter" },
  { name: "Sam" }
];

users.sort((a, b) =>
  a.name.localeCompare(b.name)
);

console.log(users);
```

Output:

```javascript
[
  { name: "John" },
  { name: "Peter" },
  { name: "Sam" }
]
```

---

# Important Interview Point

## sort() Mutates the Original Array

```javascript
const numbers = [3, 1, 2];

numbers.sort();

console.log(numbers);
```

Output:

```javascript
[1, 2, 3]
```

The original array is changed.

---

# To Avoid Mutation

```javascript
const numbers = [3, 1, 2];

const sorted = [...numbers].sort(
  (a, b) => a - b
);

console.log(numbers);
console.log(sorted);
```

Output:

```javascript
[3, 1, 2]
[1, 2, 3]
```

---

# Real-World React Example

Sort products by price.

```javascript
const sortedProducts = [...products].sort(
  (a, b) => a.price - b.price
);
```

---

# Common Follow-up Questions

### What is the default behavior of sort()?

It converts values to strings and sorts alphabetically.

### How do you sort numbers in ascending order?

```javascript
numbers.sort((a, b) => a - b);
```

### How do you sort numbers in descending order?

```javascript
numbers.sort((a, b) => b - a);
```

### Does sort() modify the original array?

Yes.

`sort()` mutates the original array.

---

# Most Common Interview Question

## Why does this produce an unexpected result?

```javascript
[10, 5, 100].sort();
```

Output:

```javascript
[10, 100, 5]
```

### Answer

Because `sort()` converts values to strings and performs alphabetical sorting.

Correct way:

```javascript
[10, 5, 100].sort((a, b) => a - b);
```

Output:

```javascript
[5, 10, 100]
```

---

# One-Line Interview Summary

The `sort()` method is used to arrange array elements in a specific order, and for numeric sorting we use a compare function such as `(a, b) => a - b` for ascending order.


# Question: What is the Difference Between slice() and splice() in JavaScript?

## Interview Answer

Both `slice()` and `splice()` are array methods, but they serve different purposes.

- `slice()` is used to extract a portion of an array without modifying the original array.
- `splice()` is used to add, remove, or replace elements in an array and modifies the original array.

## Easy Remember

- slice() → Copy
- splice() → Change

---

# 1. slice()

The `slice()` method returns a shallow copy of a portion of an array.

It does not modify the original array.

## Syntax

```javascript
array.slice(startIndex, endIndex);
```

- startIndex → Included
- endIndex → Excluded

---

## Example

```javascript
const fruits = ["Apple", "Mango", "Orange", "Banana"];

const result = fruits.slice(1, 3);

console.log(result);
console.log(fruits);
```

Output:

```javascript
["Mango", "Orange"]

["Apple", "Mango", "Orange", "Banana"]
```

Original array remains unchanged.

---

# 2. splice()

The `splice()` method adds, removes, or replaces elements in an array.

It modifies the original array.

## Syntax

```javascript
array.splice(startIndex, deleteCount, newItems);
```

---

## Remove Elements

```javascript
const fruits = ["Apple", "Mango", "Orange", "Banana"];

fruits.splice(1, 2);

console.log(fruits);
```

Output:

```javascript
["Apple", "Banana"]
```

---

## Add Elements

```javascript
const fruits = ["Apple", "Orange"];

fruits.splice(1, 0, "Mango");

console.log(fruits);
```

Output:

```javascript
["Apple", "Mango", "Orange"]
```

---

## Replace Elements

```javascript
const fruits = ["Apple", "Mango", "Orange"];

fruits.splice(1, 1, "Banana");

console.log(fruits);
```

Output:

```javascript
["Apple", "Banana", "Orange"]
```

---

# slice() vs splice()

| Feature | slice() | splice() |
|----------|----------|----------|
| Purpose | Extract Elements | Add, Remove, Replace |
| Returns | New Array | Removed Elements |
| Modifies Original Array | No | Yes |
| Common Use | Copying Data | Updating Data |
| Mutation | Non-Mutating | Mutating |

---

# Example Comparison

## slice()

```javascript
const arr = [1, 2, 3, 4];

const result = arr.slice(1, 3);

console.log(result);
console.log(arr);
```

Output:

```javascript
[2, 3]

[1, 2, 3, 4]
```

---

## splice()

```javascript
const arr = [1, 2, 3, 4];

arr.splice(1, 2);

console.log(arr);
```

Output:

```javascript
[1, 4]
```

Original array is changed.

---

# Common Follow-up Questions

### Does slice() modify the original array?

No.

It returns a new array.

### Does splice() modify the original array?

Yes.

It changes the original array.

### Which method is used to copy part of an array?

```javascript
slice()
```

### Which method is used to add or remove elements?

```javascript
splice()
```

---

# Most Common Interview Question

## Which method is mutating and which is non-mutating?

### Non-Mutating

```javascript
slice()
```

Original array remains unchanged.

### Mutating

```javascript
splice()
```

Original array is modified.

---

# One-Line Interview Summary

`slice()` returns a portion of an array without changing the original array, while `splice()` adds, removes, or replaces elements and modifies the original array.


"The main difference is that slice() creates a copy of a portion of an array without modifying the original array, whereas splice() is used to add, remove, or replace elements and directly modifies the original array. slice() is non-mutating, while splice() is mutating."
