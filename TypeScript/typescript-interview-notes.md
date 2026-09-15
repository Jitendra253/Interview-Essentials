# Question: What is TypeScript?

## 20-Second Interview Answer

> TypeScript is an open-source programming language developed by Microsoft that extends JavaScript by adding static typing and other advanced features. It helps developers catch errors during development, improves code maintainability, and is compiled into plain JavaScript that runs in browsers and Node.js.

---

## Interview Answer

TypeScript is a:

```typescript
Superset of JavaScript
```

This means:

```typescript
All JavaScript code is valid TypeScript
```

TypeScript includes all features of JavaScript and provides additional features such as:

- Static Typing
- Interfaces
- Generics
- Enums
- Access Modifiers
- Better IDE Support

TypeScript helps developers catch errors during development instead of at runtime.

TypeScript code does not run directly in the browser.

It is first converted into JavaScript using the TypeScript compiler.

```typescript
TypeScript
   ↓
Compiler (tsc)
   ↓
JavaScript
   ↓
Browser / Node.js
```

---

## Easy Remember

```typescript
TypeScript
=
JavaScript
+
Extra Features
```

```typescript
TypeScript
=
Better Version of JavaScript
```

```typescript
All JavaScript Features
+
Additional Functionalities
```

---

## Why Use TypeScript?

- Finds errors early
- Improves code quality
- Makes code easier to maintain
- Better auto-completion and IntelliSense
- Very useful for large applications
- Widely used in React and Next.js projects

---

## Example

### JavaScript

```javascript
let age = 25;

age = "John";
```

No error.

---

### TypeScript

```typescript
let age: number = 25;

age = "John";
```

Output:

```typescript
Error
```

Because:

```typescript
string is not assignable to number
```

TypeScript catches the error during development.

---

## Common Follow-up Questions

### What is TypeScript?

A superset of JavaScript that adds static typing and advanced features.

### Who developed TypeScript?

```typescript
Microsoft
```

### Is all JavaScript valid TypeScript?

```typescript
Yes
```

### Can browsers run TypeScript directly?

```typescript
No
```

It must be compiled into JavaScript first.

### What is the biggest advantage of TypeScript?

```typescript
Type Safety
```

It helps catch errors before the code runs.



# Question: What is Type Safety in TypeScript?

## 20-Second Interview Answer

> Type Safety means ensuring that a variable is used only with the data type it was declared for. TypeScript checks types during development and prevents type-related errors before the code runs.

---

## Interview Answer

Type Safety is one of the main features of TypeScript.

It ensures that values are used according to their declared type.

For example, if a variable is declared as a number, TypeScript will not allow assigning a string to it.

This helps catch errors during development instead of at runtime.

Without Type Safety, type-related bugs can go unnoticed and cause issues when the application is running.

With TypeScript, these errors are detected early.

---

## Easy Remember

```typescript
Type Safety
=
Use Correct Data Type
```

```typescript
number → only numbers

string → only strings

boolean → only booleans
```

---

## Example

### JavaScript

```javascript
let age = 25;

age = "John";
```

JavaScript allows this.

No error.

---

### TypeScript

```typescript
let age: number = 25;

age = "John";
```

Output:

```typescript
Error
```

Because:

```typescript
string is not assignable to number
```

---

## Function Example

```typescript
function add(
  a: number,
  b: number
) {
  return a + b;
}

add(10, 20);
```

Valid.

---

```typescript
add("10", "20");
```

Output:

```typescript
Error
```

Because the function expects:

```typescript
number
```

not:

```typescript
string
```

---

## Why Type Safety is Important?

- Catches errors early
- Reduces bugs
- Improves code quality
- Makes refactoring safer
- Helps developers understand code easily

---

## Real-World Example

```typescript
interface User {
  name: string;
  age: number;
}
```

```typescript
const user: User = {
  name: "John",
  age: "25"
};
```

Output:

```typescript
Error
```

Because:

```typescript
age
```

must be a number.

---

## Common Follow-up Questions

### What is Type Safety?

Ensuring values are used according to their declared type.

### Does JavaScript have Type Safety?

No.

JavaScript is dynamically typed.

### Does TypeScript provide Type Safety?

Yes.

It checks types during development.

### What is the main benefit of Type Safety?

It catches errors before the application runs.

# Question: What are the Important Features of TypeScript?

## 20-Second Interview Answer

> TypeScript extends JavaScript by providing features such as Static Typing, Interfaces, Generics, Type Inference, Decorators, and Namespaces. These features help improve code quality, maintainability, scalability, and developer productivity.

---

## Interview Answer

TypeScript provides several advanced features on top of JavaScript that make development easier and safer, especially for large applications.

Some important TypeScript features are:

---

## 1. Static Typing

Allows us to define data types for variables, function parameters, and return values.

```typescript
let age: number = 25;
```

Benefits:

- Type Safety
- Fewer runtime errors
- Better code readability

---

## 2. Interfaces

Interfaces define the structure of an object.

```typescript
interface User {
  name: string;
  age: number;
}
```

```typescript
const user: User = {
  name: "John",
  age: 25
};
```

Benefits:

- Consistent object structure
- Better maintainability

---

## 3. Generics

Generics allow reusable code that works with different data types.

```typescript
function getValue<T>(
  value: T
): T {
  return value;
}
```

```typescript
getValue<string>("Hello");
getValue<number>(100);
```

Benefits:

- Reusable code
- Type Safety

---

## 4. Type Inference

TypeScript can automatically determine the type of a variable.

```typescript
let name = "John";
```

TypeScript automatically infers:

```typescript
string
```

Benefits:

- Less code
- Better developer experience

---

## 5. Decorators

Decorators are special functions used to add extra functionality to classes, methods, or properties.

```typescript
@Component()
class App {}
```

Commonly used in:

- Angular
- NestJS

Benefits:

- Cleaner code
- Metadata support

---

## 6. Namespaces

Namespaces help organize related code into logical groups.

```typescript
namespace UserModule {
  export const name =
    "John";
}
```

Benefits:

- Better code organization
- Avoids naming conflicts

---

## 7. Advanced Type Features

TypeScript provides advanced types such as:

```typescript
Union Types

Intersection Types

Mapped Types

Conditional Types

Utility Types
```

Benefits:

- More flexible type definitions
- Better scalability

---

## 8. Improved Code Quality

Because TypeScript performs type checking during development, it helps:

- Reduce bugs
- Improve maintainability
- Improve readability
- Make large applications easier to manage

---

## Easy Remember

```typescript
TypeScript Features

1. Static Typing
2. Interfaces
3. Generics
4. Type Inference
5. Decorators
6. Namespaces
7. Advanced Types
8. Better Code Quality
```

---

## Why Companies Use TypeScript?

- Large codebases become easier to maintain
- Fewer runtime errors
- Better developer productivity
- Excellent support for React, Next.js, Angular, and Node.js

---

## Common Follow-up Questions

### What is the biggest feature of TypeScript?

```typescript
Static Typing
```

---

### What are Interfaces used for?

To define the structure of objects.

---

### What are Generics used for?

To create reusable and type-safe code.

---

### What is Type Inference?

TypeScript automatically determines the type of a variable.

---

### Why does TypeScript improve code quality?

Because it catches errors during development before the application runs.
# Question: How do you Compile TypeScript into JavaScript?

## 20-Second Interview Answer

> TypeScript cannot run directly in browsers. It must first be compiled into JavaScript using the TypeScript Compiler (tsc). We can use commands like `npx tsc app.ts` to compile a TypeScript file into JavaScript.

---

## Interview Answer

Browsers and Node.js understand:

```javascript
JavaScript
```

They do not understand:

```typescript
TypeScript
```

So TypeScript code must be converted into JavaScript before execution.

This conversion process is called:

```typescript
Compilation
```

The TypeScript compiler:

```typescript
tsc
```

is used for this purpose.

---

## Compile a TypeScript File

Suppose we have:

```typescript
app.ts
```

Run:

```bash
npx tsc app.ts
```

This generates:

```javascript
app.js
```

---

## Watch Mode

Instead of compiling manually every time, we can use:

```bash
npx tsc app.ts --watch
```

or

```bash
npx tsc app.ts -w
```

Watch mode continuously monitors the file.

Whenever the TypeScript file changes:

```typescript
app.ts
```

it automatically recompiles and updates:

```javascript
app.js
```

---

## How It Works

```typescript
app.ts
```

↓

```typescript
TypeScript Compiler (tsc)
```

↓

```javascript
app.js
```

↓

```javascript
Browser / Node.js
```

---

## Example

### app.ts

```typescript
let name: string =
  "Jitendra";

console.log(name);
```

---

### Command

```bash
npx tsc app.ts
```

---

### Generated app.js

```javascript
var name =
  "Jitendra";

console.log(name);
```

---

## Why Use Watch Mode?

Benefits:

- Automatically compiles changes
- Saves development time
- No need to run the compile command repeatedly

---

## Common Follow-up Questions

### Why do we compile TypeScript?

Because browsers can only run JavaScript.

### Which compiler is used?

```typescript
tsc
```

(TypeScript Compiler)

### What does this command do?

```bash
npx tsc app.ts
```

Compiles:

```typescript
app.ts
```

into:

```javascript
app.js
```

### What does --watch do?

Automatically recompiles whenever the TypeScript file changes.

### What is the short form of --watch?

```bash
-w
```



# Question: What are Data Types in TypeScript?

## 20-Second Interview Answer

> Data Types in TypeScript define what kind of value a variable can store, such as string, number, boolean, array, or object. They provide type safety, help catch errors during development, and improve code quality and maintainability.

---

## Interview Answer

Data Types specify the type of value that can be stored in a variable.

TypeScript uses data types to:

- Provide Type Safety
- Catch Errors Early
- Improve Code Readability
- Improve Code Maintainability

Example:

```typescript
let age: number = 25;
```

Here:

```typescript
number
```

is the data type.

---

# Categories of Data Types

```typescript
1. Primitive Types
2. Object Types
3. Special Types
4. Advanced Types
5. Function Types
```

---

# 1. Primitive Types

Primitive types are built-in data types provided by TypeScript.

---

## number

Used for numeric values.

```typescript
let age: number = 25;
```

---

## string

Used for text values.

```typescript
let name: string =
  "Jitendra";
```

---

## boolean

Used for true or false values.

```typescript
let isLoggedIn: boolean =
  true;
```

---

## null

Represents an intentional empty value.

```typescript
let data: null = null;
```

---

## undefined

Represents a variable that has not been assigned a value.

```typescript
let value: undefined =
  undefined;
```

---

## bigint

Used for very large integers.

```typescript
let num: bigint =
  12345678901234567890n;
```

---

## symbol

Used to create unique identifiers.

Even if two symbols have the same description, they are always unique.

```typescript
const id1 =
  Symbol("id");

const id2 =
  Symbol("id");

console.log(id1 === id2);
```

Output:

```typescript
false
```

---

# 2. Object Types

Used for storing collections of values.

---

## Array

Stores multiple values of the same type.

```typescript
let numbers: number[] =
  [1, 2, 3];
```

---

## Tuple

Stores fixed number of values with fixed types.

```typescript
let user:
  [string, number];

user = ["John", 25];
```

---

## Object

Stores key-value pairs.

```typescript
let user: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 25
};
```

---

# 3. Special Types

Special-purpose data types.

---

## any

Can store any type of value.

```typescript
let data: any = 10;

data = "Hello";

data = true;
```

Use carefully because type checking is disabled.

---

## unknown

Can store any value, but must be checked before use.

```typescript
let value: unknown =
  "Hello";
```

Safer than:

```typescript
any
```

---

## void

Used when a function does not return anything.

```typescript
function greet(): void {
  console.log("Hello");
}
```

---

## never

Represents values that never occur.

Used for functions that never return.

```typescript
function throwError():
  never {
  throw new Error();
}
```

---

# 4. Advanced Types

Used for more complex type definitions.

---

## Union Type

Allows multiple possible types.

```typescript
let id:
  string | number;

id = 101;

id = "EMP101";
```

---

## Intersection Type

Combines multiple types.

```typescript
type A = {
  name: string;
};

type B = {
  age: number;
};

type User = A & B;
```

---

## Type Alias

Creates custom type names.

```typescript
type User = {
  name: string;
  age: number;
};
```

---

## Enum

Defines a set of named constants.

```typescript
enum Role {
  Admin,
  User,
  Guest
}
```

---

## Literal Types

Allows specific values only.

```typescript
let status:
  "success" | "error";
```

---

# 5. Function Types

Used to define the type of a function.

```typescript
function add(
  a: number,
  b: number
): number {
  return a + b;
}
```

Here:

```typescript
number
```

defines both parameter types and return type.

---

## Easy Remember

```typescript
Primitive Types
```

- number
- string
- boolean
- null
- undefined
- bigint
- symbol

---

```typescript
Object Types
```

- Array
- Tuple
- Object

---

```typescript
Special Types
```

- any
- unknown
- void
- never

---

```typescript
Advanced Types
```

- Union
- Intersection
- Type Alias
- Enum
- Literal Types

---

```typescript
Function Types
```

- Define function parameter and return types

---

## Common Follow-up Questions

### What is the purpose of data types?

To define what type of value a variable can store.

### What is the difference between any and unknown?

```typescript
unknown
```

is safer because type checking is required before usage.

### What is a Tuple?

An array with fixed length and fixed data types.

### What is a Union Type?

A type that allows multiple possible data types.

### What is the purpose of void?

Used for functions that do not return any value.

### What is Symbol?

A primitive data type used to create unique identifiers.

# Question: What is the Number Data Type in TypeScript?

## 20-Second Interview Answer

> The `number` data type in TypeScript is used to store numeric values such as integers, decimals, binary, hexadecimal, and octal numbers. It provides type safety by ensuring that only numeric values can be assigned to the variable.

---

## Interview Answer

The `number` type is used to store all numeric values in TypeScript.

It supports:

- Integers
- Decimal Numbers
- Binary Numbers
- Hexadecimal Numbers
- Octal Numbers

Example:

```typescript
let age: number = 25;
```

Here:

```typescript
25
```

is a number value.

---

# Applying Number Data Type

```typescript
let age: number = 25;

let salary: number =
  50000;
```

---

# Type Safety

```typescript
let age: number = 25;

age = 30;
```

Valid.

---

```typescript
let age: number = 25;

age = "John";
```

Output:

```typescript
Error
```

Because:

```typescript
string
```

cannot be assigned to:

```typescript
number
```

---

# Redeclare Issue

```typescript
let age: number = 25;

let age: number = 30;
```

Output:

```typescript
Error
```

Cannot redeclare a variable using:

```typescript
let
```

---

## Correct Way

```typescript
let age: number = 25;

age = 30;
```

---

# Adding Numbers

```typescript
let num1: number = 10;
let num2: number = 20;

let total: number =
  num1 + num2;

console.log(total);
```

Output:

```typescript
30
```

---

# Decimal Numbers

TypeScript uses:

```typescript
number
```

for decimal values as well.

```typescript
let price: number =
  99.99;
```

```typescript
let percentage: number =
  85.5;
```

---

# Binary Numbers

Binary numbers start with:

```typescript
0b
```

Example:

```typescript
let binary: number =
  0b1010;

console.log(binary);
```

Output:

```typescript
10
```

---

# Hexadecimal Numbers

Hexadecimal numbers start with:

```typescript
0x
```

Example:

```typescript
let hex: number =
  0xFF;

console.log(hex);
```

Output:

```typescript
255
```

---

# Octal Numbers

Octal numbers start with:

```typescript
0o
```

Example:

```typescript
let octal: number =
  0o12;

console.log(octal);
```

Output:

```typescript
10
```

---

# Convert String to Number

### Using Number()

```typescript
let value: string =
  "100";

let num: number =
  Number(value);

console.log(num);
```

Output:

```typescript
100
```

---

### Using parseInt()

```typescript
let value: string =
  "100";

let num: number =
  parseInt(value);

console.log(num);
```

Output:

```typescript
100
```

---

### Using parseFloat()

```typescript
let value: string =
  "99.99";

let num: number =
  parseFloat(value);

console.log(num);
```

Output:

```typescript
99.99
```

---

# Type Inference with Number

TypeScript can automatically identify the type.

```typescript
let age = 25;
```

TypeScript infers:

```typescript
number
```

Automatically.

Equivalent to:

```typescript
let age: number = 25;
```

---

# Example

```typescript
let salary = 50000;
```

TypeScript automatically assigns:

```typescript
number
```

as the type.

---

## Easy Remember

```typescript
Number Type
```

Stores:

- Integers
- Decimals
- Binary
- Octal
- Hexadecimal

---

```typescript
Binary
```

```typescript
0b1010
```

---

```typescript
Hexadecimal
```

```typescript
0xFF
```

---

```typescript
Octal
```

```typescript
0o12
```

---

## Common Follow-up Questions

### Which data type is used for numeric values?

```typescript
number
```

### Does TypeScript have separate types for int and float?

```typescript
No
```

Both use:

```typescript
number
```

### How do you convert a string to a number?

```typescript
Number()
parseInt()
parseFloat()
```

### What is Type Inference?

TypeScript automatically determines the variable type.

### How are binary numbers represented?

```typescript
0b1010
```

### How are hexadecimal numbers represented?

```typescript
0xFF
```

# Question: What are String and Boolean Data Types in TypeScript?

## 20-Second Interview Answer

> The `string` data type is used to store text values, and the `boolean` data type is used to store logical values such as `true` or `false`. TypeScript provides type safety for both types and can automatically infer their types during variable declaration.

---

## Interview Answer

### String Data Type

The `string` type is used to store text data.

Examples:

```typescript
let name: string =
  "Jitendra";

let city: string =
  "Bhubaneswar";
```

A string can contain:

- Characters
- Words
- Sentences

---

# Ways to Define String

### Double Quotes

```typescript
let name: string =
  "Jitendra";
```

---

### Single Quotes

```typescript
let city: string =
  'Cuttack';
```

---

### Template Literals

Uses backticks.

```typescript
let message: string =
  `Welcome`;
```

Useful for string interpolation.

```typescript
let name = "John";

let message =
  `Hello ${name}`;
```

Output:

```typescript
Hello John
```

---

# Convert to String

### Using String()

```typescript
let num: number = 100;

let value: string =
  String(num);

console.log(value);
```

Output:

```typescript
"100"
```

---

### Using toString()

```typescript
let num: number = 100;

let value: string =
  num.toString();

console.log(value);
```

Output:

```typescript
"100"
```

---

# Type Safety with String

```typescript
let name: string =
  "John";

name = "David";
```

Valid.

---

```typescript
let name: string =
  "John";

name = 100;
```

Output:

```typescript
Error
```

Because:

```typescript
number
```

cannot be assigned to:

```typescript
string
```

---

# Boolean Data Type

The `boolean` type is used to store logical values.

Possible values:

```typescript
true
false
```

Only these two values are allowed.

---

# Apply Boolean Values

```typescript
let isLoggedIn:
  boolean = true;
```

---

```typescript
let isAdmin:
  boolean = false;
```

---

# Boolean Example

```typescript
let isActive:
  boolean = true;

if (isActive) {
  console.log("User Active");
}
```

Output:

```typescript
User Active
```

---

# Type Safety with Boolean

```typescript
let isLoggedIn:
  boolean = true;
```

Valid.

---

```typescript
let isLoggedIn:
  boolean = "true";
```

Output:

```typescript
Error
```

Because:

```typescript
string
```

cannot be assigned to:

```typescript
boolean
```

---

# Type Inference

TypeScript automatically detects the type.

### String Inference

```typescript
let name = "John";
```

TypeScript infers:

```typescript
string
```

---

### Boolean Inference

```typescript
let isLoggedIn =
  true;
```

TypeScript infers:

```typescript
boolean
```

---

# Declaration Issues

### String

```typescript
let name = "John";

name = "David";
```

Valid.

---

```typescript
let name = "John";

name = 100;
```

Output:

```typescript
Error
```

Because TypeScript inferred:

```typescript
string
```

---

### Boolean

```typescript
let isActive =
  true;

isActive = false;
```

Valid.

---

```typescript
let isActive =
  true;

isActive = "yes";
```

Output:

```typescript
Error
```

Because TypeScript inferred:

```typescript
boolean
```

---

## Easy Remember

### String

Stores:

```typescript
Text Data
```

Examples:

```typescript
"John"

'John'

`John`
```

---

### Boolean

Stores:

```typescript
true
false
```

Only two possible values.

---

## Common Follow-up Questions

### Which data type is used for text?

```typescript
string
```

### Which data type is used for true and false values?

```typescript
boolean
```

### How many values can a boolean store?

```typescript
2
```

```typescript
true
false
```

### How do you convert a number into a string?

```typescript
String()
```

or

```typescript
toString()
```

### What is Type Inference?

TypeScript automatically determines the type of a variable based on its value.


# Question: What are Null and Undefined Data Types in TypeScript?

## 20-Second Interview Answer

> `undefined` means a variable has been declared but has not been assigned a value. `null` represents an intentional absence of a value assigned by the developer. Both are primitive data types in TypeScript and JavaScript.

---

## Interview Answer

Both `null` and `undefined` represent the absence of a value, but they are used in different situations.

```typescript
undefined
```

means:

```typescript
Declared
But Not Assigned
```

---

```typescript
null
```

means:

```typescript
Intentionally Empty
```

assigned by the developer.

---

# What is Undefined?

When a variable is declared but no value is assigned, TypeScript automatically assigns:

```typescript
undefined
```

---

## Example

```typescript
let name;

console.log(name);
```

Output:

```typescript
undefined
```

---

## Another Example

```typescript
let age:
  undefined =
  undefined;
```

---

# How to Use Undefined?

Used when a value is not available yet.

Example:

```typescript
let userName:
  string | undefined;
```

Initially:

```typescript
undefined
```

Later:

```typescript
userName = "John";
```

---

# Possible Value of Undefined

Only:

```typescript
undefined
```

---

# What is Null?

`null` is an intentional empty value.

The developer explicitly assigns it.

---

## Example

```typescript
let user = null;
```

Output:

```typescript
null
```

---

# How to Use Null?

Used when we intentionally want to indicate:

```typescript
No Value
```

Example:

```typescript
let selectedUser:
  string | null =
  null;
```

Later:

```typescript
selectedUser =
  "John";
```

---

# Another Example

```typescript
let manager:
  null = null;
```

---

# Possible Value of Null

Only:

```typescript
null
```

---

# Difference Between Null and Undefined

| null | undefined |
|--------|------------|
| Assigned intentionally | Assigned automatically |
| Represents empty value | Represents missing value |
| Set by developer | Set by JavaScript/TypeScript |
| Value is null | Value is undefined |

---

# Example

```typescript
let a = null;
let b;

console.log(a);
console.log(b);
```

Output:

```typescript
null
undefined
```

---

# Real-World Example

### Undefined

```typescript
let apiResponse:
  string | undefined;
```

Data has not arrived yet.

---

### Null

```typescript
let selectedUser:
  string | null =
  null;
```

User is intentionally not selected.

---

# Type Safety

```typescript
let user:
  string | null =
  null;
```

Valid.

---

```typescript
let user:
  string | undefined =
  undefined;
```

Valid.

---

# Easy Remember

```typescript
undefined
=
Declared
But No Value Assigned
```

---

```typescript
null
=
Intentionally Empty
```

---

## Common Follow-up Questions

### What is Undefined?

A variable has been declared but not assigned a value.

### What is Null?

An intentionally assigned empty value.

### Who assigns Undefined?

```typescript
JavaScript / TypeScript
```

Automatically.

### Who assigns Null?

```typescript
Developer
```

Manually.

### Can Null and Undefined store multiple values?

```typescript
No
```

They each have only one possible value.

```typescript
null
```

and

```typescript
undefined
```

# Question: What is tsconfig.json in TypeScript?

## 20-Second Interview Answer

> `tsconfig.json` is the TypeScript configuration file. It defines how TypeScript should compile the project, including compiler options, file locations, output directories, and strict type-checking rules. It helps manage and compile all TypeScript files in a project consistently.

---

## Interview Answer

In small projects, we can compile files individually.

Example:

```bash
npx tsc app.ts
```

But in large projects, managing each file separately becomes difficult.

TypeScript provides a configuration file called:

```typescript
tsconfig.json
```

This file contains project-wide settings for the TypeScript compiler.

---

# How to Generate tsconfig.json

Run:

```bash
tsc --init
```

Output:

```typescript
tsconfig.json
```

created in the project root.

---

# Example

```bash
npx tsc --init
```

Generated file:

```typescript
tsconfig.json
```

---

# Why Do We Need tsconfig.json?

Without configuration:

```bash
npx tsc file1.ts
npx tsc file2.ts
npx tsc file3.ts
```

Need to compile each file manually.

---

With:

```typescript
tsconfig.json
```

simply run:

```bash
npx tsc
```

and all TypeScript files are compiled automatically.

---

# Compile All TypeScript Files

After creating:

```typescript
tsconfig.json
```

Run:

```bash
npx tsc
```

TypeScript will:

```typescript
Find all .ts files
```

↓

```typescript
Compile all files
```

↓

```typescript
Generate .js files
```

---

# Watch Mode for Entire Project

```bash
npx tsc --watch
```

or

```bash
npx tsc -w
```

Now every TypeScript file is monitored.

Changes are automatically compiled.

---

# Common Compiler Options

## target

Specifies JavaScript version.

```json
{
  "compilerOptions": {
    "target": "ES2020"
  }
}
```

---

## module

Defines module system.

```json
{
  "compilerOptions": {
    "module": "ESNext"
  }
}
```

---

## outDir

Stores compiled JavaScript files in a separate folder.

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

Example:

```typescript
src/app.ts
```

↓

```javascript
dist/app.js
```

---

## rootDir

Specifies the source folder.

```json
{
  "compilerOptions": {
    "rootDir": "./src"
  }
}
```

---

## strict

Enables strict type checking.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Recommended for production projects.

---

# Common Uses of tsconfig.json

### 1. Compile Entire Project

```bash
npx tsc
```

---

### 2. Enable Strict Type Checking

```json
{
  "strict": true
}
```

---

### 3. Specify Output Folder

```json
{
  "outDir": "./dist"
}
```

---

### 4. Define Source Folder

```json
{
  "rootDir": "./src"
}
```

---

### 5. Configure JavaScript Version

```json
{
  "target": "ES2020"
}
```

---

# Typical Project Structure

```text
project
│
├── src
│   ├── app.ts
│   └── user.ts
│
├── dist
│   ├── app.js
│   └── user.js
│
└── tsconfig.json
```

---

# Example tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true
  }
}
```

---

## Easy Remember

```typescript
tsc --init
```

Creates:

```typescript
tsconfig.json
```

---

```typescript
npx tsc
```

Compiles:

```typescript
All TypeScript Files
```

---

```typescript
npx tsc --watch
```

Automatically recompiles on file changes.

---

## Common Follow-up Questions

### What is tsconfig.json?

The configuration file for TypeScript projects.

### How do you create tsconfig.json?

```bash
tsc --init
```

### How do you compile all TypeScript files?

```bash
npx tsc
```

### Which option specifies the output folder?

```json
outDir
```

### Which option enables strict type checking?

```json
strict
```

### What is the purpose of rootDir?

To specify the source TypeScript folder.


# Question: What is BigInt Data Type in TypeScript?

## 20-Second Interview Answer

> `bigint` is a primitive data type used to store very large integer values that cannot be safely represented using the normal `number` data type. It is useful when working with large numerical calculations that exceed JavaScript's safe integer limit.

---

## Interview Answer

Normally, TypeScript uses:

```typescript
number
```

for storing numeric values.

However, the `number` type has a limitation.

JavaScript can safely store integers only up to:

```typescript
9007199254740991
```

This value is called:

```typescript
MAX_SAFE_INTEGER
```

If we go beyond this limit, calculations may become inaccurate.

To solve this problem, JavaScript and TypeScript provide:

```typescript
bigint
```

---

# When Should We Use BigInt?

Use `bigint` when:

- Working with very large numbers
- Financial calculations
- Scientific calculations
- Large database IDs
- Cryptography-related operations

Whenever a value exceeds the safe range of:

```typescript
number
```

use:

```typescript
bigint
```

---

# Example

### Number Problem

```typescript
const num =
  9007199254740991;

console.log(num + 1);
console.log(num + 2);
```

Unexpected results may occur because the value exceeds the safe range.

---

### BigInt Solution

```typescript
const num =
  9007199254740991n;

console.log(num + 1n);
```

Output:

```typescript
9007199254740992n
```

Accurate result.

---

# How to Create BigInt

### Using n Suffix

```typescript
const amount =
  12345678901234567890n;
```

---

### Using BigInt Constructor

```typescript
const amount =
  BigInt(
    "12345678901234567890"
  );
```

---

# BigInt Operations

```typescript
const a = 100n;
const b = 50n;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

Output:

```typescript
150n
50n
5000n
2n
```

---

# Mixing Issue (Important)

A common mistake is mixing:

```typescript
number
```

with:

```typescript
bigint
```

---

### Wrong

```typescript
const a = 100n;
const b = 50;

console.log(a + b);
```

Output:

```typescript
Error
```

Because:

```typescript
bigint + number
```

is not allowed.

---

### Correct

```typescript
const a = 100n;
const b = 50n;

console.log(a + b);
```

Output:

```typescript
150n
```

---

# Type Declaration

```typescript
let amount:
  bigint =
  1234567890n;
```

---

# Type Inference

```typescript
let amount =
  1234567890n;
```

TypeScript automatically infers:

```typescript
bigint
```

---

# Difference Between Number and BigInt

| number | bigint |
|----------|----------|
| Stores normal numeric values | Stores very large integers |
| Can store decimals | Cannot store decimals |
| Limited by safe integer range | Supports extremely large integers |
| Most commonly used | Used only for very large numbers |

---

# Important Notes

### BigInt Supports

```typescript
Positive Integers
Negative Integers
Large Integers
```

---

### BigInt Does Not Support

```typescript
Decimal Values
```

Example:

```typescript
123.45n
```

Output:

```typescript
Error
```

---

## Easy Remember

```typescript
number
```

For normal values.

---

```typescript
bigint
```

For very large integer values.

---

```typescript
BigInt
=
Large Integers Only
```

---

## Common Follow-up Questions

### What is BigInt?

A data type used to store very large integer values.

### Why was BigInt introduced?

To handle numbers larger than JavaScript's safe integer limit.

### How do you create a BigInt?

```typescript
123n
```

or

```typescript
BigInt()
```

### Can BigInt store decimal values?

```typescript
No
```

Only integers.

### Can we add a number and a bigint together?

```typescript
No
```

Both values must be of type:

```typescript
bigint
```

### When should we use BigInt?

When numbers exceed the safe range of the normal `number` type.

# Question: What is Symbol Data Type in TypeScript?

## 20-Second Interview Answer

> `Symbol` is a primitive data type in JavaScript and TypeScript used to create unique identifiers. Every Symbol value is unique, even if multiple Symbols are created with the same description.

---

## Interview Answer

`Symbol` is a special primitive data type introduced in ES6.

It is mainly used to create:

```typescript
Unique Identifiers
```

Unlike strings or numbers, every Symbol is unique.

Even if two Symbols have the same description, they are still different values.

---

# How to Create a Symbol

Use:

```typescript
Symbol()
```

Example:

```typescript
const id =
  Symbol();
```

---

# Symbol with Description

A description helps identify the Symbol during debugging.

```typescript
const id =
  Symbol("userId");
```

---

# Example

```typescript
const id1 =
  Symbol("id");

const id2 =
  Symbol("id");

console.log(id1 === id2);
```

Output:

```typescript
false
```

Even though both have:

```typescript
"id"
```

they are unique.

---

# Why is Symbol Unique?

Every call to:

```typescript
Symbol()
```

creates a brand new unique value.

```typescript
const a =
  Symbol("test");

const b =
  Symbol("test");
```

```typescript
a === b
```

Output:

```typescript
false
```

---

# Using Symbol as Object Keys

One common use of Symbol is creating unique object properties.

```typescript
const userId =
  Symbol("id");

const user = {
  name: "John",
  [userId]: 101
};

console.log(user[userId]);
```

Output:

```typescript
101
```

---

# Prevent Property Name Conflicts

Normally:

```typescript
const user = {
  id: 1
};
```

Another developer might also create:

```typescript
id
```

causing conflicts.

With Symbol:

```typescript
const id =
  Symbol("id");
```

property names are always unique.

---

# Type Declaration

```typescript
let id: symbol =
  Symbol("userId");
```

---

# Type Inference

```typescript
let id =
  Symbol("userId");
```

TypeScript automatically infers:

```typescript
symbol
```

---

# Where Can We Use Symbol?

### Unique Object Properties

```typescript
const key =
  Symbol("key");
```

---

### Framework and Library Development

Used internally by libraries to avoid naming conflicts.

---

### Metadata Storage

Store hidden or special information inside objects.

---

### Private-like Object Properties

Prevent accidental access using normal property names.

---

# Real-World Example

```typescript
const employeeId =
  Symbol("employeeId");

const employee = {
  name: "John",
  [employeeId]: 1001
};

console.log(
  employee[employeeId]
);
```

Output:

```typescript
1001
```

---

# Difference Between String and Symbol Keys

### String Key

```typescript
const obj = {
  id: 1
};
```

Can conflict with other properties.

---

### Symbol Key

```typescript
const id =
  Symbol("id");

const obj = {
  [id]: 1
};
```

Always unique.

---

## Easy Remember

```typescript
Symbol
=
Unique Identifier
```

---

```typescript
Every Symbol
=
Unique
```

---

```typescript
Symbol("id")
!== 
Symbol("id")
```

Always.

---

## Common Follow-up Questions

### What is Symbol?

A primitive data type used to create unique identifiers.

### Are two Symbols with the same description equal?

```typescript
No
```

Every Symbol is unique.

### How do you create a Symbol?

```typescript
Symbol()
```

### What is the main use of Symbol?

Creating unique object keys.

### Can Symbol be used as an object property?

```typescript
Yes
```

Using:

```typescript
[Symbol()]
```

as the key.

### Why use Symbol instead of String?

To avoid property name conflicts and ensure uniqueness.
# Question: How do you get an Input Field Value in TypeScript?

## 20-Second Interview Answer

> In TypeScript, we first select the input element using `getElementById()` or `querySelector()`, then use type assertion (`as HTMLInputElement`) so that TypeScript knows it is an input element. After that, we can access the value using the `.value` property.

---

## Interview Answer

In TypeScript:

```typescript
getElementById()
```

returns:

```typescript
HTMLElement | null
```

TypeScript does not know whether the element is:

```typescript
input
button
div
span
```

Therefore, we need to tell TypeScript that the selected element is an input field.

We do this using:

```typescript
as HTMLInputElement
```

Then we can access:

```typescript
.value
```

to get the user input.

---

# Example

### HTML

```html
<input type="text" id="username" />
```

### TypeScript

```typescript
const input = document.getElementById("username") as HTMLInputElement;

console.log(input.value);
```

---

# Using querySelector

```typescript
const input = document.querySelector("#username") as HTMLInputElement;

console.log(input.value);
```

---

# Example with Function

```typescript
function getInfo() {
  const input = document.getElementById("username") as HTMLInputElement;
  const name: string =input.value;
  console.log(name);
}
```

---

# Why Use HTMLInputElement?

Without type assertion:

```typescript
const input = document.getElementById("username");

console.log(input.value);
```

Output:

```typescript
Error
```

Because:

```typescript
Property 'value'
does not exist on type
'HTMLElement'
```

---

# Correct Way

```typescript
const input = document.getElementById("username") as HTMLInputElement;

console.log(input.value);
```

Now TypeScript knows:

```typescript
This is an Input Element
```

---

## Easy Remember

```typescript
Select Element
      ↓
as HTMLInputElement
      ↓
.value
      ↓
Get Input Value
```

---

## Common Follow-up Questions

### Why do we use `as HTMLInputElement`?

Because `getElementById()` returns a generic `HTMLElement`, and TypeScript needs to know that it is specifically an input element.

### Which property is used to get input value?

```typescript
.value
```

### What does `getElementById()` return?

```typescript
HTMLElement | null
```

### Can we use `querySelector()`?

```typescript
Yes
```

### Which interface represents an input field?

```typescript
HTMLInputElement
```

# Question: What is an Array Data Type in TypeScript?

## 20-Second Interview Answer

> An array in TypeScript is a data type used to store multiple values of the same type in a single variable. Arrays are ordered collections where each element is accessed using its index position.

---

## Interview Answer

An array is a collection of values stored in a single variable.

In JavaScript:

> An array can store multiple values of the same or different data types.

In TypeScript:

> An array is generally used to store multiple values of a specified type, providing better type safety.

Arrays are:

- Pre-defined Data Type
- Ordered Collection
- Index Based
- Dynamic in Size

Index always starts from:

```typescript
0
```

---

# Why Use Arrays?

Instead of creating multiple variables:

```typescript
let num1 = 10;
let num2 = 20;
let num3 = 30;
```

We can use:

```typescript
let numbers: number[] =
  [10, 20, 30];
```

---

# Array of Numbers

```typescript
let numbers: number[] =
  [10, 20, 30, 40];
```

---

# Array of Strings

```typescript
let names: string[] =
  ["John", "David", "Alex"];
```

---

# Array of Booleans

```typescript
let status: boolean[] =
  [true, false, true];
```

---

# Alternative Syntax

```typescript
let numbers:
  Array<number> =
  [10, 20, 30];
```

Both are valid.

---

# Accessing Array Elements

```typescript
let names: string[] =
  ["John", "David", "Alex"];

console.log(names[0]);
```

Output:

```typescript
John
```

---

```typescript
console.log(names[1]);
```

Output:

```typescript
David
```

---

# Adding Elements

```typescript
let numbers: number[] =
  [10, 20];

numbers.push(30);

console.log(numbers);
```

Output:

```typescript
[10, 20, 30]
```

---

# Type Safety

```typescript
let numbers: number[] =
  [10, 20, 30];
```

Valid.

---

```typescript
let numbers: number[] =
  [10, 20, "John"];
```

Output:

```typescript
Error
```

Because:

```typescript
string
```

cannot be added to:

```typescript
number[]
```

---

# Type Inference

```typescript
let numbers =
  [10, 20, 30];
```

TypeScript automatically infers:

```typescript
number[]
```

---

```typescript
let names =
  ["John", "David"];
```

TypeScript infers:

```typescript
string[]
```

---

# Array Length

```typescript
let numbers =
  [10, 20, 30];

console.log(
  numbers.length
);
```

Output:

```typescript
3
```

---

# Common Array Methods

```typescript
push()
pop()
shift()
unshift()
map()
filter()
find()
reduce()
```

---

# Real-World Example

```typescript
let employees:
  string[] = [
    "John",
    "David",
    "Alex"
  ];
```

Store multiple employee names in a single variable.

---

## Easy Remember

```typescript
Array
=
Collection of Values
```

---

```typescript
number[]
```

Stores only numbers.

---

```typescript
string[]
```

Stores only strings.

---

```typescript
boolean[]
```

Stores only booleans.

---

```typescript
Index Starts From 0
```

---

## Common Follow-up Questions

### What is an Array?

A collection of multiple values stored in a single variable.

### Is Array a built-in data type?

```typescript
Yes
```

### Can TypeScript enforce the type of array elements?

```typescript
Yes
```

Using:

```typescript
number[]
string[]
boolean[]
```

### What is the index of the first element?

```typescript
0
```

### How do you add an element to an array?

```typescript
push()
```

### How do you get the number of elements in an array?

```typescript
length
```



# Question: What is a Tuple Data Type in TypeScript?

## 20-Second Interview Answer

> A Tuple in TypeScript is a fixed-size typed array where each element has a specific data type and position. Unlike arrays, tuples can store multiple values of different data types while maintaining a fixed order and structure.

---

## Interview Answer

A Tuple is a special type of array in TypeScript.

It allows us to store:

```typescript
Multiple Values
Different Data Types
Fixed Order
Fixed Length
```

Each element in a tuple has:

- A specific position
- A specific data type

The order is important.

---

# Tuple Syntax

```typescript
let user:
  [string, number];
```

Here:

```typescript
1st Value → string

2nd Value → number
```

---

# Example

```typescript
let user:
  [string, number];

user = [
  "John",
  25
];
```

Valid.

---

# Invalid Example

```typescript
let user:
  [string, number];

user = [
  25,
  "John"
];
```

Output:

```typescript
Error
```

Because the order is incorrect.

Expected:

```typescript
[string, number]
```

Received:

```typescript
[number, string]
```

---

# Tuple with Multiple Types

```typescript
let employee:
  [number, string, boolean];

employee = [
  101,
  "John",
  true
];
```

Valid.

---

# Accessing Tuple Elements

```typescript
let user:
  [string, number] =
  ["John", 25];

console.log(user[0]);
```

Output:

```typescript
John
```

---

```typescript
console.log(user[1]);
```

Output:

```typescript
25
```

---

# Tuple vs Array

## Array

Stores values of the same type.

```typescript
let numbers:
  number[] =
  [10, 20, 30];
```

All values are:

```typescript
number
```

---

## Tuple

Stores values of different types.

```typescript
let user:
  [string, number];

user = [
  "John",
  25
];
```

Different types allowed.

---

# Comparison

| Array | Tuple |
|---------|---------|
| Same data type | Different data types |
| Dynamic length | Fixed length |
| Order not important | Order important |
| Flexible structure | Fixed structure |

---

# Real-World Example

## User Information

```typescript
let user:
  [number, string];

user = [
  101,
  "John"
];
```

---

## API Response

```typescript
let response:
  [boolean, string];

response = [
  true,
  "Success"
];
```

---

## Product Data

```typescript
let product:
  [number, string, number];

product = [
  1,
  "Laptop",
  50000
];
```

---

# Where Can We Use Tuples?

### Store Fixed Data Structure

```typescript
[id, name]
```

---

### API Responses

```typescript
[status, message]
```

---

### Database Records

```typescript
[id, username]
```

---

### Coordinates

```typescript
[x, y]
```

Example:

```typescript
let point:
  [number, number];

point = [10, 20];
```

---

# Type Inference

```typescript
let user:
  [string, number] =
  ["John", 25];
```

TypeScript understands:

```typescript
Position 1 → string

Position 2 → number
```

---

## Easy Remember

```typescript
Array
=
Same Type Values
```

---

```typescript
Tuple
=
Different Type Values
```

---

```typescript
Tuple
=
Fixed Length
+
Fixed Order
```

---

## Common Follow-up Questions

### What is a Tuple?

A fixed-size typed array where each element has a specific type and position.

### Can a Tuple store different data types?

```typescript
Yes
```

### Is order important in a Tuple?

```typescript
Yes
```

### What is the difference between Array and Tuple?

Arrays usually store the same type of values, while Tuples store different types with fixed positions.

### Where are Tuples commonly used?

- API Responses
- User Information
- Coordinates
- Database Records

### Is Tuple length fixed?

```typescript
Yes
```

The number and order of elements are predefined.

# Question: What is an Object Data Type in TypeScript?

## 20-Second Interview Answer

> An object in TypeScript is a data type used to store related data in key-value pair format. TypeScript allows us to define the data type of each property, providing type safety and better code quality.

---

## Interview Answer

An object is used to store related information together.

Data is stored in:

```typescript
Key : Value
```

format.

Unlike JavaScript, TypeScript allows us to define the type of each property.

This helps catch errors during development.

---

# Object Syntax

```typescript
let user: {
  name: string;
  age: number;
};
```

Here:

```typescript
name → string

age → number
```

---

# Example

```typescript
let user: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 25
};
```

Valid.

---

# Accessing Object Properties

```typescript
console.log(user.name);
```

Output:

```typescript
John
```

---

```typescript
console.log(user.age);
```

Output:

```typescript
25
```

---

# Type Safety

```typescript
let user: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 25
};
```

Valid.

---

```typescript
let user: {
  name: string;
  age: number;
} = {
  name: "John",
  age: "25"
};
```

Output:

```typescript
Error
```

Because:

```typescript
age
```

expects:

```typescript
number
```

not:

```typescript
string
```

---

# Adding Multiple Properties

```typescript
let employee: {
  id: number;
  name: string;
  salary: number;
} = {
  id: 101,
  name: "John",
  salary: 50000
};
```

---

# Nested Object

An object can contain another object.

---

## Example

```typescript
let employee = {
  id: 101,
  name: "John",

  address: {
    city: "Bhubaneswar",
    state: "Odisha"
  }
};
```

---

# Typed Nested Object

```typescript
let employee: {
  id: number;
  name: string;

  address: {
    city: string;
    state: string;
  };
} = {
  id: 101,
  name: "John",

  address: {
    city: "Bhubaneswar",
    state: "Odisha"
  }
};
```

---

# Access Nested Properties

```typescript
console.log(
  employee.address.city
);
```

Output:

```typescript
Bhubaneswar
```

---

```typescript
console.log(
  employee.address.state
);
```

Output:

```typescript
Odisha
```

---

# Type Inference

```typescript
let user = {
  name: "John",
  age: 25
};
```

TypeScript automatically infers:

```typescript
{
  name: string;
  age: number;
}
```

---

# Object with Array

```typescript
let student = {
  name: "John",

  skills: [
    "HTML",
    "CSS",
    "TypeScript"
  ]
};
```

---

# Real-World Example

```typescript
let product = {
  id: 1,
  name: "Laptop",
  price: 50000
};
```

Objects are commonly used to represent:

- Users
- Products
- Employees
- Orders
- API Responses

---

## Easy Remember

```typescript
Object
=
Key + Value Pair
```

---

```typescript
{
  name: "John",
  age: 25
}
```

---

```typescript
TypeScript
=
Object +
Property Types
```

---

```typescript
Nested Object
=
Object Inside Object
```

---

## Common Follow-up Questions

### What is an Object?

A collection of related data stored as key-value pairs.

### Why use objects?

To store related information together.

### Can TypeScript define property types?

```typescript
Yes
```

### What is a Nested Object?

An object that contains another object as a property.

### How do you access a nested property?

```typescript
object.property.subProperty
```

Example:

```typescript
employee.address.city
```

### What is the benefit of typing objects?

It provides type safety and catches errors during development.


# Question: What are `any` and `unknown` Data Types in TypeScript?

## 20-Second Interview Answer

> `any` is a TypeScript data type that allows a variable to hold values of any type and disables type checking. `unknown` is similar to `any`, but it is safer because TypeScript requires type checking before performing operations on the value.

---

## Interview Answer

Both:

```typescript
any
```

and

```typescript
unknown
```

are used when the type of a value is not known.

The main difference is:

```typescript
any
```

disables type checking.

While:

```typescript
unknown
```

requires type checking before use.

---

# What is Any?

`any` allows a variable to store any type of value.

TypeScript will not perform type checking.

---

## Example

```typescript
let data: any;

data = "Hello";

data = 100;

data = true;
```

All are valid.

---

# Operations on Any

```typescript
let data: any =
  "Hello";

console.log(
  data.toUpperCase()
);
```

Valid.

TypeScript allows any operation.

---

# When to Use Any?

### Migrating JavaScript to TypeScript

```typescript
let value: any;
```

Useful when converting old JavaScript projects.

---

### Dynamic API Data

```typescript
let response: any;
```

When the API structure is unknown.

---

### Third-Party Libraries

Used when libraries do not provide type definitions.

---

# Problem with Any

Type Safety is lost.

Example:

```typescript
let data: any =
  "Hello";

data();
```

TypeScript will not show an error.

But runtime may fail.

---

# What is Unknown?

`unknown` is a safer alternative to:

```typescript
any
```

It can store any value, but TypeScript does not allow operations until the type is checked.

---

## Example

```typescript
let data: unknown;

data = "Hello";

data = 100;

data = true;
```

Valid.

---

# Type Checking Required

```typescript
let data: unknown =
  "Hello";

console.log(
  data.toUpperCase()
);
```

Output:

```typescript
Error
```

Because TypeScript does not know the actual type.

---

# Correct Way

```typescript
let data: unknown =
  "Hello";

if (
  typeof data ===
  "string"
) {
  console.log(
    data.toUpperCase()
  );
}
```

Output:

```typescript
HELLO
```

---

# Another Example

```typescript
let value: unknown =
  100;

if (
  typeof value ===
  "number"
) {
  console.log(
    value + 10
  );
}
```

Output:

```typescript
110
```

---

# Why Unknown is Safer?

Because TypeScript forces us to verify the type before using it.

This prevents runtime errors.

---

# Any vs Unknown

| any | unknown |
|------|----------|
| Accepts any value | Accepts any value |
| No type checking | Requires type checking |
| Unsafe | Safer |
| Can perform operations directly | Must check type first |
| Disables TypeScript protection | Preserves TypeScript safety |

---

# Real-World Example

### Any

```typescript
const response: any =
  fetchData();
```

TypeScript trusts everything.

---

### Unknown

```typescript
const response:
  unknown =
  fetchData();
```

Must validate the data before use.

Safer approach.

---

# Type Inference

```typescript
let value: any;
```

Can hold:

```typescript
string
number
boolean
object
array
```

---

```typescript
let value:
  unknown;
```

Can also hold any value, but requires checking before usage.

---

## Easy Remember

```typescript
any
=
No Type Checking
```

---

```typescript
unknown
=
Type Checking Required
```

---

```typescript
unknown
=
Safer any
```

---

## Common Follow-up Questions

### What is Any?

A type that allows storing any value and disables type checking.

### What is Unknown?

A type that allows storing any value but requires type checking before use.

### Which is safer?

```typescript
unknown
```

### When should we use Any?

- JavaScript migration
- Dynamic API data
- Third-party libraries without type definitions

### Can we call methods directly on Unknown?

```typescript
No
```

Type checking is required first.

### Which should be preferred in TypeScript?

```typescript
unknown
```

because it maintains type safety.


# Question: What is Return Type in a TypeScript Function?

## 20-Second Interview Answer

> A return type in TypeScript specifies the type of value a function returns. It helps TypeScript ensure that the function returns the correct type of data and improves type safety.

---

## Interview Answer

A return type defines:

```typescript
What type of value a function returns
```

TypeScript checks whether the returned value matches the specified return type.

This helps prevent mistakes and improves code quality.

---

# Syntax

```typescript
function functionName(): returnType {
}
```

---

# Example

```typescript
function add(a: number,b: number): number {
  return a + b;
}
```

Here:

```typescript
number
```

after the parameter list is the return type.

The function must return a number.

---

# String Return Type

```typescript
function greet():string {
  return "Hello";
}
```

Output:

```typescript
Hello
```

---

# Boolean Return Type

```typescript
function isLoggedIn():boolean {
  return true;
}
```

Output:

```typescript
true
```

---

# Object Return Type

```typescript
function getUser():
{
  name: string;
  age: number;
} {

  return {
    name: "John",
    age: 25
  };
}
```

---

# Array Return Type

```typescript
function getNumbers():number[] {
  return [10, 20, 30];
}
```

---

# Type Safety

```typescript
function add( a: number, b: number): number {
  return a + b;
}
```

Valid.

---

```typescript
function add( a: number, b: number ): number {
  return "Hello";
}
```

Output:

```typescript
Error
```

Because:

```typescript
string
```

cannot be returned when the return type is:

```typescript
number
```

---

# Void Return Type

Used when a function does not return anything.

```typescript
function greet(): void {
  console.log(
    "Hello"
  );
}
```

No return value.

---

# Type Inference

TypeScript can automatically determine the return type.

```typescript
function add( a: number, b: number
) {
  return a + b;
}
```

TypeScript infers:

```typescript
number
```

as the return type.

---

# Explicit Return Type (Recommended)

```typescript
function add( a: number, b: number): number {

  return a + b;
}
```

Makes the code more readable and easier to maintain.

---

# Arrow Function Return Type

```typescript
const add = (a: number,b: number): number => {
  return a + b;
};
```

---

# Real-World Example

```typescript
function getProductName():string {
  return "Laptop";
}
```

---

```typescript
function getPrice():number {
  return 50000;
}
```

---

## Easy Remember

```typescript
Return Type
=
Type of Value Returned by Function
```

---

```typescript
: number
```

Returns a number.

---

```typescript
: string
```

Returns a string.

---

```typescript
: boolean
```

Returns a boolean.

---

```typescript
: void
```

Returns nothing.

---

## Common Follow-up Questions

### What is a Return Type?

The type of value returned by a function.

### Why do we use Return Types?

To ensure type safety and prevent incorrect return values.

### What is the return type of a function that returns nothing?

```typescript
void
```

### Can TypeScript infer return types?

```typescript
Yes
```

### Is it good practice to specify return types explicitly?

```typescript
Yes
```

It improves readability and maintainability.

### How do you specify a return type?

```typescript
function add():number {

}
```

# Question: What is `never` in TypeScript?

## 20-Second Interview Answer

> `never` is a TypeScript data type used for functions that never successfully complete and never return a value. It is commonly used for functions that throw errors or run in an infinite loop.

---

## Interview Answer

The `never` type represents:

```typescript
A value that never occurs
```

It is mainly used for functions that:

- Throw an error
- Run forever (infinite loop)
- Never reach the end of execution

Since these functions never return a value, their return type is:

```typescript
never
```

---

# Function That Throws Error

```typescript
function throwError():
  never {

  throw new Error(
    "Something went wrong"
  );
}
```

Output:

```typescript
Error
```

The function stops execution and never returns anything.

---

# Infinite Loop Example

```typescript
function infiniteLoop():
  never {

  while (true) {

  }
}
```

This function runs forever.

It never returns a value.

---

# Why Use Never?

TypeScript uses:

```typescript
never
```

to indicate that a function will never successfully finish.

This helps improve type checking and code safety.

---

# Never vs Void

Many developers confuse:

```typescript
never
```

and

```typescript
void
```

They are different.

---

## Void

A function executes normally but returns nothing.

```typescript
function greet():
  void {

  console.log(
    "Hello"
  );
}
```

Function completes successfully.

---

## Never

A function never completes successfully.

```typescript
function throwError():
  never {

  throw new Error(
    "Error"
  );
}
```

Function terminates with an error.

---

# Difference Between Void and Never

| void | never |
|--------|--------|
| Function completes | Function never completes |
| Returns nothing | Never returns |
| Normal execution | Error or infinite loop |
| Commonly used | Special use cases |

---

# Example

### Void

```typescript
function display():
  void {

  console.log(
    "Welcome"
  );
}
```

---

### Never

```typescript
function fail():
  never {

  throw new Error(
    "Failed"
  );
}
```

---

# Type Inference

TypeScript can infer:

```typescript
never
```

for functions that always throw errors.

Example:

```typescript
function fail() {

  throw new Error(
    "Error"
  );
}
```

TypeScript understands that the function never returns.

---

# Real-World Example

```typescript
function validateAge(
  age: number
): never {

  throw new Error(
    "Invalid Age"
  );
}
```

Execution stops immediately.

No value is returned.

---

## Easy Remember

```typescript
void
=
Returns Nothing
```

Function finishes normally.

---

```typescript
never
=
Never Returns
```

Function never finishes normally.

---

```typescript
throw Error
```

↓

```typescript
never
```

---

```typescript
Infinite Loop
```

↓

```typescript
never
```

---

## Common Follow-up Questions

### What is Never?

A type used for functions that never return a value.

### When do we use Never?

- Throwing errors
- Infinite loops
- Unreachable code scenarios

### Does Never return undefined?

```typescript
No
```

It never returns anything.

### What is the difference between Void and Never?

`void` means the function finishes without returning a value.

`never` means the function never finishes successfully.

### Can a function that throws an error have a return type of Never?

```typescript
Yes
```

That is one of the most common uses of `never`.


# Question: What are Union Types in TypeScript?

## 20-Second Interview Answer

> Union Types in TypeScript allow a variable, parameter, or function to accept more than one data type using the pipe (`|`) symbol. They provide flexibility while maintaining type safety.

---

## Interview Answer

A Union Type allows a value to be one of multiple types.

The pipe symbol:

```typescript
|
```

is used to combine types.

Syntax:

```typescript
type1 | type2
```

This means the value can be either type.

---

# Variable with Union Type

```typescript
let id:number | string;
```

Valid:

```typescript
id = 101;

id = "EMP101";
```

---

# Another Example

```typescript
let data:string | boolean;

data = "Active";

data = true;
```

Both are valid.

---

# Why Use Union Types?

Sometimes a variable may contain different types of values.

Instead of using:

```typescript
any
```

we can use:

```typescript
Union Types
```

for better type safety.

---

# Function Parameter with Union Type

```typescript
function printId(id: number | string) {
  console.log(id);
}
```

Valid:

```typescript
printId(101);

printId("EMP101");
```

---

# Multiple Parameters

```typescript
function login(username: string,otp:string | number) {
  console.log(username,otp);
}
```

Valid:

```typescript
login("John",1234);

login( "John","1234");
```

---

# Function Return Type with Union

A function can return different types.

```typescript
function getValue():string | number {
  return "Hello";
}
```

Valid.

---

```typescript
function getValue():string | number {
  return 100;
}
```

Also valid.

---

# Type Checking with Union Types

Before performing operations, we often need to check the actual type.

---

## Example

```typescript
function printValue(value:string | number) {

  if (typeof value ==="string") {

    console.log(
      value.toUpperCase()
    );

  } else {

    console.log(value.toFixed(2));
  }
}
```

---

# Why Type Checking is Important?

Without checking:

```typescript
function printValue(value:string | number) {

  console.log(
    value.toUpperCase()
  );
}
```

Output:

```typescript
Error
```

Because TypeScript does not know whether:

```typescript
value
```

is:

```typescript
string
```

or

```typescript
number
```

---

# Using typeof with Union Types

```typescript
if ( typeof value ==="string") {

}
```

Checks for:

```typescript
string
```

---

```typescript
if (typeof value ==="number") {

}
```

Checks for:

```typescript
number
```

---

# Real-World Example

### API Response

```typescript
let response:string | null;
```

Response may contain:

```typescript
Data
```

or

```typescript
null
```

---

### User ID

```typescript
let userId:string | number;
```

Database systems often use either.

---

# Type Inference

```typescript
let value:string | number;

value = "Hello";

value = 100;
```

TypeScript understands both types are allowed.

---

# Union with Arrays

```typescript
let data:(string | number)[]= ["John",101,"David",102];
```

Array can contain both:

```typescript
string
```

and

```typescript
number
```

---

## Easy Remember

```typescript
Union Type
=
Multiple Allowed Types
```

---

```typescript
|
```

means:

```typescript
OR
```

---

```typescript
string | number
```

means:

```typescript
string OR number
```

---

## Common Follow-up Questions

### What is a Union Type?

A type that allows multiple possible data types.

### Which symbol is used for Union Types?

```typescript
|
```

(Pipe Operator)

### Can Union Types be used with function parameters?

```typescript
Yes
```

### Can Union Types be used with return types?

```typescript
Yes
```

### Why do we use type checking with Union Types?

Because TypeScript needs to know the actual type before performing type-specific operations.

### Which operator is commonly used for Union Type checking?

```typescript
typeof
```

# Question: What is an Interface in TypeScript?

## 20-Second Interview Answer

> An Interface in TypeScript is used to define the structure of an object by specifying property names and their data types. It helps enforce consistency and provides type safety across the application.

---

# What is an Interface?

An Interface is a blueprint for an object.

It defines:

- Property Names
- Property Types
- Object Structure

An interface does not store data.

It only defines how an object should look.

---

# Why Use Interface?

Without an interface:

```typescript
let user: {
  id: number;
  name: string;
};
```

For multiple objects, this becomes repetitive.

Using an interface:

```typescript
interface User {
  id: number;
  name: string;
}
```

We can reuse it anywhere.

---

# Define an Interface

```typescript
interface User {
  id: number;
  name: string;
  age: number;
}
```

---

# How to Use Interface

```typescript
interface User {
  id: number;
  name: string;
  age: number;
}

const user: User = {
  id: 1,
  name: "John",
  age: 25
};
```

---

# Type Safety

```typescript
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "John"
};
```

Valid.

---

```typescript
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: "1",
  name: "John"
};
```

Output:

```typescript
Error
```

Because:

```typescript
id
```

must be:

```typescript
number
```

---

# Interface with Function

```typescript
interface User {
  id: number;
  name: string;
}

function printUser(user: User) {
  console.log(user.name);
}
```

---

# Interface with Array

```typescript
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "David"
  }
];
```

---

# Optional Properties

Use:

```typescript
?
```

for optional fields.

```typescript
interface User {
  id: number;
  name: string;
  email?: string;
}
```

Now:

```typescript
email
```

is optional.

---

# Extend Interface

An interface can inherit properties from another interface.

Use:

```typescript
extends
```

---

## Example

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  id: number;
  salary: number;
}
```

---

# Using Extended Interface

```typescript
const employee: Employee = {
  id: 101,
  name: "John",
  age: 25,
  salary: 50000
};
```

The Employee interface contains:

```typescript
name
age
id
salary
```

---

# Multiple Interface Extension

```typescript
interface Person {
  name: string;
}

interface Contact {
  email: string;
}

interface Employee
  extends Person,
    Contact {
  id: number;
}
```

---

# Real-World Example

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
}

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 50000
};
```

---

# Interface vs Type Alias

## Interface

```typescript
interface User {
  name: string;
}
```

---

## Type Alias

```typescript
type User = {
  name: string;
};
```

Both can define object structures.

For object definitions, interfaces are commonly preferred.

---

## Easy Remember

```typescript
Interface
=
Blueprint of an Object
```

---

```typescript
interface User {
  id: number;
  name: string;
}
```

Defines object structure.

---

```typescript
extends
```

Used to inherit properties from another interface.

---

## Common Follow-up Questions

### What is an Interface?

A blueprint that defines the structure of an object.

### Why do we use Interfaces?

To improve reusability, consistency, and type safety.

### Can an Interface define function parameters?

```typescript
Yes
```

### Can an Interface be extended?

```typescript
Yes
```

Using:

```typescript
extends
```

### What is the difference between Interface and Class?

Interface only defines structure, while a class contains both data and implementation.

### Can an Interface have optional properties?

```typescript
Yes
```

Using:

```typescript
?
```

# Question: What are Intersection Types in TypeScript?

## 20-Second Interview Answer

> Intersection Types in TypeScript combine multiple types into a single type using the `&` symbol. The resulting type contains all properties from the combined types, and an object must satisfy every type involved.

---

# What is an Intersection Type?

An Intersection Type combines multiple types into one.

It uses the:

```typescript
&
```

operator.

The new type contains all properties from the combined types.

Syntax:

```typescript
TypeA & TypeB
```

Meaning:

```typescript
TypeA AND TypeB
```

The object must contain all properties from both types.

---

# Using Intersection with Type Alias

## Example

```typescript
type Person = {
  name: string;
};

type Employee = {
  id: number;
};

type EmployeeDetails =
  Person & Employee;
```

---

# Using the Combined Type

```typescript
const employee:
  EmployeeDetails = {
  name: "John",
  id: 101
};
```

Valid.

---

# Invalid Example

```typescript
const employee:
  EmployeeDetails = {
  name: "John"
};
```

Output:

```typescript
Error
```

Because:

```typescript
id
```

is missing.

---

# Multiple Type Combination

```typescript
type Person = {
  name: string;
};

type Employee = {
  id: number;
};

type Salary = {
  salary: number;
};

type EmployeeInfo =
  Person &
  Employee &
  Salary;
```

---

# Usage

```typescript
const emp:
  EmployeeInfo = {
  name: "John",
  id: 101,
  salary: 50000
};
```

---

# Using Intersection with Interfaces

## Example

```typescript
interface Person {
  name: string;
}

interface Employee {
  id: number;
}

type EmployeeDetails =
  Person & Employee;
```

---

# Usage

```typescript
const employee:
  EmployeeDetails = {
  name: "John",
  id: 101
};
```

---

# Another Example

```typescript
interface User {
  username: string;
}

interface Contact {
  email: string;
}

type UserProfile =
  User & Contact;
```

---

# Usage

```typescript
const profile:
  UserProfile = {
  username: "john123",
  email: "john@gmail.com"
};
```

---

# Why Use Intersection Types?

Used when we want to combine multiple types into a single type.

Benefits:

- Reusability
- Cleaner Code
- Better Type Safety
- Avoid Duplicate Definitions

---

# Intersection vs Union

## Union

```typescript
string | number
```

Means:

```typescript
string OR number
```

---

## Intersection

```typescript
TypeA & TypeB
```

Means:

```typescript
TypeA AND TypeB
```

---

# Example

### Union

```typescript
let value:
  string | number;

value = "Hello";

value = 100;
```

Only one type is required.

---

### Intersection

```typescript
type A = {
  name: string;
};

type B = {
  id: number;
};

type C = A & B;
```

Must contain:

```typescript
name
and
id
```

---

# Real-World Example

```typescript
interface User {
  name: string;
}

interface Address {
  city: string;
}

type UserProfile =
  User & Address;
```

---

```typescript
const profile:
  UserProfile = {
  name: "John",
  city: "Bhubaneswar"
};
```

---

## Easy Remember

```typescript
|
=
OR
```

(Union)

---

```typescript
&
=
AND
```

(Intersection)

---

```typescript
Intersection
=
Combine Multiple Types
```

---

```typescript
TypeA & TypeB
```

Must satisfy both types.

---

## Common Follow-up Questions

### What is an Intersection Type?

A type that combines multiple types into one.

### Which symbol is used for Intersection Types?

```typescript
&
```

### What does `A & B` mean?

The object must satisfy both:

```typescript
A
```

and

```typescript
B
```

### Can Intersection Types be used with Type Aliases?

```typescript
Yes
```

### Can Intersection Types be used with Interfaces?

```typescript
Yes
```

### What is the difference between Union and Intersection?

Union means:

```typescript
OR
```

Intersection means:

```typescript
AND
```



# Question: What is Type Alias (`type`) in TypeScript?

## 20-Second Interview Answer

> A `type` in TypeScript is used to create custom reusable data types for variables, objects, functions, unions, and intersections. It helps improve code reusability, readability, and maintainability.

---

# What is Type?

A `type` (Type Alias) is used to create a custom name for a data type.

It allows us to reuse the same type definition in multiple places.

Instead of writing the same type repeatedly, we create a type alias.

---

# Why Use Type?

Benefits:

- Reusable
- Cleaner Code
- Better Readability
- Easier Maintenance

---

# Define a Type

```typescript
type User = {
  id: number;
  name: string;
};
```

Here:

```typescript
User
```

is a custom type.

---

# How to Use Type

```typescript
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John"
};
```

---

# Type with Variable

```typescript
type ID =
  string | number;

let userId: ID;

userId = 101;

userId = "EMP101";
```

---

# Type with Function

```typescript
type AddFunction =
  (
    a: number,
    b: number
  ) => number;

const add:
  AddFunction =
  (a, b) => {
    return a + b;
  };
```

---

# Type with Union

```typescript
type Status =
  "success" |
  "error" |
  "loading";
```

Usage:

```typescript
let apiStatus:
  Status;

apiStatus =
  "success";
```

---

# Type with Intersection

```typescript
type Person = {
  name: string;
};

type Employee = {
  id: number;
};

type EmployeeInfo =
  Person & Employee;
```

---

# Usage

```typescript
const emp:
  EmployeeInfo = {
  name: "John",
  id: 101
};
```

---

# Type Safety

```typescript
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John"
};
```

Valid.

---

```typescript
const user: User = {
  id: "1",
  name: "John"
};
```

Output:

```typescript
Error
```

Because:

```typescript
id
```

must be:

```typescript
number
```

---

# Real-World Example

```typescript
type Product = {
  id: number;
  name: string;
  price: number;
};
```

---

```typescript
const product:
  Product = {
  id: 1,
  name: "Laptop",
  price: 50000
};
```

---

# Difference Between Interface and Type

## Interface

```typescript
interface User {
  id: number;
  name: string;
}
```

Used mainly for:

```typescript
Objects
```

---

## Type

```typescript
type User = {
  id: number;
  name: string;
};
```

Can be used for:

```typescript
Objects
Unions
Intersections
Functions
Primitive Aliases
```

---

# Interface vs Type

| Interface | Type |
|------------|--------|
| Defines object structure | Creates custom types |
| Supports extends | Supports intersection (&) |
| Mainly used for objects | Can represent any type |
| Declaration merging supported | Declaration merging not supported |

---

# Example

### Interface

```typescript
interface User {
  name: string;
}
```

---

### Type

```typescript
type User = {
  name: string;
};
```

Both create object structures.

---

# When to Use Type?

Use `type` when working with:

- Union Types
- Intersection Types
- Function Types
- Primitive Type Aliases
- Complex Custom Types

---

## Easy Remember

```typescript
type
=
Custom Reusable Type
```

---

```typescript
type User = {
  id: number;
  name: string;
};
```

---

```typescript
type ID =
  string | number;
```

Union Type.

---

```typescript
type Employee =
  Person & User;
```

Intersection Type.

---

## Common Follow-up Questions

### What is Type Alias?

A custom reusable name for a type.

### Why do we use Type?

To improve reusability and readability.

### Can Type be used with Union Types?

```typescript
Yes
```

### Can Type be used with Function Types?

```typescript
Yes
```

### Can Type be used with Intersection Types?

```typescript
Yes
```

### What is the main difference between Interface and Type?

Interfaces are mainly used for object structures, while Types can represent objects, unions, intersections, functions, and primitive aliases.


# Question: What is an Enum in TypeScript?

## 20-Second Interview Answer

> Enum in TypeScript is a feature used to define a collection of named constant values. It improves code readability and maintainability by replacing hardcoded values with meaningful names.

---

# What is Enum?

Enum stands for:

```typescript
Enumeration
```

It is used to define a group of related constant values.

Instead of using hardcoded values, we use meaningful names.

Example:

Instead of:

```typescript
let status = 1;
```

Use:

```typescript
Status.Active
```

which is more readable.

---

# Why Use Enum?

Benefits:

- Improves Readability
- Avoids Magic Numbers
- Easier Maintenance
- Better Type Safety

---

# How to Define an Enum

```typescript
enum Status {
  Active,
  Inactive,
  Pending
}
```

---

# Default Values

TypeScript automatically assigns numeric values.

```typescript
enum Status {
  Active,
  Inactive,
  Pending
}
```

Equivalent to:

```typescript
enum Status {
  Active = 0,
  Inactive = 1,
  Pending = 2
}
```

---

# How to Use Enum

```typescript
enum Status {
  Active,
  Inactive,
  Pending
}

let userStatus:
  Status =
  Status.Active;

console.log(userStatus);
```

Output:

```typescript
0
```

---

# Access Enum Values

```typescript
console.log(
  Status.Active
);
```

Output:

```typescript
0
```

---

```typescript
console.log(
  Status.Pending
);
```

Output:

```typescript
2
```

---

# Custom Numeric Values

```typescript
enum Status {
  Active = 1,
  Inactive = 2,
  Pending = 3
}
```

---

# Example

```typescript
console.log(
  Status.Active
);
```

Output:

```typescript
1
```

---

# String Enum

Instead of numbers, we can use strings.

```typescript
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}
```

---

# Usage

```typescript
let status:
  Status =
  Status.Active;

console.log(status);
```

Output:

```typescript
ACTIVE
```

---

# Real-World Example

```typescript
enum Role {
  Admin,
  User,
  Guest
}

let userRole: Role =Role.Admin;
```

---

# Another Example

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}
```

Used in games and navigation systems.

---

# Type Safety

```typescript
enum Role {
  Admin,
  User
}

let role:Role = Role.Admin;
```

Valid.

---

```typescript
role = "Admin";
```

Output:

```typescript
Error
```

Because:

```typescript
role
```

expects:

```typescript
Role
```

not:

```typescript
string
```

---

# Enum vs Constant Object

### Without Enum

```typescript
const ADMIN ="ADMIN";

const USER ="USER";
```

---

### With Enum

```typescript
enum Role {
  Admin = "ADMIN",
  User = "USER"
}
```

Cleaner and more organized.

---

## Easy Remember

```typescript
Enum
=
Collection of Constants
```

---

```typescript
enum Status {
  Active,
  Inactive,
  Pending
}
```

---

```typescript
Enum Values
```

Can be:

```typescript
Number
```

or

```typescript
String
```

---

## Common Follow-up Questions

### What is Enum?

A collection of named constant values.

### Why do we use Enum?

To improve readability and avoid hardcoded values.

### What is the default value of the first Enum member?

```typescript
0
```

### Can Enum store strings?

```typescript
Yes
```

Using String Enums.

### Which is more commonly used in modern applications?

```typescript
String Enum
```

because it is easier to read and debug.

### Can Enum improve type safety?

```typescript
Yes
```

It restricts values to predefined constants.


# Question: DOM Handling and Type Casting in TypeScript

## 20-Second Interview Answer

> In TypeScript, DOM elements are accessed using methods like `getElementById()` and `querySelector()`. Since these methods return generic element types, we often use type casting (`as HTMLInputElement`) to access element-specific properties such as `.value`. The non-null assertion operator (`!`) is used when we are sure the element exists.

---

# How to Access DOM Elements?

TypeScript provides DOM methods such as:

```typescript
getElementById()
querySelector()
getElementsByClassName()
getElementsByTagName()
```

---

# Using getElementById()

```typescript
const element =
  document.getElementById(
    "username"
  );
```

Return Type:

```typescript
HTMLElement | null
```

Because the element may or may not exist.

---

# Using querySelector()

```typescript
const element =
  document.querySelector(
    "#username"
  );
```

Return Type:

```typescript
Element | null
```

---

# Problem

```typescript
const input =
  document.getElementById(
    "username"
  );

console.log(input.value);
```

Output:

```typescript
Error
```

Because:

```typescript
HTMLElement
```

does not guarantee the existence of:

```typescript
.value
```

---

# Type Casting (Type Assertion)

TypeScript sees the element as:

```typescript
HTMLElement
```

But:

```typescript
.value
```

exists on:

```typescript
HTMLInputElement
```

So we tell TypeScript the actual type.

---

# Syntax

```typescript
const input =
  document.getElementById(
    "username"
  ) as HTMLInputElement;
```

---

# Example

```typescript
const input =
  document.getElementById(
    "username"
  ) as HTMLInputElement;

console.log(
  input.value
);
```

Now TypeScript knows:

```typescript
input
```

is an:

```typescript
HTMLInputElement
```

---

# Getting Input Field Value

```typescript
const input =
  document.getElementById(
    "username"
  ) as HTMLInputElement;

const value =
  input.value;

console.log(value);
```

---

# Common HTML Element Types

### Input

```typescript
HTMLInputElement
```

---

### Button

```typescript
HTMLButtonElement
```

---

### Form

```typescript
HTMLFormElement
```

---

### Image

```typescript
HTMLImageElement
```

---

### Select

```typescript
HTMLSelectElement
```

---

# Non-Null Assertion Operator (!)

Sometimes TypeScript says:

```typescript
Object is possibly null
```

because:

```typescript
getElementById()
```

can return:

```typescript
null
```

---

# Example

```typescript
const input =
  document.getElementById(
    "username"
  );

console.log(input.value);
```

Output:

```typescript
Object is possibly null
```

---

# Using !

```typescript
const input =
  document.getElementById(
    "username"
  )!;

console.log(input);
```

The:

```typescript
!
```

means:

```typescript
I am sure this value
is not null
```

---

# Combining ! and Type Casting

```typescript
const input =
  document.getElementById(
    "username"
  )! as HTMLInputElement;

console.log(
  input.value
);
```

---

# Safer Approach

Instead of using:

```typescript
!
```

check for null.

```typescript
const input =
  document.getElementById(
    "username"
  );

if (input) {
  console.log(input);
}
```

---

# Real-World Example

```typescript
function getInfo() {

  const input =
    document.getElementById(
      "username"
    ) as HTMLInputElement;

  console.log(
    input.value
  );
}
```

---

## Easy Remember

```typescript
getElementById()
```

returns:

```typescript
HTMLElement | null
```

---

```typescript
.value
```

exists on:

```typescript
HTMLInputElement
```

---

```typescript
as HTMLInputElement
```

=

```typescript
Type Casting
```

---

```typescript
!
```

=

```typescript
Non-Null Assertion
```

---

## Common Follow-up Questions

### Why do we use Type Casting?

Because TypeScript treats DOM elements as generic elements and does not know their exact type.

### What is Type Casting?

Converting a generic type into a more specific type.

### What does `as HTMLInputElement` do?

It tells TypeScript that the selected element is an input element.

### What does `!` mean?

It tells TypeScript that the value is not null.

### Which type is used for input fields?

```typescript
HTMLInputElement
```

### How do you get an input value?

```typescript
const input =
  document.getElementById("username") as HTMLInputElement;

console.log(input.value);
```


# Question: What are Classes in TypeScript?

## 20-Second Interview Answer

> A class in TypeScript is a blueprint for creating objects. It contains properties (variables) and methods (functions). TypeScript allows us to define data types for class properties and method parameters, providing better type safety.

---

# What is a Class?

A class is a blueprint for creating objects.

It defines:

- Properties (Variables)
- Methods (Functions)

Using a class, we can create multiple objects with the same structure.

---

# Why Use Classes?

Benefits:

- Code Reusability
- Better Organization
- Object-Oriented Programming
- Type Safety

---

# Class Syntax

```typescript
class ClassName {

}
```

---

# Example of a Class

```typescript
class Student {

  name: string;
  age: number;

  constructor(
    name: string,
    age: number
  ) {
    this.name = name;
    this.age = age;
  }

  display(): void {
    console.log(
      this.name,
      this.age
    );
  }
}
```

---

# Creating an Object

```typescript
const student =
  new Student(
    "John",
    25
  );

student.display();
```

Output:

```typescript
John 25
```

---

# Class Property Types

TypeScript allows us to define data types for properties.

```typescript
class Employee {

  id: number;
  name: string;
  salary: number;
}
```

---

# Method with Parameter Types

```typescript
class Calculator {

  add(
    a: number,
    b: number
  ): number {

    return a + b;
  }
}
```

---

# Usage

```typescript
const calc =
  new Calculator();

console.log(
  calc.add(10, 20)
);
```

Output:

```typescript
30
```

---

# Constructor in Class

A constructor is a special method that runs automatically when an object is created.

```typescript
class User {

  name: string;

  constructor(
    name: string
  ) {
    this.name = name;
  }
}
```

---

# Example

```typescript
const user =
  new User(
    "John"
  );

console.log(
  user.name
);
```

Output:

```typescript
John
```

---

# Class with Multiple Properties

```typescript
class Product {

  id: number;
  name: string;
  price: number;

  constructor(
    id: number,
    name: string,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
```

---

# Usage

```typescript
const product =
  new Product(
    1,
    "Laptop",
    50000
  );

console.log(product);
```

---

# Type Safety

```typescript
class User {

  age: number;
}
```

Valid:

```typescript
user.age = 25;
```

---

Invalid:

```typescript
user.age = "25";
```

Output:

```typescript
Error
```

Because:

```typescript
age
```

must be:

```typescript
number
```

---

# Real-World Example

```typescript
class Employee {

  id: number;
  name: string;

  constructor(
    id: number,
    name: string
  ) {
    this.id = id;
    this.name = name;
  }

  showInfo(): void {
    console.log(
      this.id,
      this.name
    );
  }
}
```

---

```typescript
const emp =
  new Employee(
    101,
    "John"
  );

emp.showInfo();
```

Output:

```typescript
101 John
```

---

## Easy Remember

```typescript
Class
=
Blueprint of Objects
```

---

```typescript
Properties
=
Variables
```

---

```typescript
Methods
=
Functions
```

---

```typescript
new
```

Used to create objects.

---

```typescript
constructor()
```

Runs automatically when an object is created.

---

## Common Follow-up Questions

### What is a Class?

A blueprint used to create objects.

### What are Properties?

Variables inside a class.

### What are Methods?

Functions inside a class.

### What is a Constructor?

A special method that runs automatically when an object is created.

### How do you create an object from a class?

```typescript
const obj = new ClassName();
```

### Can we define types for class properties?

```typescript
Yes
```

TypeScript allows data types for properties, parameters, and return values.

# Question: What are Access Modifiers in TypeScript?

## 20-Second Interview Answer

> Access Modifiers in TypeScript are used to control the visibility and accessibility of class properties and methods. The three main access modifiers are public, private, and protected.

---

## What are Access Modifiers?

Access Modifiers in TypeScript are used to control the visibility and accessibility of class properties and methods.

TypeScript provides three access modifiers:

- public
- private
- protected

---

## Public

- Accessible from anywhere.
- Default access modifier in TypeScript.

### Example

```typescript
class Employee {
  public name: string = "John";
}

const emp = new Employee();
console.log(emp.name);
```

Output:

```typescript
John
```

---

## Private

- Accessible only inside the same class.
- Cannot be accessed outside the class.

### Example

```typescript
class Employee {
  private salary: number = 50000;

  showSalary() {
    console.log(this.salary);
  }
}

const emp = new Employee();
emp.showSalary();
```

### Invalid Example

```typescript
class Employee {
  private salary: number = 50000;
}

const emp = new Employee();
console.log(emp.salary);
```

Output:

```typescript
Error
```

Because `salary` is private.

---

## Protected

- Accessible inside the class.
- Accessible inside child classes.
- Not accessible outside the class hierarchy.

### Example

```typescript
class Person {
  protected name: string = "John";
}

class Employee extends Person {
  showName() {
    console.log(this.name);
  }
}
```

### Invalid Example

```typescript
const emp = new Employee();
console.log(emp.name);
```

Output:

```typescript
Error
```

Because `name` is protected.

---

## Public vs Private vs Protected

| Modifier | Same Class | Child Class | Outside Class |
|----------|------------|-------------|---------------|
| public | ✅ | ✅ | ✅ |
| private | ✅ | ❌ | ❌ |
| protected | ✅ | ✅ | ❌ |

---

## Real World Example

```typescript
class BankAccount {
  public accountName: string;
  private balance: number;

  constructor(name: string, balance: number) {
    this.accountName = name;
    this.balance = balance;
  }

  showBalance() {
    console.log(this.balance);
  }
}
```


# Question: What is Inheritance in TypeScript?

## 20-Second Interview Answer

> Inheritance in TypeScript allows one class to acquire properties and methods of another class. It helps in code reusability by allowing a child class to reuse and extend the functionality of a parent class using the `extends` keyword.

---

## What is Inheritance?

Inheritance is an Object-Oriented Programming (OOP) feature that allows one class to inherit properties and methods from another class.

Benefits:

- Code Reusability
- Less Code Duplication
- Easier Maintenance
- Better Code Organization

TypeScript uses the:

```typescript
extends
```

keyword for inheritance.

---

## Parent Class

```typescript
class Person {
  name: string = "John";

  greet() {
    console.log("Hello");
  }
}
```

---

## Child Class

```typescript
class Employee extends Person {
  salary: number = 50000;
}
```

Here:

```typescript
Employee
```

inherits:

```typescript
name
greet()
```

from:

```typescript
Person
```

---

## Using Inheritance

```typescript
class Person {
  name: string = "John";

  greet() {
    console.log("Hello");
  }
}

class Employee extends Person {
  salary: number = 50000;
}

const emp = new Employee();

console.log(emp.name);
emp.greet();
console.log(emp.salary);
```

Output:

```typescript
John
Hello
50000
```

---

## Constructor with Inheritance

Use:

```typescript
super()
```

to call the parent class constructor.

### Example

```typescript
class Person {
  constructor(public name: string) {}
}

class Employee extends Person {
  constructor(name: string, public salary: number) {
    super(name);
  }
}

const emp = new Employee("John", 50000);

console.log(emp.name);
console.log(emp.salary);
```

Output:

```typescript
John
50000
```

---

## Method Inheritance

```typescript
class Person {
  greet() {
    console.log("Hello");
  }
}

class Employee extends Person {}

const emp = new Employee();
emp.greet();
```

Output:

```typescript
Hello
```

---

## Method Overriding

A child class can override a parent class method.

```typescript
class Person {
  greet() {
    console.log("Hello");
  }
}

class Employee extends Person {
  greet() {
    console.log("Welcome Employee");
  }
}

const emp = new Employee();
emp.greet();
```

Output:

```typescript
Welcome Employee
```

---

## Real World Example

```typescript
class Vehicle {
  start() {
    console.log("Vehicle Started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car Driving");
  }
}

const car = new Car();

car.start();
car.drive();
```

Output:

```typescript
Vehicle Started
Car Driving
```

---

## Parent vs Child Class

| Parent Class | Child Class |
|-------------|-------------|
| Base Class | Derived Class |
| Provides properties and methods | Inherits properties and methods |
| Can exist independently | Depends on Parent Class |

---

## Common Follow-up Questions

### What is Inheritance?

Inheritance allows one class to acquire properties and methods of another class.

### Which keyword is used for Inheritance?

```typescript
extends
```

### Which keyword is used to call the parent constructor?

```typescript
super()
```

### What is a Parent Class?

A class whose properties and methods are inherited by another class.

### What is a Child Class?

A class that inherits properties and methods from a parent class.

### What is Method Overriding?

When a child class provides its own implementation of a parent class method.

### What are the advantages of Inheritance?

- Code Reusability
- Less Duplication
- Easier Maintenance
- Better Organization


# Question: What are Modules in TypeScript?

## 20-Second Interview Answer

> Modules in TypeScript are used to divide code into separate reusable files using `export` and `import` keywords. They help organize code, improve maintainability, and avoid naming conflicts.

---

## What are Modules in TypeScript?

Modules are self-contained units of code that encapsulate related functionalities such as:

- Variables
- Functions
- Classes
- Interfaces
- Types

Modules help break large applications into smaller and reusable files.

TypeScript uses:

```typescript
export
import
```

to create and use modules.

---

## Why Use Modules?

Benefits:

- Code Reusability
- Better Organization
- Easy Maintenance
- Avoid Global Scope Pollution
- Easier Team Collaboration

---

## Exporting a Variable

### user.ts

```typescript
export const name: string = "John";
```

---

## Importing a Variable

### app.ts

```typescript
import { name } from "./user";

console.log(name);
```

Output:

```typescript
John
```

---

## Exporting a Function

### math.ts

```typescript
export function add(a: number, b: number): number {
  return a + b;
}
```

---

## Importing a Function

### app.ts

```typescript
import { add } from "./math";

console.log(add(10, 20));
```

Output:

```typescript
30
```

---

## Exporting a Class

### Employee.ts

```typescript
export class Employee {
  name: string = "John";
}
```

---

## Importing a Class

### app.ts

```typescript
import { Employee } from "./Employee";

const emp = new Employee();
console.log(emp.name);
```

Output:

```typescript
John
```

---

## Named Export

### user.ts

```typescript
export const name = "John";
export const age = 25;
```

---

### app.ts

```typescript
import { name, age } from "./user";

console.log(name, age);
```

---

## Default Export

### user.ts

```typescript
export default class User {
  name: string = "John";
}
```

---

### app.ts

```typescript
import User from "./user";

const user = new User();
console.log(user.name);
```

Output:

```typescript
John
```

---

## Difference Between Named and Default Export

### Named Export

```typescript
export const name = "John";
```

Import:

```typescript
import { name } from "./user";
```

---

### Default Export

```typescript
export default User;
```

Import:

```typescript
import User from "./user";
```

No curly braces required.

---

## Real World Example

### types.ts

```typescript
export interface User {
  id: number;
  name: string;
}
```

---

### app.ts

```typescript
import { User } from "./types";

const user: User = {
  id: 1,
  name: "John"
};
```

---

## Folder Structure Example

```text
src/
│
├── app.ts
├── user.ts
├── employee.ts
├── utils.ts
```

Each file acts as a separate module.

---

## Common Follow-up Questions

### What is a Module?

A self-contained unit of code stored in a separate file.

### Why do we use Modules?

To organize and reuse code.

### Which keywords are used in Modules?

```typescript
export
import
```

### What is the difference between Named Export and Default Export?

Named exports use curly braces during import, while default exports do not.

### Can a module contain classes, functions, and variables?

```typescript
Yes
```

### What is the main advantage of Modules?

Better code organization and reusability.



# Question: What are Getter and Setter in TypeScript?

## 20-Second Interview Answer

> A getter in TypeScript is a special method used to retrieve class property values using the `get` keyword. A setter is a special method used to update class property values using the `set` keyword. They provide controlled access to class properties.

---

## What is a Getter?

A getter is a special method used to read or retrieve the value of a class property.

Getter uses the:

```typescript
get
```

keyword.

---

## Getter Example

```typescript
class Employee {
  private _name: string = "John";

  get name(): string {
    return this._name;
  }
}

const emp = new Employee();

console.log(emp.name);
```

Output:

```typescript
John
```

Notice:

```typescript
emp.name
```

is used like a property, not a function.

---

## What is a Setter?

A setter is a special method used to update the value of a class property.

Setter uses the:

```typescript
set
```

keyword.

---

## Setter Example

```typescript
class Employee {
  private _name: string = "";

  set name(value: string) {
    this._name = value;
  }
}

const emp = new Employee();

emp.name = "John";
```

The setter updates the value of `_name`.

---

## Getter and Setter Together

```typescript
class Employee {
  private _name: string = "";

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const emp = new Employee();

emp.name = "John";

console.log(emp.name);
```

Output:

```typescript
John
```

---

## Why Use Getter and Setter?

Benefits:

- Encapsulation
- Data Validation
- Controlled Access
- Better Security

---

## Validation Using Setter

```typescript
class Employee {
  private _age: number = 0;

  set age(value: number) {
    if (value > 0) {
      this._age = value;
    }
  }

  get age(): number {
    return this._age;
  }
}

const emp = new Employee();

emp.age = 25;

console.log(emp.age);
```

Output:

```typescript
25
```

---

## Real World Example

```typescript
class BankAccount {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount >= 0) {
      this._balance = amount;
    }
  }
}

const account = new BankAccount();

account.balance = 5000;

console.log(account.balance);
```

Output:

```typescript
5000
```

---

## Getter vs Setter

| Getter | Setter |
|----------|----------|
| Reads data | Updates data |
| Uses `get` keyword | Uses `set` keyword |
| Returns value | Accepts value as parameter |
| No parameters | One parameter |

---

## Common Follow-up Questions

### What is a Getter?

A special method used to retrieve a property value.

### What keyword is used for Getter?

```typescript
get
```

### What is a Setter?

A special method used to update a property value.

### What keyword is used for Setter?

```typescript
set
```

### Why do we use Getter and Setter?

To provide controlled access and validation for class properties.

### Can a Setter return a value?

```typescript
No
```

A setter only updates data.

### Can a Getter have parameters?

```typescript
No
```

A getter only returns data.


# Question: How to Use Interface with Class in TypeScript?

## 20-Second Interview Answer

> In TypeScript, a class uses the `implements` keyword to follow the structure defined by an interface. The class must provide all properties and methods declared in the interface.

---

## What is Interface with Class?

An interface defines a contract or structure.

A class can implement that interface using the:

```typescript
implements
```

keyword.

When a class implements an interface, it must provide all properties and methods defined in the interface.

---

## Interface Example

```typescript
interface Person {
  name: string;
  age: number;
}
```

---

## Class Implementing Interface

```typescript
class Employee implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

---

## Usage

```typescript
const emp = new Employee("John", 25);

console.log(emp.name);
console.log(emp.age);
```

Output:

```typescript
John
25
```

---

## Interface with Method

```typescript
interface Person {
  name: string;
  greet(): void;
}
```

---

## Class Implementation

```typescript
class Employee implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log("Hello");
  }
}
```

---

## Usage

```typescript
const emp = new Employee("John");

emp.greet();
```

Output:

```typescript
Hello
```

---

## Missing Property Example

```typescript
interface Person {
  name: string;
  age: number;
}

class Employee implements Person {
  name: string = "John";
}
```

Output:

```typescript
Error
```

Because:

```typescript
age
```

is missing.

The class must implement all interface members.

---

## Multiple Interfaces

A class can implement multiple interfaces.

```typescript
interface Person {
  name: string;
}

interface EmployeeDetails {
  salary: number;
}

class Employee implements Person, EmployeeDetails {
  name: string = "John";
  salary: number = 50000;
}
```

---

## Real World Example

```typescript
interface User {
  id: number;
  name: string;

  login(): void;
}

class Admin implements User {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  login(): void {
    console.log("Admin Logged In");
  }
}
```

---

## implements vs extends

### implements

Used between:

```typescript
Class → Interface
```

Example:

```typescript
class Employee implements Person {}
```

---

### extends

Used between:

```typescript
Class → Class
```

or

```typescript
Interface → Interface
```

Example:

```typescript
class Employee extends Person {}
```

---

## Common Follow-up Questions

### What keyword is used to implement an interface?

```typescript
implements
```

### Can a class implement multiple interfaces?

```typescript
Yes
```

### Is implementing all interface members mandatory?

```typescript
Yes
```

### What happens if a class does not implement all interface members?

```typescript
Compile Time Error
```

### What is the difference between implements and extends?

`implements` is used for Interface → Class relationship, while `extends` is used for inheritance.


# Question: What is the Static Keyword in TypeScript?

## 20-Second Interview Answer

> In TypeScript, the `static` keyword is used to create properties and methods that belong to the class itself rather than individual objects. Static members can be accessed directly using the class name without creating an object.

---

## What is the Static Keyword?

The `static` keyword is used to create:

- Static Properties
- Static Methods

Static members belong to the class itself, not to objects created from the class.

---

## Why Use Static Keyword?

- Define static properties and methods.
- Memory efficient because only one copy exists.
- Create utility/helper methods.
- Store global constants shared by all objects.

---

## Advantage of Static Keyword

- Saves memory.
- No need to create objects.
- Shared across all instances.
- Useful for utility functions and constants.
- Better code organization.

---

## Static Property

```typescript
class Employee {
  static companyName: string = "Google";
}

console.log(Employee.companyName);
```

Output:

```typescript
Google
```

---

## Accessing Static Property

```typescript
class Employee {
  static companyName: string = "Google";
}

console.log(Employee.companyName);
```

Valid.

---

```typescript
const emp = new Employee();

console.log(emp.companyName);
```

Output:

```typescript
Error
```

Because static properties belong to the class, not the object.

---

## Static Method

```typescript
class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }
}

console.log(Calculator.add(10, 20));
```

Output:

```typescript
30
```

---

## Accessing Static Method

```typescript
Calculator.add(10, 20);
```

No object required.

---

## Static Property Example

```typescript
class Company {
  static name: string = "Microsoft";
}

console.log(Company.name);
```

Output:

```typescript
Microsoft
```

---

## Static Method Example

```typescript
class MathUtil {
  static square(num: number): number {
    return num * num;
  }
}

console.log(MathUtil.square(5));
```

Output:

```typescript
25
```

---

## Real World Example

```typescript
class Config {
  static API_URL: string = "https://api.example.com";

  static getApiUrl(): string {
    return Config.API_URL;
  }
}

console.log(Config.API_URL);
console.log(Config.getApiUrl());
```

Output:

```typescript
https://api.example.com
https://api.example.com
```

---

## Static vs Non-Static

| Static | Non-Static |
|----------|------------|
| Belongs to Class | Belongs to Object |
| Accessed using Class Name | Accessed using Object |
| No Object Required | Object Required |
| Single Shared Copy | Separate Copy per Object |

---

## Example Comparison

```typescript
class Employee {
  static company: string = "Google";
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

console.log(Employee.company);

const emp = new Employee("John");
console.log(emp.name);
```

---

## Common Follow-up Questions

### What is a Static Property?

A property that belongs to the class itself.

### What is a Static Method?

A method that belongs to the class itself.

### How do you access Static Members?

```typescript
ClassName.memberName
```

Example:

```typescript
Employee.companyName
```

### Do we need an object to access Static Members?

```typescript
No
```

### What are common uses of Static Members?

- Utility Methods
- Helper Functions
- Constants
- Configuration Values

### What is the main advantage of Static Members?

Memory efficiency because only one copy exists for the entire class.

# Question: What are Type Guards in TypeScript?

## 20-Second Interview Answer

> A Type Guard is a TypeScript feature used to narrow down a variable's type at runtime, allowing safe access to type-specific properties and methods. It helps TypeScript determine the exact type of a variable inside conditional blocks.

---

## What is a Type Guard?

A Type Guard is a technique used to narrow down the type of a variable within a conditional block.

It helps TypeScript identify the actual type of a variable at runtime.

This allows safe access to properties and methods specific to that type.

---

## Why Use Type Guards?

- Provides better type safety.
- Helps TypeScript infer types automatically.
- Prevents runtime errors.
- Allows type-specific operations.
- Works well with Union Types.

---

## Types of Type Guards

- typeof
- instanceof
- Custom Type Guard

---

# 1. typeof Type Guard

Used for primitive data types such as:

```typescript
string
number
boolean
undefined
symbol
bigint
```

### Example

```typescript
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

---

### Usage

```typescript
printValue("hello");
printValue(10);
```

Output:

```typescript
HELLO
10.00
```

---

# 2. instanceof Type Guard

Used with classes and objects.

Checks whether an object is an instance of a particular class.

### Example

```typescript
class Employee {
  work() {
    console.log("Working");
  }
}

class Student {
  study() {
    console.log("Studying");
  }
}

function performAction(person: Employee | Student) {
  if (person instanceof Employee) {
    person.work();
  } else {
    person.study();
  }
}
```

---

### Usage

```typescript
performAction(new Employee());
performAction(new Student());
```

Output:

```typescript
Working
Studying
```

---

# 3. Custom Type Guard

Used when built-in type guards are not enough.

A custom type guard returns:

```typescript
value is TypeName
```

---

### Example

```typescript
interface Employee {
  name: string;
  salary: number;
}

interface Student {
  name: string;
  grade: string;
}

function isEmployee(person: Employee | Student): person is Employee {
  return "salary" in person;
}
```

---

### Usage

```typescript
function printInfo(person: Employee | Student) {
  if (isEmployee(person)) {
    console.log(person.salary);
  } else {
    console.log(person.grade);
  }
}
```

---

# Type Guard with Union Types

```typescript
function process(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length);
  } else {
    console.log(value.toFixed(2));
  }
}
```

TypeScript automatically narrows the type.

---

# Real World Example

```typescript
function getUser(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(0));
  }
}
```

---

## Type Guards Summary

| Type Guard | Used For |
|------------|----------|
| typeof | Primitive Types |
| instanceof | Classes and Objects |
| Custom Type Guard | Custom Types and Interfaces |

---

## Common Follow-up Questions

### What is a Type Guard?

A technique used to narrow down the type of a variable at runtime.

### Why do we use Type Guards?

To provide type safety and perform type-specific operations.

### Which operator is used for primitive types?

```typescript
typeof
```

### Which operator is used for classes?

```typescript
instanceof
```

### What is a Custom Type Guard?

A user-defined function that helps TypeScript determine the type of a variable.

### What is the benefit of Type Guards?

They help TypeScript infer types automatically and prevent runtime errors.



# Question: What are Generics in TypeScript?

## 20-Second Interview Answer

> Generics in TypeScript allow us to create reusable functions, interfaces, classes, and types that can work with different data types while maintaining type safety. Instead of writing separate code for each data type, we can write one generic solution.

---

## What are Generics in TypeScript?

Generics allow us to write reusable code that works with multiple data types.

Without generics, we may need separate functions for:

```typescript
string
number
boolean
```

Generics allow a single function to work with all data types while preserving type safety.

---

## Why Use Generics?

- Code Reusability
- Type Safety
- Better Maintainability
- Less Duplicate Code
- Flexible and Reusable Components

---

## Generic Syntax

```typescript
<T>
```

`T` stands for:

```typescript
Type
```

It is a placeholder for a data type.

---

## Generic Function Example

### Without Generics

```typescript
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}
```

Separate functions are required.

---

### With Generics

```typescript
function getValue<T>(value: T): T {
  return value;
}
```

One function works for all types.

---

## Usage

```typescript
console.log(getValue<string>("Hello"));
console.log(getValue<number>(100));
console.log(getValue<boolean>(true));
```

Output:

```typescript
Hello
100
true
```

---

## Type Inference

TypeScript can automatically detect the type.

```typescript
function getValue<T>(value: T): T {
  return value;
}

const result = getValue("Hello");
```

TypeScript automatically infers:

```typescript
T = string
```

---

## Generic with Array

```typescript
function getItems<T>(items: T[]): T[] {
  return items;
}
```

---

### Usage

```typescript
const numbers = getItems<number>([1, 2, 3]);
const names = getItems<string>(["John", "David"]);
```

---

## Generic Interface

```typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
}
```

---

### Usage

```typescript
const userResponse: ApiResponse<string> = {
  data: "John",
  success: true
};
```

---

## Generic Class

```typescript
class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}
```

---

### Usage

```typescript
const box1 = new Box<string>("Hello");
const box2 = new Box<number>(100);

console.log(box1.value);
console.log(box2.value);
```

Output:

```typescript
Hello
100
```

---

## Multiple Generics

```typescript
function getData<T, U>(id: T, name: U) {
  return { id, name };
}
```

---

### Usage

```typescript
const result = getData<number, string>(1, "John");

console.log(result);
```

Output:

```typescript
{ id: 1, name: "John" }
```

---

## Real World Example

```typescript
interface ApiResponse<T> {
  data: T;
  message: string;
}

const response: ApiResponse<string[]> = {
  data: ["John", "David"],
  message: "Success"
};
```

Generics are commonly used in:

- API Responses
- React Components
- Utility Functions
- Collections
- Libraries

---

## Generic vs Any

### Generic

```typescript
function getValue<T>(value: T): T {
  return value;
}
```

Type Safe.

---

### Any

```typescript
function getValue(value: any): any {
  return value;
}
```

No Type Safety.

---

## Common Follow-up Questions

### What are Generics?

Generics allow reusable code that works with different data types while maintaining type safety.

### What does `<T>` represent?

A placeholder for a data type.

### Why do we use Generics?

To create reusable and type-safe code.

### Can Generics be used with Functions?

```typescript
Yes
```

### Can Generics be used with Interfaces?

```typescript
Yes
```

### Can Generics be used with Classes?

```typescript
Yes
```

### What is the advantage of Generics over `any`?

Generics provide type safety while `any` disables type checking.




# Question: What is `keyof` in TypeScript?

## 20-Second Interview Answer

> `keyof` is a TypeScript operator that returns a union of all property names of a given type. It is commonly used to achieve type safety when working with object properties and dynamic keys.

---

## What is `keyof`?

`keyof` is a TypeScript operator used to get all keys of an object type as a union of string literal types.

It helps ensure that only valid object keys are used.

---

## Why Use `keyof`?

- Better Type Safety
- Prevent Invalid Property Access
- Useful with Objects
- Works Well with Generics
- Reduces Runtime Errors

---

## Basic Example

```typescript
type User = {
  id: number;
  name: string;
  age: number;
};

type UserKeys = keyof User;
```

Result:

```typescript
"id" | "name" | "age"
```

---

## Using `keyof` with Variables

```typescript
type User = {
  id: number;
  name: string;
  age: number;
};

let key: keyof User;

key = "name";
key = "age";
```

Valid.

---

### Invalid Example

```typescript
key = "salary";
```

Output:

```typescript
Error
```

Because:

```typescript
salary
```

is not a key of:

```typescript
User
```

---

## Using `keyof` with Objects

```typescript
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John"
};

let key: keyof User = "name";

console.log(user[key]);
```

Output:

```typescript
John
```

---

## Object Keys with `keyof`

```typescript
type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductKeys = keyof Product;
```

Result:

```typescript
"id" | "name" | "price"
```

---

## Generic Example

```typescript
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
) {
  return obj[key];
}
```

---

### Usage

```typescript
const user = {
  id: 1,
  name: "John"
};

console.log(getProperty(user, "name"));
```

Output:

```typescript
John
```

---

### Invalid Usage

```typescript
getProperty(user, "salary");
```

Output:

```typescript
Error
```

Because:

```typescript
salary
```

is not a valid key.

---

## Using `keyof` with Interface

```typescript
interface Employee {
  id: number;
  name: string;
  salary: number;
}

type EmployeeKeys = keyof Employee;
```

Result:

```typescript
"id" | "name" | "salary"
```

---

## Real World Example

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

function getValue(
  user: User,
  key: keyof User
) {
  return user[key];
}
```

---

### Usage

```typescript
const user: User = {
  id: 1,
  name: "John",
  email: "john@gmail.com"
};

console.log(getValue(user, "email"));
```

Output:

```typescript
john@gmail.com
```

---

## Common Follow-up Questions

### What is `keyof`?

A TypeScript operator that returns all keys of a type as a union.

### What does `keyof User` return?

```typescript
"id" | "name" | "age"
```

(Depending on the properties of User.)

### Why do we use `keyof`?

To provide type safety when working with object properties.

### Can `keyof` be used with Interfaces?

```typescript
Yes
```

### Can `keyof` be used with Generics?

```typescript
Yes
```

### What is the main advantage of `keyof`?

It prevents accessing invalid object properties at compile time.


# Question: What is an Index Signature in TypeScript?

## 20-Second Interview Answer

> An Index Signature in TypeScript allows you to define objects with dynamic keys while specifying the type of their values. It is useful when the property names are not known in advance but the value types are known.

---

## What is an Index Signature?

An Index Signature allows an object to have dynamic property names while enforcing a specific type for the values.

Syntax:

```typescript
{
  [key: string]: string;
}
```

Meaning:

- Key can be any string.
- Value must be a string.

---

## Why Use Index Signature?

- Dynamic Object Keys
- Flexible Object Structures
- Type Safety
- Useful for Dictionaries and Maps
- Useful for API Response Data

---

## Basic Example

```typescript
interface User {
  [key: string]: string;
}
```

---

## Usage

```typescript
const user: User = {
  name: "John",
  city: "Bhubaneswar",
  country: "India"
};
```

Valid because all values are strings.

---

## Invalid Example

```typescript
const user: User = {
  name: "John",
  age: 25
};
```

Output:

```typescript
Error
```

Because:

```typescript
age
```

contains a number but the index signature expects a string.

---

## String Key with Number Value

```typescript
interface Scores {
  [key: string]: number;
}
```

---

### Usage

```typescript
const marks: Scores = {
  math: 90,
  english: 85,
  science: 95
};
```

---

## Flexible Object Shapes

Index signatures are commonly used when object keys are unknown.

```typescript
interface Settings {
  [key: string]: string;
}
```

---

### Usage

```typescript
const settings: Settings = {
  theme: "dark",
  language: "english",
  currency: "INR"
};
```

New properties can be added without modifying the interface.

---

## Number Index Signature

```typescript
interface StringArray {
  [index: number]: string;
}
```

---

### Usage

```typescript
const users: StringArray = [
  "John",
  "David",
  "Alex"
];
```

---

## Mixing Fixed and Dynamic Properties

```typescript
interface Employee {
  id: number;
  [key: string]: string | number;
}
```

---

### Usage

```typescript
const emp: Employee = {
  id: 101,
  name: "John",
  city: "Bhubaneswar"
};
```

---

## Readonly Index Signature

Use `readonly` when values should not be modified.

```typescript
interface User {
  readonly [key: string]: string;
}
```

---

### Usage

```typescript
const user: User = {
  name: "John",
  city: "Bhubaneswar"
};
```

Valid.

---

### Invalid Update

```typescript
user.name = "David";
```

Output:

```typescript
Error
```

Because the index signature is readonly.

---

## Readonly Number Index Signature

```typescript
interface ReadonlyArray {
  readonly [index: number]: string;
}
```

---

### Usage

```typescript
const users: ReadonlyArray = [
  "John",
  "David"
];
```

---

### Invalid Update

```typescript
users[0] = "Alex";
```

Output:

```typescript
Error
```

---

## Real World Example

```typescript
interface ApiResponse {
  [key: string]: string;
}

const response: ApiResponse = {
  status: "success",
  message: "Data Loaded",
  token: "abc123"
};
```

---

## Common Follow-up Questions

### What is an Index Signature?

A way to define objects with dynamic keys and fixed value types.

### Why do we use Index Signatures?

To handle objects whose property names are not known beforehand.

### What is the syntax of an Index Signature?

```typescript
[key: string]: string;
```

### Can Index Signatures use Number Keys?

```typescript
Yes
```

Example:

```typescript
[index: number]: string;
```

### What is a Readonly Index Signature?

An index signature whose values cannot be modified after creation.

### Where are Index Signatures commonly used?

- API Responses
- Dictionaries
- Configuration Objects
- Dynamic Data Structures


# Question: What are Utility Types in TypeScript?

## 20-Second Interview Answer

> Utility Types are built-in TypeScript types that help transform or manipulate existing types in a convenient way. They reduce code duplication and improve type safety. Common utility types are `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Extract`, `NonNullable`, and `Record`.

---

## What are Utility Types?

Utility Types are predefined TypeScript types used to create new types from existing types.

Benefits:

- Less Code
- Better Reusability
- Better Type Safety
- Easy Type Transformations

---

# 1. Partial<T>

Makes all properties optional.

### Example

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
```

Equivalent to:

```typescript
{
  id?: number;
  name?: string;
  email?: string;
}
```

---

### Usage

```typescript
const user: Partial<User> = {
  name: "John"
};
```

Valid because all properties are optional.

---

# 2. Required<T>

Makes all properties required.

### Example

```typescript
interface User {
  id?: number;
  name?: string;
}

type RequiredUser = Required<User>;
```

Equivalent to:

```typescript
{
  id: number;
  name: string;
}
```

---

### Usage

```typescript
const user: Required<User> = {
  id: 1,
  name: "John"
};
```

---

# 3. Readonly<T>

Makes all properties readonly.

### Example

```typescript
interface User {
  id: number;
  name: string;
}

type ReadonlyUser = Readonly<User>;
```

---

### Usage

```typescript
const user: Readonly<User> = {
  id: 1,
  name: "John"
};
```

---

### Invalid Update

```typescript
user.name = "David";
```

Output:

```typescript
Error
```

---

# 4. Pick<T, K>

Selects specific properties from a type.

### Example

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserInfo = Pick<User, "id" | "name">;
```

Result:

```typescript
{
  id: number;
  name: string;
}
```

---

### Usage

```typescript
const user: UserInfo = {
  id: 1,
  name: "John"
};
```

---

# 5. Omit<T, K>

Removes specific properties from a type.

### Example

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type UserInfo = Omit<User, "email">;
```

Result:

```typescript
{
  id: number;
  name: string;
}
```

---

### Usage

```typescript
const user: UserInfo = {
  id: 1,
  name: "John"
};
```

---

# 6. Extract<T, U>

Extracts matching types from a union.

### Example

```typescript
type Data =
  string | number | boolean;

type Result =
  Extract<Data, string | number>;
```

Result:

```typescript
string | number
```

---

# 7. NonNullable<T>

Removes:

```typescript
null
undefined
```

from a type.

### Example

```typescript
type Data =
  string | null | undefined;

type Result =
  NonNullable<Data>;
```

Result:

```typescript
string
```

---

# 8. Record<K, T>

Creates an object type with specific keys and value types.

### Example

```typescript
type User = Record<string, string>;
```

Equivalent to:

```typescript
{
  [key: string]: string;
}
```

---

### Usage

```typescript
const user: User = {
  name: "John",
  city: "Bhubaneswar"
};
```

---

## Real World Example

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductUpdate =
  Partial<Product>;

const product: ProductUpdate = {
  price: 50000
};
```

Useful for update APIs where not all fields are required.

---

## Utility Types Summary

| Utility Type | Purpose |
|--------------|---------|
| Partial | Makes all properties optional |
| Required | Makes all properties required |
| Readonly | Makes all properties readonly |
| Pick | Select specific properties |
| Omit | Remove specific properties |
| Extract | Extract matching union types |
| NonNullable | Remove null and undefined |
| Record | Create object type with keys and values |

---

## Common Follow-up Questions

### What are Utility Types?

Built-in TypeScript types used to transform existing types.

### Which Utility Type makes all properties optional?

```typescript
Partial
```

### Which Utility Type makes all properties required?

```typescript
Required
```

### Which Utility Type makes properties readonly?

```typescript
Readonly
```

### What is the difference between Pick and Omit?

`Pick` selects properties, while `Omit` removes properties.

### What does NonNullable do?

Removes:

```typescript
null
undefined
```

from a type.

### What is Record used for?

To create object types with predefined key and value types.

# Question: What are Namespaces in TypeScript?

## 20-Second Interview Answer

> A Namespace in TypeScript is a way to organize related code under a single name and avoid naming conflicts. It groups variables, functions, classes, and interfaces together. In modern applications, ES Modules are generally preferred over Namespaces.

---

## What is a Namespace?

A Namespace is used to organize related code inside a single container.

It helps:

- Organize Code
- Avoid Naming Conflicts
- Group Related Functionality
- Improve Maintainability

Syntax:

```typescript
namespace NamespaceName {

}
```

---

## Basic Namespace Example

```typescript
namespace UserModule {
  export const name = "John";

  export function greet() {
    console.log("Hello");
  }
}
```

---

## Using Namespace Members

```typescript
console.log(UserModule.name);

UserModule.greet();
```

Output:

```typescript
John
Hello
```

---

## Why Use export?

Members inside a namespace are private by default.

To access them outside the namespace, use:

```typescript
export
```

---

## Namespace with Class

```typescript
namespace EmployeeModule {
  export class Employee {
    constructor(public name: string) {}

    display() {
      console.log(this.name);
    }
  }
}
```

---

## Usage

```typescript
const emp =
  new EmployeeModule.Employee("John");

emp.display();
```

Output:

```typescript
John
```

---

## Creating Two Namespaces

```typescript
namespace UserModule {
  export function login() {
    console.log("User Login");
  }
}

namespace AdminModule {
  export function login() {
    console.log("Admin Login");
  }
}
```

---

## Usage

```typescript
UserModule.login();
AdminModule.login();
```

Output:

```typescript
User Login
Admin Login
```

No naming conflict occurs because both functions belong to different namespaces.

---

## Namespace with Function

```typescript
namespace MathUtils {
  export function add(
    a: number,
    b: number
  ): number {
    return a + b;
  }
}
```

---

## Usage

```typescript
console.log(
  MathUtils.add(10, 20)
);
```

Output:

```typescript
30
```

---

## Namespace in Separate Files

### math.ts

```typescript
namespace MathUtils {
  export function add(
    a: number,
    b: number
  ): number {
    return a + b;
  }
}
```

---

### app.ts

```typescript
/// <reference path="math.ts" />

console.log(
  MathUtils.add(10, 20)
);
```

---

## Compiling Multiple Namespace Files

```bash
tsc app.ts math.ts --outFile bundle.js
```

This combines multiple namespace files into one JavaScript file.

---

## Importing Namespaces

Namespaces do not use:

```typescript
import
export
```

like modern modules.

Instead, TypeScript traditionally uses:

```typescript
/// <reference path="file.ts" />
```

Example:

```typescript
/// <reference path="math.ts" />
```

---

## Real World Example

```typescript
namespace AppConfig {
  export const API_URL =
    "https://api.example.com";

  export function getApiUrl() {
    return API_URL;
  }
}

console.log(AppConfig.getApiUrl());
```

Output:

```typescript
https://api.example.com
```

---

## Namespace vs Module

| Namespace | Module |
|------------|---------|
| Uses `namespace` keyword | Uses `import/export` |
| Older approach | Modern approach |
| Avoids naming conflicts | Better code organization |
| Used mostly in legacy projects | Used in modern projects |

---

## Common Follow-up Questions

### What is a Namespace?

A way to organize related code under a single name.

### Why do we use Namespaces?

To organize code and avoid naming conflicts.

### Which keyword is used to create a Namespace?

```typescript
namespace
```

### Why do we use `export` inside a Namespace?

To make members accessible outside the namespace.

### How do you access Namespace members?

```typescript
NamespaceName.memberName
```

Example:

```typescript
UserModule.login();
```

### How do you reference a Namespace from another file?

```typescript
/// <reference path="file.ts" />
```

### Which is preferred in modern TypeScript applications?

```typescript
Modules
```

using:

```typescript
import
export
```

instead of Namespaces.



# Question: What are Decorators in TypeScript?

## 20-Second Interview Answer

> Decorators in TypeScript are special functions that can be attached to classes, methods, properties, or parameters to add metadata or modify their behavior. They are commonly used in frameworks such as Angular and NestJS.

---

## What are Decorators?

Decorators are a special kind of declaration that can be attached to:

- Classes
- Methods
- Properties
- Parameters

They are used to add extra functionality without modifying the original code directly.

Decorators use the:

```typescript
@
```

symbol.

---

## Enable Decorators

In `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

---

## Why Use Decorators?

- Add Metadata
- Modify Behavior
- Logging
- Validation
- Dependency Injection
- Authorization

---

## Class Decorator

A Class Decorator is applied to a class.

### Example

```typescript
function Logger(constructor: Function) {
  console.log("Class Created");
}

@Logger
class Employee {
  name: string = "John";
}
```

Output:

```typescript
Class Created
```

---

## Class Decorator with Custom Message

```typescript
function LogClass(constructor: Function) {
  console.log("Employee Class Loaded");
}

@LogClass
class Employee {}
```

Output:

```typescript
Employee Class Loaded
```

---

## Property Decorator

A Property Decorator is applied to class properties.

### Example

```typescript
function LogProperty(
  target: any,
  propertyName: string
) {
  console.log(propertyName);
}

class Employee {
  @LogProperty
  name: string = "John";
}
```

Output:

```typescript
name
```

---

## Method Decorator

A Method Decorator is applied to methods.

### Example

```typescript
function LogMethod(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(methodName);
}

class Employee {
  @LogMethod
  display() {
    console.log("Hello");
  }
}
```

Output:

```typescript
display
```

---

## Override Function with Decorator

Decorators can modify method behavior.

### Example

```typescript
function OverrideMethod(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = function () {
    console.log("Method Overridden");
  };
}

class Employee {
  @OverrideMethod
  display() {
    console.log("Original Method");
  }
}

const emp = new Employee();

emp.display();
```

Output:

```typescript
Method Overridden
```

The original function is replaced by the decorator.

---

## Real World Example

```typescript
function ReadOnly(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = false;
}

class User {
  @ReadOnly
  login() {
    console.log("User Login");
  }
}
```

This prevents the method from being overwritten.

---

## Class and Property Decorator Together

```typescript
function Logger(constructor: Function) {
  console.log("Class Loaded");
}

function LogProperty(
  target: any,
  propertyName: string
) {
  console.log(propertyName);
}

@Logger
class Employee {
  @LogProperty
  name: string = "John";
}
```

Output:

```typescript
name
Class Loaded
```

---

## Types of Decorators

| Decorator | Applied To |
|------------|------------|
| Class Decorator | Class |
| Property Decorator | Property |
| Method Decorator | Method |
| Parameter Decorator | Method Parameter |
| Accessor Decorator | Getter/Setter |

---

## Common Follow-up Questions

### What are Decorators?

Special functions used to add metadata or modify behavior of classes and class members.

### Which symbol is used for Decorators?

```typescript
@
```

### Do Decorators work by default?

```typescript
No
```

Enable them using:

```json
"experimentalDecorators": true
```

### Can Decorators be applied to Properties?

```typescript
Yes
```

### Can Decorators be applied to Methods?

```typescript
Yes
```

### Which frameworks commonly use Decorators?

- Angular
- NestJS

### Can Decorators override methods?

```typescript
Yes
```

Using the method descriptor, decorators can modify or replace method implementations.


# Question: What are Typed Promises in TypeScript?

## 20-Second Interview Answer

> A Promise represents the future result of an asynchronous operation. In TypeScript, we can define the type of data that a Promise resolves with using `Promise<T>`, which provides better type safety and autocomplete support.

---

## What is a Promise?

A Promise is an object that represents the future result of an asynchronous operation.

A Promise can be in one of three states:

- Pending
- Fulfilled
- Rejected

---

## Promise Syntax

```typescript
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});
```

---

## Why Use Typed Promises?

- Type Safety
- Better Autocomplete
- Prevent Type Errors
- Clear Return Types

---

## How to Define Type of a Promise?

Use:

```typescript
Promise<T>
```

where:

```typescript
T
```

represents the type of value returned by the Promise.

---

## Promise with String Type

```typescript
const getData = (): Promise<string> => {
  return new Promise((resolve) => {
    resolve("Hello");
  });
};
```

---

## Usage

```typescript
getData().then((data) => {
  console.log(data);
});
```

Output:

```typescript
Hello
```

---

## Promise with Number Type

```typescript
const getAge = (): Promise<number> => {
  return new Promise((resolve) => {
    resolve(25);
  });
};
```

---

## Usage

```typescript
getAge().then((age) => {
  console.log(age);
});
```

Output:

```typescript
25
```

---

## Promise with Array Type

```typescript
const getUsers = (): Promise<string[]> => {
  return new Promise((resolve) => {
    resolve(["John", "David"]);
  });
};
```

---

## Usage

```typescript
getUsers().then((users) => {
  console.log(users);
});
```

Output:

```typescript
["John", "David"]
```

---

## Custom Type in Promise

### Create a Type

```typescript
type User = {
  id: number;
  name: string;
};
```

---

### Use in Promise

```typescript
const getUser = (): Promise<User> => {
  return new Promise((resolve) => {
    resolve({
      id: 1,
      name: "John"
    });
  });
};
```

---

## Usage

```typescript
getUser().then((user) => {
  console.log(user.name);
});
```

Output:

```typescript
John
```

---

## Custom Interface in Promise

```typescript
interface Employee {
  id: number;
  name: string;
  salary: number;
}
```

---

### Promise Example

```typescript
const getEmployee = (): Promise<Employee> => {
  return new Promise((resolve) => {
    resolve({
      id: 101,
      name: "John",
      salary: 50000
    });
  });
};
```

---

## Promise with Multiple Objects

```typescript
interface User {
  id: number;
  name: string;
}
```

---

```typescript
const getUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    resolve([
      { id: 1, name: "John" },
      { id: 2, name: "David" }
    ]);
  });
};
```

---

## Typed Promise with Async/Await

```typescript
type User = {
  id: number;
  name: string;
};

async function getUser(): Promise<User> {
  return {
    id: 1,
    name: "John"
  };
}
```

---

## Usage

```typescript
async function loadUser() {
  const user = await getUser();

  console.log(user.name);
}
```

Output:

```typescript
John
```

---

## Real World API Example

```typescript
interface Product {
  id: number;
  title: string;
  price: number;
}

async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();

  return data.products;
}
```

---

## Common Follow-up Questions

### What is a Promise?

A Promise represents the future result of an asynchronous operation.

### What are the three Promise states?

- Pending
- Fulfilled
- Rejected

### How do you define a typed Promise?

```typescript
Promise<T>
```

### What does `Promise<string>` mean?

The Promise will resolve with a string value.

### Can we use Custom Types in Promises?

```typescript
Yes
```

### Can we use Interfaces in Promises?

```typescript
Yes
```

### Can Async Functions Return Typed Promises?

```typescript
Yes
```

Example:

```typescript
async function getUser(): Promise<User> {}
```


# Question: How to Make an API Call in TypeScript?

## 20-Second Interview Answer

> In TypeScript, API calls are typically made using the Fetch API or Axios. We define interfaces or types for the API response and apply those types to ensure type safety when working with the returned data.

---

## Why Define Types for API Responses?

Benefits:

- Type Safety
- Better Autocomplete
- Prevent Runtime Errors
- Easier Maintenance

---

## Step 1: Define Type for API Response

```typescript
interface Product {
  id: number;
  title: string;
  price: number;
}
```

---

## Step 2: API Call Using Fetch

```typescript
async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();

  return data.products;
}
```

---

## Step 3: Use API Data

```typescript
async function loadProducts() {
  const products = await getProducts();

  console.log(products);
}

loadProducts();
```

---

## Complete Example

```typescript
interface Product {
  id: number;
  title: string;
  price: number;
}

async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();

  return data.products;
}

async function loadProducts() {
  const products = await getProducts();

  products.forEach((product) => {
    console.log(product.title);
  });
}

loadProducts();
```

---

## API Response Type

Suppose API returns:

```json
{
  "products": [
    {
      "id": 1,
      "title": "iPhone",
      "price": 999
    }
  ]
}
```

Define:

```typescript
interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductResponse {
  products: Product[];
}
```

---

## Apply Response Type

```typescript
async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data: ProductResponse =
    await response.json();

  return data.products;
}
```

---

## Single Object API Example

```typescript
interface User {
  id: number;
  firstName: string;
  email: string;
}
```

---

```typescript
async function getUser(): Promise<User> {
  const response = await fetch(
    "https://dummyjson.com/users/1"
  );

  const user: User =
    await response.json();

  return user;
}
```

---

## Usage

```typescript
async function loadUser() {
  const user = await getUser();

  console.log(user.firstName);
}

loadUser();
```

---

## Error Handling

```typescript
async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      "https://dummyjson.com/products"
    );

    const data: ProductResponse =
      await response.json();

    return data.products;
  } catch (error) {
    console.log(error);
    return [];
  }
}
```

---

## Real World Example

```typescript
interface Employee {
  id: number;
  name: string;
  salary: number;
}

async function getEmployees(): Promise<Employee[]> {
  const response = await fetch("/api/employees");

  const data: Employee[] =
    await response.json();

  return data;
}
```

---

## Common Follow-up Questions

### Why do we define types for API responses?

To provide type safety and better code reliability.

### Which keyword is used for asynchronous API calls?

```typescript
async
await
```

### What type is returned from an async function?

```typescript
Promise
```

### How do you type an API response?

Using:

```typescript
interface
```

or

```typescript
type
```

### What is the return type of an API that returns multiple products?

```typescript
Promise<Product[]>
```

### What is the return type of an API that returns a single user?

```typescript
Promise<User>
```




# Question: What are Some TypeScript Best Practices?

## 20-Second Interview Answer

> TypeScript best practices help improve code quality, readability, maintainability, and type safety. One important practice is using primitive types such as `number`, `string`, and `boolean` instead of wrapper object types like `Number`, `String`, and `Boolean`.

---

## Use Primitive Types Instead of Wrapper Types

### Avoid

```typescript
Number
String
Boolean
Object
```

These are JavaScript wrapper object types.

---

### Use

```typescript
number
string
boolean
object
```

These are TypeScript primitive types and are recommended.

---

## Example

### Avoid

```typescript
let age: Number = 25;
let name: String = "John";
let isActive: Boolean = true;
```

---

### Recommended

```typescript
let age: number = 25;
let name: string = "John";
let isActive: boolean = true;
```

---

## Why Avoid Wrapper Types?

- Can cause unexpected behavior.
- Less type-safe.
- Creates object wrappers.
- Not recommended by TypeScript.

---

## Example

```typescript
let value: String = new String("Hello");

console.log(typeof value);
```

Output:

```typescript
object
```

---

```typescript
let value: string = "Hello";

console.log(typeof value);
```

Output:

```typescript
string
```

---

## Object Type Example

### Avoid

```typescript
let user: Object = {
  name: "John"
};
```

---

### Recommended

```typescript
let user: object = {
  name: "John"
};
```

Or better:

```typescript
interface User {
  name: string;
}

const user: User = {
  name: "John"
};
```

---

## Additional Best Practices

### Use Interface or Type for Objects

```typescript
interface User {
  id: number;
  name: string;
}
```

---

### Avoid Using `any`

### Avoid

```typescript
let data: any = "Hello";
```

---

### Prefer

```typescript
let data: string = "Hello";
```

or

```typescript
let data: unknown = "Hello";
```

---

### Use Type Inference When Obvious

```typescript
const name = "John";
```

Instead of:

```typescript
const name: string = "John";
```

---

### Use Readonly When Data Should Not Change

```typescript
interface User {
  readonly id: number;
}
```

---

### Prefer Enum or Union Types for Fixed Values

```typescript
type Status =
  "pending" |
  "success" |
  "failed";
```

---

## Common Follow-up Questions

### Which types should be avoided in TypeScript?

```typescript
Number
String
Boolean
Object
```

### Which types should be used instead?

```typescript
number
string
boolean
object
```

### Why are primitive types preferred?

They are more type-safe, lightweight, and recommended by TypeScript.

### What should be used instead of `any` whenever possible?

```typescript
Specific Types
```

or

```typescript
unknown
```

### What is a good practice for object typing?

Use:

```typescript
interface
```

or

```typescript
type
```

instead of generic `object`.