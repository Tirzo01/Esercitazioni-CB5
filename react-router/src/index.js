import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { UsersList } from "./routes/usersList/UsersList";
import { Users } from "./routes/users/Users";
import { PostsList } from "./routes/postsList/PostsList";
import { Posts } from "./routes/posts/Posts";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/users",
//     element: <UsersList />,
//   },
//   {
//     path: "/users/:userID",
//     element: <Users />,
//   },
//   {
//     path: "/posts",
//     element: <PostsList />,
//   },
//   {
//     path: "/posts/:postID",
//     element: <Posts />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}></Route>
      <Route path="users" element={<UsersList />}></Route>
      <Route path="users/:userID" element={<Users />}></Route>
      <Route path="posts" element={<PostsList />}></Route>
      <Route path="posts/:postID" element={<Posts />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
