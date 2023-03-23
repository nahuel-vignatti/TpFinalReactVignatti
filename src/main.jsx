import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ItemRoot from "./routes/itemRoot";
import "./index.css";
import Layout from "./components/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomProvider from "./context";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/category/:id",
        element: <Root />,
      },
      {
        path: "/item/:id",
        element: <ItemRoot />,
      },
      {
        path: "/cart",
        element: <div>Hello world!</div>,
      },
      {
        path: "/checkout",
        element: <div>Hello world!</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);
