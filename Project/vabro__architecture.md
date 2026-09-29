Architecture
Q. How is the frontend architecture structured?
Answer
The frontend follows a component-based architecture using React.

The application is divided into:

- Pages
- Reusable Components
- Redux Store
- API Services
- Utility Functions
- Custom Hooks

Typical structure:

src/
├── pages
├── components
├── services
├── store
├── hooks
├── utils
├── assets

This structure helps maintain scalability and code reusability.
State Management
Q. Why did you use Redux Toolkit?
Answer
Redux Toolkit was used for centralized state management.

Benefits:

- Simplifies Redux code
- Reduces boilerplate
- Provides createSlice
- Supports createAsyncThunk for API calls
- Makes state predictable

We used Redux Toolkit for:

- User authentication
- Project data
- Sprint data
- Dashboard statistics
- User preferences

This allowed different components to access shared data efficiently.
Q. Where did you use local state and where did you use Redux?
Answer
Local state was used for:

- Modal open/close
- Form inputs
- Dropdown selections
- UI interactions

Redux was used for:

- Logged-in user data
- Project lists
- Sprint information
- Dashboard metrics
- Shared application data

If data was needed across multiple screens, we stored it in Redux.
If data was specific to a single component, we used useState.
API Integration
Q. How did you integrate APIs?
Answer
We consumed REST APIs provided by the backend team.

The process:

1. Create API service functions.
2. Call APIs using async functions.
3. Dispatch Redux actions.
4. Store response data in Redux.
5. Render data in UI.

We also handled:

- Loading states
- Error handling
- Success notifications
- Pagination
- Filtering

This ensured smooth communication between frontend and backend systems.
Q. How did you handle API failures?
Answer
We implemented proper error handling using try-catch blocks.

For API failures:

- Displayed user-friendly error messages
- Showed toast notifications
- Maintained loading states
- Logged errors for debugging

Example:

- Network failure
- Server error
- Unauthorized access
- Validation errors

This improved user experience and application reliability.
Performance
Q. How did you optimize performance?
Answer
I used several techniques:

- React.memo for preventing unnecessary re-renders
- useMemo for expensive calculations
- useCallback for memoizing functions
- Lazy loading using React.lazy
- Code splitting
- Pagination for large datasets
- Optimized API calls
- Debouncing search inputs

These improvements reduced rendering overhead and improved page responsiveness.
Dashboard
Q. How did you implement dashboards?
Answer
The dashboard displays project statistics and analytics.

I used:

- Chart.js
- ECharts

Features:

- Sprint progress charts
- Task completion metrics
- Team productivity reports
- Project health indicators
- Burndown charts

Data was fetched from APIs and transformed into chart-friendly formats before rendering.
Authentication
Q. How was authentication handled?
Answer
Authentication was based on JWT tokens.

Flow:

1. User logs in.
2. Backend returns JWT token.
3. Token stored securely.
4. Token sent in API request headers.
5. Protected routes verified user authentication.

Role-based access control was implemented to show different features based on user permissions.
Agile
Q. Did you work in Agile methodology?
Answer
Yes.

We followed Agile Scrum practices.

Activities included:

- Sprint Planning
- Daily Standups
- Sprint Reviews
- Retrospectives
- Backlog Grooming

Tasks were tracked and managed within VABRO itself.