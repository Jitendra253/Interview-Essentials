# React Router Protected Routes — Step by Step

This is a small Vite + React Router example with:
- Public `/login` route
- Pathless `ProtectedRoute` wrapper
- `MainLayout` with nested routes using `<Outlet />`
- `/dashboard` and `/projects` protected pages
- `*` catch-all route for unknown URLs
- Redirect from `/` to `/dashboard`

## 1. Requirements

Install Node.js, then open a terminal in this project folder.

## 2. Install dependencies

```bash
npm install
```

## 3. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## 4. Try the routes

1. Visit `/dashboard` while logged out: you should be redirected to `/login`.
2. Enter any non-empty username and log in.
3. Visit `/dashboard` and `/projects`.
4. Visit `/some-unknown-url`: the `NotFound` page should render.
5. Click **Log out**, then try a protected route again.

## 5. How routing works

- `ProtectedRoute.jsx` checks the demo token. If missing, it redirects to `/login`; otherwise, it renders `<Outlet />`.
- In `AppRoutes.jsx`, the route with no `path` is a pathless layout route. It groups its child routes without adding a URL segment.
- `MainLayout.jsx` uses `<Outlet />` to render the matched child page.
- `path: "*"` matches a URL that does not match any other route.

## Important

The login/token logic is for learning only. `localStorage` alone is not secure authentication. In a real app, call your backend login API and use the authentication/session approach your backend supports.
