# React.js Interview Preparation Questions

## Project and Practical React Questions

1.  **Current Project**
    - Which project are you currently working on?
    - Explain the project, the parts you worked on, and the work you
      are most proud of.
    - Be prepared for follow-up questions.
2.  **Vabro Project Structure**
    - Explain the project structure and directory organization of your
      Vabro application.
3.  **API Calls, Loading States, and Error Handling**
    - If the same API needs to be called from 10 different places, how
      would you manage it?
    - If each API call takes around 3 seconds, how would you manage
      loading states and errors?
    - Would you write loading and error handling separately in all 10
      files?
    - What would the API-related file structure look like, and how
      would components call these APIs?
4.  **Virtual DOM**
    - What does the virtual representation of the DOM mean?
5.  **React State Updates and Batching**
    - What happens if you call `setCount` twice?
    - How does batching work with `count + 1`?
    - How is that different from using a functional update such as
      `prevCount => prevCount + 1`?
6.  **Minimum and Maximum in an Array**
    - Find the minimum and maximum elements in an array.
7.  **Second Minimum and Second Maximum**
    - Find the second-smallest and second-largest elements in an
      array.
8.  **Recommendation / Best Practice**
    - Is it recommended? _(The original question is incomplete;
      clarify the topic.)_
9.  **Custom API Hook**
    - Create a custom hook for making an API call.
10. **Async/Await in `useEffect`**
    - Should you use `async/await` directly inside `useEffect`?
      Explain why or why not.
11. **Testing a React Application**
    - How do you test your React application after development?
    - How do you ensure that the application behaves correctly?
12. **Virtualization / Windowing**
    - How do you use React virtualization or windowing?
13. **API Versioning**
    - How would you migrate from API version 1 to API version 2?
14. **Running a Production Build Locally**
    - After creating the `dist` folder, how do you run and test the
      production build locally?
15. **Using a Local API**
    - How do you test your React application against an API running
      locally on your machine?
16. **GitLab Workflow**
    - How do you use GitLab in your development workflow?
17. **Task Estimation**
    - How do you estimate a task?
    - How do you review or assess an estimate provided by another
      developer?
18. **Handling Missed Estimates**
    - What do you do if a task is not completed within the estimated
      time?
19. **Upgrading the Current Application**
    - How would you upgrade the current application? _(The original
      question is incomplete; clarify what needs to be upgraded.)_

---

## Questions Asked by Coding Ninjas

1.  **Axios Request Headers and Interceptors**
    - How do you fetch data using Axios and dynamically change request
      headers for a particular request?
    - Would you use an Axios interceptor, or pass headers through the
      request configuration? Explain when to use each approach.
2.  **Lifecycle in Functional Components**
    - Explain component lifecycle concepts and how to handle them in
      functional components.
3.  **Preventing Lifecycle-Related Issues**
    - How do you prevent lifecycle-related issues in React?
4.  **Preventing Unnecessary Re-renders**
    - How do you prevent unnecessary re-renders in React?
5.  **Refs and `forwardRef`**
    - What is a ref?
    - What is `forwardRef`, and when would you use it?
6.  **`useImperativeHandle`**
    - What is `useImperativeHandle`, and what problem does it solve?
7.  **Batching in React 19**
    - What is batching in React 19?
8.  **React Fiber**
    - What is React Fiber?
9.  **Server-Side Rendering (SSR)**
    - What is SSR, and why would you use it?
10. **Error Boundaries**
    - What are Error Boundaries, and how do they work in React?

## Questions Asked in a company:

1. How you improve the performance
2. How you reduce latency by 30℅
3. What need t0 return for clenup function inside useEffect

# Interview Questions (Original List Only)

## Project and General React Questions

0.  Which project are you currently working on? Explain which part you
    worked on and what you are proud of. Explain properly and be ready
    for cross-questions.

1.  Explain the project structure and directory of your VABRO
    application.

2.  You have to call one API from 10 different places. How would you
    manage that? Each API takes 3 seconds to load. How would you manage
    loading states and error cases? Would you write all the loading
    states and error handling in each of the 10 files?

3.  What does the virtual representation mean in Virtual DOM?

4.  What happens when we call `setCount` two times? How does batching
    happen with `count + 1`, and how is it different from `prev + 1`?

5.  Find the minimum and maximum elements from an array.

6.  Find the second minimum and second maximum elements from an array.

7.  Is it recommended?

8.  Create a custom hook for an API call.

9.  Should we use `async/await` inside `useEffect`?

## Asked at Capgemini

1.  Find the first non-repeating character.
2.  Group by city.
3.  Give an example of debounce search.
4.  Save login form state in `localStorage` using a custom hook.
5.  Create a folder structure.
6.  Controlled and uncontrolled components.
7.  `useRef` and `useState`.
8.  Using `useRef`, can we show the input field value in a `div`?
9.  Progressive Web Application (PWA).
10. Why do we need external state management?
11. How many routes have you used in your application?
12. How many REST APIs have you consumed?
13. How do you plan estimates? Do you estimate, or does someone else
    estimate?
14. Are you involved in code review? Which parameters do you consider
    while reviewing code? If you find an issue, what do you do?
15. How many frontend developers are working in your team?
16. What are security vulnerabilities when working with frontend code?

## Other Interview Questions

1.  How do you test your React application after development? How do you
    ensure that everything is correct?
2.  How do you use React Virtualized or windowing?
3.  How do you change API version 1 to version 2?
4.  How do you run a production build locally after the `dist` directory
    is created?
5.  How do you check your React app against a local API that runs on
    your system?
6.  How do you use GitLab?
7.  How do you estimate a task? Or does someone else estimate it?
8.  If a task is not finished within the estimated time, what will you
    do?
9.  How do you upgrade the current ...?

## Asked by Coding Ninjas

1.  Fetch an API using Axios. You need to change the header dynamically
    for a request only. What type of function would you use in Axios to
    modify the request header? (Interceptors)
2.  Lifecycle: how do you use lifecycle concepts in a functional
    component?
3.  How do you prevent lifecycle-related issues in React?
4.  How do you prevent unnecessary re-renders?
5.  Reference (`ref`) and `forwardRef`.
6.  What is `useImperativeHandle`?
7.  What is batching in React 19?
8.  What is React Fiber?
9.  SSR.
10. Error Boundary.

## Suggestions for Current Project Preparation

Prepare thoroughly for questions about your current project, such as the
technologies used and its structure.

- Developing internal web dashboards for engineering/production data.
- Building UI screens for machine or equipment monitoring systems.
- Creating forms for production, inventory, maintenance, or quality
  data.
- Developing frontend pages for ERP/internal business applications.
- Displaying machine/production data using tables, charts, and graphs.
- Implementing responsive web interfaces for internal users.
- Connecting frontend screens to REST APIs and displaying backend
  data.
- Fixing UI bugs and improving usability.
- Implementing validation for engineering/production-related forms.
- Working with backend developers to integrate frontend and APIs.
- Maintaining existing HTML/CSS/JavaScript applications.
- Creating reports or dashboards for manufacturing/engineering
  operations.
