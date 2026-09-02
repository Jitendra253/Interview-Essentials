# Question: What are Default Parameters in JavaScript?

## Interview Answer

Default Parameters are an ES6 feature that allows us to assign default values to function parameters.

If an argument is not provided or is `undefined`, the default value is used.

This helps avoid errors and makes functions more flexible.

## Easy Remember

Default Parameter = Fallback Value for Function Arguments

---

# Syntax

```javascript
function functionName(parameter = defaultValue) {
  // code
}
```

---

# Basic Example

```javascript
function greet(name = "Guest") {
  return `Hello ${name}`;
}

console.log(greet());
console.log(greet("John"));
```

Output:

```javascript
Hello Guest
Hello John
```

---

# Without Default Parameters

Before ES6:

```javascript
function greet(name) {
  name = name || "Guest";

  return `Hello ${name}`;
}
```

ES6 provides a cleaner solution.

---

# Multiple Default Parameters

```javascript
function add(a = 0, b = 0) {
  return a + b;
}

console.log(add());
console.log(add(10, 20));
```

Output:

```javascript
0
30
```

---

# Passing Undefined

If `undefined` is passed, the default value is used.

```javascript
function greet(name = "Guest") {
  return name;
}

console.log(greet(undefined));
```

Output:

```javascript
Guest
```

---

# Passing Null

If `null` is passed, the default value is NOT used.

```javascript
function greet(name = "Guest") {
  return name;
}

console.log(greet(null));
```

Output:

```javascript
null
```

### Important Interview Point

Default values are used only when the argument is:

```javascript
undefined
```

Not when it is:

```javascript
null
0
false
""
```

---

# Example with Objects

```javascript
function createUser(
  name = "Guest",
  age = 18
) {
  return {
    name,
    age
  };
}

console.log(createUser());
```

Output:

```javascript
{
  name: "Guest",
  age: 18
}
```

---

# Real-World Example

API Pagination

```javascript
function getUsers(
  page = 1,
  limit = 10
) {
  console.log(
    `Page: ${page}, Limit: ${limit}`
  );
}

getUsers();
```

Output:

```javascript
Page: 1, Limit: 10
```

---

# Common Follow-up Questions

### What are Default Parameters?

Default values assigned to function parameters.

### When is the default value used?

When the argument is not provided or is `undefined`.

### Does null trigger the default value?

No.

```javascript
greet(null);
```

returns:

```javascript
null
```

### When were Default Parameters introduced?

ES6 (ECMAScript 2015).

---

# Most Common Interview Question

## What is the output?

```javascript
function greet(name = "Guest") {
  console.log(name);
}

greet();
greet(undefined);
greet(null);
```

Output:

```javascript
Guest
Guest
null
```

### Explanation

- No argument → Default value used
- `undefined` → Default value used
- `null` → Passed as actual value

---

# One-Line Interview Summary

Default Parameters are an ES6 feature that allows function parameters to have fallback values, which are used when an argument is missing or `undefined`.

# Question: What is Optional Chaining (?.) in JavaScript?

## Interview Answer

Optional Chaining (`?.`) is an ES2020 feature that allows us to safely access nested object properties without causing errors if a property does not exist.

Instead of throwing an error, it returns `undefined`.

This makes code cleaner and safer when working with API responses or deeply nested objects.

## Easy Remember

Optional Chaining = Safe Property Access

If a value is `null` or `undefined`, stop and return `undefined`.

---

# Problem Without Optional Chaining

```javascript
const user = {};

console.log(user.address.city);
```

Output:

```javascript
TypeError
```

### Why?

Because:

```javascript
user.address
```

is `undefined`, and JavaScript cannot read `city` from `undefined`.

---

# Solution Using Optional Chaining

```javascript
const user = {};

console.log(user.address?.city);
```

Output:

```javascript
undefined
```

No error occurs.

---

# Basic Example

```javascript
const user = {
  name: "John",
  address: {
    city: "Bhubaneswar"
  }
};

console.log(user.address?.city);
```

Output:

```javascript
Bhubaneswar
```

---

# Deeply Nested Objects

```javascript
const user = {
  profile: {
    address: {
      city: "Bhubaneswar"
    }
  }
};

console.log(
  user.profile?.address?.city
);
```

Output:

```javascript
Bhubaneswar
```

---

# Missing Property Example

```javascript
const user = {};

console.log(
  user.profile?.address?.city
);
```

Output:

```javascript
undefined
```

---

# Optional Chaining with Arrays

```javascript
const users = [
  {
    name: "John"
  }
];

console.log(users[0]?.name);
console.log(users[1]?.name);
```

Output:

```javascript
John
undefined
```

---

# Optional Chaining with Functions

```javascript
const user = {
  greet() {
    console.log("Hello");
  }
};

user.greet?.();
```

Output:

```javascript
Hello
```

If the function does not exist:

```javascript
user.sayHi?.();
```

Output:

```javascript
undefined
```

No error occurs.

---

# Real-World API Example

```javascript
const response = {
  data: {
    user: {
      name: "John"
    }
  }
};

console.log(
  response.data?.user?.name
);
```

Output:

```javascript
John
```

This is very common when working with APIs because some fields may be missing.

---

# Optional Chaining vs Traditional Checking

## Traditional Way

```javascript
const city =
  user &&
  user.address &&
  user.address.city;
```

---

## Optional Chaining

```javascript
const city = user.address?.city;
```

Much cleaner and easier to read.

---

# Optional Chaining + Nullish Coalescing

Provide a default value if the result is `undefined`.

```javascript
const user = {};

const city =
  user.address?.city ?? "Not Available";

console.log(city);
```

Output:

```javascript
Not Available
```

---

# Common Follow-up Questions

### What does Optional Chaining return if a property does not exist?

```javascript
undefined
```

### Does Optional Chaining throw an error?

No.

It safely returns `undefined`.

### When should we use Optional Chaining?

When accessing nested objects, API responses, or optional properties.

### Which version of JavaScript introduced Optional Chaining?

ES2020.

---

# Most Common Interview Question

## What is the output?

```javascript
const user = {};

console.log(user.address?.city);
```

Output:

```javascript
undefined
```

### Why?

Because `address` does not exist, so Optional Chaining stops execution and returns `undefined` instead of throwing an error.

---

# One-Line Interview Summary

Optional Chaining (`?.`) is an ES2020 feature that safely accesses nested properties and returns `undefined` instead of throwing an error when a property is missing.


# Question: What is the Nullish Coalescing Operator (??) in JavaScript?

## Interview Answer

The Nullish Coalescing Operator (`??`) is an ES2020 feature that returns the right-hand value only when the left-hand value is `null` or `undefined`.

It is commonly used to provide default values while preserving valid values like `0`, `false`, and empty strings.

## Easy Remember

```javascript
value ?? defaultValue
```

Meaning:

"If value is null or undefined, use the default value."

---

# Syntax

```javascript
const result = value ?? defaultValue;
```

---

# Basic Example

```javascript
const name = null;

const result = name ?? "Guest";

console.log(result);
```

Output:

```javascript
Guest
```

Because `name` is `null`.

---

# Undefined Example

```javascript
const name = undefined;

const result = name ?? "Guest";

console.log(result);
```

Output:

```javascript
Guest
```

Because `name` is `undefined`.

---

# Valid Values Are Preserved

```javascript
const count = 0;

const result = count ?? 10;

console.log(result);
```

Output:

```javascript
0
```

Because `0` is a valid value and is not `null` or `undefined`.

---

# Why Not Use || ?

Many developers confuse `??` with `||`.

## Using ||

```javascript
const count = 0;

const result = count || 10;

console.log(result);
```

Output:

```javascript
10
```

Because `0` is considered falsy.

---

## Using ??

```javascript
const count = 0;

const result = count ?? 10;

console.log(result);
```

Output:

```javascript
0
```

This is usually the desired behavior.

---

# Comparison: || vs ??

| Value | value \|\| "Default" | value ?? "Default" |
|---------|--------------------|--------------------|
| null | Default | Default |
| undefined | Default | Default |
| 0 | Default | 0 |
| false | Default | false |
| "" | Default | "" |

---

# Real-World Example

API Response

```javascript
const user = {
  age: 0
};

const age = user.age ?? 18;

console.log(age);
```

Output:

```javascript
0
```

Using `||` would incorrectly return `18`.

---

# Using with Optional Chaining

Very common together.

```javascript
const user = {};

const city =
  user.address?.city ?? "Not Available";

console.log(city);
```

Output:

```javascript
Not Available
```

---

# Common Follow-up Questions

### What values trigger the default value in ??

Only:

```javascript
null
undefined
```

### Does 0 trigger the default value?

No.

```javascript
0 ?? 10
```

Output:

```javascript
0
```

### Does false trigger the default value?

No.

```javascript
false ?? true
```

Output:

```javascript
false
```

### Which JavaScript version introduced ??

ES2020.

---

# Most Common Interview Question

## Difference Between || and ??

### ||

Returns the right value for any falsy value.

```javascript
0 || 100
```

Output:

```javascript
100
```

---

### ??

Returns the right value only for `null` or `undefined`.

```javascript
0 ?? 100
```

Output:

```javascript
0
```

---

# One-Line Interview Summary

The Nullish Coalescing Operator (`??`) returns a default value only when the left-hand value is `null` or `undefined`, making it safer than `||` when working with valid falsy values like `0`, `false`, and `""`.



# Question: What are Modules in JavaScript? Explain Import and Export.

## Interview Answer

Modules are a way to split JavaScript code into separate files and reuse them across an application.

Using modules makes code more organized, maintainable, and reusable.

JavaScript provides:

- `export` → To make variables, functions, or classes available to other files.
- `import` → To use exported values from another file.

## Easy Remember

- export → Send
- import → Receive

---

# Why Do We Need Modules?

Without modules, all code exists in a single file.

```javascript
app.js
```

As applications grow, managing code becomes difficult.

Modules help us:

- Organize code
- Reuse code
- Improve maintainability
- Avoid global variables

---

# Named Export

## math.js

```javascript
export const PI = 3.14;

export function add(a, b) {
  return a + b;
}
```

---

## app.js

```javascript
import { PI, add } from "./math.js";

console.log(PI);
console.log(add(10, 20));
```

Output:

```javascript
3.14
30
```

---

# Exporting at the Bottom

## math.js

```javascript
const PI = 3.14;

function add(a, b) {
  return a + b;
}

export { PI, add };
```

---

# Import Multiple Named Exports

```javascript
import { PI, add } from "./math.js";
```

Names must match exactly.

---

# Rename Named Imports

## math.js

```javascript
export const PI = 3.14;
```

## app.js

```javascript
import { PI as CirclePI } from "./math.js";

console.log(CirclePI);
```

---

# Default Export

A file can have only one default export.

## user.js

```javascript
export default function greet() {
  console.log("Hello");
}
```

---

## app.js

```javascript
import greet from "./user.js";

greet();
```

Output:

```javascript
Hello
```

---

# Rename Default Imports

```javascript
import sayHello from "./user.js";
```

This works because default exports can be imported with any name.

---

# Named Export vs Default Export

| Feature | Named Export | Default Export |
|----------|-------------|---------------|
| Number Allowed | Multiple | One |
| Import Syntax | {} Required | {} Not Required |
| Name Must Match | Yes | No |

---

# Example

## Named Export

```javascript
export const name = "John";
```

Import:

```javascript
import { name } from "./file.js";
```

---

## Default Export

```javascript
export default "John";
```

Import:

```javascript
import userName from "./file.js";
```

---

# Import Everything

```javascript
import * as MathUtils from "./math.js";

console.log(MathUtils.PI);
console.log(MathUtils.add(10, 20));
```

Output:

```javascript
3.14
30
```

---

# React Example

## User.js

```javascript
export default function User() {
  return <h1>User Component</h1>;
}
```

## App.js

```javascript
import User from "./User";

function App() {
  return <User />;
}
```

This is how React components are commonly imported and exported.

---

# Common Follow-up Questions

### What is a Module?

A separate JavaScript file that contains reusable code.

### Why are Modules used?

- Code organization
- Reusability
- Maintainability
- Avoiding global scope pollution

### Difference Between Named and Default Export?

Named Export:

```javascript
export const name = "John";
```

Default Export:

```javascript
export default "John";
```

### Can a File Have Multiple Default Exports?

No.

A file can have only one default export.

### Can a File Have Multiple Named Exports?

Yes.

```javascript
export const a = 1;
export const b = 2;
export const c = 3;
```

---

# Most Common Interview Question

## Difference Between Import and Export

### export

Makes values available outside the file.

```javascript
export const name = "John";
```

### import

Uses values from another file.

```javascript
import { name } from "./file.js";
```

---

# One-Line Interview Summary

Modules allow JavaScript code to be split into reusable files, where `export` shares variables, functions, or classes and `import` brings them into other files.


# Question: What is a Callback Function in JavaScript?

## Interview Answer

A Callback Function is a function that is passed as an argument to another function and is executed later.

Callbacks allow one function to perform an action after another function has completed its task.

They are commonly used for event handling, array methods, and asynchronous operations.

## Easy Remember

Callback = A Function Passed to Another Function

"Call me back when you're done."

---

# Basic Example

```javascript
function greet(name) {
  console.log(`Hello ${name}`);
}

function processUser(callback) {
  callback("John");
}

processUser(greet);
```

Output:

```javascript
Hello John
```

Here:

- `greet` is the callback function.
- `processUser` executes the callback.

---

# Callback Using Anonymous Function

```javascript
function processUser(callback) {
  callback("John");
}

processUser(function(name) {
  console.log(`Hello ${name}`);
});
```

Output:

```javascript
Hello John
```

---

# Callback Using Arrow Function

```javascript
function processUser(callback) {
  callback("John");
}

processUser(name => {
  console.log(`Hello ${name}`);
});
```

Output:

```javascript
Hello John
```

---

# Real-World Example: setTimeout

```javascript
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```

Output (after 2 seconds):

```javascript
Executed after 2 seconds
```

The arrow function is the callback.

---

# Array Method Example

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

The function:

```javascript
num => num * 2
```

is a callback.

---

# Event Handling Example

```javascript
button.addEventListener("click", () => {
  console.log("Button Clicked");
});
```

The arrow function is the callback that runs when the button is clicked.

---

# Why Do We Use Callbacks?

- Execute code later
- Handle asynchronous operations
- Reuse logic
- Event handling
- Array methods

---

# Synchronous Callback Example

```javascript
function calculate(a, b, callback) {
  return callback(a, b);
}

const result = calculate(
  10,
  20,
  (x, y) => x + y
);

console.log(result);
```

Output:

```javascript
30
```

---

# Asynchronous Callback Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside Callback");
}, 1000);

console.log("End");
```

Output:

```javascript
Start
End
Inside Callback
```

Explanation:

The callback runs after the timer completes.

---

# Callback Hell

When many nested callbacks are used, code becomes difficult to read.

```javascript
getUser(function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      console.log(comments);
    });
  });
});
```

This is called:

```javascript
Callback Hell
```

To solve this, modern JavaScript uses:

- Promises
- Async/Await

---

# Common Follow-up Questions

### What is a Callback Function?

A function passed as an argument to another function.

### When is a Callback Executed?

When the outer function calls it.

### Why are Callbacks Used?

To execute code after another task finishes.

### What is Callback Hell?

Deeply nested callbacks that make code hard to read and maintain.

### What are the alternatives to Callback Hell?

- Promises
- Async/Await

---

# Most Common Interview Question

## Is map() Using a Callback?

Yes.

```javascript
numbers.map(num => num * 2);
```

The function:

```javascript
num => num * 2
```

is a callback function executed for each array element.

---

# One-Line Interview Summary

A Callback Function is a function passed as an argument to another function and executed later, commonly used in array methods, events, and asynchronous programming.


# Question: What are Promises in JavaScript?

## 20-Second Interview Answer

> A Promise is an object that represents the future result of an asynchronous operation. It has three states: Pending, Fulfilled, and Rejected. We use `.then()` for success, `.catch()` for errors, and `.finally()` for cleanup. Promises help avoid callback hell and make asynchronous code easier to read and maintain.

---

## Interview Answer

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

Promises help handle asynchronous tasks more cleanly than callbacks and avoid callback hell.

## Easy Remember

Promise = "I will give you a result later."

A Promise can be in one of three states:

1. Pending
2. Fulfilled
3. Rejected


---

# Promise States

## 1. Pending

Operation is still running.

```javascript
Pending
```

---

## 2. Fulfilled

Operation completed successfully.

```javascript
Resolved
```

---

## 3. Rejected

Operation failed.

```javascript
Rejected
```

---

# Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data Fetched Successfully");
  } else {
    reject("Something Went Wrong");
  }
});
```

---

# Consuming a Promise

Use:

- `.then()` → Success
- `.catch()` → Error
- `.finally()` → Always Runs

```javascript
promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
```

Output:

```javascript
Data Fetched Successfully
```

---

# Example with setTimeout

```javascript
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data Loaded");
  }, 2000);
});

promise.then(data => {
  console.log(data);
});
```

Output (after 2 seconds):

```javascript
Data Loaded
```

---

# Promise Rejection Example

```javascript
const promise = new Promise((resolve, reject) => {
  reject("Server Error");
});

promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

Output:

```javascript
Server Error
```

---

# finally()

Runs whether the Promise succeeds or fails.

```javascript
promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Completed");
  });
```

---

# Promise Chaining

```javascript
Promise.resolve(10)
  .then(num => num * 2)
  .then(num => num + 5)
  .then(result => {
    console.log(result);
  });
```

Output:

```javascript
25
```

---

# Real-World Example: Fetch API

```javascript
fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

---

# Why Promises?

Before Promises:

```javascript
getUser(function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      console.log(comments);
    });
  });
});
```

This creates:

```javascript
Callback Hell
```

Promises make code cleaner and easier to manage.

---

# Promise Methods

## Promise.resolve()

Creates a resolved promise.

```javascript
Promise.resolve("Success")
  .then(data => console.log(data));
```

---

## Promise.reject()

Creates a rejected promise.

```javascript
Promise.reject("Error")
  .catch(error => console.log(error));
```

---

## Promise.all()

Runs multiple promises in parallel.

```javascript
Promise.all([
  Promise.resolve("A"),
  Promise.resolve("B")
])
.then(result => {
  console.log(result);
});
```

Output:

```javascript
["A", "B"]
```

---

# Promises vs Callbacks

| Feature | Callbacks | Promises |
|----------|----------|----------|
| Readability | Lower | Better |
| Callback Hell | Possible | Avoided |
| Error Handling | Difficult | Easier |
| Chaining | Difficult | Easy |

---

# Common Follow-up Questions

### What is a Promise?

An object representing the future result of an asynchronous operation.

### What are the states of a Promise?

- Pending
- Fulfilled
- Rejected

### What is used to handle success?

```javascript
.then()
```

### What is used to handle errors?

```javascript
.catch()
```

### What is used to run code regardless of success or failure?

```javascript
.finally()
```

---

# Most Common Interview Question

## Difference Between Callbacks and Promises

### Callback

```javascript
getData(function(data) {
  console.log(data);
});
```

### Promise

```javascript
getData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

Promises provide cleaner code and better error handling.

---

# One-Line Interview Summary

A Promise is an object that represents the eventual success or failure of an asynchronous operation and helps manage async code using `.then()`, `.catch()`, and `.finally()`.




# Question: What are Async and Await in JavaScript?

## 20-Second Interview Answer

> Async/Await is a modern way to handle asynchronous operations in JavaScript. The `async` keyword makes a function return a Promise, and the `await` keyword pauses execution until the Promise is resolved. It makes asynchronous code look like synchronous code and improves readability.

---

## Interview Answer

`async` and `await` were introduced in ES2017.

They are built on top of Promises and provide a cleaner way to work with asynchronous code.

- `async` makes a function return a Promise.
- `await` waits for a Promise to complete.

This makes code easier to read and maintain.

---

## Easy Remember

```javascript
async = Returns Promise

await = Wait for Promise
```

Think:

```javascript
async → Start Async Function

await → Wait for Result
```

---

# async Example

```javascript
async function greet() {
  return "Hello";
}

console.log(greet());
```

Output:

```javascript
Promise { "Hello" }
```

Even though we return a string, JavaScript automatically wraps it in a Promise.

---

# await Example

```javascript
function getData() {
  return Promise.resolve("Data Received");
}

async function fetchData() {
  const data = await getData();

  console.log(data);
}

fetchData();
```

Output:

```javascript
Data Received
```

---

# Example with setTimeout

```javascript
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("John");
    }, 2000);
  });
}

async function fetchUser() {
  const user = await getUser();

  console.log(user);
}

fetchUser();
```

Output (after 2 seconds):

```javascript
John
```

---

# Promise Version

```javascript
getUser()
  .then(user => {
    console.log(user);
  })
  .catch(error => {
    console.log(error);
  });
```

---

# Async/Await Version

```javascript
async function fetchUser() {
  try {
    const user = await getUser();

    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
```

This is cleaner and easier to read.

---

# Error Handling

Use:

```javascript
try...catch
```

```javascript
async function getData() {
  try {
    const data = await fetch(url);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

---

# Real-World Fetch Example

```javascript
async function getProducts() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getProducts();
```

---

# Important Interview Point

### Can we use await without async?

No.

❌ Wrong

```javascript
const data = await getData();
```

✅ Correct

```javascript
async function fetchData() {
  const data = await getData();
}
```

`await` must be used inside an `async` function.

---

# Async/Await vs Promise

| Promise | Async/Await |
|----------|------------|
| Uses `.then()` | Uses `await` |
| More Chaining | Cleaner Syntax |
| Harder to Read | Easier to Read |
| More Nested | Looks Synchronous |

---

# Common Follow-up Questions

### What does async do?

Makes a function return a Promise.

### What does await do?

Waits for a Promise to resolve.

### Can await be used without async?

No.

### Is Async/Await built on Promises?

Yes.

Async/Await is just a cleaner way to work with Promises.

### How do we handle errors with Async/Await?

Using:

```javascript
try...catch
```

---

# Most Common Interview Question

## Difference Between Promise and Async/Await

### Promise

```javascript
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
```

### Async/Await

```javascript
const response = await fetch(url);

const data = await response.json();

console.log(data);
```

Async/Await is easier to read and write.

---

# One-Line Interview Summary

Async/Await is a modern way to handle asynchronous operations using Promises, making asynchronous code easier to read and maintain.



# Question: What is Promise Chaining in JavaScript?

## 20-Second Interview Answer

> Promise Chaining is a technique where multiple `.then()` methods are connected together. The result from one `.then()` is passed to the next `.then()`. It helps perform multiple asynchronous operations in sequence and makes code cleaner than nested callbacks.

---

## Interview Answer

Promise Chaining means connecting multiple `.then()` methods together.

The value returned from one `.then()` automatically becomes the input for the next `.then()`.

This allows us to perform multiple asynchronous operations one after another.

---

## Easy Remember

```javascript
Promise Chaining = Chain of .then()
```

Think:

```javascript
Step 1 → Step 2 → Step 3
```

Each step passes data to the next step.

---

# Basic Example

```javascript
Promise.resolve(10)
  .then(num => num * 2)
  .then(num => num + 5)
  .then(result => {
    console.log(result);
  });
```

Output:

```javascript
25
```

---

# How It Works

```javascript
Promise.resolve(10)
```

Value:

```javascript
10
```

First `.then()`

```javascript
10 * 2
```

Result:

```javascript
20
```

Second `.then()`

```javascript
20 + 5
```

Result:

```javascript
25
```

---

# Returning Values

```javascript
Promise.resolve(5)
  .then(num => {
    return num * 2;
  })
  .then(result => {
    console.log(result);
  });
```

Output:

```javascript
10
```

The returned value automatically goes to the next `.then()`.

---

# Returning Another Promise

```javascript
Promise.resolve(10)
  .then(num => {
    return Promise.resolve(num * 2);
  })
  .then(result => {
    console.log(result);
  });
```

Output:

```javascript
20
```

JavaScript waits for the returned Promise to complete.

---

# Real-World Fetch Example

```javascript
fetch("https://dummyjson.com/products")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

---

# Short Version

```javascript
fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

---

# Why Use Promise Chaining?

Without chaining:

```javascript
getUser()
  .then(user => {
    getPosts(user.id)
      .then(posts => {
        console.log(posts);
      });
  });
```

Nested code becomes harder to read.

---

# Better with Chaining

```javascript
getUser()
  .then(user => getPosts(user.id))
  .then(posts => {
    console.log(posts);
  });
```

Cleaner and easier to maintain.

---

# Promise Chaining vs Callback Hell

## Callback Hell

```javascript
getUser(function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      console.log(comments);
    });
  });
});
```

---

## Promise Chaining

```javascript
getUser()
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => {
    console.log(comments);
  });
```

Much cleaner.

---

# Error Handling in Chaining

```javascript
getUser()
  .then(user => getPosts(user.id))
  .then(posts => console.log(posts))
  .catch(error => {
    console.log(error);
  });
```

One `.catch()` can handle errors from the entire chain.

---

# Common Follow-up Questions

### What is Promise Chaining?

Connecting multiple `.then()` methods together.

### How is data passed between `.then()` methods?

Using `return`.

### Can we return another Promise inside `.then()`?

Yes.

JavaScript waits for it to resolve.

### Why is Promise Chaining useful?

It avoids callback hell and makes code cleaner.

### How do we handle errors in a chain?

Using:

```javascript
.catch()
```

---

# Most Common Interview Question

## Why do we use return inside `.then()`?

```javascript
getUser()
  .then(user => {
    return getPosts(user.id);
  })
  .then(posts => {
    console.log(posts);
  });
```

### Answer

`return` passes the result to the next `.then()`.

Without `return`, the next `.then()` will not receive the value.

---

# One-Line Interview Summary

Promise Chaining is the process of connecting multiple `.then()` methods where each step passes its result to the next step, making asynchronous code cleaner and easier to manage.


# Question: What is Promise.all() in JavaScript?

## 20-Second Interview Answer

> `Promise.all()` is a Promise method used to run multiple Promises in parallel. It waits until all Promises are successfully resolved and then returns their results as an array. If any one Promise fails, `Promise.all()` immediately rejects with that error.

---

## Interview Answer

`Promise.all()` is used when we want to execute multiple asynchronous operations at the same time.

It accepts an array of Promises and returns a single Promise.

- All Promises succeed → Returns all results.
- Any one Promise fails → Entire Promise fails.

---

## Easy Remember

```javascript
Promise.all()
```

Means:

```javascript
Wait for ALL Promises
```

If one fails:

```javascript
Everything fails
```

---

# Syntax

```javascript
Promise.all([
  promise1,
  promise2,
  promise3
]);
```

---

# Basic Example

```javascript
const promise1 = Promise.resolve("A");
const promise2 = Promise.resolve("B");
const promise3 = Promise.resolve("C");

Promise.all([
  promise1,
  promise2,
  promise3
])
.then(result => {
  console.log(result);
});
```

Output:

```javascript
["A", "B", "C"]
```

---

# Example with setTimeout

```javascript
const p1 = new Promise(resolve => {
  setTimeout(() => resolve("User"), 1000);
});

const p2 = new Promise(resolve => {
  setTimeout(() => resolve("Posts"), 2000);
});

Promise.all([p1, p2])
  .then(result => {
    console.log(result);
  });
```

Output (after 2 seconds):

```javascript
["User", "Posts"]
```

Notice:

`Promise.all()` waits for both Promises.

---

# If One Promise Fails

```javascript
const p1 = Promise.resolve("Success");

const p2 = Promise.reject("Error");

Promise.all([p1, p2])
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
```

Output:

```javascript
Error
```

The whole Promise fails.

---

# Real-World API Example

```javascript
Promise.all([
  fetch("/users"),
  fetch("/products"),
  fetch("/orders")
])
.then(responses => {
  console.log(responses);
})
.catch(error => {
  console.log(error);
});
```

All API calls run in parallel.

This improves performance.

---

# Async/Await Example

```javascript
async function getData() {
  try {
    const results = await Promise.all([
      Promise.resolve("User"),
      Promise.resolve("Products")
    ]);

    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

getData();
```

Output:

```javascript
["User", "Products"]
```

---

# Why Use Promise.all()?

Without `Promise.all()`:

```javascript
await getUsers();
await getProducts();
await getOrders();
```

Runs one after another.

---

With `Promise.all()`:

```javascript
await Promise.all([
  getUsers(),
  getProducts(),
  getOrders()
]);
```

Runs all together.

Faster execution.

---

# Promise.all() vs Promise.allSettled()

## Promise.all()

If one fails:

```javascript
Rejected
```

---

## Promise.allSettled()

Waits for all Promises, even if some fail.

```javascript
Promise.allSettled([
  promise1,
  promise2
]);
```

Returns success and failure results.

---

# Common Follow-up Questions

### What does Promise.all() return?

A single Promise.

### What does it return on success?

An array of results.

### What happens if one Promise fails?

The entire Promise is rejected.

### Does Promise.all() run Promises sequentially?

No.

It runs them in parallel.

### When should we use Promise.all()?

When multiple independent async tasks can run at the same time.

---

# Most Common Interview Question

## What is the output?

```javascript
Promise.all([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve(30)
])
.then(result => {
  console.log(result);
});
```

Output:

```javascript
[10, 20, 30]
```

Because all Promises resolved successfully.

---

# One-Line Interview Summary

`Promise.all()` runs multiple Promises in parallel, waits for all of them to resolve, and returns their results as an array, but rejects immediately if any Promise fails.



# Question: What is the Fetch API in JavaScript?

## 20-Second Interview Answer

> The Fetch API is a built-in JavaScript API used to make HTTP requests to a server. It returns a Promise, which allows us to handle asynchronous operations using `.then()` and `.catch()` or `async/await`. It is commonly used to fetch data from APIs.

---

## Interview Answer

The Fetch API is used to send requests to a server and receive responses.

It is commonly used to:

- Get data from APIs
- Send data to a server
- Update data
- Delete data

The `fetch()` function returns a Promise.

---

## Easy Remember

```javascript
fetch()
```

Means:

```javascript
Get Data From Server
```

---

# Syntax

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

---

# Basic Example

```javascript
fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

---

# How It Works

## Step 1

```javascript
fetch(url)
```

Sends request to the server.

Returns:

```javascript
Promise
```

---

## Step 2

```javascript
response.json()
```

Converts response into JavaScript object.

Also returns a Promise.

---

## Step 3

```javascript
.then(data => {})
```

Gets the actual data.

---

# Using Async/Await

```javascript
async function getProducts() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getProducts();
```

This is the modern way.

---

# GET Request

Default request type.

```javascript
fetch("https://dummyjson.com/products");
```

Used to get data.

---

# POST Request

Used to send data.

```javascript
fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "New Product"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

---

# Common HTTP Methods

| Method | Purpose |
|----------|----------|
| GET | Get Data |
| POST | Create Data |
| PUT | Update Entire Data |
| PATCH | Update Partial Data |
| DELETE | Delete Data |

---

# Important Interview Point

## Does fetch() Return Data Directly?

No.

```javascript
const data = fetch(url);

console.log(data);
```

Output:

```javascript
Promise { <pending> }
```

Because `fetch()` returns a Promise.

---

# Wrong Way

```javascript
const data = fetch(url);

console.log(data.products);
```

This will not work.

---

# Correct Way

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.products);
  });
```

Or:

```javascript
const response = await fetch(url);
const data = await response.json();
```

---

# Why response.json()?

Server sends data as JSON.

```javascript
response.json()
```

converts JSON into a JavaScript object.

---

# Common Follow-up Questions

### What is Fetch API?

A built-in API used to make HTTP requests.

### What does fetch() return?

A Promise.

### Why do we use response.json()?

To convert JSON response into a JavaScript object.

### Can Fetch API be used with Async/Await?

Yes.

```javascript
const response = await fetch(url);
```

### Is Fetch API asynchronous?

Yes.

It works with Promises.

---

# Most Common Interview Question

## Why do we use two awaits here?

```javascript
const response = await fetch(url);

const data = await response.json();
```

### Answer

First await:

```javascript
await fetch(url)
```

Waits for the server response.

Second await:

```javascript
await response.json()
```

Waits for JSON conversion.

Both operations are asynchronous.

---

# One-Line Interview Summary

The Fetch API is a built-in JavaScript API used to make HTTP requests, and it returns a Promise that can be handled using `.then()` or `async/await`.



# Question: What is the Event Loop in JavaScript?

## 20-Second Interview Answer

> The Event Loop is a mechanism in JavaScript that allows asynchronous operations to run without blocking the main thread. It continuously checks whether the Call Stack is empty, and if it is, it moves tasks from the Callback Queue to the Call Stack for execution.

---

## Interview Answer

JavaScript is a:

```javascript
Single-Threaded Language
```

It can execute only one task at a time.

But JavaScript can still handle:

- API calls
- Timers
- User events

This is possible because of the Event Loop.

The Event Loop manages asynchronous tasks and ensures they run when the Call Stack becomes empty.

---

## Easy Remember

```javascript
Event Loop = Traffic Police
```

It checks:

```javascript
Is the Call Stack Empty?
```

If yes:

```javascript
Move task from Queue → Call Stack
```

---

# Components Involved

## 1. Call Stack

Executes JavaScript code.

```javascript
Function Execution Area
```

---

## 2. Web APIs

Provided by the browser.

Examples:

```javascript
setTimeout()
fetch()
DOM Events
```

---

## 3. Callback Queue

Stores completed callback functions.

```javascript
Waiting Area
```

---

## 4. Event Loop

Checks:

```javascript
Is Call Stack Empty?
```

If yes:

```javascript
Move Callback → Call Stack
```

---

# Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

Output:

```javascript
Start
End
Timer
```

---

# Step-by-Step Execution

## Step 1

```javascript
console.log("Start");
```

Output:

```javascript
Start
```

---

## Step 2

```javascript
setTimeout(...)
```

Moves timer to Web API.

---

## Step 3

```javascript
console.log("End");
```

Output:

```javascript
End
```

---

## Step 4

Timer completes.

Callback moves to:

```javascript
Callback Queue
```

---

## Step 5

Event Loop checks:

```javascript
Is Call Stack Empty?
```

Yes.

Moves callback to Call Stack.

Output:

```javascript
Timer
```

---

# Visual Flow

```javascript
Call Stack
    ↓
Web APIs
    ↓
Callback Queue
    ↓
Event Loop
    ↓
Call Stack
```

---

# Another Example

```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

console.log(3);
```

Output:

```javascript
1
3
2
```

Why?

Because `setTimeout()` is asynchronous.

JavaScript does not wait for it.

---

# Common Follow-up Questions

### What is the Event Loop?

A mechanism that moves callbacks from the queue to the Call Stack when the stack becomes empty.

### Why is the Event Loop needed?

Because JavaScript is single-threaded and needs a way to handle asynchronous tasks.

### What does the Event Loop check?

Whether the Call Stack is empty.

### Does setTimeout() run immediately?

No.

It first goes to Web APIs and then to the Callback Queue.

### Is JavaScript synchronous or asynchronous?

JavaScript is synchronous by nature but can handle asynchronous tasks using the Event Loop.

---

# Most Common Interview Question

## What is the output?

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 0);

console.log("End");
```

Output:

```javascript
Start
End
Hello
```

### Why?

Even with:

```javascript
0ms
```

the callback goes through:

```javascript
Web API
→ Callback Queue
→ Event Loop
→ Call Stack
```

So it executes after synchronous code finishes.

---

# One-Line Interview Summary

The Event Loop is a mechanism that continuously checks the Call Stack and moves asynchronous callbacks from the Callback Queue to the Call Stack when the stack becomes empty.


# Question: What is the Difference Between Microtasks and Macrotasks in JavaScript?

## 20-Second Interview Answer

> JavaScript maintains two queues: the Microtask Queue and the Macrotask Queue. Microtasks have higher priority and are executed before Macrotasks. Promise callbacks and MutationObserver are Microtasks, while setTimeout, setInterval, and DOM events are Macrotasks.

---

## Interview Answer

When asynchronous tasks are completed, they are placed into queues.

JavaScript mainly uses:

1. Microtask Queue
2. Macrotask Queue

The Event Loop always executes:

```javascript
Microtasks First
```

and then:

```javascript
Macrotasks
```

---

## Easy Remember

```javascript
Microtask = High Priority

Macrotask = Normal Priority
```

Event Loop Rule:

```javascript
1. Execute Call Stack

2. Execute All Microtasks

3. Execute One Macrotask

4. Repeat
```

---

# Microtasks

Examples:

```javascript
Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()
```

These run before Macrotasks.

---

# Macrotasks

Examples:

```javascript
setTimeout()
setInterval()
DOM Events
setImmediate() (Node.js)
```

These run after Microtasks.

---

# Example 1

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise");
  });

console.log("End");
```

Output:

```javascript
Start
End
Promise
Timeout
```

---

# Why?

### Step 1

```javascript
console.log("Start");
```

Output:

```javascript
Start
```

---

### Step 2

```javascript
setTimeout()
```

Goes to:

```javascript
Macrotask Queue
```

---

### Step 3

```javascript
Promise.then()
```

Goes to:

```javascript
Microtask Queue
```

---

### Step 4

```javascript
console.log("End");
```

Output:

```javascript
End
```

---

### Step 5

Call Stack becomes empty.

Event Loop checks:

```javascript
Microtask Queue First
```

Output:

```javascript
Promise
```

---

### Step 6

Then Macrotask runs.

Output:

```javascript
Timeout
```

---

# Visual Flow

```javascript
Call Stack
      ↓
Microtask Queue
      ↓
Macrotask Queue
```

Priority:

```javascript
Microtask > Macrotask
```

---

# Example 2

```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve()
  .then(() => {
    console.log(3);
  });

console.log(4);
```

Output:

```javascript
1
4
3
2
```

---

# Common Interview Question

## What is the output?

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("C");
  });

console.log("D");
```

Output:

```javascript
A
D
C
B
```

### Why?

Because:

```javascript
Promise.then()
```

is a Microtask.

and

```javascript
setTimeout()
```

is a Macrotask.

Microtasks execute first.

---

# Common Follow-up Questions

### Which has higher priority?

```javascript
Microtask Queue
```

---

### Is Promise.then() a Microtask?

Yes.

---

### Is setTimeout() a Macrotask?

Yes.

---

### Which runs first?

```javascript
Promise.then()
```

or

```javascript
setTimeout()
```

Answer:

```javascript
Promise.then()
```

---

### Why?

Because Microtasks have higher priority than Macrotasks.

---

# Quick Table

| Microtasks | Macrotasks |
|------------|------------|
| Promise.then() | setTimeout() |
| Promise.catch() | setInterval() |
| Promise.finally() | DOM Events |
| queueMicrotask() | setImmediate() |

---

# One-Line Interview Summary

Microtasks and Macrotasks are task queues used by the Event Loop, where Microtasks (Promises) always execute before Macrotasks (setTimeout, events).


# Question: What is Execution Context in JavaScript?

## 20-Second Interview Answer

> Execution Context is the environment in which JavaScript code runs. It contains variables, functions, and the value of `this`. Whenever JavaScript executes code, it creates an Execution Context to manage and execute that code.

---

## Interview Answer

Before JavaScript executes any code, it creates an Execution Context.

Execution Context is simply:

```javascript
The environment where code runs
```

It stores:

- Variables
- Functions
- The `this` keyword

JavaScript cannot execute code without an Execution Context.

---

## Easy Remember

```javascript
Execution Context = Workspace
```

Before doing work:

```javascript
JavaScript creates a workspace
```

Then it stores:

```javascript
Variables
Functions
this
```

inside that workspace.

---

# Types of Execution Context

## 1. Global Execution Context (GEC)

Created when the program starts.

```javascript
Created Only Once
```

Example:

```javascript
let name = "John";

function greet() {
  console.log("Hello");
}
```

Both are stored in the Global Execution Context.

---

## 2. Function Execution Context (FEC)

Created whenever a function is called.

Example:

```javascript
function greet() {
  let message = "Hello";
}

greet();
```

When:

```javascript
greet();
```

runs, JavaScript creates a new Function Execution Context.

---

# Example

```javascript
let name = "John";

function greet() {
  let age = 25;

  console.log(name);
}

greet();
```

---

# What Happens?

### Step 1

JavaScript creates:

```javascript
Global Execution Context
```

Stores:

```javascript
name
greet()
```

---

### Step 2

```javascript
greet();
```

is called.

JavaScript creates:

```javascript
Function Execution Context
```

Stores:

```javascript
age
```

---

### Step 3

Function finishes.

Function Execution Context is removed.

---

# Phases of Execution Context

There are two phases.

---

## 1. Memory Creation Phase

JavaScript scans the code first.

Allocates memory for:

- Variables
- Functions

Example:

```javascript
console.log(a);

var a = 10;
```

Memory Phase:

```javascript
a = undefined
```

This is why hoisting happens.

---

## 2. Execution Phase

JavaScript executes code line by line.

```javascript
a = 10;
```

Now:

```javascript
a = 10
```

---

# Execution Context Stack (Call Stack)

JavaScript manages Execution Contexts using:

```javascript
Call Stack
```

---

# Example

```javascript
function one() {
  two();
}

function two() {
  console.log("Hello");
}

one();
```

---

# Stack Flow

```javascript
Global Context
```

↓

```javascript
one()
```

↓

```javascript
two()
```

↓

```javascript
two() removed
```

↓

```javascript
one() removed
```

↓

```javascript
Global Context
```

---

# Visual Representation

```javascript
Call Stack

--------------
two()
--------------
one()
--------------
Global
--------------
```

---

# Common Follow-up Questions

### What is Execution Context?

The environment where JavaScript code executes.

### What does it contain?

- Variables
- Functions
- this

### How many types are there?

- Global Execution Context
- Function Execution Context

### What are the phases?

- Memory Creation Phase
- Execution Phase

### Which data structure manages Execution Context?

```javascript
Call Stack
```

---

# Most Common Interview Question

## Why does hoisting happen?

Because during the:

```javascript
Memory Creation Phase
```

JavaScript allocates memory for variables and functions before executing the code.

---

# One-Line Interview Summary

Execution Context is the environment in which JavaScript code runs, storing variables, functions, and `this`, and it is managed using the Call Stack.


# Question: What is the Call Stack in JavaScript?

## 20-Second Interview Answer

> The Call Stack is a data structure used by JavaScript to keep track of function calls. It follows the LIFO (Last In, First Out) principle. When a function is called, it is pushed onto the stack, and when it finishes execution, it is removed from the stack.

---

## Interview Answer

The Call Stack is a mechanism that JavaScript uses to manage function execution.

It keeps track of:

- Which function is currently running
- Which function should run next

The Call Stack follows:

```javascript
LIFO
```

Meaning:

```javascript
Last In, First Out
```

---

## Easy Remember

Think of a stack of plates.

```javascript
Last Plate Added
=
First Plate Removed
```

Same with functions.

```javascript
Last Function Called
=
First Function Completed
```

---

# How Call Stack Works

When a function is called:

```javascript
Push into Stack
```

When a function finishes:

```javascript
Pop from Stack
```

---

# Example 1

```javascript
function greet() {
  console.log("Hello");
}

greet();
```

---

# Stack Flow

```javascript
Global Context
```

↓

```javascript
greet()
```

↓

```javascript
greet() removed
```

↓

```javascript
Global Context
```

---

# Example 2

```javascript
function one() {
  two();
}

function two() {
  console.log("Hello");
}

one();
```

---

# Execution Flow

### Step 1

Global Execution Context enters stack.

```javascript
Global
```

---

### Step 2

```javascript
one()
```

is called.

```javascript
one()
Global
```

---

### Step 3

```javascript
two()
```

is called.

```javascript
two()
one()
Global
```

---

### Step 4

`two()` completes.

```javascript
one()
Global
```

---

### Step 5

`one()` completes.

```javascript
Global
```

---

# Visual Representation

```javascript
--------------
two()
--------------
one()
--------------
Global
--------------
```

After execution:

```javascript
--------------
Global
--------------
```

---

# Call Stack and Execution Context

Each function call creates:

```javascript
Function Execution Context
```

The Call Stack stores these Execution Contexts.

---

# Stack Overflow Example

```javascript
function test() {
  test();
}

test();
```

Output:

```javascript
RangeError:
Maximum call stack size exceeded
```

---

# Why?

Because:

```javascript
test()
```

keeps calling itself forever.

The stack becomes full.

This is called:

```javascript
Stack Overflow
```

---

# Call Stack and Event Loop

```javascript
setTimeout(() => {
  console.log("Hello");
}, 0);
```

The callback does not enter the Call Stack immediately.

It first goes to:

```javascript
Web API
```

Then:

```javascript
Callback Queue
```

Then:

```javascript
Event Loop
```

Finally:

```javascript
Call Stack
```

when the stack becomes empty.

---

# Common Follow-up Questions

### What is the Call Stack?

A data structure that manages function execution.

### Which principle does it follow?

```javascript
LIFO
```

Last In, First Out.

### What happens when a function is called?

It is pushed onto the stack.

### What happens when a function finishes?

It is removed from the stack.

### What causes Stack Overflow?

Too many function calls, usually due to infinite recursion.

---

# Most Common Interview Question

## What is the output?

```javascript
function one() {
  console.log("One");
}

function two() {
  one();
  console.log("Two");
}

two();
```

Output:

```javascript
One
Two
```

### Call Stack Flow

```javascript
Global
```

↓

```javascript
two()
```

↓

```javascript
one()
```

↓

```javascript
one() removed
```

↓

```javascript
two() removed
```

↓

```javascript
Global
```

---

# One-Line Interview Summary

The Call Stack is a LIFO data structure that JavaScript uses to manage function calls and execution contexts.
# Question: What are Prototype and Prototype Inheritance in JavaScript?

## 20-Second Interview Answer

> A Prototype is an object from which other objects inherit properties and methods. Prototype Inheritance allows one object to access properties and methods of another object through the prototype chain. This helps in code reuse and is the foundation of inheritance in JavaScript.

---

## Interview Answer

JavaScript is a:

```javascript
Prototype-Based Language
```

This means objects can inherit properties and methods from other objects.

Every JavaScript object has a hidden link to another object called:

```javascript
Prototype
```

When a property is not found in the current object, JavaScript looks for it in its prototype.

---

## Easy Remember

```javascript
Prototype = Parent Object

Prototype Inheritance = Child Uses Parent Properties
```

Think:

```javascript
Child → Parent → Grandparent
```

JavaScript keeps searching until it finds the property.

---

# Basic Example

```javascript
const person = {
  greet() {
    console.log("Hello");
  }
};

const user = {};

Object.setPrototypeOf(
  user,
  person
);

user.greet();
```

Output:

```javascript
Hello
```

---

# What Happened?

```javascript
user
```

does not have:

```javascript
greet()
```

So JavaScript looks in:

```javascript
person
```

and finds it.

This is:

```javascript
Prototype Inheritance
```

---

# Prototype Chain

```javascript
user
   ↓
person
   ↓
Object.prototype
   ↓
null
```

This chain is called:

```javascript
Prototype Chain
```

---

# Constructor Function Example

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello ${this.name}`);
};

const user1 = new Person("John");

user1.greet();
```

Output:

```javascript
Hello John
```

---

# Why Use Prototype?

Without Prototype:

```javascript
function Person(name) {
  this.name = name;

  this.greet = function() {
    console.log("Hello");
  };
}
```

Every object gets its own copy of:

```javascript
greet()
```

which wastes memory.

---

# Better with Prototype

```javascript
Person.prototype.greet =
  function() {
    console.log("Hello");
  };
```

Now all objects share one method.

Better performance.

---

# Example

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.country =
  "India";

const user1 = new Person("John");

console.log(user1.country);
```

Output:

```javascript
India
```

Property is inherited from the prototype.

---

# Checking Prototype

```javascript
console.log(user1.__proto__);
```

or

```javascript
console.log(
  Object.getPrototypeOf(user1)
);
```

---

# Common Follow-up Questions

### What is a Prototype?

An object from which other objects inherit properties and methods.

### What is Prototype Inheritance?

The ability of one object to access properties and methods from another object through the prototype chain.

### Why is Prototype used?

For code reuse and memory optimization.

### What is the Prototype Chain?

The chain JavaScript follows to find properties that do not exist in the current object.

### Does every object have a Prototype?

Yes.

---

# Most Common Interview Question

## What is the output?

```javascript
function Person() {}

Person.prototype.city =
  "Bhubaneswar";

const user = new Person();

console.log(user.city);
```

Output:

```javascript
Bhubaneswar
```

### Why?

Because:

```javascript
city
```

is inherited from:

```javascript
Person.prototype
```

---

# One-Line Interview Summary

A Prototype is an object used for inheritance in JavaScript, and Prototype Inheritance allows objects to access properties and methods from their prototype chain.
# Question: What are Classes in JavaScript?

## 20-Second Interview Answer

> Classes were introduced in ES6 and provide a cleaner way to create objects and implement inheritance. A class acts as a blueprint for creating objects with properties and methods. Internally, JavaScript classes are built on prototypes.

---

## Interview Answer

A class is a blueprint for creating objects.

Using a class, we can create multiple objects with the same properties and methods.

Classes make the code cleaner and easier to read compared to constructor functions.

---

## Easy Remember

```javascript
Class = Blueprint

Object = Real House
```

Think:

```javascript
Class → Create Objects
```

---

# Syntax

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
```

---

# Creating Object

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const user1 = new Person("John");

user1.greet();
```

Output:

```javascript
Hello John
```

---

# constructor()

The constructor is a special method.

It runs automatically when an object is created.

```javascript
constructor(name) {
  this.name = name;
}
```

---

# Multiple Objects

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const user1 = new Person("John");
const user2 = new Person("David");

console.log(user1.name);
console.log(user2.name);
```

Output:

```javascript
John
David
```

---

# Class Methods

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(
      `Hello ${this.name}`
    );
  }
}

const user = new Person("John");

user.greet();
```

Output:

```javascript
Hello John
```

---

# Inheritance Using extends

```javascript
class Person {
  greet() {
    console.log("Hello");
  }
}

class Student extends Person {}

const student =
  new Student();

student.greet();
```

Output:

```javascript
Hello
```

Student inherits from Person.

---

# super()

Used to call the parent class constructor.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);

    this.course = course;
  }
}

const student =
  new Student(
    "John",
    "React"
  );

console.log(student);
```

Output:

```javascript
{
  name: "John",
  course: "React"
}
```

---

# Class vs Constructor Function

## Constructor Function

```javascript
function Person(name) {
  this.name = name;
}
```

---

## Class

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

Class syntax is cleaner.

---

# Important Interview Point

### Are Classes a New Concept in JavaScript?

No.

Classes are just a cleaner syntax over:

```javascript
Prototype-Based Inheritance
```

Internally, classes use prototypes.

---

# Common Follow-up Questions

### What is a Class?

A blueprint for creating objects.

### What is a Constructor?

A special method that runs when an object is created.

### Which keyword creates an object?

```javascript
new
```

### Which keyword is used for inheritance?

```javascript
extends
```

### Which keyword calls the parent constructor?

```javascript
super()
```

### Are Classes built on Prototypes?

Yes.

Internally, classes use prototypes.

---

# Most Common Interview Question

## Difference Between Class and Object

### Class

Blueprint

```javascript
class Person {}
```

---

### Object

Instance of a class

```javascript
const user =
  new Person();
```

---

# One-Line Interview Summary

A Class is a blueprint for creating objects, providing a cleaner syntax for object creation and inheritance while internally using JavaScript prototypes.

# Question: What is Pass by Value and Pass by Reference in JavaScript?

## 20-Second Interview Answer

> In JavaScript, primitive data types are passed by value, which means a copy of the value is passed. Objects and arrays are passed by reference, which means changes made through one reference can affect the original object.

---

## Interview Answer

When we assign a variable or pass it to a function, JavaScript handles it in two ways:

1. Pass by Value
2. Pass by Reference

The behavior depends on the data type.

---

## Easy Remember

```javascript
Primitive → Copy

Object/Array → Reference
```

Think:

```javascript
Pass by Value
=
New Copy
```

```javascript
Pass by Reference
=
Same Object
```

---

# Pass by Value

Used for Primitive Data Types:

- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

---

## Example

```javascript
let a = 10;

let b = a;

b = 20;

console.log(a);
console.log(b);
```

Output:

```javascript
10
20
```

---

# Why?

```javascript
b
```

gets a copy of:

```javascript
a
```

Changing:

```javascript
b
```

does not affect:

```javascript
a
```

---

# Visual Representation

```javascript
a → 10

b → 10
```

Two separate values.

---

# Pass by Reference

Used for:

- Objects
- Arrays

---

## Example

```javascript
const user1 = {
  name: "John"
};

const user2 = user1;

user2.name = "David";

console.log(user1.name);
console.log(user2.name);
```

Output:

```javascript
David
David
```

---

# Why?

Both variables point to the same object.

```javascript
user1
   ↓
Object

user2
   ↑
```

Changing one affects the other.

---

# Array Example

```javascript
const arr1 = [1, 2, 3];

const arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

Output:

```javascript
[1, 2, 3, 4]
```

Because both variables refer to the same array.

---

# Creating a Copy of Object

Use Spread Operator.

```javascript
const user1 = {
  name: "John"
};

const user2 = {
  ...user1
};

user2.name = "David";

console.log(user1.name);
```

Output:

```javascript
John
```

Now they are separate objects.

---

# Creating a Copy of Array

```javascript
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
```

Output:

```javascript
[1, 2, 3]
```

---

# Function Example (Primitive)

```javascript
function update(num) {
  num = 20;
}

let value = 10;

update(value);

console.log(value);
```

Output:

```javascript
10
```

Primitive values are copied.

---

# Function Example (Object)

```javascript
function update(user) {
  user.name = "David";
}

const person = {
  name: "John"
};

update(person);

console.log(person.name);
```

Output:

```javascript
David
```

Object reference is passed.

---

# Important Interview Point

Technically, JavaScript is always:

```javascript
Pass by Value
```

For objects, the value being copied is the reference (memory address).

That's why people commonly say:

```javascript
Objects are passed by Reference
```

For interviews, this explanation is accepted.

---

# Common Follow-up Questions

### Which data types are passed by value?

Primitive data types.

### Which data types are passed by reference?

Objects and arrays.

### Does changing a copied object affect the original?

Yes.

If both variables reference the same object.

### How do we create a new copy of an object?

```javascript
{ ...obj }
```

### How do we create a new copy of an array?

```javascript
[ ...arr ]
```

---

# Most Common Interview Question

## What is the output?

```javascript
const obj1 = {
  name: "John"
};

const obj2 = obj1;

obj2.name = "David";

console.log(obj1.name);
```

Output:

```javascript
David
```

Because both variables point to the same object.

---

# One-Line Interview Summary

Primitive values are passed by value (copy), while objects and arrays share references, so changes through one variable can affect the original data.

# Question: What is the Difference Between Shallow Copy and Deep Copy in JavaScript?

## 20-Second Interview Answer

> A Shallow Copy copies only the first level of an object. Nested objects still share the same reference. A Deep Copy creates completely independent copies of all nested objects and arrays. Changes in a Deep Copy do not affect the original object.

---

## Interview Answer

When we copy an object, there are two possibilities:

1. Shallow Copy
2. Deep Copy

The difference is how nested objects are copied.

---

## Easy Remember

```javascript
Shallow Copy
=
Top Level Copied
```

```javascript
Deep Copy
=
Everything Copied
```

---

# Shallow Copy

A shallow copy creates a new object.

But nested objects still share the same reference.

---

## Example

```javascript
const user1 = {
  name: "John",
  address: {
    city: "Cuttack"
  }
};

const user2 = {
  ...user1
};

user2.name = "David";

console.log(user1.name);
```

Output:

```javascript
John
```

Top-level property is copied.

---

# Problem with Nested Object

```javascript
const user1 = {
  name: "John",
  address: {
    city: "Cuttack"
  }
};

const user2 = {
  ...user1
};

user2.address.city =
  "Bhubaneswar";

console.log(user1.address.city);
```

Output:

```javascript
Bhubaneswar
```

---

# Why?

Because:

```javascript
address
```

is still shared.

```javascript
user1.address
      ↑
      ↓
user2.address
```

Same reference.

---

# Ways to Create Shallow Copy

## Object

```javascript
const copy = {
  ...obj
};
```

or

```javascript
const copy =
  Object.assign({}, obj);
```

---

## Array

```javascript
const copy = [...arr];
```

---

# Deep Copy

A deep copy creates completely separate copies.

Nested objects are also copied.

Changes do not affect the original object.

---

## Example

```javascript
const user1 = {
  name: "John",
  address: {
    city: "Cuttack"
  }
};

const user2 =
  structuredClone(user1);

user2.address.city =
  "Bhubaneswar";

console.log(
  user1.address.city
);
```

Output:

```javascript
Cuttack
```

Original object remains unchanged.

---

# Using structuredClone()

Modern JavaScript method.

```javascript
const deepCopy =
  structuredClone(obj);
```

Creates a true deep copy.

---

# Older Method

```javascript
const deepCopy =
  JSON.parse(
    JSON.stringify(obj)
  );
```

---

# Limitation

```javascript
JSON.stringify()
```

does not handle:

- Functions
- undefined
- Date objects properly

So:

```javascript
structuredClone()
```

is preferred.

---

# Shallow Copy vs Deep Copy

| Shallow Copy | Deep Copy |
|-------------|-----------|
| Copies first level only | Copies all levels |
| Nested objects share reference | Nested objects are copied |
| Faster | Slightly slower |
| Spread Operator | structuredClone() |

---

# Common Follow-up Questions

### What is a Shallow Copy?

Copies only the first level of an object.

### What is a Deep Copy?

Copies all levels including nested objects.

### Is the spread operator deep copy?

No.

```javascript
{ ...obj }
```

creates a shallow copy.

### How do you create a deep copy?

```javascript
structuredClone(obj);
```

### Which is safer for nested objects?

```javascript
Deep Copy
```

---

# Most Common Interview Question

## Is Spread Operator Deep Copy?

```javascript
const copy = {
  ...obj
};
```

Answer:

```javascript
No
```

It creates a:

```javascript
Shallow Copy
```

Nested objects still share the same reference.

---

# One-Line Interview Summary

A Shallow Copy copies only the first level of an object, while a Deep Copy creates completely independent copies of all nested objects and arrays.

# Question: What is Local Storage in JavaScript?

## 20-Second Interview Answer

> Local Storage is a browser storage mechanism that allows us to store data as key-value pairs in the user's browser. The data remains available even after the browser is closed and reopened. It is commonly used to store user preferences, theme settings, and login information.

---

## Interview Answer

Local Storage is a feature provided by the browser.

It allows us to store data inside the browser.

The data:

```javascript
Persists Even After Browser Close
```

Unlike variables, Local Storage data does not disappear when the page refreshes.

---

## Easy Remember

```javascript
Local Storage
=
Permanent Browser Storage
```

Think:

```javascript
Refresh Page
✓ Data Stays

Close Browser
✓ Data Stays
```

---

# Features

- Stores data as key-value pairs
- Data remains after refresh
- Data remains after browser restart
- Storage limit is usually around 5MB

---

# Syntax

## Store Data

```javascript
localStorage.setItem(
  "name",
  "Jitendra"
);
```

---

## Get Data

```javascript
const name =
  localStorage.getItem("name");

console.log(name);
```

Output:

```javascript
Jitendra
```

---

## Remove Data

```javascript
localStorage.removeItem(
  "name"
);
```

---

## Clear All Data

```javascript
localStorage.clear();
```

Removes everything from Local Storage.

---

# Example

```javascript
localStorage.setItem(
  "city",
  "Cuttack"
);

const city =
  localStorage.getItem("city");

console.log(city);
```

Output:

```javascript
Cuttack
```

---

# Storing Objects

Local Storage stores only strings.

So objects must be converted into JSON.

---

## Store Object

```javascript
const user = {
  name: "John",
  age: 25
};

localStorage.setItem(
  "user",
  JSON.stringify(user)
);
```

---

## Retrieve Object

```javascript
const user =
  JSON.parse(
    localStorage.getItem("user")
  );

console.log(user);
```

Output:

```javascript
{
  name: "John",
  age: 25
}
```

---

# Real-World Example

## Save Theme

```javascript
localStorage.setItem(
  "theme",
  "dark"
);
```

---

## Read Theme

```javascript
const theme =
  localStorage.getItem("theme");
```

Even after refresh:

```javascript
dark
```

is available.

---

# Local Storage vs Session Storage

| Local Storage | Session Storage |
|--------------|----------------|
| Data remains after browser close | Data removed after tab/browser close |
| Permanent storage | Temporary storage |
| Around 5MB | Around 5MB |

---

# Common Follow-up Questions

### What is Local Storage?

Browser storage used to store data as key-value pairs.

### Does Local Storage survive page refresh?

Yes.

### Does Local Storage survive browser restart?

Yes.

### Can Local Storage store objects directly?

No.

Use:

```javascript
JSON.stringify()
```

and

```javascript
JSON.parse()
```

### Which methods are commonly used?

```javascript
setItem()
getItem()
removeItem()
clear()
```

---

# Most Common Interview Question

## Why do we use JSON.stringify() in Local Storage?

Because Local Storage stores:

```javascript
Strings Only
```

Example:

```javascript
localStorage.setItem(
  "user",
  JSON.stringify(user)
);
```

Without it, objects cannot be stored properly.

---

# One-Line Interview Summary

Local Storage is a browser storage mechanism that stores data as key-value pairs and keeps the data even after page refreshes and browser restarts.

# Question: What is Session Storage in JavaScript?

## 20-Second Interview Answer

> Session Storage is a browser storage mechanism used to store data as key-value pairs for a single browser tab or session. The data remains available during the current session and is automatically removed when the tab or browser is closed.

---

## Interview Answer

Session Storage is provided by the browser.

It stores data temporarily for the current browser tab.

The data:

```javascript
Stays Until Tab Is Open
```

When the tab is closed:

```javascript
Data Is Removed
```

---

## Easy Remember

```javascript
Session Storage
=
Temporary Browser Storage
```

Think:

```javascript
Refresh Page
✓ Data Stays

Close Tab
✗ Data Removed
```

---

# Features

- Stores data as key-value pairs
- Data survives page refresh
- Data is removed when the tab is closed
- Data is available only in the current tab

---

# Syntax

## Store Data

```javascript
sessionStorage.setItem(
  "name",
  "Jitendra"
);
```

---

## Get Data

```javascript
const name =
  sessionStorage.getItem(
    "name"
  );

console.log(name);
```

Output:

```javascript
Jitendra
```

---

## Remove Data

```javascript
sessionStorage.removeItem(
  "name"
);
```

---

## Clear All Data

```javascript
sessionStorage.clear();
```

---

# Example

```javascript
sessionStorage.setItem(
  "city",
  "Cuttack"
);

const city =
  sessionStorage.getItem(
    "city"
  );

console.log(city);
```

Output:

```javascript
Cuttack
```

---

# Storing Objects

Session Storage stores only strings.

---

## Store Object

```javascript
const user = {
  name: "John",
  age: 25
};

sessionStorage.setItem(
  "user",
  JSON.stringify(user)
);
```

---

## Retrieve Object

```javascript
const user =
  JSON.parse(
    sessionStorage.getItem(
      "user"
    )
  );

console.log(user);
```

Output:

```javascript
{
  name: "John",
  age: 25
}
```

---

# Real-World Example

## Multi-Step Form

```javascript
sessionStorage.setItem(
  "step",
  "2"
);
```

If the user refreshes the page:

```javascript
step = 2
```

still exists.

But after closing the tab:

```javascript
Data Removed
```

---

# Session Storage vs Local Storage

| Session Storage | Local Storage |
|----------------|--------------|
| Temporary | Permanent |
| Removed when tab closes | Remains after browser close |
| Per tab | Shared across tabs of same origin |
| Stores key-value pairs | Stores key-value pairs |

---

# Common Follow-up Questions

### What is Session Storage?

Temporary browser storage for a single tab.

### Does Session Storage survive refresh?

Yes.

### Does Session Storage survive browser/tab close?

No.

### Can it store objects directly?

No.

Use:

```javascript
JSON.stringify()
```

and

```javascript
JSON.parse()
```

### Which methods are commonly used?

```javascript
setItem()
getItem()
removeItem()
clear()
```

---

# Most Common Interview Question

## Difference Between Local Storage and Session Storage

### Local Storage

```javascript
Data remains
after browser close.
```

---

### Session Storage

```javascript
Data removed
when tab closes.
```

---

# One-Line Interview Summary

Session Storage is a temporary browser storage mechanism that stores key-value data for a single tab and removes the data when the tab is closed.

# Question: What are Cookies in JavaScript?

## 20-Second Interview Answer

> Cookies are small pieces of data stored in the browser as key-value pairs. They are commonly used to store user information such as login sessions, authentication tokens, and user preferences. Unlike Local Storage, cookies are automatically sent to the server with every HTTP request.

---

## Interview Answer

Cookies are small data files stored in the browser.

They store information in:

```javascript
Key-Value Pairs
```

Cookies are mainly used for:

- Login sessions
- Authentication
- User preferences
- Tracking users

A special feature of cookies is:

```javascript
Cookies are sent to the server
with every request.
```

---

## Easy Remember

```javascript
Local Storage
=
Browser Only
```

```javascript
Cookies
=
Browser + Server
```

Think:

```javascript
Cookies travel with requests.
```

---

# Creating a Cookie

```javascript
document.cookie =
  "username=John";
```

---

# Reading Cookies

```javascript
console.log(
  document.cookie
);
```

Output:

```javascript
username=John
```

---

# Multiple Cookies

```javascript
document.cookie =
  "username=John";

document.cookie =
  "city=Cuttack";
```

Output:

```javascript
username=John; city=Cuttack
```

---

# Setting Expiry Date

```javascript
document.cookie =
  "username=John; expires=Fri, 31 Dec 2027 12:00:00 UTC";
```

Cookie will automatically expire on that date.

---

# Delete a Cookie

Set an old expiry date.

```javascript
document.cookie =
  "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
```

---

# Real-World Example

When a user logs in:

```javascript
token=abc123
```

can be stored in a cookie.

On every request:

```javascript
Cookie is automatically
sent to the server.
```

The server can identify the user.

---

# Cookie vs Local Storage

| Cookies | Local Storage |
|----------|--------------|
| Sent to server automatically | Not sent to server |
| Small size (~4KB) | Larger size (~5MB) |
| Can have expiry date | No built-in expiry |
| Used for authentication | Used for browser storage |

---

# Cookie vs Session Storage

| Cookies | Session Storage |
|----------|----------------|
| Can survive browser restart | Removed when tab closes |
| Sent to server | Not sent to server |
| Smaller size | Larger size |

---

# Important Interview Point

### Why Are Cookies Used for Authentication?

Because:

```javascript
Cookies are automatically
sent with every request.
```

The server can verify the user's identity.

---

# Common Follow-up Questions

### What are Cookies?

Small pieces of data stored in the browser.

### What format do Cookies use?

```javascript
Key-Value Pairs
```

### Are Cookies sent to the server?

Yes.

Automatically with every request.

### Can Cookies expire?

Yes.

Using:

```javascript
expires
```

or

```javascript
max-age
```

### What is the size limit of a Cookie?

Around:

```javascript
4KB
```

---

# Most Common Interview Question

## Difference Between Cookies and Local Storage

### Cookies

```javascript
Sent to Server
```

Size:

```javascript
~4KB
```

Used for:

```javascript
Authentication
```

---

### Local Storage

```javascript
Browser Only
```

Size:

```javascript
~5MB
```

Used for:

```javascript
Application Data
```

---

# One-Line Interview Summary

Cookies are small key-value data stored in the browser that are automatically sent to the server with every request and are commonly used for authentication and session management.

# Question: What is Currying in JavaScript?

## 20-Second Interview Answer

> Currying is a technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking one argument at a time. It helps create reusable and flexible functions.

---

## Interview Answer

Normally, a function takes multiple arguments at once.

Example:

```javascript
function add(a, b) {
  return a + b;
}
```

In Currying, we convert it into:

```javascript
function add(a) {
  return function(b) {
    return a + b;
  };
}
```

Each function takes one argument and returns another function.

---

## Easy Remember

```javascript
Normal Function

add(10, 20)
```

↓

```javascript
Curried Function

add(10)(20)
```

Think:

```javascript
One Argument
at a Time
```

---

# Normal Function

```javascript
function add(a, b) {
  return a + b;
}

console.log(
  add(10, 20)
);
```

Output:

```javascript
30
```

---

# Curried Function

```javascript
function add(a) {
  return function(b) {
    return a + b;
  };
}

console.log(
  add(10)(20)
);
```

Output:

```javascript
30
```

---

# Using Arrow Functions

```javascript
const add =
  a => b => a + b;

console.log(
  add(10)(20)
);
```

Output:

```javascript
30
```

---

# How It Works

### Step 1

```javascript
add(10)
```

returns:

```javascript
function(b) {
  return 10 + b;
}
```

---

### Step 2

```javascript
(20)
```

executes that function.

Result:

```javascript
30
```

---

# Real-World Example

```javascript
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double =
  multiply(2);

console.log(
  double(5)
);
```

Output:

```javascript
10
```

---

# Why Use Currying?

### Reusability

```javascript
const double =
  multiply(2);

const triple =
  multiply(3);
```

Now we can reuse them.

---

### Cleaner Functional Programming

Used heavily in:

- React
- Functional Programming
- Libraries like Lodash

---

# Currying vs Normal Function

## Normal Function

```javascript
add(10, 20);
```

---

## Curried Function

```javascript
add(10)(20);
```

---

# Common Follow-up Questions

### What is Currying?

Converting a function with multiple arguments into multiple functions with one argument each.

### What is the benefit of Currying?

Code reusability and flexibility.

### What is the output?

```javascript
const add =
  a => b => a + b;

console.log(
  add(5)(10)
);
```

Output:

```javascript
15
```

### Is Currying related to Closures?

Yes.

Currying uses closures to remember previous values.

---

# Most Common Interview Question

## How is Currying different from a normal function?

### Normal Function

```javascript
add(10, 20);
```

Arguments passed together.

---

### Curried Function

```javascript
add(10)(20);
```

Arguments passed one at a time.

---

# One-Line Interview Summary

Currying is a technique that transforms a function with multiple arguments into a sequence of functions, each accepting one argument at a time.

# Question: What is Lexical Scope in JavaScript?

## 20-Second Interview Answer

> Lexical Scope means that a function can access variables from its own scope and from its outer (parent) scope. The scope is determined by where the function is written in the code, not where it is called.

---

## Interview Answer

In JavaScript, scope is decided when the code is written.

A function can access:

- Its own variables
- Variables from its parent scope

But a parent function cannot access variables of its child function.

This behavior is called:

```javascript
Lexical Scope
```

---

## Easy Remember

```javascript
Child Can Access Parent

Parent Cannot Access Child
```

Think:

```javascript
Inner Function
can see
Outer Function Variables
```

---

# Example 1

```javascript
let name = "John";

function greet() {
  console.log(name);
}

greet();
```

Output:

```javascript
John
```

---

# Why?

`greet()` does not have:

```javascript
name
```

So JavaScript looks in the outer scope and finds it.

---

# Example 2

```javascript
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

Output:

```javascript
Hello
```

---

# Why?

The inner function can access variables from the outer function.

This is Lexical Scope.

---

# Example 3

```javascript
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

Scope Chain:

```javascript
inner()
   ↓
outer()
   ↓
Global Scope
```

---

# Parent Cannot Access Child

```javascript
function outer() {
  function inner() {
    let message = "Hello";
  }

  console.log(message);
}

outer();
```

Output:

```javascript
ReferenceError
```

---

# Why?

Parent function cannot access variables inside child function.

---

# Lexical Scope and Closures

```javascript
function outer() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const increment =
  outer();

increment();
```

Output:

```javascript
1
```

This works because of:

```javascript
Lexical Scope
```

Closures are built on Lexical Scope.

---

# Visual Representation

```javascript
Global Scope
      ↓
Outer Function
      ↓
Inner Function
```

The inner function can move upward through the scope chain.

---

# Common Follow-up Questions

### What is Lexical Scope?

A function can access variables from its own scope and outer scope.

### When is scope determined?

When the code is written.

### Can a child function access parent variables?

Yes.

### Can a parent function access child variables?

No.

### Is Closure related to Lexical Scope?

Yes.

Closures work because of Lexical Scope.

---

# Most Common Interview Question

## What is the output?

```javascript
let a = 10;

function test() {
  console.log(a);
}

test();
```

Output:

```javascript
10
```

### Why?

Because `test()` can access variables from its outer scope.

---

# One-Line Interview Summary

Lexical Scope means a function can access variables from its own scope and outer scopes, and the scope is determined by where the function is defined in the code.

# Question: What is Memoization in JavaScript?

## 20-Second Interview Answer

> Memoization is an optimization technique where the result of a function call is stored in memory. If the same input is provided again, the stored result is returned instead of recalculating it. This improves performance by avoiding repeated computations.

---

## Interview Answer

Sometimes a function performs the same calculation many times.

Instead of calculating again and again, we can save the result.

This technique is called:

```javascript
Memoization
```

When the same input comes again:

```javascript
Return Saved Result
```

instead of recalculating.

---

## Easy Remember

```javascript
Memoization
=
Remember Previous Result
```

Think:

```javascript
Already Calculated?
      ↓
Yes
      ↓
Use Saved Result
```

---

# Without Memoization

```javascript
function square(num) {
  console.log("Calculating...");

  return num * num;
}

console.log(square(5));
console.log(square(5));
```

Output:

```javascript
Calculating...
25

Calculating...
25
```

Calculation happens twice.

---

# With Memoization

```javascript
function memoizedSquare() {
  const cache = {};

  return function(num) {
    if (cache[num]) {
      console.log("From Cache");

      return cache[num];
    }

    console.log("Calculating");

    const result = num * num;

    cache[num] = result;

    return result;
  };
}

const square =
  memoizedSquare();

console.log(square(5));
console.log(square(5));
```

Output:

```javascript
Calculating
25

From Cache
25
```

---

# How It Works

### First Call

```javascript
square(5)
```

Result:

```javascript
25
```

Stored in:

```javascript
cache
```

---

### Second Call

```javascript
square(5)
```

JavaScript checks:

```javascript
cache[5]
```

Already exists.

Returns saved value.

No calculation needed.

---

# Real-World Example

Expensive calculations:

```javascript
Tax Calculation
Report Generation
Data Processing
```

Instead of recalculating:

```javascript
Use Cached Result
```

---

# Memoization Using Closure

```javascript
function memoize(fn) {
  const cache = {};

  return function(num) {
    if (cache[num]) {
      return cache[num];
    }

    const result = fn(num);

    cache[num] = result;

    return result;
  };
}
```

Memoization works because of:

```javascript
Closure
```

The cache remains available even after the function execution completes.

---

# Example

```javascript
function square(num) {
  return num * num;
}

const memoizedSquare =
  memoize(square);

console.log(
  memoizedSquare(10)
);

console.log(
  memoizedSquare(10)
);
```

Output:

```javascript
100
100
```

Second call comes from cache.

---

# Why Use Memoization?

- Improves performance
- Avoids repeated calculations
- Reduces execution time
- Useful for expensive operations

---

# Common Follow-up Questions

### What is Memoization?

Storing function results and reusing them for the same inputs.

### Why do we use Memoization?

To improve performance.

### Where are results stored?

In a cache object.

### Which JavaScript concept is used in Memoization?

```javascript
Closure
```

### What is the main benefit?

Avoids repeated calculations.

---

# Most Common Interview Question

## What is the difference between Memoization and Caching?

### Caching

General storage of data.

---

### Memoization

Caching specifically for function results.

---

# One-Line Interview Summary

Memoization is an optimization technique that stores function results and returns the cached result when the same input is provided again.

# Question: What are the Advantages of Promises over Callbacks?

## 20-Second Interview Answer

> Promises provide a cleaner and more structured way to handle asynchronous operations than callbacks. They help avoid callback hell, improve code readability, support better error handling with `.catch()`, and allow chaining of multiple asynchronous operations using `.then()`.

---

## Interview Answer

Callbacks were the original way to handle asynchronous operations.

But when many callbacks are nested together, the code becomes difficult to read and maintain.

This problem is called:

```javascript
Callback Hell
```

Promises solve this problem and make asynchronous code cleaner.

---

## Easy Remember

```javascript
Callbacks
=
Nested Code
```

```javascript
Promises
=
Clean Code
```

---

# Problem with Callbacks

```javascript
getUser(function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      console.log(comments);
    });
  });
});
```

This is:

```javascript
Callback Hell
```

Hard to read and maintain.

---

# Same Code Using Promises

```javascript
getUser()
  .then(user => getPosts(user.id))
  .then(posts =>
    getComments(posts[0].id)
  )
  .then(comments => {
    console.log(comments);
  })
  .catch(error => {
    console.log(error);
  });
```

Cleaner and easier to understand.

---

# Advantage 1: Avoids Callback Hell

### Callback

```javascript
function1(() => {
  function2(() => {
    function3(() => {
      // code
    });
  });
});
```

---

### Promise

```javascript
function1()
  .then(() => function2())
  .then(() => function3());
```

Much cleaner.

---

# Advantage 2: Better Readability

Promises are easier to read.

```javascript
fetch(url)
  .then(response =>
    response.json()
  )
  .then(data =>
    console.log(data)
  );
```

The flow is clear.

---

# Advantage 3: Better Error Handling

### Callback

```javascript
getData(function(error, data) {
  if (error) {
    console.log(error);
  }
});
```

Error handling becomes repetitive.

---

### Promise

```javascript
fetch(url)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

One `.catch()` can handle errors from the entire chain.

---

# Advantage 4: Promise Chaining

```javascript
getUser()
  .then(user =>
    getPosts(user.id)
  )
  .then(posts =>
    getComments(posts[0].id)
  );
```

Each step receives data from the previous step.

---

# Advantage 5: Works with Async/Await

Promises support:

```javascript
async/await
```

Example:

```javascript
const response =
  await fetch(url);

const data =
  await response.json();
```

Cleaner than callbacks.

---

# Callback vs Promise

| Callback | Promise |
|-----------|----------|
| Can create callback hell | Avoids callback hell |
| Harder to read | Easier to read |
| Error handling is complex | Centralized error handling |
| Difficult to chain | Supports chaining |
| Cannot use async/await | Works with async/await |

---

# Common Follow-up Questions

### Why were Promises introduced?

To solve callback hell.

### What is callback hell?

Deeply nested callbacks that make code difficult to read.

### How do Promises handle errors?

Using:

```javascript
.catch()
```

### Can Promises be chained?

Yes.

Using:

```javascript
.then()
```

### Do Async/Await use Promises?

Yes.

Async/Await is built on top of Promises.

---

# Most Common Interview Question

## What is the biggest advantage of Promises?

### Answer

```javascript
Avoiding Callback Hell
```

and providing:

```javascript
Better Error Handling
```

---

# One-Line Interview Summary

Promises provide a cleaner, more readable, and more maintainable way to handle asynchronous operations compared to callbacks by avoiding callback hell and improving error handling.
# Question: What are Debouncing and Throttling in JavaScript?

## 20-Second Interview Answer

> Debouncing and Throttling are performance optimization techniques used to control how often a function executes. Debouncing executes a function only after the user stops triggering an event for a specified time, while Throttling executes a function at regular intervals regardless of how many times the event occurs.

---

## Interview Answer

Sometimes events like:

```javascript
scroll
resize
keypress
mousemove
```

can trigger hundreds of times per second.

This can affect performance.

To optimize this, we use:

1. Debouncing
2. Throttling

---

## Easy Remember

```javascript
Debounce
=
Wait and Execute
```

```javascript
Throttle
=
Execute Every Few Seconds
```

Think:

```javascript
Debounce
User Stops Typing
      ↓
Execute
```

```javascript
Throttle
Keep Typing
      ↓
Execute Every X Seconds
```

---

# Debouncing

A function executes only after a certain delay has passed without another event.

---

## Example

### Search Box

```javascript
User Types:
J
Ji
Jit
Jite
```

Without Debounce:

```javascript
5 API Calls
```

With Debounce:

```javascript
1 API Call
```

after the user stops typing.

---

## Debounce Code

```javascript
function debounce(fn, delay) {
  let timer;

  return function() {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
```

---

## Real-World Uses

- Search input
- Auto-suggestions
- Form validation

---

# Throttling

A function executes at fixed intervals.

Even if events happen many times.

---

## Example

### Scroll Event

User scrolls continuously.

Without Throttle:

```javascript
500 Function Calls
```

With Throttle:

```javascript
1 Call Every 1 Second
```

---

## Throttle Code

```javascript
function throttle(fn, delay) {
  let lastCall = 0;

  return function() {
    const now = Date.now();

    if (
      now - lastCall >= delay
    ) {
      lastCall = now;

      fn();
    }
  };
}
```

---

## Real-World Uses

- Scroll events
- Window resize
- Mouse movement
- Button click protection

---

# Visual Difference

## Debounce

```javascript
Typing Typing Typing
Typing Stops
      ↓
Function Runs
```

---

## Throttle

```javascript
Typing Typing Typing
      ↓
Run
      ↓
Run
      ↓
Run
```

at fixed intervals.

---

# Debounce vs Throttle

| Debounce | Throttle |
|-----------|-----------|
| Waits for user to stop | Runs at fixed intervals |
| Executes once after delay | Executes repeatedly |
| Best for search box | Best for scroll/resize |
| Reduces unnecessary API calls | Controls event frequency |

---

# Real Interview Example

### Search Input

Use:

```javascript
Debounce
```

Because we want to call API only after user stops typing.

---

### Scroll Event

Use:

```javascript
Throttle
```

Because we want updates while scrolling, but not too frequently.

---

# Common Follow-up Questions

### What is Debouncing?

Executing a function only after the event stops occurring for a specified time.

### What is Throttling?

Executing a function at fixed intervals.

### Which is used for Search API?

```javascript
Debounce
```

### Which is used for Scroll Events?

```javascript
Throttle
```

### Why use Debounce and Throttle?

To improve performance and reduce unnecessary function calls.

---

# Most Common Interview Question

## Search Box: Debounce or Throttle?

Answer:

```javascript
Debounce
```

Because we want:

```javascript
One API Call
After User Stops Typing
```

---

# One-Line Interview Summary

Debouncing delays execution until an event stops occurring, while Throttling limits execution to fixed intervals, helping improve application performance.