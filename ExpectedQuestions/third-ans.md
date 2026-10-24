## 1.Tell me about yourself.

Good morning, and thank you for giving me this opportunity to introduce myself.

My name is Jitendra Kumar Mahali, and I have around 5 years of experience in front-end development, primarily working with React.js, JavaScript, Next.js, TypeScript, Redux Toolkit, HTML, and CSS.,

and I am currently working at Edusys Services Pvt. Ltd., where I work on a SaaS-based Agile Project Management and Collaboration platform called VABRO.

It helps organizations manage projects, teams, sprint planning, task tracking, reporting, and analytics within a single workspace.

My primary responsibility is frontend development using React.js, Javascript, Redux Toolkit, HTML, CSS, and Bootstrap. I work on developing new features, integrating REST APIs, managing application state, implementing role-based UI access, optimizing application performance, fixing bugs, and building responsive user interfaces.

I have worked on several key modules, including the Project Dashboard, which provides project overviews and widgets; Reports, where I implement data visualizations using Chart.js and Recharts; Comments, which enable communication among members within the same workspace; and multiple artifact creation features that help users create and manage different types of project-related content.

Through this experience, I have developed a strong understanding of building scalable and maintainable applications. I enjoy solving technical challenges, collaborating with team members, and delivering quality features that meet business requirements.

## 2.Explain your current project at Vabro and your responsibilities.

Currently, I am working on VABRO, a SaaS-based Agile Project Management and Collaboration platform.

The platform helps organizations manage their projects, teams, sprint planning, task tracking, reporting, and analytics from a single workspace.

As a Frontend Developer, my primary responsibility is to develop and maintain the user interface using React.js, Javascript, Redux Toolkit, HTML, CSS, and Bootstrap.

My responsibilities include developing reusable React components, integrating REST APIs, managing application state using Redux Toolkit, implementing role-based UI access, optimizing application performance, fixing bugs, and ensuring responsive design across different devices.

I have worked on several important modules, including the Project Dashboard, which displays project overviews and widgets; the Reports module, where I use Chart.js and Recharts for data visualization; the Comments module, which allows workspace members to communicate; and artifact creation features that help users create and manage different types of project-related content.

I also collaborate with backend developers, designers, and other team members to understand requirements, integrate APIs, resolve issues, and deliver features according to business needs.

Overall, my focus is on building user-friendly, reusable, and maintainable frontend components while ensuring good application performance and code quality.

## 3.What is the most challenging technical issue you solved?

One of the most challenging technical issues I faced in VABRO was improving the performance of the Project Dashboard, especially when handling multiple widgets and large amounts of project data.

Initially, the dashboard took more time to render because multiple components were re-rendering unnecessarily when the application state changed.

To resolve this, I analyzed the component rendering behavior and optimized the React components using `React.memo`, `useMemo`, and `useCallback` wherever appropriate. I also reviewed the Redux state structure to avoid unnecessary updates and optimized API data handling.

As a result, I reduced unnecessary re-renders and improved the dashboard's responsiveness, providing a smoother user experience.

This experience helped me understand the importance of performance profiling, efficient state management, and choosing the right optimization techniques in React applications.

## 3.1 if they ask how you achieve I also reviewed the Redux state structure to avoid unnecessary updates and optimized API data handling.

I reviewed the Redux state structure to ensure that components subscribed only to the data they actually needed. I used useSelector to select specific state values instead of accessing the entire Redux state.
I also avoided updating the Redux store when the data had not changed and used memoized selectors with createSelector where appropriate to prevent unnecessary recalculations.
For API handling, I avoided duplicate API calls, managed loading and error states properly, and ensured that API responses updated only the relevant parts of the state.
These changes helped reduce unnecessary component re-renders and improved the overall responsiveness of the dashboard.

// Instead of selecting the entire state
const state = useSelector((state) => state.dashboard);

// Select only the required data
const projects = useSelector(
(state) => state.dashboard.projects
);
Explain: “By selecting only the required data, a component can avoid re-rendering when unrelated parts of the Redux state change, provided the selected value remains the same.”

## 3.2 memoized selectors with createSelector how you achieve that

In VABRO, I used createSelector from Redux Toolkit to optimize derived data in the Project Dashboard.
For example, we had a list of projects, and we needed to display only active projects.
Instead of filtering the projects on every component render, I created a memoized selector using createSelector.
It caches the previous result and recalculates only when the input data changes. This helped avoid unnecessary calculations and reduced unnecessary re-renders.

## 4.How do you handle disagreements with your team lead or manager?

I handle disagreements professionally by first understanding the other person's perspective and then explaining my opinion with valid reasons. I discuss the pros and cons to find the best solution for the project. If the team lead makes the final decision, I respect it and work collaboratively toward the common goal.

## 5.How do you manage tight deadlines and multiple tasks?

I prioritize tasks based on urgency, business impact, and deadlines. For example, in VABRO, if I have a production bug and a new feature to develop, I prioritize fixing the production bug first. I communicate my priorities and progress to my team lead, discuss any deadline conflicts, and align on what needs to be completed first. This helps me manage multiple tasks efficiently without compromising code quality.

6. How do you ensure code quality and review other developers' code?

---

I ensure code quality by following coding standards and SOLID principles, especially the Single Responsibility Principle. I try to keep each component focused on a single responsibility, making it easier to maintain, test, and reuse. During code reviews, I also check readability, performance, and potential bugs.

During code reviews, I check code readability, component structure, performance, error handling, and potential bugs. I also verify whether the code handles edge cases and follows the project's requirements.

I provide constructive feedback and discuss better approaches with team members. My goal is not just to make the code work, but to ensure it is reliable, maintainable, and easy for other developers to understand.

7. How do you improve React application performance?

---

I improve React application performance by identifying unnecessary re-renders, optimizing component rendering, and managing state efficiently.

I use `React.memo`, `useMemo`, and `useCallback` wherever appropriate. I also use memoized selectors with Redux Toolkit, implement lazy loading for large components, and optimize API calls to avoid unnecessary requests.

For large datasets, I use pagination or virtualization to render only the required data. I also use React DevTools Profiler to identify performance bottlenecks.

My goal is to make the application faster, more responsive, and provide a smooth user experience.

## 8.Why are you leaving your current organization?

I’m grateful for the learning opportunities and experience I’ve gained at my current organization. Now, I’m looking for new challenges, opportunities to work on larger-scale projects, and professional growth. I believe Quest Global would be a good next step in my career, where I can contribute my experience and continue developing my technical skills.

## 9.Why should we hire you as a Senior Software Engineer?

You should hire me because I have around five years of experience in frontend development, with strong knowledge of React.js, TypeScript, Redux Toolkit, and modern frontend practices. I have hands-on experience developing features, integrating APIs, optimizing performance, and building maintainable applications. I also value teamwork, code quality, and problem-solving. I believe I can contribute to your team from day one while taking ownership of responsibilities as a Senior Software Engineer.

## 10.Examples of taking ownership and working with a team.

In VABRO, I collaborate with backend developers, UI/UX designers, and other frontend developers to deliver features. For example, while developing a dashboard module, I coordinate with the backend team on API responses and with designers on UI requirements. We discuss issues, share feedback, and work together to deliver the feature smoothly.
