# DSA + React Machine Coding Questions

# JavaScript / DSA Questions

## Arrays

### Easy
- Find largest number in array
- Find smallest number in array
- Find second largest number
- Find second smallest number
- Sum of array elements
- Remove duplicates
- Find duplicate elements
- Move all zeros to end
- Reverse an array
- Rotate array by K positions

### Medium
- Two Sum
- Three Sum
- Merge two sorted arrays
- Find missing number
- Find intersection of two arrays
- Find union of two arrays
- Product of array except self
- Kadane's Algorithm (Maximum Subarray Sum)
- Longest Consecutive Sequence

---

## Strings

### Easy
- Reverse a string
- Check palindrome
- Count vowels
- Count frequency of characters
- Find first non-repeating character
- Find duplicate characters

### Medium
- Longest substring without repeating characters
- Group anagrams
- String compression
- Valid parentheses
- Longest palindrome substring

---

## Objects

- Count frequency of array elements
- Group users by role
- Convert array to object
- Deep clone object
- Flatten nested object

---

## Recursion

- Factorial
- Fibonacci
- Reverse string recursively
- Flatten nested array

---

## Searching

- Linear Search
- Binary Search
- Search in sorted array

---

## Sorting

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort (Basic Understanding)
- Quick Sort (Basic Understanding)

---

## Closures

- Counter function
- Private variable example
- Memoization example

---

## Promises

- Promise chaining
- Promise.all
- Promise.race
- Async Await examples

---

## Frequently Asked JavaScript Coding Questions

### 1. Debounce

```js
function debounce(fn, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

### 2. Throttle

```js
function throttle(fn, delay) {
  let lastCall = 0;

  return (...args) => {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
```

### 3. Flatten Array

```js
const flatten = arr =>
  arr.reduce(
    (acc, item) =>
      acc.concat(Array.isArray(item) ? flatten(item) : item),
    []
  );
```

### 4. Remove Duplicates

```js
const unique = arr => [...new Set(arr)];
```

### 5. Frequency Counter

```js
function frequency(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}
```

---

# React Machine Coding Questions

## Beginner

### Counter App
Requirements:
- Increment
- Decrement
- Reset

Concepts:
- useState

---

### Todo App

Requirements:
- Add task
- Delete task
- Mark completed
- Filter tasks

Concepts:
- useState
- Array methods

---

### Accordion

Requirements:
- Expand / Collapse
- Single open item

Concepts:
- Conditional Rendering

---

### Tabs Component

Requirements:
- Switch tabs
- Dynamic content

Concepts:
- State Management

---

# Intermediate

### Search with Debounce

Requirements:
- Search input
- Debounced API call
- Loading state

Concepts:
- useEffect
- Debouncing

---

### Pagination

Requirements:
- API Integration
- Previous / Next
- Page Numbers

Concepts:
- useEffect
- API Calls

---

### Infinite Scroll

Requirements:
- Load more on scroll
- API Integration

Concepts:
- Scroll Events

---

### Product Listing Page

Requirements:
- Fetch products
- Search
- Filter
- Sort
- Pagination

Concepts:
- API Integration
- State Management

---

### Product Details Page

Requirements:
- Dynamic Routing
- Fetch by ID

Concepts:
- React Router

---

### Multi Step Form

Requirements:
- Next
- Previous
- Validation

Concepts:
- Form Handling

---

# Advanced Machine Coding

### Kanban Board

Requirements:
- Drag & Drop
- Multiple Columns

Concepts:
- State Updates
- Drag and Drop

---

### Dashboard

Requirements:
- Charts
- Filters
- API Integration

Concepts:
- Chart.js
- Performance

---

### Role Based Authentication

Requirements:
- Login
- Protected Routes
- Role Based Access

Concepts:
- Authentication
- Routing

---

### Reusable Modal

Requirements:
- Open / Close
- Dynamic Content

Concepts:
- Portals
- Reusability

---

### Reusable Table

Requirements:
- Sorting
- Search
- Pagination

Concepts:
- Generic Components

---

# Custom Hooks

### useDebounce

### useFetch

### useLocalStorage

### usePagination

### usePrevious

### useToggle

---

# React Interview Coding Questions

- Build Counter
- Build Todo App
- Build Search Bar with Debounce
- Build Accordion
- Build Tabs
- Build Modal
- Build Pagination
- Build Infinite Scroll
- Build Product Listing
- Build Login Form
- Build Multi-Step Form
- Build Reusable Table
- Build Drag & Drop Board
- Build Theme Toggle
- Build OTP Input
- Build File Upload Component

---

# Most Important Questions For 3+ Years React Developers

## JavaScript

1. Debounce
2. Throttle
3. Closure
4. Event Loop
5. Promise
6. Async/Await
7. Flatten Array
8. Frequency Counter
9. First Non-Repeating Character
10. Remove Duplicates

## React

1. Todo App
2. Search with Debounce
3. Pagination
4. Product Listing
5. Custom Hook
6. Modal
7. Reusable Table
8. Infinite Scroll
9. Protected Routes
10. Multi-Step Form

Focus on these first. They cover the majority of React coding rounds for 3–5 years experience.