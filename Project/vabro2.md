# Q. What problem does VABRO solve?

### Answer

VABRO is a project management and collaboration platform that helps teams plan, track and manage their work in one place. Teams can create projects, manage sprints, track tasks through Kanban boards, set OKRs, schedule work and monitor progress using dashboards and reports.

The main goal was to give project managers and team members better visibility into project status and team productivity, instead of managing everything through spreadsheets or multiple tools.
# Q. Who are the primary users of VABRO?

### Answer

The primary users of VABRO are project managers, scrum masters, team leads, developers and other team members involved in project execution.

Project managers and team leads use it to plan projects, manage resources, track progress and monitor team performance. Scrum masters use it for sprint planning, backlog management and tracking sprint goals.

Developers and team members use it to manage their tasks, update status, collaborate with the team and track their work through Kanban boards and dashboards.

Overall, VABRO is designed for teams that follow Agile or project-based workflows and need a single platform to manage planning, execution and reporting.

# Q. How many modules did you work on in VABRO?

### Answer

I worked on around 7–8 major modules in VABRO. The main ones were Project Management, Workspace Management, Sprint Planning, Kanban Board, OKR Management, Dashboard, Reporting and some parts of Calendar Scheduling.

My involvement was not the same in every module. I spent most of my time working on Project Management, Sprint Planning, Kanban Board and Dashboard features, including UI development, API integration, state management and bug fixing.

Since the modules were connected, I also worked on shared components and common workflows that were used across multiple areas of the application.

# Q. Which module did you spend most of your time on?

### Answer

I spent most of my time on the Dashboard, Reporting and OKR modules in VABRO.

A major part of my work was building data visualization screens using Chart.js and ECharts. These modules displayed project progress, sprint metrics, team workload, task distribution, OKR progress and various management reports.

My responsibilities included integrating APIs, transforming backend data into chart-friendly formats, creating reusable chart components, implementing filters and ensuring charts updated dynamically based on user selections like workspace, project, sprint and date range.

One of the challenging parts was handling large datasets and multiple charts on the same page while maintaining good performance. I used techniques like `useMemo`, lazy loading and optimized Redux state updates to reduce unnecessary re-renders.

I also worked closely with product and backend teams to make sure the reports and dashboards displayed accurate business metrics. Because these modules were heavily used by managers and leadership teams, I spent a significant amount of time enhancing and maintaining them.
# Q. What was your biggest contribution to the project?

### Answer

My biggest contribution was in the Dashboard, Reporting and OKR modules of VABRO.

I was heavily involved in building and enhancing data visualization features using Chart.js and ECharts. I developed multiple dashboard widgets, reports and OKR progress views that helped users track project health, sprint performance, team workload and business metrics.

I worked on the complete flow from API integration and data transformation to chart rendering and filter implementation. I also created reusable chart components which reduced duplicate code and made it easier to add new reports in the future.

Another important contribution was improving dashboard performance. Some screens had multiple charts and large datasets, so I optimized rendering using `useMemo`, lazy loading and better state management practices.

These modules were widely used by project managers and leadership teams, so my work had a direct impact on how users monitored progress and made decisions within the platform.

# Q. What feature are you most proud of building?

### Answer

The feature I am most proud of is the Dashboard and Reporting module in VABRO.

I worked on building interactive dashboards using Chart.js and ECharts that displayed project progress, sprint metrics, team workload, task status and OKR tracking. Users could apply filters such as workspace, project, sprint and date range, and the charts would update dynamically based on the selected criteria.

What I liked most about this feature was that it combined several frontend skills together, including API integration, state management with Redux Toolkit, data transformation, performance optimization and responsive UI development.

One challenge was handling multiple charts and reports on the same page without affecting performance. I optimized rendering and created reusable chart components, which made the module easier to maintain and extend.

It was rewarding because this feature was used regularly by project managers and leadership teams to track progress and make decisions, so the impact was clearly visible to end users.

# Q. How was the VABRO frontend structured?

### Answer

The VABRO frontend was structured using a feature-based approach in React.js. Instead of organizing files only by type, we grouped them by modules such as Dashboard, Reporting, OKR Management, Sprint Planning, Project Management and Workspace.

Each module typically contained its own pages, components, API services, Redux slices and utility functions. This made the codebase easier to maintain because all related functionality stayed together.

For shared functionality, we had common components such as tables, charts, modals, forms and loaders that were reused across multiple modules. We also maintained common utility functions and constants in separate folders.

State management was handled using Redux Toolkit for global data, while component-specific state was managed using React hooks. API calls were organized through service files to keep components clean and focused on UI logic.

As the application grew, this structure helped us add new features and maintain existing modules without creating too much dependency between different parts of the application.

# Q. How did you organize components and folders?

### Answer

In VABRO, we followed a feature-based folder structure because the application had multiple modules like Dashboard, Reporting, OKR Management, Sprint Planning and Project Management.

Each module had its own folder containing pages, components, Redux logic, API services and helper functions. This helped keep related code together and made the application easier to maintain as it grew.

For example, a Dashboard module would have its own chart components, API calls, Redux slice and utility functions inside the same module folder instead of spreading them across the project.

We also had a shared components folder for reusable items like tables, charts, modals, loaders, form controls and pagination components that were used in multiple modules.

This structure made development easier because when working on a feature, most of the required files were available in one place and changes had less impact on other modules.

# Q. How did you share data between modules?

### Answer

In VABRO, we mainly shared data between modules using Redux Toolkit.

Data such as user information, workspace details, permissions, selected projects and common filters were stored in the Redux store because multiple modules needed access to the same data.

For example, when a user selected a workspace, that information was available to Dashboard, Reporting, OKR and Project Management modules without passing props through multiple component levels.

For module-specific data, we kept the state inside the respective module or component using React hooks. This helped avoid putting unnecessary data into the global store.

We also reused API services and utility functions across modules when the same business logic was required. Using Redux Toolkit helped maintain a single source of truth and kept data synchronized across different parts of the application.

# Q. Why did you choose Redux Toolkit?

### Answer

We chose Redux Toolkit in VABRO because the application had multiple modules such as Dashboard, Reporting, OKR Management, Sprint Planning and Project Management that needed to share data.

Things like user information, workspace details, permissions, selected projects and filter states were used across different screens, so managing them through props would have become difficult.

Redux Toolkit reduced a lot of boilerplate compared to traditional Redux and provided features like `createSlice` and `createAsyncThunk`, which made state management and API handling much cleaner.

It also helped us maintain a single source of truth for shared data and made debugging easier through Redux DevTools. When an issue occurred, we could easily track state changes and understand what action updated the store.

For local UI state like modals, dropdowns and form inputs, we still used React hooks because not everything needed to be in Redux. We mainly used Redux Toolkit for data that had to be shared across multiple modules.

# Q. Did you face any challenges with state management?

### Answer

Yes, one challenge we faced in VABRO was managing shared data across multiple modules like Dashboard, Reporting, OKR and Project Management.

For example, when users switched workspaces or projects, several screens needed to refresh their data. If the state was not updated properly, some components could display outdated information or trigger unnecessary API calls.

Another challenge was handling asynchronous data updates. Sometimes users changed filters quickly and multiple API requests were triggered. We had to make sure older responses did not overwrite newer data in the Redux store.

To solve these issues, we separated global state and local state carefully, used Redux Toolkit for shared data, cleared state when required and optimized our `useEffect` dependencies. We also used memoization in some places to reduce unnecessary re-renders.

As the application grew, maintaining a clear state structure became very important because many modules depended on the same data.
# Q. How did you avoid prop drilling?

### Answer

In VABRO, we avoided prop drilling mainly by using Redux Toolkit for shared data.

Information such as user details, workspace information, permissions, selected projects and filter states was stored in the Redux store. Components could access the required data directly using selectors instead of passing props through multiple levels of components.

For example, Dashboard, Reporting and OKR modules all needed access to workspace and project information. Instead of passing these values from parent to child through several layers, we retrieved them directly from Redux wherever needed.

For data that was only required within a small component hierarchy, we continued using props because it kept the code simple. We did not put everything into Redux unnecessarily.

This approach helped keep components cleaner, reduced unnecessary prop passing and made the application easier to maintain as it grew.

# Q. How did you integrate APIs in VABRO?

### Answer

In VABRO, I was involved in integrating REST APIs across Dashboard, Reporting, OKR, Sprint Planning and Project Management modules.

We maintained API service files separately from components so that API logic stayed organized and reusable. Components would dispatch Redux Toolkit async actions, which called the APIs and updated the store with the response data.

For dashboard and reporting screens, I often had to transform API responses into formats required by Chart.js and ECharts before rendering the charts.

We handled loading, success and error states through Redux so users received proper feedback while data was being fetched. For failed requests, we displayed error messages and allowed users to retry when needed.

I also worked on APIs with filters, pagination, sorting and search functionality. A lot of the work involved understanding the API response structure, mapping data correctly and ensuring the UI stayed synchronized with backend data.

# Q. How did you integrate APIs in VABRO?

### Answer

In VABRO, I was involved in integrating REST APIs across Dashboard, Reporting, OKR, Sprint Planning and Project Management modules.

We maintained API service files separately from components so that API logic stayed organized and reusable. Components would dispatch Redux Toolkit async actions, which called the APIs and updated the store with the response data.

For dashboard and reporting screens, I often had to transform API responses into formats required by Chart.js and ECharts before rendering the charts.

We handled loading, success and error states through Redux so users received proper feedback while data was being fetched. For failed requests, we displayed error messages and allowed users to retry when needed.

I also worked on APIs with filters, pagination, sorting and search functionality. A lot of the work involved understanding the API response structure, mapping data correctly and ensuring the UI stayed synchronized with backend data.

# Q. How did you manage loading and error states?

### Answer

In VABRO, we managed loading and error states using Redux Toolkit along with React component state when needed.

For API calls, we usually maintained three states: loading, success and error. When a request started, we showed loaders or skeleton screens so users knew data was being fetched. Once the API completed successfully, we displayed the actual content.

If an API failed, we stored the error in Redux and showed a user-friendly error message instead of leaving the screen blank. In some cases, we also provided a retry option.

For Dashboard and Reporting modules, loading states were especially important because multiple charts could be fetching data at the same time. We displayed loaders for individual widgets so users could still interact with other parts of the page.

This approach improved the user experience and made it clear whether data was loading, available or failed to load.

# Q. How did you handle dependent API calls?

### Answer

In VABRO, we had several cases where one API depended on the result of another API.

For example, when a user selected a workspace, we first fetched the projects for that workspace. After a project was selected, we fetched related sprint data, and then task or dashboard information based on the selected sprint.

We handled these flows using Redux Toolkit async thunks and React hooks. The next API was triggered only after the required data from the previous API was available.

We also added loading states between requests and cleared old data when users switched workspaces or projects. This prevented users from seeing outdated information while new data was loading.

One thing we were careful about was avoiding race conditions. If users changed selections quickly, we made sure the UI displayed data for the latest selection and not an older API response.

# Q. Did you use request cancellation?

### Answer

Yes, in some scenarios we used request cancellation, especially in Dashboard and Reporting screens where users could change filters very quickly.

For example, if a user selected a different workspace, project or date range before the previous API call completed, we did not want the older response to overwrite the latest data.

To handle this, we used request cancellation mechanisms provided by our API layer and also added checks to ensure only the latest response updated the Redux store.

Even when cancellation was not implemented, we reset previous data and verified the current selection before updating the UI. This helped avoid stale data issues and improved the overall user experience.

The main goal was to ensure users always saw the most recent data based on their latest action.

# Q. How did you prevent duplicate API calls?

### Answer

In VABRO, we prevented duplicate API calls by carefully managing `useEffect` dependencies and controlling when API requests were triggered.

For example, in Dashboard and Reporting modules, APIs were called only when important values like workspace, project, sprint or filters changed. We avoided unnecessary dependencies that could cause repeated requests.

We also stored fetched data in Redux Toolkit so that components could reuse existing data instead of calling the same API again when navigating between screens.

In some search and filter features, we used debouncing to avoid sending an API request on every keystroke. This reduced unnecessary network traffic and improved performance.

While debugging, I often used the browser network tab to verify that APIs were being called only when expected and not multiple times for the same action.

# Q. How did you build the Dashboard module?

### Answer

I was heavily involved in building the Dashboard module in VABRO. The goal was to give users a quick overview of project health, sprint progress, team workload, task status and OKR performance.

The dashboard consumed data from multiple APIs and displayed it using Chart.js and ECharts. I worked on integrating the APIs, transforming the response data and mapping it into different chart formats such as bar charts, pie charts, line charts and progress indicators.

We used Redux Toolkit to manage shared dashboard data and React hooks for component-level state. Users could apply filters such as workspace, project, sprint and date range, and the dashboard would update dynamically based on those selections.

One challenge was handling multiple API calls and charts on the same page while maintaining good performance. To solve this, I used `useMemo`, optimized Redux updates, implemented loading states and lazy loaded some heavy components.

I also created reusable chart components so new reports and dashboard widgets could be added with minimal code changes. This made the dashboard easier to maintain and extend as the product evolved.

# Q. Why did you use Chart.js and ECharts?

### Answer

We used both Chart.js and ECharts in VABRO because different reporting and dashboard requirements needed different visualization capabilities.

Chart.js was used for simpler charts like bar charts, line charts and pie charts where implementation was straightforward and performance was good. It was easy to configure and worked well for standard reporting screens.

ECharts was used for more advanced dashboards where we needed richer interactions, larger datasets, custom tooltips, drill-down capabilities and more complex visualizations. It also provided better flexibility for highly customized charts.

In the Dashboard, Reporting and OKR modules, I worked on transforming API data into chart datasets and rendering them using both libraries. The choice depended on the business requirement and the complexity of the visualization.

Using both libraries allowed us to build reports that were visually clear, interactive and performant while meeting different user needs across the application.

# Q. Which chart types did you implement?

### Answer

In VABRO, I worked on implementing several chart types using Chart.js and ECharts depending on the reporting requirements.

The most common ones were bar charts, line charts, pie charts and doughnut charts. These were used for project progress tracking, sprint metrics, task distribution, team workload and OKR reporting.

For example, bar charts were used to compare project or sprint performance, line charts were used to show trends over time, and pie or doughnut charts were used to visualize task status distributions such as Completed, In Progress and Pending tasks.

In some dashboard screens, I also worked with stacked bar charts and custom ECharts visualizations where multiple metrics needed to be displayed together.

A big part of my work was not just rendering the charts but also transforming API data into the format required by Chart.js and ECharts and ensuring the charts updated correctly when users applied filters.

# Q. How did you handle large datasets in charts?

### Answer

In VABRO, some Dashboard and Reporting screens had large datasets, especially when users selected wider date ranges or projects with a lot of historical data.

To handle this, we first tried to fetch only the required data from the backend instead of loading everything at once. Most reports supported filters like workspace, project, sprint and date range, which helped reduce the amount of data being displayed.

On the frontend, I used `useMemo` to avoid recalculating chart data on every render. We also optimized Redux updates so that only the affected charts re-rendered when data changed.

For ECharts, we used its built-in performance optimizations and avoided unnecessary chart reinitialization. In some cases, we aggregated data before rendering so users could still understand trends without displaying thousands of points.

We also lazy loaded heavy dashboard widgets and showed loaders while data was being processed. This helped keep the dashboards responsive even when working with larger datasets.

# Q. How did you optimize dashboard performance?

### Answer

In VABRO, dashboard performance was important because a single screen could contain multiple charts, reports and API calls running at the same time.

One issue we noticed was unnecessary re-renders when filters changed or when unrelated state updates occurred. To solve this, I used `useMemo` for chart data transformations and `React.memo` for reusable chart components so they only re-rendered when their data actually changed.

I also optimized Redux state management by keeping the store structure clean and ensuring components subscribed only to the data they needed.

For Chart.js and ECharts, I avoided unnecessary chart recreation and updated only the required chart data whenever possible. We also lazy loaded some dashboard widgets so users did not have to load everything on the initial page render.

Another optimization was reducing duplicate API calls and loading only the data required for the selected workspace, project, sprint or date range.

These changes improved page responsiveness, reduced rendering time and made dashboard interactions much smoother for users.
# Q. How did filters affect dashboard data?

### Answer

In VABRO, filters played a very important role in the Dashboard and Reporting modules because users wanted to view metrics for specific workspaces, projects, sprints, teams or date ranges.

Whenever a filter changed, we triggered the required API calls and refreshed the related charts and reports with the new data. For example, selecting a different project would update project progress charts, task distribution reports and sprint metrics based on that project only.

The challenge was making sure all dashboard widgets stayed synchronized and displayed data for the same filter selection. We managed the selected filter values in Redux Toolkit so multiple components could access the same state.

I also handled loading states while new data was being fetched and cleared previous data when necessary to avoid showing outdated information.

This ensured that users always saw accurate dashboard metrics based on their current filter selections and all charts updated consistently across the page.

# Q. How did the Kanban Board work?

### Answer

In VABRO, the Kanban Board was used to visually track tasks through different stages of the workflow.

Tasks were displayed as cards inside columns such as Backlog, To Do, In Progress, Review and Done. Users could quickly see the status of work and move tasks between columns as the work progressed.

Each card contained information like task name, assignee, priority, due date and current status. Users could open a card to view or update additional details.

When a task was moved to another column, we updated the UI immediately and then called the backend API to save the new status. After a successful response, the Redux store was updated so the board stayed synchronized with the backend.

The Kanban Board also supported filtering and searching, which helped users focus on specific tasks, projects or team members. The main goal was to provide a simple and visual way for teams to manage and track their work.

# Q. How did you implement drag and drop?

### Answer

In VABRO, we implemented drag and drop functionality in the Kanban Board so users could move tasks between different status columns such as Backlog, To Do, In Progress, Review and Done.

We used a drag-and-drop library in React to handle the dragging interactions and column reordering behavior. When a user dragged a task card and dropped it into another column, we first updated the UI immediately so the experience felt smooth and responsive.

After the drop action, we triggered an API call to update the task status in the backend. Once the API was successful, we updated the Redux store to keep the frontend and backend data synchronized.

One challenge was handling failed API responses. If the update failed, we reverted the task to its previous position and showed an error message so users knew the change was not saved.

We also optimized re-renders because some boards contained many task cards, and we wanted drag-and-drop interactions to remain smooth even with larger datasets.

# Q. How did you update task status after dragging?

### Answer

In VABRO, when a user dragged a task card from one column to another, we first identified the source column and destination column from the drag event.

After the task was dropped, we immediately updated the UI so the card appeared in its new status column without waiting for the API response. This provided a smoother user experience.

Next, we triggered an API call with the task ID and the new status value. Once the backend confirmed the update, we updated the Redux store to keep the frontend state synchronized with the database.

If the API request failed, we reverted the task back to its original column and displayed an error message to the user. This ensured that the board always reflected the actual saved state.

This approach made the Kanban Board feel responsive while still maintaining data consistency between the frontend and backend.

# Q. How did you handle large numbers of cards?

### Answer

In VABRO, some projects had a large number of tasks, so the Kanban Board could contain many cards across multiple columns.

To keep the board responsive, we avoided unnecessary re-renders by using `React.memo` for task card components and `useMemo` for derived data where needed. This ensured that only the cards affected by a change were re-rendered.

We also implemented filtering and search functionality so users could narrow down tasks by assignee, priority, status or keywords instead of loading and interacting with every card at once.

For data fetching, we requested only the required tasks based on the selected project, sprint or filters. This helped reduce the amount of data rendered on the screen.

During performance testing, I used React DevTools Profiler to identify expensive renders and optimized components that were doing more work than necessary. These improvements helped the Kanban Board remain smooth even when projects contained a large number of tasks.

# Q. What challenges did you face while building Kanban?

### Answer

One of the biggest challenges while building the Kanban Board in VABRO was keeping the UI responsive while handling drag-and-drop interactions, filters and frequent data updates.

When users moved task cards between columns, we had to update the UI instantly while also synchronizing the change with the backend. We needed to make sure the board remained consistent even if an API request failed.

Another challenge was performance. Some projects contained a large number of tasks, and re-rendering the entire board after every change could make the UI feel slow. To solve this, we optimized component rendering using `React.memo`, `useMemo` and careful state updates.

We also had to handle filtering, searching and sprint changes without losing the current board state. Sometimes users switched filters very quickly, so we had to ensure the correct data was displayed and old responses did not overwrite newer ones.

The overall challenge was balancing user experience, performance and data consistency while keeping the Kanban Board easy to use.
# Q. How did Sprint Planning work in VABRO?

### Answer

In VABRO, Sprint Planning helped teams organize and manage work for a specific sprint period.

Users could create a sprint, define sprint goals, set start and end dates, and then add tasks from the backlog into that sprint. Team leads or project managers could assign tasks to team members and prioritize the work based on business needs.

During the sprint, team members updated task statuses through the Kanban Board, and the sprint metrics were automatically updated. The Dashboard and Reporting modules displayed information such as completed tasks, pending tasks, sprint progress and team workload.

From the frontend side, I worked on the sprint screens, task assignment flows, API integrations and dashboard visualizations related to sprint performance. We used Redux Toolkit to manage sprint data and ensure updates were reflected across different modules.

The main goal of Sprint Planning was to help teams track commitments, monitor progress and complete planned work within the sprint timeline.

# Q. How did users assign tasks to a sprint?

### Answer

In VABRO, tasks were not assigned directly to a sprint. The sprint was associated with User Stories, and the tasks were created under those User Stories.

During Sprint Planning, project managers or team leads selected User Stories from the backlog and added them to a sprint. Once a User Story became part of a sprint, all the tasks linked to that User Story were automatically included in that sprint's workflow.

From the frontend side, we displayed backlog User Stories, sprint details and the associated tasks. When a User Story was moved into a sprint, we called the relevant API and updated the Redux store so the changes were reflected across Sprint Planning, Kanban Board, Dashboard and Reporting modules.

This approach helped teams plan work at the User Story level while still tracking individual task progress during sprint execution.
# Q. How was sprint progress calculated?

### Answer

In VABRO, sprint progress was calculated based on the completion status of tasks belonging to the User Stories that were part of the sprint.

Since User Stories were assigned to a sprint and tasks existed under those User Stories, the progress was derived from task completion. As team members updated task statuses through the Kanban Board, the sprint metrics were automatically updated.

For example, if a sprint had 100 total tasks and 70 tasks were marked as completed, the sprint progress would show around 70% completion. We also displayed additional metrics such as completed tasks, pending tasks, overdue tasks and sprint velocity in reports and dashboards.

From the frontend side, I consumed the sprint progress APIs and displayed the data using charts and progress indicators in the Dashboard and Reporting modules. The calculations were mostly handled by the backend, while the frontend focused on visualizing the metrics clearly for users.
# Q. How did you handle sprint completion?

### Answer

In VABRO, sprint completion was handled when the sprint reached its end date or when the Scrum Master decided to close the sprint.

Before closing the sprint, users could review sprint metrics such as completed User Stories, completed tasks, pending work, sprint velocity and team performance. These details were available through Dashboard and Reporting modules.

When a sprint was completed, the frontend called the sprint closure API and refreshed the related data. After successful completion, the sprint status was updated, and users could no longer modify sprint planning information for that sprint.

Any incomplete tasks remained linked to their respective User Stories and could be moved to a future sprint during the next sprint planning session, depending on the team's workflow.

From the frontend side, my responsibility was mainly to display the sprint completion details, update the UI after sprint closure and ensure all reports and dashboards reflected the latest sprint status correctly.
# Q. What are OKRs and how were they implemented?

### Answer

OKR stands for Objectives and Key Results. It is a goal-setting framework used to track business and team objectives through measurable outcomes.

In VABRO, users could create Objectives and define multiple Key Results under each Objective. The Objective represented the goal, while the Key Results were measurable targets used to track progress toward that goal.

From the frontend side, I worked on the OKR Management module where users could create, update, view and track OKRs. We integrated APIs to fetch OKR data and displayed the progress using tables, progress bars, Chart.js and ECharts visualizations.

As users updated Key Result values, the progress percentage of the related Objective was automatically updated through backend calculations. We then displayed the updated metrics in dashboards and reports.

One of the key challenges was presenting OKR progress in a simple and meaningful way so managers and teams could quickly understand how close they were to achieving their goals.
# Q. How did users create Objectives and Key Results?

### Answer

In VABRO, users could create an Objective by providing details such as the objective name, description, owner, timeline and other relevant information.

After creating the Objective, they could add one or more Key Results under it. Each Key Result represented a measurable target, such as increasing project completion rate, reducing defects or improving team productivity.

From the frontend side, I worked on the forms used to create and manage Objectives and Key Results. The forms included validations, API integration and dynamic sections that allowed users to add multiple Key Results under the same Objective.

Once saved, the Objective and its Key Results were displayed in the OKR Management module, and users could update the Key Result progress over time. The progress data was then reflected in dashboards, reports and OKR tracking screens.

This structure helped teams break larger goals into measurable outcomes and track progress more effectively.
# Q. How was progress tracked?

### Answer

In VABRO, progress was tracked through the Key Results associated with each Objective.

Each Key Result had a target value and a current value. As users updated the Key Result progress, the system calculated how much of the target had been achieved. Based on the completion percentage of all Key Results, the overall Objective progress was updated.

From the frontend side, I consumed the progress APIs and displayed the information using progress bars, percentage indicators, tables and charts in the OKR Dashboard and Reporting modules.

Users could quickly see which Objectives were on track, which were at risk and how individual Key Results were contributing to the overall goal. The progress data was updated dynamically whenever Key Result values changed.

My main responsibility was ensuring the progress information was displayed accurately and updated consistently across OKR, Dashboard and Reporting screens.
# Q. What performance issues did you face?

### Answer

One of the main performance issues I faced in VABRO was in the Dashboard and Reporting modules where multiple Chart.js and ECharts components were rendered on the same page.

When users changed filters like workspace, project or date range, several APIs were triggered and many charts re-rendered at the same time. This sometimes caused the dashboard to feel slow, especially when working with large datasets.

Another issue was unnecessary re-renders. Some chart components were re-rendering even when their data had not changed, which increased rendering time and affected UI responsiveness.

To fix this, I used `useMemo` for data transformation, `React.memo` for reusable chart components and optimized Redux selectors so components subscribed only to the data they actually needed.

We also lazy loaded some dashboard widgets and reduced duplicate API calls. After these optimizations, dashboard performance improved noticeably and interactions became much smoother for users.

# Q. How did you identify unnecessary re-renders?

### Answer

In VABRO, I mainly used React DevTools Profiler to identify unnecessary re-renders.

While working on Dashboard and Reporting modules, I noticed that some charts were re-rendering even when the underlying data had not changed. Using the Profiler, I could see which components were rendering frequently and how much time each render was taking.

I also added temporary console logs during debugging to track component renders and understand what state or prop changes were triggering them.

After analyzing the issue, I found that some parent components were re-rendering and causing child chart components to re-render unnecessarily. In a few cases, data transformation logic was also running on every render.

To fix this, I used `React.memo` for reusable chart components, `useMemo` for expensive calculations and optimized Redux selectors so components only subscribed to the data they actually needed.

After the changes, the number of renders reduced significantly and dashboard performance became much smoother.

# Q. Where did you use useMemo?

### Answer

In VABRO, I mainly used `useMemo` in the Dashboard, Reporting and OKR modules where chart data required transformation before being displayed.

The APIs usually returned raw data, and before rendering it in Chart.js or ECharts, we needed to group, filter, calculate percentages and convert it into the format required by the charts. These operations could become expensive when working with larger datasets.

Without `useMemo`, those calculations would run on every render even when the data had not changed. So I wrapped the transformation logic inside `useMemo` and recalculated it only when the API data or selected filters changed.

I also used `useMemo` for derived table data, filtered results and summary metrics displayed in reports.

This helped reduce unnecessary calculations, improved rendering performance and made the Dashboard feel much more responsive when users interacted with filters.
# Q. Where did you use React.memo?

### Answer

In VABRO, I used `React.memo` mainly for reusable components in the Dashboard, Reporting and Kanban modules.

For example, we had reusable chart components built using Chart.js and ECharts. These components received data through props, and without `React.memo`, they were re-rendering whenever the parent component rendered, even if the chart data had not changed.

I also used it for components like task cards, dashboard widgets, summary cards and some table-related components where the props remained the same most of the time.

By wrapping these components with `React.memo`, React skipped unnecessary renders and only updated the component when its props actually changed.

This was especially useful on dashboard screens containing multiple charts because it reduced rendering work and improved overall UI responsiveness.
# Q. Did you implement lazy loading?

### Answer

Yes, we implemented lazy loading in VABRO, especially for Dashboard and Reporting modules.

Some pages contained multiple charts, reports and heavy components built with Chart.js and ECharts. Loading everything during the initial page render increased bundle size and affected performance.

To improve this, we used React's `lazy` and `Suspense` to load certain components only when they were needed. For example, some dashboard widgets and report sections were loaded only when users navigated to those screens.

We also used route-level lazy loading so modules like OKR, Reporting and Dashboard were loaded on demand instead of being included in the initial bundle.

This reduced the initial load time, improved page responsiveness and provided a better user experience, especially for users accessing the application with slower networks or larger datasets.

# Q. How did you optimize Redux performance?

### Answer

In VABRO, one of the main goals was to avoid unnecessary component re-renders and store updates.

We kept only shared application data in Redux, such as user information, workspace details, project data, sprint data and dashboard filters. Component-specific state like modal visibility, form inputs and UI interactions was managed using React hooks instead of Redux.

I also used selectors so components subscribed only to the data they actually needed. This prevented unrelated Redux updates from causing unnecessary re-renders across the application.

For Dashboard, Reporting and OKR modules, I used `useMemo` along with Redux data to avoid recalculating chart datasets on every render. We also avoided storing derived data in Redux whenever possible and generated it only when required.

Another thing we did was split Redux state into separate slices such as workspace, project, sprint and dashboard, which made updates more predictable and reduced the impact of state changes on unrelated modules.

These optimizations helped improve rendering performance and kept the application responsive even as the project grew.
# Q. How was authentication handled?

### Answer

In VABRO, authentication was token-based.

When a user logged in, the frontend sent the credentials to the authentication API. After successful validation, the backend returned an access token along with user information and permissions.

The token was stored securely and included in the request headers for subsequent API calls. This allowed the backend to verify the user's identity and determine what resources they could access.

On the frontend, we maintained the authenticated user information in Redux Toolkit so different modules could access user details, roles and permissions when needed.

We also implemented protected routes, meaning users could only access certain pages if they were authenticated. If the token expired or became invalid, the user was redirected to the login page and asked to authenticate again.

My role was mainly integrating the authentication APIs, handling login and logout flows, managing user state and ensuring protected screens behaved correctly based on authentication status.
# Q. How did you store tokens?

### Answer

In VABRO, the token handling mechanism was already defined by the application's authentication architecture, and from the frontend side we used the token provided after successful login for authenticated API requests.

The token was attached to API request headers through our API layer so users could access authorized resources without logging in repeatedly.

We also maintained authenticated user information and permission data in Redux Toolkit so different modules could determine what actions and screens the user was allowed to access.

Whenever the user logged out or the session became invalid, the authentication data was cleared and the user was redirected to the login page.

My primary responsibility was integrating the authentication flow and ensuring authenticated requests, route protection and permission-based UI behavior worked correctly across the application.

# Q. How did you implement role-based access?

### Answer

In VABRO, role-based access was controlled using the permissions and role information returned from the backend after login.

When the user authenticated, we fetched their role and permission details and stored them in Redux Toolkit. Based on those permissions, the frontend decided which menus, pages and actions should be visible to the user.

For example, a Project Manager might be able to create projects, manage sprints and view reports, while a team member could only view assigned work and update task status. Users without permission would not see certain buttons, menus or actions in the UI.

We also protected routes so users could not directly access restricted pages by entering a URL manually. Before rendering a page, we checked whether the user had the required permission.

The actual authorization was still enforced by the backend, but from the frontend side my responsibility was to ensure the UI reflected the user's permissions correctly and provided a better user experience.

# Q. How did you protect routes?

### Answer

In VABRO, we used protected route components to control access to authenticated and authorized pages.

Before rendering a route, we checked whether the user was logged in and whether the required permissions were available. The authentication and user permission data were maintained in Redux Toolkit after login.

If the user was not authenticated, we redirected them to the login page. If they were logged in but did not have the required permission, we redirected them to an unauthorized page or a page they were allowed to access.

For example, routes related to project administration, sprint management or reporting were accessible only to users with the appropriate roles and permissions.

This ensured users could not access restricted pages directly through the URL, while also keeping the UI consistent with the permissions assigned to them.

# Q. How did you hide unauthorized UI actions?

### Answer

In VABRO, after login we received the user's role and permission information from the backend and stored it in Redux Toolkit.

Based on those permissions, we conditionally rendered UI elements such as Create, Edit, Delete, Assign and Sprint Management actions. If a user did not have permission for a specific operation, the corresponding button, menu item or action was simply not shown in the UI.

For example, a team member might be able to update task status but would not see options to create projects, manage users or close sprints. Those actions were visible only to users with the required permissions.

We usually created reusable permission-checking logic so the same permission rules could be applied consistently across different modules like Project Management, Sprint Planning, Dashboard and Reporting.

Even though the frontend hid unauthorized actions, the backend still validated permissions for every API request. The frontend was mainly responsible for improving user experience and preventing users from seeing actions they were not allowed to perform.

# Q. How did you implement search and filtering?

### Answer

In VABRO, search and filtering were used across modules like Dashboard, Reporting, Project Management, Sprint Planning and Kanban Board.

For search functionality, we captured the user's input and updated the results based on the search text. In some screens, we used debouncing so API calls were not triggered on every keystroke, which helped reduce unnecessary requests.

For filtering, users could filter data by workspace, project, sprint, assignee, status, priority and date range depending on the module. The selected filter values were maintained in component state or Redux Toolkit when multiple components needed access to the same filters.

Whenever a filter changed, we triggered the relevant API calls and refreshed the tables, charts or Kanban data with the updated results. We also reset pagination when filters changed to ensure users always saw the correct data.

One challenge was keeping all dashboard widgets synchronized when multiple filters were applied. We solved this by maintaining common filter state and ensuring every API request used the same filter values.

# Q. How did pagination work?

### Answer

In VABRO, pagination was mainly server-side because some modules contained a large amount of data and loading everything at once would impact performance.

The frontend sent parameters such as page number, page size, search text and filters to the API. The backend returned only the required records along with pagination information like total records, current page and total pages.

On the UI, users could navigate between pages, change page size and combine pagination with search and filtering. Whenever a user changed the page or applied a filter, a new API request was made with the updated parameters.

I worked on integrating the pagination APIs, updating the table data and ensuring pagination remained synchronized with search and filters.

Using server-side pagination helped reduce the amount of data rendered in the browser and kept tables responsive even when the dataset was very large.

# Q. Did you use server-side or client-side pagination?

### Answer

In VABRO, we mostly used server-side pagination.

The application handled large amounts of data such as projects, tasks, user stories, reports and dashboard records. Fetching all records to the frontend and then paginating them on the client side would have increased load time and memory usage.

Instead, the frontend sent parameters like page number, page size, search text and filters to the backend API. The backend returned only the required records for that page along with pagination metadata.

This approach improved performance, reduced network payload size and worked much better when users combined pagination with search and filtering.

We only used client-side pagination in a few small datasets where the data volume was limited and already available in the browser.
# Q. How did you export reports?

### Answer

In VABRO, users could export reports after applying filters such as workspace, project, sprint and date range.

From the frontend side, I worked on triggering the export APIs and passing the currently selected filters so the exported data matched what the user was viewing on the screen.

The backend generated the report file and returned it to the frontend. We then handled the file download in the browser and provided feedback to the user when the export was completed.

One thing we were careful about was ensuring the exported report respected the same search and filter criteria used in the Dashboard and Reporting modules. This helped users get consistent data both on-screen and in the exported file.

My role was mainly integrating the export functionality, handling the download flow and ensuring a smooth user experience.

# Q. How did you handle large tables?

### Answer

In VABRO, some modules like Project Management, User Stories, Tasks and Reporting contained large tables with thousands of records.

To handle this efficiently, we mainly used server-side pagination so only the required records for the current page were loaded. This reduced memory usage and improved page performance.

We also combined pagination with search, filtering and sorting, allowing users to quickly find relevant data without loading the entire dataset into the browser.

For rendering performance, we avoided unnecessary re-renders by keeping component state optimized and ensuring table components only updated when their data changed.

Another thing we focused on was user experience. We added loading indicators, empty states and responsive table layouts so users could still work comfortably even when dealing with large datasets.

These optimizations helped keep the tables fast, responsive and easy to use even when the amount of data grew significantly.
# Q. What was the most complex form you built?

### Answer

One of the most complex forms I worked on in VABRO was the User Story creation and management form.

The form was quite large because it included fields such as title, description, priority, story points, assignee, sprint selection, tags, attachments and other project-related information. Users could also create or update related tasks under the User Story.

The challenging part was handling dynamic sections, conditional fields, validations and multiple API integrations. Some fields depended on project or workspace selections, so the available options had to update dynamically.

I implemented form validation, error handling and proper loading states to ensure users received immediate feedback when entering data. We also had to handle edit mode where existing data needed to be populated correctly.

Another challenge was keeping the form responsive and maintainable as new business requirements were added over time. To manage this, we broke the form into smaller reusable components and kept the API logic separate from the UI.

Overall, it was one of the more complex forms because it involved a lot of business rules, dynamic behavior and integration with multiple modules.
# Q. How did you handle validation?

### Answer

In VABRO, validation was handled both on the frontend and backend.

On the frontend, I added validations for required fields, maximum lengths, numeric values, date validations and business-specific rules before allowing users to submit forms. This helped users identify issues immediately without waiting for an API response.

For forms like User Story creation, task management and OKR forms, validation messages were displayed near the relevant fields so users could easily understand what needed to be corrected.

Even after frontend validation passed, the backend still validated the data before saving it. If the API returned validation errors, we displayed those messages to the user and highlighted the affected fields when possible.

The goal was to provide quick feedback, prevent invalid submissions and ensure data consistency throughout the application.
# Q. How did you manage dynamic fields?

### Answer

In VABRO, I worked with dynamic fields mainly in forms like User Story creation, Task Management and OKR forms.

Some fields appeared or changed based on user selections. For example, when a user selected a project, the available User Stories, assignees, sprint options or related fields would update dynamically based on the selected project.

To manage this, I maintained the form state using React hooks and updated the dependent fields whenever the parent field changed. In some cases, changing one field triggered an API call to fetch the latest options for the next field.

For sections where users could add multiple entries, such as tasks under a User Story or multiple Key Results under an Objective, I rendered fields dynamically using arrays and updated the form state accordingly.

I also handled validation and state cleanup when dependent fields changed, so old or invalid values were not accidentally submitted.

The main challenge was keeping the form state synchronized while ensuring a smooth user experience as users added, removed or modified dynamic fields.

# Q. How did you handle form submission errors?

### Answer

In VABRO, after a user submitted a form, we handled both frontend validation errors and backend API errors.

Before making the API call, we validated required fields and business rules on the frontend. If any validation failed, we showed error messages immediately and prevented the form from being submitted.

If the API request failed after submission, we captured the error response and displayed a meaningful message to the user instead of showing a generic failure. For field-specific errors returned by the backend, we displayed the error near the relevant field whenever possible.

We also disabled the submit button while the request was in progress to prevent duplicate submissions and showed loading indicators so users knew the form was being processed.

For unexpected server or network issues, we displayed an error notification and allowed users to retry the submission without losing their entered data.

This approach helped provide a better user experience and reduced the chances of users becoming confused when something went wrong.

# Q. How did you work with backend developers?

### Answer

In VABRO, I worked closely with backend developers throughout the feature development process.

Before starting a feature, we discussed requirements, API contracts, request payloads and response structures so both frontend and backend teams had the same understanding. We usually reviewed the API documentation or sample responses before integration started.

During development, I integrated the APIs and provided feedback if any data was missing or if the response structure could be improved for the frontend. Sometimes we worked together to refine API responses to reduce unnecessary data transformations on the frontend.

When issues occurred, I used browser network tools to verify requests and responses, and if the problem was coming from the backend, I coordinated with backend developers to investigate logs and fix the issue.

For modules like Dashboard, Reporting, OKR and Sprint Management, there was frequent communication because the frontend depended heavily on backend data and business logic. Good collaboration helped us deliver features faster and reduce integration issues.
# Q. How were requirements communicated?

### Answer

In VABRO, requirements were usually communicated through Agile ceremonies such as sprint planning, backlog refinement and requirement discussions with the product team.

Before development started, the product owner or business analyst would explain the feature, business requirements, expected workflow and acceptance criteria. We also reviewed designs, user stories and mockups whenever they were available.

For complex modules like Dashboard, Reporting and OKR Management, we often had discussions with product managers, backend developers and QA teams to clarify business rules and expected behavior before implementation.

If anything was unclear during development, we would ask questions early instead of making assumptions. This helped avoid rework later and ensured the delivered feature matched the business expectation.

Regular communication during the sprint also helped us handle requirement changes and resolve any blockers quickly.

# Q. Did you participate in sprint planning?

### Answer

Yes, I regularly participated in sprint planning meetings in VABRO.

During sprint planning, the team reviewed upcoming User Stories, discussed requirements, clarified business rules and estimated the effort required for each task. We also identified dependencies, technical challenges and any risks before committing work to the sprint.

As a frontend developer, I provided input on UI complexity, API dependencies, component reuse opportunities and the effort required for implementation. If a User Story involved Dashboard, Reporting, OKR or Sprint modules, I often discussed the frontend approach and possible challenges with the team.

These discussions helped us break large features into smaller tasks and create a realistic sprint plan. It also ensured everyone had a clear understanding of what needed to be delivered during the sprint.

# Q. How did you estimate tasks?

### Answer

In VABRO, task estimation was usually done during sprint planning and backlog refinement sessions.

Before estimating, I tried to understand the complete requirement, UI complexity, API dependencies, business rules, testing effort and any potential risks. Based on that, I broke the work into smaller tasks such as UI development, API integration, state management, validations and testing.

For example, if I was working on a Dashboard or Reporting feature, I considered factors like chart development, API integration, filter handling, responsive design and performance optimization before estimating the effort.

The team generally discussed estimates together, and we considered previous similar tasks as a reference. If there were uncertainties or external dependencies, I would mention them during estimation so they could be taken into account.

My goal was always to provide realistic estimates rather than optimistic ones, because accurate planning helped the team deliver sprint commitments more consistently.


# Q. Have you ever broken production?

### Answer

Yes, once I introduced a bug while working on a dashboard enhancement in VABRO.

I had modified a shared component that was used by multiple dashboard widgets. The change worked fine in my testing environment, but after deployment some users were seeing blank charts because a specific API response format was not handled properly.

We identified the issue quickly through user reports and logs. I fixed it by adding proper null checks and handling different response scenarios. After that, we deployed a patch and the issue was resolved.

It was a good learning experience for me. Since then, I have been more careful with shared components, edge cases and testing features that impact multiple modules before deployment.


# Q. How did you debug issues reported by users?

### Answer

When users reported an issue in VABRO, my first step was to understand the exact steps they followed and try to reproduce the issue in my local or staging environment.

I would check browser console errors, network requests, Redux state and API responses to identify where the problem was happening. If the issue was related to a specific user or project, I would compare the data with a working case to find the difference.

For UI issues, I used React DevTools and browser developer tools. For API-related issues, I checked request payloads, response data and backend logs with the help of backend developers when needed.

Once I found the root cause, I fixed the issue, tested related scenarios and made sure the fix did not impact other modules before moving it to production.


# Q. How did you reproduce difficult bugs?

### Answer

For difficult bugs in VABRO, I first tried to collect as much information as possible from the user, such as the exact steps, browser, module, screenshots and any error messages.

Then I attempted to recreate the same scenario in my local or staging environment using similar data and user permissions. Many times the bug only happened with specific project data, roles or workflow sequences, so reproducing the exact conditions was important.

I also used browser developer tools, network tab and Redux DevTools to track state changes and API responses step by step. Sometimes I added temporary logs to understand where the flow was breaking.

One example was a dashboard filter issue where users were occasionally seeing old data. The bug was hard to reproduce because it only happened when filters were changed very quickly. After testing different user actions repeatedly, I was able to reproduce it and found that older API responses were overwriting newer data. We fixed it by resetting previous state and handling requests more carefully.


# Q. What monitoring or logging tools did you use?

### Answer

In VABRO, as a frontend developer, I mostly used browser developer tools, console logs, network tab and Redux DevTools for debugging and monitoring application behavior.

For API-related issues, I checked request payloads, response data, status codes and error messages through the browser network tab. Redux DevTools was very useful for tracking state changes and debugging data flow issues.

For production issues, we also worked with backend and DevOps teams to review application logs when required. If an issue could not be identified from the frontend side, we would verify API logs and server responses to find the root cause.

The tools I used most frequently were Chrome DevTools, React DevTools and Redux DevTools because they helped quickly identify UI, state management and API integration issues.


# Q. Tell me about a production bug you fixed.

### Answer

One production issue I fixed in VABRO was in the Dashboard module.

Users reported that after changing filters like workspace or project very quickly, some charts were showing incorrect or outdated data. The issue was not happening consistently, which made it a little difficult to identify at first.

I started by reproducing the issue in the staging environment and monitored the API requests through the browser network tab. After investigating, I found that multiple API requests were being triggered, and sometimes an older response was arriving after a newer request and overwriting the latest dashboard data.

To fix this, I updated the data loading flow, cleared previous dashboard data when filters changed and ensured only the latest API response updated the Redux store.

After testing different scenarios and validating the fix with QA, we deployed it to production. The issue was resolved, and users no longer saw outdated dashboard information when switching filters quickly.

It was a good learning experience about handling asynchronous requests and preventing stale data issues in React applications.

# Q. If you had to rebuild VABRO today, what would you change?

### Answer

If I were rebuilding VABRO today, one of the biggest changes I would make is adopting a more modern frontend architecture from the beginning.

For server-side data, I would use TanStack Query instead of storing most API data in Redux. It provides built-in caching, background refetching and request management, which would reduce a lot of boilerplate code.

I would also create a stronger design system with reusable components for tables, charts, forms, modals and filters. As the application grew, we ended up reusing many components, so having a dedicated design system earlier would have improved consistency and development speed.

For Dashboard and Reporting modules, I would focus more on performance from the start by introducing lazy loading, code splitting and better chart abstraction layers for Chart.js and ECharts.

I would also improve folder organization by keeping each feature completely self-contained with its own components, services, hooks and state management logic. This would make the codebase easier to scale as new modules are added.

Overall, VABRO worked well, but with the experience I have now, I would focus more on scalability, maintainability and performance from day one.

# Q. What technical debt existed in the project?

### Answer

Like most long-running products, VABRO had some technical debt because new features were continuously being added while supporting existing customers.

One area was reusable components. In the early stages, some modules developed similar tables, filters and form components independently. Over time, we had to refactor and consolidate them into more reusable solutions.

Another area was API data handling. Some Dashboard and Reporting screens had custom data transformation logic inside components, which made maintenance more difficult as requirements grew. We gradually moved common logic into reusable utilities and hooks.

There were also places where Redux contained more server-side data than necessary. As the application expanded, it became clear that some of that data could be managed more efficiently with modern data-fetching solutions and caching mechanisms.

In a few older modules, there were large components that handled multiple responsibilities such as UI rendering, API calls and business logic. We gradually split those into smaller components to improve readability and maintainability.

None of these issues blocked development, but reducing this technical debt helped make the application easier to scale and maintain over time.

# Q. Which feature would you redesign?

### Answer

If I had the opportunity, I would redesign parts of the Dashboard and Reporting module.

Over time, many new reports, filters and chart requirements were added, and the module became one of the most heavily used areas of VABRO. While it worked well, some dashboard widgets had very similar data processing logic implemented separately.

If I were redesigning it today, I would create a more configurable dashboard architecture where charts, filters and report widgets could be reused through common components and configuration instead of building custom logic for each report.

I would also introduce a dedicated data layer for handling API caching, filtering and transformations. This would reduce complexity inside components and make the dashboard easier to maintain.

Another improvement would be giving users more flexibility to customize their dashboards, such as choosing widgets, rearranging layouts and saving personal dashboard views.

The current implementation worked well for business needs, but with the experience I have now, I think the Dashboard and Reporting module could be made more scalable and easier to extend in the future.
# Q. What would you improve in the frontend architecture?

### Answer

If I were improving the VABRO frontend architecture today, I would focus mainly on scalability, maintainability and performance.

One improvement would be separating server state and client state more clearly. We used Redux Toolkit successfully, but a lot of API data was stored in Redux. Today, I would use TanStack Query for API data, caching and background refetching, while keeping Redux only for global application state.

I would also introduce more custom hooks for common logic used across Dashboard, Reporting and OKR modules. This would reduce duplicate code and keep components focused on UI responsibilities.

Another area would be strengthening the design system. We already had reusable components, but I would standardize tables, charts, forms, filters and modals even further so new features could be built faster and with better consistency.

For large modules like Dashboard and Reporting, I would improve code splitting and lazy loading from the beginning to keep bundle sizes smaller and improve initial page load performance.

Overall, the architecture worked well, but with the experience I have now, I would make it more modular, reusable and easier to scale as the product continues to grow.

# Q. Why should we trust that you actually worked on VABRO?

### Answer

I can only speak honestly about the areas I worked on.

In VABRO, I was mainly involved in the frontend side using React.js. I worked extensively on Dashboard, Reporting, OKR Management, Sprint Planning and Kanban Board features. A lot of my day-to-day work included API integration, Redux Toolkit state management, Chart.js and ECharts implementations, form development, bug fixing and performance optimization.

For example, I can explain how sprint planning worked, how User Stories were linked to sprints, how task status updates happened through the Kanban Board, how dashboard filters triggered API calls, how OKR progress was displayed and how we optimized chart performance using `useMemo` and `React.memo`.

I can also discuss production issues I fixed, challenges with asynchronous API calls, role-based access, report exports and the trade-offs we made in the frontend architecture.

Of course, I may not remember every small detail of a project that I worked on for years, but I can explain the modules, workflows, technical decisions and challenges in depth because I was directly involved in building and maintaining them.