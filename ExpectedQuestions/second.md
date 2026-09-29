# Expected Questions in L2 (Technical Round)

L2 is usually deeper than L1. Interviewers try to verify whether you can independently build and maintain production applications.

---

# 1. Deep Dive into Current Project (VABRO)

## Architecture

- Explain the complete frontend architecture of VABRO.
- How is the application structured?
- How do modules communicate with each other?
- Why did you choose Redux Toolkit?
- How is authentication handled?
- How is authorization (RBAC) implemented?
- How are APIs organized?

## Real Work Questions

- Which feature did you build from scratch?
- Which feature was the most complex?
- Tell me about a production issue you solved.
- Tell me about a bug that reached production.
- What technical debt exists in the project?
- What would you redesign if rebuilding today?

---

# 2. Advanced React

## Rendering

- What triggers a React re-render?
- Parent re-render vs child re-render.
- How does React reconciliation work?
- How does Virtual DOM work internally?

## Hooks

- Explain useMemo internally.
- Explain useCallback internally.
- When should useMemo NOT be used?
- What problems can overusing useMemo create?
- Explain stale closures.
- Explain dependency arrays.

## Performance

- How would you optimize a slow React application?
- How would you find unnecessary re-renders?
- How would you optimize a large table with 10,000 rows?
- How would you optimize dashboard charts?

---

# 3. Redux Toolkit

- Explain Redux flow.
- How does createAsyncThunk work?
- What happens internally when dispatch is called?
- Redux vs Context API.
- How do you normalize data?
- How do you handle API caching?
- How do you avoid unnecessary Redux state updates?

---

# 4. API Design & Integration

- How do you handle API failures?
- How do you retry failed requests?
- How do you cancel API requests?
- How do you avoid race conditions?
- How do you handle pagination?
- How do you handle large datasets?

---

# 5. System Design (Frontend)

## Dashboard Design

- Design a Project Management Dashboard.
- Design a Reporting Dashboard.
- Design a Notification System.

## Discussion Topics

- Component structure.
- State management.
- API communication.
- Performance optimization.
- Caching strategy.
- Security considerations.

---

# 6. JavaScript Advanced

## Closures

- What is a closure?
- Give a practical example.

## Event Loop

- Explain Call Stack.
- Explain Microtask Queue.
- Explain Macrotask Queue.

## Memory

- What causes memory leaks?
- How do you prevent memory leaks in React?

## Execution

- Explain this output.
- Explain hoisting internally.
- Explain execution context.

---

# 7. TypeScript

- Interfaces vs Types.
- Generics.
- Utility Types.
- Partial.
- Pick.
- Omit.
- Record.
- keyof.
- Type Guards.

---

# 8. Security

- XSS attacks.
- CSRF attacks.
- JWT security.
- Secure token storage.
- Protected routes.
- Role-based access control.

---

# 9. Database & Backend Awareness

- MongoDB vs PostgreSQL.
- SQL vs NoSQL.
- REST API best practices.
- HTTP status codes.
- API versioning.

---

# 10. Leadership & Ownership

- How do you estimate tasks?
- How do you participate in sprint planning?
- How do you review code?
- How do you mentor junior developers?
- How do you handle disagreements in code reviews?

---

# Common Coding Questions in L2

## JavaScript

- Implement debounce.
- Implement throttle.
- Deep clone object.
- Flatten nested array.
- Group array by property.

## React

- Build search with debounce.
- Build pagination.
- Build reusable modal.
- Build custom hook.
- Build role-based route protection.

---

# Questions You Are Very Likely To Get

1. Explain VABRO architecture.
2. Why Redux Toolkit?
3. Tell me about a production bug you fixed.
4. How did you optimize performance?
5. Explain useMemo vs useCallback.
6. Explain debouncing with a real example.
7. How did you implement authentication?
8. What would you improve if rebuilding VABRO?
9. How do you estimate tasks in sprint planning?
10. Why should we trust that you actually worked on this project?