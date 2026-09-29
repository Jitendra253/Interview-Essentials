 
# Q1. Walk us through the architecture of a React application you built or worked on heavily. How did you organise components, state, and data flow? What would you do differently if you started it today?

### Answer

I worked mostly on React.js in VABRO, which is a project management and collaboration platform.

We organized the application feature-wise, like Project Management, Sprint, Workspace, OKR, Dashboard, and Reporting. Each module had its own components, pages, services and Redux logic, so it was easy to maintain.

For state management we used Redux Toolkit for shared data like user details, workspace information, permissions and project data. Local UI state was managed using React hooks like `useState` and `useEffect`.

Data flow was mostly API → Redux Store → Components. Components dispatch actions, API data gets stored in Redux, and UI updates automatically from the store.

If I start it today, I would use TanStack Query for server state and caching instead of keeping too much API data in Redux. It can reduce boilerplate and improve performance in many screens. Also I would make some common components more reusable from beginning because later we had to refactor few of them.

---

# Q2. Describe the most complex UI feature you built — for example a dynamic form, real-time dashboard, or large data grid. What made it hard and how did you build it?

### Answer

One of the most complex features I worked on in VABRO was the Dashboard and Reporting module.

The dashboard was showing data from multiple APIs like project progress, sprint status, task distribution, team workload and OKRs. We were using Chart.js and ECharts for different visualizations.

The challenging part was handling multiple async API calls and keeping all widgets updated correctly when users changed filters like workspace, project, sprint or date range. If one filter changed, many charts and tables had to refresh together.

To build it, we used Redux Toolkit for shared state and React hooks for component-level state. We also added loading states, error handling and memoization using `useMemo` to avoid unnecessary re-renders because some charts had large amount of data.

One issue we faced was performance when too many charts were rendering together. We optimized it by lazy loading some components and reducing unnecessary API calls. After that dashboard felt much more smooth for users.

---

# Q3. Tell us about a tricky asynchronous or reactive flow you handled. What was the problem, how did you structure it, and how did you avoid leaks or stale data?

### Answer

In VABRO, one tricky async flow was in the Project and Sprint management module where data was changing based on selected workspace, project and sprint.

When user changed a workspace, we needed to fetch projects, then sprint data, then related tasks. If not handled properly, old API responses could come later and overwrite the latest data.

We structured it using React hooks, Redux Toolkit and async thunks. We kept dependencies properly in `useEffect` and triggered API calls only when required values changed.

To avoid stale data, we cleared previous state when switching workspaces and always updated the store with the latest response. We also added cleanup logic in some components to prevent state updates after component unmount.

One bug we faced was users quickly switching between projects and seeing old data for a moment. We fixed it by showing loading states and resetting previous data before making the next request. After that the UI was much more consistent and users were not seeing outdated information.

---

# Q4. Describe a front-end performance or memory problem you solved. How did you find it, what did you change, and what was the result?

### Answer

In VABRO Dashboard, we had a performance issue where some pages were becoming slow when users opened dashboards with multiple charts and reports.

After checking with React DevTools Profiler, we found that many components were re-rendering even when their data had not changed. Some expensive chart calculations were also running on every render.

To fix it, we used `useMemo` for chart data transformations, `React.memo` for reusable components, and optimized Redux selectors so components only subscribed to the data they actually needed.

We also lazy loaded a few heavy dashboard widgets because users were not viewing everything at once.

The main issue was that the UI was doing extra work by recalculating chart data and re-rendering child components unnecessarily. After the optimization, page load felt much faster and dashboard interactions became more smooth, specially on screens with large amount of data.

---

# Q5. How did you manage state in a large front-end you worked on? Why did you choose that approach over the alternatives?

### Answer

In VABRO, we used a combination of Redux Toolkit and React local state.

For global data like user information, workspace details, permissions, project data and sprint data, we used Redux Toolkit because many components across the application needed access to the same data.

For UI-specific state like modal visibility, form inputs, dropdowns and table filters, we used `useState` because keeping everything in Redux would make the code more complex.

We chose Redux Toolkit because the application had many modules and shared data between different screens. It also provided a predictable data flow and made debugging easier using Redux DevTools.

We considered Context API, but for a large application with frequent updates and many shared states, Redux Toolkit was more scalable and easier to maintain. Looking back, for server data I would probably use TanStack Query along with Redux because it handles caching and refetching better with less code.

---

# Q6. Describe how testing worked on a front-end project you owned — what you tested, what you deliberately did not, and a bug your tests caught or missed.

### Answer

In VABRO, we mainly focused on testing critical user flows like authentication, role-based access, forms, API integrations, dashboard filters and project management workflows.

For unit testing, we tested utility functions and some important React components. We also did a lot of manual testing before releases because many modules were connected and changes in one place could affect another module.

We did not spend much time writing tests for simple UI components like buttons, icons or static layouts because those were less likely to break and we wanted to focus on business-critical features.

One bug that testing caught was in a project creation form where validation was allowing users to submit incomplete data under certain conditions. The test helped us identify the issue before release.

A bug that we missed was related to dashboard filters. Individually the filters were working fine, but when users changed filters very quickly, old API data was sometimes displayed. We found it during UAT and fixed it by improving the API request handling and state reset logic.

---

# Q7. Tell us about a challenging layout, responsive, or cross-browser problem and how you solved it.

### Answer

In VABRO, one challenging issue was in the Kanban Board and Dashboard modules. The layout was working fine on desktop, but on smaller laptops and tablets some cards, charts and filters were overlapping or causing horizontal scrolling.

The challenge was that these screens had a lot of dynamic content, and different users could have different amounts of data. Because of that, the layout was not always behaving the same way across screen sizes.

To solve it, we used CSS Grid and Flexbox with proper responsive breakpoints. We removed some fixed widths and made the components more flexible. For tables and Kanban columns, we added proper overflow handling so content could scroll when needed instead of breaking the layout.

We tested across Chrome, Edge and different screen resolutions. One issue we found was that some charts were not resizing properly when the screen size changed. We fixed it by updating the chart configuration and handling resize events correctly.

After these changes, the UI became much more stable and responsive, and users could use the application comfortably on different screen sizes without layout issues.

---

# Q8. If you have used both Angular and React, what do you find genuinely different about building in each? If you have only used one, how would you go about picking up the other?

### Answer

I have mainly worked with React.js and have not used Angular in a production project.

From what I know, the biggest difference is not syntax but how the frameworks are structured. React gives more flexibility and lets developers choose libraries for routing, state management and other features. Angular is more opinionated and provides many things out of the box like routing, dependency injection and form handling.

If I had to pick up Angular, I would start with components, services, routing, forms and dependency injection because those seem to be the core concepts. Since I already understand frontend architecture, state management and API integration, I think adapting would be easier.

The hardest part for me would probably be understanding RxJS and reactive programming patterns because React mostly uses hooks and component-based state management. But I am comfortable learning new technologies, so I would approach it by building a small project and then gradually working on more complex features.

---

# Q9. Describe the most significant front-end you built end to end. What was your specific role, what was the stack, and what were the hardest parts?

### Answer

The most significant frontend application I worked on was VABRO, a SaaS project management and collaboration platform used for managing projects, sprints, tasks, OKRs and team collaboration.

My role was as a Frontend Developer, and I was responsible for building and maintaining multiple modules including Project Management, Sprint Planning, Kanban Board, Dashboard, Reporting and OKR Management. I worked closely with backend developers and QA teams to deliver new features and enhancements.

The stack included React.js, TypeScript, Redux Toolkit, React Router, Bootstrap, Chart.js, ECharts and REST API integration.

One of the hardest parts was managing complex state across different modules because data was shared between projects, workspaces, sprints and dashboards. Another challenge was building dashboard screens with multiple charts and reports while keeping the UI responsive and performant.

I was involved from requirement understanding, UI development and API integration to bug fixing and production support. It gave me a lot of experience in building large-scale applications and working in an Agile environment.

---

# Q10. Anything else you'd like us to know about your experience, or areas you are still growing in? (Honest gaps are welcome)

### Answer

One thing I'd like to mention is that most of my experience has been in building and maintaining large React applications, working on UI development, state management, API integration and performance optimization.

An area where I am still growing is backend development. I have worked with APIs and understand Node.js concepts, but my primary strength is frontend engineering. I am also spending time improving my knowledge of system design and learning more advanced frontend patterns.

I enjoy learning new technologies and whenever a project requires something new, I usually pick it up quickly. Recently I have been exploring areas like Next.js, TanStack Query and frontend performance optimization to become a more well-rounded developer.

I don't know everything, but I am comfortable learning on the job and taking ownership of features from development to production.