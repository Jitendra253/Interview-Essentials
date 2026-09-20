# Question: What is Next.js?

## 20-Second Interview Answer

> Next.js is a React framework developed by Vercel for building modern web applications. It is based on React and provides additional features such as file-based routing, Server-Side Rendering (SSR), Static Site Generation (SSG), API Routes, Middleware, Image Optimization, and performance enhancements.

---

## What is Next.js?

Next.js is a React framework for building web applications.

It is built on top of React.js and provides many additional features that are not available in React by default.

Next.js simplifies application development by providing built-in solutions for routing, rendering, optimization, and backend APIs.

---

## Key Points

- React Framework for Web Applications.
- Developed by Vercel.
- Built on top of React.js.
- Supports both Client and Server Rendering.
- Provides File-Based Routing.
- Supports API Routes.
- Supports Middleware.
- Supports Image Optimization.
- Provides Better Performance and SEO.

---

## Features of Next.js

### Routing

Next.js provides built-in file-based routing.

Example:

```text
app/
 ├── page.tsx
 ├── about/
 │   └── page.tsx
```

Routes:

```text
/
/about
```

---

### Server Side Rendering (SSR)

Pages can be rendered on the server before being sent to the browser.

Benefits:

- Better SEO
- Faster Initial Load

---

### Static Site Generation (SSG)

Pages can be generated during build time.

Benefits:

- Faster Performance
- Reduced Server Load

---

### API Routes

Next.js allows backend APIs inside the same project.

Example:

```text
app/api/users/route.ts
```

---

### Middleware

Middleware runs before a request reaches a route.

Uses:

- Authentication
- Authorization
- Redirects
- Logging

---

### Image Optimization

Next.js provides:

```typescript
next/image
```

for optimized image loading.

---

## Why Use Next.js?

Benefits:

- Better SEO
- Faster Performance
- Built-in Routing
- Server Components
- API Routes
- Easy Deployment
- Production Ready

---

## Next.js vs React

| React | Next.js |
|---------|---------|
| Library | Framework |
| Requires React Router | Built-in Routing |
| CSR by Default | Supports SSR, SSG, ISR, CSR |
| No API Routes | API Routes Available |
| More Setup Required | Many Features Built-in |

---

## Single Page Application (SPA)

Next.js can create:

- Single Page Applications (SPA)
- Multi Page Applications (MPA)
- Server Rendered Applications

Unlike React, Next.js is not limited to only SPA development.

---

## Real World Uses

- E-Commerce Websites
- Admin Dashboards
- Portfolio Websites
- Blog Applications
- SaaS Products
- Enterprise Applications

---

## Common Follow-up Questions

### What is Next.js?

A React framework used for building modern web applications.

### Who developed Next.js?

```text
Vercel
```

### Is Next.js a Library or Framework?

```text
Framework
```

### Is Next.js based on React?

```text
Yes
```

### What routing system does Next.js use?

```text
File-Based Routing
```

### Can Next.js perform Server-Side Rendering?

```text
Yes
```

### Can Next.js create Single Page Applications?

```text
Yes
```

### What are the main advantages of Next.js?

- Routing
- SSR
- SSG
- API Routes
- Middleware
- Better SEO
- Better Performance


# Question: How to Install and Set Up a Next.js Project?

## 20-Second Interview Answer

> Next.js can be installed using the `create-next-app` command. Before installing Next.js, Node.js must be installed. After project creation, navigate to the project folder and run the development server using `npm run dev`.

---

## Prerequisites

Before installing Next.js, install:

- Node.js
- npm (comes with Node.js)

Check installation:

```bash
node -v
npm -v
```

---

## Install Next.js

Create a new Next.js project:

```bash
npx create-next-app@latest my-app
```

---

## Setup Options

During installation, Next.js asks:

```bash
√ Would you like to use TypeScript? Yes
√ Would you like to use ESLint? Yes
√ Would you like to use Tailwind CSS? Yes
√ Would you like your code inside a src/ directory? Yes
√ Would you like to use App Router? Yes
√ Would you like to use Turbopack? Yes
√ Would you like to customize import alias? No
```

---

## Move into Project Folder

```bash
cd my-app
```

---

## Run the Project

Start the development server:

```bash
npm run dev
```

---

## Open in Browser

```text
http://localhost:3000
```

You should see the default Next.js page.

---

## Project Structure

```text
my-app/
│
├── app/
├── public/
├── node_modules/
├── package.json
├── next.config.ts
├── tsconfig.json
└── .gitignore
```

---

## Important Files

### app/

Contains application routes and pages.

---

### public/

Stores static assets.

Example:

```text
public/
 ├── logo.png
 └── images/
```

---

### package.json

Contains project dependencies and scripts.

---

### next.config.ts

Used for Next.js configuration.

Example:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;
```

---

### tsconfig.json

TypeScript configuration file.

---

## Make Your First Change

Open:

```text
app/page.tsx
```

Default code:

```tsx
export default function Home() {
  return <h1>Welcome to Next.js</h1>;
}
```

---

## Save the File

```tsx
export default function Home() {
  return <h1>Hello Jitendra</h1>;
}
```

---

## Browser Output

```text
Hello Jitendra
```

The page updates automatically because of Hot Reloading.

---

## Hot Reloading

Next.js automatically refreshes the browser when code changes are saved.

No need to restart the server.

---

## Build for Production

Create production build:

```bash
npm run build
```

---

## Run Production Build

```bash
npm start
```

---

## Common Follow-up Questions

### Which command creates a Next.js project?

```bash
npx create-next-app@latest my-app
```

### Which command starts the development server?

```bash
npm run dev
```

### What is the default port of Next.js?

```text
3000
```

### Where are pages created in App Router?

```text
app/
```

### Which file is used for Next.js configuration?

```text
next.config.ts
```

### Which file contains project dependencies?

```text
package.json
```

### Does Next.js support Hot Reloading?

```text
Yes
```

# Question: Is React Code Working with Next.js?

## 20-Second Interview Answer

> Yes. Next.js is built on top of React, so React components, hooks, props, state management, and most React code work directly inside a Next.js application.

---

# Question: What is a Component?

## 20-Second Interview Answer

> A component is a reusable piece of code that encapsulates UI and logic. Components help break applications into smaller, manageable, and reusable parts.

---

## What is a Component?

A component is a reusable building block of a React or Next.js application.

Examples:

- Header
- Navbar
- Sidebar
- Footer
- Product Card
- Login Form

---

## Example

```tsx
function Header() {
  return <h1>Welcome</h1>;
}

export default Header;
```

---

# Question: How to Pass Data in a Component?

## 20-Second Interview Answer

> Data is passed from a parent component to a child component using props.

---

## Example

### Child Component

```tsx
type UserProps = {
  name: string;
};

function User({ name }: UserProps) {
  return <h2>{name}</h2>;
}

export default User;
```

---

### Parent Component

```tsx
import User from "./User";

export default function Home() {
  return <User name="Jitendra" />;
}
```

Output:

```text
Jitendra
```

---

# Question: Difference Between JavaScript and TypeScript

## 20-Second Interview Answer

> JavaScript is a dynamically typed language, while TypeScript is a statically typed superset of JavaScript. TypeScript adds type checking and advanced features, then compiles into JavaScript which browsers can understand.

---

## JavaScript

- Dynamically Typed
- Type Conversion Happens Automatically
- Runs Directly in Browser
- Less Type Safety

Example:

```javascript
let age = "25";

age = 25;
```

Valid.

---

## TypeScript

- Statically Typed
- Type Must Be Defined
- Provides Type Safety
- Compiles to JavaScript Before Running

Example:

```typescript
let age: number = 25;
```

---

## Why TypeScript?

Benefits:

- Better Code Quality
- Better Autocomplete
- Fewer Runtime Errors
- Easier Maintenance

---

# Question: Client-Side Scripting vs Server-Side Scripting

## 20-Second Interview Answer

> Client-side scripting runs in the browser and handles UI interactions. Server-side scripting runs on the server and handles business logic, authentication, APIs, and database operations.

---

## Client-Side Scripting

Runs in:

```text
Browser
```

Responsibilities:

- UI Rendering
- Form Handling
- User Interaction
- DOM Manipulation

Technologies:

- JavaScript
- React
- Client Components

---

## Example

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

Runs in the browser.

---

## Server-Side Scripting

Runs on:

```text
Server
```

Responsibilities:

- Business Logic
- Authentication
- Database Operations
- API Processing

Technologies:

- Node.js
- Express.js
- Next.js Server Components

---

## Example

```tsx
export default async function Users() {
  const res = await fetch(
    "https://dummyjson.com/users"
  );

  const data = await res.json();

  return <div>{data.users.length}</div>;
}
```

Runs on the server.

---

# Question: How Does Next.js Support Both Client and Server?

## 20-Second Interview Answer

> Next.js supports both client-side and server-side execution. In the App Router, components are Server Components by default. Adding `"use client"` makes a component run in the browser and enables React hooks and browser APIs.

---

## Server Components

Default behavior in App Router.

Example:

```tsx
export default function Home() {
  return <h1>Hello</h1>;
}
```

Runs on the server.

---

## Client Components

Use:

```tsx
"use client";
```

Example:

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button>{count}</button>;
}
```

Runs in the browser.

---

## Server Components vs Client Components

| Server Component | Client Component |
|-----------------|------------------|
| Runs on Server | Runs in Browser |
| Default in App Router | Requires `"use client"` |
| Can Fetch Data Directly | Cannot Access Server Resources Directly |
| Better Performance | Supports Interactivity |
| Cannot Use useState | Can Use useState |
| Cannot Use Event Handlers | Can Use Event Handlers |

---

## Important Interview Point

Many developers confuse:

```text
SSR
```

and

```text
Server Components
```

They are not the same.

### SSR

HTML is generated on the server and sent to the browser.

### Server Components

React component code executes on the server.

A Server Component may use SSR, SSG, or other rendering strategies depending on how the page is configured.



# Question: How to Use Events, Functions, and State in Next.js?

## 20-Second Interview Answer

> Events, functions, and state work in Next.js the same way they work in React. To use events and state, the component must be a Client Component by adding `"use client"` at the top of the file.

---

# Question: What are Events in Next.js?

## 20-Second Interview Answer

> Events are user interactions such as clicks, typing, form submissions, and mouse actions. Event handling in Next.js is similar to React and requires a Client Component.

---

## Event Example

```tsx
"use client";

export default function Home() {
  function handleClick() {
    alert("Button Clicked");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

---

## Common Events

```tsx
onClick
onChange
onSubmit
onMouseOver
onMouseLeave
onKeyDown
onKeyUp
```

---

## Example

```tsx
"use client";

export default function Home() {
  return (
    <input
      onChange={(e) =>
        console.log(e.target.value)
      }
    />
  );
}
```

---

# Question: How to Create and Call Functions in Next.js?

## 20-Second Interview Answer

> Functions in Next.js are created the same way as in React and JavaScript. They can be called directly, through events, or during rendering.

---

## Function Example

```tsx
export default function Home() {
  function greet() {
    return "Hello Next.js";
  }

  return <h1>{greet()}</h1>;
}
```

Output:

```text
Hello Next.js
```

---

## Function with Parameters

```tsx
export default function Home() {
  function greet(name: string) {
    return `Hello ${name}`;
  }

  return <h1>{greet("Jitendra")}</h1>;
}
```

Output:

```text
Hello Jitendra
```

---

## Calling Function from Event

```tsx
"use client";

export default function Home() {
  function showMessage() {
    alert("Welcome");
  }

  return (
    <button onClick={showMessage}>
      Show Message
    </button>
  );
}
```

---

# Question: What is State in Next.js?

## 20-Second Interview Answer

> State is data that can change over time and causes the component to re-render when updated. State is managed using the `useState` hook and requires a Client Component.

---

## Creating State

```tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] =
    useState<number>(0);

  return <h1>{count}</h1>;
}
```

Output:

```text
0
```

---

## Updating State

```tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] =
    useState<number>(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
}
```

---

## Counter Example

```tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] =
    useState<number>(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={increment}>
        Increment
      </button>
    </>
  );
}
```

---

## State with Input Field

```tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] =
    useState<string>("");

  return (
    <>
      <input
        type="text"
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <h2>{name}</h2>
    </>
  );
}
```

---

## Multiple States

```tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] =
    useState<string>("");

  const [age, setAge] =
    useState<number>(0);

  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </>
  );
}
```

---

## Important Interview Point

Hooks such as:

```tsx
useState
useEffect
useRef
useMemo
useCallback
```

can only be used inside:

```tsx
Client Components
```

Therefore:

```tsx
"use client";
```

must be added at the top of the file.

---

## Common Follow-up Questions

### Can we use Events in Server Components?

```text
No
```

Events require Client Components.

### Can we use useState in Server Components?

```text
No
```

### Which hook is used to create State?

```tsx
useState
```

### Why does State trigger re-rendering?

Because React updates the UI whenever state changes.

### Which directive is required for Events and State in Next.js?

```tsx
"use client";
```

### Do Events in Next.js work differently from React?

```text
No
```

They work the same way as React.



# Question: What is `"use client"` in Next.js?

## 20-Second Interview Answer

> `"use client"` is a Next.js directive used to mark a component as a Client Component. It is required when we need client-side features such as `useState`, `useEffect`, event handlers, or browser APIs like `localStorage` and `window`. By default, components in the Next.js App Router are Server Components.

---

## Why Do We Use `"use client"`?

Client Components can use:

- useState
- useEffect
- useRef
- Event Handlers
- localStorage
- sessionStorage
- window object
- document object

---

## Example

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] =
    useState<number>(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
}
```

---

# Question: How to Call a Function in Next.js?

## 20-Second Interview Answer

> Functions in Next.js are called the same way as in React and JavaScript. They can be called directly inside JSX or through events.

---

## Function Example

```tsx
export default function Home() {
  function greet() {
    return "Hello Next.js";
  }

  return <h1>{greet()}</h1>;
}
```

Output:

```text
Hello Next.js
```

---

## Function Call Through Event

```tsx
"use client";

export default function Home() {
  function showMessage() {
    alert("Hello");
  }

  return (
    <button onClick={showMessage}>
      Click
    </button>
  );
}
```

---

# Question: How to Make a Component Inside a Component?

## 20-Second Interview Answer

> A component can be created inside another component and then rendered like any other React component.

---

## Example

```tsx
export default function Home() {

  function Header() {
    return <h2>Header Component</h2>;
  }

  return (
    <>
      <Header />
      <h1>Home Page</h1>
    </>
  );
}
```

Output:

```text
Header Component
Home Page
```

---

# Question: Can We Call a Component as a Function?

## 20-Second Interview Answer

> Yes. Since a React component is a JavaScript function, it can technically be called like a normal function. However, the recommended approach is to render it using JSX syntax.

---

## Recommended

```tsx
function Header() {
  return <h1>Header</h1>;
}

export default function Home() {
  return <Header />;
}
```

---

## Possible But Not Recommended

```tsx
function Header() {
  return <h1>Header</h1>;
}

export default function Home() {
  return Header();
}
```

React applications should normally use:

```tsx
<Header />
```

---

# Question: What is State in React?

## 20-Second Interview Answer

> State is a React-managed container that stores data that can change over time. When state changes, React automatically re-renders the component and updates the UI.

---

## What is State?

State stores dynamic data inside a component.

Examples:

- Counter Value
- User Input
- API Data
- Login Status
- Theme Mode

---

## Example

```tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] =
    useState<number>(0);

  return <h1>{count}</h1>;
}
```

---

## Updating State

```tsx
setCount(count + 1);
```

React re-renders the component automatically.

---

# Question: Difference Between Variable and State

## 20-Second Interview Answer

> A normal variable is managed by JavaScript and changing it does not cause React to re-render the component. State is managed by React, and updating state causes React to re-render the component and update the UI.

---

## Variable Example

```tsx
export default function Home() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return (
    <button onClick={increment}>
      Increment
    </button>
  );
}
```

UI will not update.

---

## State Example

```tsx
"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] =
    useState<number>(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <button onClick={increment}>
      {count}
    </button>
  );
}
```

UI updates automatically.

---

## Variable vs State

| Variable | State |
|------------|--------|
| Managed by JavaScript | Managed by React |
| UI Does Not Update | UI Updates Automatically |
| No Re-render | Causes Re-render |
| Temporary Data | Reactive Data |

---

## Common Follow-up Questions

### What is `"use client"`?

A directive that marks a component as a Client Component.

### Why is `"use client"` needed?

To use hooks, events, and browser APIs.

### Can we use `useState` without `"use client"`?

```text
No
```

### What is State?

Data managed by React that can change over time.

### Which hook is used for State?

```tsx
useState
```

### What happens when State changes?

React re-renders the component and updates the UI.

### Can a component be called like a function?

```text
Yes
```

But using:

```tsx
<Component />
```

is the recommended approach.


# Question: File and Folder Structure in Next.js

## 20-Second Interview Answer

> Next.js follows a structured folder-based architecture. The most important folders for beginners are `app`, `public`, and configuration files such as `package.json`, `next.config.ts`, and `tsconfig.json`. In the App Router, requests start from the `app` folder where routes are automatically created based on folder structure.

---

# Important Files for Beginners

```text
my-app/
│
├── app/
├── public/
├── package.json
├── next.config.ts
├── tsconfig.json
├── .gitignore
└── node_modules/
```

---

# app/

The most important folder in Next.js.

Used for:

- Pages
- Layouts
- Routing
- Loading UI
- Error Handling
- API Routes

Example:

```text
app/
│
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
```

Routes:

```text
/
/about
/contact
```

---

# public/

Stores static files.

Example:

```text
public/
│
├── logo.png
├── image.jpg
└── icons/
```

Access:

```text
/logo.png
```

---

# package.json

Contains:

- Project Information
- Dependencies
- Scripts
- Package Versions

Example:

```json
{
  "name": "my-app",
  "version": "1.0.0"
}
```

---

# next.config.ts

Used to configure Next.js.

Example:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;
```

---

# tsconfig.json

TypeScript configuration file.

Controls:

- Compiler Settings
- Strict Mode
- Path Aliases

Example:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

---

# .gitignore

Files ignored by Git.

Example:

```text
node_modules
.next
.env
```

---

# node_modules/

Contains installed packages.

Example:

```text
react
next
typescript
```

Never upload this folder to GitHub.

---

# Other Important Files

## layout.tsx

Shared layout for pages.

Example:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

---

## page.tsx

Represents a route.

Example:

```tsx
export default function Home() {
  return <h1>Home Page</h1>;
}
```

---

## loading.tsx

Displayed while data is loading.

Example:

```tsx
export default function Loading() {
  return <h1>Loading...</h1>;
}
```

---

## error.tsx

Displayed when an error occurs.

Example:

```tsx
"use client";

export default function Error() {
  return <h1>Something Went Wrong</h1>;
}
```

---

## not-found.tsx

Displayed for invalid routes.

Example:

```tsx
export default function NotFound() {
  return <h1>Page Not Found</h1>;
}
```

---

# Code Flow of Next.js

Assume user visits:

```text
http://localhost:3000/about
```

Folder structure:

```text
app/
│
├── layout.tsx
└── about/
    └── page.tsx
```

Flow:

```text
Request
   ↓
layout.tsx
   ↓
about/page.tsx
   ↓
HTML Generated
   ↓
Browser
```

---

# Simplified Next.js Flow

```text
User Request
      ↓
Route Matching
      ↓
Layout Loading
      ↓
Page Component
      ↓
Data Fetching
      ↓
HTML Generation
      ↓
Browser Render
```

---

# Question: What is package.json?

## 20-Second Interview Answer

> package.json is the configuration file of a Node.js project. It contains project metadata, dependencies, devDependencies, and scripts. npm uses it to manage packages and run project commands.

---

## Example

```json
{
  "name": "next-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}
```

---

## Common Scripts

```bash
npm run dev
npm run build
npm start
```

---

# Question: Difference Between Dependency and DevDependency

## 20-Second Interview Answer

> Dependencies are packages required by the application at runtime, while devDependencies are packages required only during development, testing, linting, or the build process.

---

## Dependency

Required when the application runs.

Install:

```bash
npm install axios
```

Stored in:

```json
"dependencies"
```

Example:

```json
"dependencies": {
  "axios": "^1.0.0"
}
```

---

## DevDependency

Required only during development.

Install:

```bash
npm install -D typescript
```

Stored in:

```json
"devDependencies"
```

Example:

```json
"devDependencies": {
  "typescript": "^5.0.0"
}
```

---

## Dependency vs DevDependency

| Dependency | DevDependency |
|------------|---------------|
| Required at Runtime | Required During Development |
| Used by Application | Used by Developers |
| Installed in Production | Usually Not Needed in Production |
| Example: React, Next, Axios | Example: TypeScript, ESLint, Prettier |

---

# Common Follow-up Questions

### What is package.json?

The configuration file of a Node.js project.

### Which file contains project dependencies?

```text
package.json
```

### What is the purpose of the app folder?

To create routes and application pages.

### Which folder stores static files?

```text
public
```

### Which file configures Next.js?

```text
next.config.ts
```

### What is the difference between dependency and devDependency?

Dependencies are required at runtime, while devDependencies are required only during development.

### Should node_modules be pushed to GitHub?

```text
No
```


# Question: What are the Types of Components in Next.js?

## 20-Second Interview Answer

> In the Next.js App Router, there are two types of components: Server Components and Client Components. By default, all components are Server Components. Client Components are created using the `"use client"` directive and are used when interactivity, state, effects, or browser APIs are required.

---

## Types of Components in Next.js

1. Server Components
2. Client Components

---

# Question: What is a Server Component?

## 20-Second Interview Answer

> A Server Component is a component that executes on the server. In the App Router, all components are Server Components by default. They are best suited for data fetching, database operations, authentication, and backend-related logic.

---

## Server Component Features

- Rendered on the Server
- Default Component Type
- Better Performance
- Better SEO
- Can Fetch Data Directly
- Can Access Backend Resources
- Reduces JavaScript Sent to Browser

---

## Example

```tsx
export default function Home() {
  return <h1>Server Component</h1>;
}
```

This is a Server Component because there is no:

```tsx
"use client";
```

directive.

---

## Common Use Cases

- API Calls
- Database Queries
- Authentication
- Authorization
- SEO Pages
- Product Listing Pages
- Blog Pages

---

## Example with Data Fetching

```tsx
export default async function Users() {
  const response = await fetch(
    "https://dummyjson.com/users"
  );

  const data = await response.json();

  return <h1>{data.users.length}</h1>;
}
```

---

# Question: What is a Client Component?

## 20-Second Interview Answer

> A Client Component is a component that executes in the browser. It is created using the `"use client"` directive and is required for state management, event handling, effects, and browser APIs.

---

## Client Component Features

- Rendered in Browser
- Supports Interactivity
- Supports Hooks
- Supports Events
- Supports Browser APIs
- Used for UI Logic

---

## Example

```tsx
"use client";

export default function Home() {
  return <h1>Client Component</h1>;
}
```

---

## Example with State

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] =
    useState<number>(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  );
}
```

---

## Common Use Cases

- Forms
- Buttons
- Modals
- Dropdowns
- Search Inputs
- Theme Switchers
- Interactive UI

---

# Where to Use Server Components?

Use Server Components when:

- Fetching Data
- Calling APIs
- Reading Databases
- Authentication
- Authorization
- SEO Pages
- Backend Logic

Example:

```tsx
export default async function Products() {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const products =
    await response.json();

  return <div>Products</div>;
}
```

---

# Where to Use Client Components?

Use Client Components when:

- Handling Events
- Managing State
- Using useEffect
- Using useRef
- Using localStorage
- Using window object
- Building Interactive UI

Example:

```tsx
"use client";

import { useState } from "react";

export default function Search() {
  const [search, setSearch] =
    useState("");

  return (
    <input
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}
```

---

# Question: Component Types Based on Rendering

## 20-Second Interview Answer

> Based on execution location, Next.js components are categorized into Server Components and Client Components.

| Component Type | Executes On |
|---------------|-------------|
| Server Component | Server |
| Client Component | Browser |

---

# Question: Client Component vs Server Component

## 20-Second Interview Answer

> Server Components run on the server and are optimized for data fetching and backend logic, while Client Components run in the browser and are optimized for interactivity and UI state management.

---

## Comparison

| Server Component | Client Component |
|-----------------|------------------|
| Runs on Server | Runs in Browser |
| Default in App Router | Requires `"use client"` |
| Better Performance | Supports Interactivity |
| Better SEO | Handles User Actions |
| Can Fetch Data Directly | Cannot Access Server Resources Directly |
| Cannot Use Hooks | Can Use Hooks |
| Cannot Use Event Handlers | Can Use Event Handlers |
| Cannot Access Browser APIs | Can Access Browser APIs |

---

# Question: Can We Use Both Types of Components Together?

## 20-Second Interview Answer

> Yes. A Server Component can render a Client Component. This is the most common pattern in Next.js applications.

---

## Example

### Client Component

```tsx
"use client";

export default function Counter() {
  return <button>Increment</button>;
}
```

---

### Server Component

```tsx
import Counter from "./Counter";

export default function Home() {
  return (
    <>
      <h1>Dashboard</h1>
      <Counter />
    </>
  );
}
```

---

## Flow

```text
Server Component
       ↓
Client Component
       ↓
Browser Interaction
```

This is the recommended architecture in modern Next.js applications.

---

# Common Follow-up Questions

### What are the two component types in Next.js?

- Server Components
- Client Components

### Which component type is default in App Router?

```text
Server Component
```

### Which directive creates a Client Component?

```tsx
"use client";
```

### Can Server Components fetch data directly?

```text
Yes
```

### Can Client Components use useState?

```text
Yes
```

### Can Server Components use useState?

```text
No
```

### Can Client Components use event handlers?

```text
Yes
```

### Can Server Components render Client Components?

```text
Yes
```

### Where should backend-related logic be written?

```text
Server Components
```

### Where should UI interactions and events be written?

```text
Client Components
```




# Question: Basic Routing and Creating a New Page in Next.js

## 20-Second Interview Answer

> Next.js uses a file-system-based routing system. In the App Router, each folder represents a route segment and every route must contain a `page.tsx` (or `page.js`) file. The folder name becomes the URL path automatically.

---

# What is Routing?

Routing is the process of navigating between different pages of an application.

Next.js provides built-in routing.

No external routing library is required.

---

# File-System Based Routing

Next.js creates routes based on the folder structure inside:

```text
app/
```

Folder names become URL segments.

---

## Example

```text
app/
│
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
```

Generated Routes:

```text
/
/about
/contact
```

---

# Creating a New Page

## Step 1: Create a Folder

```text
app/
└── about/
```

---

## Step 2: Create page.tsx

```text
app/
└── about/
    └── page.tsx
```

---

## Step 3: Add Component Code

```tsx
export default function About() {
  return <h1>About Page</h1>;
}
```

---

## Route

```text
http://localhost:3000/about
```

Output:

```text
About Page
```

---

# Multiple Pages Example

```text
app/
│
├── page.tsx
├── about/
│   └── page.tsx
├── services/
│   └── page.tsx
└── contact/
    └── page.tsx
```

---

## Generated Routes

```text
/
/about
/services
/contact
```

---

# Home Page

The root page is:

```text
app/page.tsx
```

Example:

```tsx
export default function Home() {
  return <h1>Home Page</h1>;
}
```

Route:

```text
/
```

---

# Nested Routes

Folder structure:

```text
app/
└── blog/
    └── page.tsx
```

Route:

```text
/blog
```

---

## More Nested Example

```text
app/
└── blog/
    └── react/
        └── page.tsx
```

Route:

```text
/blog/react
```

---

# Route Mapping Example

| Folder Structure | Route |
|------------------|--------|
| app/page.tsx | / |
| app/about/page.tsx | /about |
| app/contact/page.tsx | /contact |
| app/blog/page.tsx | /blog |
| app/blog/react/page.tsx | /blog/react |

---

# Important Rules

### Rule 1

Folder name becomes URL segment.

Example:

```text
about
```

becomes:

```text
/about
```

---

### Rule 2

Every route folder must contain:

```text
page.tsx
```

or

```text
page.js
```

---

### Rule 3

A page component must be exported.

```tsx
export default function Page() {
  return <h1>Hello</h1>;
}
```

---

# Question: What is the Pattern for Creating Pages in Next.js?

## 20-Second Interview Answer

> In modern Next.js with the App Router, pages follow a file-system-based routing pattern. The `app` directory contains route segments, and a `page.tsx` file defines the UI for a route. Folders create URL segments, while square brackets such as `[id]` are used for dynamic routes.

---

## Pattern

```text
app/
└── route-name/
    └── page.tsx
```

Example:

```text
app/
└── products/
    └── page.tsx
```

Route:

```text
/products
```

---

# Question: Do We Need to Install Any Package for Routing in Next.js?

## 20-Second Interview Answer

> No. Next.js has built-in routing support. There is no need to install React Router or any other external routing package.

---

## React Example

Requires:

```bash
npm install react-router-dom
```

---

## Next.js Example

No package installation required.

Routing works automatically using:

```text
app/
```

folder structure.

---

# Question: What Type of Router Does Next.js Use?

## 20-Second Interview Answer

> Next.js uses a file-system-based router where folders represent route segments and `page.tsx` files define routes.

---

## Example

```text
app/
│
├── page.tsx
└── about/
    └── page.tsx
```

Routes:

```text
/
/about
```

Generated automatically by Next.js.

---

# Common Follow-up Questions

### What routing system does Next.js use?

```text
File-System Based Routing
```

### Which folder contains routes in App Router?

```text
app
```

### Which file creates a page?

```text
page.tsx
```

### Does every route folder require a page file?

```text
Yes
```

### Does Next.js require React Router?

```text
No
```

### How is the route name generated?

From the folder name.

### What is the route for:

```text
app/about/page.tsx
```

Answer:

```text
/about
```

### What is the route for:

```text
app/blog/react/page.tsx
```

Answer:

```text
/ blog / react
```
(Note: actual URL is `/blog/react`.)


# Question: What is Linking and Navigation in Next.js?

## 20-Second Interview Answer

> In Next.js, linking means creating navigation between routes using the `Link` component from `next/link`. It enables client-side navigation without a full page reload. For navigation triggered programmatically, such as after login or form submission, we can use `useRouter` from `next/navigation`.

---

# What is Linking?

Linking allows users to move from one page to another by clicking links.

Next.js provides:

```tsx
Link
```

from:

```tsx
next/link
```

---

# What is Navigation?

Navigation means moving between routes.

Navigation can happen:

- By User Action
- By JavaScript Logic

---

# How to Make Links?

Import:

```tsx
import Link from "next/link";
```

---

## Example

```tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/about">
        About Page
      </Link>
    </>
  );
}
```

---

## Folder Structure

```text
app/
│
├── page.tsx
└── about/
    └── page.tsx
```

---

## About Page

```tsx
export default function About() {
  return <h1>About Page</h1>;
}
```

---

# Benefits of Link

- Client-Side Navigation
- Faster Page Transitions
- No Full Page Reload
- Better Performance

---

# How to Navigate to Another Screen Programmatically?

Use:

```tsx
useRouter
```

from:

```tsx
next/navigation
```

---

## Example

```tsx
"use client";

import { useRouter }
from "next/navigation";

export default function Home() {

  const router = useRouter();

  function goToAbout() {
    router.push("/about");
  }

  return (
    <button onClick={goToAbout}>
      Go To About
    </button>
  );
}
```

---

# Common Navigation Methods

## router.push()

Navigate to a new route.

```tsx
router.push("/about");
```

---

## router.replace()

Navigate and replace current history entry.

```tsx
router.replace("/login");
```

---

## router.back()

Go to previous page.

```tsx
router.back();
```

---

## router.forward()

Go to next page.

```tsx
router.forward();
```

---

## router.refresh()

Refresh current route data.

```tsx
router.refresh();
```

---

# Real World Example

## Login Success Redirect

```tsx
"use client";

import { useRouter }
from "next/navigation";

export default function Login() {

  const router = useRouter();

  function login() {

    const isLoggedIn = true;

    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }

  return (
    <button onClick={login}>
      Login
    </button>
  );
}
```

---

# Question: Two Different Ways of Navigating Between Routes?

## 20-Second Interview Answer

> Next.js provides two common ways to navigate between routes: `Link` for user-driven navigation and `useRouter` for programmatic navigation.

---

## 1. Link

Used when:

- User clicks a link
- Menu Navigation
- Sidebar Navigation
- Navbar Navigation

Example:

```tsx
<Link href="/about">
  About
</Link>
```

---

## 2. useRouter

Used when:

- Login Redirect
- Form Submission
- Authentication
- Conditional Navigation

Example:

```tsx
router.push("/dashboard");
```

---

# Question: Difference Between Link and useRouter Navigation

## 20-Second Interview Answer

> `Link` is used for declarative navigation where the user interacts with a link, while `useRouter` is used for programmatic navigation where navigation is triggered by JavaScript logic.

---

## Comparison

| Link | useRouter |
|--------|------------|
| Declarative Navigation | Programmatic Navigation |
| User Clicks Link | JavaScript Triggers Navigation |
| Used in Menus and Navbars | Used in Login, Forms, Auth |
| Does Not Need Event Handler | Usually Used Inside Functions |
| Works in Server and Client Components | Requires Client Component |

---

# Example Using Link

```tsx
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/products">
      Products
    </Link>
  );
}
```

---

# Example Using useRouter

```tsx
"use client";

import { useRouter }
from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <button
      onClick={() =>
        router.push("/products")
      }
    >
      Products
    </button>
  );
}
```

---

# Common Follow-up Questions

### Which component is used for linking in Next.js?

```tsx
Link
```

### From which package is Link imported?

```tsx
next/link
```

### Which hook is used for programmatic navigation?

```tsx
useRouter
```

### From which package is useRouter imported?

```tsx
next/navigation
```

### Which method navigates to a route?

```tsx
router.push()
```

### Which method replaces browser history?

```tsx
router.replace()
```

### Which method goes back to the previous page?

```tsx
router.back()
```

### Which navigation method is best for menu links?

```tsx
Link
```

### Which navigation method is best after login success?

```tsx
useRouter
```

# Question: What is Nested Routing in Next.js?

## 20-Second Interview Answer

> Nested Routing in Next.js allows routes to be organized in a hierarchical folder structure. Each folder represents a URL segment, and nested folders create nested routes automatically.

---

# What is Nested Routing?

Nested Routing means creating routes inside other routes using folders.

Each folder becomes a URL segment.

The nested folder structure automatically creates nested URLs.

---

## Example

Folder Structure:

```text
app/
│
└── blog/
    └── react/
        └── page.tsx
```

Generated Route:

```text
/blog/react
```

---

# How Nested Routing Works

Folder Structure:

```text
app/
│
├── page.tsx
├── about/
│   └── page.tsx
└── products/
    └── page.tsx
```

Routes:

```text
/
/about
/products
```

---

## Nested Route Example

Folder Structure:

```text
app/
│
└── products/
    └── mobile/
        └── page.tsx
```

Route:

```text
/products/mobile
```

---

## More Nested Example

Folder Structure:

```text
app/
│
└── products/
    └── mobile/
        └── samsung/
            └── page.tsx
```

Route:

```text
/products/mobile/samsung
```

---

# Example Code

## app/products/page.tsx

```tsx
export default function Products() {
  return <h1>Products Page</h1>;
}
```

---

## app/products/mobile/page.tsx

```tsx
export default function Mobile() {
  return <h1>Mobile Page</h1>;
}
```

---

## app/products/mobile/samsung/page.tsx

```tsx
export default function Samsung() {
  return <h1>Samsung Page</h1>;
}
```

---

# Route Mapping

| Folder Structure | Route |
|------------------|--------|
| app/page.tsx | / |
| app/about/page.tsx | /about |
| app/products/page.tsx | /products |
| app/products/mobile/page.tsx | /products/mobile |
| app/products/mobile/samsung/page.tsx | /products/mobile/samsung |

---

# Navigation Example

```tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/products">
        Products
      </Link>

      <br />

      <Link href="/products/mobile">
        Mobile
      </Link>

      <br />

      <Link href="/products/mobile/samsung">
        Samsung
      </Link>
    </>
  );
}
```

---

# Real World Example

```text
app/
│
└── dashboard/
    ├── page.tsx
    ├── users/
    │   └── page.tsx
    ├── projects/
    │   └── page.tsx
    └── settings/
        └── page.tsx
```

Generated Routes:

```text
/dashboard
/dashboard/users
/dashboard/projects
/dashboard/settings
```

---

# Advantages of Nested Routing

- Better Organization
- Easy Route Management
- Scalable Folder Structure
- Automatic Route Generation
- Matches Real Application Structure

---

# Question: How Does Next.js Create Nested Routes?

## 20-Second Interview Answer

> Next.js creates nested routes automatically based on nested folders inside the `app` directory. Each folder becomes a URL segment.

---

## Example

Folder Structure:

```text
app/
└── blog/
    └── react/
        └── page.tsx
```

Generated Route:

```text
/blog/react
```

---

# Question: Do We Need Any Routing Configuration for Nested Routes?

## 20-Second Interview Answer

> No. Next.js automatically creates nested routes from the folder structure. No routing configuration is required.

---

# Common Follow-up Questions

### What is Nested Routing?

Creating routes inside routes using nested folders.

### Does Next.js support Nested Routing?

```text
Yes
```

### Which folder is used for routing?

```text
app
```

### How is the route generated?

From the folder structure.

### What is the route for?

```text
app/blog/react/page.tsx
```

Answer:

```text
/blog/react
```

### Do we need React Router for Nested Routing?

```text
No
```

### Is routing configuration required?

```text
No
```

Next.js automatically generates routes from folders.

# Question: What is a Common Layout in Next.js?

## 20-Second Interview Answer

> In Next.js App Router, `layout.tsx` is used to create shared UI such as Navbar, Sidebar, and Footer. The layout wraps child pages using the `children` prop, allowing common UI to persist across navigation without re-rendering.

---

# What is layout.tsx?

A layout is a component that wraps pages and provides shared UI.

Common examples:

- Navbar
- Sidebar
- Footer
- Dashboard Menu
- Common Styling

---

# Why Use Layouts?

Benefits:

- Reusable UI
- Better Code Organization
- Consistent Design
- No Repeated Code
- Persistent Navigation

---

# Root Layout

File:

```text
app/layout.tsx
```

This layout is applied to the entire application.

---

## Example

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
```

---

# How Layout Works

```text
layout.tsx
      ↓
children
      ↓
page.tsx
```

---

## Example

### app/layout.tsx

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <h2>Common Header</h2>

        {children}
      </body>
    </html>
  );
}
```

---

### app/about/page.tsx

```tsx
export default function About() {
  return <h1>About Page</h1>;
}
```

Output:

```text
Common Header
About Page
```

---

# Create a Navigation Bar

### app/layout.tsx

```tsx
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>

        <nav>
          <Link href="/">
            Home
          </Link>

          {" | "}

          <Link href="/login">
            Login
          </Link>

          {" | "}

          <Link href="/about">
            About
          </Link>
        </nav>

        <hr />

        {children}

      </body>
    </html>
  );
}
```

---

# Login Page

### app/login/page.tsx

```tsx
export default function Login() {
  return <h1>Login Page</h1>;
}
```

---

# Add Common Style

### app/globals.css

```css
nav {
  background: #222;
  padding: 15px;
}

nav a {
  color: white;
  text-decoration: none;
  margin-right: 15px;
}
```

---

# Nested Layout Example

Folder Structure:

```text
app/
│
├── layout.tsx
└── dashboard/
    ├── layout.tsx
    ├── users/
    │   └── page.tsx
    └── settings/
        └── page.tsx
```

---

## Dashboard Layout

### app/dashboard/layout.tsx

```tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Dashboard Menu</h2>

      {children}
    </>
  );
}
```

---

## Route

```text
/dashboard/users
```

Output:

```text
Dashboard Menu
Users Page
```

---

# Question: How Common Layout Works in Next.js?

## 20-Second Interview Answer

> A common layout in Next.js is created using `layout.tsx`. It contains shared UI such as Navbar, Sidebar, and Footer. The current page is rendered inside the layout through the `children` prop. Next.js supports both root layouts and nested layouts, allowing different sections of an application to have their own common UI.

---

## Flow

```text
Request
   ↓
layout.tsx
   ↓
children
   ↓
page.tsx
   ↓
Browser
```

---

# Root Layout vs Nested Layout

| Root Layout | Nested Layout |
|------------|---------------|
| Applied to Entire App | Applied to Specific Section |
| app/layout.tsx | app/dashboard/layout.tsx |
| Common Navbar/Footer | Section Specific UI |

---

# Question: Why is User First Letter Capital in Link?

## 20-Second Interview Answer

> When rendering a React or Next.js component, the component name must start with a capital letter. React treats lowercase tags as HTML elements and uppercase names as custom components.

---

## Correct

```tsx
function User() {
  return <h1>User</h1>;
}

export default function Home() {
  return <User />;
}
```

---

## Incorrect

```tsx
function user() {
  return <h1>User</h1>;
}

export default function Home() {
  return <user />;
}
```

React will treat:

```tsx
<user />
```

as an HTML tag.

---

## Why is Link Capitalized?

Because:

```tsx
Link
```

is a React Component imported from:

```tsx
next/link
```

Example:

```tsx
import Link from "next/link";
```

Usage:

```tsx
<Link href="/about">
  About
</Link>
```

React recognizes it as a component because it starts with an uppercase letter.

---

# Common Follow-up Questions

### Which file creates a common layout?

```text
layout.tsx
```

### What prop is used to render pages inside a layout?

```tsx
children
```

### Can we create multiple layouts?

```text
Yes
```

### What is the root layout file?

```text
app/layout.tsx
```

### What is a nested layout?

A layout applied only to a specific route section.

### Why do React components start with a capital letter?

Because React treats uppercase names as components and lowercase names as HTML elements.

### Is Link a component or HTML tag?

```text
Component
```


# Question: What is a Conditional Layout in Next.js?

## 20-Second Interview Answer

> A conditional layout means showing or hiding parts of a layout based on certain conditions, usually the current route. This is commonly used to hide the Navbar, Sidebar, or Footer on pages such as Login, Register, or Landing pages.

---

# What is a Conditional Layout?

A conditional layout displays different UI depending on:

- Current Route
- User Role
- Authentication Status
- Application Section

Examples:

- Hide Navbar on Login Page
- Hide Sidebar for Guests
- Show Admin Menu for Admin Users

---

# Why Use Conditional Layouts?

Benefits:

- Different UI for Different Pages
- Better User Experience
- Cleaner Layout Structure
- Role-Based Layouts

---

# Get Current Route Name

Use:

```tsx
usePathname()
```

from:

```tsx
next/navigation
```

---

## Example

```tsx
"use client";

import { usePathname }
from "next/navigation";

export default function CurrentRoute() {

  const pathname =
    usePathname();

  return <h1>{pathname}</h1>;
}
```

---

## Output

If current URL is:

```text
/login
```

Output:

```text
/login
```

---

# Apply Condition with Route Name

### Hide Navbar on Login Page

```tsx
"use client";

import Link from "next/link";
import { usePathname }
from "next/navigation";

export default function Navbar() {

  const pathname =
    usePathname();

  return (
    <>
      {pathname !== "/login" && (
        <nav>

          <Link href="/">
            Home
          </Link>

          {" | "}

          <Link href="/about">
            About
          </Link>

        </nav>
      )}
    </>
  );
}
```

---

# Using Conditional Layout in layout.tsx

```tsx
"use client";

import { usePathname }
from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname =
    usePathname();

  return (
    <html>
      <body>

        {pathname !== "/login" && (
          <h2>Navbar</h2>
        )}

        {children}

      </body>
    </html>
  );
}
```

---

# Multiple Route Conditions

```tsx
const pathname =
  usePathname();

const hideNavbar =
  pathname === "/login" ||
  pathname === "/register";
```

---

```tsx
{
  !hideNavbar && (
    <Navbar />
  );
}
```

---

# Real World Example

```tsx
const pathname =
  usePathname();

const authPages = [
  "/login",
  "/register",
  "/forgot-password"
];
```

---

```tsx
{
  !authPages.includes(pathname) &&
  <Navbar />;
}
```

Navbar will be hidden on:

```text
/login
/register
/forgot-password
```

---

# Question: How to Write Conditions in JSX?

## 20-Second Interview Answer

> In JSX, conditional rendering is commonly done using the ternary operator (`? :`) for two alternatives and the logical AND (`&&`) operator when we want to render something only when a condition is true. For complex conditions, we can use `if` statements before the JSX return.

---

# Using && Operator

Render only when condition is true.

```tsx
{
  isLoggedIn &&
  <h1>Welcome</h1>;
}
```

---

# Using Ternary Operator

```tsx
{
  isLoggedIn
    ? <h1>Welcome</h1>
    : <h1>Please Login</h1>;
}
```

---

# Using if Statement

```tsx
if (isLoggedIn) {
  return <h1>Welcome</h1>;
}

return <h1>Please Login</h1>;
```

---

# Example

```tsx
"use client";

export default function Home() {

  const isAdmin = true;

  return (
    <>
      {
        isAdmin
          ? <h1>Admin</h1>
          : <h1>User</h1>
      }
    </>
  );
}
```

---

# Question: How to Add a Conditional Layout?

## 20-Second Interview Answer

> A conditional layout can be implemented by checking the current route using `usePathname()` and conditionally rendering layout elements such as Navbar, Sidebar, or Footer.

---

## Example

```tsx
"use client";

import { usePathname }
from "next/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname =
    usePathname();

  const hideLayout =
    pathname === "/login";

  return (
    <>
      {
        !hideLayout &&
        <h2>Navbar</h2>
      }

      {children}

      {
        !hideLayout &&
        <h2>Footer</h2>
      }
    </>
  );
}
```

---

## Result

### URL

```text
/login
```

Output:

```text
Login Page
```

Navbar and Footer hidden.

---

### URL

```text
/about
```

Output:

```text
Navbar
About Page
Footer
```

---

# Common Follow-up Questions

### What is a Conditional Layout?

A layout that changes based on conditions such as route, user role, or authentication status.

### Which hook gives the current route?

```tsx
usePathname()
```

### Which package provides usePathname?

```tsx
next/navigation
```

### Which operator is commonly used for conditional rendering?

```tsx
&&
```

and

```tsx
? :
```

### How can Navbar be hidden on Login Page?

By checking:

```tsx
pathname === "/login"
```

and conditionally rendering the Navbar.

### Can conditional layouts be based on user roles?

```text
Yes
```

Admin, User, Guest, or any custom role can be used.


# Question: What are Dynamic Routes in Next.js?

## 20-Second Interview Answer

> Dynamic Routes in Next.js allow us to create pages with dynamic URL segments. Instead of creating separate pages for each item, we use square brackets such as `[id]` to capture values from the URL.

---

## What are Dynamic Routes?

Dynamic Routes are routes whose URL segments can change dynamically.

Example:

```text
/products/1
/products/2
/products/3
```

Instead of creating separate folders for each product, we create one dynamic route.

---

## Create a Dynamic Route

Folder Structure:

```text
app/
└── products/
    └── [id]/
        └── page.tsx
```

Generated Routes:

```text
/products/1
/products/2
/products/101
/products/abc
```

---

## Dynamic Route Example

```tsx
export default function Product({ params }: { params: { id: string } }) {
  return <h1>Product ID: {params.id}</h1>;
}
```

URL:

```text
/products/101
```

Output:

```text
Product ID: 101
```

---

## Get Dynamic Route Name

Dynamic route values are available through the `params` object.

```tsx
export default function User({ params }: { params: { id: string } }) {
  return <h1>User ID: {params.id}</h1>;
}
```

URL:

```text
/users/500
```

Output:

```text
User ID: 500
```

---

## Multiple Dynamic Routes

Folder Structure:

```text
app/
└── products/
    └── [category]/
        └── [id]/
            └── page.tsx
```

URL:

```text
/products/mobile/101
```

Code:

```tsx
export default function Product({ params }: { params: { category: string; id: string } }) {
  return (
    <>
      <h1>Category: {params.category}</h1>
      <h1>ID: {params.id}</h1>
    </>
  );
}
```

Output:

```text
Category: mobile
ID: 101
```

---

## Navigate to Dynamic Route Using Link

```tsx
import Link from "next/link";

export default function Home() {
  return <Link href="/products/101">Product 101</Link>;
}
```

---

## Navigate Programmatically

```tsx
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/products/101")}>
      Product 101
    </button>
  );
}
```

---

## Dynamic Product List Example

```tsx
import Link from "next/link";

export default function Products() {
  const products = [101, 102, 103];

  return (
    <>
      {products.map((id) => (
        <div key={id}>
          <Link href={`/products/${id}`}>Product {id}</Link>
        </div>
      ))}
    </>
  );
}
```

---

## Real World Use Cases

- Product Details Page
- User Profile Page
- Blog Details Page
- Order Details Page
- Category Details Page

Examples:

```text
/products/101
/users/25
/blog/react-hooks
/orders/5001
```

---

# Common Follow-up Questions

### What are Dynamic Routes?

Routes with dynamic URL segments.

### Which syntax is used for Dynamic Routes?

```text
[id]
```

### How do we access Dynamic Route values?

```tsx
params.id
```

### Can we have multiple Dynamic Parameters?

```text
Yes
```

Example:

```text
[category]/[id]
```

### What is the route for?

```text
app/products/[id]/page.tsx
```

Answer:

```text
/products/101
/products/500
/products/abc
```

### Are Dynamic Routes useful for Product Details Pages?

```text
Yes
```



# Question: What are Catch-all Segments in Next.js?

## 20-Second Interview Answer

> Catch-all Segments allow a route to match multiple URL segments using `[...slug]`. The matched segments are returned as an array inside the `params` object.

---

## What is a Route Segment?

A route segment is a single part of a URL path represented by a folder in the Next.js App Router.

Example URL:

```text
/products/mobile/samsung
```

Segments:

```text
products
mobile
samsung
```

Folder Structure:

```text
app/
└── products/
    └── mobile/
        └── samsung/
            └── page.tsx
```

---

## What is a Catch-all Route?

A Catch-all Route matches one or more URL segments.

Syntax:

```text
[...slug]
```

Folder Structure:

```text
app/
└── docs/
    └── [...slug]/
        └── page.tsx
```

---

## Supported URLs

```text
/docs/react
/docs/react/hooks
/docs/react/hooks/useState
```

---

## Example

```tsx
export default function Docs({ params }: { params: { slug: string[] } }) {
  return <h1>{JSON.stringify(params.slug)}</h1>;
}
```

URL:

```text
/docs/react/hooks
```

Output:

```text
["react","hooks"]
```

---

# Question: How to Get All Segments of Route?

## 20-Second Interview Answer

> In Next.js App Router, we can get all route segments using `useSelectedLayoutSegments()` from `next/navigation`.

---

## Example

```tsx
"use client";

import { useSelectedLayoutSegments } from "next/navigation";

export default function Page() {
  const segments = useSelectedLayoutSegments();

  return <h1>{segments.join("/")}</h1>;
}
```

URL:

```text
/products/mobile/samsung
```

Output:

```text
mobile/samsung
```

---

# Question: How to Get Route Name from URL?

## 20-Second Interview Answer

> We can get the current route path using the `usePathname()` hook from `next/navigation`.

---

## Example

```tsx
"use client";

import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  return <h1>{pathname}</h1>;
}
```

URL:

```text
/products/101
```

Output:

```text
/products/101
```

---

# Catch-all Route Example

Folder Structure:

```text
app/
└── blog/
    └── [...slug]/
        └── page.tsx
```

Code:

```tsx
export default function Blog({ params }: { params: { slug: string[] } }) {
  return (
    <>
      <h1>{params.slug[0]}</h1>
      <h1>{params.slug[1]}</h1>
    </>
  );
}
```

URL:

```text
/blog/react/hooks
```

Output:

```text
react
hooks
```

---

# Optional Catch-all Route

Syntax:

```text
[[...slug]]
```

Folder Structure:

```text
app/
└── docs/
    └── [[...slug]]/
        └── page.tsx
```

Supports:

```text
/docs
/docs/react
/docs/react/hooks
```

---

# Difference Between Dynamic Route and Catch-all Route

| Dynamic Route | Catch-all Route |
|--------------|----------------|
| [id] | [...slug] |
| One Segment | Multiple Segments |
| params.id | params.slug[] |
| /products/101 | /docs/react/hooks |

---

# Common Follow-up Questions

### What is a Route Segment?

A single part of a URL path represented by a folder.

### What is Catch-all Route Syntax?

```text
[...slug]
```

### What does Catch-all Route return?

```tsx
string[]
```

### Which hook gets the current route?

```tsx
usePathname()
```

### Which hook gets route segments?

```tsx
useSelectedLayoutSegments()
```

### What is the difference between `[id]` and `[...slug]`?

`[id]` captures one segment, while `[...slug]` captures multiple segments.

### What is Optional Catch-all Route Syntax?

```text
[[...slug]]
```



# Question: What is a 404 Page in Next.js?

## 20-Second Interview Answer

> A 404 page is an error page displayed when a user tries to access a route or URL that does not exist. In Next.js, a 404 page can be created using `not-found.tsx`.

---

## What is a 404 Page?

A 404 page appears when the requested page cannot be found.

Examples:

```text
/about
/products
/contact
```

Valid Routes.

---

```text
/xyz
/unknown-page
/products/invalid
```

Invalid Routes.

---

Output:

```text
404 - Page Not Found
```

---

# How to Make a Global 404 Page?

Create:

```text
app/not-found.tsx
```

---

## Example

```tsx
export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
```

---

## Folder Structure

```text
app/
│
├── page.tsx
├── about/
│   └── page.tsx
└── not-found.tsx
```

---

If user visits:

```text
/xyz
```

Output:

```text
404 - Page Not Found
```

---

# Custom Global 404 Page

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go Home</Link>
    </>
  );
}
```

---

# Route Specific 404 Page

Create:

```text
app/products/not-found.tsx
```

---

## Folder Structure

```text
app/
└── products/
    ├── page.tsx
    └── not-found.tsx
```

---

## Example

```tsx
export default function NotFound() {
  return <h1>Product Not Found</h1>;
}
```

---

# Trigger Route Specific 404

Use:

```tsx
notFound()
```

Import:

```tsx
import { notFound } from "next/navigation";
```

---

## Example

```tsx
import { notFound } from "next/navigation";

export default function Product({ params }: { params: { id: string } }) {
  const product = null;

  if (!product) {
    notFound();
  }

  return <h1>Product Found</h1>;
}
```

---

Output:

```text
Product Not Found
```

---

# Make 404 for a Segment

Folder Structure:

```text
app/
└── dashboard/
    ├── page.tsx
    └── not-found.tsx
```

---

## dashboard/not-found.tsx

```tsx
export default function NotFound() {
  return <h1>Dashboard Page Not Found</h1>;
}
```

---

This 404 page will be used only for:

```text
/dashboard/*
```

routes.

---

# Global 404 vs Route Specific 404

| Global 404 | Route Specific 404 |
|------------|-------------------|
| app/not-found.tsx | app/products/not-found.tsx |
| Entire Application | Specific Route Segment |
| Used for Unknown Routes | Used for Invalid Data or Segment Routes |

---

# Question: How to Make a 404 Page?

## 20-Second Interview Answer

> Create a `not-found.tsx` file inside the app directory or inside a specific route segment. Next.js automatically renders it when a route is not found.

---

## Global

```text
app/not-found.tsx
```

---

## Segment Specific

```text
app/products/not-found.tsx
```

---

# Question: What is a 404 Page?

## 20-Second Interview Answer

> A 404 page is an error page shown when a user tries to access a URL or webpage that does not exist on the server.

---

# Common Follow-up Questions

### Which file creates a 404 page?

```text
not-found.tsx
```

### Where is the global 404 page created?

```text
app/not-found.tsx
```

### Can we create route-specific 404 pages?

```text
Yes
```

### Which function triggers a 404 page manually?

```tsx
notFound()
```

### From which package is notFound imported?

```tsx
next/navigation
```

### What HTTP status code is used for Page Not Found?

```text
404
```

### Can a custom UI be created for a 404 page?

```text
Yes
```



# Question: What is Middleware in Next.js?

## 20-Second Interview Answer

> Middleware in Next.js is a function that runs before a request reaches a page or route. It is used for authentication, authorization, redirects, URL rewrites, localization, and request processing.

---

## What is Middleware in Next.js Routing?

Middleware executes before a request is completed.

Flow:

```text
Request
   ↓
Middleware
   ↓
Page / Route
   ↓
Response
```

Middleware can:

- Redirect users
- Protect routes
- Check authentication
- Modify requests
- Rewrite URLs
- Add custom logic before rendering pages

---

## Make Middleware in Next.js App

Create a file in the project root:

```text
middleware.js
```

Project Structure:

```text
app/
public/
middleware.js
package.json
```

---

## Basic Middleware Example

```js
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware Executed");

  return NextResponse.next();
}
```

---

## Redirect Example

```js
import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(
    new URL("/login", request.url)
  );
}
```

---

## Protect Route Example

```js
import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}
```

---

# App Config Matcher

The matcher property is used to define which routes should execute the middleware.

---

## Apply Middleware to One Route

```js
export const config = {
  matcher: "/dashboard",
};
```

Middleware runs only for:

```text
/dashboard
```

---

## Apply Middleware to Multiple Routes

```js
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
  ],
};
```

Middleware runs for:

```text
/dashboard
/dashboard/users
/profile
/profile/edit
```

---

## Apply Middleware to All Dashboard Routes

```js
export const config = {
  matcher: "/dashboard/:path*",
};
```

Examples:

```text
/dashboard
/dashboard/users
/dashboard/settings
```

---

## Complete Example

```js
import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
```

---

# Question: What is Middleware in Next.js?

## 20-Second Interview Answer

> Middleware is a function that runs before a request reaches a page or route. It allows us to redirect users, protect routes, modify requests, and execute custom logic.

---

# Question: Where Can We Use Middleware?

## 20-Second Interview Answer

> Middleware is commonly used for authentication, authorization, redirects, URL rewrites, localization, logging, and request validation.

---

## Common Use Cases

- Authentication
- Authorization
- Protected Routes
- Admin Access Control
- Redirect Users
- URL Rewriting
- Localization (i18n)
- Analytics and Logging

---

# Question: How to Apply Middleware in a Specific Route?

## 20-Second Interview Answer

> Use the `matcher` configuration inside `middleware.js` to specify which routes should execute the middleware.

---

## Example

```js
export const config = {
  matcher: "/admin",
};
```

Middleware runs only for:

```text
/admin
```

---

## Multiple Routes Example

```js
export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*",
  ],
};
```

---

# Important Interview Questions

### Why do we use Middleware?

To execute logic before a request reaches a page or route.

### Where is Middleware created?

```text
middleware.js
```

in the project root.

### Which method allows the request to continue?

```js
NextResponse.next()
```

### Which method redirects a request?

```js
NextResponse.redirect()
```

### How do we apply Middleware to specific routes?

Using:

```js
matcher
```

### What does this matcher mean?

```js
"/dashboard/:path*"
```

Answer:

```text
/dashboard
/dashboard/users
/dashboard/settings
```

### Can Middleware be used for authentication?

```text
Yes
```

### Can Middleware modify requests?

```text
Yes
```

### Does Middleware run before or after the page loads?

```text
Before
```

### Common Middleware Use Cases?

- Authentication
- Authorization
- Route Protection
- Redirects
- URL Rewrites
- Localization