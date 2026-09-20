# Question: What is Rendering in Next.js?

## 20-Second Interview Answer

> Rendering means converting React components into HTML that can be displayed in the browser. Next.js supports multiple rendering approaches such as Static Rendering (SSG), Dynamic Rendering (SSR), Client-Side Rendering (CSR), and Streaming.

---

## What is Rendering?

Rendering means converting React components into HTML that the browser can display.

Flow:

```text
React Component
      ↓
HTML
      ↓
Browser Display
```

---

## Rendering Environments

Rendering environments refer to where the component code executes.

### 1. Server Environment

- Runs on the server
- Used by Server Components
- Has access to backend resources
- Better for SEO

---

### 2. Client Environment

- Runs in the browser
- Used by Client Components
- Supports events and state
- Can access browser APIs

Examples:

```js
localStorage
window
document
```

---

# Question: Component-Level Client and Server Rendering

## 20-Second Interview Answer

> In Next.js, components are Server Components by default. When we add `"use client"`, the component becomes a Client Component. This allows Next.js to keep most code on the server while sending JavaScript only for interactive components.

---

## Server Component

```js
export default function Home() {
  return <h1>Server Component</h1>;
}
```

---

## Client Component

```js
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

---

# Question: What is Pre-rendering?

## 20-Second Interview Answer

> Pre-rendering means generating the HTML of a page before it is sent to the browser. Instead of letting JavaScript create everything in the browser, Next.js prepares the HTML in advance.

---

## Why Pre-rendering?

Benefits:

- Faster Initial Load
- Better SEO
- Better User Experience
- Faster Content Display

---

# Question: What is Static Generation (SSG)?

## 20-Second Interview Answer

> Static Generation is a pre-rendering technique where Next.js generates HTML during the build process and serves the same HTML to every user.

---

## Flow

```text
Build Time
      ↓
Generate HTML
      ↓
Store HTML
      ↓
Serve to Users
```

---

## Best Use Cases

- Blog Pages
- Documentation Sites
- Marketing Websites
- Landing Pages

---

## Advantages

- Very Fast
- Excellent SEO
- Low Server Load

---

# Question: What is Server-Side Rendering (SSR)?

## 20-Second Interview Answer

> Server-Side Rendering (SSR) generates HTML on the server for every request. It is useful when content changes frequently or depends on the current user.

---

## Flow

```text
Request
    ↓
Server Generates HTML
    ↓
Browser Receives HTML
```

---

## Best Use Cases

- Dashboard
- User Profile
- Stock Prices
- Weather Data
- Real-Time Data

---

## Advantages

- Fresh Data
- Good SEO
- Request-Based Content

---

# Next.js Main Rendering Approaches

## 1. Static Rendering (SSG)

HTML is generated ahead of time.

```text
Build Time
      ↓
HTML Generated
      ↓
Served to All Users
```

Best for:

- Blogs
- Documentation
- Landing Pages

---

## 2. Dynamic Rendering (SSR)

HTML is generated when a request arrives.

```text
Request
    ↓
Server
    ↓
HTML Generated
```

Best for:

- User Dashboards
- Dynamic Data
- Personalized Content

---

## 3. Client-Side Rendering (CSR)

Browser generates the UI using JavaScript.

```text
Browser
   ↓
Fetch Data
   ↓
Render UI
```

Example:

```js
"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return <h1>{users.length}</h1>;
}
```

---

## 4. Streaming

Next.js can send parts of the page as they become ready instead of waiting for the entire page.

Flow:

```text
Request
    ↓
Send Ready Content
    ↓
Send Remaining Content
```

Benefits:

- Faster Perceived Performance
- Better User Experience

---

# Question: Client-Side Rendering vs Pre-rendering

| Client-Side Rendering | Pre-rendering |
|----------------------|---------------|
| HTML Generated in Browser | HTML Generated Before Browser Receives It |
| More JavaScript | Less JavaScript |
| Slower Initial Load | Faster Initial Load |
| Weaker SEO | Better SEO |
| Dynamic UI | Fast Content Delivery |

---

# Question: How to Know the Rendering Type?

## Static Rendering (SSG)

View Page Source:

```text
Right Click
→ View Page Source
```

Content is already present in HTML.

---

## Client-Side Rendering (CSR)

View Page Source:

```text
Loading...
```

or empty container initially.

Content appears only after JavaScript runs.

---

## Server-Side Rendering (SSR)

View Page Source contains fully generated HTML, but content is regenerated for every request.

---

# Question: Why is Rendering Important?

## 20-Second Interview Answer

> Rendering affects performance, SEO, user experience, and page loading speed. Choosing the correct rendering strategy helps optimize application performance.

---

## Benefits

- Faster Loading
- Better SEO
- Better User Experience
- Improved Performance
- Reduced Server Cost

---

# Question: SEO with Rendering

## 20-Second Interview Answer

> SEO works better when search engines receive HTML content directly. Static Rendering and Server-Side Rendering provide HTML immediately, making pages easier for search engines to index.

---

## Good for SEO

```text
SSG
SSR
```

---

## Less SEO Friendly

```text
CSR
```

because content may appear only after JavaScript executes.

---

# Question: How Does SEO Work?

Flow:

```text
Search Engine Bot
         ↓
Reads HTML
         ↓
Indexes Content
         ↓
Shows in Search Results
```

---

## Better SEO Example

```html
<h1>React Interview Questions</h1>
```

HTML is already available.

---

## Poor SEO Example

```html
<div id="root"></div>
```

Content appears later using JavaScript.

---

# Common Interview Questions

### What is Rendering?

Converting React components into HTML.

### What are Rendering Environments?

Server Environment and Client Environment.

### What is Pre-rendering?

Generating HTML before sending it to the browser.

### What is SSG?

HTML generated during build time.

### What is SSR?

HTML generated on every request.

### What is CSR?

Browser generates UI using JavaScript.

### Which rendering method gives best SEO?

```text
SSG and SSR
```

### Which rendering method is fastest?

```text
SSG
```

### Which rendering method gives fresh data every request?

```text
SSR
```

### Which rendering method uses useEffect for data fetching?

```text
CSR
```

### What does "use client" do?

Makes a component a Client Component.

### Why is SEO important?

It helps search engines discover and rank pages.

# Question: Fetch Data in Client Component

## 20-Second Interview Answer

> A Client Component runs in the browser and is created using the `"use client"` directive. Data is typically fetched inside `useEffect()` and stored in state using `useState()`.

---

## What is a Client Component in Next.js?

A Client Component is a component that runs in the browser.

Features:

- Supports useState
- Supports useEffect
- Supports Event Handlers
- Supports Browser APIs
- Supports User Interaction

Examples:

```js
useState
useEffect
localStorage
window
document
```

---

# How to Make a Client Component?

Add:

```js
"use client";
```

at the top of the file.

Example:

```js
"use client";

export default function Home() {
  return <h1>Client Component</h1>;
}
```

---

# Fetch Data in Client Component

## Step 1: Create Component

```js
"use client";

export default function Products() {
  return <h1>Products</h1>;
}
```

---

## Step 2: Add Hooks

```js
"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  return <h1>Products</h1>;
}
```

---

## Step 3: Call API

```js
"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return <h1>Products</h1>;
}
```

---

## Step 4: Render Data

```js
"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      {products.map((item) => (
        <h3 key={item.id}>
          {item.title}
        </h3>
      ))}
    </div>
  );
}
```

---

## Using Async/Await

```js
"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((item) => (
        <h3 key={item.id}>
          {item.title}
        </h3>
      ))}
    </div>
  );
}
```

---

# Flow

```text
Client Component
        ↓
useEffect()
        ↓
API Call
        ↓
Response
        ↓
setState()
        ↓
UI Update
```

---

# Question: What is a Client Component in Next.js?

## 20-Second Interview Answer

> A Client Component is a component that runs in the browser. It supports React hooks, event handlers, browser APIs, and user interactions. It is created using the `"use client"` directive.

---

# Question: How to Make a Client Component?

## 20-Second Interview Answer

> Add `"use client"` at the top of the component file. This tells Next.js to render the component in the browser.

Example:

```js
"use client";

export default function Home() {
  return <h1>Client Component</h1>;
}
```

---

# Question: How to Fetch Data in a Client Component?

## 20-Second Interview Answer

> Data is usually fetched using `fetch()` inside `useEffect()` and stored in state using `useState()`. After the state updates, React re-renders the UI.

Example:

```js
useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data.products));
}, []);
```

---

# Common Interview Questions

### Which hook is commonly used for API calls in Client Components?

```js
useEffect()
```

### Which hook stores API data?

```js
useState()
```

### Can we use useEffect in a Server Component?

```text
No
```

### Can we use useState in a Server Component?

```text
No
```

### Which directive creates a Client Component?

```js
"use client";
```

### Where does a Client Component run?

```text
Browser
```

### When is Client-Side Data Fetching useful?

- Search
- Filters
- User Interaction
- Live Updates
- Dynamic UI


# Question: Fetch Data in Server Component

## 20-Second Interview Answer

> Server Components are the default components in Next.js App Router. They run on the server and can fetch data directly using async/await without using useState or useEffect.

---

## What is a Server Component in Next.js?

A Server Component is a component that runs on the server.

Features:

- Rendered on Server
- Better SEO
- Smaller JavaScript Bundle
- Can Access Backend Resources
- Supports Async/Await

By default, all components are Server Components.

Example:

```js
export default function Home() {
  return <h1>Server Component</h1>;
}
```

---

# Create Product Server Component

```js
export default function Products() {
  return <h1>Products Page</h1>;
}
```

---

# Make Function for API Call

```js
async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return data.products;
}
```

---

# Call API in Server Component

```js
async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return data.products;
}

export default async function Products() {
  const products = await getProducts();

  return <h1>Total Products: {products.length}</h1>;
}
```

---

# Render Data

```js
async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return data.products;
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      {products.map((item) => (
        <h3 key={item.id}>
          {item.title}
        </h3>
      ))}
    </div>
  );
}
```

---

# Direct Fetch Without Separate Function

```js
export default async function Products() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return (
    <div>
      {data.products.map((item) => (
        <h3 key={item.id}>
          {item.title}
        </h3>
      ))}
    </div>
  );
}
```

---

# Flow

```text
Request
   ↓
Server Component
   ↓
API Call
   ↓
Data Received
   ↓
Generate HTML
   ↓
Browser
```

---

# Client Component vs Server Component Data Fetching

| Client Component | Server Component |
|-----------------|------------------|
| useEffect() | async/await |
| useState() | No useState |
| Runs in Browser | Runs on Server |
| More JavaScript | Less JavaScript |
| Data After Page Load | Data Before Page Load |
| Weaker SEO | Better SEO |

---

# Question: What is a Server Component in Next.js?

## 20-Second Interview Answer

> A Server Component is a component that runs on the server. It can fetch data directly, reduce JavaScript sent to the browser, and improve performance and SEO. In the App Router, components are Server Components by default.

---

# Question: How Do We Call an API in a Server Component?

## 20-Second Interview Answer

> We call APIs directly using async/await inside the component or a helper function. Server Components do not require useEffect or useState.

Example:

```js
async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
}
```

---

# Important Points

- Server Components are default in App Router.
- No need for `"use client"`.
- No useState.
- No useEffect.
- Can use async/await directly.
- Better SEO.
- Faster Initial Load.

---

# Common Interview Questions

### What is the default component type in Next.js App Router?

```text
Server Component
```

### Can we use useState in a Server Component?

```text
No
```

### Can we use useEffect in a Server Component?

```text
No
```

### How do we fetch data in a Server Component?

```js
async/await + fetch()
```

### Does a Server Component run in the browser?

```text
No
```

### Which gives better SEO?

```text
Server Components
```

### Which gives a smaller JavaScript bundle?

```text
Server Components
```

### Is "use client" required for a Server Component?

```text
No
```


# Question: Client Component With Server Component

## 20-Second Interview Answer

> In Next.js, Server Components are used for data fetching and backend-related logic, while Client Components are used for interactivity such as events, state, and browser APIs. A Server Component can render a Client Component and pass data to it through props.

---

## Why Do We Need a Client Component Inside a Server Component?

Server Components cannot use:

```js
useState
useEffect
onClick
onChange
localStorage
window
document
```

For interactive features, we need a Client Component.

---

## Common Use Case

```text
Server Component
        ↓
Fetch Data
        ↓
Pass Data
        ↓
Client Component
        ↓
Handle Events
```

---

# Make Components

## Server Component

```js
import UserList from "./UserList";

export default function Home() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Peter" },
  ];

  return <UserList users={users} />;
}
```

---

## Client Component

```js
"use client";

export default function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <h3 key={user.id}>
          {user.name}
        </h3>
      ))}
    </div>
  );
}
```

---

# Fetch Data in Server Component and Pass to Client Component

## Server Component

```js
import ProductList from "./ProductList";

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return data.products;
}

export default async function Products() {
  const products = await getProducts();

  return <ProductList products={products} />;
}
```

---

## Client Component

```js
"use client";

export default function ProductList({ products }) {
  return (
    <div>
      {products.map((item) => (
        <h3 key={item.id}>
          {item.title}
        </h3>
      ))}
    </div>
  );
}
```

---

# Pass Data Between Components

Parent Component:

```js
import User from "./User";

export default function Home() {
  const name = "John";

  return <User name={name} />;
}
```

---

Child Component:

```js
export default function User({ name }) {
  return <h1>{name}</h1>;
}
```

---

# Pass Object Data

Parent:

```js
import User from "./User";

export default function Home() {
  const user = {
    id: 1,
    name: "John",
  };

  return <User user={user} />;
}
```

---

Child:

```js
export default function User({ user }) {
  return <h1>{user.name}</h1>;
}
```

---

# Flow

```text
Server Component
        ↓
Fetch Data
        ↓
Pass Props
        ↓
Client Component
        ↓
Handle Events
        ↓
Update UI
```

---

# Question: How to Perform Events with a Server Component?

## 20-Second Interview Answer

> Server Components cannot handle browser events such as onClick or onChange because they run on the server. To handle events, create a Client Component using `"use client"` and place the event logic there.

---

## Invalid Example

```js
export default function Home() {
  return (
    <button onClick={() => alert("Hello")}>
      Click
    </button>
  );
}
```

Server Components cannot use event handlers.

---

## Correct Example

```js
"use client";

export default function Button() {
  return (
    <button onClick={() => alert("Hello")}>
      Click
    </button>
  );
}
```

---

# Question: Pass Data Between Components

## 20-Second Interview Answer

> Data is passed between components using props. A parent component sends data to a child component through attributes, and the child receives it using props.

---

## Example

Parent:

```js
<User name="John" />
```

Child:

```js
export default function User({ name }) {
  return <h1>{name}</h1>;
}
```

---

# Important Points

- Server Components can render Client Components.
- Client Components cannot import Server Components directly.
- Data is passed using props.
- Event handlers require Client Components.
- Server Components are used for data fetching.
- Client Components are used for interactivity.

---

# Common Interview Questions

### Why use a Client Component inside a Server Component?

For state, events, and browser APIs.

### Can a Server Component use onClick?

```text
No
```

### Can a Server Component use useState?

```text
No
```

### Can a Server Component fetch data?

```text
Yes
```

### How do we pass data between components?

```text
Props
```

### Can a Server Component render a Client Component?

```text
Yes
```

### Which component is better for API calls?

```text
Server Component
```

### Which component is better for events?

```text
Client Component
```

# Question: CSS in Next.js

## 20-Second Interview Answer

> Next.js supports multiple ways of styling applications, including Global CSS, Inline CSS, CSS Modules, and styling with state. Global CSS is usually imported in `app/layout.js`, while component-specific styles can be applied using inline styles or CSS Modules.

---

## Global CSS

Global CSS is applied to the entire application.

File:

```text
app/globals.css
```

---

## Import Global CSS

```js
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

---

## globals.css

```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

h1 {
  color: blue;
}
```

---

## Inline CSS

Inline CSS is written directly inside JSX using the style attribute.

Example:

```js
export default function Home() {
  return (
    <h1 style={{ color: "red", fontSize: "40px" }}>
      Hello Next.js
    </h1>
  );
}
```

---

## Update Style with State

```js
"use client";

import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1 style={{ color }}>
        Hello Next.js
      </h1>

      <button onClick={() => setColor("green")}>
        Change Color
      </button>
    </>
  );
}
```

---

## Toggle Style Example

```js
"use client";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div
        style={{
          backgroundColor: dark ? "black" : "white",
          color: dark ? "white" : "black",
          padding: "20px",
        }}
      >
        Next.js Styling
      </div>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </>
  );
}
```

---

# Question: Can We Write a Style Tag in Next.js?

## 20-Second Interview Answer

> Yes. Since Next.js is based on React, we can use the HTML style tag inside components, but Global CSS or CSS Modules are usually preferred for maintainability.

---

## Example

```js
export default function Home() {
  return (
    <>
      <style>
        {`
          h1{
            color:red;
          }
        `}
      </style>

      <h1>Hello Next.js</h1>
    </>
  );
}
```

---

# Question: How to Update Style with useState?

## 20-Second Interview Answer

> We can store style values in state using useState and update them dynamically through events. When state changes, React re-renders the component and updates the styles.

---

## Example

```js
"use client";

import { useState } from "react";

export default function Home() {
  const [size, setSize] = useState(20);

  return (
    <>
      <h1 style={{ fontSize: `${size}px` }}>
        Hello Next.js
      </h1>

      <button onClick={() => setSize(size + 5)}>
        Increase Size
      </button>
    </>
  );
}
```

---

# Update Multiple Styles

```js
"use client";

import { useState } from "react";

export default function Home() {
  const [style, setStyle] = useState({
    color: "red",
    fontSize: "30px",
  });

  return (
    <>
      <h1 style={style}>
        Next.js CSS
      </h1>

      <button
        onClick={() =>
          setStyle({
            color: "blue",
            fontSize: "50px",
          })
        }
      >
        Change Style
      </button>
    </>
  );
}
```

---

# Common Interview Questions

### Where is Global CSS imported?

```text
app/layout.js
```

### Which prop is used for Inline CSS?

```js
style
```

### Can we write a style tag in Next.js?

```text
Yes
```

### Can styles be updated using useState?

```text
Yes
```

### Which component type is required for useState?

```text
Client Component
```

### Which directive is required?

```js
"use client";
```

### Which styling method affects the entire application?

```text
Global CSS
```


# Question: CSS Modules with Next.js

## 20-Second Interview Answer

> CSS Modules are CSS files that are scoped locally to a component. Unlike normal CSS, class names do not conflict with other components because Next.js generates unique class names automatically.

---

## What is CSS Module?

A CSS Module is a CSS file whose styles are available only inside the component where it is imported.

File Naming Convention:

```text
Home.module.css
Product.module.css
User.module.css
```

---

## Why Use CSS Modules?

Benefits:

- No Class Name Conflicts
- Component-Level Styling
- Better Maintainability
- Reusable Components
- Automatic Unique Class Names

---

# How is CSS Module Different from Normal CSS?

## Normal CSS

```css
.title {
  color: red;
}
```

Problem:

```text
Global Scope
```

The same class can affect multiple components.

---

## CSS Module

```css
.title {
  color: red;
}
```

Benefit:

```text
Local Scope
```

The style is available only in the imported component.

---

# Create CSS Module File

File:

```text
app/home/Home.module.css
```

---

## Home.module.css

```css
.heading {
  color: red;
  font-size: 40px;
}

.btn {
  background-color: blue;
  color: white;
  padding: 10px;
}
```

---

# Apply CSS Module

## Home.js

```js
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.heading}>
        Home Page
      </h1>

      <button className={styles.btn}>
        Click Me
      </button>
    </>
  );
}
```

---

# Multiple CSS Classes

```css
.heading {
  color: red;
}

.bold {
  font-weight: bold;
}
```

---

## Apply Multiple Classes

```js
import styles from "./Home.module.css";

export default function Home() {
  return (
    <h1 className={`${styles.heading} ${styles.bold}`}>
      Hello Next.js
    </h1>
  );
}
```

---

# Multiple CSS Module Files

Folder Structure:

```text
app/
└── home/
    ├── Home.js
    ├── Home.module.css
    └── Button.module.css
```

---

## Button.module.css

```css
.btn {
  background-color: green;
  color: white;
}
```

---

## Home.js

```js
import homeStyles from "./Home.module.css";
import buttonStyles from "./Button.module.css";

export default function Home() {
  return (
    <>
      <h1 className={homeStyles.heading}>
        Home Page
      </h1>

      <button className={buttonStyles.btn}>
        Submit
      </button>
    </>
  );
}
```

---

# Dynamic CSS Module Class

```css
.red {
  color: red;
}

.blue {
  color: blue;
}
```

---

## Example

```js
"use client";

import { useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [active, setActive] = useState(false);

  return (
    <>
      <h1 className={active ? styles.red : styles.blue}>
        Next.js
      </h1>

      <button onClick={() => setActive(!active)}>
        Change Color
      </button>
    </>
  );
}
```

---

# Question: What is CSS Module?

## 20-Second Interview Answer

> CSS Module is a CSS file with local scope. Styles are available only inside the component where they are imported, preventing class name conflicts.

---

# Question: How is Module CSS Different from Normal CSS?

## 20-Second Interview Answer

> Normal CSS is global and can affect multiple components, while CSS Modules are locally scoped and affect only the component that imports them.

---

## Difference

| Normal CSS | CSS Module |
|------------|------------|
| Global Scope | Local Scope |
| Class Name Conflicts Possible | No Conflicts |
| Imported Once | Imported Per Component |
| Less Maintainable in Large Apps | Better Maintainability |

---

# Question: How to Use Module CSS?

## 20-Second Interview Answer

> Create a file with the `.module.css` extension, import it into the component, and apply classes using the imported object.

---

## Example

```js
import styles from "./Home.module.css";

export default function Home() {
  return (
    <h1 className={styles.heading}>
      Hello Next.js
    </h1>
  );
}
```

---

# Common Interview Questions

### What is the extension of CSS Module files?

```text
.module.css
```

### How are CSS Modules imported?

```js
import styles from "./Home.module.css";
```

### How do we apply a CSS Module class?

```js
className={styles.heading}
```

### Are CSS Modules globally scoped?

```text
No
```

### Can multiple CSS Modules be used in one component?

```text
Yes
```

### What is the main advantage of CSS Modules?

```text
No class name conflicts
```

### Are CSS Modules supported by Next.js by default?

```text
Yes
```

# Question: Image Optimization in Next.js

## 20-Second Interview Answer

> Next.js provides the `Image` component to automatically optimize images. It supports lazy loading, responsive sizing, modern image formats, and prevents layout shifts, resulting in better performance and faster page loading.

---

## Why Use Image Component in Next.js?

Benefits:

- Automatic Image Optimization
- Lazy Loading
- Responsive Images
- Faster Loading
- Better Core Web Vitals
- Prevents Layout Shift
- Modern Image Formats

Import:

```js
import Image from "next/image";
```

---

## Import and Use Image

Image in Public Folder:

```text
public/
└── profile.jpg
```

---

Example:

```js
import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={300}
      height={300}
    />
  );
}
```

---

## Use HTML img Tag

```js
export default function Home() {
  return (
    <img
      src="/profile.jpg"
      alt="Profile"
      width="300"
    />
  );
}
```

---

## Config for Image from Other Domain

next.config.js

```js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
```

---

Example:

```js
import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="https://images.unsplash.com/photo-123"
      alt="Photo"
      width={400}
      height={300}
    />
  );
}
```

---

## Important Props in Next Image

```js
src
alt
width
height
fill
priority
quality
sizes
```

---

Example:

```js
<Image
  src="/profile.jpg"
  alt="Profile"
  width={300}
  height={300}
  quality={100}
  priority
/>
```

---

How to optimize Image in Next.js?

> Use the `Image` component from `next/image`. It automatically optimizes images through lazy loading, responsive sizing, compression, and modern image formats.

Example:

```js
import Image from "next/image";

<Image
  src="/profile.jpg"
  alt="Profile"
  width={300}
  height={300}
/>
```

---

Different between Next.js Image and HTML Image?

| Next.js Image | HTML img |
|--------------|----------|
| Automatic Optimization | No Optimization |
| Lazy Loading | Manual |
| Responsive Support | Manual |
| Better Performance | Normal Performance |
| Prevents Layout Shift | Can Cause Layout Shift |
| Recommended in Next.js | Basic HTML Element |

---

How to use public folder images?

Store image inside:

```text
public/
```

Example:

```text
public/profile.jpg
```

Use:

```js
import Image from "next/image";

<Image
  src="/profile.jpg"
  alt="Profile"
  width={300}
  height={300}
/>
```

No need to import the image file.

---

Config for external image URL?

Add allowed domains inside:

```text
next.config.js
```

Example:

```js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
```

Then use:

```js
<Image
  src="https://images.unsplash.com/photo-123"
  alt="Photo"
  width={400}
  height={300}
/>
```

---

# Common Interview Questions

### Which component is used for image optimization?

```js
Image
```

### From which package is Image imported?

```js
next/image
```

### Where should local images be stored?

```text
public/
```

### Which prop is mandatory for accessibility?

```js
alt
```

### Which prop loads image immediately?

```js
priority
```

### Which props define image dimensions?

```js
width
height
```

### Can we use external image URLs?

```text
Yes
```

### Where do we configure external image domains?

```text
next.config.js
```

### Is Next.js Image better than HTML img?

```text
Yes
```

because it provides automatic image optimization and better performance.


# Question: Font Optimization in Next.js

## 20-Second Interview Answer

> Next.js provides built-in font optimization through `next/font`. It automatically downloads, optimizes, and serves fonts, improving performance and preventing layout shifts.

---

## Why Use Next.js Font?

Benefits:

- Automatic Font Optimization
- Better Performance
- Faster Loading
- No Extra Network Requests
- Prevents Layout Shift (CLS)
- Better User Experience

---

## How to Use a Normal Font?

Using Google Fonts CDN:

```js
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
```

Use Font:

```css
body {
  font-family: "Roboto", sans-serif;
}
```

---

## How to Use Next.js Font?

Import Font:

```js
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
```

---

Apply Font:

```js
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
```

---

## Using Multiple Fonts

```js
import { Roboto, Poppins } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
```

Example:

```js
export default function Home() {
  return (
    <>
      <h1 className={poppins.className}>
        Heading
      </h1>

      <p className={roboto.className}>
        Paragraph Text
      </p>
    </>
  );
}
```

---

## Local Font Example

Folder:

```text
public/fonts/
```

Example:

```text
public/fonts/Roboto-Regular.ttf
```

Import:

```js
import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/fonts/Roboto-Regular.ttf",
});
```

Use:

```js
export default function Home() {
  return (
    <h1 className={myFont.className}>
      Hello Next.js
    </h1>
  );
}
```

---

Why use Next.js font?

> Next.js fonts provide automatic optimization, better performance, reduced network requests, and prevent layout shifts. They are recommended over traditional font imports.

---

How to use a normal font?

Add the font link:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
/>
```

Then use:

```css
font-family: "Roboto", sans-serif;
```

---

How to use Next.js font?

Import from:

```js
next/font/google
```

Example:

```js
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});
```

Apply:

```js
<body className={roboto.className}>
```

---

# Common Interview Questions

### Which package is used for Google Fonts in Next.js?

```js
next/font/google
```

### Which package is used for local fonts?

```js
next/font/local
```

### What is the main benefit of Next.js fonts?

```text
Automatic Font Optimization
```

### Can we use Google Fonts without CDN links?

```text
Yes
```

### Which property applies the font?

```js
className
```

### Can we use multiple fonts?

```text
Yes
```

### Does Next.js font help performance?

```text
Yes
```

### Does Next.js font reduce layout shift?

```text
Yes
```

# Question: Dynamic Meta Data in Next.js

## 20-Second Interview Answer

> Dynamic Metadata allows us to generate page metadata such as title and description dynamically based on route parameters or API data. In Next.js, this is done using the `generateMetadata()` function.

---

## What is Dynamic Meta Data?

Dynamic Metadata means generating metadata dynamically instead of hardcoding it.

Examples:

```text
Title
Description
Keywords
Open Graph Tags
```

Example:

```text
Product 1
→ Title: iPhone 16

Product 2
→ Title: Samsung Galaxy
```

Each page gets its own metadata.

---

## Why Do We Need Dynamic Metadata?

Benefits:

- Better SEO
- Dynamic Page Titles
- Dynamic Descriptions
- Better Social Sharing
- Better User Experience

---

## What is generateMetadata?

`generateMetadata()` is a special Next.js function used to create metadata dynamically.

It runs on the server before rendering the page.

---

## Basic Example

```js
export async function generateMetadata() {
  return {
    title: "Home Page",
    description: "Welcome to Home Page",
  };
}

export default function Home() {
  return <h1>Home Page</h1>;
}
```

---

## How to Use generateMetadata?

```js
export async function generateMetadata() {
  return {
    title: "Products",
    description: "All Products List",
  };
}

export default function Products() {
  return <h1>Products</h1>;
}
```

---

## Use generateMetadata with Dynamic Route

Folder Structure:

```text
app/
└── products/
    └── [id]/
        └── page.js
```

---

Example:

```js
export async function generateMetadata({ params }) {
  return {
    title: `Product ${params.id}`,
    description: `Details of Product ${params.id}`,
  };
}

export default function Product({ params }) {
  return (
    <h1>
      Product {params.id}
    </h1>
  );
}
```

---

## Generate Metadata Using API Data

```js
export async function generateMetadata({ params }) {
  const response = await fetch(
    `https://dummyjson.com/products/${params.id}`
  );

  const product = await response.json();

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function Product({ params }) {
  const response = await fetch(
    `https://dummyjson.com/products/${params.id}`
  );

  const product = await response.json();

  return (
    <h1>{product.title}</h1>
  );
}
```

---

## Use generateMetadata with Multiple Routes

Folder Structure:

```text
app/
├── products/
│   └── [id]/
│       └── page.js
│
└── users/
    └── [id]/
        └── page.js
```

---

Products Route:

```js
export async function generateMetadata({ params }) {
  return {
    title: `Product ${params.id}`,
  };
}
```

---

Users Route:

```js
export async function generateMetadata({ params }) {
  return {
    title: `User ${params.id}`,
  };
}
```

---

## Flow

```text
Request
    ↓
generateMetadata()
    ↓
Generate Title & Meta Tags
    ↓
Render Page
    ↓
Send HTML
```

---

How to use dynamic title tag in Next.js?

Use:

```js
generateMetadata()
```

Example:

```js
export async function generateMetadata({ params }) {
  return {
    title: `Product ${params.id}`,
  };
}

export default function Product({ params }) {
  return (
    <h1>
      Product {params.id}
    </h1>
  );
}
```

URL:

```text
/products/10
```

Generated Title:

```text
Product 10
```

---

# Common Interview Questions

### What is Dynamic Metadata?

```text
Metadata generated dynamically based on route parameters or API data.
```

### Which function is used for Dynamic Metadata?

```js
generateMetadata()
```

### Can generateMetadata be async?

```text
Yes
```

### Can we call APIs inside generateMetadata?

```text
Yes
```

### Can we access route params inside generateMetadata?

```text
Yes
```

### What is the main use of generateMetadata?

```text
Dynamic SEO metadata generation.
```

### Can we create dynamic title tags?

```text
Yes
```

### Does generateMetadata run on the server?

```text
Yes
```

### Which metadata properties are commonly used?

```js
title
description
keywords
```

# Question: Script Component in Next.js

## 20-Second Interview Answer

> The Script Component in Next.js is used to load third-party JavaScript files efficiently. It provides better performance and control over when scripts are loaded compared to the normal HTML `<script>` tag.

---

## What is Script Component?

The Script Component is provided by Next.js to load external or custom JavaScript files.

Import:

```js
import Script from "next/script";
```

Benefits:

- Better Performance
- Controlled Loading
- Prevents Blocking Rendering
- Easy Third-Party Integration
- Optimized Script Loading

---

## Why Use Script Component?

Instead of:

```html
<script src="app.js"></script>
```

Use:

```js
<Script src="app.js" />
```

because Next.js can optimize when the script loads.

---

## How to Use It?

Import:

```js
import Script from "next/script";
```

Example:

```js
import Script from "next/script";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <Script src="/custom.js" />
    </>
  );
}
```

---

## Example of External Script

```js
import Script from "next/script";

export default function Home() {
  return (
    <>
      <h1>Google Map Example</h1>

      <Script
        src="https://maps.googleapis.com/maps/api/js"
      />
    </>
  );
}
```

---

## Example of Inline Script

```js
import Script from "next/script";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <Script id="welcome-script">
        {`
          console.log("Welcome to Next.js");
        `}
      </Script>
    </>
  );
}
```

---

## Script Loading Strategies

### beforeInteractive

Loads before page becomes interactive.

```js
<Script
  src="/custom.js"
  strategy="beforeInteractive"
/>
```

Use For:

- Critical Scripts
- Bot Detection
- Security Scripts

---

### afterInteractive

Default strategy.

Loads after page becomes interactive.

```js
<Script
  src="/custom.js"
  strategy="afterInteractive"
/>
```

Use For:

- Analytics
- Tracking Scripts
- Most Third-Party Scripts

---

### lazyOnload

Loads when browser is idle.

```js
<Script
  src="/custom.js"
  strategy="lazyOnload"
/>
```

Use For:

- Chat Widgets
- Ads
- Non-Critical Scripts

---

## Local Script Example

Folder Structure:

```text
public/
└── custom.js
```

custom.js

```js
console.log("Custom Script Loaded");
```

Use:

```js
import Script from "next/script";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <Script src="/custom.js" />
    </>
  );
}
```

---

## Flow

```text
Page Load
    ↓
Script Component
    ↓
Load Script
    ↓
Execute Script
```

---

How to use Script Component?

```js
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="/custom.js" />
    </>
  );
}
```

---

Example of script tag?

Normal HTML:

```html
<script src="app.js"></script>
```

Next.js:

```js
import Script from "next/script";

<Script src="/app.js" />;
```

---

# Common Interview Questions

### Which package provides Script Component?

```js
next/script
```

### Why use Script Component instead of script tag?

```text
Better performance and optimized loading.
```

### Which strategy is the default?

```js
afterInteractive
```

### Which strategy loads scripts before page interaction?

```js
beforeInteractive
```

### Which strategy loads scripts when browser is idle?

```js
lazyOnload
```

### Can we load external scripts?

```text
Yes
```

### Can we load local scripts?

```text
Yes
```

### Can we write inline scripts?

```text
Yes
```

### Where should local JavaScript files be placed?

```text
public/
```

# Question: Loader in Next.js

## 20-Second Interview Answer

> A loader is used to show a loading UI while data is being fetched or a page is being rendered. In Next.js App Router, we can create a `loading.js` file to automatically show a loading screen while a route is loading.

---

## Why Do We Need a Loader in Next.js?

Benefits:

- Better User Experience
- Shows Progress to Users
- Prevents Blank Screen
- Useful During API Calls
- Useful During Page Navigation

---

## Call API and Render Data

```js
async function getProducts() {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();

  return data.products;
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      {products.map((item) => (
        <h3 key={item.id}>
          {item.title}
        </h3>
      ))}
    </div>
  );
}
```

---

## Make Loading Screen

Folder Structure:

```text
app/
└── products/
    ├── page.js
    └── loading.js
```

---

## loading.js

```js
export default function Loading() {
  return <h1>Loading...</h1>;
}
```

When the page is loading, Next.js automatically displays this component.

---

## Loader Example

```js
export default function Loading() {
  return (
    <div>
      <h1>Loading Products...</h1>
    </div>
  );
}
```

---

## Simulate Slow API

```js
async function getProducts() {
  await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );

  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();

  return data.products;
}
```

This delay helps test the loading screen.

---

## page.js

```js
async function getProducts() {
  await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );

  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();

  return data.products;
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      {products.map((item) => (
        <h3 key={item.id}>
          {item.title}
        </h3>
      ))}
    </div>
  );
}
```

---

## loading.js

```js
export default function Loading() {
  return <h1>Loading...</h1>;
}
```

---

## Route Specific Loader

Folder Structure:

```text
app/
├── products/
│   ├── page.js
│   └── loading.js
│
└── users/
    ├── page.js
    └── loading.js
```

Each route can have its own loading screen.

---

## Flow

```text
Request
    ↓
Loading UI
    ↓
API Call
    ↓
Data Received
    ↓
Page Rendered
```

---

How to make a loader in Next.js?

Create:

```text
loading.js
```

Example:

```js
export default function Loading() {
  return <h1>Loading...</h1>;
}
```

---

How to add loading screen in Next.js?

Place a `loading.js` file inside the route folder.

Example:

```text
app/
└── products/
    ├── page.js
    └── loading.js
```

Next.js automatically shows the loading component while the page is loading.

---

# Common Interview Questions

### What is the purpose of a loader?

```text
To show a loading UI while data or pages are loading.
```

### Which file is used for loading UI?

```text
loading.js
```

### Is loading.js automatically detected by Next.js?

```text
Yes
```

### Can each route have its own loader?

```text
Yes
```

### When is loading.js displayed?

```text
While the page or data is loading.
```

### Can loading.js contain JSX?

```text
Yes
```

### Is loading.js a component?

```text
Yes
```

### Does loading.js work with App Router?

```text
Yes
```


# Question: Static Assets in Next.js

## 20-Second Interview Answer

> Static Assets are files that do not change during runtime, such as images, CSS files, JavaScript files, fonts, PDFs, and icons. In Next.js, these files are typically stored inside the `public` folder and can be accessed directly through URLs.

---

## What are Static Assets?

Static Assets are files served directly to the browser without any server-side processing.

Examples:

```text
Images
CSS Files
JavaScript Files
Fonts
PDF Files
Icons
Videos
```

---

## Where are Static Assets Stored?

Folder Structure:

```text
public/
```

Example:

```text
public/
├── logo.png
├── style.css
├── custom.js
├── resume.pdf
└── fonts/
```

---

## How to Use Static Assets in Next.js Code?

Files inside the public folder are accessed using:

```text
/
```

No need to import them.

---

## Use of Images

Folder:

```text
public/
└── logo.png
```

Using Next.js Image:

```js
import Image from "next/image";

export default function Home() {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={200}
      height={200}
    />
  );
}
```

---

Using HTML img:

```js
export default function Home() {
  return (
    <img
      src="/logo.png"
      alt="Logo"
      width="200"
    />
  );
}
```

---

## Use of CSS

Folder:

```text
public/
└── style.css
```

style.css

```css
h1 {
  color: red;
}
```

Use in layout:

```js
export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="/style.css"
      />

      <h1>Hello Next.js</h1>
    </>
  );
}
```

---

## Use of JavaScript

Folder:

```text
public/
└── custom.js
```

custom.js

```js
console.log("Custom JS Loaded");
```

---

Use with Script Component:

```js
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="/custom.js" />

      <h1>Home Page</h1>
    </>
  );
}
```

---

## Use of PDF File

Folder:

```text
public/
└── resume.pdf
```

Link:

```js
export default function Home() {
  return (
    <a href="/resume.pdf">
      Download Resume
    </a>
  );
}
```

---

## Use of Font Files

Folder:

```text
public/
└── fonts/
    └── Roboto-Regular.ttf
```

Can be used through CSS or `next/font/local`.

---

## Flow

```text
public Folder
      ↓
Static Asset
      ↓
URL Generated
      ↓
Browser Access
```

---

What are Static Assets?

> Static Assets are files such as images, CSS, JavaScript, fonts, PDFs, and videos that do not change during runtime and are served directly to the browser.

---

How to use Static Assets in Next.js?

Store files inside:

```text
public/
```

Access them using:

```text
/file-name
```

Example:

```js
<img src="/logo.png" />
```

---

How to use images?

```js
import Image from "next/image";

<Image
  src="/logo.png"
  alt="Logo"
  width={200}
  height={200}
/>
```

---

How to use CSS?

```html
<link
  rel="stylesheet"
  href="/style.css"
/>
```

---

How to use JavaScript?

```js
import Script from "next/script";

<Script src="/custom.js" />;
```

---

# Common Interview Questions

### What are Static Assets?

```text
Files that do not change during runtime.
```

### Where are Static Assets stored?

```text
public/
```

### How do we access a file from public folder?

```text
/file-name
```

### Can images be stored in public folder?

```text
Yes
```

### Can CSS files be stored in public folder?

```text
Yes
```

### Can JavaScript files be stored in public folder?

```text
Yes
```

### Is import required for files inside public folder?

```text
No
```

### Which types of files are commonly stored in public?

```text
Images
Fonts
PDFs
Icons
Videos
JavaScript Files
```


# Question: How to Make Production Build?

## 20-Second Interview Answer

> A production build is an optimized version of a Next.js application created for deployment. It removes unnecessary development features, optimizes code, and improves performance.

---

## What is Build?

A build is the process of converting source code into an optimized version that can run efficiently.

Flow:

```text
Source Code
      ↓
Build Process
      ↓
Optimized Files
      ↓
Deployment
```

---

## Types of Build

### Development Build

Used during development.

Command:

```bash
npm run dev
```

Features:

- Hot Reloading
- Fast Refresh
- Debugging Support
- Not Optimized

---

### Production Build

Used for deployment.

Command:

```bash
npm run build
```

Features:

- Optimized Code
- Better Performance
- Smaller Bundle Size
- Ready for Deployment

---

## What is Production Build?

A production build is the final optimized version of the application that users access after deployment.

Benefits:

- Faster Loading
- Optimized JavaScript
- Optimized CSS
- Better Performance
- Better SEO

---

## How to Make Production Build?

Step 1:

```bash
npm run build
```

or

```bash
npx next build
```

---

Example Output:

```text
Creating an optimized production build...
Compiled successfully
```

---

## How to Run Production Build?

Step 1:

```bash
npm run build
```

Step 2:

```bash
npm run start
```

or

```bash
npx next start
```

---

## Complete Commands

Development:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Production:

```bash
npm run start
```

---

## Production Build Flow

```text
npm run build
        ↓
.next Folder Created
        ↓
Optimized Application
        ↓
npm run start
        ↓
Production Server Starts
```

---

## Build Output Folder

```text
.next/
```

Contains:

```text
Compiled Files
Optimized JavaScript
Optimized CSS
Static Assets
Server Files
```

---

## Check Production Build Locally

Create Build:

```bash
npm run build
```

Run Build:

```bash
npm run start
```

Open:

```text
http://localhost:3000
```

---

What is Build?

> Build is the process of converting application source code into optimized files that can run efficiently.

---

What are the Types of Build?

```text
Development Build
Production Build
```

---

What is Production Build?

> Production Build is the optimized version of the application created for deployment and end users.

---

How to Make Production Build?

```bash
npm run build
```

or

```bash
npx next build
```

---

How to Run Production Build?

```bash
npm run start
```

or

```bash
npx next start
```

---

# Common Interview Questions

### Which command starts the development server?

```bash
npm run dev
```

### Which command creates a production build?

```bash
npm run build
```

### Which command runs a production build?

```bash
npm run start
```

### Which folder is generated after build?

```text
.next
```

### Is production build optimized?

```text
Yes
```

### Why do we create a production build?

```text
Better Performance
Smaller Bundle Size
Deployment Ready
```

### Can we run npm start without build?

```text
No
```

### Which build is used for deployment?

```text
Production Build
```

# Question: Export Static HTML Page with Build

## 20-Second Interview Answer

> Static HTML Export is a feature in Next.js that generates plain HTML files during the build process. These files can be hosted on any static hosting service without requiring a Node.js server.

---

## What is Static HTML?

Static HTML means the page is generated during build time and saved as an HTML file.

Example:

```text
about.html
contact.html
products.html
```

The server does not generate these pages for every request.

---

## Benefits of Static HTML

- Very Fast
- Better SEO
- No Server Required
- Easy Deployment
- Low Hosting Cost

---

## Configure Static Export

next.config.js

```js
const nextConfig = {
  output: "export",
};

module.exports = nextConfig;
```

---

## Make Some Pages

Folder Structure:

```text
app/
├── page.js
├── about/
│   └── page.js
└── contact/
    └── page.js
```

---

## Home Page

```js
export default function Home() {
  return <h1>Home Page</h1>;
}
```

---

## About Page

```js
export default function About() {
  return <h1>About Page</h1>;
}
```

---

## Contact Page

```js
export default function Contact() {
  return <h1>Contact Page</h1>;
}
```

---

## Run Build Command

Create Production Build:

```bash
npm run build
```

or

```bash
npx next build
```

---

## Output Folder

After build:

```text
out/
```

Folder Structure:

```text
out/
├── index.html
├── about.html
├── contact.html
```

or

```text
out/
├── index.html
├── about/
│   └── index.html
└── contact/
    └── index.html
```

Depending on routing structure.

---

## Check Generated HTML

Open:

```text
out/index.html
```

You will see generated HTML.

---

## Run Static HTML

Install Static Server:

```bash
npm install -g serve
```

Run:

```bash
serve out
```

---

Open Browser:

```text
http://localhost:3000
```

---

## Flow

```text
Next.js Pages
       ↓
npm run build
       ↓
Static HTML Generated
       ↓
out Folder
       ↓
Deploy Anywhere
```

---

What is Static HTML?

> Static HTML is HTML generated during build time and served directly to users without server-side rendering.

---

How to Export Static HTML?

Step 1:

```js
// next.config.js

const nextConfig = {
  output: "export",
};

module.exports = nextConfig;
```

Step 2:

```bash
npm run build
```

---

Where are generated files stored?

```text
out/
```

---

How to Run Exported HTML?

```bash
serve out
```

---

# Common Interview Questions

### What is Static HTML?

```text
HTML generated during build time.
```

### Which config enables static export?

```js
output: "export"
```

### Which command generates static files?

```bash
npm run build
```

### Which folder contains exported files?

```text
out
```

### Is Node.js server required after export?

```text
No
```

### Can static export improve performance?

```text
Yes
```

### Can static export improve SEO?

```text
Yes
```

### Which type of websites are best for static export?

```text
Blogs
Documentation Sites
Portfolio Sites
Landing Pages
```


# Question: Static Site Generation (SSG)

## 20-Second Interview Answer

> Static Site Generation (SSG) is a rendering technique where Next.js generates HTML at build time. The generated pages are served directly to users, resulting in excellent performance and SEO.

---

## What is SSG?

SSG stands for:

```text
Static Site Generation
```

In SSG, HTML pages are generated during build time.

Flow:

```text
Build Time
      ↓
Generate HTML
      ↓
Store HTML
      ↓
Serve to Users
```

---

## Benefits of SSG

- Very Fast
- Better SEO
- Low Server Load
- Better Performance
- Cached HTML

---

## Make Service File and Call API

Folder Structure:

```text
app/
services/
└── products.js
```

---

## services/products.js

```js
export async function getProducts() {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();

  return data.products;
}
```

---

## Display Data from API

```js
import { getProducts } from "@/services/products";

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      {products.map((item) => (
        <h3 key={item.id}>
          {item.title}
        </h3>
      ))}
    </div>
  );
}
```

---

# Make Dynamic Routing

Folder Structure:

```text
app/
└── products/
    └── [id]/
        └── page.js
```

---

## Dynamic Route Page

```js
export default function Product({ params }) {
  return (
    <h1>
      Product ID: {params.id}
    </h1>
  );
}
```

---

# Use generateStaticParams

`generateStaticParams()` tells Next.js which dynamic pages should be generated during build time.

---

## Example

```js
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}
```

---

## Complete SSG Example

```js
async function getProducts() {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  const data = await response.json();

  return data.products;
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function Product({
  params,
}) {
  const response = await fetch(
    `https://dummyjson.com/products/${params.id}`
  );

  const product = await response.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
```

---

# Make Build with SSG

Build Command:

```bash
npm run build
```

During build:

```text
generateStaticParams()
          ↓
Generate Pages
          ↓
Create Static HTML
```

---

## Check Build Output

```bash
npm run build
```

Example:

```text
Route (app)

○ /
○ /about
● /products/[id]
```

Generated Static Pages:

```text
/products/1
/products/2
/products/3
```

---

## Flow

```text
API Call
    ↓
generateStaticParams()
    ↓
Build Time
    ↓
Generate HTML
    ↓
Static Pages Ready
```

---

How to call API?

```js
async function getProducts() {
  const response = await fetch(
    "https://dummyjson.com/products"
  );

  return response.json();
}
```

---

How to make SSG Build?

Step 1:

```js
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
  ];
}
```

Step 2:

```bash
npm run build
```

Next.js generates static HTML during build time.

---

Use of generateStaticParams?

> `generateStaticParams()` is used with dynamic routes to tell Next.js which pages should be generated at build time for Static Site Generation.

Example:

```js
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}
```

Generated Pages:

```text
/products/1
/products/2
/products/3
```

---

# Common Interview Questions

### What is SSG?

```text
Static Site Generation
```

### When are SSG pages generated?

```text
Build Time
```

### Which rendering method provides the best performance?

```text
SSG
```

### Which rendering method provides excellent SEO?

```text
SSG
```

### Which function is used for dynamic SSG pages?

```js
generateStaticParams()
```

### Why do we use generateStaticParams?

```text
To generate dynamic routes during build time.
```

### Which command creates SSG pages?

```bash
npm run build
```

### Are SSG pages regenerated on every request?

```text
No
```

### Are SSG pages static?

```text
Yes
```


# Question: Redirection in Next.js

## 20-Second Interview Answer

> Redirection is the process of automatically sending users from one URL to another URL. In Next.js, redirects can be implemented from components, route handlers, middleware, or the configuration file.

---

## What is Redirection?

Redirection means moving a user from one route to another automatically.

Example:

```text
/old-page
      ↓
/new-page
```

---

## Why Use Redirection?

- Old URL Changed
- Authentication
- Authorization
- SEO
- Route Restructuring
- User Navigation

---

# Redirect from Component

Import:

```js
import { redirect } from "next/navigation";
```

Example:

```js
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
}
```

---

## Redirect After Condition

```js
import { redirect } from "next/navigation";

export default function Home() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    redirect("/login");
  }

  return <h1>Dashboard</h1>;
}
```

---

# Redirect from Config File

File:

```text
next.config.js
```

---

Example:

```js
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## Redirect Multiple Routes

```js
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/old-contact",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

---

# Dynamic URL Redirect

Example:

```text
/blog/101
      ↓
/article/101
```

---

## Dynamic Redirect Config

```js
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/:id",
        destination: "/article/:id",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

---

Examples:

```text
/blog/1
      ↓
/article/1

/blog/10
      ↓
/article/10

/blog/100
      ↓
/article/100
```

---

# Dynamic Redirect with Multiple Params

```js
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/product/:category/:id",
        destination: "/shop/:category/:id",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

---

Example:

```text
/product/mobile/10
          ↓
/shop/mobile/10
```

---

## Flow

```text
User Request
      ↓
Redirect Rule
      ↓
New URL
      ↓
Page Loaded
```

---

How many ways do we have to Redirect?

Main ways:

```text
1. redirect() from next/navigation
2. next.config.js redirects()
3. Middleware
```

---

Example using redirect():

```js
import { redirect } from "next/navigation";

redirect("/login");
```

---

Example using next.config.js:

```js
async redirects() {
  return [
    {
      source: "/old-page",
      destination: "/new-page",
      permanent: true,
    },
  ];
}
```

---

How to Redirect dynamic redirection with config file?

Use route parameters.

Example:

```js
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/:id",
        destination: "/article/:id",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

---

Example:

```text
/blog/50
      ↓
/article/50
```

---

# Common Interview Questions

### What is Redirection?

```text
Automatically moving users from one URL to another URL.
```

### Which function is used for component redirection?

```js
redirect()
```

### Which package provides redirect()?

```js
next/navigation
```

### Where do we configure application-level redirects?

```text
next.config.js
```

### Which method is used in next.config.js?

```js
redirects()
```

### Can redirects be dynamic?

```text
Yes
```

### Example of dynamic redirect?

```text
/blog/:id
      ↓
/article/:id
```

### What does permanent: true mean?

```text
301 Permanent Redirect
```

### What does permanent: false mean?

```text
307 Temporary Redirect
```

