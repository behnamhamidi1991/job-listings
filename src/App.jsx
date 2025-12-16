import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";

// Pages
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import JobListings from "./pages/JobListings";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/joblisting",
        element: <JobListings />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
