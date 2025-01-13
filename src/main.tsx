import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages and Layouts
import App from "./App.tsx";
import NotFoundPage from "./pages/NotFoundPage/index.tsx";
import LoginPage from "./pages/Login/index.tsx";
import DashboardPage from "./pages/DashboardPage/index.tsx";
import Profile from "./pages/Profile/index.tsx";
import About from "./pages/About/index.tsx";
import PlayVideo from "./pages/PlayVideo/index.tsx";
import MainDashboard from "./layouts/MainDashboard/index.tsx";
import GeneralLayout from "./layouts/GeneralLayout/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard/",
    element: <MainDashboard />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "video/:id",
        element: <PlayVideo />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
