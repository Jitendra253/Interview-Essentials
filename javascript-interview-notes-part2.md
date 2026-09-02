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