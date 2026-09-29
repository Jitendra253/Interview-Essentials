# Question: Environment Variables

## 20-Second Interview Answer

> Environment Variables are used to store configuration values such as API URLs, database credentials, and secret keys outside the source code. In Next.js, they are stored in `.env` files and accessed using `process.env`.

---

## Where are Environment Variables?

Environment variables are usually stored in:

```text
.env
.env.local
.env.development
.env.production
```

Example:

```text
NEXT_PUBLIC_API_URL=https://dummyjson.com
DB_PASSWORD=123456
```

---

## Environment Files in Next.js

```text
project/
├── .env
├── .env.local
├── .env.development
├── .env.production
└── app/
```

---

## How to Access Environment Variables?

Example:

```text
NEXT_PUBLIC_API_URL=https://dummyjson.com
```

Access:

```js
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

console.log(apiUrl);
```

---

## Use Environment Variable

.env.local

```text
NEXT_PUBLIC_API_URL=https://dummyjson.com
```

---

page.js

```js
export default function Home() {
  return (
    <h1>
      {process.env.NEXT_PUBLIC_API_URL}
    </h1>
  );
}
```

---

## Use Environment Variable in API Call

.env.local

```text
NEXT_PUBLIC_API_URL=https://dummyjson.com
```

---

page.js

```js
async function getProducts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products`
  );

  return response.json();
}

export default async function Home() {
  const data = await getProducts();

  return (
    <h1>
      Total Products:
      {data.products.length}
    </h1>
  );
}
```

---

## Public vs Private Variables

### Public Variable

```text
NEXT_PUBLIC_API_URL=https://dummyjson.com
```

Can be used in:

```text
Client Components
Server Components
```

---

### Private Variable

```text
DB_PASSWORD=123456
```

Can be used only in:

```text
Server Components
Route Handlers
Server Actions
```

---

## Example

```js
const password =
  process.env.DB_PASSWORD;
```

---

## Restart Required

After changing `.env` files:

```bash
npm run dev
```

Restart the server.

---

## Flow

```text
.env File
      ↓
process.env
      ↓
Application Code
      ↓
Runtime Usage
```

---

How to use different configuration in different build?

Next.js supports multiple environment files.

Development:

```text
.env.development
```

Example:

```text
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

Production:

```text
.env.production
```

Example:

```text
NEXT_PUBLIC_API_URL=https://api.company.com
```

---

When running:

```bash
npm run dev
```

Next.js loads:

```text
.env.development
```

---

When running:

```bash
npm run build
npm run start
```

Next.js loads:

```text
.env.production
```

---

# Common Interview Questions

### What are Environment Variables?

```text
Configuration values stored outside source code.
```

### Which object is used to access environment variables?

```js
process.env
```

### Which file stores environment variables?

```text
.env
```

### Which prefix makes a variable available in the browser?

```text
NEXT_PUBLIC_
```

### Can private variables be accessed in Client Components?

```text
No
```

### Can public variables be accessed in Client Components?

```text
Yes
```

### Which file is used for development configuration?

```text
.env.development
```

### Which file is used for production configuration?

```text
.env.production
```

### Do we need to restart the server after changing env files?

```text
Yes
```


# Question: API Routes

## 20-Second Interview Answer

> API Routes in Next.js allow us to create backend APIs inside the same project. They run on the server and can handle requests such as GET, POST, PUT, and DELETE without requiring a separate Express.js server.

---

## Use of API Routes

API Routes are used to:

- Create Backend APIs
- Handle Form Submission
- Database Operations
- Authentication
- Data Processing
- Secure Server Logic

---

## Make API Route

Folder Structure:

```text
app/
└── api/
    └── users/
        └── route.js
```

---

## Simple GET API

route.js

```js
export async function GET() {
  return Response.json({
    message: "Hello Next.js API",
  });
}
```

---

URL:

```text
http://localhost:3000/api/users
```

Response:

```json
{
  "message": "Hello Next.js API"
}
```

---

## GET API with Array Data

```js
export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "David",
    },
  ]);
}
```

---

## POST API

```js
export async function POST(request) {
  const body = await request.json();

  return Response.json({
    message: "User Created",
    data: body,
  });
}
```

---

## POST Request Body

```json
{
  "name": "John",
  "email": "john@gmail.com"
}
```

---

## Response

```json
{
  "message": "User Created",
  "data": {
    "name": "John",
    "email": "john@gmail.com"
  }
}
```

---

## Dynamic API Route

Folder Structure:

```text
app/
└── api/
    └── users/
        └── [id]/
            └── route.js
```

---

route.js

```js
export async function GET(
  request,
  { params }
) {
  return Response.json({
    id: params.id,
  });
}
```

---

URL:

```text
/api/users/10
```

Response:

```json
{
  "id": "10"
}
```

---

## Test API with Postman

### GET Request

Method:

```text
GET
```

URL:

```text
http://localhost:3000/api/users
```

Click:

```text
Send
```

---

### POST Request

Method:

```text
POST
```

URL:

```text
http://localhost:3000/api/users
```

Headers:

```text
Content-Type: application/json
```

Body:

```json
{
  "name": "John"
}
```

Click:

```text
Send
```

---

## API Methods Supported

```text
GET
POST
PUT
PATCH
DELETE
```

---

## Example PUT API

```js
export async function PUT(request) {
  const body = await request.json();

  return Response.json({
    message: "Updated",
    data: body,
  });
}
```

---

## Example DELETE API

```js
export async function DELETE() {
  return Response.json({
    message: "Deleted",
  });
}
```

---

## Flow

```text
Client
   ↓
API Route
   ↓
Business Logic
   ↓
Response
```

---

How to make API Route with Next.js?

Create:

```text
app/api/users/route.js
```

Example:

```js
export async function GET() {
  return Response.json({
    message: "Hello API",
  });
}
```

---

Use of API Route in Next.js?

> API Routes are used to create backend endpoints inside a Next.js application for handling data, authentication, database operations, and server-side logic.

---

# Common Interview Questions

### What are API Routes?

```text
Backend APIs created inside a Next.js application.
```

### Where are API Routes created?

```text
app/api
```

### What file is required?

```text
route.js
```

### Which HTTP methods are supported?

```text
GET
POST
PUT
PATCH
DELETE
```

### Do API Routes run on the client or server?

```text
Server
```

### Can API Routes access databases?

```text
Yes
```

### Can API Routes be tested with Postman?

```text
Yes
```

### What is the URL pattern for API Routes?

```text
/api/*
```

### Can API Routes be dynamic?

```text
Yes
```

Example:

```text
/api/users/[id]
```

# Question: GET API with Static Data

## 20-Second Interview Answer

> In Next.js API Routes, we can create GET APIs using `route.js`. Static data can be stored in a separate file and returned through API endpoints. Dynamic route parameters can be used to fetch a single record from an array.

---

## API for User List and User Details

Folder Structure:

```text
app/
├── api/
│   └── users/
│       ├── route.js
│       └── [id]/
│           └── route.js
│
└── db/
    └── users.js
```

---

## Make Static DB File

db/users.js

```js
export const users = [
  {
    id: 1,
    name: "John",
    city: "Delhi",
  },
  {
    id: 2,
    name: "David",
    city: "Mumbai",
  },
  {
    id: 3,
    name: "Peter",
    city: "Bangalore",
  },
];
```

---

# Make User List API

File:

```text
app/api/users/route.js
```

---

```js
import { users } from "@/db/users";

export async function GET() {
  return Response.json(users);
}
```

---

URL:

```text
http://localhost:3000/api/users
```

Response:

```json
[
  {
    "id": 1,
    "name": "John",
    "city": "Delhi"
  },
  {
    "id": 2,
    "name": "David",
    "city": "Mumbai"
  }
]
```

---

# Make Single User API

Folder Structure:

```text
app/api/users/[id]/route.js
```

---

## Get Request Params

```js
export async function GET(
  request,
  { params }
) {
  return Response.json({
    id: params.id,
  });
}
```

---

URL:

```text
http://localhost:3000/api/users/2
```

Response:

```json
{
  "id": "2"
}
```

---

# Filter Result from Array

```js
import { users } from "@/db/users";

export async function GET(
  request,
  { params }
) {
  const user = users.find(
    (item) =>
      item.id === Number(params.id)
  );

  return Response.json(user);
}
```

---

URL:

```text
http://localhost:3000/api/users/2
```

Response:

```json
{
  "id": 2,
  "name": "David",
  "city": "Mumbai"
}
```

---

# Handle User Not Found

```js
import { users } from "@/db/users";

export async function GET(
  request,
  { params }
) {
  const user = users.find(
    (item) =>
      item.id === Number(params.id)
  );

  if (!user) {
    return Response.json({
      message: "User Not Found",
    });
  }

  return Response.json(user);
}
```

---

## Test API in Browser

User List:

```text
http://localhost:3000/api/users
```

---

Single User:

```text
http://localhost:3000/api/users/1
```

---

## Test API in Postman

Method:

```text
GET
```

User List URL:

```text
http://localhost:3000/api/users
```

---

Single User URL:

```text
http://localhost:3000/api/users/2
```

---

## Flow

```text
Request
   ↓
API Route
   ↓
Get Params
   ↓
Filter Array
   ↓
Return Result
```

---

How to make API with Next.js API Routes?

Create:

```text
app/api/users/route.js
```

Example:

```js
export async function GET() {
  return Response.json({
    message: "API Working",
  });
}
```

---

API for single result?

```js
import { users } from "@/db/users";

export async function GET(
  request,
  { params }
) {
  const user = users.find(
    (item) =>
      item.id === Number(params.id)
  );

  return Response.json(user);
}
```

---

Get params from URL in Next.js Route?

```js
export async function GET(
  request,
  { params }
) {
  console.log(params.id);
}
```

URL:

```text
/api/users/5
```

Value:

```text
5
```

---

Filter result from array?

```js
const user = users.find(
  (item) =>
    item.id === Number(params.id)
);
```

---

# Common Interview Questions

### Where are API Routes created?

```text
app/api
```

### Which file is required for API Route?

```text
route.js
```

### How do we create a dynamic API Route?

```text
[id]
```

Example:

```text
app/api/users/[id]/route.js
```

### How do we get route parameters?

```js
params.id
```

### Which array method is commonly used for single record search?

```js
find()
```

### Which HTTP method is used for fetching data?

```text
GET
```

### Can API Routes return JSON?

```text
Yes
```

### Can API Routes be tested in Postman?

```text
Yes
```

# Question: GET API with Static Data

## 20-Second Interview Answer

> We can create GET APIs in Next.js using API Routes. Static data can be stored in a separate file and returned through API endpoints. Dynamic route parameters can be used to fetch a single record from an array.

## API for User Detail and User List

Folder Structure:

```text
app/
├── api/
│   └── users/
│       ├── route.js
│       └── [id]/
│           └── route.js
└── db/
    └── users.js
```

## Make a Static DB File

```js
// db/users.js

export const users = [
  { id: 1, name: "John", city: "Delhi" },
  { id: 2, name: "David", city: "Mumbai" },
  { id: 3, name: "Peter", city: "Bangalore" }
];
```

## Make User List API

```js
// app/api/users/route.js

import { users } from "@/db/users";

export async function GET() {
  return Response.json(users);
}
```

URL:

```text
http://localhost:3000/api/users
```

## Make Route for Single User API

```js
// app/api/users/[id]/route.js

import { users } from "@/db/users";

export async function GET(request, { params }) {
  const user = users.find(item => item.id === Number(params.id));

  return Response.json(user);
}
```

URL:

```text
http://localhost:3000/api/users/2
```

## Get Request Params

```js
export async function GET(request, { params }) {
  console.log(params.id);

  return Response.json({ id: params.id });
}
```

URL:

```text
/api/users/10
```

Output:

```text
10
```

## Filter Result

```js
const user = users.find(item => item.id === Number(params.id));
```

## Handle User Not Found

```js
import { users } from "@/db/users";

export async function GET(request, { params }) {
  const user = users.find(item => item.id === Number(params.id));

  if (!user) {
    return Response.json({ message: "User Not Found" });
  }

  return Response.json(user);
}
```

## Test API

User List:

```text
http://localhost:3000/api/users
```

Single User:

```text
http://localhost:3000/api/users/1
```

Postman:

```text
Method: GET
URL: http://localhost:3000/api/users
```

```text
Method: GET
URL: http://localhost:3000/api/users/2
```

## Question: How to make API with Next.js API Routes?

Create:

```text
app/api/users/route.js
```

Example:

```js
export async function GET() {
  return Response.json({ message: "API Working" });
}
```

## Question: API for single result?

```js
import { users } from "@/db/users";

export async function GET(request, { params }) {
  const user = users.find(item => item.id === Number(params.id));

  return Response.json(user);
}
```

## Question: Get params from URL in Next.js Route?

```js
export async function GET(request, { params }) {
  return Response.json({ id: params.id });
}
```

URL:

```text
/api/users/5
```

Output:

```json
{
  "id": "5"
}
```

## Question: Filter result from array?

```js
const user = users.find(item => item.id === Number(params.id));
```

## Common Interview Questions

### How do you create an API Route in Next.js?

```text
Using route.js inside app/api folder.
```

### How do you create a dynamic API Route?

```text
Using [id] folder.
```

### How do you get route parameters?

```js
params.id
```

### Which array method is used for single record search?

```js
find()
```

### Which HTTP method is used to fetch data?

```text
GET
```

### Can API Routes return JSON?

```text
Yes
```

### Can API Routes be tested with Postman?

```text
Yes
```


# Question: Call Next.js APIs

## 20-Second Interview Answer

> Next.js APIs can be called using the `fetch()` function. We can call API Routes from pages or components and display the returned data on the screen.

## Make Routes for Screen

Folder Structure:

```text
app/
├── users/
│   └── page.js
└── users/
    └── [id]/
        └── page.js
```

---

## Call User List API

API:

```text
/api/users
```

Page:

```js
async function getUsers() {
  const response = await fetch("http://localhost:3000/api/users");
  return response.json();
}

export default async function Users() {
  const users = await getUsers();

  return (
    <div>
      {users.map(user => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}
```

---

## Display Data

Output:

```text
John
David
Peter
```

---

## Call User Details API

API:

```text
/api/users/1
```

Page:

```js
async function getUser(id) {
  const response = await fetch(`http://localhost:3000/api/users/${id}`);
  return response.json();
}

export default async function UserDetails({ params }) {
  const user = await getUser(params.id);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.city}</p>
    </div>
  );
}
```

---

## Display User Data

Output:

```text
John
Delhi
```

---

## User List with Links

```js
import Link from "next/link";

async function getUsers() {
  const response = await fetch("http://localhost:3000/api/users");
  return response.json();
}

export default async function Users() {
  const users = await getUsers();

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
```

---

## Dynamic User Details Page

```js
async function getUser(id) {
  const response = await fetch(`http://localhost:3000/api/users/${id}`);
  return response.json();
}

export default async function UserDetails({ params }) {
  const user = await getUser(params.id);

  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.city}</h3>
    </div>
  );
}
```

---

## Flow

```text
Page
  ↓
Fetch API
  ↓
API Route
  ↓
JSON Response
  ↓
Display Data
```

## Question: How to call User List API?

```js
const response = await fetch("http://localhost:3000/api/users");
const users = await response.json();
```

## Question: How to display API data?

```js
{users.map(user => (
  <h3 key={user.id}>{user.name}</h3>
))}
```

## Question: How to call User Details API?

```js
const response = await fetch(`http://localhost:3000/api/users/${id}`);
const user = await response.json();
```

## Question: How to get ID from URL?

```js
params.id
```

## Common Interview Questions

### Which function is used to call APIs?

```js
fetch()
```

### Which method converts response into JSON?

```js
response.json()
```

### How do you get route parameters?

```js
params.id
```

### Can Server Components call APIs?

```text
Yes
```

### Can Next.js APIs be called using fetch?

```text
Yes
```

### How do you display array data?

```js
map()
```

### Can API Routes and UI exist in the same project?

```text
Yes
```

# Question: Write POST API

## 20-Second Interview Answer

> A POST API is used to send data from the client to the server. In Next.js API Routes, we create a `POST()` function, read data using `request.json()`, validate it, and return a response.

## Make POST API Function

Folder Structure:

```text
app/
└── api/
    └── users/
        └── route.js
```

```js
export async function POST(request) {
  const body = await request.json();

  return Response.json({
    message: "User Created",
    data: body
  });
}
```

## Write API Response

```js
export async function POST(request) {
  const body = await request.json();

  return Response.json({
    success: true,
    message: "User Added Successfully"
  });
}
```

Response:

```json
{
  "success": true,
  "message": "User Added Successfully"
}
```

## Get Request Data

Request Body:

```json
{
  "name": "John",
  "email": "john@gmail.com"
}
```

API:

```js
export async function POST(request) {
  const body = await request.json();

  console.log(body.name);
  console.log(body.email);

  return Response.json(body);
}
```

## Apply Validation Checks

```js
export async function POST(request) {
  const body = await request.json();

  if (!body.name) {
    return Response.json({
      success: false,
      message: "Name is Required"
    });
  }

  return Response.json({
    success: true,
    message: "User Created"
  });
}
```

## Multiple Validation Checks

```js
export async function POST(request) {
  const body = await request.json();

  if (!body.name) {
    return Response.json({
      success: false,
      message: "Name is Required"
    });
  }

  if (!body.email) {
    return Response.json({
      success: false,
      message: "Email is Required"
    });
  }

  return Response.json({
    success: true,
    message: "User Created",
    data: body
  });
}
```

## Validation with Status Code

```js
export async function POST(request) {
  const body = await request.json();

  if (!body.name) {
    return Response.json(
      { message: "Name is Required" },
      { status: 400 }
    );
  }

  return Response.json(
    { message: "User Created" },
    { status: 201 }
  );
}
```

## Test with Postman

Method:

```text
POST
```

URL:

```text
http://localhost:3000/api/users
```

Headers:

```text
Content-Type: application/json
```

Body:

```json
{
  "name": "John",
  "email": "john@gmail.com"
}
```

## Flow

```text
Client
  ↓
POST Request
  ↓
request.json()
  ↓
Validation
  ↓
Response
```

## Question: How to make POST API in Next.js?

```js
export async function POST(request) {
  const body = await request.json();

  return Response.json(body);
}
```

## Question: How to get request data?

```js
const body = await request.json();
```

## Question: How to validate request data?

```js
if (!body.name) {
  return Response.json({
    message: "Name is Required"
  });
}
```

## Question: How to send JSON response?

```js
return Response.json({
  message: "Success"
});
```

## Common Interview Questions

### Which function handles POST requests?

```js
POST()
```

### How do you read request body?

```js
await request.json()
```

### Which method sends JSON response?

```js
Response.json()
```

### Which status code is commonly used for successful creation?

```text
201
```

### Which status code is commonly used for validation errors?

```text
400
```

### Can POST APIs receive JSON data?

```text
Yes
```

### Can validation be applied inside API Routes?

```text
Yes
```

# Question: Integrate POST API

## 20-Second Interview Answer

> To integrate a POST API in Next.js, create a form, manage input values using state, call the API using `fetch()`, send data in the request body, and handle the API response.

## Make New Page Route

Folder Structure:

```text
app/
└── add-user/
    └── page.js
```

---

## Make Form and Add Input Fields

```js
"use client";

export default function AddUser() {
  return (
    <form>
      <input type="text" placeholder="Enter Name" />
      <input type="email" placeholder="Enter Email" />
      <button>Add User</button>
    </form>
  );
}
```

---

## Define State for Input Fields

```js
"use client";

import { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />

      <button>Add User</button>
    </form>
  );
}
```

---

## Write Code for Call API

```js
"use client";

import { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const saveUser = async () => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();

    console.log(result);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />

      <button onClick={saveUser}>
        Add User
      </button>
    </div>
  );
}
```

---

## Handle API Response

```js
const saveUser = async () => {
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const result = await response.json();

  if (result.success) {
    alert("User Added Successfully");
  } else {
    alert(result.message);
  }
};
```

---

## Complete Example

```js
"use client";

import { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const saveUser = async () => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();

    alert(result.message);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <br /><br />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />

      <br /><br />

      <button onClick={saveUser}>
        Add User
      </button>
    </div>
  );
}
```

---

## Flow

```text
Input Fields
     ↓
State Update
     ↓
Button Click
     ↓
POST API Call
     ↓
API Response
     ↓
Update UI
```

## Question: How to call POST API?

```js
await fetch("/api/users", {
  method: "POST",
  body: JSON.stringify(data)
});
```

## Question: How to send data to API?

```js
body: JSON.stringify({
  name,
  email
})
```

## Question: How to handle API response?

```js
const result = await response.json();
```

## Question: Why use useState?

```text
To manage form input values.
```

## Common Interview Questions

### Which hook is used to manage form data?

```js
useState()
```

### Which function is used to call API?

```js
fetch()
```

### Which HTTP method is used for creating data?

```text
POST
```

### How do you convert JavaScript object to JSON?

```js
JSON.stringify()
```

### How do you read API response?

```js
response.json()
```

### Can POST API be called from Client Component?

```text
Yes
```

### Why is "use client" required here?

```text
Because useState and events are used.
```

# Question: PUT API with Static Data

## 20-Second Interview Answer

> The PUT method is used to update existing data. In Next.js API Routes, we create a `PUT()` function, get the route parameter using `params`, read the request body using `request.json()`, and update the matching record.

## Use of PUT Method API

PUT API is used for:

- Update Existing Record
- Edit User Information
- Update Product Details
- Update Database Records

Example:

```text
Before:
{id: 1, name: "John"}

After:
{id: 1, name: "Peter"}
```

## Static Data File

```js
// db/users.js

export const users = [
  { id: 1, name: "John", city: "Delhi" },
  { id: 2, name: "David", city: "Mumbai" },
  { id: 3, name: "Peter", city: "Bangalore" }
];
```

## Route Structure

```text
app/
└── api/
    └── users/
        └── [id]/
            └── route.js
```

## Write PUT Method in Route API File

```js
import { users } from "@/db/users";

export async function PUT(request, { params }) {
  const body = await request.json();

  return Response.json({
    id: params.id,
    data: body
  });
}
```

## Get URL Params

URL:

```text
/api/users/2
```

API:

```js
export async function PUT(request, { params }) {
  return Response.json({
    userId: params.id
  });
}
```

Response:

```json
{
  "userId": "2"
}
```

## Get Payload

Request Body:

```json
{
  "name": "Sam",
  "city": "Pune"
}
```

API:

```js
export async function PUT(request, { params }) {
  const body = await request.json();

  return Response.json(body);
}
```

## Update User Data

```js
import { users } from "@/db/users";

export async function PUT(request, { params }) {
  const body = await request.json();

  const userIndex = users.findIndex(
    item => item.id === Number(params.id)
  );

  users[userIndex] = {
    ...users[userIndex],
    ...body
  };

  return Response.json(users[userIndex]);
}
```

## User Not Found

```js
import { users } from "@/db/users";

export async function PUT(request, { params }) {
  const body = await request.json();

  const userIndex = users.findIndex(
    item => item.id === Number(params.id)
  );

  if (userIndex === -1) {
    return Response.json(
      { message: "User Not Found" },
      { status: 404 }
    );
  }

  users[userIndex] = {
    ...users[userIndex],
    ...body
  };

  return Response.json(users[userIndex]);
}
```

## Test with Postman

Method:

```text
PUT
```

URL:

```text
http://localhost:3000/api/users/2
```

Body:

```json
{
  "name": "Sam",
  "city": "Pune"
}
```

Response:

```json
{
  "id": 2,
  "name": "Sam",
  "city": "Pune"
}
```

## Flow

```text
PUT Request
     ↓
Get Params
     ↓
Get Request Body
     ↓
Find Record
     ↓
Update Record
     ↓
Return Response
```

## Question: What is PUT API?

> PUT API is used to update existing data on the server.

## Question: How to write PUT method in Next.js?

```js
export async function PUT(request, { params }) {
  const body = await request.json();

  return Response.json(body);
}
```

## Question: How to get URL params?

```js
params.id
```

URL:

```text
/api/users/5
```

Output:

```text
5
```

## Question: How to get payload?

```js
const body = await request.json();
```

## Common Interview Questions

### Which method is used to update data?

```text
PUT
```

### How do you read request body?

```js
await request.json()
```

### How do you get route parameters?

```js
params.id
```

### Which array method finds index of a record?

```js
findIndex()
```

### Which status code is used for record not found?

```text
404
```

### Can PUT API receive JSON data?

```text
Yes
```

### Can PUT API update existing records?

```text
Yes
```

# Question: Integrate PUT API

## 20-Second Interview Answer

> To integrate a PUT API, create an edit page, get the current user details, populate the form using state, update the values, call the PUT API using `fetch()`, and handle the response.

## Make New Route for PUT API

Folder Structure:

```text
app/
└── edit-user/
    └── [id]/
        └── page.js
```

URL:

```text
/edit-user/1
```

## Make Link from User List Page

```js
import Link from "next/link";

{users.map(user => (
  <div key={user.id}>
    <h3>{user.name}</h3>

    <Link href={`/edit-user/${user.id}`}>
      Edit
    </Link>
  </div>
))}
```

## Create Form and Define State

```js
"use client";

import { useState } from "react";

export default function EditUser() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City"
      />
    </div>
  );
}
```

## Get Current User Details

```js
"use client";

import { useEffect, useState } from "react";

export default function EditUser({ params }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await fetch(`/api/users/${params.id}`);
    const user = await response.json();

    setName(user.name);
    setCity(user.city);
  };
}
```

## Update Details and Call API

```js
const updateUser = async () => {
  const response = await fetch(`/api/users/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      city
    })
  });

  const result = await response.json();

  alert("User Updated");
};
```

## Complete Example

```js
"use client";

import { useEffect, useState } from "react";

export default function EditUser({ params }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await fetch(`/api/users/${params.id}`);
    const user = await response.json();

    setName(user.name);
    setCity(user.city);
  };

  const updateUser = async () => {
    const response = await fetch(`/api/users/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, city })
    });

    const result = await response.json();

    alert(result.name + " Updated");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={updateUser}>
        Update User
      </button>
    </div>
  );
}
```

## Flow

```text
User List
    ↓
Click Edit
    ↓
Load User Details
    ↓
Update Form
    ↓
PUT API Call
    ↓
Response
```

## Question: How to create edit page?

```text
app/edit-user/[id]/page.js
```

## Question: How to get current user details?

```js
const response = await fetch(`/api/users/${params.id}`);
const user = await response.json();
```

## Question: How to update data?

```js
await fetch(`/api/users/${params.id}`, {
  method: "PUT",
  body: JSON.stringify(data)
});
```

## Question: Which hook is used to load existing data?

```js
useEffect()
```

## Common Interview Questions

### Which HTTP method is used for update?

```text
PUT
```

### How do you prefill form data?

```text
Fetch existing data and set state.
```

### Which hook is used to manage form fields?

```js
useState()
```

### Which hook is used to fetch data on page load?

```js
useEffect()
```

### How do you send updated data?

```js
fetch(url, {
  method: "PUT",
  body: JSON.stringify(data)
});
```

### How do you navigate to edit page?

```js
<Link href={`/edit-user/${id}`}>Edit</Link>
```



# Question: Make DELETE API

## 20-Second Interview Answer

> DELETE API is used to remove data from the server. In Next.js API Routes, we create a `DELETE()` function, get the ID from URL params, find the record, delete it, and return a response.

## Use of DELETE API

- Delete User
- Delete Product
- Delete Order
- Remove Record from Database

## Static Data File

```js
// db/users.js

export const users = [
  { id: 1, name: "John", city: "Delhi" },
  { id: 2, name: "David", city: "Mumbai" },
  { id: 3, name: "Peter", city: "Bangalore" }
];
```

## Route Structure

```text
app/
└── api/
    └── users/
        └── [id]/
            └── route.js
```

## Make API Route Function

```js
export async function DELETE(request, { params }) {
  return Response.json({
    message: "Delete API Working"
  });
}
```

## Get ID from URL

URL:

```text
/api/users/2
```

API:

```js
export async function DELETE(request, { params }) {
  return Response.json({
    id: params.id
  });
}
```

Response:

```json
{
  "id": "2"
}
```

## Write Code for Delete API

```js
import { users } from "@/db/users";

export async function DELETE(request, { params }) {
  const userIndex = users.findIndex(
    item => item.id === Number(params.id)
  );

  users.splice(userIndex, 1);

  return Response.json({
    message: "User Deleted"
  });
}
```

## Handle User Not Found

```js
import { users } from "@/db/users";

export async function DELETE(request, { params }) {
  const userIndex = users.findIndex(
    item => item.id === Number(params.id)
  );

  if (userIndex === -1) {
    return Response.json(
      { message: "User Not Found" },
      { status: 404 }
    );
  }

  users.splice(userIndex, 1);

  return Response.json({
    message: "User Deleted Successfully"
  });
}
```

## Return Deleted User

```js
import { users } from "@/db/users";

export async function DELETE(request, { params }) {
  const userIndex = users.findIndex(
    item => item.id === Number(params.id)
  );

  const deletedUser = users[userIndex];

  users.splice(userIndex, 1);

  return Response.json(deletedUser);
}
```

## Test with Postman

Method:

```text
DELETE
```

URL:

```text
http://localhost:3000/api/users/2
```

Response:

```json
{
  "message": "User Deleted Successfully"
}
```

## Flow

```text
DELETE Request
      ↓
Get ID from URL
      ↓
Find Record
      ↓
Delete Record
      ↓
Return Response
```

## Question: How to make DELETE API in Next.js?

```js
export async function DELETE(request, { params }) {
  return Response.json({
    message: "Deleted"
  });
}
```

## Question: How to get ID from URL?

```js
params.id
```

URL:

```text
/api/users/5
```

Output:

```text
5
```

## Question: How to delete record from array?

```js
users.splice(index, 1);
```

## Common Interview Questions

### Which HTTP method is used to delete data?

```text
DELETE
```

### How do you get route params?

```js
params.id
```

### Which array method is used to find a record index?

```js
findIndex()
```

### Which array method is used to remove an item?

```js
splice()
```

### Which status code is commonly used for record not found?

```text
404
```

### Can DELETE API receive URL parameters?

```text
Yes
```

### Can DELETE API return JSON response?

```text
Yes
```

# Question: Integrate DELETE API

## 20-Second Interview Answer

> To integrate a DELETE API, we usually create a separate Client Component because delete operations require click events. The component calls the DELETE API using `fetch()` and updates the UI after successful deletion.

## Why Need Delete Component?

- Server Components cannot handle click events.
- DELETE operation requires user interaction.
- Client Components support events and API calls.

## Make Component for Delete User

Folder Structure:

```text
app/
├── users/
│   └── page.js
└── components/
    └── DeleteUser.js
```

## Delete User Component

```js
"use client";

export default function DeleteUser({ id }) {
  const deleteUser = async () => {
    await fetch(`/api/users/${id}`, {
      method: "DELETE"
    });

    alert("User Deleted");
  };

  return (
    <button onClick={deleteUser}>
      Delete
    </button>
  );
}
```

## Use Component in User List

```js
import DeleteUser from "@/components/DeleteUser";

async function getUsers() {
  const response = await fetch("http://localhost:3000/api/users");
  return response.json();
}

export default async function Users() {
  const users = await getUsers();

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>

          <DeleteUser id={user.id} />
        </div>
      ))}
    </div>
  );
}
```

## Call DELETE API Method

```js
const deleteUser = async () => {
  const response = await fetch(`/api/users/${id}`, {
    method: "DELETE"
  });

  const result = await response.json();

  alert(result.message);
};
```

## Handle API Response

```js
const deleteUser = async () => {
  const response = await fetch(`/api/users/${id}`, {
    method: "DELETE"
  });

  const result = await response.json();

  if (response.ok) {
    alert("User Deleted Successfully");
  } else {
    alert(result.message);
  }
};
```

## Add Confirmation

```js
const deleteUser = async () => {
  const confirmDelete = confirm(
    "Are you sure?"
  );

  if (!confirmDelete) return;

  await fetch(`/api/users/${id}`, {
    method: "DELETE"
  });

  alert("Deleted");
};
```

## Complete Example

```js
"use client";

export default function DeleteUser({ id }) {
  const deleteUser = async () => {
    const confirmDelete = confirm(
      "Are you sure?"
    );

    if (!confirmDelete) return;

    const response = await fetch(
      `/api/users/${id}`,
      {
        method: "DELETE"
      }
    );

    const result = await response.json();

    alert(result.message);
  };

  return (
    <button onClick={deleteUser}>
      Delete User
    </button>
  );
}
```

## Flow

```text
Click Delete
      ↓
Client Component
      ↓
DELETE API Call
      ↓
API Response
      ↓
Update UI
```

## Question: Why do we need Delete Component?

> Delete operations require click events. Events can only be handled in Client Components, so a separate Delete Component is commonly used.

## Question: How to call DELETE API?

```js
await fetch(`/api/users/${id}`, {
  method: "DELETE"
});
```

## Question: Why use "use client"?

```text
Because onClick event is used.
```

## Common Interview Questions

### Which HTTP method is used for delete?

```text
DELETE
```

### Why is a Client Component required?

```text
Because delete action uses click events.
```

### How do you call DELETE API?

```js
fetch(url, {
  method: "DELETE"
});
```

### Which prop is commonly passed to Delete Component?

```js
id
```

### Can Server Components handle button click events?

```text
No
```

### Which directive makes a component a Client Component?

```js
"use client"
```

# Question: Catch All API Routes

## 20-Second Interview Answer

> A Catch-All API Route is a dynamic route that captures multiple URL segments into a single array parameter. In Next.js App Router, it is created using `[...params]` and is useful when the number of URL segments is unknown.

## What does mean by Catch-All Routes?

A Catch-All Route matches multiple URL segments.

Example:

```text
/api/users/1
/api/users/1/profile
/api/users/1/profile/settings
```

All these URLs can be handled by a single route.

## Make Route

Folder Structure:

```text
app/
└── api/
    └── users/
        └── [...params]/
            └── route.js
```

## Write Code for Catch-All Route API

```js
export async function GET(request, { params }) {
  return Response.json({
    params: params.params
  });
}
```

URL:

```text
/api/users/1
```

Response:

```json
{
  "params": ["1"]
}
```

## Multiple Segments Example

URL:

```text
/api/users/1/profile
```

Response:

```json
{
  "params": ["1", "profile"]
}
```

URL:

```text
/api/users/1/profile/settings
```

Response:

```json
{
  "params": ["1", "profile", "settings"]
}
```

## Access Individual Segments

```js
export async function GET(request, { params }) {
  const segments = params.params;

  return Response.json({
    first: segments[0],
    second: segments[1]
  });
}
```

URL:

```text
/api/users/10/profile
```

Response:

```json
{
  "first": "10",
  "second": "profile"
}
```

## Example with Join

```js
export async function GET(request, { params }) {
  return Response.json({
    path: params.params.join("/")
  });
}
```

URL:

```text
/api/users/10/profile/settings
```

Response:

```json
{
  "path": "10/profile/settings"
}
```

## Flow

```text
Request URL
      ↓
Catch-All Route
      ↓
Array of Segments
      ↓
Process Data
      ↓
Return Response
```

## Question: What is Catch-All API Route?

> A Catch-All API Route is a dynamic route that captures all URL segments into an array using `[...params]`.

## Question: How to create Catch-All Route?

```text
app/api/users/[...params]/route.js
```

## Question: How to get all segments?

```js
params.params
```

## Example

URL:

```text
/api/users/1/profile/settings
```

Output:

```js
["1", "profile", "settings"]
```

## Common Interview Questions

### Which syntax is used for Catch-All Route?

```text
[...params]
```

### What is returned from a Catch-All Route?

```text
Array of URL segments.
```

### How do you access the segments?

```js
params.params
```

### URL:

```text
/api/users/1/profile
```

Output:

```js
["1", "profile"]
```

### Can Catch-All Routes handle multiple URLs?

```text
Yes
```

### What is the main use of Catch-All Routes?

```text
Handling unknown or variable URL segments.
```

# Question: How to use MongoDB Atlas

## 20-Second Interview Answer

> MongoDB Atlas is a cloud-based database service provided by MongoDB. It allows us to create clusters, databases, and collections without installing MongoDB locally. Applications can connect to Atlas using a connection string.

## What is MongoDB Atlas?

> MongoDB Atlas is the official cloud database platform for MongoDB. It manages hosting, scaling, security, backups, and monitoring.

Benefits:

- Cloud Database
- Automatic Backups
- High Availability
- Easy Scaling
- Secure Access

## Make an Account on MongoDB Atlas

1. Open:

```text
https://www.mongodb.com/atlas
```

2. Click:

```text
Try Free
```

3. Create Account

4. Verify Email

5. Login

## Make Project and Cluster

### Create Project

```text
Projects
   ↓
New Project
   ↓
Enter Project Name
   ↓
Create Project
```

Example:

```text
User Management Project
```

### Create Cluster

```text
Build a Database
   ↓
Choose FREE Plan
   ↓
Select Cloud Provider
   ↓
Create Cluster
```

Example:

```text
Cluster0
```

## What is Cluster?

> A Cluster is a group of MongoDB servers that store and manage your databases. In MongoDB Atlas, a cluster is the main resource where databases are created and hosted.

Example:

```text
Cluster0
 ├── userDB
 ├── productDB
 └── orderDB
```

## Make Database and Collection

Open:

```text
Cluster
   ↓
Browse Collections
   ↓
Add My Own Data
```

Create Database:

```text
Database Name: companyDB
```

Create Collection:

```text
Collection Name: users
```

Result:

```text
companyDB
   └── users
```

## What is Collection?

> A Collection is a group of MongoDB documents. It is similar to a table in SQL databases.

Example:

```text
users
```

Documents:

```json
{
  "name": "John",
  "city": "Delhi"
}
```

```json
{
  "name": "David",
  "city": "Mumbai"
}
```

## Add Data in Collection

Open:

```text
users Collection
   ↓
Insert Document
```

Example:

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "city": "Delhi"
}
```

Click:

```text
Insert
```

## View Documents

```text
companyDB
   ↓
users
   ↓
Documents
```

Example:

```json
{
  "_id": "68c123abc",
  "name": "John",
  "email": "john@gmail.com"
}
```

## Get Connection String

```text
Cluster
   ↓
Connect
   ↓
Drivers
```

Example:

```text
mongodb+srv://username:password@cluster0.mongodb.net/companyDB
```

## Flow

```text
MongoDB Atlas
      ↓
Project
      ↓
Cluster
      ↓
Database
      ↓
Collection
      ↓
Documents
```

## Question: What is Cluster in MongoDB?

> A Cluster is a group of MongoDB servers that host databases and collections in MongoDB Atlas.

Example:

```text
Cluster0
```

## Question: What is Collection?

> A Collection is a group of documents in MongoDB. It is similar to a table in a relational database.

Example:

```text
users
products
orders
```

## Question: What is MongoDB Atlas?

> MongoDB Atlas is MongoDB's cloud database platform used to create and manage MongoDB databases online.

## Common Interview Questions

### What is MongoDB Atlas?

```text
MongoDB cloud database service.
```

### What is a Cluster?

```text
A group of MongoDB servers that host databases.
```

### What is a Database?

```text
A container that holds collections.
```

### What is a Collection?

```text
A group of MongoDB documents.
```

### What is a Document?

```text
A JSON-like record stored in MongoDB.
```

### Is MongoDB Atlas free?

```text
Yes, it provides a free tier.
```

### How do applications connect to Atlas?

```text
Using a MongoDB connection string.
```

# Question: Connect MongoDB and Next.js

## 20-Second Interview Answer

> To connect MongoDB Atlas with Next.js, install the MongoDB driver, store credentials in an `.env.local` file, create a database connection file, and use the connection inside API Routes or Server Components to fetch data.

## Install MongoDB Package

```bash
npm install mongodb
```

## Make Environment File

File:

```text
.env.local
```

Add MongoDB Connection String:

```text
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/companyDB?retryWrites=true&w=majority
```

## Make DB Connection

Folder Structure:

```text
lib/
└── mongodb.js
```

## mongodb.js

```js
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectDB() {
  await client.connect();
  return client.db();
}
```

## Get Data from MongoDB

Folder Structure:

```text
app/
└── api/
    └── users/
        └── route.js
```

## API Route

```js
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  const db = await connectDB();

  const users = await db
    .collection("users")
    .find()
    .toArray();

  return Response.json(users);
}
```

## Sample Data in MongoDB

```json
{
  "name": "John",
  "city": "Delhi"
}
```

```json
{
  "name": "David",
  "city": "Mumbai"
}
```

## API Response

```json
[
  {
    "_id": "68c123",
    "name": "John",
    "city": "Delhi"
  },
  {
    "_id": "68c124",
    "name": "David",
    "city": "Mumbai"
  }
]
```

## Get Data in Next.js Page

```js
async function getUsers() {
  const response = await fetch(
    "http://localhost:3000/api/users"
  );

  return response.json();
}

export default async function Users() {
  const users = await getUsers();

  return (
    <div>
      {users.map(user => (
        <h3 key={user._id}>
          {user.name}
        </h3>
      ))}
    </div>
  );
}
```

## Make Sample API with DB Data

```js
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  const db = await connectDB();

  const products = await db
    .collection("products")
    .find()
    .toArray();

  return Response.json(products);
}
```

URL:

```text
/api/products
```

## Flow

```text
Next.js
    ↓
MongoDB Driver
    ↓
MongoDB Atlas
    ↓
Collection
    ↓
Documents
    ↓
JSON Response
```

## Question: How to store MongoDB credentials?

```text
.env.local
```

Example:

```text
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/companyDB
```

## Question: How to connect MongoDB in Next.js?

```js
import { MongoClient } from "mongodb";

const client = new MongoClient(
  process.env.MONGODB_URI
);
```

## Question: How to get data from MongoDB?

```js
const users = await db
  .collection("users")
  .find()
  .toArray();
```

## Question: How to create API with MongoDB data?

```js
export async function GET() {
  const db = await connectDB();

  const users = await db
    .collection("users")
    .find()
    .toArray();

  return Response.json(users);
}
```

## Common Interview Questions

### Which package is used to connect MongoDB?

```bash
mongodb
```

### Where do we store connection strings?

```text
.env.local
```

### Which class is used to create connection?

```js
MongoClient
```

### Which method returns a collection?

```js
db.collection()
```

### Which method fetches all records?

```js
find().toArray()
```

### Can API Routes access MongoDB?

```text
Yes
```

### Can Server Components access MongoDB?

```text
Yes
```