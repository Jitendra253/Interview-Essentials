
## Project Dashboard

Reference:1.dashboard and 2.dashboard image

One of the major modules I worked on in VABRO was the Dashboard Module, which serves as the landing page after Entering inside a project.
 
### short answer
I worked on the Project Dashboard module in VABRO. It has two sections: My Work and Project Overview. My Work contains widgets like Messages, Activities, Notifications, and Comments, while Project Overview displays all projects with Scrum/Kanban filters and List/Card views.

My responsibilities included API integration, Redux state management, implementing draggable and resizable widgets, building List and Card views, handling loading and error states, and making the dashboard responsive.

One challenge was that each widget required separate API calls, which could affect performance. I solved this by using Redux Toolkit async thunks, loading widgets independently, and caching data. Another challenge was maintaining widget layouts during drag-and-drop, which I solved using a grid-based layout system and state persistence.
### Long answer
The Project Dashboard mainly consists of **two sections**:

## 1. My Work

This section is focused on the logged-in user and contains different tabs such as:

- My Widgets
- My Releases
- My Epics
- My Planning Poker Games

The most frequently used tab is **My Widgets**.

### My Widgets Contains

- My Messages
- Recent Activities
- My Notifications
- My Comments

This section gives users a quick overview of everything important happening across their projects without navigating to multiple modules.

### Key Feature

The widgets are:

- Draggable
- Resizable
- Customizable

Users can arrange and resize widgets based on their preferences to create a personalized dashboard experience.

---

## 2. Project Overview

The Project Overview section displays all projects available within the selected workspace.

### Features

- View all projects in the workspace
- Filter projects by methodology:
  - Scrum
  - Kanban
- View projects in:
  - List View
  - Card View

This section provides a high-level overview of all projects and allows users to quickly access project information.

---

## My Contribution

My responsibilities included:

- Integrating REST APIs for widgets and project data
- Managing application state using Redux Toolkit
- Implementing draggable and resizable widgets
- Building List View and Card View layouts
- Handling loading, error, and empty states
- Making the dashboard responsive across different screen sizes


---
# Challenges Faced and How I Solved Them

## 1. Multiple API Calls on Dashboard Load

### Challenge
The dashboard contains multiple widgets such as Messages, Notifications, Activities, Comments, and Project Overview. Each widget requires data from different APIs. Loading everything together could increase page load time.

### Solution
- Created separate Redux async thunks for each API.
- Loaded data independently for each widget.
- Added loading states and skeleton loaders.
- Cached responses in Redux store to avoid unnecessary API calls.

---

## 2. Managing Dashboard State

### Challenge
Different widgets needed data from different APIs, and some data was shared across multiple components. Managing everything with local state would become difficult.

### Solution
- Used Redux Toolkit for centralized state management.
- Created separate slices for dashboard-related data.
- Used selectors to access only required data.
- Reduced prop drilling and improved maintainability.

---

## 3. Draggable and Resizable Widgets

### Challenge
Users can drag and resize widgets. The challenge was maintaining widget positions and layouts without breaking the UI.

### Solution
- Used a grid-based drag-and-drop library.
- Stored widget layout information in state.
- Updated layout dynamically when widgets were moved or resized.
- Added responsive breakpoints for different screen sizes.

---

## 4. List View and Card View

### Challenge
The same project data needed to be displayed in both List View and Card View while keeping filtering and searching functionality consistent.

### Solution
- Kept project data in a single source of truth.
- Created separate reusable components for List View and Card View.
- Reused the same filtered dataset for both views.
- Allowed users to switch views without making additional API calls.

---

## 5. Handling Loading, Error, and Empty States

### Challenge
Some APIs could be slow or fail, and users should not see a broken screen.

### Solution
- Added loaders while data was being fetched.
- Displayed meaningful error messages when API calls failed.
- Added empty state screens when no data was available.
- Ensured one failed widget did not affect other widgets.

---

## 6. Responsive Design

### Challenge
The dashboard contains many widgets and tables, which can be difficult to display properly on smaller screens.

### Solution
- Used responsive layouts and flexible grid systems.
- Added breakpoints for tablet and mobile devices.
- Allowed widgets to stack vertically on smaller screens.
- Tested across different screen resolutions.

---

## 7. Performance Optimization

### Challenge
Frequent state updates and multiple widgets could cause unnecessary re-renders.

### Solution
- Used React.memo for reusable components.
- Used useMemo for expensive calculations.
- Optimized Redux selectors.
- Avoided unnecessary API requests through caching.

---





# VABRO Dashboard --- Redux Toolkit, Multiple APIs, Caching & Shared State

## 1. Multiple API Calls → Independent Async Thunks + Loading + Caching

Your dashboard has different widgets:

-   Messages
-   Activities
-   Notifications
-   Comments
-   Project Overview

Each can have a different API.

Instead of one huge API call, we can have separate Redux async thunks.

### Example API Structure

``` text
GET /api/messages
GET /api/activities
GET /api/notifications
GET /api/comments
GET /api/projects
```

### Redux Slice

``` javascript
const initialState = {
  messages: {
    data: [],
    loading: false,
    error: null
  },
  notifications: {
    data: [],
    loading: false,
    error: null
  },
  comments: {
    data: [],
    loading: false,
    error: null
  }
};
```

### Separate Async Thunks

``` javascript
export const fetchMessages = createAsyncThunk(
  "dashboard/fetchMessages",
  async () => {
    const response = await api.get("/messages");
    return response.data;
  }
);

export const fetchNotifications = createAsyncThunk(
  "dashboard/fetchNotifications",
  async () => {
    const response = await api.get("/notifications");
    return response.data;
  }
);
```

### Handle Them Independently

``` javascript
extraReducers: (builder) => {

  builder
    .addCase(fetchMessages.pending, (state) => {
      state.messages.loading = true;
    })
    .addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages.loading = false;
      state.messages.data = action.payload;
    })
    .addCase(fetchMessages.rejected, (state, action) => {
      state.messages.loading = false;
      state.messages.error = action.error.message;
    });

  builder
    .addCase(fetchNotifications.pending, (state) => {
      state.notifications.loading = true;
    })
    .addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications.loading = false;
      state.notifications.data = action.payload;
    })
    .addCase(fetchNotifications.rejected, (state, action) => {
      state.notifications.loading = false;
      state.notifications.error = action.error.message;
    });
}
```

### In the VABRO Dashboard

When the dashboard loads:

``` javascript
useEffect(() => {
  dispatch(fetchMessages());
  dispatch(fetchNotifications());
  dispatch(fetchComments());
  dispatch(fetchActivities());
  dispatch(fetchProjects());
}, [dispatch]);
```

Now imagine:

``` text
Dashboard
   |
   |---- Messages API       → loading → data
   |
   |---- Notifications API  → loading → data
   |
   |---- Comments API       → loading → error
   |
   |---- Activities API     → loading → data
   |
   |---- Projects API       → loading → data
```

If the **Comments API fails**, you don't have to make the entire
dashboard fail.

The Comments widget can show:

``` text
Unable to load comments
[Retry]
```

while Messages, Notifications, Activities, and Projects continue
working.

------------------------------------------------------------------------

## What About Caching?

Suppose the user goes from:

``` text
Dashboard → Project → Dashboard
```

You don't necessarily want to call the Messages API again every time.

You can check whether Redux already has the data:

``` javascript
if (state.dashboard.messages.data.length === 0) {
  dispatch(fetchMessages());
}
```

Or use a timestamp:

``` javascript
messages: {
  data: [],
  loading: false,
  lastFetched: null
}
```

Then:

``` javascript
if (
  !lastFetched ||
  Date.now() - lastFetched > 5 * 60 * 1000
) {
  dispatch(fetchMessages());
}
```

This means:

-   If data has never been fetched → fetch it.
-   If data is older than 5 minutes → fetch fresh data.
-   If data was fetched recently → reuse the existing Redux data.

### Interview Answer

> "Since the VABRO dashboard contained multiple independent widgets, I
> handled their API calls separately using Redux Toolkit async thunks.
> Each widget maintained its own loading, error, and data state, so one
> API failure wouldn't affect the entire dashboard. We also reused
> already-fetched data from Redux where appropriate to avoid unnecessary
> API calls."

------------------------------------------------------------------------

# 2. Shared Dashboard State → Redux Toolkit + Selectors

Now suppose **My Comments** data is needed by more than one component.

For example:

``` text
Dashboard
   |
   ├── CommentsWidget
   |
   ├── NotificationWidget
   |
   └── CommentsModal
```

If CommentsWidget fetches comments and stores them only in:

``` javascript
useState()
```

then other components cannot easily access that data.

You could pass it through props:

``` text
Dashboard
   ↓
CommentsWidget
   ↓
CommentsModal
```

This becomes **prop drilling**.

Instead, Redux can hold the shared data.

------------------------------------------------------------------------

## Redux State

``` javascript
const dashboardSlice = createSlice({
  name: "dashboard",

  initialState: {
    comments: [],
    notifications: [],
    activities: []
  },

  reducers: {}
});
```

Now the CommentsWidget can access comments directly:

``` javascript
const comments = useSelector(
  (state) => state.dashboard.comments
);
```

And the CommentsModal can also access the same data:

``` javascript
const comments = useSelector(
  (state) => state.dashboard.comments
);
```

There is no need to pass:

``` text
Dashboard
   ↓ props
CommentsWidget
   ↓ props
CommentsModal
```

Both components read from the same Redux store.

------------------------------------------------------------------------

# Why Selectors?

Instead of writing this everywhere:

``` javascript
useSelector(state => state.dashboard.comments);
```

you can create a selector:

``` javascript
export const selectComments = (state) =>
  state.dashboard.comments;
```

Then:

``` javascript
const comments = useSelector(selectComments);
```

You can have:

``` javascript
export const selectMessages = (state) =>
  state.dashboard.messages;

export const selectNotifications = (state) =>
  state.dashboard.notifications;

export const selectProjects = (state) =>
  state.dashboard.projects;
```

This gives you a cleaner architecture:

``` text
                Redux Store
                    |
             Dashboard Slice
                    |
       ┌────────────┼─────────────┐
       ↓            ↓             ↓
    Comments    Notifications   Projects
       ↓            ↓             ↓
   Selector      Selector       Selector
       ↓            ↓             ↓
 Comments UI   Notification UI  Project UI
```

------------------------------------------------------------------------

# Example: Updating a Comment

Suppose the user edits a comment:

``` javascript
dispatch(updateComment({
  id: 101,
  text: "Updated comment"
}));
```

Redux updates:

``` text
state.comments
```

Any component using:

``` javascript
useSelector(selectComments)
```

automatically receives the updated data and re-renders.

The flow is:

``` text
User edits comment
       ↓
dispatch(updateComment())
       ↓
Redux updates comments
       ↓
Store state changes
       ↓
Components using selectComments()
       ↓
Components re-render
```

------------------------------------------------------------------------

# Very Important Interview Distinction

Not **everything** in the VABRO dashboard needs Redux.

## Redux --- Shared / Server State

Examples:

``` text
Projects
Messages
Notifications
Comments
Activities
User information
Widget layout/preferences
```

These are useful in Redux when multiple components need the same data or
when the data represents shared/server state.

## Local State --- UI-Only State

Examples:

``` javascript
const [isModalOpen, setIsModalOpen] = useState(false);

const [searchText, setSearchText] = useState("");

const [selectedTab, setSelectedTab] = useState("My Widgets");

const [isDropdownOpen, setIsDropdownOpen] = useState(false);
```

These values usually belong to the component that controls the UI.

------------------------------------------------------------------------

# Redux vs Local State in VABRO

  State/Data               Recommended Location         Reason
  ------------------------ ---------------------------- --------------------------------------
  Projects                 Redux                        Shared/server data
  Messages                 Redux                        Used by dashboard widgets
  Notifications            Redux                        Shared data
  Comments                 Redux                        Used by multiple components
  Activities               Redux                        Dashboard/server data
  User information         Redux                        Can be needed across the application
  Modal open/close         Local state                  UI-only state
  Dropdown open/close      Local state                  UI-only state
  Temporary search input   Local state                  Usually component-specific
  Selected tab             Local state                  UI-specific
  Form input values        Local state / form library   Temporary UI state

------------------------------------------------------------------------

# Complete VABRO Dashboard Architecture

A simplified architecture can look like this:

``` text
                         VABRO Dashboard
                                |
                ┌───────────────┼───────────────┐
                ↓               ↓               ↓
           API Calls        UI Components    Local UI State
                |               |               |
       ┌────────┼────────┐      |        ┌──────┼───────┐
       ↓        ↓        ↓      |        ↓      ↓       ↓
   Messages  Comments  Projects |      Modal  Search  Dropdown
       |        |        |      |
       └────────┼────────┘      |
                ↓               |
         Redux Toolkit          |
                |               |
        ┌───────┼────────┐      |
        ↓       ↓        ↓      |
    Selectors Selectors Selectors
        ↓       ↓        ↓      |
    Messages Comments Projects  |
        |       |        |      |
        └───────┼────────┘      |
                ↓               |
          Dashboard Widgets ─────┘
```

------------------------------------------------------------------------

# Why Redux Toolkit for VABRO?

A good explanation is:

> "We used Redux Toolkit to manage shared and server-related state
> across the VABRO application. The dashboard had multiple independent
> data sources such as messages, notifications, comments, activities,
> and projects. Using separate async thunks allowed us to handle
> loading, success, and error states independently. Selectors provided a
> clean way for different components to access the required data without
> prop drilling. For UI-only state such as modal visibility, dropdowns,
> and temporary form values, we continued to use local React state."

------------------------------------------------------------------------

# Short Interview Version

If the interviewer wants a short answer:

> "In VABRO, I used Redux Toolkit for shared server state such as
> projects, messages, notifications, comments, and activities. Since the
> dashboard had multiple independent APIs, I used separate async thunks
> so each widget could manage its own loading, success, and error state.
> I used selectors to access specific pieces of Redux state and avoid
> prop drilling. For UI-only state like modal visibility, dropdowns,
> search text, and selected tabs, I used local React state."

------------------------------------------------------------------------

# Key Points to Remember

### 1. Multiple APIs

``` text
One API fails
     ↓
Only that widget shows an error
     ↓
Other widgets continue working
```

### 2. Async Thunks

``` text
createAsyncThunk()
       ↓
API request
       ↓
pending / fulfilled / rejected
```

### 3. Redux

Use Redux when data is:

-   Shared across components
-   Needed across multiple screens
-   Server-related
-   Useful to retain between navigations

### 4. Selectors

``` javascript
const comments = useSelector(selectComments);
```

Selectors keep state access clean and reusable.

### 5. Local State

Use `useState()` for:

-   Modal visibility
-   Dropdowns
-   Temporary input
-   Selected tabs
-   Component-specific UI state

### 6. Caching

Reuse existing Redux data when appropriate instead of making unnecessary
API calls.

``` text
Check existing data
       ↓
Is it fresh?
   ↙       ↘
 Yes       No
  ↓         ↓
Reuse     Fetch API
```

### 7. Interview Principle

**Don't say "I used Redux for everything."**

Instead say:

> "I used Redux Toolkit where state was shared or server-related, and
> local React state for component-specific UI state."




